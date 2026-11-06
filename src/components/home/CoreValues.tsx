import { Award, Zap, HeartHandshake } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      title: "Dedicación",
      subtitle: "Compromiso total con cada cliente",
      description:
        "Nos involucramos a fondo en los requerimientos particulares de tu empresa, garantizando atención cercana y soluciones a la medida sin plantillas genéricas.",
      icon: HeartHandshake,
      badge: "Atención 1 a 1",
    },
    {
      title: "Calidad",
      subtitle: "Estándares y marcas líderes",
      description:
        "Trabajamos exclusivamente con equipamiento de nivel corporativo certificado (TIA/EIA, Fluke, Cisco, Panduit, Hikvision) para resultados duraderos y sin fallas.",
      icon: Award,
      badge: "Garantía Oficial",
    },
    {
      title: "Esfuerzo",
      subtitle: "Resolución ágil y eficaz",
      description:
        "Desplegamos nuestra capacidad técnica con disciplina y rapidez para resolver contingencias en tiempo récord y optimizar tus inversiones tecnológicas.",
      icon: Zap,
      badge: "Respuesta Rápida",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 border-y border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#FFE500] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black">
            Nuestra Filosofía de Trabajo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
            Los pilares que guían cada proyecto en LOSMATUS
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Aportamos valor real y medible al negocio mediante una ejecución rigurosa y un trato humano y transparente.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group relative rounded-2xl border-2 border-zinc-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,229,0,1)] hover:border-black"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-[#FFE500] transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-md bg-zinc-100 border border-zinc-300 px-2.5 py-1 text-[11px] font-bold text-zinc-800">
                    {v.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-zinc-900">{v.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-500">{v.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
