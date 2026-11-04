// Runs axe-core against the production build (dist/) and fails on serious or critical violations.
// Uses the same URLs as Lighthouse CI (lighthouserc.json), so both checks cover the same pages.
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import { serveDist } from './serve-dist.mjs';

const FAILING_IMPACTS = new Set(['serious', 'critical']);

const lhci = JSON.parse(await readFile(new URL('../lighthouserc.json', import.meta.url), 'utf8'));
const paths = lhci.ci.collect.url.map((u) => new URL(u).pathname);

let failures = 0;
const server = await serveDist();
const BASE = server.url;
const browser = await chromium.launch();
try {
    // Reduced motion skips the consent fade-in, so axe measures final colours instead of a half-transparent dialog.
    const page = await (await browser.newContext({ reducedMotion: 'reduce' })).newPage();
    for (const path of paths) {
        await page.goto(BASE + path, { waitUntil: 'load' });
        const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        const blocking = violations.filter((v) => FAILING_IMPACTS.has(v.impact));
        const minor = violations.length - blocking.length;
        console.log(`${blocking.length ? '✗' : '✓'} ${path}${minor ? ` (${minor} minor/moderate)` : ''}`);
        for (const v of blocking) {
            console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
            for (const node of v.nodes.slice(0, 5)) {
                const detail = node.any[0]?.message ?? node.failureSummary ?? '';
                console.log(`    ${node.target.join(' ')}: ${detail.split('\n')[0]}`);
            }
        }
        failures += blocking.length;
    }
} finally {
    await browser.close();
    await server.close();
}

if (failures) {
    console.error(`\n${failures} serious/critical axe violation(s).`);
    process.exit(1);
}
console.log('\nNo serious/critical axe violations.');
