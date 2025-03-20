// @ts-check
import {defineConfig, passthroughImageService} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://xper-products.nl',
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        service: passthroughImageService()
    },
    integrations: [
        starlight({
                title: 'Xpèr Products',
                customCss: [
                    './src/styles/custom.css'
                ],
                // Add a script for Google Tag Manager.
                head: [
                    {
                        tag: 'script',
                        // Content truncated for brevity.
                        content:
                            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
                            "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
                            "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
                            "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
                            "})(window,document,'script','dataLayer','GTM-M3SNQV4W');",
                    },
                    {
                        tag: 'script',
                        content:
                            "window.dataLayer = window.dataLayer || [];\n" +
                            "function gtag() {\n" +
                            "    dataLayer.push(arguments);\n" +
                            "}\n" +
                            "if (localStorage.getItem('consentMode') === null) {\n" +
                            "    gtag('consent', 'default', {\n" +
                            "        'ad_storage': 'denied',\n" +
                            "        'ad_user_data': 'denied',\n" +
                            "        'ad_personalization': 'denied',\n" +
                            "        'analytics_storage': 'granted',\n" +
                            "        'personalization_storage': 'granted',\n" +
                            "        'functionality_storage': 'granted',\n" +
                            "        'security_storage': 'granted',\n" +
                            "    });\n" +
                            "} else {\n" +
                            "    gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));\n" +
                            "}",
                    }
                ],
                // Replace the built-in <SkipLink/> component.
                components: {
                    // Relative path to the custom component.
                    SkipLink: './src/components/SkipLink.astro',
                },
                locales: {
                    root: {
                        label: "Nederlands",
                        lang: "nl"
                    }
                },
                sidebar: [
                    {
                        label: 'Ondernemers',
                        autogenerate: {directory: 'ondernemers'},
                    },
                    {
                        label: 'Producten',
                        autogenerate: {directory: 'producten'},
                    },
                ],
            }
        ), sitemap()
    ],
});
