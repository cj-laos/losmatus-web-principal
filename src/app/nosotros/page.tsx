import type {Metadata} from "next";
import {AboutHero} from "@/components/nosotros/AboutHero";
import {MissionVision} from "@/components/nosotros/MissionVision";
export const metadata:Metadata={title:"Nosotros",description:"Conoce a LOSMATUS S.A.C. y nuestro compromiso con la tecnología empresarial."};
export default function NosotrosPage(){return <><AboutHero/><MissionVision/></>}