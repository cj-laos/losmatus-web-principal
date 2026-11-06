"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Service, ServiceCategory } from "@/types/service";
import { defaultServices } from "@/lib/services";

export function ServiceGrid({ services = defaultServices, showFilter = true, limit }: { services?: Service[]; showFilter?: boolean; limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const categories = ["Todos", "Infraestructura", "Seguridad", "Soporte TI"];
  const filtered = (services || []).filter(s => selectedCategory === "Todos" || s.category === selectedCategory).slice(0, limit || (services || []).length);

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 pb-6">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`rounded-full px-5 py-2.5 text-xs font-black transition-all ${selectedCategory === c ? "bg-black text-amber-400 shadow-md scale-105" : "bg-white text-zinc-700 border-2 border-zinc-200 hover:border-black"}`}>{c}</button>
          ))}
        </div>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <article key={service.slug || service.title} className="group relative flex flex-col justify-between rounded-2xl border-2 border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(255,229,0,1)]">
            {service.esDestacado && (
              <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-400 border border-black px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                <Sparkles className="h-3 w-3" />Destacado
              </div>
            )}
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-amber-400">{service.iconName ? service.iconName.substring(0,2) : "SD"}</div>
                {(service.category || service.categoria) && <span className="rounded-md bg-zinc-100 border border-zinc-300 px-2.5 py-1 text-[11px] font-bold text-zinc-800">{service.category || service.categoria}</span>}
              </div>
              <h3 className="mt-5 text-xl font-black tracking-tight text-zinc-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.description}</p>
              {service.beneficios && service.beneficios.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4">
                  {service.beneficios.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-700"><CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" /><span>{h}</span></li>
                  ))}
                </ul>
              )}
              <div className="mt-6 pt-4 border-t border-zinc-100">
                {service.slug ? (
                  <Link href={`/servicios/${service.slug}`} className="inline-flex items-center gap-1.5 text-sm font-black text-black shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:scale-[1.02]">
                    <span>Conocer detalles del servicio</span><ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <Link href="/contacto" className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:text-zinc-800 transition-colors">
                    <span>Solicitar cotización</span><ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
