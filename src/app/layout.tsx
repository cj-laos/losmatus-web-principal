import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
 metadataBase: new URL(url),
 title: { default: "LOSMATUS | Soluciones de tecnología", template: "%s | LOSMATUS" },
 description: "Soluciones tecnológicas para empresas: soporte TI, infraestructura, redes, seguridad electrónica y mantenimiento.",
 openGraph: { title: "LOSMATUS", description: "Soluciones tecnológicas para empresas", locale: "es_PE", type: "website" },
 robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="es"><body className="min-h-screen antialiased"><Header /><main>{children}</main><Footer /></body></html>;
}
