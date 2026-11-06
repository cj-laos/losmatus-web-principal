import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";

interface ContactIntroProps {
  contactData?: {
    telefono?: string;
    email?: string;
    direccion?: string;
  };
}

export function ContactIntro({ contactData }: ContactIntroProps) {
  const defaultPhone = "+51 919 045 761";
  const defaultEmail = "hola@losmatus.com";
  const defaultAddress = "Lima, Perú";

  const phone = contactData?.telefono || defaultPhone;
  const email = contactData?.email || defaultEmail;
  const address = contactData?.direccion || defaultAddress;

  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full bg-[#FFE500] px-4 py-1.5 text-xs font-black text-black">
        <ShieldCheck className="h-4 w-4 text-black" />
        Atención Directa a Empresas
      </div>

      <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
        Hablemos de tu próximo proyecto tecnológico
      </h1>

      <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
        En <strong>LOSMATUS S.A.C.</strong> estamos listos para atender tus consultas técnicas, visitas de levantamiento de información o cotizaciones de infraestructura y soporte TI.
      </p>

      {/* Direct Contact Cards */}
      <div className="mt-10 space-y-4">
        <div className="flex items-start gap-4 rounded-2xl border-2 border-zinc-900 bg-white p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-zinc-500">Teléfono & WhatsApp</p>
            <a
              href={`https://wa.me/51919045761`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-base font-black text-zinc-950 hover:text-black transition-colors block"
            >
              +51 919 045 761
            </a>
            <p className="text-xs text-zinc-500">Línea directa para coordinación de proyectos</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border-2 border-zinc-900 bg-white p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-zinc-500">Correo Electrónico</p>
            <a
              href={`mailto:${email}`}
              className="mt-1 text-base font-black text-zinc-950 hover:text-black transition-colors block"
            >
              {email}
            </a>
            <p className="text-xs text-zinc-500">Envíanos tus requerimientos o solicitudes técnicas</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border-2 border-zinc-900 bg-white p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-zinc-500">Sede Principal</p>
            <p className="mt-1 text-base font-black text-zinc-950">Lima, Perú</p>
            <p className="text-xs text-zinc-500">Servicio técnico presencial en Lima Metropolitana y Callao</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border-2 border-zinc-900 bg-white p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[#FFE500]">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-zinc-500">Horario de Atención</p>
            <p className="mt-1 text-sm font-bold text-zinc-950">Lunes a Viernes: 8:30 AM – 6:30 PM</p>
            <p className="text-xs text-zinc-500">Sábados: 9:00 AM – 1:00 PM (Servicio 24/7 con contrato SLA)</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="https://wa.me/51919045761?text=Hola%20LOSMATUS,%20deseo%20hacer%20una%20consulta%20r%C3%A1pida"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#FFE500] border-2 border-black px-7 py-4 text-sm font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F2D600] transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Escribir directamente al WhatsApp</span>
        </a>
      </div>
    </div>
  );
}