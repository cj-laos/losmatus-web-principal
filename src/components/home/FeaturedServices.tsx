import Link from "next/link";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";
import type { Service } from "@/types/service";
export function FeaturedServices({services}:{services?:Service[]}){return <section className="mx-auto max-w-6xl px-5 py-20"><h2 className="text-3xl font-bold">Nuestros servicios</h2><p className="mt-3 text-slate-600">Soluciones integrales para empresas.</p><ServiceGrid services={services}/><Link href="/servicios" className="mt-8 inline-block font-semibold text-brand underline">Ver todos los servicios</Link></section>}