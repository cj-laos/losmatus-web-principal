# LOSMATUS — Web principal

Plantilla corporativa basada en el patrón de PMMS: **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Sanity + Resend**, un solo idioma (**español**).

## Desarrollo
1. Instala Node.js 20.9+ (preferible LTS vigente).
2. Ejecuta `npm install`.
3. Copia `.env.example` a `.env.local` y configura las credenciales.
4. Ejecuta `npm run dev` y abre http://localhost:3000.
5. Sanity Studio: http://localhost:3000/studio (requiere Project ID y configurar CORS en Sanity).

## Estructura
- `src/app`: App Router, rutas, SEO, endpoint del formulario.
- `src/components/layout`: header y footer.
- `src/components/sections`: landing modular.
- `src/lib/sanity`: cliente y consultas GROQ.
- `src/sanity/schemaTypes`: esquemas del CMS.
- `sanity.config.ts`: Studio embebido.

## Contacto (Resend)
Configura `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `CONTACT_TO_EMAIL`. El remitente debe ser un dominio verificado en Resend. Los correos se envían desde el servidor, nunca desde el cliente. Antes de producción implementar limitación de peticiones/CAPTCHA en el formulario para evitar abuso.

## Pendientes de migración
La landing heredada de `cj-laos/losmatus-web` está en Vite. No se sobrescribió. Migrar sus textos, secciones, identidad visual e imágenes a los componentes de esta base y a Sanity. Configurar dominio definitivo, datos comerciales y ajustes de SEO antes del despliegue.

## Verificación
`npm run lint`, `npm run typecheck`, `npm run build`.
