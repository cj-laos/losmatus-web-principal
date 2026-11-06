import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, Network, Server, Video, Headphones, ShieldCheck } from "lucide-react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
};

export function Hero({
  title = "Tecnología e Infraestructura TI que Impulsan tu Empresa",
  subtitle = "Especialistas en cableado estructurado, data centers, videovigilancia y soporte técnico integral en Lima y todo el Perú.",
  bgImageUrl = "/images/fondos/fondo1.jpeg",
}: HeroProps) {
  const currentBg = bgImageUrl || "/images/fondos/fondo1.jpeg";

  return (
    <section className="hero-cover-container relative overflow-hidden bg-zinc-950 text-white min-h-[85vh] flex items-center">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentBg}
          alt="Portada LOSMATUS TI"
          fill
          priority
          className="object-cover object-center opacity-50 mix-blend-luminosity"
        />
        <div className="hero-overlay-gradient absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
        <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/40" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#FFE500]/40 bg-black/80 px-4 py-1.5 text-xs font-bold text-[#FFE500] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#FFE500] animate-ping" />
              <span>LOSMATUS S.A.C. · Ingeniería & Tecnología Empresarial</span>
            </div>

            {/* Heading */}
            <h1 className="hero-title mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
              {title}
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl max-w-2xl">
              {subtitle}
            </p>

            {/* Highlights bullet points */}
            <div className="hero-text-zinc mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-zinc-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FFE500] shrink-0" />
                <span>Cableado Cat 6 / 6A y Fibra Óptica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FFE500] shrink-0" />
                <span>CCTV IP & Monitoreo 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FFE500] shrink-0" />
                <span>Soporte Helpdesk On-Site y Remoto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FFE500] shrink-0" />
                <span>Data Centers de Alta Disponibilidad</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFE500] px-7 py-4 text-sm font-extrabold text-black shadow-lg shadow-[#FFE500]/20 transition-all hover:bg-[#F2D600] hover:scale-[1.02]"
              >
                <span>Solicitar Asesoría Técnica</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20cotizar%20un%20proyecto%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-black/70 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-800 hover:border-[#FFE500]/60 hover:text-[#FFE500]"
              >
                <MessageSquare className="h-4 w-4 text-[#FFE500]" />
                <span>WhatsApp: +51 919 045 761</span>
              </a>
            </div>
          </div>

          {/* Right Visual Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="hero-ecosystem-card relative mx-auto max-w-md rounded-2xl border border-zinc-700/80 bg-zinc-900/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFE500]/10 text-[#FFE500]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold !text-white">Ecosistema LOSMATUS</h2>
                    <p className="text-[11px] !text-zinc-300">Infraestructura y Servicios Activos</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/30 px-2.5 py-1 text-[11px] font-bold text-[#FFE500]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFE500] animate-pulse" />
                  100% Operativo
                </span>
              </div>

              {/* Service Cards Mini-List */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-zinc-700/70 bg-zinc-800/80 p-3.5 transition-colors hover:border-[#FFE500]/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFE500]/10 text-[#FFE500]">
                      <Network className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold !text-white">Cableado & Racks</p>
                      <p className="text-[10px] !text-zinc-300">Certificación y Conectividad</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#FFE500]">Garantizado</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-700/70 bg-zinc-800/80 p-3.5 transition-colors hover:border-[#FFE500]/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFE500]/10 text-[#FFE500]">
                      <Video className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold !text-white">Seguridad & CCTV IP</p>
                      <p className="text-[10px] !text-zinc-300">Monitoreo y Acceso Biométrico</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#FFE500]">Alta Definición</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-700/70 bg-zinc-800/80 p-3.5 transition-colors hover:border-[#FFE500]/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFE500]/10 text-[#FFE500]">
                      <Server className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold !text-white">Data Center & Servidores</p>
                      <p className="text-[10px] !text-zinc-300">Respaldo UPS y Climatización</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#FFE500]">Alta Disponibilidad</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-700/70 bg-zinc-800/80 p-3.5 transition-colors hover:border-[#FFE500]/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFE500]/10 text-[#FFE500]">
                      <Headphones className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold !text-white">Mesa de Ayuda TI</p>
                      <p className="text-[10px] !text-zinc-300">Soporte On-Site y Remoto</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#FFE500]">SLA Inmediato</span>
                </div>
              </div>

              {/* Bottom Quote Box */}
              <div className="mt-5 rounded-xl bg-zinc-800/90 border border-zinc-700/60 p-3 text-center">
                <p className="text-xs !text-zinc-200">
                  Nuestros pilares: <strong className="text-[#FFE500]">Dedicación · Calidad · Esfuerzo</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
