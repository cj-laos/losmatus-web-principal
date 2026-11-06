import { defineQuery } from "next-sanity";

export const THEME_QUERY = defineQuery(`*[_type == "temaConfig"][0]{
  colorAcento,
  colorAcentoHover,
  colorTextoBotonAcento,
  colorOscuro,
  colorWhatsApp,
  filtroPortada
}`);

export const HOME_QUERY = defineQuery(`*[_type == "paginaInicio"][0]{
  titulo,
  subtitulo,
  descripcionEmpresa,
  "imagenHeroUrl": imagenHero.asset->url,
  servicios[]->{
    titulo, 
    descripcion, 
    "slug": slug.current,
    categoria, 
    esDestacado, 
    beneficios
  },
  clientes[]->{nombre, "logoUrl": logo.asset->url}
}`);

export const ABOUT_QUERY = defineQuery(`*[_type == "paginaNosotros"][0]{
  titulo,
  subtitulo,
  "imagenPortadaUrl": imagenPortada.asset->url,
  mision,
  vision
}`);

export const SERVICES_PAGE_QUERY = defineQuery(`*[_type == "paginaServicios"][0]{
  titulo,
  subtitulo,
  "imagenPortadaUrl": imagenPortada.asset->url,
  "servicios": *[_type == "servicio"] | order(orden asc) {
    titulo, 
    descripcion, 
    "slug": slug.current, 
    categoria, 
    esDestacado, 
    beneficios
  }
}`);

export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "paginaContacto"][0]{
  titulo,
  subtitulo,
  "imagenPortadaUrl": imagenPortada.asset->url,
  telefono,
  email,
  direccion
}`);

export const SERVICES_QUERY = defineQuery(`*[_type == "servicio"] | order(orden asc){
  titulo, 
  descripcion, 
  "slug": slug.current, 
  categoria, 
  esDestacado, 
  beneficios
}`);

export const SERVICE_BY_SLUG_QUERY = defineQuery(`*[_type == "servicio" && slug.current == $slug][0]{
  titulo, 
  descripcion, 
  "slug": slug.current, 
  categoria, 
  esDestacado, 
  beneficios
}`);

export const BROCHURE_QUERY = defineQuery(`*[_type == "brochureConfig"][0]{
  titulo,
  subtitulo,
  textoBoton,
  "fileUrl": archivoPdf.asset->url
}`);
