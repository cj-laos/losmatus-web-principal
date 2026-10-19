import Link from "next/link";
const navigation = [{label:"Inicio",href:"/"},{label:"Servicios",href:"/#servicios"},{label:"Nosotros",href:"/#nosotros"},{label:"Contacto",href:"/#contacto"}];
export function Header() {
 return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"><nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4"><Link href="/" className="text-xl font-bold tracking-tight text-brand">LOSMATUS</Link><div className="flex flex-wrap gap-4 text-sm font-medium">{navigation.map(item=><Link className="hover:text-brand" href={item.href} key={item.label}>{item.label}</Link>)}</div></nav></header>;
}
