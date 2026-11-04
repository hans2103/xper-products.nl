// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.xper-products.nl',
    trailingSlash: 'always',
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        // Keep scripts in external files so the Content-Security-Policy can stay free of 'unsafe-inline'.
        build: { assetsInlineLimit: 0 },
    },
    integrations: [
        sitemap({
            filter: (page) => !page.endsWith('/404/'),
        }),
    ],
});
