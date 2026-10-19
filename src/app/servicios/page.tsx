import type {Metadata} from "next";
import {ServiceGrid} from "@/components/servicios/ServiceGrid";
export const metadata:Metadata={title:"Servicios",description:"Servicios de soporte TI, cableado estructurado, CCTV y mantenimiento tecnológico."};
export default function ServiciosPage(){return <main className="mx-auto max-w-6xl px-5 py-20"><h1 className="text-4xl font-bold">Servicios</h1><p className="mt-4 text-slate-600">Explora nuestras soluciones tecnológicas.</p><ServiceGrid/></main>}