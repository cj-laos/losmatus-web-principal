import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime="nodejs";
function safe(value:unknown,max:number){return typeof value==="string"?value.trim().slice(0,max):"";}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}
export async function POST(req:Request){
 let body:Record<string,unknown>;
 try {const payload:unknown=await req.json();if(!payload||typeof payload!=="object"||Array.isArray(payload))return NextResponse.json({error:"Solicitud inválida"},{status:400});body=payload as Record<string,unknown>;}catch{return NextResponse.json({error:"JSON inválido"},{status:400});}
 if(safe(body.website,500))return NextResponse.json({ok:true});
 const nombre=safe(body.nombre,120),correo=safe(body.correo,254),empresa=safe(body.empresa,120),mensaje=safe(body.mensaje,3000);
 if(!nombre||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)||mensaje.length<10)return NextResponse.json({error:"Datos inválidos"},{status:400});
 if(!process.env.RESEND_API_KEY||!process.env.RESEND_FROM_EMAIL||!process.env.CONTACT_TO_EMAIL)return NextResponse.json({error:"Servicio no configurado"},{status:503});
 const resend=new Resend(process.env.RESEND_API_KEY);
 try {const {error}=await resend.emails.send({from:process.env.RESEND_FROM_EMAIL,to:[process.env.CONTACT_TO_EMAIL],replyTo:correo,subject:"Nuevo contacto desde la web LOSMATUS",html:`<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto"><div style="padding:24px;background:#0d5675;color:white"><h1>LOSMATUS</h1><p>Nuevo mensaje desde la web</p></div><div style="padding:24px"><p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p><p><strong>Correo:</strong> ${escapeHtml(correo)}</p><p><strong>Empresa:</strong> ${escapeHtml(empresa||"No indicada")}</p><h3>Mensaje</h3><p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p></div></div>`});if(error)throw new Error(error.message);return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"No se pudo enviar el mensaje"},{status:502});}
}
