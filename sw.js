/* Genshin Optimizer service worker — makes repeat visits load from the browser cache.
 * - content-hashed files (name-XXXXXXXX.ext): cache-first (they never change)
 * - other same-origin GET files (e.g. locale JSON): network-first (must match the deployed code),
 *   falling back to cache after 3s / offline
 * - page navigations (index.html): network-first, fall back to cache after 3s / offline
 */
const CACHE = 'go-cache-v2'
const HASHED = /-[A-Za-z0-9_-]{8}\.[a-z0-9]+$/i

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  )
})

async function cacheFirst(req) {
  const cache = await caches.open(CACHE)
  const hit = await cache.match(req)
  if (hit) return hit
  const res = await fetch(req)
  if (res.ok) cache.put(req, res.clone())
  return res
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE)
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 3000)
      ),
    ])
    if (res.ok) cache.put(req, res.clone())
    return res
  } catch (e) {
    const hit = await cache.match(req)
    if (hit) return hit
    return fetch(req)
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req))
  } else if (HASHED.test(url.pathname)) {
    event.respondWith(cacheFirst(req))
  } else {
    event.respondWith(networkFirst(req))
  }
})
