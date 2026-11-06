import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-[#121214] to-black py-20 text-white border-t border-zinc-800">
      {/* Yellow ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,229,0,0.18),rgba(0,0,0,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE500]/40 bg-zinc-950 px-4 py-1.5 text-xs font-black text-[#FFE500]">
            <ShieldCheck className="h-4 w-4 text-[#FFE500]" />
            Asesoría Técnica y Levantamiento Inicial Sin Costo
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Listo para llevar la infraestructura de tu empresa al siguiente nivel?
          </h2>

          <p className="mt-6 text-base text-zinc-300 sm:text-lg">
            Permítenos evaluar tus requerimientos de redes, videovigilancia o soporte TI. Nuestro equipo de ingenieros elaborará una propuesta técnica a la medida de tu presupuesto y necesidades.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFE500] px-8 py-4 text-sm font-black text-black shadow-xl shadow-[#FFE500]/20 transition-all hover:bg-[#F2D600] hover:scale-[1.02]"
            >
              <span>Solicitar Cotización Inmediata</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20solicitar%20una%20reuni%C3%B3n%20para%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800 hover:border-[#FFE500] hover:text-[#FFE500]"
            >
              <MessageSquare className="h-4 w-4 text-[#FFE500]" />
              <span>WhatsApp: +51 919 045 761</span>
            </a>

            <a
              href="tel:+51919045761"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-4 text-sm font-bold text-zinc-300 backdrop-blur-sm transition-all hover:text-[#FFE500] hover:border-zinc-700"
            >
              <Phone className="h-4 w-4 text-[#FFE500]" />
              <span>Llamar al +51 919 045 761</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
