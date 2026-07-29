export type NavItem = {
  label: string;
  href: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  businessHours: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  locale: string;
  nav: NavItem[];
  contact: ContactInfo;
  social: SocialLink[];
  serviceAreas: string[];
};

