'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/images/5d8318ba-1c38-4450-a29d-29971df6c58f.jpg": "32282acd7a5df3a9d5a92a6b6545cd8e",
"assets/asset/images/appStore.svg": "3faef46c004ef3e793bfee24cbcf4c5a",
"assets/asset/images/appstoreLight.svg": "0085f8055f5298a61cd3e8e061638d3e",
"assets/asset/images/container6Mobile.svg": "3b59c07cd8266b0c21b77763a22b75d3",
"assets/asset/images/cusotmerDp1.svg": "873f80744b339804fd706d42b1b4a971",
"assets/asset/images/discordIcon.svg": "71fb03ff820e2bfeec5189a0d91221fa",
"assets/asset/images/fbIcon.svg": "6e435a5573709358a2bb5280e0a51065",
"assets/asset/images/googleplay.svg": "497e1941982d6194fd7360f13631d256",
"assets/asset/images/googlePlayLight.svg": "08c1a996960d5b485c2aa2e0e210cfb0",
"assets/asset/images/haderIcon.svg": "b3ce8a248e488a21462bf947df823a48",
"assets/asset/images/heroImg.svg": "1c462f54a65c8f116a318138a0b2b836",
"assets/asset/images/heroImg2.png": "a66906110c40ea635040111efeca8b6e",
"assets/asset/images/heroImg2.svg": "32336165b871d2f8c7528d2b94bfcc4c",
"assets/asset/images/heroImg3.png": "6a359697bbe0724714b3053cabdf7393",
"assets/asset/images/heroImg3.svg": "ebfea2d502d646c088f4bec9388c1d1a",
"assets/asset/images/heroImg4.png": "cef26bd20eb87313df04b17964d02292",
"assets/asset/images/heroImg4.svg": "4945c850c5799959405a9631d3666449",
"assets/asset/images/heroImg42.png": "12ff051abdbeac0211390e319c8a4f91",
"assets/asset/images/heroImg43.png": "bbea6ba1b924ec669a72b7f2d231c33f",
"assets/asset/images/heroImg5.svg": "698756f60331431c40e5626152202fe8",
"assets/asset/images/heroImg6.png": "70ba04df5ba1f39121b655b44c9fe108",
"assets/asset/images/heroImg6.svg": "03bb4b3c5ab788ec1f6c6ab0501e4570",
"assets/asset/images/HeroImg6ImgPhone.png": "b4804bed3df7be3824b72308fa5e0f8d",
"assets/asset/images/heroImgMobile1.1": "3e4060c26bfec59a0363c9ab11a5fbeb",
"assets/asset/images/heroImgMobile1.2": "3306d7e52d59b6c7c75299df18275d73",
"assets/asset/images/heroImgPng.png": "e2d9ad89abbfbdd4ffbd3cabd728384c",
"assets/asset/images/images.jpeg": "a269ec3e994c1a25192f0a52e401cab3",
"assets/asset/images/indian_tailor.jpg": "b01c712d20d265aa3a2668557c0f61f5",
"assets/asset/images/inrIcon.svg": "049ba5372cc5019ad81f4714d0161711",
"assets/asset/images/insight.svg": "c94005d6d2faa8c685a53c03ff05b065",
"assets/asset/images/Instagram.svg": "55220d40d63969cea2411cc09ce174b0",
"assets/asset/images/invoice.svg": "db88ce4791bebd9ae27a03a5541437ac",
"assets/asset/images/ladiesTalior.png": "835db6a7341799608a2a342ad04ef957",
"assets/asset/images/linkedin.svg": "21477506603b7ecabae6af5cd0791fb1",
"assets/asset/images/measurementIcon.svg": "8e52aa2ea369f20ee34c6ba1fb82c57f",
"assets/asset/images/menuIcon.svg": "832bcc942e3ebf8c134f2e8e8b8d7936",
"assets/asset/images/mulitligual.svg": "ef5c7ef5872383e33400aeaebd19394d",
"assets/asset/images/panjabiTalior.png": "812f818dd9af1cc6ba19f2b10522afe6",
"assets/asset/images/peopleIcon.svg": "178a1cd9f71fffb42b80890904cf27e8",
"assets/asset/images/peoplePaymentIonc.svg": "6724754cdca7473d3f7a6c9d50c9e5d3",
"assets/asset/images/peopleTickIcon.svg": "f8bf589a46eb99aca1d3224b8f29223d",
"assets/asset/images/purpleCircle.svg": "360630269bff49855ee6a3f9dd903af7",
"assets/asset/images/sheetTickIcon.svg": "370f53d203fbfe7e9b7182f0537a941d",
"assets/asset/images/shielIcon.svg": "b5c92a4b6c2867484aa2e7b00c8938ff",
"assets/asset/images/taloir1-transformed.png": "a4041640aa45e51b87898370883a7740",
"assets/asset/images/testomonialImag1.png": "f3439dcc89ce82b7092c45939670aff0",
"assets/asset/images/twitterIcon.svg": "764382093f693abd3ebe95db24e04f27",
"assets/asset/images/whatsAppIcon.svg": "fe1c67785505293197acbbd57d23cf90",
"assets/AssetManifest.bin": "f06b9615640ba7cd21b9a24ac849ca44",
"assets/AssetManifest.json": "f65cd0fb72c8eaaa700b02b2ef509533",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e87190567d932952b9c6bc0181e73e89",
"assets/NOTICES": "bcca60e7e11ac32cdb935611daa4e68a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3607234ffb1ce4fb046b015b5665b7a4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "27c2e05595a82bbfa32490274b07f759",
"icons/favicon-16x16.png": "da0237918d3796e01dce4897e085a91b",
"icons/favicon-32x32.png": "aa02784222fb8587c07fd3438c5d78c8",
"icons/favicon.ico": "f783984ad04cb93348592765e4e2d9cd",
"icons/Icon-192%20.png": "3ec984cae6791dbfe4c9be729f0c1684",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1780f99aea57feed47c14ea80d7b721",
"/": "f1780f99aea57feed47c14ea80d7b721",
"main.dart.js": "5a77b9173a2b763bf87107c7f15ea5ba",
"manifest.json": "55ec68961c1fac122d4a2311cc70e711",
"version.json": "1344d082b2c5a54e3ba619513aaaf88f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
