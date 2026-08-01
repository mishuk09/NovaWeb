export const homeHero = {
  badge: "We care about your business growth",
  title: "Websites for   ",
  description:
    "Delivering professional websites, search optimization, and smart automation to scale your business.",
  primaryCta: { label: "Get Free Quote", href: "/contact" },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
  stats: [
    { label: "Typical project launch", value: "7-10 Days" },
    { label: "Response time", value: "Within 24 Hours" },
    { label: "Commitment", value: "No lock-in contract" },
  ],
};

export const homeServicesOverview = [
  "Business Website",
  "Landing Page",
  "E-commerce Website",
  "SEO",
  "Google Business Profile",
  "AI Chatbot + WhatsApp Integration",
];

export const homeWhyChooseUs = [
  {
    title: "Conversion-first UI/UX",
    description: "Every page is structured to build trust, reduce friction, and increase leads.",
  },
  {
    title: "Clear process and timeline",
    description: "No ambiguity: defined scope, milestones, communication, and deliverables.",
  },
  {
    title: "SEO and local discovery built-in",
    description:
      "Structured metadata, performance optimization, and local positioning from day one.",
  },
  {
    title: "Long-term growth partner",
    description:
      "We support maintenance, optimization, automation, and feature growth after launch.",
  },
];

export const homeProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your goals, audience, offers, and business constraints.",
  },
  {
    step: "02",
    title: "Strategy & Wireframe",
    description: "We define information architecture, content flow, and conversion strategy.",
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Modern, responsive UI with scalable code and performance-safe implementation.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "Go-live support, analytics tracking, SEO iteration, and optimization loops.",
  },
   
];

export const homePortfolioPreview = [
  {
    name: "Nusa Dining",
    industry: "Restaurant",
    description: "Online reservations and menu showcase with local SEO landing pages.",
    image: "/images/portfolio/restaurant.svg",
    stack: ["Next.js", "Tailwind", "SEO"],
    demoHref: "/contact",
  },
  {
    name: "Aurea Salon",
    industry: "Salon",
    description: "Service catalogue and WhatsApp booking flow for appointment conversion.",
    image: "/images/portfolio/salon.svg",
    stack: ["Next.js", "Framer Motion", "WhatsApp"],
    demoHref: "/contact",
  },
  {
    name: "ProTorque Workshop",
    industry: "Workshop",
    description: "Service lead capture and Google Business Profile optimization support.",
    image: "/images/portfolio/workshop.svg",
    stack: ["Next.js", "Analytics", "Automation"],
    demoHref: "/contact",
  },
  {
    name: "Klinik Harmoni",
    industry: "Clinic",
    description: "Doctor profile, treatment information, and lead-ready contact funnels.",
    image: "/images/portfolio/clinic.svg",
    stack: ["Next.js", "Accessibility", "SEO"],
    demoHref: "/contact",
  },
  {
    name: "LexBridge Partners",
    industry: "Law Firm",
    description: "Authority-focused brand site with consultation call-to-action architecture.",
    image: "/images/portfolio/law-firm.svg",
    stack: ["Next.js", "Schema", "Content Strategy"],
    demoHref: "/contact",
  },
  {
    name: "HarborLight Suites",
    industry: "Hotel",
    description: "Room showcase with inquiry capture and trust-focused social proof blocks.",
    image: "/images/portfolio/hotel.svg",
    stack: ["Next.js", "UI/UX", "Performance"],
    demoHref: "/contact",
  },
];

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Pizza,
  Building,
  Scissors,
  Store,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

export type HomeIndustry = {
  name: string;
  icon: LucideIcon;
  image?: string;
};

export const homeIndustries: HomeIndustry[] = [
  { name: "Restaurant", icon: UtensilsCrossed, image: "/resturant.svg" },
  { name: "Cafe", icon: Pizza, image: "/cafe.svg" },
  { name: "Hotel", icon: Building2, image: "/hotel.svg" },
  { name: "Homestay", icon: Home, image: "/homestay.svg" },
  { name: "Workshop", icon: Wrench, image: "/workshop.svg" },
  { name: "Salon", icon: Scissors, image: "/salon.svg" },
  { name: "Dental Clinic", icon: HeartPulse, image: "/dental.svg" },
  { name: "Law Firm", icon: Landmark, image: "/law.svg" },
  { name: "Construction", icon: Building, image: "/construction.svg" },
  { name: "Property", icon: Building2, image: "/property.svg" },
  { name: "Education", icon: GraduationCap, image: "/education.svg" },
  { name: "Retail", icon: Store, image: "/retail.svg" },
];

export const homePricing = [
  {
    name: "Starter",
    price: "RM599",
    subtitle: "Perfect for getting your business online.",
    features: [
      "1-3 Pages",
      "Mobile responsive design",
      "WhatsApp Integration",
      "Contact Form",
      "Google Maps",
      "Social Media Links",
      "Basic SEO",
      "SSL Security",
      "1 Revision",
      "30 Days Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "RM999",
    subtitle: "Our most popular package for growing businesses.",
    featured: true,
    features: [
      "Up to 6 Pages",
      "Custom Design",
      "Domain Setup",
      "Hosting Setup",
      "Business Email",
      "WhatsApp integration",
      "Google Maps",
      "Google Analytics",
      "Google Search Console",
      "Local SEO Basics",
      "Gallery / Portfolio",
      "2 Revisions",
      "60 Days Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "RM1,799+",
    subtitle: "For businesses that need advanced features.",
    features: [
      "8-12+ Pages",
      "Custom UI/UX",
      "Advanced SEO",
      "Booking System",
      "Online Appointment",
      "Blog Setup",
      "Advanced Forms",
      "Analytics & Conversion Tracking",
      "Google Business Profile Optimization",
      "3 Revisions",
      "90 Days Support",
    ],
    cta: "Get a Free Quote",
  },
  {
    name: "Custom",
    price: "Custom Quote",
    subtitle: "Need something different? We can create a custom solution for your business.",
    features: [
      "E-commerce",
      "AI Chatbot",
      "Booking",
      "Automation",
      "Multi-language",
      "Advanced SEO",
    ],
    cta: "Talk to Us",
  },
];

export const homeTestimonials = [
  {
    name: "Farid Hakim",
    role: "Restaurant Owner, Melaka",
    quote:
      "Our inquiries increased within weeks. The website finally reflects our brand quality.",
  },
  {
    name: "Syafiqah Nabila",
    role: "Salon Founder",
    quote:
      "The booking flow is smooth and professional. Clients now trust us before they even walk in.",
  },
  {
    name: "Daniel Lee",
    role: "Workshop Director",
    quote:
      "novanest gave us a clear roadmap and delivered exactly on timeline. Very reliable team.",
  },
];

export const homeFaq = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 7 to 21 days depending on scope and content readiness.",
  },
  {
    question: "Do you provide domain, hosting, and business email?",
    answer:
      "Yes. We can set up domain registration, hosting, SSL, and business email as a complete package.",
  },
  {
    question: "Can you help with SEO and Google Business Profile?",
    answer:
      "Yes. We include technical SEO fundamentals and can provide ongoing SEO and local profile optimization services.",
  },
  {
    question: "Do you support ongoing updates after launch?",
    answer:
      "Absolutely. We offer maintenance plans, feature enhancements, and performance/SEO optimization support.",
  },
];
