import { Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="size-14 rounded-full bg-whatsapp text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label="Call now"
        className="size-14 rounded-full bg-brand text-brand-foreground shadow-elegant flex items-center justify-center hover:scale-110 transition-transform md:hidden"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
