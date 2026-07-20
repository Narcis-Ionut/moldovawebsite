import type { APIRoute } from "astro";
import {
  buildContactEmails,
  type ContactLocale,
} from "../../lib/contact-email";

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function extractEmailAddress(input: string) {
  const match = input.match(/<([^>]+)>/);
  return (match ? match[1] : input).trim();
}

function extractEmailName(input: string) {
  const bracketIndex = input.indexOf("<");
  if (bracketIndex === -1) return undefined;

  const name = input.slice(0, bracketIndex).trim().replace(/^"|"$/g, "");
  return name || undefined;
}

function getEmailErrorDetail(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
      ? error.code
      : undefined;

  return code ? `${code}: ${message}` : message;
}

function cleanSingleLine(value: FormDataEntryValue | null) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanMultiline(value: FormDataEntryValue | null) {
  return String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
}

function normalizeLocale(value: string): ContactLocale {
  return value.toLowerCase() === "ru" ? "ru" : "ro";
}

function isValidEmail(value: string) {
  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const env = locals.runtime.env;

    if (!env.EMAIL)
      return json({ ok: false, error: "missing_binding:EMAIL" }, 500);
    if (!env.CONTACT_FROM)
      return json({ ok: false, error: "missing_env:CONTACT_FROM" }, 500);
    if (!env.CONTACT_TO)
      return json({ ok: false, error: "missing_env:CONTACT_TO" }, 500);
    if (!env.TURNSTILE_SECRET_KEY)
      return json(
        { ok: false, error: "missing_env:TURNSTILE_SECRET_KEY" },
        500
      );

    const brandReplyTo = env.REPLY_TO || env.CONTACT_TO.split(",")[0].trim();
    const brandReplyToAddress = extractEmailAddress(brandReplyTo);
    const contactFromAddress = extractEmailAddress(env.CONTACT_FROM);
    const contactFromName = extractEmailName(env.CONTACT_FROM);
    const contactFrom = contactFromName
      ? { email: contactFromAddress, name: contactFromName }
      : contactFromAddress;

    const contentType = (
      request.headers.get("content-type") || ""
    ).toLowerCase();
    let form: FormData;

    if (contentType.includes("application/json")) {
      const data = await request.json();
      form = new FormData();
      for (const [key, value] of Object.entries(data || {})) {
        form.append(key, String(value));
      }
    } else {
      form = await request.formData();
    }

    if (form.get("website")) {
      return json({ ok: true, ignored: true });
    }

    const consent = cleanSingleLine(form.get("consent")).toLowerCase();
    if (!["on", "true", "1", "yes"].includes(consent)) {
      return json({ ok: false, error: "consent_required" }, 400);
    }

    const token = cleanSingleLine(form.get("cf-turnstile-response"));
    if (!token) return json({ ok: false, error: "missing_captcha" }, 400);

    const ip = request.headers.get("CF-Connecting-IP") || "";
    const verificationBody = new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
    });
    if (ip) verificationBody.set("remoteip", ip);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verificationBody,
      }
    );
    const verify = (await verifyRes.json().catch(() => ({}))) as {
      success?: boolean;
    };
    if (!verify.success) {
      return json({ ok: false, error: "captcha_failed" }, 400);
    }

    const rawName = String(form.get("name") || "");
    const rawEmail = String(form.get("email") || "");
    const rawPhone = String(form.get("phone") || "");
    const rawSubject = String(form.get("subject") || "");
    const rawProjectType = String(form.get("project_type") || "");
    const rawBudget = String(form.get("budget") || "");
    const rawMessage = String(form.get("message") || "");
    const rawLang = String(form.get("lang") || "ro");

    const limits = [
      [rawName, 120],
      [rawEmail, 254],
      [rawPhone, 60],
      [rawSubject, 180],
      [rawProjectType, 120],
      [rawBudget, 16],
      [rawMessage, 6000],
      [rawLang, 8],
    ] as const;

    if (limits.some(([value, limit]) => value.length > limit)) {
      return json({ ok: false, error: "field_too_long" }, 400);
    }

    const locale = normalizeLocale(cleanSingleLine(form.get("lang")));
    const name = cleanSingleLine(form.get("name"));
    const email = cleanSingleLine(form.get("email")).toLowerCase();
    const phone = cleanSingleLine(form.get("phone"));
    const subject = cleanSingleLine(form.get("subject"));
    const projectType = cleanSingleLine(form.get("project_type"));
    const budgetValue = cleanSingleLine(form.get("budget"));
    const budget = /^\d{1,6}$/.test(budgetValue)
      ? String(Number(budgetValue))
      : "";
    const message = cleanMultiline(form.get("message"));

    if (!name || !email || !subject || !message) {
      return json({ ok: false, error: "missing_fields" }, 400);
    }
    if (!isValidEmail(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    const submittedAt = new Date().toISOString();
    const emails = buildContactEmails({
      locale,
      name,
      email,
      phone,
      subject,
      projectType,
      budget,
      message,
      submittedAt,
      ip,
      brandReplyTo: brandReplyToAddress,
    });

    try {
      const result = await env.EMAIL.send({
        from: contactFrom,
        to: env.CONTACT_TO.split(",")
          .map((address) => address.trim())
          .filter(Boolean),
        subject: emails.owner.subject,
        replyTo: email,
        text: emails.owner.text,
        html: emails.owner.html,
      });
      console.log(
        JSON.stringify({
          event: "contact_owner_email_sent",
          messageId: result.messageId,
          locale,
        })
      );
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "contact_owner_email_failed",
          error: getEmailErrorDetail(error),
        })
      );
      return json({ ok: false, error: "email_error_owner" }, 502);
    }

    const lowerEmail = email.toLowerCase();
    const isInternal =
      env.CONTACT_TO.split(",")
        .map((address) => address.trim().toLowerCase())
        .includes(lowerEmail) ||
      brandReplyToAddress.toLowerCase() === lowerEmail;

    if (!isInternal) {
      try {
        const result = await env.EMAIL.send({
          from: contactFrom,
          to: email,
          subject: emails.customer.subject,
          replyTo: brandReplyToAddress,
          text: emails.customer.text,
          html: emails.customer.html,
        });
        console.log(
          JSON.stringify({
            event: "contact_customer_email_sent",
            messageId: result.messageId,
            locale,
          })
        );
      } catch (error) {
        console.error(
          JSON.stringify({
            event: "contact_customer_email_failed",
            error: getEmailErrorDetail(error),
          })
        );
        return json({ ok: true, warning: "user_mail_failed" }, 202);
      }
    }

    return json({ ok: true });
  } catch (error) {
    console.error(
      JSON.stringify({
        event: "contact_request_failed",
        error: getEmailErrorDetail(error),
      })
    );
    return json({ ok: false, error: "server_error" }, 500);
  }
};
