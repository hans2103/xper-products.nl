import type { APIRoute } from 'astro';

// AI-crawlers mogen de site lezen: productinformatie vindbaar maken in AI-antwoorden is het doel.
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
