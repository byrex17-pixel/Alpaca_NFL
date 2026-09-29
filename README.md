# NFL Gridiron Hub 2026

Proyecto web académico construido con Next.js y pensado para desplegarse directamente en Vercel.

## Ejecutar en local

```bash
npm install
npm run dev
```

Después abre http://localhost:3000

## Desplegar en Vercel

1. Sube este proyecto a GitHub, GitLab o Bitbucket.
2. En Vercel selecciona **Add New Project**.
3. Importa el repositorio.
4. Vercel detectará Next.js automáticamente.
5. Pulsa Deploy.

También puedes instalar Vercel CLI y ejecutar `vercel`.

## Estructura

- `app/page.tsx` — portada y selector de equipos.
- `app/team/[slug]/page.tsx` — página dinámica de cada franquicia.
- `data/teams.ts` — colores, ciudades, staff, jugadores y figuras históricas.
- `app/globals.css` — todo el diseño visual.

## Datos

La interfaz está preparada para mostrar estadísticas por jugador. La demo incluye datos de ejemplo para demostrar el funcionamiento visual. Para una entrega que requiera estadísticas oficiales partido a partido, conecta `data/teams.ts` a una fuente de datos/API con licencia adecuada.
