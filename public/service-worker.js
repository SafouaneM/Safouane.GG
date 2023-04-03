const CACHE_NAME = 'safouane.gg-cachingv2';

self.addEventListener('install', function (event) {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('safouane.gg-cachingv2').then(function (cache) {
            return cache.addAll([
                '/main.css',
                '/summoner',
                '/offline'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service worker activating...');

});


self.addEventListener("fetch", (e) => {
    console.log("[Service Worker] Fetching...")
    e.respondWith(
        caches.match(e.request)
            .then(cachedResponse => {
                if (cachedResponse) return cachedResponse
                return fetch(e.request)
                    .then(response => {
                        if (e.request.method !== 'GET' || e.request.url.indexOf('http') !== 0) return response
                        return caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(e.request, response.clone())
                                return response
                            })
                    })
            })
            .catch(() => caches.open(CACHE_NAME).then(cache => cache.match('/offline'))
            )
    )
})