// Cache name
const CACHE_NAME = 'averys animals';

// Files to cache
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/ahsoka.html',
    '/cloe.html',
    '/luna.html',
    '/milord.html',
    '/pumpkin.html',
    '/smokey.html',
    'stewie.html',
    '/waffles.html',
    '/android-launchericon-192-192.png',
    '/android-launchericon-512-512.png',
    "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css",
    "https://code.jquery.com/jquery-1.11.1.min.js",
    "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"


];

//Insatll event: Cavche files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cache) => cache !== CACHE_NAME)
                    .map((cache) => caches.delete(cache))
            );
        })
    );
});
