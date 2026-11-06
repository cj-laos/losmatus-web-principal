import type { Metadata } from "next";
import { ContactForm } from "@/components/contacto/ContactForm";
import { ContactIntro } from "@/components/contacto/ContactIntro";
import { sanityClient } from "@/lib/sanity/client";
import { CONTACT_PAGE_QUERY } from "@/lib/sanity/queries";
import Image from "next/image";

type ContactPageData = {
  titulo?: string;
  subtitulo?: string;
  imagenPortadaUrl?: string;
  telefono?: string;
  email?: string;
  direccion?: string;
};

export const metadata: Metadata = {
  title: "Contacto y Asesoría Técnica",
  description:
    "Comunícate con LOSMATUS S.A.C. en Lima, Perú. Asesoría técnica en cableado estructurado, data centers, CCTV y soporte TI para tu empresa.",
};

export default async function ContactoPage() {
  let content: ContactPageData | null = null;

  if (sanityClient) {
    try {
      content = await sanityClient.fetch<ContactPageData | null>(
        CONTACT_PAGE_QUERY,
        {},
        { next: { revalidate: 60 } }
      );
    } catch (e) {
      console.error("Error al cargar datos de Contacto de Sanity", e);
    }
  }

  const bgImage = content?.imagenPortadaUrl || "/images/fondos/fondo4.jpeg";

  return (
    <>
      <section className="hero-cover-container relative overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white min-h-[30vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Portada Contacto"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="hero-overlay-gradient absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-[#FFE500] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black">
              Contáctanos
            </span>
            <h1 className="hero-title mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              {content?.titulo || "Hablemos sobre tu proyecto tecnológico"}
            </h1>
            <p className="hero-subtitle mt-4 text-lg text-zinc-300">
              {content?.subtitulo || 
               "Estamos aquí para escuchar tus necesidades y diseñar soluciones a medida para tu empresa en Lima y todo el Perú."}
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50/70 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <ContactIntro contactData={{
                telefono: content?.telefono,
                email: content?.email,
                direccion: content?.direccion
              }} />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}