import Link from "next/link";
export function Hero({title,subtitle}:{title:string;subtitle:string}) {
 return <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#0d5675] px-5 py-28 text-white"><div className="mx-auto max-w-6xl"><span className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">Soluciones empresariales</span><h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg text-slate-200">{subtitle}</p><Link className="mt-9 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300" href="#contacto">Solicitar asesoría</Link></div></section>;
}
