import type { LandingCaseStudy } from "./landingPages.types";

export interface PortfolioProject extends LandingCaseStudy {
  href: string;
  imageAlt: string;
}

export const portfolioRo: PortfolioProject[] = [
  {
    image: "/assets/tencuitor-md.webp",
    imageAlt: "Captură a catalogului online Tencuitor.md",
    title: "Tencuitor.md",
    category: "Catalog online",
    description:
      "Catalog online pentru utilaje și accesorii de tencuială, glet și vopsire, cu pagini pentru service, chirie și contact prin WhatsApp în Moldova.",
    features: ["Catalog produse", "Service și chirie", "Contact prin WhatsApp"],
    href: "https://tencuitor.md/",
  },
  {
    image: "/assets/arcadie-systems.webp",
    imageAlt: "Captură a aplicației Daily 50 de la Arcadie Systems",
    title: "Daily 50 — Arcadie Systems",
    category: "Aplicație SaaS pentru vânzări",
    description:
      "Produs web pentru organizarea apelurilor de vânzări: import CSV, listă zilnică de apeluri, înregistrarea rezultatelor și programarea pașilor următori.",
    features: ["Import CSV", "Coadă de apeluri", "Rezultate și follow-up"],
    href: "https://arcadie-systems.com/",
  },
  {
    image: "/assets/rezolvro.webp",
    imageAlt: "Captură a generatorului de documente Rezolvro",
    title: "Rezolvro",
    category: "Generator web de documente",
    description:
      "Aplicație web în limba română pentru redactarea ghidată a reclamațiilor, cererilor și emailurilor oficiale, cu verificare înainte de export în PDF.",
    features: ["Fluxuri ghidate", "PDF și email", "Verificare înainte de trimitere"],
    href: "https://rezolvro.ro/",
  },
  {
    image: "/assets/deep-chat-ai.webp",
    imageAlt: "Captură a platformei web Deep Chat AI",
    title: "Deep Chat AI",
    category: "Platformă web cu AI",
    description:
      "Produs web bilingv destinat adulților, construit pentru conversații AI private, cu fluxuri de plată și infrastructură bazată pe Cloudflare.",
    features: ["Română și engleză", "Mod opțional 18+", "Plăți online"],
    href: "https://deep-chat-ai.com/",
  },
  {
    image: "/assets/fitwithai.webp",
    imageAlt: "Captură a interfeței de planificare FitWithAI",
    title: "FitWithAI",
    category: "Aplicație fitness cu AI",
    description:
      "Aplicație web de fitness asistată de AI, cu onboarding, planuri de antrenament și obiective nutriționale, jurnale pentru antrenamente și alimentație, check-in-uri și chat de coaching.",
    features: ["Planuri de antrenament", "Jurnale de progres", "Chat de coaching"],
    href: "https://fitwithai.ro/",
  },
];

export const portfolioRu: PortfolioProject[] = [
  {
    image: "/assets/tencuitor-md.webp",
    imageAlt: "Скриншот онлайн-каталога Tencuitor.md",
    title: "Tencuitor.md",
    category: "Онлайн-каталог",
    description:
      "Онлайн-каталог оборудования и комплектующих для штукатурки, шпаклёвки и покраски, со страницами сервиса, аренды и связью через WhatsApp в Молдове.",
    features: ["Каталог товаров", "Сервис и аренда", "Связь через WhatsApp"],
    href: "https://tencuitor.md/",
  },
  {
    image: "/assets/arcadie-systems.webp",
    imageAlt: "Скриншот приложения Daily 50 от Arcadie Systems",
    title: "Daily 50 — Arcadie Systems",
    category: "SaaS для продаж",
    description:
      "Веб-продукт для организации звонков в продажах: импорт CSV, ежедневная очередь, фиксация результатов и планирование следующих действий.",
    features: ["Импорт CSV", "Очередь звонков", "Результаты и follow-up"],
    href: "https://arcadie-systems.com/",
  },
  {
    image: "/assets/rezolvro.webp",
    imageAlt: "Скриншот генератора документов Rezolvro",
    title: "Rezolvro",
    category: "Веб-генератор документов",
    description:
      "Румынскоязычное веб-приложение для пошагового составления жалоб, заявлений и официальных писем с проверкой перед экспортом в PDF.",
    features: ["Пошаговые сценарии", "PDF и email", "Проверка перед отправкой"],
    href: "https://rezolvro.ro/",
  },
  {
    image: "/assets/deep-chat-ai.webp",
    imageAlt: "Скриншот веб-платформы Deep Chat AI",
    title: "Deep Chat AI",
    category: "Веб-платформа с AI",
    description:
      "Двуязычный веб-продукт для взрослых, созданный для приватных разговоров с AI, с платёжными сценариями и инфраструктурой на Cloudflare.",
    features: ["Румынский и английский", "Опциональный режим 18+", "Онлайн-оплата"],
    href: "https://deep-chat-ai.com/",
  },
  {
    image: "/assets/fitwithai.webp",
    imageAlt: "Скриншот интерфейса планирования FitWithAI",
    title: "FitWithAI",
    category: "Фитнес-приложение с AI",
    description:
      "Фитнес-веб-приложение с поддержкой AI: онбординг, планы тренировок и цели по питанию, журналы тренировок и питания, чек-ины и чат с AI-тренером.",
    features: ["Планы тренировок", "Журналы прогресса", "Чат с AI-тренером"],
    href: "https://fitwithai.ro/",
  },
];
