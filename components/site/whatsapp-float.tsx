import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105 hover:opacity-90"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}

