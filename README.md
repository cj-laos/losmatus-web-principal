# LOSMATUS S.A.C. — Sitio web corporativo

> Proyecto académico-colaborativo para estudiantes de la **Universidad Tecnológica del Perú (UTP)**. Sitio corporativo multipágina, **solo en español**, construido con Next.js, React, TypeScript, Tailwind CSS, Sanity y Resend.

**Repositorio:** https://github.com/cj-laos/losmatus-web-principal  
**Rama de integración estudiantil:** `feature/develop`  
**Rama estable:** `main` (no desarrollar directamente aquí).

## 1. Objetivo del proyecto

Crear una web corporativa escalable para LOSMATUS S.A.C., con páginas independientes, contenidos administrables y un canal de contacto. No es una landing de una sola página. El código base está publicado, pero **todavía es una plantilla funcional inicial, no un producto listo para producción**. El contenido definitivo, diseño final, integración completa de Sanity y pruebas quedan por desarrollar.

## 2. Tecnologías y para qué sirven

| Tecnología | Uso |
| --- | --- |
| Node.js + npm | Entorno de ejecución y gestor de dependencias |
| Next.js 16 (App Router) | Framework web, rutas, renderizado del lado del servidor y API Routes |
| React 19 | Componentes reutilizables |
| TypeScript | Tipado para reducir errores |
| Tailwind CSS 4 | Estilos mediante clases utilitarias |
| Sanity CMS | Gestión de textos y contenidos desde `/studio`; usa consultas GROQ |
| Resend | Envío de correos del formulario de contacto desde el servidor |
| ESLint | Análisis estático de código |
| Git + GitHub | Versionamiento, colaboración y revisión mediante Pull Requests |
| Vercel (previsto) | Despliegue futuro; no está configurado en este repositorio |

Documentación: https://nextjs.org/docs · https://tailwindcss.com/docs · https://www.sanity.io/docs · https://resend.com/docs · https://git-scm.com/docs

## 3. Requisitos previos

- Git instalado: `git --version`.
- Node.js **20.9 o posterior** (recomendable una versión LTS compatible con Next.js 16); `node -v` y `npm -v`.
- VS Code y extensiones sugeridas: ESLint, Tailwind CSS IntelliSense y Prettier.
- Acceso a GitHub. Para hacer push necesitan permisos de colaboración o utilizar un fork.
- Credenciales de Sanity/Resend **solo si trabajan en esas funcionalidades**. Solicitar las credenciales de desarrollo al responsable; nunca publicarlas.

## 4. Descargar el proyecto y cambiar a la rama correcta

En una terminal de VS Code:

```bash
git clone https://github.com/cj-laos/losmatus-web-principal.git
cd losmatus-web-principal
git fetch origin
git switch feature/develop
git pull --ff-only origin feature/develop
git branch --show-current
npm install
```

La última instrucción de Git debe mostrar `feature/develop`. La instalación crea `node_modules`, que no debe subirse al repositorio. Si trabajan desde Windows PowerShell, todos los comandos anteriores son válidos.

**Nota:** El proyecto aún no contiene un `package-lock.json` verificado. Después de instalar, registren ese archivo en un PR dedicado cuando se confirme que el build funciona, para poder usar `npm ci` de forma reproducible.

## 5. Variables de entorno e inicio local

Copiar el archivo de ejemplo:

- PowerShell: `Copy-Item .env.example .env.local`
- Bash/macOS: `cp .env.example .env.local`

Editar `.env.local` según los accesos entregados por el responsable:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=
RESEND_API_KEY=
RESEND_FROM_EMAIL=LOSMATUS <contacto@dominio-verificado.com>
CONTACT_TO_EMAIL=
```

La plantilla puede mostrar contenido por defecto sin Sanity. Para entrar a Studio se necesita un proyecto Sanity válido, un usuario autorizado y la configuración de CORS correspondiente. El formulario de contacto requiere clave de Resend, dominio remitente verificado y destinatario. **Nunca incluyan claves privadas en componentes React, en variables NEXT_PUBLIC_ ni en commits.**

Iniciar:

```bash
npm run dev
```

Abrir http://localhost:3000. Detener el servidor con `Ctrl+C`.

Comprobaciones antes de entregar:

```bash
npm run lint
npm run typecheck
npm run build
```

Estos comandos aún no han sido ejecutados en un pipeline de CI. Si detectan incompatibilidades de dependencias, documenten el error y solución en su Pull Request.

## 6. Estructura del repositorio

```text
src/
├── app/                          # Rutas, layouts, metadata y endpoints Next.js
│   ├── page.tsx                   # /
│   ├── nosotros/page.tsx          # /nosotros
│   ├── servicios/page.tsx         # /servicios
│   ├── servicios/[slug]/page.tsx  # /servicios/mesa-de-ayuda, etc.
│   ├── contacto/page.tsx          # /contacto
│   ├── api/contact/route.ts       # POST /api/contact
│   └── studio/[[...tool]]/        # /studio (Sanity)
├── components/
│   ├── home/                      # Secciones exclusivas de Inicio
│   ├── nosotros/                  # Secciones exclusivas de Nosotros
│   ├── servicios/                 # Catálogo y detalle de servicio
│   ├── contacto/                  # Formulario y presentación
│   └── layout/                    # Header, Footer compartidos
├── lib/
│   ├── sanity/                    # Cliente Sanity y queries GROQ
│   └── services.ts                # Servicios de ejemplo / fallback
├── sanity/schemaTypes/           # Modelos de contenido del CMS
└── types/                        # Tipos/interfaces compartidos
sanity.config.ts                  # Configuración de Sanity Studio
.env.example                      # Variables documentadas sin secretos
```

### Reglas de organización

- `app` define **URL y composición** de páginas; evitar páginas monolíticas.
- `components/home`, `components/nosotros` y demás contienen las secciones de cada página. Ejemplo: `components/nosotros/TeamSection.tsx`.
- Componentes reutilizados en varias páginas pueden ir a `components/shared/` (crear cuando haga falta).
- `components/layout` es para elementos globales como Header y Footer.
- `lib` es para clientes de servicios, utilidades y acceso a datos; `types` para contratos compartidos.
- Assets estáticos en `public/images/<seccion>/`; consumirlos con `next/image` cuando corresponda.
- Convención de componentes `PascalCase.tsx`, variables y funciones `camelCase`, rutas `kebab-case`.
- Usar TypeScript y evitar `any` injustificado.
- Mantener la interfaz **solo en español**; no crear segmentación `[lang]`.

## 7. Páginas existentes y ampliación futura

| Ruta | Componentes | Propósito |
| --- | --- | --- |
| `/` | `components/home` | Hero, destacados y presentación |
| `/nosotros` | `components/nosotros` | Información institucional |
| `/servicios` | `components/servicios` | Catálogo |
| `/servicios/[slug]` | `components/servicios` | Página interna por servicio |
| `/contacto` | `components/contacto` | Formulario |
| `/studio` | `src/sanity` | CMS para editores autorizados |

Una página nueva, por ejemplo `/proyectos`, deberá tener `src/app/proyectos/page.tsx` y componentes en `src/components/proyectos/`. Agregar navegación al Header, metadata SEO y sitemap cuando corresponda.

## 8. Flujo funcional: ¿cómo funciona el sitio?

### Página pública

```text
Navegador
   └─ GET /servicios
       └─ Next.js App Router (src/app/servicios/page.tsx)
           └─ Componentes React (src/components/servicios/*)
               └─ HTML/CSS (Tailwind)
```

### Sanity (contenido administrable)

```text
Editor autorizado → /studio → Publica documento en Sanity
                                     ↓
        Cliente Sanity (src/lib/sanity/client.ts)
                                     ↓
         Consultas GROQ (src/lib/sanity/queries.ts)
                                     ↓
                Server Component → Web pública
```

**Estado real:** la portada ya intenta consumir Sanity con contenido de respaldo; el catálogo y los detalles todavía utilizan `src/lib/services.ts`. Una tarea futura es conectar todas las páginas al CMS y gestionar slugs con consistencia.

### Resend (contacto)

```text
Usuario completa /contacto
    → ContactForm.tsx hace fetch POST /api/contact
    → route.ts valida datos y filtra entrada
    → Resend (servidor, API key privada)
    → Correo a CONTACT_TO_EMAIL
    → Respuesta de éxito/error al frontend
```

El correo del usuario se configura como `replyTo`, no como remitente sin verificar. El endpoint actual incluye un campo trampa antispam, pero **antes de publicar** requiere protección adicional (rate limiting, CAPTCHA o equivalente), revisión de privacidad y validación en producción.

## 9. Git: reglas de trabajo en equipo

**IMPORTANTE: no hacer commits ni push directamente a `main`.** `feature/develop` es la rama común de integración; cada alumno desarrolla en una rama de tarea y abre un PR hacia ella.

Convención recomendada:

```text
main
└── feature/develop
    ├── feature/utp-home-hero
    ├── feature/utp-nosotros-equipo
    ├── feature/utp-servicios-detalle
    └── fix/utp-contacto-validacion
```

**A. Antes de empezar una tarea:**

```bash
git fetch origin
git switch feature/develop
git pull --ff-only origin feature/develop
git switch -c feature/utp-nosotros-equipo
git status
```

Cada alumno debe sustituir `utp-nosotros-equipo` por su tarea. **No compartan una misma rama de tarea**.

**B. Realizar cambios y confirmar:**

```bash
git status
git diff
npm run lint
npm run typecheck
git add src/app/nosotros src/components/nosotros
git commit -m "feat(nosotros): agregar sección de equipo"
```

`git add` debe seleccionar únicamente archivos de la tarea. Evitar `git add .` sin revisar `git status`, especialmente para prevenir la inclusión de credenciales.

Tipos de commits sugeridos:
- `feat:` nueva funcionalidad.
- `fix:` corrección de un defecto.
- `refactor:` reorganización sin cambio funcional.
- `docs:` documentación.
- `style:` estilos visuales.
- `chore:` mantenimiento/configuración.

**C. Subir la rama al repositorio remoto:**

```bash
git push -u origin feature/utp-nosotros-equipo
```

Luego ir a GitHub → **Pull requests → New pull request**. Configurar **base: `feature/develop`**, **compare: `feature/utp-nosotros-equipo`**. Agregar descripción, captura de pantalla del cambio, pruebas realizadas y solicitar revisión. Un revisor integra el PR. No fusionarlo a `main` por cuenta propia.

Si aparece `403 permission denied`, comprobar cuenta de GitHub y permisos del repositorio. Si no tienen permisos de escritura, hacer un **fork** y abrir PR desde el fork hacia `feature/develop`.

**D. Cómo actualizar una rama de tarea con cambios del equipo:**

```bash
git fetch origin
git switch feature/utp-nosotros-equipo
git merge origin/feature/develop
```

Si hay conflictos, VS Code marcará las secciones incompatibles. Resolverlas revisando ambas versiones, probar la aplicación, luego:

```bash
git add ruta/del/archivo-resuelto
git commit
git push
```

Si no hay conflictos, Git creará el merge o indicará que está actualizado. Si Git pide un editor para el mensaje del merge, guardar y cerrar el editor para completar la operación.

**E. Al terminar una tarea e iniciar otra:**

```bash
git switch feature/develop
git pull --ff-only origin feature/develop
git switch -c feature/utp-nueva-tarea
```

### Problemas frecuentes

| Problema | Qué hacer |
| --- | --- |
| `fatal: not a git repository` | Abrir la terminal dentro de `losmatus-web-principal` |
| `pathspec ... did not match` | Ejecutar `git fetch origin` y revisar `git branch -a` |
| `nothing to commit` | No hay cambios guardados o ya están confirmados |
| `non-fast-forward` en push | Ejecutar `git fetch` y revisar cambios remotos antes de integrar |
| Conflicto de merge | Resolver los archivos, probar y confirmar la resolución |
| `npm` no se reconoce | Instalar Node.js y reabrir la terminal |
| `Module not found` | Ejecutar `npm install` y revisar ruta del import |
| Error de correo | Revisar configuración de Resend y dominio verificado |
| Studio no carga | Configurar proyecto, dataset, CORS y acceso en Sanity |

No usar `git push --force` en ramas compartidas, `git reset --hard` para descartar trabajo ajeno ni subir archivos `.env.local`.

## 10. Criterios de aceptación para un Pull Request

Antes de solicitar revisión, asegurar lo siguiente:

- [ ] Mi rama nace de la versión reciente de `feature/develop`.
- [ ] Modifiqué únicamente el alcance acordado.
- [ ] La vista es responsive (móvil, tableta y escritorio).
- [ ] No se rompió navegación, rutas ni formularios.
- [ ] Los textos están en español y no contienen información inventada del cliente.
- [ ] No subí secretos, tokens, cuentas o claves.
- [ ] Ejecuté y documenté `npm run lint`, `npm run typecheck` y `npm run build` (o explico por qué no pudieron completarse).
- [ ] Añadí capturas de antes/después cuando hay cambios visuales.
- [ ] El PR apunta a `feature/develop`, **no a main**.
- [ ] Otro integrante revisó el código antes de fusionarlo.

Plantilla para descripción del PR:

```md
## Objetivo
¿Qué necesidad resuelve?

## Cambios realizados
- ...

## Páginas o archivos afectados
- ...

## Cómo probarlo
1. ...
2. ...

## Evidencia
Capturas / vídeo / descripción

## Validación
- [ ] lint
- [ ] typecheck
- [ ] build

## Observaciones y pendientes
...
```

## 11. Alcance y responsabilidades

Alumnos: trabajar con ramas individuales, revisar su código, documentar cambios y elevar PRs.  
Responsables/revisores: aprobar cambios, administrar credenciales, mantener Sanity/Resend y decidir cuándo integrar a `main`.

**No publicar datos reales de clientes, credenciales ni contenidos comerciales sin aprobación.** No asumir que los textos, misión, visión y servicios de la plantilla ya son los definitivos.

---
**LOSMATUS S.A.C. — Desarrollo web corporativo | Guía de colaboración UTP**
