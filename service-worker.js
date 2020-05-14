const CHACHE_NAME = "submission-v1";
const urlsToCache = [
  "./",
  "./layouts/nav.html",
  "./index.html",
  "./pages/home.html",
  "./pages/about.html",
  "./pages/contact.html",
  "./pages/portofolio.html",
  "./css/materialize.min.css",
  "./js/materialize/materialize.min.js",
  "./js/main.js",
  "./js/app/index.js",
  "./js/app/layouts/nav.js",
  "./js/app/pages/pages.js",
  "./img/portofolio.png",
  "./img/dua.png",
  "./img/icon-sm.png",
  "./img/icon-lg.png",
  "./manifest.json",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CHACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request, { cacheName: CHACHE_NAME }).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName != CHACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          } else {
            console.log("a");
          }
        })
      );
    })
  );
});
