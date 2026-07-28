export interface LandingStat {
  value: string;
  label: string;
}

export interface LandingCard {
  title: string;
  description: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingLink {
  href: string;
  title: string;
  description: string;
}

export interface LandingPackage {
  name: string;
  price: string;
  priceValue?: number;
  description: string;
  features: string[];
  note?: string;
  featured?: boolean;
}

export interface LandingCaseStudy {
  image: string;
  imageAlt?: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  href?: string;
}

export interface LandingPageData {
  slug: string;
  navTitle: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  heroTag: string;
  h1: string;
  intro: string;
  lead: string;
  highlights: string[];
  stats: LandingStat[];
  packages?: LandingPackage[];
  caseStudies?: LandingCaseStudy[];
  painPoints: LandingCard[];
  deliverables: LandingCard[];
  process: LandingCard[];
  faqs: LandingFaq[];
  relatedLinks: LandingLink[];
  primaryCta: LandingLink;
  secondaryCta: LandingLink;
  serviceType: string;
  serviceName: string;
  serviceDescription: string;
  canonicalUrl: string;
  hreflangRo: string;
  hreflangRu: string;
}
