# Xpèr Products

Website van [xper-products.nl](https://www.xper-products.nl): het productoverzicht van het merk Xpèr (Zanden Onderdelen) en informatie voor winkeliers die een Xpèr-schap willen verkopen. Bestellen gebeurt via onderdelenexpert.nl.

Gebouwd met [Astro](https://astro.build), statisch gehost op Vercel.

## Commando's

| Commando          | Wat het doet                                |
| :---------------- | :------------------------------------------ |
| `npm install`     | Dependencies installeren                    |
| `npm run dev`     | Dev-server op `localhost:4321`              |
| `npm run build`   | Productiebuild naar `./dist/`               |
| `npm run preview` | Productiebuild lokaal bekijken              |

## Structuur

```
src/
├── config/site.ts          bedrijfsgegevens, productgroepen en GTM-id
├── content/products/<groep>/<slug>.md   één bestand per product
├── content/racks/*.md      de schappen voor winkeliers
├── assets/products/        productfoto's (artikelnummer.jpg)
├── layouts/Base.astro      <head>, SEO, JSON-LD, header en footer
├── components/             o.a. ProductTag (het "ophangkaartje")
├── scripts/consent.ts      cookietoestemming; GTM laadt pas na akkoord
└── pages/                  routes, inclusief llms.txt en robots.txt
```

## Een product toevoegen

Maak `src/content/products/<groep>/<slug>.md` aan. De URL wordt `/producten/<groep>/<slug>/`.

```md
---
title: "ZOS Gasslang 80cm compleet"
sku: "400-200-0005"
brand: "ZOS"
description: "Rubberen gasslang van 80 cm met GASTEC QA-keurmerk."   # max. 160 tekens
image: "../../../assets/products/400-200-0005.jpg"
imageAlt: "Zwarte gasslang van 80 cm in Xpèr-verpakking"          # optioneel
orderUrl: "https://www.onderdelenexpert.nl/..."                   # optioneel
---

Productomschrijving in Markdown. Gebruik echte lijsten (`- ` of `1. `).
```

Productfoto's worden bij de build automatisch verkleind en naar WebP omgezet. Lever ze aan als JPEG van maximaal 1600 px aan de langste zijde (schapfoto's maximaal 2000 px); groter heeft geen zin en maakt de repository alleen zwaarder.
