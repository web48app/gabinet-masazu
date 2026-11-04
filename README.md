# Gabinet Masażu Karolina Orlik – gabinet.karolinaorlik.pl

React + Vite + TypeScript + Tailwind v3 + Framer Motion + React Router + React Helmet Async.
Każda podstrona jest prerenderowana do statycznego HTML (pełne SEO bez czekania na JS).

## Komendy
- `npm install`
- `npm run dev` – podgląd lokalny
- `npm run build` – build + prerender do `dist/`

## Treści
Wszystkie dane (telefon, adres, godziny, cennik, FAQ, usługi) są w `src/data/site.ts`.
Po zmianie cennika zaktualizuj też `public/llms.txt` i datę `lastmod` w `public/sitemap.xml`.
