import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function safe(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c] || c)
  );
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    const payload: unknown = await req.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
    }
    body = payload as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  // Honeypot spam protection
  if (safe(body.website, 500)) {
    return NextResponse.json({ ok: true });
  }

  const nombre = safe(body.nombre, 120);
  const correo = safe(body.correo, 254);
  const empresa = safe(body.empresa, 120);
  const telefono = safe(body.telefono, 60);
  const servicioInteres = safe(body.servicioInteres, 120);
  const mensaje = safe(body.mensaje, 3000);

  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || mensaje.length < 10) {
    return NextResponse.json({ error: "Datos de contacto inválidos o mensaje muy corto" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Servicio de correo no configurado aún en variables de entorno." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: correo,
      subject: `Nuevo contacto web LOSMATUS: ${nombre} - ${empresa || "Empresa"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px; background: #0d5675; color: white;">
            <h1 style="margin: 0; font-size: 22px;">LOSMATUS S.A.C.</h1>
            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Nuevo contacto recibido desde el sitio web</p>
          </div>
          <div style="padding: 24px; background: #ffffff; color: #1e293b; line-height: 1.6;">
            <p style="margin-top: 0;"><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
            <p><strong>Correo Electrónico:</strong> <a href="mailto:${escapeHtml(correo)}">${escapeHtml(correo)}</a></p>
            <p><strong>Teléfono / WhatsApp:</strong> ${escapeHtml(telefono || "No especificado")}</p>
            <p><strong>Empresa:</strong> ${escapeHtml(empresa || "No indicada")}</p>
            <p><strong>Servicio de Interés:</strong> ${escapeHtml(servicioInteres || "General")}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <h3 style="margin: 0 0 8px 0; color: #0d5675;">Detalle del Mensaje:</h3>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${escapeHtml(mensaje)}</p>
          </div>
          <div style="padding: 16px 24px; background: #f1f5f9; font-size: 12px; color: #64748b; text-align: center;">
            Este mensaje fue enviado desde el formulario web oficial de LOSMATUS (losmatus.com).
          </div>
        </div>
      `,
    });

    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: `No se pudo enviar el correo: ${msg}` }, { status: 502 });
  }
}
