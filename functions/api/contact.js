// /functions/api/contact.js
// Cloudflare Pages Function: verifies Turnstile, then sends email(s) via Resend.
// Expects application/x-www-form-urlencoded (your current JS already does this).

export async function onRequestPost({ request, env }) {
  try {
    // Basic env checks
    if (!env.RESEND_API_KEY)
      return json({ ok: false, error: "missing_env:RESEND_API_KEY" }, 500);
    if (!env.RESEND_FROM)
      return json({ ok: false, error: "missing_env:RESEND_FROM" }, 500);
    if (!env.RESEND_TO)
      return json({ ok: false, error: "missing_env:RESEND_TO" }, 500);
    // REPLY_TO is optional but recommended
    const BRAND_REPLY_TO = env.REPLY_TO || env.RESEND_TO.split(",")[0].trim();

    // Parse form (supports x-www-form-urlencoded; falls back to formData)
    const contentType = (
      request.headers.get("content-type") || ""
    ).toLowerCase();
    let form;
    if (contentType.includes("application/x-www-form-urlencoded")) {
      form = await request.formData();
    } else if (contentType.includes("application/json")) {
      const data = await request.json();
      form = new FormData();
      for (const [k, v] of Object.entries(data || {})) form.append(k, v);
    } else {
      form = await request.formData();
    }

    // 1) Honeypot (spam)
    if (form.get("website")) {
      return json({ ok: true, ignored: true });
    }

    // 2) Turnstile verify
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

    // 3) Collect fields
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

    // basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    // 4) Compose email for Resend (owner)
    const when = new Date().toISOString();
    const text = `Formular de contact (moldovawebsite.md)

Nume: ${name}
Email: ${email}
Telefon: ${phone || "—"}
Limbă: ${lang}
Tip proiect: ${project_type || "—"}
Buget: ${budget ? "€" + budget : "—"}

Mesaj:
${message}

Meta:
IP: ${ip}
Time: ${when}
`;

    const html = `
      <div style="font:14px/1.45 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Arial">
        <h2 style="margin:0 0 8px">Formular de contact (moldovawebsite.md)</h2>
        <p style="margin:0 0 12px"><strong>Nume:</strong> ${escapeHtml(
          name
        )}</p>
        <p style="margin:0 0 12px"><strong>Email:</strong> ${escapeHtml(
          email
        )}</p>
        <p style="margin:0 0 12px"><strong>Telefon:</strong> ${escapeHtml(
          phone || "—"
        )}</p>
        <p style="margin:0 0 12px"><strong>Limbă:</strong> ${escapeHtml(
          lang
        )}</p>
        <p style="margin:0 0 12px"><strong>Tip proiect:</strong> ${escapeHtml(
          project_type || "—"
        )}</p>
        <p style="margin:0 0 12px"><strong>Buget:</strong> ${
          budget ? "€" + escapeHtml(budget) : "—"
        }</p>
        <hr style="border:0;border-top:1px solid #eee;margin:12px 0">
        <p style="white-space:pre-wrap;margin:0 0 12px">${escapeHtml(
          message
        )}</p>
        <hr style="border:0;border-top:1px solid #eee;margin:12px 0">
        <p style="color:#666;font-size:12px;margin:0">
          IP: ${escapeHtml(ip)}<br/>
          Time: ${escapeHtml(when)}
        </p>
      </div>
    `;

    // Owner payload
    const ownerPayload = {
      from: env.RESEND_FROM, // e.g. "moldovawebsite.md <noreply@mail.moldovawebsite.md>"
      to: env.RESEND_TO.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      subject: `[Contact] ${subject}`,
      reply_to: email, // so replies go to the sender
      text,
      html,
      tags: [{ name: "form", value: "contact" }],
    };

    // Send owner notification
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

    // 5) Send auto-reply to the user (confirmation)
    const userText = `Salut ${name},

Am primit mesajul tău trimis prin formularul de contact de pe moldovawebsite.md.
Îți vom răspunde în cel mai scurt timp.

Copie mesaj:
${message}

— Echipa moldovawebsite.md
`;
    const userHtml = `
      <div style="font:14px/1.45 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Arial">
        <p>Salut ${escapeHtml(name)}!</p>
        <p>Am primit mesajul tău și îți vom răspunde în cel mai scurt timp.</p>
        <p><strong>Copie mesaj:</strong></p>
        <blockquote style="white-space:pre-wrap;margin:0 0 12px">${escapeHtml(
          message
        )}</blockquote>
        <p>— Echipa moldovawebsite.md</p>
      </div>
    `;

    // Only attempt to send confirmation if the sender email is not one of your internal addresses
    // (avoid auto-reply loops if necessary)
    const lowerEmail = email.toLowerCase();
    const isInternal =
      env.RESEND_TO.split(",")
        .map((s) => s.trim().toLowerCase())
        .includes(lowerEmail) ||
      (BRAND_REPLY_TO && BRAND_REPLY_TO.toLowerCase() === lowerEmail);

    if (!isInternal) {
      const userPayload = {
        from: env.RESEND_FROM,
        to: email,
        subject: "Am primit mesajul tău — moldovawebsite.md",
        reply_to: BRAND_REPLY_TO, // replies go to your branded inbox
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
        // log failure but do not fail the whole request (owner already got notified)
        const udetail = await userRes
          .text()
          .catch(() => "unable to read error");
        // Optionally log somewhere — for now we return partial success
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
