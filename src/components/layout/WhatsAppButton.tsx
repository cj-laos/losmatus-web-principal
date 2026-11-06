"use client";

import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  const pathname = usePathname();

  // Ocultar botón flotante en Sanity Studio
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al +51 919 045 761"
        className="whatsapp-float-btn group flex items-center gap-2 rounded-full border-2 border-black px-4 py-3 text-white font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-105"
      >
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="h-5 w-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-black transition-all duration-300 ease-in-out group-hover:max-w-xs sm:max-w-xs">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </aside>
  );
}
