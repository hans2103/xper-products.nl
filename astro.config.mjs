import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'nl',
        locales: ['nl'],
        showDefaultLocale: true
    },
    site: 'https://xper-products.nl',
    integrations: [
        sitemap(),
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
        }), tailwind()],
    redirects: {
        '/ondernemers/batterijenrek': '/ondernemers/lampen-en-batterijen/batterijenrek',
        '/ondernemers/contact': '/',
        '/ondernemers/home': '/ondernemers/start',
        '/ondernemers/over-xper': '/',
        '/ondernemers/rek-aansluit-materiaal': '/ondernemers/aanlsuitmateriaal/rek-aansluit-materiaal',
        '/ondernemers/rek-batterijen-en-lampen': '/ondernemers/lampen-en-batterijen/rek-batterijen-en-lampen',
        '/ondernemers/rek-electra': '/ondernemers/eleectra/rek-electra',
        '/ondernemers/rek-luchtafvoer': '/ondernemers/luchtafvoer/rek-luchtafvoer',
        '/ondernemers/rek-onderhoud-en-stofzuigerzakken': '/ondernemers/onderhoud-en-stofzuiger/rek-onderhoud-en-stofzuigerzakken',
        '/ondernemers/rek-stofzuiger-origineel': '/ondernemers/stofzuiger-universeel/rek-stofzuiger-origineel',
        '/ondernemers/rek-stofzuiger-universeel': '/ondernemers/stofzuiger-origineel/rek-stofzuiger-universeel',
        '/ondernemers/rek-witgoed-onderdelen': '/ondernemers/witgoed-onderdelen/rek-witgoed-onderdelen',
        '/ondernemers/shop-in-shop': '/ondernemers/start/shop-in-shop',
        '/portfolio/1640': '/producten//1640',
        '/portfolio/aeg-electrolux-afvoerpomp': '/producten/reparatie-onderdelen/aeg-electrolux-afvoerpomp',
        '/portfolio/aeg-electrolux-afvoerpomp-magneet': '/producten/reparatie-onderdelen/aeg-electrolux-afvoerpomp-magneet',
        '/portfolio/aeg-electrolux-bestekbak': '/producten/reparatie-onderdelen/aeg-electrolux-bestekbak',
        '/portfolio/aeg-electrolux-filter-efh13w': '/producten/reparatie-onderdelen/aeg-electrolux-filter-efh13w',
        '/portfolio/aeg-electrolux-filter-microfilter': '/producten/reparatie-onderdelen/aeg-electrolux-filter-microfilter',
        '/portfolio/aeg-electrolux-koolborstel': '/producten/reparatie-onderdelen/aeg-electrolux-koolborstel',
        '/portfolio/aeg-electrolux-koolborstel-2': '/producten/reparatie-onderdelen/aeg-electrolux-koolborstel-2',
        '/portfolio/aeg-electrolux-koolborstel-r': '/producten/reparatie-onderdelen/aeg-electrolux-koolborstel-r',
        '/portfolio/aeg-electrolux-v-snaar-1196j6': '/producten/reparatie-onderdelen/aeg-electrolux-v-snaar-1196j6',
        '/portfolio/aeg-electrolux-wieltjes-bovenkorf': '/producten/reparatie-onderdelen/aeg-electrolux-wieltjes-bovenkorf',
        '/portfolio/aeg-electrolux-wieltjes-onderkorf': '/producten/reparatie-onderdelen/aeg-electrolux-wieltjes-onderkorf',
        '/portfolio/aeg-koolborstel-l': '/producten/onderhoud/aeg-koolborstel-l',
        '/portfolio/bosch-afvoerpomp-los-bajnet-askol': '/producten/onderhoud/bosch-afvoerpomp-los-bajnet-askol',
        '/portfolio/bosch-siemens-manchet-epdm': '/producten/onderhoud/bosch-siemens-manchet-epdm',
        '/portfolio/bosch-siemens-reinigingstabletten': '/producten/onderhoud/bosch-siemens-reinigingstabletten',
        '/portfolio/brandt-koolborstel-selni': '/producten/reparatie-onderdelen/brandt-koolborstel-selni',
        '/portfolio/bsh-stofzuigerzak-g-all': '/producten/stofzuiger-origineel/bsh-stofzuigerzak-g-all',
        '/portfolio/gp-23ae-batterij-12v': '/producten/batterijen/gp-23ae-batterij-12v',
        '/portfolio/gp-9v-super-alkaline': '/producten/batterijen/gp-9v-super-alkaline',
        '/portfolio/gp-aa-mouse-keybord': '/producten/batterijen/gp-aa-mouse-keybord',
        '/portfolio/gp-aa-nimh-1300mah': '/producten/batterijen/gp-aa-nimh-1300mah',
        '/portfolio/gp-aa-nimh-2600mah': '/producten/batterijen/gp-aa-nimh-2600mah',
        '/portfolio/gp-aa-nimh-recyko-2000mah': '/producten/batterijen/gp-aa-nimh-recyko-2000mah',
        '/portfolio/gp-aa-recyko-2000mah': '/producten/batterijen/gp-aa-recyko-2000mah',
        '/portfolio/gp-aa-remote-control': '/producten/batterijen/gp-aa-remote-control',
        '/portfolio/gp-aa-super-alkaline': '/producten/batterijen/gp-aa-super-alkaline',
        '/portfolio/gp-aa-super-alkaline-2': '/producten/batterijen/gp-aa-super-alkaline-2',
        '/portfolio/gp-aa-torch-bike-lights': '/producten/batterijen/gp-aa-torch-bike-lights',
        '/portfolio/gp-aa-toys-gaming': '/producten/batterijen/gp-aa-toys-gaming',
        '/portfolio/gp-aaa-mouse-keyboard': '/producten/batterijen/gp-aaa-mouse-keyboard',
        '/portfolio/gp-aaa-nihm-650mah': '/producten/batterijen/gp-aaa-nihm-650mah',
        '/portfolio/gp-aaa-nimh-1000mah': '/producten/batterijen/gp-aaa-nimh-1000mah',
        '/portfolio/gp-aaa-recyko-800mah': '/producten/batterijen/gp-aaa-recyko-800mah',
        '/portfolio/gp-aaa-recyko-800mah-2': '/producten/batterijen/gp-aaa-recyko-800mah-2',
        '/portfolio/gp-aaa-remote-control': '/producten/batterijen/gp-aaa-remote-control',
        '/portfolio/gp-aaa-super-alkaline': '/producten/batterijen/gp-aaa-super-alkaline',
        '/portfolio/gp-aaa-super-alkaline-2': '/producten/batterijen/gp-aaa-super-alkaline-2',
        '/portfolio/gp-aaa-torch-bike-lights': '/producten/batterijen/gp-aaa-torch-bike-lights',
        '/portfolio/gp-aaa-toys-gaming': '/producten/batterijen/gp-aaa-toys-gaming',
        '/portfolio/gp-c-cell-super-alkaline': '/producten/batterijen/gp-c-cell-super-alkaline',
        '/portfolio/gp-cr-v9-lithium': '/producten/batterijen/gp-cr-v9-lithium',
        '/portfolio/gp-cr123a-lithium': '/producten/batterijen/gp-cr123a-lithium',
        '/portfolio/gp-cr2-lithium': '/producten/batterijen/gp-cr2-lithium',
        '/portfolio/gp-cr2016-knoopcel': '/producten/batterijen/gp-cr2016-knoopcel',
        '/portfolio/gp-cr2025-knoopcel': '/producten/batterijen/gp-cr2025-knoopcel',
        '/portfolio/gp-cr2032-knoopcel': '/producten/batterijen/gp-cr2032-knoopcel',
        '/portfolio/gp-cr2430-knoopcel': '/producten/batterijen/gp-cr2430-knoopcel',
        '/portfolio/gp-cr2450-knoopcel': '/producten/batterijen/gp-cr2450-knoopcel',
        '/portfolio/gp-d-cell-super-alkaline': '/producten/batterijen/gp-d-cell-super-alkaline',
        '/portfolio/gp-halogeen-buislamp-100w': '/producten/lampen/gp-halogeen-buislamp-100w',
        '/portfolio/gp-halogeen-buislamp-105w': '/producten/lampen/gp-halogeen-buislamp-105w',
        '/portfolio/gp-halogeen-candle': '/producten/lampen/gp-halogeen-candle',
        '/portfolio/gp-halogeen-candle-2': '/producten/lampen/gp-halogeen-candle-2',
        '/portfolio/gp-halogeen-candle-3': '/producten/lampen/gp-halogeen-candle-3',
        '/portfolio/gp-halogeen-capsule-16w': '/producten/lampen/gp-halogeen-capsule-16w',
        '/portfolio/gp-halogeen-capsule-18w': '/producten/lampen/gp-halogeen-capsule-18w',
        '/portfolio/gp-halogeen-capsule-28w': '/producten/lampen/gp-halogeen-capsule-28w',
        '/portfolio/gp-halogeen-capsule-8w': '/producten/lampen/gp-halogeen-capsule-8w',
        '/portfolio/gp-halogeen-classic': '/producten/lampen/gp-halogeen-classic',
        '/portfolio/gp-halogeen-classic-2': '/producten/lampen/gp-halogeen-classic-2',
        '/portfolio/gp-halogeen-classic-3': '/producten/lampen/gp-halogeen-classic-3',
        '/portfolio/gp-halogeen-classic-4': '/producten/lampen/gp-halogeen-classic-4',
        '/portfolio/gp-halogeen-classic-5': '/producten/lampen/gp-halogeen-classic-5',
        '/portfolio/gp-halogeen-mini-globe': '/producten/lampen/gp-halogeen-mini-globe',
        '/portfolio/gp-halogeen-mini-globe-2': '/producten/lampen/gp-halogeen-mini-globe-2',
        '/portfolio/gp-halogeen-mini-globe-3': '/producten/lampen/gp-halogeen-mini-globe-3',
        '/portfolio/gp-halogeen-mini-globe-4': '/producten/lampen/gp-halogeen-mini-globe-4',
        '/portfolio/gp-halogeen-mini-globe-5': '/producten/lampen/gp-halogeen-mini-globe-5',
        '/portfolio/gp-halogeen-mini-globe-6': '/producten/lampen/gp-halogeen-mini-globe-6',
        '/portfolio/gp-halogeen-reflector': '/producten/lampen/gp-halogeen-reflector',
        '/portfolio/gp-halogeen-reflector-2': '/producten/lampen/gp-halogeen-reflector-2',
        '/portfolio/gp-halogeen-reflector-25w': '/producten/lampen/gp-halogeen-reflector-25w',
        '/portfolio/gp-halogeen-reflector-35w': '/producten/lampen/gp-halogeen-reflector-35w',
        '/portfolio/gp-halogeen-tip-candle-20w-2': '/producten/lampen/gp-halogeen-tip-candle-20w-2',
        '/portfolio/gp-halogeen-tip-candle-30w': '/producten/lampen/gp-halogeen-tip-candle-30w',
        '/portfolio/gp-halogeen-twist-25w': '/producten/lampen/gp-halogeen-twist-25w',
        '/portfolio/gp-halogeen-twist-35w': '/producten/lampen/gp-halogeen-twist-35w',
        '/portfolio/gp-led-classic-e27-12w': '/producten/lampen/gp-led-classic-e27-12w',
        '/portfolio/gp-led-classic-e27-8w': '/producten/lampen/gp-led-classic-e27-8w',
        '/portfolio/gp-led-gu10-3-5w': '/producten/lampen/gp-led-gu10-3-5w',
        '/portfolio/gp-led-gu10-6w': '/producten/lampen/gp-led-gu10-6w',
        '/portfolio/gp-led-mini-globe-flame-3-5w': '/producten/lampen/gp-led-mini-globe-flame-3-5w',
        '/portfolio/gp-lr44-knoopcel': '/producten/batterijen/gp-lr44-knoopcel',
        '/portfolio/gp-n-cell-super-alkaline': '/producten/batterijen/gp-n-cell-super-alkaline',
        '/portfolio/gp-powerbank-nimh-pb550': '/producten/batterijen/gp-powerbank-nimh-pb550',
        '/portfolio/gp-powerbank-nimh-pp570gs': '/producten/batterijen/gp-powerbank-nimh-pp570gs',
        '/portfolio/gp-powerbank-recyko-pb410': '/producten/batterijen/gp-powerbank-recyko-pb410',
        '/portfolio/gp-powerbank-recyko-pb420': '/producten/batterijen/gp-powerbank-recyko-pb420',
        '/portfolio/gp-sr44-knoopcel': '/producten/batterijen/gp-sr44-knoopcel',
        '/portfolio/gp-za10-gehoorapp-geel': '/producten/batterijen/gp-za10-gehoorapp-geel',
        '/portfolio/gp-za13-gehoorapp-oranje': '/producten/batterijen/gp-za13-gehoorapp-oranje',
        '/portfolio/gp-za312-gehoorapp-bruin': '/producten/batterijen/gp-za312-gehoorapp-bruin',
        '/portfolio/gp-za675-gehoorapp-blauw': '/producten/batterijen/gp-za675-gehoorapp-blauw',
        '/portfolio/griffon-gaslekspray-400ml': '/producten/onderhoud/griffon-gaslekspray-400ml',
        '/portfolio/hanning-afvoerpomp-magneet': '/producten/onderhoud/hanning-afvoerpomp-magneet',
        '/portfolio/koelkastlamp-led-0-95-watt': '/producten/lampen/koelkastlamp-led-0-95-watt',
        '/portfolio/kontact-reiniger-spuitbus-k60-100ml': '/producten/onderhoud/kontact-reiniger-spuitbus-k60-100ml',
        '/portfolio/krups-ontkalkerset-f054': '/producten/onderhoud/krups-ontkalkerset-f054',
        '/portfolio/krups-reinigingstablet-espresso': '/producten/onderhoud/krups-reinigingstablet-espresso',
        '/portfolio/krups-reiningingstablet-f055': '/producten/onderhoud/krups-reiningingstablet-f055',
        '/portfolio/krups-waterfilter-f088': '/producten/onderhoud/krups-waterfilter-f088',
        '/portfolio/lg-filter-amerikaanse-koelkast': '/producten/onderhoud/lg-filter-amerikaanse-koelkast',
        '/portfolio/lgatag-filter-amerikaanse-koelkast': '/producten/onderhoud/lgatag-filter-amerikaanse-koelkast',
        '/portfolio/menalux-aeg-330-gr51': '/producten/stofzuigerzakken/menalux-aeg-330-gr51',
        '/portfolio/menalux-aeg-gr-5e51': '/producten/stofzuigerzakken/menalux-aeg-gr-5e51',
        '/portfolio/menalux-aeg-gr28e53n': '/producten/stofzuigerzakken/menalux-aeg-gr28e53n',
        '/portfolio/menalux-bsh-d-e-f-g-h': '/producten/stofzuigerzakken/menalux-bsh-d-e-f-g-h',
        '/portfolio/menalux-bsh-type-k': '/producten/stofzuigerzakken/menalux-bsh-type-k',
        '/portfolio/menalux-bsh-type-p': '/producten/stofzuigerzakken/menalux-bsh-type-p',
        '/portfolio/menalux-deawoo-afkbeko-4000': '/producten/stofzuigerzakken/menalux-deawoo-afkbeko-4000',
        '/portfolio/menalux-miele-fjm': '/producten/stofzuigerzakken/menalux-miele-fjm',
        '/portfolio/menalux-miele-gnh': '/producten/stofzuigerzakken/menalux-miele-gnh',
        '/portfolio/menalux-nilfisk-gm2500-king': '/producten/stofzuigerzakken/menalux-nilfisk-gm2500-king',
        '/portfolio/menalux-nilfisk-gs8090': '/producten/stofzuigerzakken/menalux-nilfisk-gs8090',
        '/portfolio/menalux-numatic-henry': '/producten/stofzuigerzakken/menalux-numatic-henry',
        '/portfolio/menalux-phielux-s-bag': '/producten/stofzuigerzakken/menalux-phielux-s-bag',
        '/portfolio/menalux-philips-oslo': '/producten/stofzuigerzakken/menalux-philips-oslo',
        '/portfolio/miele-combizuigmond-sbd285-3': '/producten/stofzuiger-origineel/miele-combizuigmond-sbd285-3',
        '/portfolio/miele-filter-aktief-koolfilter-sf-aac30': '/producten/stofzuiger-origineel/miele-filter-aktief-koolfilter-sf-aac30',
        '/portfolio/miele-filter-sf-ah50': '/producten/stofzuiger-origineel/miele-filter-sf-ah50',
        '/portfolio/miele-filterset-warmtepomp': '/producten/reparatie-onderdelen/miele-filterset-warmtepomp',
        '/portfolio/miele-geurflacon-aqua': '/producten/onderhoud/miele-geurflacon-aqua',
        '/portfolio/miele-geurflacon-cocoon': '/producten/onderhoud/miele-geurflacon-cocoon',
        '/portfolio/miele-geurflacon-nature': '/producten/onderhoud/miele-geurflacon-nature',
        '/portfolio/miele-koolborstel-set-in-rubber': '/producten/reparatie-onderdelen/miele-koolborstel-set-in-rubber',
        '/portfolio/miele-koolfilter-sf-aac30': '/producten/stofzuiger-origineel/miele-koolfilter-sf-aac30',
        '/portfolio/miele-koolfilter-sf-aac500': '/producten/stofzuiger-origineel/miele-koolfilter-sf-aac500',
        '/portfolio/miele-manchet-78900-epdm-2': '/producten/stofzuiger-origineel/miele-manchet-78900-epdm-2',
        '/portfolio/miele-manchet-w3400-serie-epdm': '/producten/stofzuiger-origineel/miele-manchet-w3400-serie-epdm',
        '/portfolio/miele-microfilter-fijnzeef': '/producten/reparatie-onderdelen/miele-microfilter-fijnzeef',
        '/portfolio/miele-ontkalker-stoomoven': '/producten/onderhoud/miele-ontkalker-stoomoven',
        '/portfolio/miele-ontkalkingstabletten': '/producten/onderhoud/miele-ontkalkingstabletten',
        '/portfolio/miele-ontkalkingstabletten-koffiezetter-stoomoven': '/producten/onderhoud/miele-ontkalkingstabletten-koffiezetter-stoomoven',
        '/portfolio/miele-parketborsel-sbb300-3': '/producten/stofzuiger-origineel/miele-parketborsel-sbb300-3',
        '/portfolio/miele-pistoolgreep-s215-tm-s300': '/producten/stofzuiger-origineel/miele-pistoolgreep-s215-tm-s300',
        '/portfolio/miele-pistoolgreep-s500678': '/producten/stofzuiger-origineel/miele-pistoolgreep-s500678',
        '/portfolio/miele-pluizenfilter-in-deur-groot': '/producten/reparatie-onderdelen/miele-pluizenfilter-in-deur-groot',
        '/portfolio/miele-plumeau-347-serie-ssp10': '/producten/stofzuiger-origineel/miele-plumeau-347-serie-ssp10',
        '/portfolio/miele-radiatorborstel-plintenzuiger': '/producten/stofzuiger-origineel/miele-radiatorborstel-plintenzuiger',
        '/portfolio/miele-reinigingsmiddel': '/producten/onderhoud/miele-reinigingsmiddel',
        '/portfolio/miele-snaar-1320j5-elastisch': '/producten/onderhoud/miele-snaar-1320j5-elastisch',
        '/portfolio/miele-stofzak-fjm': '/producten/stofzuiger-origineel/miele-stofzak-fjm',
        '/portfolio/miele-stofzak-gn': '/producten/stofzuiger-origineel/miele-stofzak-gn',
        '/portfolio/miele-stofzuigerslang-s4000-s5000': '/producten/stofzuiger-origineel/miele-stofzuigerslang-s4000-s5000',
        '/portfolio/miele-telescoop-buis-3-delig': '/producten/stofzuiger-origineel/miele-telescoop-buis-3-delig',
        '/portfolio/miele-telescoopbuis-2-delig': '/producten/stofzuiger-origineel/miele-telescoopbuis-2-delig',
        '/portfolio/miele-turbo-zuigmond-stb205-3': '/producten/stofzuiger-origineel/miele-turbo-zuigmond-stb205-3',
        '/portfolio/miele-wieltje-onderkorf': '/producten/onderhoud/miele-wieltje-onderkorf',
        '/portfolio/miele-zuigmondje-rode-stip': '/producten/stofzuiger-origineel/miele-zuigmondje-rode-stip',
        '/portfolio/numatic-hepaflow-nvmich': '/producten/stofzuigerzakken/numatic-hepaflow-nvmich',
        '/portfolio/philips-braun-spuitbus-scheerkopreiniger': '/producten/onderhoud/philips-braun-spuitbus-scheerkopreiniger',
        '/portfolio/philips-electrolux-aroma-korrel': '/producten/onderhoud/philips-electrolux-aroma-korrel',
        '/portfolio/philips-electrolux-s-bag-e201b': '/producten/stofzuigerzakken/philips-electrolux-s-bag-e201b',
        '/portfolio/philips-scheerhoofd-set-hq8-hq9-alternatief': '/producten/onderhoud/philips-scheerhoofd-set-hq8-hq9-alternatief',
        '/portfolio/poly-v-snaar-1321-j6': '/producten/reparatie-onderdelen/poly-v-snaar-1321-j6',
        '/portfolio/poly-v-snaar-1860-h8-elastisch': '/producten/reparatie-onderdelen/poly-v-snaar-1860-h8-elastisch',
        '/portfolio/poly-v-snaar-1920-h8-elastisch': '/producten/reparatie-onderdelen/poly-v-snaar-1920-h8-elastisch',
        '/portfolio/poly-v-snaar-1930-h7': '/producten/reparatie-onderdelen/poly-v-snaar-1930-h7',
        '/portfolio/poly-v-snaar-1951-h7': '/producten/reparatie-onderdelen/poly-v-snaar-1951-h7',
        '/portfolio/poly-v-snaar-1975-h7': '/producten/reparatie-onderdelen/poly-v-snaar-1975-h7',
        '/portfolio/prikkraan-koper-leiding': '/producten/onderhoud/prikkraan-koper-leiding',
        '/portfolio/pvc-lijm-griffon-t88-100ml': '/producten/onderhoud/pvc-lijm-griffon-t88-100ml',
        '/portfolio/samsung-filter-amerikaanse-koelkast': '/producten/onderhoud/samsung-filter-amerikaanse-koelkast',
        '/portfolio/severin-melksysteem-reiniger-zb8694': '/producten/onderhoud/severin-melksysteem-reiniger-zb8694',
        '/portfolio/severin-ontkalkingstabletten-zb8697': '/producten/onderhoud/severin-ontkalkingstabletten-zb8697',
        '/portfolio/severin-reinigingstabletten-zb8698': '/producten/onderhoud/severin-reinigingstabletten-zb8698',
        '/portfolio/severin-waterfilter-zb8699': '/producten/onderhoud/severin-waterfilter-zb8699',
        '/portfolio/siemens-bosch-afvoerpomp': '/producten/onderhoud/siemens-bosch-afvoerpomp',
        '/portfolio/siemens-bosch-afvoerpomp-lc': '/producten/onderhoud/siemens-bosch-afvoerpomp-lc',
        '/portfolio/siemens-bosch-bestekmand-lc': '/producten/reparatie-onderdelen/siemens-bosch-bestekmand-lc',
        '/portfolio/siemens-bosch-koolborstels': '/producten/reparatie-onderdelen/siemens-bosch-koolborstels',
        '/portfolio/siemens-bosch-manchet-maxx': '/producten/onderhoud/siemens-bosch-manchet-maxx',
        '/portfolio/siemens-bosch-ontkalkingstabletten': '/producten/onderhoud/siemens-bosch-ontkalkingstabletten',
        '/portfolio/siemens-bosch-pluizenfilter-vulmond': '/producten/reparatie-onderdelen/siemens-bosch-pluizenfilter-vulmond',
        '/portfolio/siemens-bosch-wieltje-bovenkorf': '/producten/reparatie-onderdelen/siemens-bosch-wieltje-bovenkorf',
        '/portfolio/siemens-bosch-wieltje-onderkorf': '/producten/reparatie-onderdelen/siemens-bosch-wieltje-onderkorf',
        '/portfolio/siemens-bosch-wieltje-onderkorf-2': '/producten/reparatie-onderdelen/siemens-bosch-wieltje-onderkorf-2',
        '/portfolio/siemens-bosch-wieltjes-bovenkorf': '/producten/reparatie-onderdelen/siemens-bosch-wieltjes-bovenkorf',
        '/portfolio/siemens-bosch-zeef-microfilter': '/producten/reparatie-onderdelen/siemens-bosch-zeef-microfilter',
        '/portfolio/tefal-waterfilter-xh5000': '/producten/onderhoud/tefal-waterfilter-xh5000',
        '/portfolio/wasmachineverhoger-met-mand': '/producten//wasmachineverhoger-met-mand',
        '/portfolio/whirlpool-koelkast-hygienefilter': '/producten/onderhoud/whirlpool-koelkast-hygienefilter',
        '/portfolio/whirlpool-koolborstel': '/producten/reparatie-onderdelen/whirlpool-koolborstel',
        '/portfolio/whirlpool-pluizenfilter-wasdroger': '/producten/reparatie-onderdelen/whirlpool-pluizenfilter-wasdroger',
        '/portfolio/whirlpool-poly-snaar-1936h6': '/producten/reparatie-onderdelen/whirlpool-poly-snaar-1936h6',
        '/portfolio/whirlpool-wiel-vaatwasser': '/producten/reparatie-onderdelen/whirlpool-wiel-vaatwasser',
        '/portfolio/wpro-ceramische-reiniger-met-schraper': '/producten/onderhoud/wpro-ceramische-reiniger-met-schraper',
        '/portfolio/wpro-drogerbal-wasdroger': '/producten/onderhoud/wpro-drogerbal-wasdroger',
        '/portfolio/wpro-fles-ontkalker-en-ontvetter': '/producten/onderhoud/wpro-fles-ontkalker-en-ontvetter',
        '/portfolio/wpro-geurstaafje-citroen-stofzuiger': '/producten/onderhoud/wpro-geurstaafje-citroen-stofzuiger',
        '/portfolio/wpro-koelkast-deo': '/producten/onderhoud/wpro-koelkast-deo',
        '/portfolio/wpro-koelkast-reiniger': '/producten/onderhoud/wpro-koelkast-reiniger',
        '/portfolio/wpro-lampje-afzuigkap': '/producten/batterijen/wpro-lampje-afzuigkap',
        '/portfolio/wpro-lampje-koelkast-15w': '/producten/batterijen/wpro-lampje-koelkast-15w',
        '/portfolio/wpro-lampje-oven-25w': '/producten/lampen/wpro-lampje-oven-25w',
        '/portfolio/wpro-microvezeldoek': '/producten/onderhoud/wpro-microvezeldoek',
        '/portfolio/wpro-ontkalker-vloeistof-stoomstrijkijzer-250ml': '/producten/onderhoud/wpro-ontkalker-vloeistof-stoomstrijkijzer-250ml',
        '/portfolio/wpro-ontkalker-wasmachine-250gr': '/producten/onderhoud/wpro-ontkalker-wasmachine-250gr',
        '/portfolio/wpro-ontvetter-wasmachine-250gr': '/producten/onderhoud/wpro-ontvetter-wasmachine-250gr',
        '/portfolio/wpro-powerfresh-reiniger': '/producten/onderhoud/wpro-powerfresh-reiniger',
        '/portfolio/wpro-reinigingset-met-zoolreiniger-stick': '/producten/onderhoud/wpro-reinigingset-met-zoolreiniger-stick',
        '/portfolio/wpro-rvs-poets-en-polish-spray': '/producten/onderhoud/wpro-rvs-poets-en-polish-spray',
        '/portfolio/wpro-rvs-reiniger-250ml-vloeibaar': '/producten/onderhoud/wpro-rvs-reiniger-250ml-vloeibaar',
        '/portfolio/wpro-schraper-ceramisch-glas': '/producten/onderhoud/wpro-schraper-ceramisch-glas',
        '/portfolio/wpro-thermometer-koelsystemen': '/producten/onderhoud/wpro-thermometer-koelsystemen',
        '/portfolio/wpro-vetfilter-afzuigkap': '/producten/onderhoud/wpro-vetfilter-afzuigkap',
        '/portfolio/wpro-vetfilter-afzuigkap-2': '/producten/onderhoud/wpro-vetfilter-afzuigkap-2',
        '/portfolio/zos-aansluitsnoer-2mtr-wit': '/producten/electro/zos-aansluitsnoer-2mtr-wit',
        '/portfolio/zos-aansluitsnoer-2mtr-wit-2': '/producten/electro/zos-aansluitsnoer-2mtr-wit-2',
        '/portfolio/zos-aansluitsnoer-2mtr-zwart': '/producten/electro/zos-aansluitsnoer-2mtr-zwart',
        '/portfolio/zos-aansluitsnoer-2mtr-zwart-2': '/producten/electro/zos-aansluitsnoer-2mtr-zwart-2',
        '/portfolio/zos-aanvoer-amerikaansekoelkast-3m': '/producten/aansluitmateriaal/zos-aanvoer-amerikaansekoelkast-3m',
        '/portfolio/zos-aanvoerslang-1-5m-rechthaaks-koud': '/producten/electro/zos-aanvoerslang-1-5m-rechthaaks-koud',
        '/portfolio/zos-aanvoerslang-2-5m-rechthaaks-koud': '/producten/electro/zos-aanvoerslang-2-5m-rechthaaks-koud',
        '/portfolio/zos-afdicht-tape-aluminium-10m': '/producten/lucht/zos-afdicht-tape-aluminium-10m',
        '/portfolio/zos-afvoerslang-1-5m-recht-met-houder': '/producten/water/zos-afvoerslang-1-5m-recht-met-houder',
        '/portfolio/zos-afvoerslang-2-5m-recht-met-houder': '/producten/water/zos-afvoerslang-2-5m-recht-met-houder',
        '/portfolio/zos-afvoerslang-aeg-electrolux-etc': '/producten/water/zos-afvoerslang-aeg-electrolux-etc',
        '/portfolio/zos-afvoerslang-afzuigkap-125mm-2m': '/producten/water/zos-afvoerslang-afzuigkap-125mm-2m',
        '/portfolio/zos-afvoerslang-afzuigkap-125mm-5m': '/producten/water/zos-afvoerslang-afzuigkap-125mm-5m',
        '/portfolio/zos-afvoerslang-afzuigkap-150mm-2m': '/producten/water/zos-afvoerslang-afzuigkap-150mm-2m',
        '/portfolio/zos-afvoerslang-afzuigkap-150mm-5m': '/producten/water/zos-afvoerslang-afzuigkap-150mm-5m',
        '/portfolio/zos-afvoerslang-droger-100mm-1-5m': '/producten//zos-afvoerslang-droger-100mm-1-5m',
        '/portfolio/zos-afvoerslang-droger-100mm-3m': '/producten//zos-afvoerslang-droger-100mm-3m',
        '/portfolio/zos-aircleanfilter-255x202mm-universeel': '/producten//zos-aircleanfilter-255x202mm-universeel',
        '/portfolio/zos-aircleanfilter-310x125mm-universeel': '/producten//zos-aircleanfilter-310x125mm-universeel',
        '/portfolio/zos-badkamer-ventilator-a100': '/producten/lucht/zos-badkamer-ventilator-a100',
        '/portfolio/zos-badkamer-ventilator-a100t': '/producten/lucht/zos-badkamer-ventilator-a100t',
        '/portfolio/zos-badkamer-ventilator-a120': '/producten/lucht/zos-badkamer-ventilator-a120',
        '/portfolio/zos-badkamer-ventilator-a120t': '/producten/lucht/zos-badkamer-ventilator-a120t',
        '/portfolio/zos-bevestigingsbeugel-222x89mm-eco': '/producten/lucht/zos-bevestigingsbeugel-222x89mm-eco',
        '/portfolio/zos-bocht-en-y-stuk-pvc-40mm-grijs': '/producten//zos-bocht-en-y-stuk-pvc-40mm-grijs',
        '/portfolio/zos-buis-plafondventilator-z125': '/producten/lucht/zos-buis-plafondventilator-z125',
        '/portfolio/zos-buisstuk-220x90mm-eco-lengte-1000mm': '/producten/lucht/zos-buisstuk-220x90mm-eco-lengte-1000mm',
        '/portfolio/zos-buisverbinder-220x90mm-eco': '/producten/lucht/zos-buisverbinder-220x90mm-eco',
        '/portfolio/zos-bundelbandjes-14cm-2-5mm-wit-100st': '/producten/electro/zos-bundelbandjes-14cm-2-5mm-wit-100st',
        '/portfolio/zos-bundelbandjes-20cm-3-6mm-wit-100st': '/producten/electro/zos-bundelbandjes-20cm-3-6mm-wit-100st',
        '/portfolio/zos-bundelbandjes-30cm-4-8mm-wit-100st': '/producten/electro/zos-bundelbandjes-30cm-4-8mm-wit-100st',
        '/portfolio/zos-combimondwiel-32mm-aegphielenil': '/producten//zos-combimondwiel-32mm-aegphielenil',
        '/portfolio/zos-combimondwiel-35mm-mielesiembosch': '/producten//zos-combimondwiel-35mm-mielesiembosch',
        '/portfolio/zos-combizuigmond-32mm-aegphielenil': '/producten//zos-combizuigmond-32mm-aegphielenil',
        '/portfolio/zos-combizuigmond-35mm-mielesiembosch': '/producten//zos-combizuigmond-35mm-mielesiembosch',
        '/portfolio/zos-comfort-verloop-12-haaks': '/producten//zos-comfort-verloop-12-haaks',
        '/portfolio/zos-comfort-verloop-12-recht': '/producten//zos-comfort-verloop-12-recht',
        '/portfolio/zos-comfort-verloop-38-haaks': '/producten//zos-comfort-verloop-38-haaks',
        '/portfolio/zos-comfort-verloop-38-recht': '/producten//zos-comfort-verloop-38-recht',
        '/portfolio/zos-condensafvoerslang-1-5m': '/producten/aansluitmateriaal/zos-condensafvoerslang-1-5m',
        '/portfolio/zos-contra-stekker-zonder-ra': '/producten/electro/zos-contra-stekker-zonder-ra',
        '/portfolio/zos-contrastekker-met-ra-zwart': '/producten/electro/zos-contrastekker-met-ra-zwart',
        '/portfolio/zos-contrastekker-met-ra-zwart-pvc': '/producten/electro/zos-contrastekker-met-ra-zwart-pvc',
        '/portfolio/zos-contrastekker-ra-rubber': '/producten/electro/zos-contrastekker-ra-rubber',
        '/portfolio/zos-duct-tape-linnen-grijs': '/producten/lucht/zos-duct-tape-linnen-grijs',
        '/portfolio/zos-filter-hepa-miele-alternatief-sf-ah50': '/producten/lucht/zos-filter-hepa-miele-alternatief-sf-ah50',
        '/portfolio/zos-filter-motor-fc89000-phiele': '/producten/lucht/zos-filter-motor-fc89000-phiele',
        '/portfolio/zos-filter-uitblaas-89000-ef17-phiele': '/producten/lucht/zos-filter-uitblaas-89000-ef17-phiele',
        '/portfolio/zos-filter-uitblaas-efh12-stofzuiger': '/producten/lucht/zos-filter-uitblaas-efh12-stofzuiger',
        '/portfolio/zos-fitting-e14-m10-buitendraad-zwart': '/producten/electro/zos-fitting-e14-m10-buitendraad-zwart',
        '/portfolio/zos-fitting-e14-m10-buitendraad-zwart-2': '/producten/electro/zos-fitting-e14-m10-buitendraad-zwart-2',
        '/portfolio/zos-fitting-e14-m10-glad-zwart': '/producten/electro/zos-fitting-e14-m10-glad-zwart',
        '/portfolio/zos-fitting-e27-m10-buitendraad-zwart': '/producten/electro/zos-fitting-e27-m10-buitendraad-zwart',
        '/portfolio/zos-fitting-e27-m10-glad-zwart': '/producten/electro/zos-fitting-e27-m10-glad-zwart',
        '/portfolio/zos-fitting-gu10-universeel': '/producten/electro/zos-fitting-gu10-universeel',
        '/portfolio/zos-fitting-verhuis-zwart': '/producten/electro/zos-fitting-verhuis-zwart',
        '/portfolio/zos-gaskraan-12-haaks': '/producten/gas/zos-gaskraan-12-haaks',
        '/portfolio/zos-gasslang-100cm-compleet': '/producten/gas/zos-gasslang-100cm-compleet',
        '/portfolio/zos-gasslang-125cm-compleet': '/producten/gas/zos-gasslang-125cm-compleet',
        '/portfolio/zos-gasslang-150cm-compleet': '/producten/gas/zos-gasslang-150cm-compleet',
        '/portfolio/zos-gasslang-40cm-compleet': '/producten/gas/zos-gasslang-40cm-compleet',
        '/portfolio/zos-gasslang-60cm-compleet-2': '/producten/gas/zos-gasslang-60cm-compleet-2',
        '/portfolio/zos-gasslang-80cm-compleet': '/producten/gas/zos-gasslang-80cm-compleet',
        '/portfolio/zos-gasslang-rvs-100cm': '/producten/gas/zos-gasslang-rvs-100cm',
        '/portfolio/zos-gasslang-rvs-120cm': '/producten/gas/zos-gasslang-rvs-120cm',
        '/portfolio/zos-gasslang-rvs-60cm': '/producten/gas/zos-gasslang-rvs-60cm',
        '/portfolio/zos-gasslang-rvs-80cm': '/producten/gas/zos-gasslang-rvs-80cm',
        '/portfolio/zos-gastape-teflon': '/producten/gas/zos-gastape-teflon',
        '/portfolio/zos-gevelkap-bol-rvs-100mm': '/producten/lucht/zos-gevelkap-bol-rvs-100mm',
        '/portfolio/zos-gevelkap-bol-rvs-125mm': '/producten/lucht/zos-gevelkap-bol-rvs-125mm',
        '/portfolio/zos-gevelkap-bol-rvs-150mm': '/producten/lucht/zos-gevelkap-bol-rvs-150mm',
        '/portfolio/zos-gevelkap-met-lamellen-rvs-125mm': '/producten/lucht/zos-gevelkap-met-lamellen-rvs-125mm',
        '/portfolio/zos-gevelkap-met-lamellen-rvs-150mm': '/producten/lucht/zos-gevelkap-met-lamellen-rvs-150mm',
        '/portfolio/zos-gevelkap-schuine-kap-rvs-125mm': '/producten/lucht/zos-gevelkap-schuine-kap-rvs-125mm',
        '/portfolio/zos-gevelkap-schuine-kap-rvs-150mm': '/producten/lucht/zos-gevelkap-schuine-kap-rvs-150mm',
        '/portfolio/zos-gevelklep-bruin-100mm': '/producten/lucht/zos-gevelklep-bruin-100mm',
        '/portfolio/zos-gevelklep-bruin-125mm': '/producten/lucht/zos-gevelklep-bruin-125mm',
        '/portfolio/zos-hoekstuk-220x90mm-horizontaal-90-eco': '/producten/lucht/zos-hoekstuk-220x90mm-horizontaal-90-eco',
        '/portfolio/zos-hoekstuk-220x90mm-vertikaal-90-eco': '/producten/lucht/zos-hoekstuk-220x90mm-vertikaal-90-eco',
        '/portfolio/zos-hoekstuk-eco-220x90mm-horizontaal-15o': '/producten/lucht/zos-hoekstuk-eco-220x90mm-horizontaal-15o',
        '/portfolio/zos-isolatieband-wit': '/producten/electro/zos-isolatieband-wit',
        '/portfolio/zos-isolatieband-zwart': '/producten/electro/zos-isolatieband-zwart',
        '/portfolio/zos-kabel-3x0-75mm-5m-wit': '/producten/electro/zos-kabel-3x0-75mm-5m-wit',
        '/portfolio/zos-kabel-3x1-5mm-10m-wit': '/producten/electro/zos-kabel-3x1-5mm-10m-wit',
        '/portfolio/zos-kabel-3x1-5mm-2-5m-wit': '/producten/electro/zos-kabel-3x1-5mm-2-5m-wit',
        '/portfolio/zos-kabeldoos-met-3-wartels-pg16': '/producten/electro/zos-kabeldoos-met-3-wartels-pg16',
        '/portfolio/zos-koppelstuk-aanvoer-messing-34x34': '/producten/aansluitmateriaal/zos-koppelstuk-aanvoer-messing-34x34',
        '/portfolio/zos-koppelstuk-afvoer-19-22mm-recht': '/producten/aansluitmateriaal/zos-koppelstuk-afvoer-19-22mm-recht',
        '/portfolio/zos-koppelstuk-toevoeslangen-pvc-34x34': '/producten/aansluitmateriaal/zos-koppelstuk-toevoeslangen-pvc-34x34',
        '/portfolio/zos-kroonstrip-2-5mm-2stuks': '/producten/electro/zos-kroonstrip-2-5mm-2stuks',
        '/portfolio/zos-kroonstrip-6mm-2stuks': '/producten/electro/zos-kroonstrip-6mm-2stuks',
        '/portfolio/zos-lamellenrooster-150mm': '/producten/lucht/zos-lamellenrooster-150mm',
        '/portfolio/zos-lamellenrooster-wit-100mm': '/producten/lucht/zos-lamellenrooster-wit-100mm',
        '/portfolio/zos-lamellenrooster-wit-125mm': '/producten/lucht/zos-lamellenrooster-wit-125mm',
        '/portfolio/zos-losse-buis-32mm-universeel': '/producten/stofzuiger-universeel/zos-losse-buis-32mm-universeel',
        '/portfolio/zos-luidsprekersnoer-2x0-75-20-meter': '/producten/electro/zos-luidsprekersnoer-2x0-75-20-meter',
        '/portfolio/zos-luidsprekersnoer-2x0-75-5-meter': '/producten/electro/zos-luidsprekersnoer-2x0-75-5-meter',
        '/portfolio/zos-luidsprekersnoer-2x1-5-5-meter': '/producten/electro/zos-luidsprekersnoer-2x1-5-5-meter',
        '/portfolio/zos-luidsprekersnoer-2x1-5%e2%80%b3-10-meter': '/producten/electro/zos-luidsprekersnoer-2x1-5%e2%80%b3-10-meter',
        '/portfolio/zos-luidsprekersnoer-2x1-5%e2%80%b3-20-meter': '/producten/electro/zos-luidsprekersnoer-2x1-5%e2%80%b3-20-meter',
        '/portfolio/zos-overgangsstuk-haaks-o-150mm-220x90mm-eco': '/producten/lucht/zos-overgangsstuk-haaks-o-150mm-220x90mm-eco',
        '/portfolio/zos-overgangsstuk-recht-o-150mm-220x90mm-eco': '/producten/lucht/zos-overgangsstuk-recht-o-150mm-220x90mm-eco',
        '/portfolio/zos-overspanningsbeveiliging': '/producten/electro/zos-overspanningsbeveiliging',
        '/portfolio/zos-parketborstel-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-parketborstel-32mm-aegphielenil',
        '/portfolio/zos-parketborstel-35mm-mielesiembosch': '/producten/stofzuiger-universeel/zos-parketborstel-35mm-mielesiembosch',
        '/portfolio/zos-parketzuigmond-35mm-36cm-breed': '/producten/stofzuiger-universeel/zos-parketzuigmond-35mm-36cm-breed',
        '/portfolio/zos-perilex-stekker-16a-haaks': '/producten/electro/zos-perilex-stekker-16a-haaks',
        '/portfolio/zos-perilex-stekker-met-snoer-5x1-5-2m': '/producten/electro/zos-perilex-stekker-met-snoer-5x1-5-2m',
        '/portfolio/zos-pistoolgreep-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-pistoolgreep-32mm-aegphielenil',
        '/portfolio/zos-pistoolgreep-35mm-mielesiembosch': '/producten/stofzuiger-universeel/zos-pistoolgreep-35mm-mielesiembosch',
        '/portfolio/zos-plafondplaat-klem': '/producten/electro/zos-plafondplaat-klem',
        '/portfolio/zos-plafondplaat-vierkant': '/producten/electro/zos-plafondplaat-vierkant',
        '/portfolio/zos-plumeau-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-plumeau-32mm-aegphielenil',
        '/portfolio/zos-plumeau-35mm-mielesiembosch': '/producten/stofzuiger-universeel/zos-plumeau-35mm-mielesiembosch',
        '/portfolio/zos-plumeau-35mm-mielesiembosch-2': '/producten/stofzuiger-universeel/zos-plumeau-35mm-mielesiembosch-2',
        '/portfolio/zos-radiator-borstel-32-35mm': '/producten/stofzuiger-universeel/zos-radiator-borstel-32-35mm',
        '/portfolio/zos-radiator-mondstuk-flex-32-35mm': '/producten/stofzuiger-universeel/zos-radiator-mondstuk-flex-32-35mm',
        '/portfolio/zos-reisstekker-ster-wit': '/producten/electro/zos-reisstekker-ster-wit',
        '/portfolio/zos-rvs-buitenrooster-eco-222x89mm': '/producten/lucht/zos-rvs-buitenrooster-eco-222x89mm',
        '/portfolio/zos-rvs-buitenrooster-eco-o150mm': '/producten/lucht/zos-rvs-buitenrooster-eco-o150mm',
        '/portfolio/zos-sifon-wasm-aansl-112-x-40mm-klem-wit': '/producten/water/zos-sifon-wasm-aansl-112-x-40mm-klem-wit',
        '/portfolio/zos-slangklem-16-27mm-rvs-2stuks': '/producten/lucht/zos-slangklem-16-27mm-rvs-2stuks',
        '/portfolio/zos-slangklem-25-40mm-rvs-2stuks': '/producten/lucht/zos-slangklem-25-40mm-rvs-2stuks',
        '/portfolio/zos-slangklem-40-60mm-rvs-2stuks': '/producten/lucht/zos-slangklem-40-60mm-rvs-2stuks',
        '/portfolio/zos-slangklem-60-165mm-rvs-2stuks': '/producten/lucht/zos-slangklem-60-165mm-rvs-2stuks',
        '/portfolio/zos-snoer-schakelaar-1p-wit': '/producten/electro/zos-snoer-schakelaar-1p-wit',
        '/portfolio/zos-snoer-schakelaar-1p-zwart': '/producten/electro/zos-snoer-schakelaar-1p-zwart',
        '/portfolio/zos-spanningzoeker-klein-met-clip': '/producten/electro/zos-spanningzoeker-klein-met-clip',
        '/portfolio/zos-spijkerclips-10stk-8-10mm': '/producten/electro/zos-spijkerclips-10stk-8-10mm',
        '/portfolio/zos-spleetmond-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-spleetmond-32mm-aegphielenil',
        '/portfolio/zos-spleetmondlang-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-spleetmondlang-32mm-aegphielenil',
        '/portfolio/zos-stekker-contra-pvc-randaarde-wit': '/producten/electro/zos-stekker-contra-pvc-randaarde-wit',
        '/portfolio/zos-stekker-contra-randaarde-wit': '/producten/electro/zos-stekker-contra-randaarde-wit',
        '/portfolio/zos-stekker-contra-wit-zonder-randaarde': '/producten/electro/zos-stekker-contra-wit-zonder-randaarde',
        '/portfolio/zos-stekker-haaks-randaarde-wit': '/producten/electro/zos-stekker-haaks-randaarde-wit',
        '/portfolio/zos-stekker-ra-haaks-zwart': '/producten/electro/zos-stekker-ra-haaks-zwart',
        '/portfolio/zos-stekker-ra-klap-wit': '/producten/electro/zos-stekker-ra-klap-wit',
        '/portfolio/zos-stekker-ra-klap-zwart': '/producten/electro/zos-stekker-ra-klap-zwart',
        '/portfolio/zos-stekker-ra-pvc-wit': '/producten/electro/zos-stekker-ra-pvc-wit',
        '/portfolio/zos-stekker-ra-pvc-zwart': '/producten/electro/zos-stekker-ra-pvc-zwart',
        '/portfolio/zos-stekker-ra-schakelaar': '/producten/electro/zos-stekker-ra-schakelaar',
        '/portfolio/zos-stekker-rubber-ra-recht': '/producten/electro/zos-stekker-rubber-ra-recht',
        '/portfolio/zos-stekker-zonder-ra-wit': '/producten/electro/zos-stekker-zonder-ra-wit',
        '/portfolio/zos-stekker-zonder-ra-zwart': '/producten/electro/zos-stekker-zonder-ra-zwart',
        '/portfolio/zos-stofzuigerslang-universeel': '/producten/stofzuiger-universeel/zos-stofzuigerslang-universeel',
        '/portfolio/zos-stofzuigersnoer-10m-3x1': '/producten/electro/zos-stofzuigersnoer-10m-3x1',
        '/portfolio/zos-stofzuigersnoer-15m-2x1': '/producten/electro/zos-stofzuigersnoer-15m-2x1',
        '/portfolio/zos-stofzuigersnoer-6mtr': '/producten/electro/zos-stofzuigersnoer-6mtr',
        '/portfolio/zos-strijkijzersnoer-3mtr': '/producten/electro/zos-strijkijzersnoer-3mtr',
        '/portfolio/zos-syphon-pvc-40mm-grijs': '/producten/water/zos-syphon-pvc-40mm-grijs',
        '/portfolio/zos-tafeldoos-3v-met-ra-1-5m-wit-3x1mm': '/producten/electro/zos-tafeldoos-3v-met-ra-1-5m-wit-3x1mm',
        '/portfolio/zos-tafeldoos-3v-ra-3m-wit': '/producten/electro/zos-tafeldoos-3v-ra-3m-wit',
        '/portfolio/zos-tafeldoos-3v-z-ra-1-5m-wit': '/producten/electro/zos-tafeldoos-3v-z-ra-1-5m-wit',
        '/portfolio/zos-tafeldoos-4v-1-5m-met-schakelaar': '/producten/electro/zos-tafeldoos-4v-1-5m-met-schakelaar',
        '/portfolio/zos-tafeldoos-4v-z-ra-1-5m-wit': '/producten/electro/zos-tafeldoos-4v-z-ra-1-5m-wit',
        '/portfolio/zos-tafeldoos-6v-ra-3m-wit': '/producten/electro/zos-tafeldoos-6v-ra-3m-wit',
        '/portfolio/zos-telescoopbuis-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-telescoopbuis-32mm-aegphielenil',
        '/portfolio/zos-telescoopbuis-lock-35mm-miele': '/producten/stofzuiger-universeel/zos-telescoopbuis-lock-35mm-miele',
        '/portfolio/zos-trekkoord-voor-schakelaar': '/producten/electro/zos-trekkoord-voor-schakelaar',
        '/portfolio/zos-trillingdempers-wasmachine': '/producten/onderhoud/zos-trillingdempers-wasmachine',
        '/portfolio/zos-turbo-combizuigmond-32mm-en-35mm': '/producten/stofzuiger-universeel/zos-turbo-combizuigmond-32mm-en-35mm',
        '/portfolio/zos-verbindingskl-3v-voor-soepel-en-massief': '/producten/electro/zos-verbindingskl-3v-voor-soepel-en-massief',
        '/portfolio/zos-verdeelstekker-2x-plat': '/producten/electro/zos-verdeelstekker-2x-plat',
        '/portfolio/zos-verdeelstekker-ra-horizontaal': '/producten/electro/zos-verdeelstekker-ra-horizontaal',
        '/portfolio/zos-verlengsnoer-ra-3x1-5mm-3m-wit': '/producten/electro/zos-verlengsnoer-ra-3x1-5mm-3m-wit',
        '/portfolio/zos-verloop-35-32mm-stofzuiger': '/producten/lucht/zos-verloop-35-32mm-stofzuiger',
        '/portfolio/zos-verloop-lucht-afvoer-80100125mm': '/producten/lucht/zos-verloop-lucht-afvoer-80100125mm',
        '/portfolio/zos-was-dr-schak-dubbel-opbouw': '/producten/electro/zos-was-dr-schak-dubbel-opbouw',
        '/portfolio/zos-was-dr-schak-opbouw-lamp': '/producten/electro/zos-was-dr-schak-opbouw-lamp',
        '/portfolio/zos-wasmachine-droger-regelaar': '/producten/electro/zos-wasmachine-droger-regelaar',
        '/portfolio/zos-water-kraan-met-beluchter': '/producten/water/zos-water-kraan-met-beluchter',
        '/portfolio/zos-waterkraan-y-stuk': '/producten/water/zos-waterkraan-y-stuk',
        '/portfolio/zos-waterslot-elektrisch-met-sensor': '/producten/water/zos-waterslot-elektrisch-met-sensor',
        '/portfolio/zos-waterslot-instelbaar': '/producten/water/zos-waterslot-instelbaar',
        '/portfolio/zos-waterzuigmond-35mm-breed-36cm': '/producten/stofzuiger-universeel/zos-waterzuigmond-35mm-breed-36cm',
        '/portfolio/zos-y-stuk-toevoerslang-34x34x34-messing': '/producten/water/zos-y-stuk-toevoerslang-34x34x34-messing',
        '/portfolio/zos-y-stuk-voor-water-afvoer': '/producten/water/zos-y-stuk-voor-water-afvoer',
        '/portfolio/zos-zaklamp-led-2xaa': '/producten/lampen/zos-zaklamp-led-2xaa',
        '/portfolio/zos-zekeringen-16a-traag': '/producten/electro/zos-zekeringen-16a-traag',
        '/portfolio/zos-zuigmondjeborstel-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-zuigmondjeborstel-32mm-aegphielenil',
        '/portfolio/zos-zuigmondjeborstel-35mm-mielesiembosch': '/producten/stofzuiger-universeel/zos-zuigmondjeborstel-35mm-mielesiembosch',
        '/portfolio/zos-zuigmondjestrip-32mm-aegphielenil': '/producten/stofzuiger-universeel/zos-zuigmondjestrip-32mm-aegphielenil',
        '/portfolio/zos-zuigmondjestrip-35mm-mielesiembosch': '/producten/stofzuiger-universeel/zos-zuigmondjestrip-35mm-mielesiembosch',
        '/producten': '/producten/start',
    }
});
