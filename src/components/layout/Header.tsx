"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, MessageSquare } from "lucide-react";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ocultar cabecera cuando se esté en el panel de Sanity Studio
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      {/* Top Bar Corporativa - Negro y Amarillo */}
      <div className="hidden border-b border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-300 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5 text-[#FFE500]" />
              Lima, Perú
            </span>
            <a
              href="mailto:hola@losmatus.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#FFE500]" />
              hola@losmatus.com
            </a>
            <a
              href="https://wa.me/51919045761"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#FFE500]" />
              +51 919 045 761
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FFE500]">
              <span className="h-2 w-2 rounded-full bg-[#FFE500] animate-pulse" />
              Soporte TI & Seguridad Activa
            </span>
            <Link
              href="/studio"
              className="rounded bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 text-[11px] text-zinc-300 hover:text-[#FFE500] hover:border-[#FFE500]/50 transition-colors"
            >
              CMS Studio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
        {/* Solo el logo oficial de LOSMATUS */}
        <Link href="/" aria-label="LOSMATUS Inicio" className="flex items-center transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="LOSMATUS"
            width={120}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-zinc-800 hover:text-black hover:border-b-2 hover:border-[#FFE500] pb-1 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <a
            href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20solicitar%20asesor%C3%ADa%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-900 bg-white px-4 py-2.5 text-xs font-bold text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
            WhatsApp
          </a>
          <Link
            href="/contacto"
            className="flex items-center gap-2 rounded-xl bg-[#FFE500] px-5 py-2.5 text-xs font-extrabold text-black shadow-sm hover:bg-[#F2D600] transition-colors"
          >
            <span>Cotizar Proyecto</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-900 hover:bg-zinc-100 md:hidden"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-zinc-900 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-zinc-100">
              <a
                href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20solicitar%20asesor%C3%ADa%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-bold text-[#FFE500] hover:bg-black transition-colors"
              >
                <Phone className="h-4 w-4" />
                WhatsApp (+51 919 045 761)
              </a>
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFE500] py-3 text-sm font-extrabold text-black hover:bg-[#F2D600] transition-colors"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
