
const CACHE_NAME = 'offline-html';

const FALLBACK_HTML_URL = '/fallback';

self.addEventListener( 'install', async ( event ) => {
	event.waitUntil(
		caches.open( CACHE_NAME )
			.then( ( cache ) => cache.add( FALLBACK_HTML_URL ) )
	);
});

self.addEventListener('fetch', function (event) {
	// Prevent the default, and handle the request ourselves.
	event.respondWith(async function () {
		// Try to get the response from a cache.
		const cachedResponse = await caches.match(event.request);
		// Return it if we found one.
		if (cachedResponse) return cachedResponse;
		// If we didn't find a match in the cache, use the network.
		return fetch(event.request);
	}());
});
