import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultServices } from "@/lib/services";
import { ServiceDetail } from "@/components/servicios/ServiceDetail";
import { sanityClient } from "@/lib/sanity/client";
import { SERVICE_BY_SLUG_QUERY } from "@/lib/sanity/queries";
import type { Service } from "@/types/service";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let serviceTitle = "Servicio";
  let serviceDesc = "";

  if (sanityClient) {
    try {
      const sanityService = await sanityClient.fetch(SERVICE_BY_SLUG_QUERY, { slug }, { cache: 'no-store' });
      if (sanityService) {
        serviceTitle = sanityService.titulo;
        serviceDesc = sanityService.descripcion;
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  if (!serviceTitle || serviceTitle === "Servicio") {
    const local = defaultServices.find(s => s.slug === slug);
    if (local) {
      serviceTitle = local.title;
      serviceDesc = local.description;
    }
  }

  return { title: serviceTitle, description: serviceDesc };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let service: Service | null = null;

  if (sanityClient) {
    try {
      const s = await sanityClient.fetch(SERVICE_BY_SLUG_QUERY, { slug }, { cache: 'no-store' });
      if (s && s.titulo) {
        service = {
          title: s.titulo,
          description: s.descripcion,
          slug: s.slug?.current || slug,
          category: s.categoria as Service["category"],
          esDestacado: s.esDestacado || false,
          beneficios: s.beneficios || [],
          popular: s.esDestacado || false,
          highlights: s.beneficios || [],
        };
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (!service) {
    const local = defaultServices.find(s => s.slug === slug);
    if (local) service = local;
  }

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
