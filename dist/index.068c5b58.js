// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fyZmE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "717517da068c5b58";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dJGk2":[function(require,module,exports) {
/* 




// Globala variabler och konstanter
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "Spelare";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];

var highscores = [];

// Funktion som körs när sidan har laddats
 window.onload = function () 
document.addEventListener("DOMContentLoaded", function (){
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }

   
    // Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function () {
  startGame();
});
fetchHighscores();
});

function startGame() {
  setPlayerName();
  resetGame();
}

// Lägg till en händelselyssnare för knappen


// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}
function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;

  // Nu kan du anropa updateHighscoreList() här för att uppdatera highscore-listan med spelarens namn.
  updateHighscoreList();
}

// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
}

// Funktion för att sätta spelarens namn


// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error(error);
    });

    
}

// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = "";
  highscores.sort((a, b) => b.score - a.score);

  var listItem;
    // Loopa igenom highscores och lägg till dem i listan
    highscores.slice(0, 5).forEach(entry => {
      listItem = document.createElement("li");
      listItem.innerText = `${entry.name}: ${entry.score}`;
      highscoreList.appendChild(listItem);
    });


  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
    highscoreList.appendChild(playerListItem);
  }
}
   // Gör en GET-förfrågan till servern för att hämta highscores
   fetch('http://localhost:3000/api/highscores')
   .then(response => response.json())
   .then(data => {
       // Skapa listelement för varje highscore-post och lägg till dem i listan
       data.forEach(entry => {
           
           listItem.innerText = `${entry.name}: ${entry.score}`;
           highscoreList.appendChild(listItem);
       });
      })
      .catch(error => {
          console.error(error);
      });



// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore >= winningScore || yourScore >= winningScore) {
  if (opponentScore === 1) { 
   if (yourScore === winningScore) { 
    // Spelaren har vunnit, uppdatera highscores och skicka till backend
    highscores.push({ name: playerName, score: yourScore });
    fetch('http://localhost:3000/api/highscores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(highscores)
      
    })
      .then(response => response.json())
      .then(data => {
        // Highscores har uppdaterats på backend
        fetchHighscores(); // Hämta de senaste highscores från backend
      })
      .catch(error => {
        console.error(error);
      });
  } else if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button"); */ // Lägg till en händelselyssnare för knappen
/* var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "Spelare";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];

var highscores = [];
var winningScore = 3; // Definiera det här värdet

// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }

  // Hämta knappen med hjälp av id
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    startGame();
  });
  fetchHighscores();
});

function startGame() {
  setPlayerName();
  resetGame();
}

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;

  // Nu kan du anropa updateHighscoreList() här för att uppdatera highscore-listan med spelarens namn.
  updateHighscoreList();
}

// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
}

// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error(error);
    });
}

// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = "";

  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Visa de fem bästa highscores
  for (var i = 0; i < Math.min(highscores.length, 5); i++) {
    var listItem = document.createElement("li");
    listItem.innerText = `${highscores[i].name}: ${highscores[i].score}`;
    highscoreList.appendChild(listItem);
  }

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${yourScore}`;
    highscoreList.appendChild(playerListItem);
  }
}

// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore >= winningScore || yourScore >= winningScore) {
    // Spelaren har vunnit, uppdatera highscores och skicka till backend
    highscores.push({ name: playerName, score: yourScore });
    fetch('http://localhost:3000/api/highscores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(highscores)
    })
      .then(response => response.json())
      .then(data => {
        // Highscores har uppdaterats på backend
        fetchHighscores(); // Hämta de senaste highscores från backend
      })
      .catch(error => {
        console.error(error);
      });
  } else if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för

playButton.addEventListener("click", function () {
  startGame();
});
 */ /* var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "Spelare";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];

var highscores = [];

// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }

  // Hämta knappen med hjälp av id
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    startGame();
  });
  fetchHighscores();
});

function startGame() {
  setPlayerName();
  resetGame();
}

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;

  // Nu kan du anropa updateHighscoreList() här för att uppdatera highscore-listan med spelarens namn.
  updateHighscoreList();
}

// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
}

// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error(error);
    });
}

// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = "";

  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Loopa igenom highscores och lägg till dem i listan
  highscores.slice(0, 5).forEach(entry => {
    var listItem = document.createElement("li");
    listItem.innerText = `${entry.name}: ${entry.score}`;
    highscoreList.appendChild(listItem);
  });

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
    highscoreList.appendChild(playerListItem);
  }
}

// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för knappen
playButton.addEventListener("click", function () {
  startGame();
}); */ /*  var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
const playerName_span = document.getElementById('playerList');


var highscores = [];

function updatePlayerList() {

  playerName_span.textContent = `Spelare: ${playerName} | Poäng: ${playerScore}`;
  
  }

// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);

    


  }

 

  // Hämta knappen med hjälp av id
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    startGame();
  });
 
});

fetchHighscores();

function startGame() {
  updatePlayerList();
  setPlayerName();
  resetGame();
}

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}


// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}






// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error('Error fetching highscores:', error);
      console.error(error); 
     });
    }



 // Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  console.log("Uppdaterar highscore-listan");
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = ""; 
  if (!highscoreList) {
    console.error("Highscore-list element not found.");
    return;
  }


  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Loopa igenom highscores och lägg till dem i listan
  highscoreList.innerHTML = "";
  highscores.slice(0, 5).forEach(entry => {
    var listItem = document.createElement("li");
    listItem.innerText = `${entry.name}: ${entry.score}`;
    highscoreList.appendChild(listItem);
  });

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
    highscoreList.appendChild(playerListItem);
  }
}

// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
    updateHighscoreList(); // Uppdatera highscore-listan efter att omgången är klar

    


  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för knappen
playButton.addEventListener("click", function () {
  startGame();
});
  */ /* var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
const playerName_span = document.getElementById('playerList');

var highscores = [];

function updatePlayerList() {

  playerName_span.textContent = `Spelare: ${playerName} | Poäng: ${playerScore}`;
  
  }

// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);

  }

 

  // Hämta knappen med hjälp av id
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    startGame();
  });
 
});

fetchHighscores();

function startGame() {
  updatePlayerList();
  setPlayerName();
  resetGame();
}

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}


// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}












// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error('Error fetching highscores:', error);
  /*     console.error(error); */ /*     });
}

// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  console.log("Uppdaterar highscore-listan");
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = ""; 
  if (!highscoreList) {
    console.error("Highscore-list element not found.");
    return;
  }


  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Loopa igenom highscores och lägg till dem i listan
  highscoreList.innerHTML = "";
  highscores.slice(0, 5).forEach(entry => {
    var listItem = document.createElement("li");
    listItem.innerText = `${entry.name}: ${entry.score}`;
    highscoreList.appendChild(listItem);
  });

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
    highscoreList.appendChild(playerListItem);
  }
}

// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
    updateHighscoreList(); // Uppdatera highscore-listan efter att omgången är klar

    


  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för knappen
playButton.addEventListener("click", function () {
  startGame();
}); */ /* var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = ["rock", "paper", "scissors"];
const playerName_span = document.getElementById('playerList');

var highscores = [];

function updatePlayerList() {

  playerName_span.textContent = `Spelare: ${playerName} | Poäng: ${playerScore}`;
  
  }

// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // Skapa spelalternativ (sten, sax, påse)
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);

  }

 

  // Hämta knappen med hjälp av id
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    startGame();
  });
 
});

fetchHighscores();

function startGame() {
  updatePlayerList();
  setPlayerName();
  resetGame();
}

// Funktion för att välja ett alternativ
function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    // Oavgjort, inga poäng tilldelas
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
        opponentChoiceText = "påse";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
        opponentChoiceText = "sten";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
        opponentChoiceText = "sax";
        if (opponentScore === 1) {
          resetGame(); // Nollställ spelet när datorn får ett poäng
        }
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;

  // Kolla om spelet är klart
  checkGameStatus();
}

function setPlayerName() {
  var inputElement = document.getElementById("name-input");
  playerName = inputElement.value;
  var playerNameDisplay = document.getElementById("player-name-display");
  playerNameDisplay.innerText = "Spelare: " + playerName;
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}


// Funktion för att nollställa spelet
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  opponentChoiceText = "";
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
  updatePlayerList();
  updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}












// Funktion för att hämta highscores från backend
function fetchHighscores() {
  fetch('http://localhost:3000/api/highscores')
    .then(response => response.json())
    .then(data => {
      highscores = data;
      updateHighscoreList();
    })
    .catch(error => {
      console.error('Error fetching highscores:', error);
  /*     console.error(error); */ /*  });
}

// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
  console.log("Uppdaterar highscore-listan");
  var highscoreList = document.getElementById("highscore-list");
  highscoreList.innerHTML = ""; 
  if (!highscoreList) {
    console.error("Highscore-list element not found.");
    return;
  }


  // Sortera highscores i fallande ordning baserat på poäng
  highscores.sort((a, b) => b.score - a.score);

  // Loopa igenom highscores och lägg till dem i listan
  highscoreList.innerHTML = "";
  highscores.slice(0, 5).forEach(entry => {
    var listItem = document.createElement("li");
    listItem.innerText = `${entry.name}: ${entry.score}`;
    highscoreList.appendChild(listItem);
  });

  // Lägg till spelarens namn och poäng om de är bland de bästa
  var playerIndex = highscores.findIndex(entry => entry.name === playerName);
  if (playerIndex !== -1) {
    var playerListItem = document.createElement("li");
    playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
    highscoreList.appendChild(playerListItem);
  }
}

// Funktion för att kolla om spelet är klart
function checkGameStatus() {
  if (opponentScore === 1) {
    // Datorn har vunnit en omgång, nollställ spelet
    resetGame();
    updateHighscoreList(); // Uppdatera highscore-listan efter att omgången är klar

    


  }
}

// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setPlayerName();
  }
});

// Hämta knappen med hjälp av id
var playButton = document.getElementById("play-button");

// Lägg till en händelselyssnare för knappen
playButton.addEventListener("click", function () {
  startGame();
});




 */ var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var opponentChoiceText = "";
var playerName = "";
var opponentName = "Dator";
var playerScore = 0;
var choices = [
    "rock",
    "paper",
    "scissors"
];
const playerName_span = document.getElementById("playerList");
var highscores = [];
function updatePlayerList() {
    playerName_span.textContent = `Spelare: ${playerName} | Poäng: ${playerScore}`;
}
// Funktion som körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event triggered");
    // Skapa spelalternativ (sten, sax, påse)
    for(let i = 0; i < choices.length; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
    // Hämta knappen med hjälp av id
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        startGame();
    });
    // Hämta highscore-listan med hjälp av id
    var highscoreList = document.getElementById("highscore-list");
    // Kontrollera om highscore-listan finns på sidan
    if (!highscoreList) {
        console.error("Highscore-list element not found.");
        return;
    }
});
fetchHighscores();
function startGame() {
    updatePlayerList();
    setPlayerName();
    resetGame();
}
// Funktion för att välja ett alternativ
function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";
    if (you == opponent) ;
    else {
        if (you == "rock") {
            if (opponent == "scissors") yourScore += 1;
            else if (opponent == "paper") {
                opponentScore += 1;
                opponentChoiceText = "p\xe5se";
                if (opponentScore === 1) resetGame(); // Nollställ spelet när datorn får ett poäng
            }
        } else if (you == "scissors") {
            if (opponent == "paper") yourScore += 1;
            else if (opponent == "rock") {
                opponentScore += 1;
                opponentChoiceText = "sten";
                if (opponentScore === 1) resetGame(); // Nollställ spelet när datorn får ett poäng
            }
        } else if (you == "paper") {
            if (opponent == "rock") yourScore += 1;
            else if (opponent == "scissors") {
                opponentScore += 1;
                opponentChoiceText = "sax";
                if (opponentScore === 1) resetGame(); // Nollställ spelet när datorn får ett poäng
            }
        }
    }
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
    // Kolla om spelet är klart
    checkGameStatus();
}
function setPlayerName() {
    var inputElement = document.getElementById("name-input");
    playerName = inputElement.value;
    var playerNameDisplay = document.getElementById("player-name-display");
    playerNameDisplay.innerText = "Spelare: " + playerName;
    updatePlayerList();
    updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}
// Funktion för att nollställa spelet
function resetGame() {
    yourScore = 0;
    opponentScore = 0;
    opponentChoiceText = "";
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("opponent-choice-text").innerText = opponentChoiceText;
    document.getElementById("your-choice").src = "";
    document.getElementById("opponent-choice").src = "";
    updatePlayerList();
    updateHighscoreList(); // Uppdatera highscore-listan när spelarnamnet har ändrats
}
// Funktion för att hämta highscores från backend
function fetchHighscores() {
    fetch("http://localhost:3000/api/highscores").then((response)=>{
        if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
        return response.json();
    }).then((data)=>{
        highscores = data;
        updateHighscoreList();
    }).catch((error)=>{
        console.error("Error fetching highscores:", error);
    });
}
// Funktion för att uppdatera highscore-listan på sidan
function updateHighscoreList() {
    console.log("updateHighscoreList called");
    console.log("playerName:", playerName);
    var highscoreList = document.getElementById("highscore-list");
    if (!highscoreList) {
        console.error("Highscore-list element not found.");
        return;
    }
    // Sortera highscores i fallande ordning baserat på poäng
    highscores.sort((a, b)=>b.score - a.score);
    // Loopa igenom highscores och lägg till dem i listan
    highscoreList.innerHTML = "";
    highscores.slice(0, 5).forEach((entry)=>{
        var listItem = document.createElement("li");
        listItem.innerText = `${entry.name}: ${entry.score}`;
        highscoreList.appendChild(listItem);
    });
    // Lägg till spelarens namn och poäng om de är bland de bästa
    var playerIndex = highscores.findIndex((entry)=>entry.name === playerName);
    if (playerIndex !== -1) {
        var playerListItem = document.createElement("li");
        playerListItem.innerText = `${playerName}: ${highscores[playerIndex].score}`;
        highscoreList.appendChild(playerListItem);
    }
}
// Funktion för att kolla om spelet är klart
function checkGameStatus() {
    if (opponentScore === 1) {
        // Datorn har vunnit en omgång, nollställ spelet
        resetGame();
        highscores.push({
            name: playerName,
            score: playerScore
        });
        updateHighscoreList(); // Uppdatera highscore-listan efter att omgången är klar
        console.log("checkGameStatus called");
    }
}
function saveHighscores(highscores) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(highscores, null, 2));
        console.log("Highscores saved successfully.");
    } catch (error) {
        console.error("Error saving highscores:", error);
    }
}
// Lägg till en händelselyssnare för "keydown" -händelsen på textinmatningsfältet
document.getElementById("name-input").addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        setPlayerName();
    }
});

},{}]},["fyZmE","dJGk2"], "dJGk2", "parcelRequire87f3")

//# sourceMappingURL=index.068c5b58.js.map
