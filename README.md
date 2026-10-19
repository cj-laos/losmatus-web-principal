# LOSMATUS — Web corporativa multipágina
Proyecto corporativo **Next.js 16 + React 19 + TypeScript + Tailwind 4 + Sanity CMS + Resend**, exclusivamente en español.

## Rutas
- `/` — Inicio, con componentes en `src/components/home`
- `/nosotros` — presentación institucional
- `/servicios` — catálogo de servicios
- `/servicios/[slug]` — detalle independiente por servicio
- `/contacto` — contacto con Resend
- `/studio` — administración Sanity (requiere configuración)

## Organización
Cada página tiene su propia carpeta en `src/components` (`home`, `nosotros`, `servicios`, `contacto`). Los elementos compartidos van en `components/layout`. Las rutas permanecen en `src/app`. El contenido de servicios por defecto está en `src/lib/services.ts`; se añadió esquema Sanity y consultas GROQ para futura integración multipágina.

## Inicio
```bash
npm install
cp .env.example .env.local
npm run dev
```
Configurar ID de Sanity, dominio verificado de Resend y correo receptor según `.env.example`. Antes de producción añadir rate limiting y validación anti-spam.

## Pendiente
Migrar el contenido real de la web heredada a los nuevos componentes, integrar Sanity como fuente de las páginas internas y probar lint/typecheck/build; aún no ejecutados en CI.
