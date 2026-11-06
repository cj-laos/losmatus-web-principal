import Link from "next/link";

export function BrochureBanner() {
  return (
    <section className="w-full bg-[#09090b] border-y border-zinc-800 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 rounded-3xl border-2 border-zinc-800 bg-gradient-to-br from-zinc-950 via-[#121214] to-black p-8 sm:p-10 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-5 sm:gap-7">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] shadow-lg shadow-[#FFE500]/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">Descargue nuestro Portafolio 2026</h3>
            <p className="mt-1 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">Obtenga el detalle técnico completo de nuestros servicios, certificaciones y lista completa de clientes en formato PDF.</p>
          </div>
        </div>
        <Link
          href="/docs/brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-[#FFE500] px-7 py-4 text-sm font-extrabold text-black shadow-xl shadow-[#FFE500]/20 transition-all hover:bg-[#F2D600] hover:scale-[1.03] border-2 border-black whitespace-nowrap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          <span>Descargar Brochure</span>
        </Link>
      </div>
    </section>
  );
}
