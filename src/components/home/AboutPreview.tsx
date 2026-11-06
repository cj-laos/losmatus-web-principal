import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Users } from "lucide-react";

type AboutPreviewProps = {
  description?: string;
};

export function AboutPreview({ description }: AboutPreviewProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Visual Infographic Card in Black & Yellow */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-zinc-950 border-2 border-zinc-800 p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="LOSMATUS"
                  width={110}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
                <span className="rounded-full bg-[#FFE500] px-3 py-1 text-[11px] font-black text-black">
                  Lima, Perú
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black leading-tight sm:text-3xl text-white">
                Ingeniería, Tecnología y Compromiso en un solo aliado
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Somos una empresa peruana con sede en Lima especializada en la dirección, implementación y supervisión de proyectos de infraestructura tecnológica y seguridad electrónica.
              </p>

              <div className="mt-8 space-y-4 border-t border-zinc-800 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFE500] text-black font-bold">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#FFE500]">Nuestra Misión</h3>
                    <p className="mt-1 text-xs text-zinc-200 italic">
                      &ldquo;Brindar soluciones con dedicación y esfuerzo, asegurando que cada servicio aporte valor real a su negocio.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFE500] text-black font-bold">
                    <Eye className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#FFE500]">Nuestra Visión</h3>
                    <p className="mt-1 text-xs text-zinc-200 italic">
                      &ldquo;Ser una empresa de confianza que genere valor sostenible, superando las expectativas de los clientes con excelencia y cumplimiento.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Pitch */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-900 bg-[#FFE500] px-3 py-1 rounded-md">
              <Users className="h-4 w-4 text-black" />
              Sobre Nosotros
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Más que un proveedor, tu departamento técnico de confianza
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {description ||
                "En LOSMATUS entendemos que la tecnología no es un fin en sí misma, sino el motor que garantiza que tu equipo trabaje sin interrupciones, tus datos estén protegidos y tus instalaciones cumplan con los más altos estándares de seguridad."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Desde el cableado estructurado certificado de oficinas y almacenes hasta centros de datos con climatización de precisión y circuitos cerrados de videovigilancia con analítica facial, nos aseguramos de que cada sol invertido se traduzca en estabilidad operativa.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-black text-[#FFE500] shadow-sm transition-all hover:bg-zinc-800"
              >
                <span>Conocer más de nuestra trayectoria</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-4 text-sm font-black text-black transition-all hover:bg-zinc-100"
              >
                <span>Hablar con un asesor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
