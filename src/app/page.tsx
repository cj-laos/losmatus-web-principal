import { Hero } from "@/components/home/Hero";
import { BrochureBanner } from "@/components/home/BrochureBanner";
import { ClientsTicker, ClientItem } from "@/components/home/ClientsTicker";
import { CoreValues } from "@/components/home/CoreValues";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CallToAction } from "@/components/home/CallToAction";
import { sanityClient } from "@/lib/sanity/client";
import { HOME_QUERY } from "@/lib/sanity/queries";

type HomeData = {
  titulo?: string;
  subtitulo?: string;
  descripcionEmpresa?: string;
  imagenHeroUrl?: string;
  servicios?: Array<{
    titulo: string;
    descripcion: string;
    slug?: { current: string };
    categoria?: string;
    esDestacado?: boolean;
    beneficios?: string[];
  }>;
  clientes?: Array<{
    nombre: string;
    logoUrl?: string;
  }>;
};

export default async function HomePage() {
  let content: HomeData | null = null;

  if (sanityClient) {
    try {
      content = await sanityClient.fetch<HomeData | null>(
        HOME_QUERY,
        {},
        { cache: 'no-store' }
      );
    } catch (error) {
      console.error("Error al consultar Sanity CMS, utilizando datos locales.", error);
    }
  }

  const services = content?.servicios
    ?.filter((s) => s?.titulo && s?.descripcion)
    .map((s) => ({
      title: s.titulo,
      description: s.descripcion,
      slug: s.slug?.current,
      category: (s.categoria as any) || "Infraestructura",
      esDestacado: s.esDestacado || false,
      beneficios: s.beneficios || [],
      popular: s.esDestacado || false,
      highlights: s.beneficios || [],
    }));

  const customClients: ClientItem[] | undefined = content?.clientes
    ?.filter((c) => c?.nombre && c?.logoUrl)
    .map((c) => ({
      name: c.nombre,
      logo: c.logoUrl!,
    }));

  return (
    <>
      <Hero
        title={content?.titulo}
        subtitle={content?.subtitulo}
        bgImageUrl={content?.imagenHeroUrl}
      />
      <BrochureBanner />
      <ClientsTicker clients={customClients?.length ? customClients : undefined} />
      <CoreValues />
      <FeaturedServices services={services?.length ? services : undefined} />
      <AboutPreview description={content?.descripcionEmpresa} />
      <CallToAction />
    </>
  );
}
