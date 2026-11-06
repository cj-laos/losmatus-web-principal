import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  MessageSquare,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Service } from "@/types/service";

export function ServiceDetail({ service }: { service: Service }) {
  const whatsappUrl = `https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(
    service.title
  )}`;

  return (
    <div className="bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-zinc-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al catálogo de servicios</span>
        </Link>

        {/* Main Card */}
        <article className="mt-8 rounded-3xl border-2 border-zinc-900 bg-white p-8 sm:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {service.category && (
            <span className="inline-block rounded-md bg-[#FFE500] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black">
              {service.category}
            </span>
          )}

          <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            {service.description}
          </p>

          {/* Highlights / Features */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="mt-10 border-t border-zinc-100 pt-8">
              <h2 className="text-lg font-black text-zinc-900">
                Características y Alcances Clave:
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-zinc-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantees Box */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-zinc-100 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-zinc-900">Garantía Certificada</p>
                <p className="text-[11px] text-zinc-500">Materiales y mano de obra avalada</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-zinc-900">Respuesta Rápida</p>
                <p className="text-[11px] text-zinc-500">Atención técnica prioritaria</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-zinc-900">Ingenieros Calificados</p>
                <p className="text-[11px] text-zinc-500">Personal técnico certificado</p>
              </div>
            </div>
          </div>

          {/* Actions CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-black text-[#FFE500] shadow-sm hover:bg-zinc-800 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-[#FFE500]" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFE500] px-7 py-4 text-sm font-black text-black shadow-sm hover:bg-[#F2D600] transition-colors"
            >
              <span>Solicitar Levantamiento Técnico</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+51919045761"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-3.5 text-sm font-bold text-black hover:bg-zinc-100 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+51 919 045 761</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
