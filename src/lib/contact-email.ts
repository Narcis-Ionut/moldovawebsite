export type ContactLocale = "ro" | "ru";

export interface ContactEmailData {
  locale: ContactLocale;
  name: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
  submittedAt: string;
  ip: string;
  brandReplyTo: string;
}

interface RenderedEmail {
  subject: string;
  text: string;
  html: string;
}

export interface ContactEmails {
  owner: RenderedEmail;
  customer: RenderedEmail;
}

const BRAND_NAME = "ChisinauWeb.com";
const BRAND_URL = "https://chisinauweb.com";
const BRAND_PHONE = "+373 61 211 739";
const BRAND_ADDRESS = "Chișinău, Moldova";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function multilineHtml(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

function formatSubmittedAt(value: string, locale: ContactLocale) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale === "ru" ? "ru-MD" : "ro-MD", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Chisinau",
  }).format(date);
}

function detailRow(label: string, value: string, isLast = false) {
  const border = isLast ? "" : "border-bottom:1px solid #dce7f1;";

  return `
    <tr>
      <td class="detail-label" width="34%" valign="top" style="padding:12px 14px;${border}font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.45;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#66788c;">${escapeHtml(label)}</td>
      <td valign="top" style="padding:12px 14px;${border}font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.5;font-weight:600;color:#102033;word-break:break-word;">${value}</td>
    </tr>`;
}

function emailFrame({
  lang,
  preheader,
  eyebrow,
  title,
  intro,
  content,
  accent = "#2b7fff",
  footerNote,
}: {
  lang: ContactLocale;
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  content: string;
  accent?: string;
  footerNote: string;
}) {
  const safePreheader = escapeHtml(preheader);

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(title)}</title>
    <style>
      @media only screen and (max-width: 640px) {
        .email-shell { width:100% !important; }
        .mobile-pad { padding-left:20px !important; padding-right:20px !important; }
        .detail-label { width:38% !important; }
        .cta-cell { display:block !important; width:100% !important; padding:0 0 10px !important; }
        .cta-link { display:block !important; text-align:center !important; }
      }
    </style>
    <!--[if mso]>
      <style>table,td,p,a,h1,h2{font-family:Arial,sans-serif !important;}</style>
    <![endif]-->
  </head>
  <body style="margin:0;padding:0;background-color:#eaf1f7;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
      ${safePreheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#eaf1f7" style="width:100%;background-color:#eaf1f7;">
      <tr>
        <td align="center" style="padding:30px 12px;">
          <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="email-shell" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #d7e3ee;border-radius:18px;overflow:hidden;box-shadow:0 18px 44px rgba(7,17,29,.12);">
            <tr>
              <td bgcolor="#07111d" style="background-color:#07111d;padding:20px 28px;border-bottom:1px solid #1c3044;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="46" valign="middle">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center" valign="middle" bgcolor="#2b7fff" style="width:40px;height:40px;background-color:#2b7fff;border-radius:10px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:20px;line-height:40px;font-weight:800;color:#ffffff;">W</td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle" style="font-family:Arial,'Helvetica Neue',sans-serif;">
                      <a href="${BRAND_URL}" style="font-size:16px;line-height:1.3;font-weight:800;color:#ffffff;text-decoration:none;">ChisinauWeb<span style="color:#5aa8ff;">.com</span></a>
                      <div style="margin-top:2px;font-size:11px;line-height:1.4;color:#9db0c3;">Web design &amp; development · Chișinău</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#07111d" class="mobile-pad" style="background-color:#07111d;padding:30px 34px 34px;border-bottom:4px solid ${accent};">
                <div style="margin:0 0 10px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.4;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${accent};">${escapeHtml(eyebrow)}</div>
                <h1 style="margin:0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:28px;line-height:1.18;font-weight:800;letter-spacing:-.02em;color:#ffffff;">${escapeHtml(title)}</h1>
                <p style="margin:12px 0 0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:15px;line-height:1.65;color:#c2d0dd;">${escapeHtml(intro)}</p>
              </td>
            </tr>
            ${content}
            <tr>
              <td bgcolor="#f4f9fd" class="mobile-pad" style="background-color:#f4f9fd;padding:22px 34px;border-top:1px solid #dce7f1;">
                <p style="margin:0 0 7px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:1.55;color:#617387;">${escapeHtml(footerNote)}</p>
                <p style="margin:0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:1.55;color:#617387;">
                  <a href="${BRAND_URL}" style="color:#1d6fe8;font-weight:700;text-decoration:none;">chisinauweb.com</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:contact@chisinauweb.com" style="color:#1d6fe8;text-decoration:none;">contact@chisinauweb.com</a>
                  &nbsp;·&nbsp;
                  <a href="tel:+37361211739" style="color:#1d6fe8;text-decoration:none;">${BRAND_PHONE}</a>
                </p>
                <p style="margin:7px 0 0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.5;color:#8292a3;">${BRAND_ADDRESS}</p>
              </td>
            </tr>
          </table>
          <!--[if mso]></td></tr></table><![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildOwnerEmail(data: ContactEmailData): RenderedEmail {
  const submittedAt = formatSubmittedAt(data.submittedAt, "ro");
  const projectType = data.projectType || "Nespecificat";
  const budget = data.budget ? `€${data.budget}` : "Nespecificat";
  const phone = data.phone || "Nefurnizat";
  const replyHref = `mailto:${data.email}?subject=${encodeURIComponent(`Re: ${data.subject}`)}`;
  const phoneHref = data.phone.replace(/[^\d+]/g, "");
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(data.subject);

  const ownerText = `Lead nou primit pe ${BRAND_NAME}

Subiect: ${data.subject}
Nume: ${data.name}
Email: ${data.email}
Telefon: ${phone}
Limbă: ${data.locale.toUpperCase()}
Tip proiect: ${projectType}
Buget: ${budget}
Trimis: ${submittedAt}
IP: ${data.ip || "-"}

Mesaj:
${data.message}

Răspunde direct la acest email pentru a contacta persoana.`;

  const actionCells = `
    <td class="cta-cell" valign="top" style="padding:0 10px 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" bgcolor="#2b7fff" style="background-color:#2b7fff;border-radius:10px;">
            <a class="cta-link" href="${escapeHtml(replyHref)}" style="display:inline-block;padding:13px 20px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.2;font-weight:800;color:#ffffff;text-decoration:none;">Răspunde lui ${escapeHtml(data.name)}</a>
          </td>
        </tr>
      </table>
    </td>
    ${
      phoneHref
        ? `<td class="cta-cell" valign="top" style="padding:0 0 0 10px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" bgcolor="#e8f2ff" style="background-color:#e8f2ff;border:1px solid #bcd7f7;border-radius:10px;">
            <a class="cta-link" href="tel:${escapeHtml(phoneHref)}" style="display:inline-block;padding:12px 20px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.2;font-weight:800;color:#1559a8;text-decoration:none;">Sună ${safePhone}</a>
          </td>
        </tr>
      </table>
    </td>`
        : ""
    }`;

  const content = `
    <tr>
      <td class="mobile-pad" style="padding:28px 34px 18px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #dce7f1;border-radius:12px;overflow:hidden;">
          ${detailRow("Nume", escapeHtml(data.name))}
          ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color:#1d6fe8;text-decoration:none;">${safeEmail}</a>`)}
          ${detailRow(
            "Telefon",
            phoneHref
              ? `<a href="tel:${escapeHtml(phoneHref)}" style="color:#1d6fe8;text-decoration:none;">${safePhone}</a>`
              : safePhone
          )}
          ${detailRow("Limbă", escapeHtml(data.locale.toUpperCase()))}
          ${detailRow("Tip proiect", escapeHtml(projectType))}
          ${detailRow("Buget estimativ", escapeHtml(budget), true)}
        </table>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:4px 34px 22px;">
        <div style="margin:0 0 8px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.4;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#66788c;">Mesajul clientului</div>
        <div style="padding:16px 17px;background-color:#f4f9fd;border-left:4px solid #4bd6ba;border-radius:8px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.7;color:#17283a;word-break:break-word;">${multilineHtml(data.message)}</div>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:0 34px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>${actionCells}</tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:0 34px 28px;">
        <div style="padding:12px 14px;background-color:#f8fafc;border:1px solid #e2eaf2;border-radius:8px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.55;color:#718195;">
          <strong style="color:#42556a;">Subiect:</strong> ${safeSubject}<br>
          <strong style="color:#42556a;">Trimis:</strong> ${escapeHtml(submittedAt)}
          &nbsp;·&nbsp;
          <strong style="color:#42556a;">IP:</strong> ${escapeHtml(data.ip || "n/a")}
        </div>
      </td>
    </tr>`;

  return {
    subject: `Lead nou · ${projectType} · ${data.name}`.slice(0, 180),
    text: ownerText,
    html: emailFrame({
      lang: "ro",
      preheader: `${data.name} solicită: ${data.subject}`,
      eyebrow: `Lead nou · Formular ${data.locale.toUpperCase()}`,
      title: data.name,
      intro: data.subject,
      content,
      footerNote: "Notificare internă generată de formularul ChisinauWeb.com.",
    }),
  };
}

function buildCustomerEmail(data: ContactEmailData): RenderedEmail {
  const isRu = data.locale === "ru";
  const projectType = data.projectType || (isRu ? "Не указано" : "Nespecificat");
  const budget = data.budget
    ? `€${data.budget}`
    : isRu
      ? "Не указан"
      : "Nespecificat";
  const submittedAt = formatSubmittedAt(data.submittedAt, data.locale);
  const replyHref = `mailto:${data.brandReplyTo}?subject=${encodeURIComponent(
    isRu ? `Re: ${data.subject}` : `Re: ${data.subject}`
  )}`;

  const copy = isRu
    ? {
        subject: `Заявка получена · ${BRAND_NAME}`,
        preheader:
          "Заявка получена. Нарцис изучит детали и ответит лично.",
        eyebrow: "Заявка получена",
        title: "Спасибо — сообщение уже у Нарциса",
        intro:
          "Нарцис изучит детали проекта и ответит лично, когда сможет дать полезный и конкретный ответ.",
        greeting: `Здравствуйте, ${data.name}!`,
        body:
          "Ваша заявка успешно зарегистрирована. Ниже — копия деталей, которые вы отправили.",
        nextTitle: "Что дальше",
        nextBody:
          "Нарцис проверит задачу, бюджет и сроки, а затем предложит понятный следующий шаг без лишних обязательств.",
        subjectLabel: "Тема",
        projectLabel: "Тип проекта",
        budgetLabel: "Бюджет",
        messageLabel: "Ваше сообщение",
        cta: "Ответить Нарцису",
        reference: "Номер обращения",
        footer:
          "Это автоматическое подтверждение заявки, отправленной через ChisinauWeb.com.",
      }
    : {
        subject: `Am primit solicitarea ta · ${BRAND_NAME}`,
        preheader:
          "Solicitarea a fost primită. Narcis va analiza detaliile și îți va răspunde personal.",
        eyebrow: "Solicitare primită",
        title: "Mulțumesc — mesajul tău a ajuns la Narcis",
        intro:
          "Voi analiza detaliile proiectului și îți voi răspunde când pot oferi un răspuns util și concret.",
        greeting: `Salut, ${data.name}!`,
        body:
          "Solicitarea ta a fost înregistrată cu succes. Mai jos găsești o copie a detaliilor trimise.",
        nextTitle: "Ce urmează",
        nextBody:
          "Verific obiectivul, bugetul și termenul, apoi revin cu un pas următor clar, fără obligații.",
        subjectLabel: "Subiect",
        projectLabel: "Tip proiect",
        budgetLabel: "Buget",
        messageLabel: "Mesajul tău",
        cta: "Răspunde-i lui Narcis",
        reference: "Referință solicitare",
        footer:
          "Acesta este un mesaj automat de confirmare pentru solicitarea trimisă pe ChisinauWeb.com.",
      };

  const directReplyText = isRu
    ? "Вы можете ответить прямо на это письмо."
    : "Poți răspunde direct la acest email.";

  const customerText = `${copy.greeting}

${copy.body}
${copy.intro}

${copy.subjectLabel}: ${data.subject}
${copy.projectLabel}: ${projectType}
${copy.budgetLabel}: ${budget}

${copy.messageLabel}:
${data.message}

${copy.nextTitle}: ${copy.nextBody}

${directReplyText}

${BRAND_NAME}
${BRAND_URL}
${BRAND_PHONE}`;

  const content = `
    <tr>
      <td class="mobile-pad" style="padding:28px 34px 10px;">
        <p style="margin:0 0 9px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:17px;line-height:1.5;font-weight:800;color:#102033;">${escapeHtml(copy.greeting)}</p>
        <p style="margin:0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.75;color:#42556a;">${escapeHtml(copy.body)}</p>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:14px 34px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#edf9f6" style="background-color:#edf9f6;border:1px solid #c6ede4;border-radius:12px;">
          <tr>
            <td width="42" valign="top" style="padding:16px 0 16px 16px;">
              <div style="width:28px;height:28px;border-radius:50%;background-color:#4bd6ba;font-family:Arial,'Helvetica Neue',sans-serif;font-size:16px;line-height:28px;font-weight:900;text-align:center;color:#07111d;">✓</div>
            </td>
            <td valign="top" style="padding:15px 16px 15px 10px;">
              <div style="font-family:Arial,'Helvetica Neue',sans-serif;font-size:13px;line-height:1.45;font-weight:800;color:#124f47;">${escapeHtml(copy.nextTitle)}</div>
              <div style="margin-top:3px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:13px;line-height:1.6;color:#2b675f;">${escapeHtml(copy.nextBody)}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:0 34px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #dce7f1;border-radius:12px;overflow:hidden;">
          ${detailRow(copy.subjectLabel, escapeHtml(data.subject))}
          ${detailRow(copy.projectLabel, escapeHtml(projectType))}
          ${detailRow(copy.budgetLabel, escapeHtml(budget), true)}
        </table>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:0 34px 22px;">
        <div style="margin:0 0 8px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.4;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#66788c;">${escapeHtml(copy.messageLabel)}</div>
        <div style="padding:16px 17px;background-color:#f4f9fd;border-left:4px solid #5aa8ff;border-radius:8px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.7;color:#17283a;word-break:break-word;">${multilineHtml(data.message)}</div>
      </td>
    </tr>
    <tr>
      <td class="mobile-pad" style="padding:0 34px 28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" bgcolor="#2b7fff" style="background-color:#2b7fff;border-radius:10px;">
              <a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:13px 21px;font-family:Arial,'Helvetica Neue',sans-serif;font-size:14px;line-height:1.2;font-weight:800;color:#ffffff;text-decoration:none;">${escapeHtml(copy.cta)}</a>
            </td>
          </tr>
        </table>
        <p style="margin:13px 0 0;font-family:Arial,'Helvetica Neue',sans-serif;font-size:11px;line-height:1.55;color:#7a8999;">${escapeHtml(copy.reference)}: ${escapeHtml(submittedAt)}</p>
      </td>
    </tr>`;

  return {
    subject: copy.subject,
    text: customerText,
    html: emailFrame({
      lang: data.locale,
      preheader: copy.preheader,
      eyebrow: copy.eyebrow,
      title: copy.title,
      intro: copy.intro,
      content,
      accent: "#4bd6ba",
      footerNote: copy.footer,
    }),
  };
}

export function buildContactEmails(data: ContactEmailData): ContactEmails {
  return {
    owner: buildOwnerEmail(data),
    customer: buildCustomerEmail(data),
  };
}
