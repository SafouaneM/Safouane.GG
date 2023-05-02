const CACHE_NAME = 'safouane.gg-cachingv2';
console.log('hi')
self.addEventListener('install', function (event) {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('safouane.gg-cachingv2').then(function (cache) {
            return cache.addAll([
                '/main.css',
                '/offline'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service worker activating...');

});


self.addEventListener("fetch", (e) => {
    console.log("[Service Worker] Fetching...");
    const url = new URL(e.request.url);

    // Only cache static assets
    if (url.pathname.startsWith('/main.css')) {
        e.respondWith(
            caches.match(e.request)
                .then(cachedResponse => {
                    if (cachedResponse) return cachedResponse;
                    return fetch(e.request)
                        .then(response => {
                            if (e.request.method !== 'GET' || e.request.url.indexOf('http') !== 0) return response;
                            return caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(e.request, response.clone());
                                    return response;
                                });
                        });
                })
                .catch(() => caches.open(CACHE_NAME).then(cache => cache.match('/offline')))
        );
    } else {
        // For all other requests, do not use the cache
        e.respondWith(fetch(e.request));
    }
});

