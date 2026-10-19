"use client";
import dynamic from "next/dynamic";
const Studio=dynamic(()=>import("next-sanity/studio").then(m=>m.NextStudio),{ssr:false});
export default function StudioPage(){ if(!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)return <p className="p-8">Configura NEXT_PUBLIC_SANITY_PROJECT_ID para activar Sanity Studio.</p>;return <Studio/>; }
