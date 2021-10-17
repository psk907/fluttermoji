'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9f4ef299d880b6253893111ab02d5322",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "73ac6e468d456e95c2b015bc38e1bf4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttermoji/attributeicons/accessories.svg": "0b8839e003a89232edec0e09cb12fa2b",
"assets/packages/fluttermoji/attributeicons/beard.svg": "908ac523ce1c704be65e254aa4a04e31",
"assets/packages/fluttermoji/attributeicons/beardcolor.svg": "8fa1ec767cfa14371ca15a47126049ba",
"assets/packages/fluttermoji/attributeicons/eyebrow.svg": "cf66096dacdfb6af807cd745fc724e9a",
"assets/packages/fluttermoji/attributeicons/eyes.svg": "cfbbbeb9cc3b40c6a561166ad07fc56c",
"assets/packages/fluttermoji/attributeicons/hair.svg": "0044380b1c40c321c8a65da5b8e77a0c",
"assets/packages/fluttermoji/attributeicons/haircolor.svg": "5756eb4c957d15ea7fcc37c1835488ac",
"assets/packages/fluttermoji/attributeicons/mouth.svg": "af3193d2a407e09fa1156f0f3c30ea86",
"assets/packages/fluttermoji/attributeicons/outfit.svg": "f36789fda25e7b3746835daf0ec7c0dc",
"assets/packages/fluttermoji/attributeicons/outfitcolor.svg": "e8f931206db9c6ab01a6b4c22c23bf4d",
"assets/packages/fluttermoji/attributeicons/skin.svg": "5f58e197768b8da582fbe8219daf164d",
"favicon.ico": "383d179b8b6779b538e479990b598a02",
"icons/android-icon-144x144.png": "843781c1c80597dcf7182dece8474321",
"icons/android-icon-192x192.png": "3458963860f3ebc53f78a82a005cde4a",
"icons/android-icon-36x36.png": "01587d916a2af2fc797c4629d515fc2b",
"icons/android-icon-48x48.png": "7daaf8e83b9360ba9c2f99c57f858f5e",
"icons/android-icon-72x72.png": "ffbb9f2db183b54b69a155aac31e8864",
"icons/android-icon-96x96.png": "f3d38ce63e89b0ee161514b3b6c967e3",
"icons/apple-icon-114x114.png": "ffe8811a013a8c1a0e8520a324a20d62",
"icons/apple-icon-120x120.png": "1a543101c9cdbb8753ade58675bebb66",
"icons/apple-icon-144x144.png": "843781c1c80597dcf7182dece8474321",
"icons/apple-icon-152x152.png": "200b7946593ba1801517b8056a53c386",
"icons/apple-icon-180x180.png": "c11f5859ba01c9f3722bb1dde902952e",
"icons/apple-icon-57x57.png": "ea2f41adf267bbb19a00efa4b693cb90",
"icons/apple-icon-60x60.png": "3b641be7d6c88df68eaec718ee7ebfa9",
"icons/apple-icon-72x72.png": "ffbb9f2db183b54b69a155aac31e8864",
"icons/apple-icon-76x76.png": "9a22899425a043162d3534148e623998",
"icons/apple-icon-precomposed.png": "2735dbbc0a88d6b12ebea7364d8fbfd7",
"icons/apple-icon.png": "2735dbbc0a88d6b12ebea7364d8fbfd7",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "d6b16d7b22cbb0f5b69f808c7ec794d5",
"icons/favicon-32x32.png": "57cda12ea82a2933ff648813ae6d0e28",
"icons/favicon-96x96.png": "f3d38ce63e89b0ee161514b3b6c967e3",
"icons/favicon.ico": "383d179b8b6779b538e479990b598a02",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "843781c1c80597dcf7182dece8474321",
"icons/ms-icon-150x150.png": "9e0fdf5f60936b1c3e95135e039a4c94",
"icons/ms-icon-310x310.png": "423ee2e3583c91d7b9d98d394184cf66",
"icons/ms-icon-70x70.png": "e45bafd0b3047150797c7aed0fc372df",
"index.html": "f60ebfec74ae682c3b62b44c641f2006",
"/": "f60ebfec74ae682c3b62b44c641f2006",
"main.dart.js": "3b1025c8753a25b3a6231ef454c9cf3e",
"manifest.json": "9e7b34fd7c291ca2523123ef20497930",
"version.json": "cf3c49b8ed77d44b7de3aebab31ad026"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
