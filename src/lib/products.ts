import { getCollection, type CollectionEntry } from 'astro:content';

type Product = CollectionEntry<'products'>;

/**
 * Active products only. A product with `active: false` (for example because the webshop no longer sells it)
 * gets no page and does not appear in lists, search, counts or llms.txt. Redirect its old URL in vercel.json.
 */
export function getProducts(filter: (product: Product) => boolean = () => true): Promise<Product[]> {
    return getCollection('products', (product) => product.data.active && filter(product));
}
