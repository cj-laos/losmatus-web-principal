import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/sections/ContactForm";
import { sanityClient } from "@/lib/sanity/client";
import { HOME_QUERY } from "@/lib/sanity/queries";
type HomeData={titulo?:string;subtitulo?:string;descripcionEmpresa?:string;servicios?:Array<{titulo:string;descripcion:string}>};
export default async function HomePage(){
 let content:HomeData|null=null;
 if(sanityClient){try{content=await sanityClient.fetch<HomeData|null>(HOME_QUERY,{}, {next:{revalidate:60}});}catch(error){console.error("No se pudo cargar contenido de Sanity",error);}}
 const servicios=content?.servicios?.filter((s):s is {titulo:string;descripcion:string}=>Boolean(s?.titulo&&s?.descripcion)).map(s=>({title:s.titulo,description:s.descripcion}));
 return <><Hero title={content?.titulo||"Tecnología que impulsa tu negocio"} subtitle={content?.subtitulo||"Diseñamos, implementamos y mantenemos soluciones de TI para empresas."}/><Services items={servicios?.length?servicios:undefined}/><section id="nosotros" className="bg-white px-5 py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">Sobre LOSMATUS</h2><p className="mt-5 max-w-3xl text-lg text-slate-600">{content?.descripcionEmpresa||"Acompañamos a las organizaciones con servicios integrales de soporte, conectividad, seguridad e infraestructura tecnológica."}</p></div></section><ContactForm/></>;
}
