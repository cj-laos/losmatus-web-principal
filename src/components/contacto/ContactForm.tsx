"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Error al procesar el mensaje");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("No fue posible enviar el mensaje. Por favor contáctanos por WhatsApp.");
      }
    }
  }

  return (
    <div className="rounded-3xl border-2 border-zinc-900 bg-white p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-black tracking-tight text-zinc-950">
        Envíanos un mensaje
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        Completa los campos a continuación y un ingeniero técnico se comunicará en menos de 2 horas hábiles.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
            Nombre y Apellidos *
            <input
              required
              name="nombre"
              maxLength={120}
              placeholder="Ej. Carlos Mendoza"
              className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
            />
          </label>

          <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
            Empresa / Organización *
            <input
              required
              name="empresa"
              maxLength={120}
              placeholder="Ej. Innova Tech SAC"
              className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
            Correo Corporativo *
            <input
              required
              type="email"
              name="correo"
              placeholder="nombre@empresa.com"
              className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
            />
          </label>

          <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
            Teléfono / WhatsApp *
            <input
              required
              type="tel"
              name="telefono"
              placeholder="+51 999 999 999"
              className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
            />
          </label>
        </div>

        <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
          Servicio de Interés
          <select
            name="servicioInteres"
            defaultValue="Cableado Estructurado y Redes"
            className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
          >
            <option value="Cableado Estructurado y Redes">Cableado Estructurado y Redes (Cat 6, 6A, Fibra)</option>
            <option value="Data Centers y Climatización">Diseño e Implementación de Data Centers</option>
            <option value="Videovigilancia y Cámaras CCTV">Videovigilancia y Cámaras CCTV IP</option>
            <option value="Control de Acceso Biométrico">Control de Acceso y Asistencia Biométrico</option>
            <option value="Mesa de Ayuda y Helpdesk TI">Mesa de Ayuda y Soporte TI Corporativo</option>
            <option value="Mantenimiento Preventivo y Correctivo">Mantenimiento Preventivo y Correctivo</option>
            <option value="Aulas y Oficinas Inteligentes">Aulas y Oficinas Inteligentes</option>
            <option value="Hardware y Licenciamiento">Venta de Hardware y Licenciamiento</option>
            <option value="Otro Requerimiento">Otro requerimiento técnico</option>
          </select>
        </label>

        <label className="block text-xs font-black uppercase tracking-wider text-zinc-800">
          Detalle del requerimiento o proyecto *
          <textarea
            required
            name="mensaje"
            rows={4}
            minLength={10}
            maxLength={3000}
            placeholder="Describe brevemente la cantidad de puntos de red, ubicación del local, requerimientos de cámaras o necesidad de soporte..."
            className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50/50 p-3.5 text-sm text-zinc-900 transition-colors focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
          />
        </label>

        {/* Honeypot field for anti-spam */}
        <div className="hidden" aria-hidden="true">
          <label>
            Sitio web
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFE500] border-2 border-black py-4 text-sm font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#F2D600] disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-black" />
              <span>Enviando información...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 text-black" />
              <span>Enviar Solicitud de Cotización</span>
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 border-2 border-black p-4 text-[#FFE500]">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FFE500]" />
            <p className="text-sm font-bold">
              ¡Gracias! Tu mensaje ha sido recibido con éxito. Un asesor técnico se comunicará contigo a la brevedad.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 rounded-xl bg-red-50 border-2 border-red-200 p-4 text-red-800">
            <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
            <p className="text-sm font-bold">
              {errorMessage || "No se pudo enviar el correo por el formulario. Por favor contáctanos directamente por WhatsApp al +51 919 045 761."}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
