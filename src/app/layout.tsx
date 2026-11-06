import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { sanityClient } from "@/lib/sanity/client";
import { THEME_QUERY } from "@/lib/sanity/queries";

type ThemeData = {
  colorAcento?: string;
  colorAcentoHover?: string;
  colorTextoBotonAcento?: string;
  colorOscuro?: string;
  colorWhatsApp?: string;
  filtroPortada?: "oscuro" | "claro";
};

const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "LOSMATUS S.A.C. | Soluciones de Tecnología e Infraestructura TI",
    template: "%s | LOSMATUS S.A.C.",
  },
  description:
    "Expertos en cableado estructurado, data centers, videovigilancia CCTV, control de acceso biométrico y soporte TI para empresas en Lima y Perú.",
  openGraph: {
    title: "LOSMATUS S.A.C. | Tecnología e Infraestructura",
    description:
      "Soluciones tecnológicas integrales con dedicación, calidad y esfuerzo. Soporte On-Site y Remoto.",
    locale: "es_PE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let theme: ThemeData | null = null;
  if (sanityClient) {
    try {
      theme = await sanityClient.fetch<ThemeData | null>(
        THEME_QUERY,
        {},
        { next: { revalidate: 30 } }
      );
    } catch (e) {
      console.error("Error al cargar tema desde Sanity:", e);
    }
  }

  const colorAcento = theme?.colorAcento || "#FFE500";
  const colorAcentoHover = theme?.colorAcentoHover || theme?.colorAcento || "#F2D600";
  const colorTextoBoton = theme?.colorTextoBotonAcento || "#ffffff";
  const colorOscuro = theme?.colorOscuro || "#09090b";
  const colorWhatsApp = theme?.colorWhatsApp || "#25D366";
  const filtroPortada = theme?.filtroPortada || "oscuro";

  return (
    <html
      lang="es"
      style={
        {
          "--brand-yellow": colorAcento,
          "--brand-yellow-hover": colorAcentoHover,
          "--brand-accent-text": colorTextoBoton,
          "--brand-dark": colorOscuro,
          "--brand-whatsapp": colorWhatsApp,
        } as React.CSSProperties
      }
    >
      <body
        data-hero-filter={filtroPortada}
        className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col justify-between"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
