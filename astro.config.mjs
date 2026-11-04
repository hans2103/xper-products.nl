// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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
    // Fonts via the Fonts API: it generates metric-matched fallbacks (size-adjust, ascent-override), so text keeps
    // its size while the web font loads. Without them the breadcrumb on product pages wrapped differently and the
    // page jumped (CLS 0.15 on mobile).
    fonts: [
        {
            name: 'Atkinson Hyperlegible Next',
            cssVariable: '--font-atkinson',
            provider: fontProviders.local(),
            fallbacks: ['sans-serif'],
            options: {
                variants: [{ src: ['@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2'], weight: '200 800', style: 'normal' }],
            },
        },
        {
            name: 'Michroma',
            cssVariable: '--font-michroma',
            provider: fontProviders.local(),
            fallbacks: ['sans-serif'],
            options: {
                variants: [{ src: ['@fontsource/michroma/files/michroma-latin-400-normal.woff2'], weight: '400', style: 'normal' }],
            },
        },
    ],
    integrations: [
        sitemap({
            filter: (page) => !page.endsWith('/404/'),
        }),
    ],
});
