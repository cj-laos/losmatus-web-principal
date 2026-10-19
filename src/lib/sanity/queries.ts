import { defineQuery } from "next-sanity";
export const HOME_QUERY=defineQuery('*[_type == "paginaInicio"][0]{titulo, subtitulo, descripcionEmpresa, servicios[]->{titulo,descripcion}}');
