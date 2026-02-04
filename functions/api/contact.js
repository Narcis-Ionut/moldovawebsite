// /functions/api/contact.js
// Cloudflare Pages Function: verifies Turnstile, then sends email(s) via Resend.

export async function onRequestPost({ request, env }) {
  try {
    if (!env.RESEND_API_KEY)
      return json({ ok: false, error: "missing_env:RESEND_API_KEY" }, 500);
    if (!env.RESEND_FROM)
      return json({ ok: false, error: "missing_env:RESEND_FROM" }, 500);
    if (!env.RESEND_TO)
      return json({ ok: false, error: "missing_env:RESEND_TO" }, 500);

    const BRAND_REPLY_TO = env.REPLY_TO || env.RESEND_TO.split(",")[0].trim();
    const BRAND_REPLY_TO_ADDRESS = extractEmailAddress(BRAND_REPLY_TO);

    const contentType = (
      request.headers.get("content-type") || ""
    ).toLowerCase();
    let form;
    if (contentType.includes("application/x-www-form-urlencoded")) {
      form = await request.formData();
    } else if (contentType.includes("application/json")) {
      const data = await request.json();
      form = new FormData();
      for (const [k, v] of Object.entries(data || {}))
        form.append(k, String(v));
    } else {
      form = await request.formData();
    }

    if (form.get("website")) {
      return json({ ok: true, ignored: true });
    }

    const token = (form.get("cf-turnstile-response") || "").toString();
    if (!token) return json({ ok: false, error: "missing_captcha" }, 400);

    const ip = request.headers.get("CF-Connecting-IP") || "";
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: ip,
        }),
      }
    );
    const verify = await verifyRes.json().catch(() => ({}));
    if (!verify?.success) {
      return json({ ok: false, error: "captcha_failed", details: verify }, 400);
    }

    const name = (form.get("name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const subject = (form.get("subject") || "Mesaj nou de pe formular")
      .toString()
      .trim();
    const project_type = (form.get("project_type") || "").toString().trim();
    const budget = (form.get("budget") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();
    const lang = (form.get("lang") || "RO").toString().trim();

    if (!name || !email || !subject || !message) {
      return json({ ok: false, error: "missing_fields" }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    const when = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeLang = escapeHtml(lang || "RO");
    const safeProjectType = escapeHtml(project_type || "Not specified");
    const safeBudget = budget ? `EUR ${escapeHtml(budget)}` : "Not specified";
    const safeMessage = escapeHtml(message);
    const safeSubject = escapeHtml(subject);
    const safeIp = escapeHtml(ip || "n/a");
    const safeWhen = escapeHtml(when);
    const replyMailto = escapeHtml(
      `mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}`
    );
    const brandReplyMailto = escapeHtml(`mailto:${BRAND_REPLY_TO_ADDRESS}`);

    const ownerText = `Contact form submission - moldovawebsite.md

Subject: ${subject}
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Language: ${lang}
Project type: ${project_type || "-"}
Budget: ${budget ? "EUR " + budget : "-"}
Time: ${when}
IP: ${ip || "-"}

Message:
${message}
`;

    const ownerHtml = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      @media (max-width: 640px) {
        .shell { width: 100% !important; border-radius: 0 !important; }
        .pad { padding: 18px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#eef3fb;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      New contact form submission from ${safeName}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#eef3fb;padding:24px 10px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="640" class="shell" style="max-width:640px;width:100%;background:#ffffff;border:1px solid #dbe5f4;border-radius:16px;overflow:hidden;">
            <tr>
              <td class="pad" style="padding:24px 28px;background:linear-gradient(135deg,#0a2463 0%,#143a9c 100%);">
                <p style="margin:0 0 8px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#9eb8ff;">MoldovaWebsite Lead</p>
                <h1 style="margin:0;font:700 24px/1.2 Inter,Segoe UI,Arial,sans-serif;color:#ffffff;">New Contact Form Submission</h1>
                <p style="margin:10px 0 0;font:400 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#d8e4ff;">${safeSubject}</p>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6edf8;border-radius:12px;">
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Name</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeName}</td></tr>
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Email</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;"><a href="mailto:${safeEmail}" style="color:#0a2463;text-decoration:none;">${safeEmail}</a></td></tr>
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Phone</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safePhone}</td></tr>
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Language</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeLang}</td></tr>
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Project Type</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeProjectType}</td></tr>
                  <tr><td style="padding:12px 14px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Budget</td><td style="padding:12px 14px;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeBudget}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 24px;">
                <p style="margin:0 0 8px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Message</p>
                <pre style="margin:0;padding:14px;background:#f7f9fd;border:1px solid #e6edf8;border-radius:12px;white-space:pre-wrap;font:500 14px/1.6 Inter,Segoe UI,Arial,sans-serif;color:#1f2937;">${safeMessage}</pre>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 24px;">
                <a href="${replyMailto}" style="display:inline-block;padding:12px 18px;border-radius:10px;background:#0a2463;color:#ffffff;text-decoration:none;font:600 14px/1 Inter,Segoe UI,Arial,sans-serif;">Reply to ${safeName}</a>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 24px;">
                <p style="margin:0;color:#6b7280;font:500 12px/1.6 Inter,Segoe UI,Arial,sans-serif;">
                  Metadata: IP ${safeIp} • Time ${safeWhen}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    const ownerPayload = {
      from: env.RESEND_FROM,
      to: env.RESEND_TO.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      subject: `[Contact] ${subject}`,
      reply_to: email,
      text: ownerText,
      html: ownerHtml,
      tags: [{ name: "form", value: "contact" }],
    };

    const ownerRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ownerPayload),
    });

    if (!ownerRes.ok) {
      const detail = await ownerRes.text().catch(() => "unable to read error");
      return json({ ok: false, error: "resend_error_owner", detail }, 502);
    }

    const userText = `Salut ${name},

Multumim pentru mesaj. Confirmam ca solicitarea ta a fost primita cu succes.
Revenim de regula in maximum o zi lucratoare.

Rezumat solicitare:
Subiect: ${subject}
Tip proiect: ${project_type || "-"}
Buget: ${budget ? "EUR " + budget : "-"}

Mesajul tau:
${message}

Daca ai completari, poti raspunde direct la acest email.

Echipa moldovawebsite.md
`;

    const userHtml = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      @media (max-width: 640px) {
        .shell { width: 100% !important; border-radius: 0 !important; }
        .pad { padding: 18px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#eef3fb;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      Confirmare: mesajul tau a fost primit
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#eef3fb;padding:24px 10px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="640" class="shell" style="max-width:640px;width:100%;background:#ffffff;border:1px solid #dbe5f4;border-radius:16px;overflow:hidden;">
            <tr>
              <td class="pad" style="padding:24px 28px;background:linear-gradient(135deg,#0a2463 0%,#143a9c 100%);">
                <p style="margin:0 0 8px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#9eb8ff;">moldovawebsite.md</p>
                <h1 style="margin:0;font:700 24px/1.2 Inter,Segoe UI,Arial,sans-serif;color:#ffffff;">Mesaj primit cu succes</h1>
                <p style="margin:10px 0 0;font:400 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#d8e4ff;">Iti multumim pentru interes. Revenim rapid cu un raspuns.</p>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:24px 28px 10px;">
                <p style="margin:0 0 14px;font:500 15px/1.7 Inter,Segoe UI,Arial,sans-serif;color:#111827;">
                  Salut ${safeName},<br/>
                  Confirmam ca am primit solicitarea ta. In mod normal raspundem in maximum <strong>o zi lucratoare</strong>.
                </p>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6edf8;border-radius:12px;">
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Subiect</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeSubject}</td></tr>
                  <tr><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Tip proiect</td><td style="padding:12px 14px;border-bottom:1px solid #e6edf8;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeProjectType}</td></tr>
                  <tr><td style="padding:12px 14px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Buget</td><td style="padding:12px 14px;font:500 14px/1.5 Inter,Segoe UI,Arial,sans-serif;color:#111827;">${safeBudget}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 24px;">
                <p style="margin:0 0 8px;font:600 12px/1.4 Inter,Segoe UI,Arial,sans-serif;color:#5f6b84;text-transform:uppercase;letter-spacing:.05em;">Copie mesaj</p>
                <pre style="margin:0;padding:14px;background:#f7f9fd;border:1px solid #e6edf8;border-radius:12px;white-space:pre-wrap;font:500 14px/1.6 Inter,Segoe UI,Arial,sans-serif;color:#1f2937;">${safeMessage}</pre>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 28px 24px;">
                <a href="${brandReplyMailto}" style="display:inline-block;padding:12px 18px;border-radius:10px;background:#0a2463;color:#ffffff;text-decoration:none;font:600 14px/1 Inter,Segoe UI,Arial,sans-serif;">Raspunde la acest email</a>
                <p style="margin:14px 0 0;color:#6b7280;font:500 12px/1.6 Inter,Segoe UI,Arial,sans-serif;">
                  Referinta mesaj: ${safeWhen}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    const lowerEmail = email.toLowerCase();
    const isInternal =
      env.RESEND_TO.split(",")
        .map((s) => s.trim().toLowerCase())
        .includes(lowerEmail) ||
      BRAND_REPLY_TO_ADDRESS.toLowerCase() === lowerEmail;

    if (!isInternal) {
      const userPayload = {
        from: env.RESEND_FROM,
        to: email,
        subject: "Am primit mesajul tau - moldovawebsite.md",
        reply_to: BRAND_REPLY_TO_ADDRESS,
        text: userText,
        html: userHtml,
      };

      const userRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPayload),
      });

      if (!userRes.ok) {
        const udetail = await userRes
          .text()
          .catch(() => "unable to read error");
        return json(
          { ok: true, warning: "user_mail_failed", detail: udetail },
          202
        );
      }
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "server_error", detail: String(err) }, 500);
  }
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...headers },
  });
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function extractEmailAddress(input) {
  const match = input.match(/<([^>]+)>/);
  return (match ? match[1] : input).trim();
}
