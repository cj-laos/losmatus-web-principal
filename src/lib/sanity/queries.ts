import {defineQuery} from "next-sanity";
export const HOME_QUERY=defineQuery('*[_type == "paginaInicio"][0]{titulo,subtitulo,descripcionEmpresa,servicios[]->{titulo,descripcion,slug}}');
export const SERVICES_QUERY=defineQuery('*[_type == "servicio"] | order(orden asc){titulo,descripcion,slug}');
export const SERVICE_BY_SLUG_QUERY=defineQuery('*[_type == "servicio" && slug.current == $slug][0]{titulo,descripcion,slug}');