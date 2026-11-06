import { defineField, defineType } from "sanity";

const servicio = defineType({
  name: "servicio",
  title: "Servicios",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Ruta URL", type: "slug", options: { source: "titulo" } }),
    defineField({ 
      name: "categoria", 
      title: "Categoría", 
      type: "string", 
      options: { 
        list: [
          { title: "Infraestructura", value: "Infraestructura" },
          { title: "Seguridad", value: "Seguridad" },
          { title: "Soporte TI", value: "Soporte TI" },
        ],
      },
    }),
    defineField({ name: "esDestacado", title: "¿Es servicio destacado?", type: "boolean" }),
    defineField({ name: "descripcion", title: "Descripción", type: "text" }),
    defineField({ 
      name: "beneficios", 
      title: "Lista de beneficios (checks)", 
      type: "array", 
      of: [{ type: "string" }] 
    }),
    defineField({ name: "orden", title: "Orden", type: "number" }),
  ],
});

const clienteLogo = defineType({
  name: "clienteLogo",
  title: "Clientes / Confían en nosotros",
  type: "document",
  fields: [
    defineField({ name: "nombre", title: "Nombre Empresa", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo de la Empresa", type: "image", options: { hotspot: true } }),
    defineField({ name: "orden", title: "Orden", type: "number" }),
  ],
});

const brochureConfig = defineType({
  name: "brochureConfig",
  title: "Brochure / Portafolio PDF",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título del Banner", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo / Descripción", type: "text" }),
    defineField({ name: "textoBoton", title: "Texto del Botón", type: "string" }),
    defineField({
      name: "archivoPdf",
      title: "Archivo PDF del Brochure",
      type: "file",
      options: { accept: ".pdf" },
      description: "Sube aquí el PDF del Portafolio/Brochure corporativo",
    }),
  ],
});

const paginaInicio = defineType({
  name: "paginaInicio",
  title: "Página Inicio",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título principal (Hero)", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo (Hero)", type: "text" }),
    defineField({ name: "descripcionEmpresa", title: "Presentación de empresa", type: "text" }),
    defineField({
      name: "imagenHero",
      title: "Imagen / Fondo de Portada (Hero)",
      type: "image",
      options: { hotspot: true },
      description: "Subir imagen de portada principal",
    }),
    defineField({
      name: "servicios",
      title: "Servicios destacados en portada",
      type: "array",
      of: [{ type: "reference", to: [{ type: "servicio" }] }],
    }),
    defineField({
      name: "clientes",
      title: "Lista de clientes (Carrusel)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "clienteLogo" }] }],
    }),
  ],
});

const paginaNosotros = defineType({
  name: "paginaNosotros",
  title: "Página Nosotros",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título Principal", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo / Descripción", type: "text" }),
    defineField({
      name: "imagenPortada",
      title: "Imagen de Portada de Fondo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "mision", title: "Misión de la Empresa", type: "text" }),
    defineField({ name: "vision", title: "Visión de la Empresa", type: "text" }),
  ],
});

const paginaServicios = defineType({
  name: "paginaServicios",
  title: "Página Servicios",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título Principal", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo", type: "text" }),
    defineField({
      name: "imagenPortada",
      title: "Imagen de Portada de Fondo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

const paginaContacto = defineType({
  name: "paginaContacto",
  title: "Página Contacto",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título Principal", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo", type: "text" }),
    defineField({
      name: "imagenPortada",
      title: "Imagen de Portada de Fondo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "telefono", title: "Teléfono / WhatsApp", type: "string" }),
    defineField({ name: "email", title: "Correo Electrónico", type: "string" }),
    defineField({ name: "direccion", title: "Dirección Física", type: "string" }),
  ],
});

const temaConfig = defineType({
  name: "temaConfig",
  title: "Personalización / Colores y Portadas",
  type: "document",
  fields: [
    defineField({
      name: "colorAcento",
      title: "Color de Acento / Botones y Detalles",
      type: "string",
      description: "Color principal en formato HEX (ej: #0066FF para azul, #FFE500 para amarillo, #10B981 para verde). Por defecto: #FFE500",
      initialValue: "#FFE500",
    }),
    defineField({
      name: "colorAcentoHover",
      title: "Color de Acento Hover (Opcional)",
      type: "string",
      description: "Color al pasar el ratón por encima (ej: #0052CC o #F2D600). Si se deja vacío se usa el principal.",
    }),
    defineField({
      name: "colorTextoBotonAcento",
      title: "Color de Texto dentro del Botón de Acento",
      type: "string",
      description: "Color del texto de botones con fondo de acento (ej: #FFFFFF para texto blanco si el botón es azul, o #000000 si es amarillo). Por defecto: #000000",
      initialValue: "#000000",
    }),
    defineField({
      name: "colorOscuro",
      title: "Color Oscuro / Footer, Barras y Cajas",
      type: "string",
      description: "Color de las secciones oscuras (Footer, Topbar, tarjetas oscuras). Ej: #0B132B para azul noche, #09090B para negro. Por defecto: #09090b",
      initialValue: "#09090b",
    }),
    defineField({
      name: "colorWhatsApp",
      title: "Color del Botón Flotante de WhatsApp",
      type: "string",
      description: "Color de fondo del botón WhatsApp (ej: #25D366 para el verde oficial de WhatsApp, o el color de acento). Por defecto: #25D366",
      initialValue: "#25D366",
    }),
    defineField({
      name: "filtroPortada",
      title: "Filtro / Overlay de las Portadas (Hero)",
      type: "string",
      description: "Elige si las portadas con imagen de fondo tendrán filtro oscuro (negro) o filtro claro (blanco)",
      options: {
        list: [
          { title: "Filtro Oscuro (Negro)", value: "oscuro" },
          { title: "Filtro Claro (Blanco)", value: "claro" },
        ],
        layout: "radio",
      },
      initialValue: "oscuro",
    }),
  ],
});

export const schemaTypes = [
  temaConfig,
  paginaInicio,
  paginaNosotros,
  paginaServicios,
  paginaContacto,
  servicio,
  clienteLogo,
  brochureConfig,
];
