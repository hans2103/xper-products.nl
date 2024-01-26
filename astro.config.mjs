import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'nl',
        locales: ['nl'],
        showDefaultLocale: true
    },
    integrations: [starlight({
        title: 'Xpèr Products',
        locales: {
            root: {
                label: "Nederlands",
                lang: "nl"
            }
        },
        sidebar: [{
            label: 'Voor ondernemers',
            items: [
                // Each item here is one entry in the navigation menu.
                {
                    label: 'Overzicht stellages',
                    link: '/ondernemers/start/'
                },
                {
                    label: 'Aansluitmateriaal',
                    link: '/ondernemers/aansluitmateriaal/'
                },
                {
                    label: 'Electra',
                    link: '/ondernemers/electra/'
                },
                {
                    label: 'Luchtafvoer',
                    link: '/ondernemers/luchtafvoer/'
                },
                {
                    label: 'Witgoed onderdelen',
                    link: '/ondernemers/witgoed-onderdelen/'
                },
                {
                    label: 'Onderhoud & stofzuiger',
                    link: '/ondernemers/onderhoud-en-stofzuiger/'
                },
                {
                    label: 'Stofzuiger universeel',
                    link: '/ondernemers/stofzuiger-universeel/'
                },
                {
                    label: 'Stofzuiger origineel',
                    link: '/ondernemers/stofzuiger-origineel/'
                },
                {
                    label: 'Lampen en batterijen',
                    link: '/ondernemers/lampen-en-batterijen/'
                }
            ]
        },

            {
                label: 'Producten - Aansluitmateriaal',
                autogenerate: {
                    directory: 'producten/aansluitmateriaal'
                }
            },
            {
                label: 'Producten - Batterijen',
                autogenerate: {
                    directory: 'producten/batterijen'
                }
            },
            {
                label: 'Producten - Gas',
                autogenerate: {
                    directory: 'producten/gas'
                }
            },
            {
                label: 'Producten - Lampen',
                autogenerate: {
                    directory: 'producten/lampen'
                }
            },
            {
                label: 'Producten - Lucht',
                autogenerate: {
                    directory: 'producten/lucht'
                }
            },
            {
                label: 'Producten - Onderhoud',
                autogenerate: {
                    directory: 'producten/onderhoud'
                }
            },
            {
                label: 'Producten - Reparatie Onderdelen',
                autogenerate: {
                    directory: 'producten/reparatie-onderdelen'
                }
            },
            {
                label: 'Producten - Stofzuigeraccessoires',
                autogenerate: {
                    directory: 'producten/stofzuigeraccessoires'
                }
            },
            {
                label: 'Producten - Stofzuiger Origineel',
                autogenerate: {
                    directory: 'producten/stofzuiger-origineel'
                }
            },
            {
                label: 'Producten - Stofzuiger Universeel',
                autogenerate: {
                    directory: 'producten/stofzuiger-universeel'
                }
            },
            {
                label: 'Producten - Stofzuigerzakken',
                autogenerate: {
                    directory: 'producten/stofzuigerzakken'
                }
            },
            {
                label: 'Producten - Water',
                autogenerate: {
                    directory: 'producten/water'
                }
            },
        ]
    }), tailwind()]
});
