// Cookie consent. Google Tag Manager only loads after the visitor accepts statistics cookies;
// until then nothing is sent to Google.
import { site } from '../config/site';

type Choice = 'granted' | 'denied';
const KEY = 'xper-consent';

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try { localStorage.setItem(KEY, choice); } catch { /* private mode: ask again next visit */ }
}

let gtmLoaded = false;
function loadTagManager() {
  if (gtmLoaded) return;
  gtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted',
  });
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  // The GA4 tag in the container is triggered by this event.
  window.dataLayer.push({ event: 'gtm_consent_update' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${site.gtmId}`;
  document.head.append(script);
}

const dialog = document.querySelector<HTMLDialogElement>('[data-consent]');
// On the policy pages the choice stays visible but does not block the text it refers to.
const isPolicyPage = /^\/(cookies|privacy)\/?$/.test(location.pathname);

function open() {
  if (!dialog || dialog.open) return;
  if (isPolicyPage) dialog.show();
  else dialog.showModal();
}

function apply(choice: Choice) {
  saveChoice(choice);
  dialog?.close();
  if (choice === 'granted') loadTagManager();
  // Withdrawing consent after GTM loaded needs a reload to stop it.
  else if (gtmLoaded) location.reload();
}

const stored = readChoice();
if (stored === 'granted') loadTagManager();
if (!stored) open();

// Escape may only close the dialog once a choice has been made.
dialog?.addEventListener('cancel', (event) => {
  if (!readChoice()) event.preventDefault();
});

dialog?.querySelector('[data-consent-accept]')?.addEventListener('click', () => apply('granted'));
dialog?.querySelector('[data-consent-deny]')?.addEventListener('click', () => apply('denied'));

document.querySelectorAll('[data-consent-open]').forEach((button) => button.addEventListener('click', open));
