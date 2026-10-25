import type { Plugin, ResolvedConfig } from 'vite';
import fs from 'fs';
import path from 'path';

/** Client-side routes that must also work as direct links on static hosting. */
const ROUTES = ['/', '/services', '/work', '/contact'];

/**
 * Vite plugin that makes the site's absolute URLs deployment-aware.
 *
 * - Replaces the `__SITE_URL__` placeholder in index.html (canonical, og:url,
 *   JSON-LD) with the deployment origin, and makes og:image / twitter:image
 *   absolute. The origin comes from SITE_URL (custom domain) or the Replit
 *   deployment domain. With no origin known, placeholders become relative.
 * - Emits robots.txt and, when the origin is known, sitemap.xml.
 * - Copies the built index.html to <route>/index.html for every client route
 *   so deep links work on static hosts without rewrite rules.
 */
export function metaImagesPlugin(): Plugin {
  let config: ResolvedConfig;
  return {
    name: 'vite-plugin-meta-images',
    configResolved(resolved) {
      config = resolved;
    },
    transformIndexHtml(html) {
      const baseUrl = getDeploymentUrl();
      html = html.replace(/__SITE_URL__/g, baseUrl ?? '');

      if (!baseUrl) {
        log('[meta-images] no deployment domain found, leaving image URLs relative');
        return html;
      }

      const imageExt = findOpengraphExt();
      if (!imageExt) {
        log('[meta-images] OpenGraph image not found, skipping image tag updates');
        return html;
      }

      const imageUrl = `${baseUrl}/opengraph.${imageExt}`;
      log('[meta-images] updating meta image tags to:', imageUrl);

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );
      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );
      return html;
    },
    generateBundle() {
      const baseUrl = getDeploymentUrl();
      const robots = ['User-agent: *', 'Allow: /'];
      if (baseUrl) {
        robots.push(`Sitemap: ${baseUrl}/sitemap.xml`);
        const today = new Date().toISOString().slice(0, 10);
        const urls = ROUTES.map(
          (route) =>
            `  <url><loc>${baseUrl}${route === '/' ? '/' : route}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`
        ).join('\n');
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source:
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' });
    },
    closeBundle() {
      // Runs after index.html has been written: duplicate it for each route.
      if (!config || config.command !== 'build') return;
      const outDir = config.build.outDir;
      const indexPath = path.join(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;
      const html = fs.readFileSync(indexPath, 'utf-8');
      for (const route of ROUTES) {
        if (route === '/') continue;
        const dir = path.join(outDir, route.slice(1));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }
      log('[meta-images] wrote route fallbacks for', ROUTES.filter((r) => r !== '/').join(', '));
    },
  };
}

function findOpengraphExt(): string | null {
  const publicDir = path.resolve(process.cwd(), 'client', 'public');
  for (const ext of ['png', 'jpg', 'jpeg']) {
    if (fs.existsSync(path.join(publicDir, `opengraph.${ext}`))) return ext;
  }
  return null;
}

function getDeploymentUrl(): string | null {
  if (process.env.SITE_URL) {
    const url = process.env.SITE_URL.replace(/\/+$/, '');
    log('[meta-images] using SITE_URL:', url);
    return url;
  }

  if (process.env.REPLIT_INTERNAL_APP_DOMAIN) {
    const url = `https://${process.env.REPLIT_INTERNAL_APP_DOMAIN}`;
    log('[meta-images] using internal app domain:', url);
    return url;
  }

  if (process.env.REPLIT_DEV_DOMAIN) {
    const url = `https://${process.env.REPLIT_DEV_DOMAIN}`;
    log('[meta-images] using dev domain:', url);
    return url;
  }

  return null;
}

function log(...args: any[]): void {
  if (process.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
