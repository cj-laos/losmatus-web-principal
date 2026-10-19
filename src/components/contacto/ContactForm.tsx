"use client";
import {useState,type FormEvent} from "react";
export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 async function onSubmit(event:FormEvent<HTMLFormElement>){
 event.preventDefault();const form=event.currentTarget;setStatus("sending");
 try{const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))});if(!response.ok)throw new Error();setStatus("success");form.reset();}catch{setStatus("error");}
 }
 return <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-white p-7 shadow-sm">
 <label className="grid gap-2">Nombre<input required name="nombre" maxLength={120} className="rounded border p-3"/></label>
 <label className="grid gap-2">Correo<input required type="email" name="correo" className="rounded border p-3"/></label>
 <label className="grid gap-2">Empresa<input name="empresa" className="rounded border p-3"/></label>
 <label className="grid gap-2">Mensaje<textarea required name="mensaje" rows={5} minLength={10} maxLength={3000} className="rounded border p-3"/></label>
 <label className="hidden" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off"/></label>
 <button disabled={status==="sending"} className="rounded bg-brand px-6 py-3 font-semibold text-white disabled:opacity-50">{status==="sending"?"Enviando...":"Enviar mensaje"}</button>
 {status==="success"&&<p role="status" className="text-green-700">Mensaje enviado.</p>}{status==="error"&&<p role="alert" className="text-red-700">No fue posible enviar el mensaje.</p>}
 </form>;
}