// ══════════════════════════════════════════
// Troškovi — Service Worker v4
// ══════════════════════════════════════════

const CACHE_NAME = 'troskovi-v4';

const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// ── Install: predcachaj sve assete ──
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Cache install greška (možda nedostaju ikone):', err))
  );
});

// ── Activate: očisti stare cache verzije ──
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Brišem stari cache:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, s network fallback ──
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Google Fonts — network-first (svježe, ali s cache fallback)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Sve ostalo — cache-first
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        if (cached) return cached;

        return fetch(e.request)
          .then(response => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
            }
            return response;
          })
          .catch(() => {
            if (e.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
