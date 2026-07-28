import type { LandingPageData, LandingPackage } from "./landingPages.types";
import { portfolioRo } from "./portfolio";

const trustStats = [
  { value: "Independent", label: "dezvoltator web în Chișinău" },
  { value: "Direct", label: "comunicare fără intermediari" },
  { value: "Verificat", label: "funcții testate înainte de publicare" },
];

const websitePackages: LandingPackage[] = [
  {
    name: "Landing page",
    price: "de la 50 EUR",
    priceValue: 50,
    description:
      "O pagină concentrată pe o ofertă, un serviciu sau o campanie clară.",
    features: [
      "Structură pentru o singură ofertă",
      "Design responsive",
      "Formular sau contact direct",
      "Meta-taguri și structură semantică",
      "Publicare pe domeniul proiectului",
    ],
    note: "Conținutul, integrările și eventualele costuri externe se stabilesc înainte de lucru.",
  },
  {
    name: "Site de prezentare",
    price: "de la 150 EUR",
    priceValue: 150,
    description:
      "Pentru o afacere care trebuie să-și explice serviciile, diferențele și datele de contact.",
    features: [
      "Structură cu paginile necesare",
      "Design adaptat pentru mobil și desktop",
      "Formular de contact",
      "SEO on-page de bază",
      "Publicare și acces la proiect",
    ],
    note: "Numărul de pagini și funcțiile suplimentare influențează oferta finală.",
    featured: true,
  },
  {
    name: "Mini-magazin online",
    price: "de la 300 EUR",
    priceValue: 300,
    description:
      "Punct de pornire pentru un catalog mic și un flux simplu de comandă.",
    features: [
      "Catalog și pagini de produs",
      "Coș sau formular de comandă",
      "Opțiuni de plată și livrare stabilite în brief",
      "Interfață adaptată pentru mobil",
      "Testarea fluxului de comandă",
    ],
    note: "Integrările, administrarea avansată și cataloagele mari se estimează separat.",
  },
];

const collaborationProcess = [
  {
    title: "Îmi explici afacerea și obiectivul",
    description:
      "Îmi spui ce face afacerea ta, cine folosește site-ul și ce trebuie să poată realiza vizitatorul.",
  },
  {
    title: "Clarific ce merită construit",
    description:
      "Analizez cerințele și îți spun direct ce are sens, ce poate fi simplificat și care sunt limitele.",
  },
  {
    title: "Construiesc și verific",
    description:
      "Implementez proiectul, verific funcțiile și îți arăt progresul pe parcurs.",
  },
  {
    title: "Publicăm și predau accesul",
    description:
      "După verificare, publicăm site-ul și primești acces la lucrurile care țin de proiectul tău.",
  },
];

export const roLandingPages: LandingPageData[] = [
  {
    slug: "site-de-prezentare",
    navTitle: "Site de prezentare",
    breadcrumbLabel: "Site de prezentare",
    title: "Site de prezentare în Moldova | Structură și preț clar",
    description:
      "Site de prezentare pentru afaceri din Moldova, cu structură clară, design responsive, formular de contact și SEO tehnic de bază. Preț de la 150 EUR.",
    heroTag: "Site de prezentare · Moldova",
    h1: "Site de prezentare pentru afaceri din Moldova",
    intro:
      "Construiesc site-uri de prezentare care explică simplu ce oferă afacerea, pentru cine este serviciul și cum poate fi contactată.",
    lead:
      "Un proiect bun pornește de la informațiile reale ale afacerii. Îmi trimiți serviciile, datele de contact, materialele disponibile și exemplele relevante; eu le organizez într-un website ușor de folosit pe telefon și desktop.",
    highlights: [
      "Structură adaptată afacerii",
      "Design responsive",
      "Formular și contact direct",
      "SEO on-page de bază",
    ],
    stats: trustStats,
    packages: [websitePackages[1]],
    caseStudies: portfolioRo,
    painPoints: [
      {
        title: "Oferta trebuie înțeleasă repede",
        description:
          "Vizitatorul trebuie să vadă fără efort ce vinzi, cui te adresezi și care este pasul următor.",
      },
      {
        title: "Informația trebuie să fie credibilă",
        description:
          "Folosesc servicii, imagini, date de contact și exemple reale, fără cifre sau promisiuni inventate.",
      },
      {
        title: "Contactul trebuie să funcționeze",
        description:
          "Formularul, telefonul, emailul și legăturile relevante sunt verificate înainte de publicare.",
      },
    ],
    deliverables: [
      {
        title: "Arhitectură de conținut",
        description:
          "Stabilesc paginile și ordinea informației în funcție de serviciile și întrebările clienților tăi.",
      },
      {
        title: "Interfață responsive",
        description:
          "Construiesc o experiență coerentă pentru telefoane, tablete și ecrane desktop.",
      },
      {
        title: "Formulare și contact",
        description:
          "Implementez traseele prin care oamenii pot cere o ofertă, suna sau trimite un mesaj.",
      },
      {
        title: "Bază tehnică SEO",
        description:
          "Configurez titluri, descrieri, structură semantică, canonical și date structurate acolo unde sunt potrivite.",
      },
    ],
    process: collaborationProcess,
    faqs: [
      {
        question: "Cât costă un site de prezentare în Moldova?",
        answer:
          "Prețul pornește de la 150 EUR. Oferta finală depinde de numărul de pagini, conținut, formulare, limbi și integrările necesare.",
      },
      {
        question: "Cât durează realizarea?",
        answer:
          "Termenul se stabilește după ce văd structura și materialele disponibile. Conținutul incomplet, integrările și rundele de feedback pot prelungi proiectul.",
      },
      {
        question: "Trebuie să pregătesc textele și imaginile?",
        answer:
          "Poți veni cu materialele existente. Dacă lipsesc, îți spun ce trebuie pregătit și pot ajuta la structurarea textelor, fără să inventez informații despre afacere.",
      },
      {
        question: "Primesc acces la site după lansare?",
        answer:
          "Da. După publicare primești acces la domeniu, hosting, conturile și fișierele care fac parte din proiect, conform ofertei agreate.",
      },
    ],
    relatedLinks: [
      {
        href: "/preturi/",
        title: "Preț creare site",
        description:
          "Compară punctele de pornire pentru landing page, site de prezentare și mini-magazin online.",
      },
      {
        href: "/creare-site-chisinau/",
        title: "Creare site în Chișinău",
        description:
          "Detalii despre colaborarea directă pentru afaceri din Chișinău și Moldova.",
      },
      {
        href: "/web-design-moldova/",
        title: "Web design Moldova",
        description:
          "Pentru proiecte care au nevoie în primul rând de structură vizuală și UX.",
      },
    ],
    primaryCta: {
      href: "/contact/",
      title: "Descrie proiectul",
      description: "Trimite informațiile de bază despre afacere și site.",
    },
    secondaryCta: {
      href: "/preturi/",
      title: "Vezi prețurile",
      description: "Compară pachetele de pornire.",
    },
    serviceType: "Site de prezentare",
    serviceName: "Creare site de prezentare în Moldova",
    serviceDescription:
      "Site de prezentare responsive, cu structură de conținut, formular de contact și bază tehnică SEO pentru afaceri din Moldova.",
    canonicalUrl: "https://chisinauweb.com/site-de-prezentare/",
    hreflangRo: "https://chisinauweb.com/site-de-prezentare/",
    hreflangRu: "https://chisinauweb.com/ru/sait-vizitka/",
  },
  {
    slug: "creare-site-chisinau",
    navTitle: "Creare site Chișinău",
    breadcrumbLabel: "Creare site Chișinău",
    title: "Creare site Chișinău | Website de la 50 EUR",
    description:
      "Creare site în Chișinău pentru afaceri locale: landing page de la 50 EUR, site de prezentare de la 150 EUR și mini-magazin de la 300 EUR.",
    heroTag: "Dezvoltator web independent · Chișinău",
    h1: "Creare site în Chișinău, direct cu dezvoltatorul",
    intro:
      "Lucrezi direct cu mine de la prima discuție până la verificare și publicare. Construiesc site-uri și aplicații web pentru afaceri din Chișinău și din toată Moldova.",
    lead:
      "Încep de la ce trebuie să facă website-ul: să explice serviciile, să primească cereri, să prezinte produse sau să susțină un flux de lucru. Aleg tehnologia după problemă, nu pentru a complica oferta.",
    highlights: [
      "Comunicare directă",
      "Română și rusă",
      "Mobil și desktop",
      "Acces la proiect după lansare",
    ],
    stats: trustStats,
    packages: websitePackages,
    caseStudies: portfolioRo,
    painPoints: [
      {
        title: "Ai nevoie de un punct clar de contact",
        description:
          "Pagina trebuie să explice serviciul și să ofere un traseu simplu spre telefon, formular sau WhatsApp.",
      },
      {
        title: "Site-ul trebuie să reflecte afacerea reală",
        description:
          "Conținutul pornește de la serviciile, materialele și limitele tale, nu de la texte generice de agenție.",
      },
      {
        title: "Bugetul trebuie folosit practic",
        description:
          "Îți spun ce merită inclus acum și ce poate fi lăsat pentru o etapă ulterioară.",
      },
    ],
    deliverables: [
      {
        title: "Structură comercială clară",
        description:
          "Organizez oferta, paginile și CTA-urile astfel încât vizitatorul să știe ce poate face mai departe.",
      },
      {
        title: "Design pentru utilizare reală",
        description:
          "Interfața este verificată pe telefon și desktop, inclusiv meniuri, formulare și elemente interactive.",
      },
      {
        title: "Implementare tehnică",
        description:
          "Lucrez cu JavaScript, TypeScript, React, Astro, Cloudflare, baze de date și integrări atunci când proiectul le cere.",
      },
      {
        title: "Publicare și predare",
        description:
          "Conectez domeniul și hostingul agreat, apoi predau accesul care ține de proiect.",
      },
    ],
    process: collaborationProcess,
    faqs: [
      {
        question: "Lucrezi doar cu afaceri din Chișinău?",
        answer:
          "Nu. Sunt în Chișinău, dar colaborarea poate avea loc online cu afaceri din toată Moldova și din alte piețe.",
      },
      {
        question: "Care este prețul pentru creare site în Chișinău?",
        answer:
          "Punctele de pornire sunt 50 EUR pentru un landing page, 150 EUR pentru un site de prezentare și 300 EUR pentru un mini-magazin. Oferta exactă depinde de cerințe.",
      },
      {
        question: "Este inclusă optimizarea pentru mobil și Google?",
        answer:
          "Includ design responsive și elementele tehnice SEO de bază. Acestea ajută site-ul să fie accesibil și indexabil, dar nu garantează o anumită poziție în Google.",
      },
      {
        question: "Ce trebuie să trimit înainte să începem?",
        answer:
          "Am nevoie de o explicație a afacerii, serviciile sau produsele, datele de contact și materialele deja disponibile. Un document tehnic nu este obligatoriu.",
      },
    ],
    relatedLinks: [
      {
        href: "/preturi/",
        title: "Preț creare site în Moldova",
        description: "Pachete orientative și factori care schimbă costul final.",
      },
      {
        href: "/site-de-prezentare/",
        title: "Site de prezentare",
        description: "Pentru servicii, companii și profesioniști care au nevoie de o prezență clară.",
      },
      {
        href: "/serviciiBlog/magazin-online/",
        title: "Creare magazin online Moldova",
        description: "Catalog, comenzi, plăți și livrare stabilite în funcție de proiect.",
      },
    ],
    primaryCta: {
      href: "/contact/",
      title: "Descrie proiectul",
      description: "Spune ce trebuie să realizeze site-ul.",
    },
    secondaryCta: {
      href: "/preturi/",
      title: "Vezi costurile orientative",
      description: "Compară pachetele de pornire.",
    },
    serviceType: "Creare site web",
    serviceName: "Creare site în Chișinău",
    serviceDescription:
      "Landing page, site de prezentare, magazin online și aplicații web construite direct de un dezvoltator independent din Chișinău.",
    canonicalUrl: "https://chisinauweb.com/creare-site-chisinau/",
    hreflangRo: "https://chisinauweb.com/creare-site-chisinau/",
    hreflangRu: "https://chisinauweb.com/ru/sozdanie-saitov-kishinev/",
  },
  {
    slug: "web-design-moldova",
    navTitle: "Web design Moldova",
    breadcrumbLabel: "Web design Moldova",
    title: "Web design Moldova | Interfețe clare și responsive",
    description:
      "Servicii de web design în Moldova pentru site-uri de prezentare și produse web: structură, UX, design responsive și pregătire pentru implementare.",
    heroTag: "Web design · Moldova",
    h1: "Web design în Moldova pentru pagini clare și ușor de folosit",
    intro:
      "Un design util explică oferta, ordonează informația și ajută oamenii să găsească următorul pas fără efecte inutile.",
    lead:
      "Lucrez de la conținut și funcții spre interfață. Verific ierarhia, navigarea, stările interactive și felul în care pagina se adaptează pe ecrane diferite.",
    highlights: [
      "Ierarhie vizuală",
      "UX pentru mobil",
      "Componente reutilizabile",
      "Design pregătit pentru implementare",
    ],
    stats: trustStats,
    caseStudies: portfolioRo,
    painPoints: [
      {
        title: "Pagina pare generică",
        description:
          "Refac ierarhia și mesajele pornind de la oferta reală, fără secțiuni decorative care nu ajută vizitatorul.",
      },
      {
        title: "Navigarea este confuză",
        description:
          "Simplific meniurile, ordinea secțiunilor și traseele spre contact, cont sau comandă.",
      },
      {
        title: "Versiunea mobilă este neglijată",
        description:
          "Tratez telefonul ca parte principală a proiectului, nu ca o adaptare făcută la final.",
      },
    ],
    deliverables: [
      {
        title: "Direcție vizuală",
        description:
          "Culori, tipografie, spațiere și componente alese pentru conținutul și publicul proiectului.",
      },
      {
        title: "Structură UX",
        description:
          "Ordinea paginilor, secțiunilor și acțiunilor importante, cu limitele explicate clar.",
      },
      {
        title: "Stări responsive",
        description:
          "Layout-uri și componente verificate la dimensiuni relevante pentru telefon și desktop.",
      },
      {
        title: "Implementare coerentă",
        description:
          "Designul poate fi construit în același proiect, fără pierdere de context între designer și dezvoltator.",
      },
    ],
    process: collaborationProcess,
    faqs: [
      {
        question: "Designul include și versiunea mobilă?",
        answer:
          "Da. Stabilesc comportamentul componentelor pentru mobil și desktop, apoi verific paginile în implementare.",
      },
      {
        question: "Poți lucra cu identitatea vizuală existentă?",
        answer:
          "Da. Folosesc logo-ul, culorile și materialele existente atunci când sunt potrivite și explic unde apar probleme de lizibilitate sau consistență.",
      },
      {
        question: "Livrezi doar macheta sau și site-ul funcțional?",
        answer:
          "Pot construi proiectul complet. Dacă ai nevoie doar de design, livrabilele și formatele se stabilesc explicit în ofertă.",
      },
      {
        question: "Web designul garantează mai multe conversii?",
        answer:
          "Nu. Un design mai clar poate reduce fricțiunea, dar rezultatele depind și de ofertă, trafic, preț, conținut și modul în care afacerea răspunde cererilor.",
      },
    ],
    relatedLinks: [
      {
        href: "/serviciiBlog/design-web/",
        title: "Serviciul de design web",
        description: "Detalii despre structură, UX, responsive și implementare.",
      },
      {
        href: "/creare-site-chisinau/",
        title: "Creare site Chișinău",
        description: "Colaborare directă pentru proiecte locale și aplicații web.",
      },
      {
        href: "/serviciiBlog/dezvoltare-web/",
        title: "Dezvoltare web Moldova",
        description: "Implementarea tehnică pentru designul și funcțiile agreate.",
      },
    ],
    primaryCta: {
      href: "/contact/",
      title: "Descrie proiectul de design",
      description: "Trimite pagina actuală sau explică ce trebuie construit.",
    },
    secondaryCta: {
      href: "/serviciiBlog/design-web/",
      title: "Vezi serviciul complet",
      description: "Detalii practice despre design web.",
    },
    serviceType: "Web design",
    serviceName: "Web design în Moldova",
    serviceDescription:
      "Structură UX, design responsive și implementare pentru site-uri și produse web din Moldova.",
    canonicalUrl: "https://chisinauweb.com/web-design-moldova/",
    hreflangRo: "https://chisinauweb.com/web-design-moldova/",
    hreflangRu: "https://chisinauweb.com/ru/web-design-kishinev/",
  },
  {
    slug: "site-la-comanda",
    navTitle: "Site la comandă",
    breadcrumbLabel: "Site la comandă",
    title: "Site la comandă Moldova | Website construit pentru afacerea ta",
    description:
      "Site la comandă în Moldova, construit direct cu un dezvoltator independent: structură, design responsive, funcții, SEO on-page și publicare.",
    heroTag: "Site la comandă · Moldova",
    h1: "Site la comandă în Moldova, construit pentru utilizare reală",
    intro:
      "Un website la comandă are sens când proiectul nu încape într-o machetă standard sau are nevoie de formulare, conturi, baze de date, plăți ori fluxuri proprii.",
    lead:
      "Încep cu rezultatul dorit și reduc cerințele la o versiune care poate fi construită și verificată. Spun din timp ce este inclus, ce depinde de servicii externe și ce poate rămâne pentru o etapă ulterioară.",
    highlights: [
      "Cerințe clarificate",
      "JavaScript și TypeScript",
      "React, Astro și Cloudflare",
      "Acces și proprietate explicate",
    ],
    stats: trustStats,
    packages: websitePackages,
    caseStudies: portfolioRo,
    painPoints: [
      {
        title: "Ai funcții care nu există într-un pachet standard",
        description:
          "Conturi, formulare complexe, baze de date, plăți sau automatizări trebuie definite și testate ca fluxuri reale.",
      },
      {
        title: "Ideea încă are multe necunoscute",
        description:
          "Transform cerințele într-o listă de decizii și propun o primă versiune care poate fi verificată.",
      },
      {
        title: "Vrei să știi ce primești",
        description:
          "Stabilesc livrabilele, accesul, dependențele și limitele înainte de implementare.",
      },
    ],
    deliverables: [
      {
        title: "Plan de implementare",
        description:
          "Descriu paginile, datele, integrările și stările importante înainte de a construi.",
      },
      {
        title: "Interfață și funcții",
        description:
          "Construiesc experiența pentru utilizator și logica necesară proiectului, fără funcții adăugate doar pentru impresie.",
      },
      {
        title: "Verificare practică",
        description:
          "Testez fluxurile importante, formularele, legăturile și comportamentul responsive înainte de publicare.",
      },
      {
        title: "Publicare și acces",
        description:
          "Configurez procesul de publicare agreat și predau accesul la resursele proiectului.",
      },
    ],
    process: collaborationProcess,
    faqs: [
      {
        question: "Cât costă un site la comandă în Moldova?",
        answer:
          "Punctele de pornire rămân 50 EUR pentru landing page, 150 EUR pentru site de prezentare și 300 EUR pentru mini-magazin. Funcțiile custom se estimează după clarificarea fluxurilor.",
      },
      {
        question: "Ce tehnologii folosești?",
        answer:
          "Lucrez în principal cu JavaScript, TypeScript, React, Astro, Cloudflare Workers, baze de date și integrări de plată. Aleg doar ce este necesar proiectului.",
      },
      {
        question: "Poate proiectul fi extins după lansare?",
        answer:
          "De regulă, da, dacă extinderea este luată în calcul în structură. Nu promit scalare nelimitată; explic dependențele și costurile când definim proiectul.",
      },
      {
        question: "Folosirea AI înseamnă că proiectul este generat automat?",
        answer:
          "Nu. Folosesc instrumente AI pentru analiză și implementare, dar eu definesc rezultatul, inspectez schimbările, testez funcțiile și corectez problemele.",
      },
    ],
    relatedLinks: [
      {
        href: "/preturi/",
        title: "Prețuri site la comandă",
        description: "Puncte de pornire și factorii care schimbă costul.",
      },
      {
        href: "/creare-site-chisinau/",
        title: "Creare site Chișinău",
        description: "Colaborare locală direct cu dezvoltatorul.",
      },
      {
        href: "/site-de-prezentare/",
        title: "Site de prezentare",
        description: "Varianta potrivită când proiectul are în principal rol informativ și comercial.",
      },
    ],
    primaryCta: {
      href: "/contact/",
      title: "Descrie proiectul",
      description: "Explică problema și ce trebuie să poată face produsul.",
    },
    secondaryCta: {
      href: "/preturi/",
      title: "Vezi prețurile orientative",
      description: "Compară punctele de pornire.",
    },
    serviceType: "Site la comandă",
    serviceName: "Site la comandă în Moldova",
    serviceDescription:
      "Website și aplicații web construite pentru cerințe specifice, cu structură, design, implementare, testare și publicare.",
    canonicalUrl: "https://chisinauweb.com/site-la-comanda/",
    hreflangRo: "https://chisinauweb.com/site-la-comanda/",
    hreflangRu: "https://chisinauweb.com/ru/sozdanie-saitov-kishinev/",
  },
];

export const roLandingCards = roLandingPages.map((page) => ({
  href: `/${page.slug}/`,
  title: page.navTitle,
  description: page.description,
}));
