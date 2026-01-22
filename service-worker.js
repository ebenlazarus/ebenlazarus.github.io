---
layout: null
---
// service-worker.js
// Version now auto-generated at build time (no manual updates needed)

const CACHE_NAME = 'static-{{ site.time | date: "%Y%m%d%H%M%S" }}';
const ASSETS = [
  '/',                            // homepage
  '/assets/css/mdb.min.css',      //
  '/assets/js/jquery.min.js',     // jQuery
  '/assets/webfonts/fa-solid-900.woff2', // Font Awesome
  '/assets/img/prof_pic.jpg'             // cache the real URL you request
  // ...add any other "static" files you want pre-cached...
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  // remove old caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // 1) Runtime‐cache ALL images under /img/
  if (url.pathname.startsWith('/img/')) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(netRes => {
          if (!netRes.ok) return netRes;
          caches.open(CACHE_NAME).then(cache => cache.put(req, netRes.clone()));
          return netRes;
        });
      })
    );
    return;
  }

  // 2) Otherwise, serve from cache first, then network
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
