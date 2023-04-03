const CACHE_NAME = 'safouane.gg-caching';
const urlsToCache = [
    '/main.css',
    '/summoner',
];

// add urls for specific players
const players = ['FNC Hylissang', 'Safoekillmachine', 'Daans01', 'Boaster fan'];
players.forEach(player => {
    urlsToCache.push(`/summoner/${player}?loadingState=true`);
});

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('safouane.gg-') && cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
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

                        // Cache the response for specific players
                        if (players.includes(e.request.url.split('/').pop())) {
                            return caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(e.request, response.clone())
                                    return response
                                })
                        }

                        return response;
                    })
                    .catch(() => caches.match('/offline.html')) // Return the offline page if there is an error fetching the resource
            })
            .catch(() => caches.match('/offline.html')) // Return the offline page if the cache does not contain the requested resource
    )
})
