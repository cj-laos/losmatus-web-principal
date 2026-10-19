"use client";
import { useState, type FormEvent } from "react";
export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();setStatus("sending");
  const form=event.currentTarget;
  const data=Object.fromEntries(new FormData(form).entries());
  try {const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}); if(!res.ok) throw new Error("No enviado");setStatus("success");form.reset();}
  catch {setStatus("error");}
 }
 return <section id="contacto" className="bg-slate-100 px-5 py-20"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold">Conversemos sobre tu proyecto</h2><p className="mt-3 text-slate-600">Cuéntanos qué necesitas y te contactaremos.</p><form onSubmit={submit} className="mt-8 grid gap-4 rounded-xl bg-white p-7 shadow-sm"><label className="grid gap-2">Nombre<input required name="nombre" maxLength={120} autoComplete="name" className="rounded border p-3"/></label><label className="grid gap-2">Correo<input required name="correo" type="email" maxLength={254} autoComplete="email" className="rounded border p-3"/></label><label className="grid gap-2">Empresa<input name="empresa" maxLength={120} className="rounded border p-3"/></label><label className="grid gap-2">Mensaje<textarea required name="mensaje" minLength={10} maxLength={3000} rows={5} className="rounded border p-3"/></label><div className="hidden" aria-hidden="true"><label>No completar<input name="website" tabIndex={-1} autoComplete="off"/></label></div><button disabled={status==="sending"} className="rounded bg-brand px-6 py-3 font-semibold text-white disabled:opacity-50">{status==="sending"?"Enviando...":"Enviar mensaje"}</button>{status==="success"&&<p role="status" className="text-green-700">Mensaje enviado correctamente.</p>}{status==="error"&&<p role="alert" className="text-red-700">No se pudo enviar. Intenta nuevamente.</p>}</form></div></section>;
}
