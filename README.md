# Matthabbey Solutions Services — website

Marketing site for Matthabbey Solutions Services, built with React 19, Vite 7, Tailwind CSS v4 and shadcn/ui. Pages: Home (`/`), Services (`/services`), Work (`/work`) and Contact (`/contact`, with FAQs). The site is dark by default with a light-mode toggle.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev:client` | Vite dev server on http://localhost:5000 (what Replit runs) |
| `npm run dev` | Express dev server with Vite middleware (also serves `/api/*`) |
| `npm run build` | Builds the client to `dist/public` and the server to `dist/index.cjs` |
| `npm run check` | TypeScript type check |

The Replit deployment is **static** (`.replit` → `deploymentTarget = "static"`), so only `dist/public` is served in production. The build writes `services/index.html`, `work/index.html` and `contact/index.html` copies so deep links work without server rewrite rules. The Express server is for local development unless you change the deployment target.

## Configuration

| Variable | Where | Purpose |
| --- | --- | --- |
| `SITE_URL` | build environment | Public origin (e.g. `https://www.example.com`). Used for the canonical tag, Open Graph URLs, JSON-LD, `robots.txt` and `sitemap.xml`. On Replit the deployment domain is used automatically. |
| `VITE_CONTACT_ENDPOINT` | build environment | Optional HTTP endpoint that accepts a JSON `POST` of the contact form (a Formspree/Web3Forms URL, or `/api/enquiries` when the Express server is deployed). When unset, the form hands the message off to WhatsApp and email with everything pre-filled, so nothing is lost on static hosting. |
| `VITE_NEWSLETTER_ENDPOINT` | build environment | Optional HTTP endpoint that accepts `{ "email": "…" }` as JSON. When unset, the Subscribe button opens a pre-filled email request instead. |

## Editing content

- Business facts (name, phone, email, address, social links, nav items, page titles): `client/src/lib/site.ts`. Keep the JSON-LD block in `client/index.html` in sync.
- Services and their deliverables: `client/src/data/services.ts`.
- Commitments ("what every client gets"): `client/src/data/commitments.ts`.
- **Expertise bars and stats:** `client/src/data/expertise.ts`. The bar values are self-assessed ratings; confirm them. The stats row renders only when `stats` has entries, so add real figures only.
- **Case studies:** add entries to `caseStudies` in `client/src/components/sections/projects.tsx`. The "What we build" capability cards are replaced automatically once the list has at least one entry. Only publish clients who have given permission.
- **Testimonials:** add entries to `testimonials` in `client/src/components/sections/testimonials.tsx`. The quotes block renders only when the list is non-empty.
- FAQ answers: `client/src/components/sections/faq.tsx`.

## Images

- `client/public/images/logo.png` / `logo-dark.png`: trimmed brand logo for light and dark backgrounds.
- `client/public/opengraph.jpg`: 1200×630 social sharing image.
- `client/public/images/photos/`: stock photography from Pexels (Pexels licence), listed with credits in `client/src/data/photos.ts`. These show generic software teams, not Matthabbey staff. Replace them with your own photos when you can; keep the filenames and sizes (hero 1600×900, approach-a 900×1125, approach-b 1000×700, row-1..3 900×1125) and update the alt text.

Photo credits: cottonbro studio, Mizuno K, Naboth Otieno, Gustavo Fring, Christina Morillo and olia danilevich via Pexels.

Keep new images under ~200 KB and add `width`/`height` attributes so the layout does not shift while they load.
