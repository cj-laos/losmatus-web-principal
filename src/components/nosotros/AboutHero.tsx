import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { ABOUT_QUERY } from "@/lib/sanity/queries";

type AboutData = {
  titulo?: string;
  subtitulo?: string;
  imagenPortadaUrl?: string;
};

export async function AboutHero() {
  let content: AboutData | null = null;

  if (sanityClient) {
    try {
      content = await sanityClient.fetch<AboutData | null>(
        ABOUT_QUERY,
        {},
        { next: { revalidate: 60 } }
      );
    } catch (e) {
      console.error("Error al cargar datos de Nosotros de Sanity", e);
    }
  }

  const title = content?.titulo || "Ingeniería y Tecnología al Servicio de tu Empresa";
  const subtitle =
    content?.subtitulo ||
    "Desde Lima, Perú, acompañamos a organizaciones de diversos sectores a diseñar, implementar y mantener infraestructuras tecnológicas robustas, seguras y de alto rendimiento.";
  const bgImage = content?.imagenPortadaUrl || "/images/fondos/fondo2.webp";

  return (
    <section className="hero-cover-container relative overflow-hidden bg-zinc-950 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 text-white min-h-[50vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Portada Nosotros"
          fill
          priority
          className="object-cover object-center opacity-50 mix-blend-luminosity"
        />
        <div className="hero-overlay-gradient absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
        <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-[#FFE500] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black">
            Sobre LOSMATUS S.A.C.
          </span>
          <h1 className="hero-title mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="hero-subtitle mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
