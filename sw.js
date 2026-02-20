const CACHE_NAME = 'absensi-v1';
const assets = [
  '/absensi-digital/index.html',
  '/absensi-digital/manifest.json',
  '/absensi-digital/logo/Logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );

});

