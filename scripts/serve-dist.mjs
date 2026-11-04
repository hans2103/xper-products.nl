// Minimal static server for dist/, used by the CI checks.
// `astro preview` runs as a background daemon with a lock file when there is no TTY, so it outlives the
// script that started it and refuses to start next to another preview. This server lives and dies with the caller.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../dist/', import.meta.url));
const TYPES = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
    '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

async function resolve(pathname) {
    const file = join(ROOT, normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, ''));
    if (!file.startsWith(ROOT)) return null;
    try {
        const s = await stat(file);
        return s.isDirectory() ? join(file, 'index.html') : file;
    } catch {
        return null;
    }
}

/** Starts the server on a free port and returns { url, close }. */
export async function serveDist() {
    const server = createServer(async (req, res) => {
        const file = await resolve(new URL(req.url, 'http://x').pathname);
        try {
            const body = await readFile(file);
            res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
            res.end(body);
        } catch {
            res.writeHead(404, { 'Content-Type': TYPES['.html'] });
            res.end(await readFile(join(ROOT, '404.html')).catch(() => 'Not found'));
        }
    });
    await new Promise((r) => server.listen(0, '127.0.0.1', r));
    return { url: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) };
}
