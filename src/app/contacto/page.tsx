import type {Metadata} from "next";
import {ContactForm} from "@/components/contacto/ContactForm";
import {ContactIntro} from "@/components/contacto/ContactIntro";
export const metadata:Metadata={title:"Contacto",description:"Contacta con LOSMATUS para recibir asesoría sobre soluciones tecnológicas empresariales."};
export default function ContactoPage(){return <section className="bg-slate-100 px-5 py-20"><div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2"><ContactIntro/><ContactForm/></div></section>}