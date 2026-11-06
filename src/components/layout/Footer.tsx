"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Ocultar footer en Sanity Studio
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="border-t border-zinc-900 bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info with Logo */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="LOSMATUS Inicio" className="inline-block">
              <Image
                src="/logo.png"
                alt="LOSMATUS"
                width={130}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              <strong className="text-white">LOSMATUS S.A.C.</strong> es una empresa peruana experta en infraestructura tecnológica, cableado estructurado, data centers, videovigilancia y soporte TI corporativo.
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              Valores institucionales: <span className="text-[#FFE500] font-bold">Dedicación · Calidad · Esfuerzo</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FFE500] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#FFE500] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#FFE500] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#FFE500] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-[#FFE500] transition-colors text-zinc-500">
                  Panel Sanity Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white">Servicios Principales</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/servicios/cableado-estructurado-redes" className="hover:text-[#FFE500] transition-colors">
                  Cableado Estructurado
                </Link>
              </li>
              <li>
                <Link href="/servicios/data-centers-infraestructura" className="hover:text-[#FFE500] transition-colors">
                  Data Centers & UPS
                </Link>
              </li>
              <li>
                <Link href="/servicios/videovigilancia-cctv" className="hover:text-[#FFE500] transition-colors">
                  Videovigilancia CCTV
                </Link>
              </li>
              <li>
                <Link href="/servicios/control-acceso-biometria" className="hover:text-[#FFE500] transition-colors">
                  Control de Acceso Biométrico
                </Link>
              </li>
              <li>
                <Link href="/servicios/mesa-de-ayuda-soporte-ti" className="hover:text-[#FFE500] transition-colors">
                  Helpdesk y Soporte TI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white">Contacto Directo</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#FFE500] shrink-0 mt-0.5" />
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#FFE500] shrink-0" />
                <a href="mailto:hola@losmatus.com" className="hover:text-white transition-colors">
                  hola@losmatus.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#FFE500] shrink-0" />
                <a href="https://wa.me/51919045761" className="hover:text-white transition-colors">
                  +51 919 045 761
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="https://wa.me/51919045761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-xs font-bold text-[#FFE500] hover:bg-[#FFE500] hover:text-black transition-colors"
              >
                <span>WhatsApp Empresarial</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {currentYear} LOSMATUS S.A.C. Todos los derechos reservados. Lima, Perú.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300">Infraestructura Tecnológica</span>
            <span>·</span>
            <span className="hover:text-zinc-300">Seguridad Electrónica</span>
            <span>·</span>
            <span className="hover:text-zinc-300">Soporte TI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
