import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";
import type { Service } from "@/types/service";

export function FeaturedServices({ services }: { services?: Service[] }) {
  return (
    <section className="bg-zinc-50 py-24 sm:py-28 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE500] px-4 py-1.5 text-xs font-black text-black">
            <Sparkles className="h-3.5 w-3.5 text-black" />
            Catálogo de Especialidades
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Soluciones TI diseñadas para la continuidad de tu negocio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Combinamos ingeniería, materiales certificados de alta gama y atención proactiva para mantener tu infraestructura siempre disponible y segura.
          </p>
        </div>

        {/* Services Grid with Filter */}
        <div className="mt-12">
          <ServiceGrid services={services} showFilter={true} limit={6} />
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-7 py-4 text-sm font-black text-[#FFE500] shadow-[3px_3px_0px_0px_rgba(255,229,0,1)] transition-all hover:bg-[#FFE500] hover:text-black hover:shadow-none"
          >
            <span>Explorar catálogo completo de servicios</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
