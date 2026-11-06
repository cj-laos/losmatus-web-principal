import Image from "next/image";

export interface ClientItem {
  name: string;
  logo: string;
}

const DEFAULT_CLIENTS: ClientItem[] = [
  { name: "Cuida", logo: "/images/marcas/cuida_logo.png" },
  { name: "Degpro Group", logo: "/images/marcas/degpro_logo.png" },
  { name: "Ericsson", logo: "/images/marcas/ericsson_logo.png" },
  { name: "Vinifan", logo: "/images/marcas/vinifan_logo.png" },
  { name: "Win Empresas", logo: "/images/marcas/win_logo.png" },
  { name: "Cipsa", logo: "/images/marcas/cipsa_logo.png" },
];

interface ClientsTickerProps {
  title?: string;
  clients?: ClientItem[];
}

export function ClientsTicker({
  title = "CONFÍAN EN NOSOTROS",
  clients = DEFAULT_CLIENTS,
}: ClientsTickerProps) {
  const displayList = clients && clients.length > 0 ? clients : DEFAULT_CLIENTS;
  // Duplicamos la lista para lograr un scroll infinito continuo y fluido
  const loopedList = [...displayList, ...displayList];

  return (
    <section className="relative w-full py-10 bg-white border-y border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
          {title}
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Sombras difuminadas en los bordes para una transición suave */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {loopedList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 h-14 sm:h-16 px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={60}
                className="max-h-12 sm:max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
