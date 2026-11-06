import type { Metadata } from "next";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";
import { CallToAction } from "@/components/home/CallToAction";
import { sanityClient } from "@/lib/sanity/client";
import { SERVICES_PAGE_QUERY } from "@/lib/sanity/queries";
import Image from "next/image";
import type { Service } from "@/types/service";

type ServicesPageData = {
  titulo?: string;
  subtitulo?: string;
  imagenPortadaUrl?: string;
  servicios?: Array<{
    titulo: string;
    descripcion: string;
    slug?: { current: string };
    categoria?: string;
    esDestacado?: boolean;
    beneficios?: string[];
  }>;
};

export const metadata: Metadata = {
  title: "Servicios de Tecnología e Infraestructura",
  description:
    "Catálogo completo de servicios: Cableado estructurado, Data Centers, CCTV, Control de acceso biométrico y Mesa de ayuda TI en Lima y Perú.",
};

export default async function ServiciosPage() {
  let content: ServicesPageData | null = null;

  if (sanityClient) {
    try {
      content = await sanityClient.fetch<ServicesPageData | null>(
        SERVICES_PAGE_QUERY,
        {},
        { next: { revalidate: 60 } }
      );
    } catch (e) {
      console.error("Error al cargar datos de Servicios de Sanity", e);
    }
  }

  const title = content?.titulo || "Nuestras Soluciones Corporativas";
  const subtitle =
    content?.subtitulo ||
    "Ingeniería aplicada, instalación certificada y soporte técnico preventivo y correctivo para empresas en todo el Perú.";
  const bgImage = content?.imagenPortadaUrl || "/images/fondos/fondo3.jpeg";

  const mappedServices: Service[] | undefined = content?.servicios
    ?.filter((s) => s?.titulo && s?.descripcion)
    .map((s) => ({
      title: s.titulo,
      description: s.descripcion,
      slug: s.slug?.current,
      category: s.categoria as Service["category"],
      esDestacado: s.esDestacado || false,
      beneficios: s.beneficios || [],
      popular: s.esDestacado || false,
      highlights: s.beneficios || [],
    }));

  return (
    <>
      <section className="hero-cover-container relative overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white min-h-[40vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Portada Servicios"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="hero-overlay-gradient absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-[#FFE500] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black">
              Catálogo Especializado
            </span>
            <h1 className="hero-title mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="hero-subtitle mt-4 text-lg text-zinc-300">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ServiceGrid showFilter={true} services={mappedServices} />
      </section>

      <CallToAction />
    </>
  );
}
