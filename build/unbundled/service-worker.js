/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-box/app-box.html","bad81da0da6661cba3b585efd7732faa"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","8bb71bc0d6d07384c21562bbc2da7a38"],["/bower_components/app-layout/app-drawer/app-drawer.html","db04464589d885b771613350bd6f6311"],["/bower_components/app-layout/app-grid/app-grid-style.html","e899275e1247821ae96efa7da4af6739"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-layout.html","8c1748893c5a70c63a6cf83cc85fad1f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","bc1ca312eb9192253e0c8a2a267eb45e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-icons/av-icons.html","277a5dd3faff0799aa9fa1f5cd5a1801"],["/bower_components/iron-icons/communication-icons.html","4bfa3743264bd5510028ec68cba8ed9e"],["/bower_components/iron-icons/iron-icons.html","224dfbc53cf908d9ae68da954ca2d8e9"],["/bower_components/iron-icons/social-icons.html","ee8983a2f719e9fd83620dd5a905187b"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-item/paper-icon-item.html","17d1540072712073af1a84ae9b0ba06a"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","8b91d21da1ac0ab23442d05b4e377286"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","b1aa4799e795c2d9288be9adea362ec0"],["/bower_components/paper-menu/paper-menu-shared-styles.html","9b2ae6e8b26011a37194ea3b4bdd043d"],["/bower_components/paper-menu/paper-menu.html","5270d7b4b603d9fdfcfdb079c750a3cd"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","8000f38eeb423a68d8b94dde06a0afad"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","977e21100d7e7ce33e6c132964d1cfde"],["/bower_components/paper-toolbar/paper-toolbar.html","ff99e4e6d522685e7e4d04f290e8ac9b"],["/bower_components/polymer/polymer-micro.html","c8afdb92849d162268e7cc58eff5cd57"],["/bower_components/polymer/polymer-mini.html","33af9817ee3946c225d038f5a04d276a"],["/bower_components/polymer/polymer.html","186cfd0bba3b39fd262e69dc7bcc699a"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","5623eb7091041f0da44f3b2f92ee2574"],["/main.css","0fc6660cf714cad22d2d25284773cc4a"],["/style.html","55be3be5c44f1720329bda314375bb6f"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




