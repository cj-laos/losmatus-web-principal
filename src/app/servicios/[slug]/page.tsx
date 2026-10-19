import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {defaultServices} from "@/lib/services";
import {ServiceDetail} from "@/components/servicios/ServiceDetail";
export function generateStaticParams(){return defaultServices.map(({slug})=>({slug:slug!}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=defaultServices.find(s=>s.slug===slug);return {title:service?.title||"Servicio",description:service?.description};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service=defaultServices.find(s=>s.slug===slug);if(!service)notFound();return <ServiceDetail service={service}/>}