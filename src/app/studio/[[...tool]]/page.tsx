"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

const Studio = dynamic(() => import("next-sanity/studio").then((m) => m.NextStudio), { ssr: false });

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tqvjrmek";

  if (!projectId || projectId === "missing-project-id") {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center bg-zinc-50">
        <div className="max-w-lg rounded-3xl border-2 border-zinc-900 bg-white p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFE500] px-3.5 py-1 text-xs font-black text-black">
            Sanity CMS Studio
          </div>
          <h2 className="text-2xl font-black text-zinc-950">Panel de Administración de Contenido</h2>
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            Para activar el CMS en la nube y editar textos, servicios y banners desde aquí, coloca tu <strong className="text-black">Project ID</strong> en el archivo <code className="rounded bg-zinc-100 border border-zinc-300 px-1.5 py-0.5 font-mono text-xs font-bold text-black">.env.local</code>:
          </p>
          <div className="mt-4 rounded-xl bg-black p-4 text-xs font-mono text-[#FFE500]">
            <p>NEXT_PUBLIC_SANITY_PROJECT_ID=tqvjrmek</p>
            <p>NEXT_PUBLIC_SANITY_DATASET=production</p>
          </div>
        </div>
      </div>
    );
  }

  return <Studio config={config} />;
}
