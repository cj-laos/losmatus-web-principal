import {Hero} from "@/components/home/Hero";
import {FeaturedServices} from "@/components/home/FeaturedServices";
import {AboutPreview} from "@/components/home/AboutPreview";
import {sanityClient} from "@/lib/sanity/client";
import {HOME_QUERY} from "@/lib/sanity/queries";
type HomeData={titulo?:string;subtitulo?:string;descripcionEmpresa?:string;servicios?:Array<{titulo:string;descripcion:string;slug?:{current:string}}>};
export default async function HomePage(){
 let content:HomeData|null=null;
 if(sanityClient){try{content=await sanityClient.fetch<HomeData|null>(HOME_QUERY,{}, {next:{revalidate:60}});}catch(error){console.error("Error al consultar Sanity",error);}}
 const services=content?.servicios?.filter(s=>s?.titulo&&s?.descripcion).map(s=>({title:s.titulo,description:s.descripcion,slug:s.slug?.current}));
 return <><Hero title={content?.titulo} subtitle={content?.subtitulo}/><FeaturedServices services={services?.length?services:undefined}/><AboutPreview description={content?.descripcionEmpresa}/></>;
}