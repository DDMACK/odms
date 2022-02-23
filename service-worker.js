/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ca83720b0ca8a40d3daae138d68caff"
  },
  {
    "url": "assets/css/0.styles.123dfdf0.css",
    "revision": "2041af29ecfcbebab3faf353b280844e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2f606455.js",
    "revision": "3ec61217cc4df06fa8cd7f4c30c1fada"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.c2dc366c.js",
    "revision": "84d03d74c8749c77170ec3c649a32ddd"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.d0b88963.js",
    "revision": "f01c550f762bd8c213c880b1a70b595e"
  },
  {
    "url": "assets/js/16.dffafc6e.js",
    "revision": "66288023d3f372ac464317221849fab3"
  },
  {
    "url": "assets/js/17.8f47f68d.js",
    "revision": "84e87df441ca89231789e99d034adf23"
  },
  {
    "url": "assets/js/18.d8070267.js",
    "revision": "ed75a869134ac19fa7e978a7cca1d4e7"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.52694342.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.5ea6afcd.js",
    "revision": "48a4193475f83b4cf6331c1bcb27f686"
  },
  {
    "url": "assets/js/21.a8a2d4fe.js",
    "revision": "e07cdc285809bba347f1d54a51551a4b"
  },
  {
    "url": "assets/js/22.f8aa1d7d.js",
    "revision": "b8ac58c4d5bd4a6b440b6c1f039a6afe"
  },
  {
    "url": "assets/js/23.418bb3fe.js",
    "revision": "89d101ad293c12b093f671eff310e158"
  },
  {
    "url": "assets/js/24.42ae2fc3.js",
    "revision": "9b2de4ce88eba303e0a6e6e2b1830f78"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.19d66de0.js",
    "revision": "34e4dc8308467d77a9dc5318911ce920"
  },
  {
    "url": "assets/js/7.3906f7a7.js",
    "revision": "dbf3fe1c5b38157ad795d49e2c42bfcd"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.727d78b6.js",
    "revision": "b278c218db201e33a9e5c3490039653f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f94488c5bb9aa7f5b880e74cd09665df"
  },
  {
    "url": "design/index.html",
    "revision": "d086c11f92511b5139cd5006beb634ab"
  },
  {
    "url": "index.html",
    "revision": "989b714d65d647de58d1e898bf1a2c6d"
  },
  {
    "url": "intro/index.html",
    "revision": "e296f628caec53940694cd8a7003d824"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cdcd582cdc50304cb0805f736ca311fc"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e81f99ac9a2e4930adcb2716a555785c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "857fa90c134e54dcfcc8c70951527870"
  },
  {
    "url": "software/index.html",
    "revision": "af16e774314eb83d9d57f88043624350"
  },
  {
    "url": "test/index.html",
    "revision": "fe36cad8c9a81a7ac13b57ab5bb0d7bf"
  },
  {
    "url": "use cases/index.html",
    "revision": "0add1fbe3e38116805a8609f2e31ef01"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
