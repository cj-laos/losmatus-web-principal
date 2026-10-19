export type Service = {title:string;description:string};
const defaults:Service[]=[
 {title:"Mesa de ayuda y soporte TI",description:"Atención técnica y continuidad operativa para empresas."},
 {title:"Redes y cableado estructurado",description:"Implementación y mantenimiento de infraestructura de conectividad."},
 {title:"Videovigilancia y seguridad",description:"Soluciones CCTV, control de acceso y seguridad electrónica."},
 {title:"Mantenimiento tecnológico",description:"Servicios preventivos y correctivos para equipos e infraestructura."},
];
export function Services({items=defaults}:{items?:Service[]}){return <section id="servicios" className="mx-auto max-w-6xl px-5 py-20"><h2 className="text-3xl font-bold">Nuestros servicios</h2><p className="mt-3 text-slate-600">Tecnología alineada con las necesidades de tu empresa.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{items.map(s=><article key={s.title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-bold text-brand">{s.title}</h3><p className="mt-3 text-slate-600">{s.description}</p></article>)}</div></section>;}
