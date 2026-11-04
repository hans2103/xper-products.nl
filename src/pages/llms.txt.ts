import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getProducts } from '../lib/products';
import { categories, rackFacts, site } from '../config/site';

export const GET: APIRoute = async () => {
  const products = await getProducts();
  const racks = (await getCollection('racks')).sort((a, b) => a.data.order - b.data.order);
  const { company } = site;

  const lines = [
    `# ${site.name}`,
    '',
    `> Xpèr is een merk van ${company.legalName} (${company.city}) voor onderdelen en accessoires voor huishoudelijke apparaten. ${products.length} producten, verkocht via de vakhandel en online via ${site.shopName}. Op deze site zelf kun je niet bestellen.`,
    '',
    `Contact: ${company.email}, ${company.phone}, ${company.street}, ${company.postalCode} ${company.city}.`,
    '',
    '## Productgroepen',
    '',
    ...Object.entries(categories).map(([slug, { label, intro }]) => `- [${label}](${site.url}/producten/${slug}/): ${intro}`),
    '',
    '## Voor winkeliers',
    '',
    `- [Xpèr verkopen in uw winkel](${site.url}/ondernemers/): schappen van 255 × 100 × 37 cm, stelling in bruikleen.`,
    ...racks.map((r) => `- [Schap ${r.data.title.toLowerCase()}](${site.url}/ondernemers/${r.id}/): ${rackFacts(r.data)}.`),
    '',
    '## Producten',
    '',
    ...products
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((p) => `- [${p.data.title}](${site.url}/producten/${p.id}/): artikelnummer ${p.data.sku}. ${p.data.description}`),
  ];

  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
