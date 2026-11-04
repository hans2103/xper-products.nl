// Central place for brand and company details.
export const site = {
  name: 'Xpèr Products',
  tagline: 'Kwaliteit in onderdelen',
  url: 'https://www.xper-products.nl',
  shopName: 'onderdelenexpert.nl',
  shopUrl: 'https://www.onderdelenexpert.nl',
  gtmId: 'GTM-M3SNQV4W',
  company: {
    legalName: 'van der Zanden Onderdelen Service B.V.',
    street: 'Industriepark 20',
    postalCode: '5374 CM',
    city: 'Schaijk',
    country: 'NL',
    email: 'info@zanden-onderdelen.nl',
    phone: '0486-461954',
    phoneIntl: '+31486461954',
    kvk: '95514090',
    vat: 'NL867161061B01',
  },
};

/** Short facts line for a rack, e.g. "121 producten · richtprijs € 350". */
export function rackFacts({ productCount, price }: { productCount?: number; price?: number }) {
  return [
    productCount && `${productCount} producten`,
    price ? `richtprijs € ${price}` : 'richtprijs op aanvraag',
  ].filter(Boolean).join(' · ');
}

export const lowestRackPrice = (racks: { data: { price?: number } }[]) =>
  Math.min(...racks.map((r) => r.data.price).filter((p): p is number => p !== undefined));

export const categories: Record<string, { label: string; intro: string }> = {
  aansluitmateriaal: { label: 'Aansluitmateriaal', intro: 'Toevoerslangen, condensafvoer en koppelstukken voor wasmachine, vaatwasser en koelkast.' },
  electra: { label: 'Electra', intro: 'Snoeren, stekkers, fittingen, schakelaars en kleine installatiematerialen.' },
  gas: { label: 'Gas', intro: 'Gasslangen met keurmerk voor fornuis, oven en andere gastoestellen.' },
  lucht: { label: 'Lucht', intro: 'Ventilatoren, luchtafvoerslangen, roosters, gevelkappen en klemmen.' },
  onderhoud: { label: 'Onderhoud', intro: 'Reinigers, ontkalkers, waterfilters en andere middelen om apparaten langer mee te laten gaan.' },
  'reparatie-onderdelen': { label: 'Reparatie-onderdelen', intro: 'Pompen, koolborstels, filters en andere vervangende onderdelen voor witgoed.' },
  'stofzuiger-origineel': { label: 'Stofzuiger origineel', intro: 'Originele zakken, filters en onderdelen van de fabrikant, zoals Miele, Bosch en Siemens.' },
  'stofzuiger-universeel': { label: 'Stofzuiger universeel', intro: 'Universele buizen, zuigmonden en accessoires die op de meeste stofzuigers passen.' },
  stofzuigerzakken: { label: 'Stofzuigerzakken', intro: 'Stofzuigerzakken voor de meest gangbare merken en typen.' },
  water: { label: 'Water', intro: 'Afvoerslangen, sifons en klemmen voor wasmachine en afzuigkap.' },
};
