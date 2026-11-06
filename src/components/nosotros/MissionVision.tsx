import { Target, Eye, ShieldCheck, HeartHandshake, Award, Zap } from "lucide-react";

export function MissionVision() {
  const pillars = [
    {
      title: "Dedicación",
      desc: "Tratamos cada proyecto con cercanía, empatía y adaptabilidad a las operaciones del cliente.",
      icon: HeartHandshake,
    },
    {
      title: "Calidad",
      desc: "Instalaciones impecables bajo normativas internacionales y equipamiento de marcas certificadas.",
      icon: Award,
    },
    {
      title: "Esfuerzo",
      desc: "Compromiso de entrega a tiempo y resolución eficaz ante contingencias críticas.",
      icon: Zap,
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Misión y Visión en Negro y Amarillo */}
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#FFE500]">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-black text-zinc-950">Nuestra Misión</h2>
            <blockquote className="mt-4 border-l-4 border-[#FFE500] bg-zinc-50 p-4 text-base italic leading-relaxed text-zinc-800 rounded-r-xl">
              &ldquo;Brindar soluciones con dedicación y esfuerzo, asegurando que cada servicio aporte valor real a su negocio.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Nos enfocamos en comprender a fondo la dinámica de tu negocio para diseñar soluciones que optimicen tus procesos y generen un retorno tangible en productividad y seguridad.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#FFE500]">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-black text-zinc-950">Nuestra Visión</h2>
            <blockquote className="mt-4 border-l-4 border-[#FFE500] bg-zinc-50 p-4 text-base italic leading-relaxed text-zinc-800 rounded-r-xl">
              &ldquo;Ser una empresa de confianza que genere valor sostenible, superando las expectativas de los clientes con excelencia y cumplimiento.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Aspiramos a consolidarnos como el socio estratégico indiscutible para empresas que requieren soporte tecnológico continuo, infraestructura confiable y seguridad electrónica en Perú.
            </p>
          </article>
        </div>

        {/* Pilares Corporativos */}
        <div className="mt-16 rounded-3xl bg-white border-2 border-zinc-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-[#FFE500] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black">
              Cultura Organizacional
            </span>
            <h2 className="mt-4 text-2xl font-black text-zinc-950 sm:text-3xl">Nuestros Valores Fundamentales</h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center rounded-2xl border border-zinc-200 p-6 bg-zinc-50/50">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-black text-[#FFE500]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-zinc-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-black p-6 text-white text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[#FFE500] shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">LOSMATUS S.A.C. — RUC y Razón Social Verificada</p>
                <p className="text-xs text-zinc-400">Atención técnica presencial en Lima Metropolitana y soporte remoto nacional.</p>
              </div>
            </div>
            <a
              href="https://wa.me/51919045761"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-xl bg-[#FFE500] px-5 py-2.5 text-xs font-black text-black hover:bg-[#F2D600] sm:mt-0 transition-colors"
            >
              Contactar a Gerencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
