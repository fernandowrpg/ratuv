/* Service worker: keeps the whole app available offline.
   Guarda o app inteiro para funcionar offline. Bump VERSION when publishing a change. */
const VERSION = 'ratuv-v2';
const DATA = ['ui', 'common', 'fantasy', 'idol', 'paranormal', 'school', 'wuxia'];
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css', 'js/rv.js', 'js/app.js',
  ...['en', 'pt'].flatMap(l => DATA.map(f => `js/lang/${l}/${f}.js`)),
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Answer from the cache right away and refresh the copy in the background.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req).then(res => {
        if (res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => hit || (req.mode === 'navigate' ? cache.match('index.html') : Response.error()));
      return hit || net;
    })
  );
});
