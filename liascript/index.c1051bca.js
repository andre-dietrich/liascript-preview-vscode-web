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
})({"2Y2tb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "90a47d8cc1051bca";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4vhwS":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "addBase", ()=>addBase);
var _previewElm = require("../../elm/Preview.elm");
var _helper = require("../helper");
var backup = {};
function fetch(url, callback) {
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.onload = function(_e) {
        if (http.readyState === 4 && http.status === 200) try {
            const lia = (0, _previewElm.Elm).Preview.init({
                flags: {
                    cmd: ""
                }
            });
            lia.ports.output.subscribe(function(event) {
                let [ok, json] = event;
                if (ok) {
                    if (json.logo !== "") json.logo = addBase(url, json.logo);
                    try {
                        json.tags = json.tags.split(",").map((e)=>e.trim());
                    } catch (e) {}
                    try {
                        json.icon = addBase(url, json.icon);
                    } catch (e) {
                        json.icon = "https://liascript.github.io/course/icon.ico";
                    }
                    backup[url] = json;
                    callback(url, json);
                } else console.warn("preview-lia", json);
            });
            lia.ports.input.send(http.responseText);
        } catch (e) {
            console.warn("fetching", e);
        }
    };
    http.send();
}
function addBase(base, url) {
    if (_helper.allowedProtocol(url)) return url;
    let path = base.split("/");
    path.pop();
    return path.join("/") + "/" + url;
}
const TEMPLATE = `<style>
.card {
  border: 5px solid #399193;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card__media {
  flex: 1;
  max-width: 300px;
  min-height: 100%;
}

.card__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.card__content {
  flex: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__header {
  margin-bottom: 1.5rem;
}

.card__title {
  color: #4b4b4b;
  margin: 0;
  position: relative;
}

.card__title:before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  width: 50%;
  height: 2px;
  background-color: #399193;
}

.card__subtitle {
  color: #aeaeae;
  margin: 0.5rem 0 1rem;
}

.card__version {
  display: inline-block;
  padding: 0.5rem;
  background-color: #399193;
  color: white;
  position: absolute;
  font-size: x-small;
  top: -1.5rem;
  left: 1rem;
  z-index: 1;
}

.card__body {
  line-height: 1.5;
}

.card__contact {
  color: #399193;
  text-decoration: none;
  font-size: small;
}

@media (max-width: 640px) {
  .card {
    flex-direction: column;
  }

  .card__media {
    max-width: 100%;
    height: 200px;
  }

  .card__content {
    padding: 1.5rem;
  }
}
</style>
<a id="container" target="_blank" href="">preview-lia</a>`;
class PreviewLia extends HTMLElement {
    source_url = "";
    constructor(){
        super();
        const template = document.createElement("template");
        template.innerHTML = TEMPLATE;
        this.container = this.attachShadow({
            mode: "open"
        });
        this.container.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        const url = this.getAttribute("src");
        const a = this.container.getElementById("container");
        if (!url) return;
        if (backup[url]) {
            this.callback(url, backup[url]);
            return;
        }
        const urls = url.split("/course/?");
        if (urls.length === 2) this.source_url = urls[1];
        else this.source_url = urls[0];
        if (a !== null) {
            a.innerHTML = `<a href="${url}">preview-lia</a>`;
            fetch(this.source_url, (url, meta)=>{
                this.callback(url, meta);
            });
        }
    }
    callback(url, meta) {
        const a = this.container.getElementById("container");
        if (!a) return;
        const link = this.getAttribute("link") || "https://LiaScript.github.io/course/?" + this.source_url;
        let tagLine = "";
        if (meta.tags && meta.tags.length > 0) tagLine = `<h3 class="card__subtitle">${meta.tags.join(" | ")}</h3>`;
        if (meta.logo) {
            meta.logo_alt = meta.logo_alt ? `alt="${meta.logo_alt}"` : "";
            meta.logo = `<div class="card__media">
              <img src="${meta.logo}" ${meta.logo_alt} class="card__image">
            </div>`;
        }
        if (meta.author && meta.email) meta.author = `<a class="card__contact" href="mailto:${meta.email}">${meta.author} ✉️</a>`;
        else if (meta.author) meta.author = `<span class="card__contact">${meta.author}</span>`;
        else if (meta.email) meta.author = `<a class="card__contact" href="mailto:${meta.email}">${meta.email} ✉️</a>`;
        else meta.author = "";
        a.href = link;
        a.style.textDecoration = "none";
        a.style.color = "black";
        a.style.display = "block";
        a.innerHTML = `<article class="card">
            <div class="card__version">V ${meta.version}</div>
            ${meta.logo || ""}
            <div class="card__content">
              <img src="${meta.icon}" alt="" style="display: block; height: 3rem; position: absolute; right: 5px; top: 5px">
              <header class="card__header">
                <h2 class="card__title">${meta.title}</h2>
                ${tagLine}
              </header>
              <div class="card__body">
                <p class="card__copy">${meta.description}</p>
              </div>
              <footer>
                ${meta.author}
              </footer>
            </div>
            
            </article>`;
    }
    disconnectedCallback() {
    // todo
    }
}
customElements.define("preview-lia", PreviewLia);

},{"../../elm/Preview.elm":"frRZk","../helper":"7hqDz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"frRZk":[function(require,module,exports) {
(function(scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function(a) {
            return function(b) {
                return fun(a, b);
            };
        });
    }
    function F3(fun) {
        return F(3, fun, function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c);
                };
            };
        });
    }
    function F4(fun) {
        return F(4, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return fun(a, b, c, d, e, f, g);
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return function(i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    console.warn("Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [
            value
        ];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for(var i = 0; i < size; i++)result[i] = func(offset + i);
        return result;
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for(var i = 0; i < max && ls.b; i++){
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    });
    var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
    });
    var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[index] = value;
        return result;
    });
    var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[length] = value;
        return result;
    });
    var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for(var i = 0; i < length; i++)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
        for(var i = array.length - 1; i >= 0; i--)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = func(array[i]);
        return result;
    });
    var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = A2(func, offset + i, array[i]);
        return result;
    });
    var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
    });
    var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) itemsToCopy = source.length;
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for(var i = 0; i < destLen; i++)result[i] = dest[i];
        for(var i = 0; i < itemsToCopy; i++)result[i + destLen] = source[i];
        return result;
    });
    // LOG
    var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
    });
    var _Debug_log = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    });
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function(message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString_UNUSED(value) {
        return "<internals>";
    }
    function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") return _Debug_internalColor(ansi, "<function>");
        if (typeof value === "boolean") return _Debug_ctorColor(ansi, value ? "True" : "False");
        if (typeof value === "number") return _Debug_numberColor(ansi, value + "");
        if (value instanceof String) return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        if (typeof value === "string") return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") return _Debug_internalColor(ansi, "<internals>");
            if (tag[0] === "#") {
                var output = [];
                for(var k in value){
                    if (k === "$") continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            if (tag === "Array_elm_builtin") return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for(; value.b; value = value.b)output += "," + _Debug_toAnsiString(ansi, value.a);
                return output + "]";
            }
            var output = "";
            for(var i in value){
                if (i === "$") continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        if (typeof File !== "undefined" && value instanceof File) return _Debug_internalColor(ansi, "<" + value.name + ">");
        if (typeof value === "object") {
            var output = [];
            for(var key in value){
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) return "{}";
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) return s.replace(/\'/g, "\\'");
        else return s.replace(/\"/g, '\\"');
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\x1b[36m" + string + "\x1b[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    // CRASH
    function _Debug_crash_UNUSED(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch(identifier){
            case 0:
                throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) return "on line " + region.start.line;
        return "on lines " + region.start.line + " through " + region.end.line;
    }
    // EQUALITY
    function _Utils_eq(x, y) {
        for(var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack));
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) return true;
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        /**/ if (x.$ === "Set_elm_builtin") {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
        }
        if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/ for(var key in x){
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) return false;
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
    });
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
        /**/ if (x instanceof String) {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
        }
        //*/
        /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/ /**/ if (x.$[0] === "#") return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        // traverse conses until end of a list or a mismatch
        for(; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b); // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
    });
    var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
    });
    var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
    });
    var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
    });
    var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    // COMMON VALUES
    var _Utils_Tuple0_UNUSED = 0;
    var _Utils_Tuple0 = {
        $: "#0"
    };
    function _Utils_Tuple2_UNUSED(a, b) {
        return {
            a: a,
            b: b
        };
    }
    function _Utils_Tuple2(a, b) {
        return {
            $: "#2",
            a: a,
            b: b
        };
    }
    function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_Tuple3(a, b, c) {
        return {
            $: "#3",
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_chr_UNUSED(c) {
        return c;
    }
    function _Utils_chr(c) {
        return new String(c);
    }
    // RECORDS
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for(var key in oldRecord)newRecord[key] = oldRecord[key];
        for(var key in updatedFields)newRecord[key] = updatedFields[key];
        return newRecord;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === "string") return xs + ys;
        // append Lists
        if (!xs.b) return ys;
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for(var curr = root; xs.b; xs = xs.b)curr = curr.b = _List_Cons(xs.a, ys);
        return root;
    }
    var _List_Nil_UNUSED = {
        $: 0
    };
    var _List_Nil = {
        $: "[]"
    };
    function _List_Cons_UNUSED(hd, tl) {
        return {
            $: 1,
            a: hd,
            b: tl
        };
    }
    function _List_Cons(hd, tl) {
        return {
            $: "::",
            a: hd,
            b: tl
        };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for(var i = arr.length; i--;)out = _List_Cons(arr[i], out);
        return out;
    }
    function _List_toArray(xs) {
        for(var out = []; xs.b; xs = xs.b)out.push(xs.a);
        return out;
    }
    var _List_map2 = F3(function(f, xs, ys) {
        for(var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b)arr.push(A2(f, xs.a, ys.a));
        return _List_fromArray(arr);
    });
    var _List_map3 = F4(function(f, xs, ys, zs) {
        for(var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A3(f, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for(var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for(var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    });
    var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    });
    // MATH
    var _Basics_add = F2(function(a, b) {
        return a + b;
    });
    var _Basics_sub = F2(function(a, b) {
        return a - b;
    });
    var _Basics_mul = F2(function(a, b) {
        return a * b;
    });
    var _Basics_fdiv = F2(function(a, b) {
        return a / b;
    });
    var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
    });
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
    });
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    // MORE MATH
    function _Basics_toFloat(x) {
        return x;
    }
    function _Basics_truncate(n) {
        return n | 0;
    }
    function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) {
        return !bool;
    }
    var _Basics_and = F2(function(a, b) {
        return a && b;
    });
    var _Basics_or = F2(function(a, b) {
        return a || b;
    });
    var _Basics_xor = F2(function(a, b) {
        return a !== b;
    });
    var _String_cons = F2(function(chr, str) {
        return chr + str;
    });
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(0xD800 <= word && word <= 0xDBFF ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
    }
    var _String_append = F2(function(a, b) {
        return a + b;
    });
    function _String_length(str) {
        return str.length;
    }
    var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while(i < len){
            var word = string.charCodeAt(i);
            if (0xD800 <= word && word <= 0xDBFF) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    });
    var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while(i < len){
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (0xD800 <= word && word <= 0xDBFF) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) arr.push(char);
        }
        return arr.join("");
    });
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while(i < len){
            var word = str.charCodeAt(i);
            if (0xD800 <= word && word <= 0xDBFF) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            } else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while(i < len){
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (0xD800 <= word && word <= 0xDBFF) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_split = F2(function(sep, str) {
        return str.split(sep);
    });
    var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
    });
    var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
    });
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) return true;
        }
        return false;
    });
    var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) return false;
        }
        return true;
    });
    var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
    });
    var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
    });
    var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
    });
    var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) return _List_Nil;
        var i = 0;
        var is = [];
        while((i = str.indexOf(sub, i)) > -1){
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    });
    // TO STRING
    function _String_fromNumber(number) {
        return number + "";
    }
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 0x2B /* + */  || code0 == 0x2D /* - */  ? 1 : 0;
        for(var i = start; i < str.length; ++i){
            var code = str.charCodeAt(i);
            if (code < 0x30 || 0x39 < code) return $elm$core$Maybe$Nothing;
            total = 10 * total + code - 0x30;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) return $elm$core$Maybe$Nothing;
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (0xD800 <= code && code <= 0xDBFF) return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000;
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 0x10FFFF < code ? "�" : code <= 0xFFFF ? String.fromCharCode(code) : (code -= 0x10000, String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**/ function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return {
            $: 2,
            b: decoder
        };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) {
        return {
            $: 3,
            b: decoder
        };
    }
    function _Json_decodeArray(decoder) {
        return {
            $: 4,
            b: decoder
        };
    }
    function _Json_decodeNull(value) {
        return {
            $: 5,
            c: value
        };
    }
    var _Json_decodeField = F2(function(field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    });
    var _Json_decodeIndex = F2(function(index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    });
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen = F2(function(callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    });
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [
            d1
        ]);
    });
    var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [
            d1,
            d2
        ]);
    });
    var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3
        ]);
    });
    var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4
        ]);
    });
    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5
        ]);
    });
    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6
        ]);
    });
    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7
        ]);
    });
    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7,
            d8
        ]);
    });
    // DECODE
    var _Json_runOnString = F2(function(decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        } catch (e) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    });
    var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    });
    function _Json_runHelp(decoder, value) {
        switch(decoder.$){
            case 2:
                return decoder.b(value);
            case 5:
                return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) return _Json_expecting("a LIST", value);
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) return _Json_expecting("an ARRAY", value);
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                var result = _Json_runHelp(decoder.b, value[field]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) return _Json_expecting("an ARRAY", value);
                if (index >= value.length) return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                var result = _Json_runHelp(decoder.b, value[index]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) return _Json_expecting("an OBJECT", value);
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for(var key in value)if (value.hasOwnProperty(key)) {
                    var result = _Json_runHelp(decoder.b, value[key]);
                    if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                    keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for(var i = 0; i < decoders.length; i++){
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) return result;
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for(var temp = decoder.g; temp.b; temp = temp.b){
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) return result;
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for(var i = 0; i < len; i++){
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
    }
    function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
            return array[i];
        });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
    }
    // EQUALITY
    function _Json_equality(x, y) {
        if (x === y) return true;
        if (x.$ !== y.$) return false;
        switch(x.$){
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) return false;
        for(var i = 0; i < len; i++){
            if (!_Json_equality(aDecoders[i], bDecoders[i])) return false;
        }
        return true;
    }
    // ENCODE
    var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    });
    function _Json_wrap(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Json_unwrap(value) {
        return value.a;
    }
    function _Json_wrap_UNUSED(value) {
        return value;
    }
    function _Json_unwrap_UNUSED(value) {
        return value;
    }
    function _Json_emptyArray() {
        return [];
    }
    function _Json_emptyObject() {
        return {};
    }
    var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    });
    function _Json_addEntry(func) {
        return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen = F2(function(callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    });
    var _Scheduler_onError = F2(function(callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    });
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) task.c();
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/ var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) return;
        _Scheduler_working = true;
        while(proc = _Scheduler_queue.shift())_Scheduler_step(proc);
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while(proc.f){
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while(proc.g && proc.g.$ !== rootTag)proc.g = proc.g.i;
                if (!proc.g) return;
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            } else if (rootTag === 2) {
                proc.f.c = proc.f.b(function(newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            } else if (rootTag === 5) {
                if (proc.h.length === 0) return;
                proc.f = proc.f.b(proc.h.shift());
            } else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function() {
                clearTimeout(id);
            };
        });
    }
    // PROGRAMS
    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function() {
            return function() {};
        });
    });
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**/ , _Json_errorToString(result.a));
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? {
            ports: ports
        } : {};
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for(var key in _Platform_effectManagers){
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
                var value = msg.a;
                if (msg.$ === 0) return A3(onSelfMsg, router, value, state);
                return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
        });
    });
    // BAGS
    function _Platform_leaf(home) {
        return function(value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map = F2(function(tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    });
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({
            p: managers,
            q: cmdBag,
            r: subBag
        });
        if (_Platform_effectsActive) return;
        _Platform_effectsActive = true;
        for(var fx; fx = _Platform_effectsQueue.shift();)_Platform_dispatchEffects(fx.p, fx.q, fx.r);
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for(var home in managers)_Scheduler_rawSend(managers[home], {
            $: "fx",
            a: effectsDict[home] || {
                i: _List_Nil,
                j: _List_Nil
            }
        });
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch(bag.$){
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for(var list = bag.m; list.b; list = list.b)_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for(var temp = taggers; temp; temp = temp.t)x = temp.s(x);
            return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) _Debug_crash(3, name);
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
    });
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for(; cmdList.b; cmdList = cmdList.b){
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for(var i = 0; i < currentSubs.length; i++)currentSubs[i](value);
            }
            return init;
        });
        // PUBLIC API
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) subs.splice(index, 1);
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
            return tagger(finalTagger(value));
        };
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for(var temp = subs; temp.b; temp = temp.b)sendToApp(temp.a(value));
        }
        return {
            send: send
        };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export_UNUSED(exports) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports) : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for(var name in exports)name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
    }
    function _Platform_export(exports) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports) : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for(var name in exports)name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name]) : obj[name] = exports[name];
    }
    var _Bitwise_and = F2(function(a, b) {
        return a & b;
    });
    var _Bitwise_or = F2(function(a, b) {
        return a | b;
    });
    var _Bitwise_xor = F2(function(a, b) {
        return a ^ b;
    });
    function _Bitwise_complement(a) {
        return ~a;
    }
    var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset;
    });
    var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset;
    });
    var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset;
    });
    // CREATE
    var _Regex_never = /.^/;
    var _Regex_fromStringWith = F2(function(options, string) {
        var flags = "g";
        if (options.multiline) flags += "m";
        if (options.caseInsensitive) flags += "i";
        try {
            return $elm$core$Maybe$Just(new RegExp(string, flags));
        } catch (error) {
            return $elm$core$Maybe$Nothing;
        }
    });
    // USE
    var _Regex_contains = F2(function(re, string) {
        return string.match(re) !== null;
    });
    var _Regex_findAtMost = F3(function(n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while(number++ < n && (result = re.exec(string))){
            if (prevLastIndex == re.lastIndex) break;
            var i = result.length - 1;
            var subs = new Array(i);
            while(i > 0){
                var submatch = result[i];
                subs[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
            }
            out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
            prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
    });
    var _Regex_replaceAtMost = F4(function(n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
            if (count++ >= n) return match;
            var i = arguments.length - 3;
            var submatches = new Array(i);
            while(i > 0){
                var submatch = arguments[i];
                submatches[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
            }
            return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
    });
    var _Regex_splitAtMost = F3(function(n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while(n--){
            var result = re.exec(string);
            if (!result) break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
    });
    var _Regex_infinity = Infinity;
    function _Url_percentEncode(string) {
        return encodeURIComponent(string);
    }
    function _Url_percentDecode(string) {
        try {
            return $elm$core$Maybe$Just(decodeURIComponent(string));
        } catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }
    var $elm$core$Basics$identity = function(x) {
        return x;
    };
    var $author$project$Preview$Analyze = function(a) {
        return {
            $: "Analyze",
            a: a
        };
    };
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
            if (node.$ === "SubTree") {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
            } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
            }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
    });
    var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr: while(true){
            if (t.$ === "RBEmpty_elm_builtin") return acc;
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    });
    var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
            return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
            return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
    };
    var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = {
        $: "EQ"
    };
    var $elm$core$Basics$GT = {
        $: "GT"
    };
    var $elm$core$Basics$LT = {
        $: "LT"
    };
    var $elm$core$Result$Err = function(a) {
        return {
            $: "Err",
            a: a
        };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
            $: "Failure",
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
            $: "Field",
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
            $: "Index",
            a: a,
            b: b
        };
    });
    var $elm$core$Result$Ok = function(a) {
        return {
            $: "Ok",
            a: a
        };
    };
    var $elm$json$Json$Decode$OneOf = function(a) {
        return {
            $: "OneOf",
            a: a
        };
    };
    var $elm$core$Basics$False = {
        $: "False"
    };
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function(a) {
        return {
            $: "Just",
            a: a
        };
    };
    var $elm$core$Maybe$Nothing = {
        $: "Nothing"
    };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
    });
    var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
    });
    var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
    };
    var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl: while(true){
            if (!list.b) return acc;
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    });
    var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
            return i + 1;
        }), 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp: while(true){
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            } else return list;
        }
    });
    var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
    };
    var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
    };
    var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
    };
    var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    });
    var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp: while(true)switch(error.$){
            case "Field":
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                    var _v1 = $elm$core$String$uncons(f);
                    if (_v1.$ === "Nothing") return false;
                    else {
                        var _v2 = _v1.a;
                        var _char = _v2.a;
                        var rest = _v2.b;
                        return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                    }
                }();
                var fieldName = isSimple ? "." + f : "['" + (f + "']");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case "Index":
                var i = error.a;
                var err = error.b;
                var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case "OneOf":
                var errors = error.a;
                if (!errors.b) return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                    if (!context.b) return "!";
                    else return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }();
                else if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                } else {
                    var starter = function() {
                        if (!context.b) return "Json.Decode.oneOf";
                        else return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                    }();
                    var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                    return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                }
            default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                    if (!context.b) return "Problem with the given value:\n\n";
                    else return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
        }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
            $: "Array_elm_builtin",
            a: a,
            b: b,
            c: c,
            d: d
        };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
    });
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a) {
        return {
            $: "Leaf",
            a: a
        };
    };
    var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
    });
    var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
    });
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
    });
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function(a) {
        return {
            $: "SubTree",
            a: a
        };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) return $elm$core$List$reverse(newAcc);
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    });
    var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder: while(true){
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            else {
                var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        else {
            var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
            var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
            return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
    });
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while(true){
            if (fromIndex < 0) return A2($elm$core$Array$builderToArray, false, {
                nodeList: nodeList,
                nodeListSize: len / $elm$core$Array$branchFactor | 0,
                tail: tail
            });
            else {
                var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    });
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) return $elm$core$Array$empty;
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
    });
    var $elm$core$Basics$True = {
        $: "True"
    };
    var $elm$core$Result$isOk = function(result) {
        if (result.$ === "Ok") return true;
        else return false;
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $author$project$Preview$init = function(_v0) {
        return _Utils_Tuple2("", $elm$core$Platform$Cmd$none);
    };
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $author$project$Preview$input = _Platform_incomingPort("input", $elm$json$Json$Decode$string);
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
    });
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $elm$json$Json$Encode$list = F2(function(func, entries) {
        return _Json_wrap(A3($elm$core$List$foldl, _Json_addEntry(func), _Json_emptyArray(_Utils_Tuple0), entries));
    });
    var $author$project$Preview$output = _Platform_outgoingPort("output", function($) {
        var a = $.a;
        var b = $.b;
        return A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, _List_fromArray([
            $elm$json$Json$Encode$bool(a),
            $elm$core$Basics$identity(b)
        ]));
    });
    var $elm$core$Tuple$pair = F2(function(a, b) {
        return _Utils_Tuple2(a, b);
    });
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Preview$error = function(title) {
        return A2($elm$core$Basics$composeR, $elm$core$Basics$append("Error (" + (title + ") -> ")), A2($elm$core$Basics$composeR, $elm$json$Json$Encode$string, A2($elm$core$Basics$composeR, $elm$core$Tuple$pair(false), $author$project$Preview$output)));
    };
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get: while(true){
            if (dict.$ === "RBEmpty_elm_builtin") return $elm$core$Maybe$Nothing;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                switch(_v1.$){
                    case "LT":
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case "EQ":
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    });
    var $elm$core$Maybe$map = F2(function(f, maybe) {
        if (maybe.$ === "Just") {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$json$Json$Encode$null = _Json_encodeNull;
    var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return A3(_Json_addField, k, v, obj);
        }), _Json_emptyObject(_Utils_Tuple0), pairs));
    };
    var $andre_dietrich$parser_combinators$Combine$ParseLocation = F3(function(source, line, column) {
        return {
            column: column,
            line: line,
            source: source
        };
    });
    var $elm$core$String$length = _String_length;
    var $andre_dietrich$parser_combinators$Combine$currentLocation = function(stream) {
        var find = F3(function(position, currentLine_, lines) {
            find: while(true){
                if (!lines.b) return A3($andre_dietrich$parser_combinators$Combine$ParseLocation, "", currentLine_, position);
                else {
                    var line = lines.a;
                    var rest = lines.b;
                    var length = $elm$core$String$length(line);
                    var lengthPlusNL = length + 1;
                    if (_Utils_eq(position, length)) return A3($andre_dietrich$parser_combinators$Combine$ParseLocation, line, currentLine_, position);
                    else {
                        if (_Utils_cmp(position, length) > 0) {
                            var $temp$position = position - lengthPlusNL, $temp$currentLine_ = currentLine_ + 1, $temp$lines = rest;
                            position = $temp$position;
                            currentLine_ = $temp$currentLine_;
                            lines = $temp$lines;
                            continue find;
                        } else return A3($andre_dietrich$parser_combinators$Combine$ParseLocation, line, currentLine_, position);
                    }
                }
            }
        });
        return A3(find, stream.position, 0, A2($elm$core$String$split, "\n", stream.data));
    };
    var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: "RBEmpty_elm_builtin"
    };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$String$isEmpty = function(string) {
        return string === "";
    };
    var $elm$core$Basics$negate = function(n) {
        return -n;
    };
    var $author$project$Lia$Definition$Types$default = F2(function(base, appendix) {
        return {
            appendix: $elm$core$String$isEmpty(appendix) ? "" : "?" + appendix,
            attributes: _List_Nil,
            author: "",
            base: base,
            comment: _List_Nil,
            date: "",
            debug: false,
            email: "",
            formulas: $elm$core$Dict$empty,
            imports: _List_Nil,
            language: "en",
            lightMode: $elm$core$Maybe$Nothing,
            logo: "",
            macro: $elm$core$Dict$empty,
            mode: $elm$core$Maybe$Nothing,
            narrator: "US English Male",
            onload: "",
            resources: _List_Nil,
            section: -1,
            translation: $elm$core$Dict$empty,
            typographic_quotation: {
                _double: _Utils_Tuple2("“", "”"),
                single: _Utils_Tuple2("‘", "’")
            },
            uid: -1,
            version: "0.0.1"
        };
    });
    var $author$project$Const$urlLiascript = "https://LiaScript.github.io";
    var $author$project$Const$urlLiascriptCourse = $author$project$Const$urlLiascript + "/course/?";
    var $author$project$Error$Message$emptyFile = "> The file you want me to load does not contain any content. Everything I see is only an empty string...\n    \nIf you see this in message in an editor, try to copy and paste the following code:\n\n```` md\n<!--\nauthor:   Your Name\n\nemail:    your@mail.org\n\nversion:  0.0.1\n\nlanguage: en\n\nnarrator: US English Female\n\ncomment:  Try to write a short comment about\n          your course, multiline is also okay.\n-->\n\n# Course Main Title\n\nThis is your **course** initialization stub.\n\nPlease see the [Docs](" + ($author$project$Const$urlLiascriptCourse + ("https://raw.githubusercontent.com/liaScript/docs/master/README.md)\nto find out what is possible in [LiaScript](" + ($author$project$Const$urlLiascript + (').\n\nIf you want to use instant help in your Atom IDE, please type **lia** to see all available shortcuts.\n\n## Markdown\n\nYou can use common [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax to create your course, such as:\n\n1. Lists\n2. ordered or\n\n   * unordered\n   * ones ...\n\n\n| Header 1   | Header 2   |\n| :--------- | :--------- |\n| Item 1     | Item 2     |\n\n\nImages:\n\n![images](https://farm2.static.flickr.com/1618/26701766821_7bea494826.jpg)\n\n\n### Extensions\n\n     --{{0}}--\nBut you can also include other features such as spoken text.\n\n      --{{1}}--\nInsert any kind of audio file:\n\n       {{1}}\n?[audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n\n     --{{2}}--\nEven videos or change the language completely.\n\n       {{2-3}}\n!?[video](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n\n      --{{3 Russian Female}}--\nПервоначально создан в 2004 году Джоном Грубером (англ. John Gruber) и Аароном\nШварцем. Многие идеи языка были позаимствованы из существующих соглашений по\nразметке текста в электронных письмах...\n\n\n    {{3}}\nType "voice" to see a list of all available languages.\n\n\n### Styling\n\n<!-- class = "animated rollIn" style = "animation-delay: 2s; color: purple" -->\nThe whole text-block should appear in purple color and with a wobbling effect.\nWhich is a **bad** example, please use it with caution ...\n~~ only this is red ;-) ~~ <!-- class = "animated infinite bounce" style = "color: red;" -->\n\n## Charts\n\nUse ASCII-Art to draw diagrams:\n\n                                    Multiline\n    1.9 |    DOTS\n        |                 ***\n      y |               *     *\n      - | r r r r r r r*r r r r*r r r r r r r\n      a |             *         *\n      x |            *           *\n      i | B B B B B * B B B B B B * B B B B B\n      s |         *                 *\n        | *  * *                       * *  *\n     -1 +------------------------------------\n        0              x-axis               1\n\n## Quizzes\n\n### A Textquiz\n\nWhat did the **fish** say when he hit a **concrete wall**?\n\n    [[dam]]\n\n### Multiple Choice\n\nJust add as many points as you wish:\n\n    [[X]] Only the **X** marks the correct point.\n    [[ ]] Empty ones are wrong.\n    [[X]] ...\n\n### Single Choice\n\nJust add as many points as you wish:\n\n    [( )] ...\n    [(X)] <-- Only the **X** is allowed.\n    [( )] ...\n\n\n## Executable Code\n\nYou can make your code executable and define projects:\n\n``` js     -EvalScript.js\nlet who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online"; }\nelse {\n  who + " is NOT online"; }\n```\n``` json    +Data.json\n{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n}\n```\n<script>\n  // insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);\n</script>\n\n\n## More\n\nFind out what you also can do ...\n\n' + ($author$project$Const$urlLiascriptCourse + "https://raw.githubusercontent.com/liaScript/docs/master/README.md\n````\n")))));
    var $elm$core$String$append = _String_append;
    var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) return acc;
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) return A2(fn, a, acc);
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) return A2(fn, a, A2(fn, b, acc));
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    });
    var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
    });
    var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
            return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
    });
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, "");
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$String$repeatHelp = F3(function(n, chunk, result) {
        return n <= 0 ? result : A3($elm$core$String$repeatHelp, n >> 1, _Utils_ap(chunk, chunk), !(n & 1) ? result : _Utils_ap(result, chunk));
    });
    var $elm$core$String$repeat = F2(function(n, chunk) {
        return A3($elm$core$String$repeatHelp, n, chunk, "");
    });
    var $elm$core$String$padLeft = F3(function(n, _char, string) {
        return _Utils_ap(A2($elm$core$String$repeat, n - $elm$core$String$length(string), $elm$core$String$fromChar(_char)), string);
    });
    var $author$project$Lia$Parser$Parser$formatError = F2(function(ms, stream) {
        var separator = "\n\n";
        var separatorOffset = $elm$core$String$length(separator);
        var location = $andre_dietrich$parser_combinators$Combine$currentLocation(stream);
        var padding = location.column + separatorOffset + 2;
        var expectationSeparator = "\n* ";
        return "Parse error around line: " + ($elm$core$String$fromInt(location.line) + (separator + (location.source + ("\n" + (A3($elm$core$String$padLeft, padding, _Utils_chr(" "), "^") + ("\nI expected one of the following:\n" + (expectationSeparator + A2($elm$core$String$join, expectationSeparator, A2($elm$core$List$map, function(s) {
            return A2($elm$core$String$append, s, "\n");
        }, ms)))))))));
    });
    var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
    });
    var $andre_dietrich$parser_combinators$Combine$Parser = function(a) {
        return {
            $: "Parser",
            a: a
        };
    };
    var $andre_dietrich$parser_combinators$Combine$app = function(_v0) {
        var inner = _v0.a;
        return inner;
    };
    var $andre_dietrich$parser_combinators$Combine$andThen = F2(function(f, p) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
            if (_v0.c.$ === "Ok") {
                var rstate = _v0.a;
                var rstream = _v0.b;
                var res = _v0.c.a;
                return A3($andre_dietrich$parser_combinators$Combine$app, f(res), rstate, rstream);
            } else {
                var estate = _v0.a;
                var estream = _v0.b;
                var ms = _v0.c.a;
                return _Utils_Tuple3(estate, estream, $elm$core$Result$Err(ms));
            }
        }));
    });
    var $pilatch$flip$Flip$flip = F3(function(_function, argB, argA) {
        return A2(_function, argA, argB);
    });
    var $andre_dietrich$parser_combinators$Combine$bimap = F3(function(fok, ferr, p) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
            if (_v0.c.$ === "Ok") {
                var rstate = _v0.a;
                var rstream = _v0.b;
                var res = _v0.c.a;
                return _Utils_Tuple3(rstate, rstream, $elm$core$Result$Ok(fok(res)));
            } else {
                var estate = _v0.a;
                var estream = _v0.b;
                var ms = _v0.c.a;
                return _Utils_Tuple3(estate, estream, $elm$core$Result$Err(ferr(ms)));
            }
        }));
    });
    var $andre_dietrich$parser_combinators$Combine$map = F2(function(f, p) {
        return A3($andre_dietrich$parser_combinators$Combine$bimap, f, $elm$core$Basics$identity, p);
    });
    var $andre_dietrich$parser_combinators$Combine$andMap = F2(function(rp, lp) {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, A2($pilatch$flip$Flip$flip, $andre_dietrich$parser_combinators$Combine$map, rp), lp);
    });
    var $andre_dietrich$parser_combinators$Combine$ignore = F2(function(p1, p2) {
        return A2($andre_dietrich$parser_combinators$Combine$andMap, p1, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Basics$always, p2));
    });
    var $author$project$Lia$Markdown$Code$Types$Model = F2(function(evaluate, highlight) {
        return {
            evaluate: evaluate,
            highlight: highlight
        };
    });
    var $author$project$Lia$Markdown$Code$Types$init = A2($author$project$Lia$Markdown$Code$Types$Model, $elm$core$Array$empty, $elm$core$Array$empty);
    var $author$project$Lia$Markdown$Effect$Model$Model = F5(function(visible, effects, comments, javascript, speaking) {
        return {
            comments: comments,
            effects: effects,
            javascript: javascript,
            speaking: speaking,
            visible: visible
        };
    });
    var $author$project$Lia$Markdown$Effect$Model$init = A5($author$project$Lia$Markdown$Effect$Model$Model, 0, 0, $elm$core$Dict$empty, $elm$core$Array$empty, $elm$core$Maybe$Nothing);
    var $author$project$Lia$Markdown$Footnote$Model$init = $elm$core$Dict$empty;
    var $author$project$Lia$Markdown$Quiz$Multi$Types$Quiz = F3(function(elements, options, solution) {
        return {
            elements: elements,
            options: options,
            solution: solution
        };
    });
    var $author$project$Lia$Markdown$Quiz$Multi$Types$init = A3($author$project$Lia$Markdown$Quiz$Multi$Types$Quiz, _List_Nil, $elm$core$Array$empty, $elm$core$Array$empty);
    var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === "Just") {
            var value = maybe.a;
            return value;
        } else return _default;
    });
    var $author$project$Lia$Parser$Context$init = F3(function(seed, search_index, global) {
        return {
            abort: {
                isTrue: false,
                stack: _List_Nil
            },
            code_model: $author$project$Lia$Markdown$Code$Types$init,
            defines: global,
            defines_updated: false,
            effect_id: 0,
            effect_model: $author$project$Lia$Markdown$Effect$Model$init,
            effect_number: _List_fromArray([
                0
            ]),
            footnotes: $author$project$Lia$Markdown$Footnote$Model$init,
            gallery_vector: $elm$core$Array$empty,
            indentation: _List_Nil,
            indentation_skip: false,
            input: {
                blocks: $author$project$Lia$Markdown$Quiz$Multi$Types$init,
                grouping: false,
                isEnabled: false
            },
            quiz_vector: $elm$core$Array$empty,
            search_index: A2($elm$core$Maybe$withDefault, $elm$core$Basics$identity, search_index),
            seed: A2($elm$core$Maybe$withDefault, 0, seed),
            survey_vector: $elm$core$Array$empty,
            table_vector: $elm$core$Array$empty,
            task_vector: $elm$core$Array$empty
        };
    });
    var $andre_dietrich$parser_combinators$Combine$keep = F2(function(p1, p2) {
        return A2($andre_dietrich$parser_combinators$Combine$andMap, p1, A2($andre_dietrich$parser_combinators$Combine$map, $pilatch$flip$Flip$flip($elm$core$Basics$always), p2));
    });
    var $andre_dietrich$parser_combinators$Combine$or = F2(function(lp, rp) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, lp, state, stream);
            if (_v0.c.$ === "Ok") {
                var res = _v0;
                return res;
            } else {
                var lms = _v0.c.a;
                var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, rp, state, stream);
                if (_v1.c.$ === "Ok") {
                    var res = _v1;
                    return res;
                } else {
                    var rms = _v1.c.a;
                    return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_Utils_ap(lms, rms)));
                }
            }
        }));
    });
    var $andre_dietrich$parser_combinators$Combine$mapError = $andre_dietrich$parser_combinators$Combine$bimap($elm$core$Basics$identity);
    var $andre_dietrich$parser_combinators$Combine$onerror = F2(function(m, p) {
        return A2($andre_dietrich$parser_combinators$Combine$mapError, $elm$core$Basics$always(_List_fromArray([
            m
        ])), p);
    });
    var $andre_dietrich$parser_combinators$Combine$primitive = $andre_dietrich$parser_combinators$Combine$Parser;
    var $andre_dietrich$parser_combinators$Combine$Char$satisfy = function(pred) {
        return $andre_dietrich$parser_combinators$Combine$primitive(F2(function(state, stream) {
            var message = "could not satisfy predicate";
            var _v0 = $elm$core$String$uncons(stream.input);
            if (_v0.$ === "Just") {
                var _v1 = _v0.a;
                var h = _v1.a;
                var rest = _v1.b;
                return pred(h) ? _Utils_Tuple3(state, _Utils_update(stream, {
                    input: rest,
                    position: stream.position + 1
                }), $elm$core$Result$Ok(h)) : _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_fromArray([
                    message
                ])));
            } else return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_fromArray([
                message
            ])));
        }));
    };
    var $andre_dietrich$parser_combinators$Combine$Char$anyChar = A2($andre_dietrich$parser_combinators$Combine$onerror, "expected any character", $andre_dietrich$parser_combinators$Combine$Char$satisfy($elm$core$Basics$always(true)));
    var $andre_dietrich$parser_combinators$Combine$manyTill = F2(function(p, end_) {
        var accumulate = F3(function(acc, state, stream) {
            accumulate: while(true){
                var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, end_, state, stream);
                if (_v0.c.$ === "Ok") {
                    var rstate = _v0.a;
                    var rstream = _v0.b;
                    return _Utils_Tuple3(rstate, rstream, $elm$core$Result$Ok($elm$core$List$reverse(acc)));
                } else {
                    var estate = _v0.a;
                    var estream = _v0.b;
                    var ms = _v0.c.a;
                    var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
                    if (_v1.c.$ === "Ok") {
                        var rstate = _v1.a;
                        var rstream = _v1.b;
                        var res = _v1.c.a;
                        var $temp$acc = A2($elm$core$List$cons, res, acc), $temp$state = rstate, $temp$stream = rstream;
                        acc = $temp$acc;
                        state = $temp$state;
                        stream = $temp$stream;
                        continue accumulate;
                    } else return _Utils_Tuple3(estate, estream, $elm$core$Result$Err(ms));
                }
            }
        });
        return $andre_dietrich$parser_combinators$Combine$Parser(accumulate(_List_Nil));
    });
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
    });
    var $elm$core$String$startsWith = _String_startsWith;
    var $andre_dietrich$parser_combinators$Combine$string = function(s) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            if (A2($elm$core$String$startsWith, s, stream.input)) {
                var len = $elm$core$String$length(s);
                var pos = stream.position + len;
                var rem = A2($elm$core$String$dropLeft, len, stream.input);
                return _Utils_Tuple3(state, _Utils_update(stream, {
                    input: rem,
                    position: pos
                }), $elm$core$Result$Ok(s));
            } else return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_fromArray([
                'expected "' + (s + '"')
            ])));
        }));
    };
    var $andre_dietrich$parser_combinators$Combine$succeed = function(res) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return _Utils_Tuple3(state, stream, $elm$core$Result$Ok(res));
        }));
    };
    var $author$project$Lia$Markdown$Inline$Parser$ignore_comment = A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(_List_Nil), A2($andre_dietrich$parser_combinators$Combine$ignore, A2($andre_dietrich$parser_combinators$Combine$manyTill, $andre_dietrich$parser_combinators$Combine$Char$anyChar, $andre_dietrich$parser_combinators$Combine$string("--->")), $andre_dietrich$parser_combinators$Combine$string("<!---")));
    var $elm$regex$Regex$Match = F4(function(match, index, number, submatches) {
        return {
            index: index,
            match: match,
            number: number,
            submatches: submatches
        };
    });
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = function(string) {
        return A2($elm$regex$Regex$fromStringWith, {
            caseInsensitive: false,
            multiline: false
        }, string);
    };
    var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
    var $elm$regex$Regex$never = _Regex_never;
    var $andre_dietrich$parser_combinators$Combine$regexer = F5(function(input, output, pat, state, stream) {
        var pattern = A2($elm$core$String$startsWith, "^", pat) ? pat : "^" + pat;
        var _v0 = A3($elm$regex$Regex$findAtMost, 1, A2($elm$core$Maybe$withDefault, $elm$regex$Regex$never, input(pattern)), stream.input);
        if (_v0.b && !_v0.b.b) {
            var match = _v0.a;
            var len = $elm$core$String$length(match.match);
            var pos = stream.position + len;
            var rem = A2($elm$core$String$dropLeft, len, stream.input);
            return _Utils_Tuple3(state, _Utils_update(stream, {
                input: rem,
                position: pos
            }), $elm$core$Result$Ok(output(match)));
        } else return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_fromArray([
            "expected input matching Regexp /" + (pattern + "/")
        ])));
    });
    var $andre_dietrich$parser_combinators$Combine$regex = A2($elm$core$Basics$composeR, A2($andre_dietrich$parser_combinators$Combine$regexer, $elm$regex$Regex$fromString, function($) {
        return $.match;
    }), $andre_dietrich$parser_combinators$Combine$Parser);
    var $andre_dietrich$parser_combinators$Combine$whitespace = A2($andre_dietrich$parser_combinators$Combine$onerror, "optional whitespace", $andre_dietrich$parser_combinators$Combine$regex("\\s*"));
    var $author$project$Lia$Markdown$Inline$Parser$comment = function(p) {
        return A2($andre_dietrich$parser_combinators$Combine$or, $author$project$Lia$Markdown$Inline$Parser$ignore_comment, A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$manyTill, p, $andre_dietrich$parser_combinators$Combine$string("-->")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, $andre_dietrich$parser_combinators$Combine$string("<!--"))));
    };
    var $andre_dietrich$parser_combinators$Combine$emptyErr = $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
        return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_Nil));
    }));
    var $andre_dietrich$parser_combinators$Combine$choice = function(xs) {
        return A3($elm$core$List$foldr, $andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$emptyErr, xs);
    };
    var $andre_dietrich$parser_combinators$Combine$maybe = function(p) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
            if (_v0.c.$ === "Ok") {
                var rstate = _v0.a;
                var rstream = _v0.b;
                var res = _v0.c.a;
                return _Utils_Tuple3(rstate, rstream, $elm$core$Result$Ok($elm$core$Maybe$Just(res)));
            } else return _Utils_Tuple3(state, stream, $elm$core$Result$Ok($elm$core$Maybe$Nothing));
        }));
    };
    var $author$project$Lia$Definition$Parser$start = $andre_dietrich$parser_combinators$Combine$maybe($andre_dietrich$parser_combinators$Combine$string("@"));
    var $author$project$Lia$Definition$Parser$key = A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("\\w+[\\w\\-.\\d]*"), $author$project$Lia$Definition$Parser$start);
    var $elm$core$String$words = _String_words;
    var $author$project$Lia$Definition$Parser$reduce = A2($elm$core$Basics$composeR, $elm$core$String$words, $elm$core$String$join(" "));
    var $author$project$Lia$Definition$Parser$lines = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Definition$Parser$reduce, $andre_dietrich$parser_combinators$Combine$regex("([ 	].*|[ 	]*\n)+"));
    var $elm$core$String$fromList = _String_fromList;
    var $author$project$Lia$Parser$Helper$stringTill = function(p) {
        return A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$fromList, A2($andre_dietrich$parser_combinators$Combine$manyTill, $andre_dietrich$parser_combinators$Combine$Char$anyChar, p));
    };
    var $author$project$Lia$Definition$Parser$multiline = $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$string("\n@end"));
    var $author$project$Lia$Definition$Parser$value = A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Definition$Parser$lines, $andre_dietrich$parser_combinators$Combine$regex("[	 ]*:")), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Definition$Parser$multiline, $andre_dietrich$parser_combinators$Combine$regex("[	 ]*\n")));
    var $author$project$Lia$Definition$Parser$key_value = A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Definition$Parser$value, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, $author$project$Lia$Definition$Parser$key));
    var $andre_dietrich$parser_combinators$Combine$onsuccess = function(res) {
        return $andre_dietrich$parser_combinators$Combine$map($elm$core$Basics$always(res));
    };
    var $andre_dietrich$parser_combinators$Combine$skip = function(p) {
        return A2($andre_dietrich$parser_combinators$Combine$onsuccess, _Utils_Tuple0, p);
    };
    var $author$project$Lia$Definition$Types$Link = function(a) {
        return {
            $: "Link",
            a: a
        };
    };
    var $author$project$Lia$Definition$Types$Module = function(a) {
        return {
            $: "Module",
            a: a
        };
    };
    var $author$project$Lia$Settings$Types$Presentation = {
        $: "Presentation"
    };
    var $author$project$Lia$Definition$Types$Script = function(a) {
        return {
            $: "Script",
            a: a
        };
    };
    var $author$project$Lia$Settings$Types$Slides = {
        $: "Slides"
    };
    var $author$project$Lia$Settings$Types$Textbook = {
        $: "Textbook"
    };
    var $elm$core$Dict$Black = {
        $: "Black"
    };
    var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
            $: "RBNode_elm_builtin",
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $elm$core$Dict$Red = {
        $: "Red"
    };
    var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
        } else {
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
        }
    });
    var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = A2($elm$core$Basics$compare, key, nKey);
            switch(_v1.$){
                case "LT":
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
                case "EQ":
                    return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
                default:
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
            }
        }
    });
    var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $author$project$Lia$Markdown$Macro$Parser$add = F2(function(_v0, def) {
        var name = _v0.a;
        var code = _v0.b;
        return _Utils_update(def, {
            macro: A3($elm$core$Dict$insert, name, code, def.macro)
        });
    });
    var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) return xs;
        else return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    });
    var $elm$core$List$head = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        } else return $elm$core$Maybe$Nothing;
    };
    var $elm$core$String$toLower = _String_toLower;
    var $author$project$Lia$Markdown$HTML$Attributes$allowedProtocol = function(url) {
        var _v0 = $elm$core$String$toLower(A2($elm$core$Maybe$withDefault, "", $elm$core$List$head(A2($elm$core$String$split, ":", url))));
        switch(_v0){
            case "https":
                return true;
            case "http":
                return true;
            case "data":
                return true;
            case "file":
                return true;
            case "hyper":
                return true;
            case "dat":
                return true;
            case "ipfs":
                return true;
            case "ipns":
                return true;
            case "blob":
                return true;
            case "mailto":
                return true;
            case "tel":
                return true;
            default:
                return false;
        }
    };
    var $author$project$Lia$Markdown$HTML$Attributes$toURL = F3(function(basis, appendix, url) {
        return $author$project$Lia$Markdown$HTML$Attributes$allowedProtocol(url) || A2($elm$core$String$startsWith, "#", url) ? url : _Utils_ap(basis, _Utils_ap(url, appendix));
    });
    var $author$project$Lia$Definition$Types$append = F5(function(to, base, appendix, urls, list) {
        return A2($elm$core$List$append, list, A2($elm$core$List$map, A2($elm$core$Basics$composeR, A2($author$project$Lia$Markdown$HTML$Attributes$toURL, base, appendix), to), $elm$core$String$words(urls)));
    });
    var $author$project$Lia$Definition$Types$addToResources = F3(function(to, urls, def) {
        return _Utils_update(def, {
            resources: A5($author$project$Lia$Definition$Types$append, to, def.base, def.appendix, urls, def.resources)
        });
    });
    var $elm$core$String$trim = _String_trim;
    var $author$project$Lia$Definition$Types$add_formula = F2(function(str, def) {
        var _v0 = A2($elm$core$String$split, " ", $elm$core$String$trim(str));
        if (_v0.b) {
            var name = _v0.a;
            var formula = _v0.b;
            return _Utils_update(def, {
                formulas: A3($elm$core$Dict$insert, A2($elm$core$String$startsWith, "\\", name) ? name : "\\" + name, $elm$core$String$trim(A2($elm$core$String$join, " ", formula)), def.formulas)
            });
        } else return def;
    });
    var $author$project$Lia$Parser$UrlPattern$Codeberg$by = F2(function(_v0, w) {
        var _v1 = A2($elm$core$String$split, "/", w);
        _v1$3: while(true){
            if (_v1.b && _v1.b.b && _v1.b.b.b) switch(_v1.b.b.a){
                case "repos":
                    if (_v1.a === "api" && _v1.b.a === "v1") {
                        var _v2 = _v1.b;
                        var _v3 = _v2.b;
                        var params = _v3.b;
                        return "https://codeberg.org/api/v1/repos/" + A2($elm$core$String$join, "/", params);
                    } else break _v1$3;
                case "raw":
                    if (_v1.b.b.b.b && _v1.b.b.b.a === "branch" && _v1.b.b.b.b.b) {
                        var user = _v1.a;
                        var _v4 = _v1.b;
                        var repository = _v4.a;
                        var _v5 = _v4.b;
                        var _v6 = _v5.b;
                        var _v7 = _v6.b;
                        var branch = _v7.a;
                        var filePath = _v7.b;
                        return "https://codeberg.org/api/v1/repos/" + (A2($elm$core$String$join, "/", _List_fromArray([
                            user,
                            repository,
                            "raw",
                            A2($elm$core$String$join, "/", filePath)
                        ])) + ("?ref=" + branch));
                    } else break _v1$3;
                case "src":
                    if (_v1.b.b.b.b && _v1.b.b.b.a === "branch" && _v1.b.b.b.b.b) {
                        var user = _v1.a;
                        var _v8 = _v1.b;
                        var repository = _v8.a;
                        var _v9 = _v8.b;
                        var _v10 = _v9.b;
                        var _v11 = _v10.b;
                        var branch = _v11.a;
                        var filePath = _v11.b;
                        return "https://codeberg.org/api/v1/repos/" + (A2($elm$core$String$join, "/", _List_fromArray([
                            user,
                            repository,
                            "raw",
                            A2($elm$core$String$join, "/", filePath)
                        ])) + ("?ref=" + branch));
                    } else break _v1$3;
                default:
                    break _v1$3;
            }
            else break _v1$3;
        }
        return "https://codeberg.org/" + w;
    });
    var $author$project$Lia$Parser$UrlPattern$DropBox$by = F2(function(_v0, w) {
        return "https://dl.dropbox.com/" + w;
    });
    var $elm$core$String$replace = F3(function(before, after, string) {
        return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
    });
    var $author$project$Lia$Parser$UrlPattern$GitHub$by = F2(function(_v0, w) {
        return "https://raw.githubusercontent.com/" + function() {
            var _v1 = A2($elm$core$String$split, "/", w);
            _v1$3: while(true){
                if (_v1.b && _v1.b.b) {
                    if (!_v1.b.b.b) {
                        var _v2 = _v1.b;
                        return w + "/master/README.md";
                    } else switch(_v1.b.b.a){
                        case "tree":
                            var _v3 = _v1.b;
                            var _v4 = _v3.b;
                            return A3($elm$core$String$replace, "/tree/", "/", w) + "/README.md";
                        case "raw":
                            if (_v1.b.b.b.b && _v1.b.b.b.a === "refs" && _v1.b.b.b.b.b && _v1.b.b.b.b.a === "heads") {
                                var _v5 = _v1.b;
                                var _v6 = _v5.b;
                                var _v7 = _v6.b;
                                var _v8 = _v7.b;
                                return A3($elm$core$String$replace, "/raw/refs/heads", "/refs/heads", w);
                            } else break _v1$3;
                        default:
                            break _v1$3;
                    }
                } else break _v1$3;
            }
            return A3($elm$core$String$replace, "/blob/", "/", w);
        }();
    });
    var $elm$url$Url$percentEncode = _Url_percentEncode;
    var $author$project$Lia$Parser$UrlPattern$GitLab$by = F2(function(_v0, w) {
        var baseUrl = A2($elm$core$Maybe$withDefault, w, $elm$core$List$head(A2($elm$core$String$split, "?", w)));
        var parts = A2($elm$core$String$split, "/", baseUrl);
        _v1$3: while(true){
            if (parts.b && parts.b.b && parts.b.b.b) switch(parts.b.b.a){
                case "projects":
                    if (parts.a === "api" && parts.b.a === "v4") {
                        var _v2 = parts.b;
                        var _v3 = _v2.b;
                        var params = _v3.b;
                        return "https://gitlab.com/api/v4/projects/" + A2($elm$core$String$join, "/", params);
                    } else break _v1$3;
                case "-":
                    if (parts.b.b.b.b && parts.b.b.b.b.b) switch(parts.b.b.b.a){
                        case "raw":
                            var user = parts.a;
                            var _v4 = parts.b;
                            var repository = _v4.a;
                            var _v5 = _v4.b;
                            var _v6 = _v5.b;
                            var _v7 = _v6.b;
                            var branch = _v7.a;
                            var filePath = _v7.b;
                            return "https://gitlab.com/api/v4/projects/" + (A2($elm$core$String$join, "/", _List_fromArray([
                                $elm$url$Url$percentEncode(user + ("/" + repository)),
                                "repository/files",
                                A2($elm$core$String$join, "/", filePath),
                                "raw"
                            ])) + ("?ref=" + branch));
                        case "blob":
                            var user = parts.a;
                            var _v8 = parts.b;
                            var repository = _v8.a;
                            var _v9 = _v8.b;
                            var _v10 = _v9.b;
                            var _v11 = _v10.b;
                            var branch = _v11.a;
                            var filePath = _v11.b;
                            return "https://gitlab.com/api/v4/projects/" + (A2($elm$core$String$join, "/", _List_fromArray([
                                $elm$url$Url$percentEncode(user + ("/" + repository)),
                                "repository/files",
                                A2($elm$core$String$join, "/", filePath),
                                "raw"
                            ])) + ("?ref=" + branch));
                        default:
                            break _v1$3;
                    }
                    else break _v1$3;
                default:
                    break _v1$3;
            }
            else break _v1$3;
        }
        return "https://gitlab.com/" + w;
    });
    var $elm$core$String$dropRight = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, 0, -n, string);
    });
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $truqu$elm_base64$Base64$Encode$intToBase64 = function(i) {
        switch(i){
            case 0:
                return "A";
            case 1:
                return "B";
            case 2:
                return "C";
            case 3:
                return "D";
            case 4:
                return "E";
            case 5:
                return "F";
            case 6:
                return "G";
            case 7:
                return "H";
            case 8:
                return "I";
            case 9:
                return "J";
            case 10:
                return "K";
            case 11:
                return "L";
            case 12:
                return "M";
            case 13:
                return "N";
            case 14:
                return "O";
            case 15:
                return "P";
            case 16:
                return "Q";
            case 17:
                return "R";
            case 18:
                return "S";
            case 19:
                return "T";
            case 20:
                return "U";
            case 21:
                return "V";
            case 22:
                return "W";
            case 23:
                return "X";
            case 24:
                return "Y";
            case 25:
                return "Z";
            case 26:
                return "a";
            case 27:
                return "b";
            case 28:
                return "c";
            case 29:
                return "d";
            case 30:
                return "e";
            case 31:
                return "f";
            case 32:
                return "g";
            case 33:
                return "h";
            case 34:
                return "i";
            case 35:
                return "j";
            case 36:
                return "k";
            case 37:
                return "l";
            case 38:
                return "m";
            case 39:
                return "n";
            case 40:
                return "o";
            case 41:
                return "p";
            case 42:
                return "q";
            case 43:
                return "r";
            case 44:
                return "s";
            case 45:
                return "t";
            case 46:
                return "u";
            case 47:
                return "v";
            case 48:
                return "w";
            case 49:
                return "x";
            case 50:
                return "y";
            case 51:
                return "z";
            case 52:
                return "0";
            case 53:
                return "1";
            case 54:
                return "2";
            case 55:
                return "3";
            case 56:
                return "4";
            case 57:
                return "5";
            case 58:
                return "6";
            case 59:
                return "7";
            case 60:
                return "8";
            case 61:
                return "9";
            case 62:
                return "+";
            default:
                return "/";
        }
    };
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $truqu$elm_base64$Base64$Encode$toBase64 = function(_int) {
        return _Utils_ap($truqu$elm_base64$Base64$Encode$intToBase64(63 & _int >>> 18), _Utils_ap($truqu$elm_base64$Base64$Encode$intToBase64(63 & _int >>> 12), _Utils_ap($truqu$elm_base64$Base64$Encode$intToBase64(63 & _int >>> 6), $truqu$elm_base64$Base64$Encode$intToBase64(63 & _int >>> 0))));
    };
    var $truqu$elm_base64$Base64$Encode$add = F2(function(_char, _v0) {
        var res = _v0.a;
        var count = _v0.b;
        var acc = _v0.c;
        var current = acc << 8 | _char;
        if (count === 2) return _Utils_Tuple3(_Utils_ap(res, $truqu$elm_base64$Base64$Encode$toBase64(current)), 0, 0);
        else return _Utils_Tuple3(res, count + 1, current);
    });
    var $elm$core$Basics$ge = _Utils_ge;
    var $truqu$elm_base64$Base64$Encode$chomp = F2(function(char_, acc) {
        var _char = $elm$core$Char$toCode(char_);
        return _char < 128 ? A2($truqu$elm_base64$Base64$Encode$add, _char, acc) : _char < 2048 ? A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char, A2($truqu$elm_base64$Base64$Encode$add, 192 | _char >>> 6, acc)) : _char < 55296 || _char >= 57344 && _char <= 65535 ? A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char, A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char >>> 6, A2($truqu$elm_base64$Base64$Encode$add, 224 | _char >>> 12, acc))) : A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char, A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char >>> 6, A2($truqu$elm_base64$Base64$Encode$add, 128 | 63 & _char >>> 12, A2($truqu$elm_base64$Base64$Encode$add, 240 | _char >>> 18, acc))));
    });
    var $elm$core$String$foldl = _String_foldl;
    var $truqu$elm_base64$Base64$Encode$initial = _Utils_Tuple3("", 0, 0);
    var $truqu$elm_base64$Base64$Encode$wrapUp = function(_v0) {
        var res = _v0.a;
        var cnt = _v0.b;
        var acc = _v0.c;
        switch(cnt){
            case 1:
                return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & acc >>> 2) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & acc << 4) + "=="));
            case 2:
                return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & acc >>> 10) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & acc >>> 4) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & acc << 2) + "=")));
            default:
                return res;
        }
    };
    var $truqu$elm_base64$Base64$Encode$encode = function(input) {
        return $truqu$elm_base64$Base64$Encode$wrapUp(A3($elm$core$String$foldl, $truqu$elm_base64$Base64$Encode$chomp, $truqu$elm_base64$Base64$Encode$initial, input));
    };
    var $truqu$elm_base64$Base64$encode = $truqu$elm_base64$Base64$Encode$encode;
    var $elm$core$String$endsWith = _String_endsWith;
    var $author$project$Lia$Parser$UrlPattern$OneDrive$createOneDriveLink = function(url) {
        var base64 = $truqu$elm_base64$Base64$encode(url);
        var modifiedBase64 = A3($elm$core$String$replace, "+", "-", A3($elm$core$String$replace, "/", "_", base64));
        var finalBase64 = A2($elm$core$String$endsWith, "=", modifiedBase64) ? A2($elm$core$String$dropRight, 1, modifiedBase64) : modifiedBase64;
        return "https://api.onedrive.com/v1.0/shares/u!" + (finalBase64 + "/root/content");
    };
    var $author$project$Lia$Parser$UrlPattern$OneDrive$by = F2(function(_v0, w) {
        return $author$project$Lia$Parser$UrlPattern$OneDrive$createOneDriveLink("https://onedrive.live.com/" + w);
    });
    var $elm$core$List$drop = F2(function(n, list) {
        drop: while(true){
            if (n <= 0) return list;
            else {
                if (!list.b) return list;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    });
    var $elm$core$List$filter = F2(function(isGood, list) {
        return A3($elm$core$List$foldr, F2(function(x, xs) {
            return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }), _List_Nil, list);
    });
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$core$List$takeReverse = F3(function(n, list, kept) {
        takeReverse: while(true){
            if (n <= 0) return kept;
            else {
                if (!list.b) return kept;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = A2($elm$core$List$cons, x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    });
    var $elm$core$List$takeTailRec = F2(function(n, list) {
        return $elm$core$List$reverse(A3($elm$core$List$takeReverse, n, list, _List_Nil));
    });
    var $elm$core$List$takeFast = F3(function(ctr, n, list) {
        if (n <= 0) return _List_Nil;
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while(true){
                _v0$5: while(true){
                    if (!_v0.b.b) return list;
                    else if (_v0.b.b.b) switch(_v0.a){
                        case 1:
                            break _v0$1;
                        case 2:
                            var _v2 = _v0.b;
                            var x = _v2.a;
                            var _v3 = _v2.b;
                            var y = _v3.a;
                            return _List_fromArray([
                                x,
                                y
                            ]);
                        case 3:
                            if (_v0.b.b.b.b) {
                                var _v4 = _v0.b;
                                var x = _v4.a;
                                var _v5 = _v4.b;
                                var y = _v5.a;
                                var _v6 = _v5.b;
                                var z = _v6.a;
                                return _List_fromArray([
                                    x,
                                    y,
                                    z
                                ]);
                            } else break _v0$5;
                        default:
                            if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                                var _v7 = _v0.b;
                                var x = _v7.a;
                                var _v8 = _v7.b;
                                var y = _v8.a;
                                var _v9 = _v8.b;
                                var z = _v9.a;
                                var _v10 = _v9.b;
                                var w = _v10.a;
                                var tl = _v10.b;
                                return ctr > 1000 ? A2($elm$core$List$cons, x, A2($elm$core$List$cons, y, A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2($elm$core$List$cons, x, A2($elm$core$List$cons, y, A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
                            } else break _v0$5;
                    }
                    else {
                        if (_v0.a === 1) break _v0$1;
                        else break _v0$5;
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray([
                x
            ]);
        }
    });
    var $elm$core$List$take = F2(function(n, list) {
        return A3($elm$core$List$takeFast, 0, n, list);
    });
    var $author$project$Lia$Parser$UrlPattern$GitLab$byGeneric = F2(function(_v0, w) {
        var baseUrl = A2($elm$core$Maybe$withDefault, w, $elm$core$List$head(A2($elm$core$String$split, "?", w)));
        var urlParts = A2($elm$core$String$split, "/", baseUrl);
        var dashIndex = A2($elm$core$Maybe$withDefault, -1, A2($elm$core$Maybe$map, $elm$core$Tuple$first, $elm$core$List$head(A2($elm$core$List$filter, function(_v1) {
            var part = _v1.b;
            return part === "-";
        }, A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, urlParts)))));
        var domain = A2($elm$core$Maybe$withDefault, "", $elm$core$List$head(urlParts));
        var repository = dashIndex > 1 ? A2($elm$core$String$join, "/", A2($elm$core$List$take, dashIndex - 1, A2($elm$core$List$drop, 1, urlParts))) : "";
        var accessType = dashIndex >= 0 && _Utils_cmp($elm$core$List$length(urlParts), dashIndex + 1) > 0 ? A2($elm$core$Maybe$withDefault, "", $elm$core$List$head(A2($elm$core$List$drop, dashIndex + 1, urlParts))) : "";
        var branch = accessType !== "" && _Utils_cmp($elm$core$List$length(urlParts), dashIndex + 2) > 0 ? A2($elm$core$Maybe$withDefault, "main", $elm$core$List$head(A2($elm$core$List$drop, dashIndex + 2, urlParts))) : "main";
        var filePath = branch !== "" && _Utils_cmp($elm$core$List$length(urlParts), dashIndex + 3) > 0 ? A2($elm$core$String$join, "/", A2($elm$core$List$drop, dashIndex + 3, urlParts)) : "README.md";
        return "https://" + (domain + ("/api/v4/projects/" + ($elm$url$Url$percentEncode(repository) + ("/repository/files/" + ($elm$url$Url$percentEncode(filePath) + ("/raw?ref=" + branch))))));
    });
    var $author$project$Lia$Parser$UrlPattern$NextCloud$byGeneric = F2(function(_v0, w) {
        var baseUrl = function() {
            var _v1 = A2($elm$core$String$split, "?", w);
            if (_v1.b) {
                var base = _v1.a;
                return base;
            } else return w;
        }();
        return A2($elm$core$String$endsWith, "/download", baseUrl) ? "https://" + baseUrl : "https://" + (baseUrl + "/download");
    });
    var $author$project$Lia$Parser$UrlPattern$Generic$root = $elm$core$Basics$append("(?:http(?:s)?://)?(?:www\\.)?");
    var $author$project$Lia$Parser$UrlPattern$Codeberg$pattern = $author$project$Lia$Parser$UrlPattern$Generic$root("codeberg\\.org/(.*)");
    var $author$project$Lia$Parser$UrlPattern$DropBox$pattern = $author$project$Lia$Parser$UrlPattern$Generic$root("dropbox\\.com/(.*)");
    var $author$project$Lia$Parser$UrlPattern$GitHub$pattern = $author$project$Lia$Parser$UrlPattern$Generic$root("github\\.com/(.*)");
    var $author$project$Lia$Parser$UrlPattern$GitLab$pattern = $author$project$Lia$Parser$UrlPattern$Generic$root("gitlab\\.com/(.*)");
    var $author$project$Lia$Parser$UrlPattern$OneDrive$pattern = $author$project$Lia$Parser$UrlPattern$Generic$root("onedrive\\.live\\.com/(.*)");
    var $author$project$Lia$Parser$UrlPattern$GitLab$patternGeneric = "gitlab://(.*)";
    var $author$project$Lia$Parser$UrlPattern$NextCloud$patternGeneric = "nextcloud://(.*)";
    var $author$project$Lia$Parser$PatReplace$regex = A2($elm$core$Basics$composeR, $elm$regex$Regex$fromString, $elm$core$Maybe$withDefault($elm$regex$Regex$never));
    var $author$project$Lia$Parser$PatReplace$check = F2(function(pattern, url) {
        var _v0 = $elm$core$List$head(A3($elm$regex$Regex$findAtMost, 1, $author$project$Lia$Parser$PatReplace$regex(pattern), url));
        if (_v0.$ === "Just") {
            var match = _v0.a;
            return A2($elm$core$Maybe$withDefault, $elm$core$Maybe$Nothing, $elm$core$List$head(match.submatches));
        } else return $elm$core$Maybe$Nothing;
    });
    var $author$project$Lia$Parser$PatReplace$replace = F2(function(patterns, url) {
        replace: while(true){
            if (!patterns.b) return _Utils_Tuple2(false, url);
            else {
                var t = patterns.a;
                var ts = patterns.b;
                var _v1 = A2($author$project$Lia$Parser$PatReplace$check, t.pattern, url);
                if (_v1.$ === "Just") {
                    var str = _v1.a;
                    return _Utils_Tuple2(true, A2(t.by, url, str));
                } else {
                    var $temp$patterns = ts, $temp$url = url;
                    patterns = $temp$patterns;
                    url = $temp$url;
                    continue replace;
                }
            }
        }
    });
    var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
    };
    var $author$project$Const$urlProxy = "https://api.allorigins.win/raw?url=";
    var $author$project$Lia$Parser$PatReplace$link = function(url) {
        return A2($elm$core$String$startsWith, $author$project$Const$urlProxy, url) ? url : A2($author$project$Lia$Parser$PatReplace$replace, _List_fromArray([
            {
                by: $author$project$Lia$Parser$UrlPattern$GitHub$by,
                pattern: $author$project$Lia$Parser$UrlPattern$GitHub$pattern
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$DropBox$by,
                pattern: $author$project$Lia$Parser$UrlPattern$DropBox$pattern
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$OneDrive$by,
                pattern: $author$project$Lia$Parser$UrlPattern$OneDrive$pattern
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$Codeberg$by,
                pattern: $author$project$Lia$Parser$UrlPattern$Generic$root($author$project$Lia$Parser$UrlPattern$Codeberg$pattern)
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$GitLab$by,
                pattern: $author$project$Lia$Parser$UrlPattern$GitLab$pattern
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$GitLab$byGeneric,
                pattern: $author$project$Lia$Parser$UrlPattern$GitLab$patternGeneric
            },
            {
                by: $author$project$Lia$Parser$UrlPattern$NextCloud$byGeneric,
                pattern: $author$project$Lia$Parser$UrlPattern$NextCloud$patternGeneric
            }
        ]), url).b;
    };
    var $author$project$Lia$Definition$Types$add_imports = F2(function(url, def) {
        return _Utils_update(def, {
            imports: A5($author$project$Lia$Definition$Types$append, $author$project$Lia$Parser$PatReplace$link, def.base, def.appendix, url, def.imports)
        });
    });
    var $author$project$Lia$Definition$Types$add_translation = F2(function(str, def) {
        var _v0 = $elm$core$String$words(str);
        if (_v0.b && _v0.b.b && !_v0.b.b.b) {
            var lang = _v0.a;
            var _v1 = _v0.b;
            var url = _v1.a;
            return _Utils_update(def, {
                translation: A3($elm$core$Dict$insert, lang, A3($author$project$Lia$Markdown$HTML$Attributes$toURL, def.base, def.appendix, url), def.translation)
            });
        } else return def;
    });
    var $author$project$Lia$Markdown$Inline$Types$Audio = F3(function(a, b, c) {
        return {
            $: "Audio",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Bold = F2(function(a, b) {
        return {
            $: "Bold",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Chars = F2(function(a, b) {
        return {
            $: "Chars",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Container = F2(function(a, b) {
        return {
            $: "Container",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$EInline = F2(function(a, b) {
        return {
            $: "EInline",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Embed = F3(function(a, b, c) {
        return {
            $: "Embed",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$IHTML = F2(function(a, b) {
        return {
            $: "IHTML",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Image = F3(function(a, b, c) {
        return {
            $: "Image",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Italic = F2(function(a, b) {
        return {
            $: "Italic",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Link = F3(function(a, b, c) {
        return {
            $: "Link",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Mail = F3(function(a, b, c) {
        return {
            $: "Mail",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Movie = F3(function(a, b, c) {
        return {
            $: "Movie",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Preview_Lia = function(a) {
        return {
            $: "Preview_Lia",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Inline$Types$Preview_Link = function(a) {
        return {
            $: "Preview_Link",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Inline$Types$QR_Link = F2(function(a, b) {
        return {
            $: "QR_Link",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Quiz = F2(function(a, b) {
        return {
            $: "Quiz",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Ref = F2(function(a, b) {
        return {
            $: "Ref",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Script = F2(function(a, b) {
        return {
            $: "Script",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Strike = F2(function(a, b) {
        return {
            $: "Strike",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Superscript = F2(function(a, b) {
        return {
            $: "Superscript",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Types$Underline = F2(function(a, b) {
        return {
            $: "Underline",
            a: a,
            b: b
        };
    });
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $elm$core$Array$length = function(_v0) {
        var len = _v0.a;
        return len;
    };
    var $andre_dietrich$parser_combinators$Combine$modifyState = function(f) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return A3($andre_dietrich$parser_combinators$Combine$app, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0), f(state), stream);
        }));
    };
    var $elm$core$Elm$JsArray$push = _JsArray_push;
    var $elm$core$Array$bitMask = 4294967295 >>> 32 - $elm$core$Array$shiftStep;
    var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
    var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
    var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
    var $elm$core$Array$insertTailInTree = F4(function(shift, index, tail, tree) {
        var pos = $elm$core$Array$bitMask & index >>> shift;
        if (_Utils_cmp(pos, $elm$core$Elm$JsArray$length(tree)) > -1) {
            if (shift === 5) return A2($elm$core$Elm$JsArray$push, $elm$core$Array$Leaf(tail), tree);
            else {
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
                return A2($elm$core$Elm$JsArray$push, newSub, tree);
            }
        } else {
            var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (value.$ === "SubTree") {
                var subTree = value.a;
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
            } else {
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$singleton(value)));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
            }
        }
    });
    var $elm$core$Array$unsafeReplaceTail = F2(function(newTail, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        var originalTailLen = $elm$core$Elm$JsArray$length(tail);
        var newTailLen = $elm$core$Elm$JsArray$length(newTail);
        var newArrayLen = len + (newTailLen - originalTailLen);
        if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
            var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
            if (overflow) {
                var newShift = startShift + $elm$core$Array$shiftStep;
                var newTree = A4($elm$core$Array$insertTailInTree, newShift, len, newTail, $elm$core$Elm$JsArray$singleton($elm$core$Array$SubTree(tree)));
                return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
            } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree), $elm$core$Elm$JsArray$empty);
        } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
    });
    var $elm$core$Array$push = F2(function(a, array) {
        var tail = array.d;
        return A2($elm$core$Array$unsafeReplaceTail, A2($elm$core$Elm$JsArray$push, a, tail), array);
    });
    var $author$project$Lia$Markdown$Quiz$Multi$Types$push = F2(function(_v0, quiz) {
        var options = _v0.options;
        var solution = _v0.solution;
        return _Utils_update(quiz, {
            options: A2($elm$core$Array$push, options, quiz.options),
            solution: A2($elm$core$Array$push, solution, quiz.solution)
        });
    });
    var $andre_dietrich$parser_combinators$Combine$withState = function(f) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return A3($andre_dietrich$parser_combinators$Combine$app, f(state), state, stream);
        }));
    };
    var $author$project$Lia$Parser$Input$add = function(_v0) {
        var length = _v0.a;
        var block = _v0.b;
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$modifyState(function(state) {
            var input = state.input;
            return input.isEnabled || input.grouping ? _Utils_update(state, {
                input: _Utils_update(input, {
                    blocks: A2($author$project$Lia$Markdown$Quiz$Multi$Types$push, block, input.blocks)
                })
            }) : state;
        }), $andre_dietrich$parser_combinators$Combine$withState(function(state) {
            return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2($elm$core$String$fromFloat((length + 2) * 0.4) + "em", state.input.isEnabled || state.input.grouping ? $elm$core$Array$length(state.input.blocks.options) : -1));
        }));
    };
    var $author$project$Lia$Parser$Context$addAbort = function(name) {
        return $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
            return _Utils_update(s, {
                abort: {
                    isTrue: false,
                    stack: A2($elm$core$List$cons, name, s.abort.stack)
                }
            });
        });
    };
    var $author$project$Lia$Markdown$Effect$Model$Content = F5(function(visible, attr, content, audio, video) {
        return {
            attr: attr,
            audio: audio,
            content: content,
            video: video,
            visible: visible
        };
    });
    var $author$project$Lia$Markdown$Effect$Model$Element = F2(function(narrator, content) {
        return {
            content: content,
            narrator: narrator
        };
    });
    var $author$project$Lia$Markdown$Effect$Parser$addTo = F2(function(file, array) {
        if (file.$ === "Nothing") return array;
        else {
            var f = file.a;
            return A2($elm$core$Array$push, f, array);
        }
    });
    var $elm$core$Array$fromListHelp = F3(function(list, nodeList, nodeListSize) {
        fromListHelp: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
            var jsArray = _v0.a;
            var remainingItems = _v0.b;
            if (_Utils_cmp($elm$core$Elm$JsArray$length(jsArray), $elm$core$Array$branchFactor) < 0) return A2($elm$core$Array$builderToArray, true, {
                nodeList: nodeList,
                nodeListSize: nodeListSize,
                tail: jsArray
            });
            else {
                var $temp$list = remainingItems, $temp$nodeList = A2($elm$core$List$cons, $elm$core$Array$Leaf(jsArray), nodeList), $temp$nodeListSize = nodeListSize + 1;
                list = $temp$list;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue fromListHelp;
            }
        }
    });
    var $elm$core$Array$fromList = function(list) {
        if (!list.b) return $elm$core$Array$empty;
        else return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
    };
    var $author$project$Lia$Markdown$Effect$Parser$get_counter = function(idx) {
        return $andre_dietrich$parser_combinators$Combine$withState(function(s) {
            return $andre_dietrich$parser_combinators$Combine$succeed(function() {
                var _v0 = A2($elm$core$Dict$get, idx, s.effect_model.comments);
                if (_v0.$ === "Just") {
                    var e = _v0.a;
                    return $elm$core$Array$length(e.content) - 1;
                } else return 0;
            }());
        });
    };
    var $author$project$Lia$Markdown$Effect$Parser$hasMediaContent = F2(function(start, par) {
        _v0$2: while(true){
            if (par.b && par.a.$ === "Ref") switch(par.a.a.$){
                case "Audio":
                    if (!par.a.a.b.a) {
                        var _v1 = par.a;
                        var _v2 = _v1.a;
                        var _v3 = _v2.b;
                        var audio = _v3.b;
                        var par2 = par.b;
                        return {
                            audio: $elm$core$Maybe$Just(audio),
                            paragraph: par2,
                            video: $elm$core$Maybe$Nothing
                        };
                    } else break _v0$2;
                case "Movie":
                    if (!par.a.a.b.a) {
                        var _v4 = par.a;
                        var _v5 = _v4.a;
                        var _v6 = _v5.b;
                        var video = _v6.b;
                        var par2 = par.b;
                        return {
                            audio: $elm$core$Maybe$Nothing,
                            paragraph: par2,
                            video: $elm$core$Maybe$Just(video)
                        };
                    } else break _v0$2;
                default:
                    break _v0$2;
            }
            else break _v0$2;
        }
        return start ? function(result) {
            return _Utils_update(result, {
                paragraph: $elm$core$List$reverse(result.paragraph)
            });
        }(A2($author$project$Lia$Markdown$Effect$Parser$hasMediaContent, false, $elm$core$List$reverse(par))) : {
            audio: $elm$core$Maybe$Nothing,
            paragraph: par,
            video: $elm$core$Maybe$Nothing
        };
    });
    var $author$project$Lia$Markdown$Effect$Parser$add_comment = F2(function(visible, _v0) {
        var idx = _v0.a;
        var temp_narrator = _v0.b;
        var par = _v0.c;
        var rslt = function(id2) {
            return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(idx, id2));
        };
        var mod = function(s) {
            return _Utils_update(s, {
                effect_model: function() {
                    var e = s.effect_model;
                    var _v1 = A2($author$project$Lia$Markdown$Effect$Parser$hasMediaContent, true, par);
                    var audio = _v1.audio;
                    var video = _v1.video;
                    var paragraph = _v1.paragraph;
                    return _Utils_update(e, {
                        comments: function() {
                            var _v2 = A2($elm$core$Dict$get, idx, e.comments);
                            if (_v2.$ === "Just") {
                                var cmt = _v2.a;
                                return A3($elm$core$Dict$insert, idx, _Utils_update(cmt, {
                                    content: A2($elm$core$Array$push, A5($author$project$Lia$Markdown$Effect$Model$Content, visible, _List_Nil, paragraph, A2($author$project$Lia$Markdown$Effect$Parser$addTo, audio, $elm$core$Array$empty), A2($author$project$Lia$Markdown$Effect$Parser$addTo, video, $elm$core$Array$empty)), cmt.content)
                                }), e.comments);
                            } else {
                                var narrator = A2($elm$core$Maybe$withDefault, s.defines.narrator, A2($elm$core$Maybe$map, $elm$core$String$trim, temp_narrator));
                                return A3($elm$core$Dict$insert, idx, A2($author$project$Lia$Markdown$Effect$Model$Element, narrator, $elm$core$Array$fromList(_List_fromArray([
                                    A5($author$project$Lia$Markdown$Effect$Model$Content, visible, _List_Nil, paragraph, A2($author$project$Lia$Markdown$Effect$Parser$addTo, audio, $elm$core$Array$empty), A2($author$project$Lia$Markdown$Effect$Parser$addTo, video, $elm$core$Array$empty))
                                ]))), e.comments);
                            }
                        }()
                    });
                }()
            });
        };
        return A2($andre_dietrich$parser_combinators$Combine$andThen, rslt, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Effect$Parser$get_counter(idx), $andre_dietrich$parser_combinators$Combine$modifyState(mod)));
    });
    var $elm$core$String$toInt = _String_toInt;
    var $andre_dietrich$parser_combinators$Combine$fail = function(m) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return _Utils_Tuple3(state, stream, $elm$core$Result$Err(_List_fromArray([
                m
            ])));
        }));
    };
    var $andre_dietrich$parser_combinators$Combine$Num$unwrap = function(value) {
        if (value.$ === "Just") {
            var v = value.a;
            return $andre_dietrich$parser_combinators$Combine$succeed(v);
        } else return $andre_dietrich$parser_combinators$Combine$fail("impossible state in Combine.Num.unwrap");
    };
    var $andre_dietrich$parser_combinators$Combine$Num$int = A2($andre_dietrich$parser_combinators$Combine$onerror, "expected an int", A2($andre_dietrich$parser_combinators$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$String$toInt, $andre_dietrich$parser_combinators$Combine$Num$unwrap), $andre_dietrich$parser_combinators$Combine$regex("-?(?:0|[1-9]\\d*)")));
    var $author$project$Lia$Markdown$Effect$Parser$effect_number = function() {
        var state = function(n) {
            return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(n), $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
                return _Utils_update(s, {
                    effect_model: function() {
                        if (_Utils_cmp(n, s.effect_model.effects) > 0) {
                            var e = s.effect_model;
                            return _Utils_update(e, {
                                effects: n
                            });
                        } else return s.effect_model;
                    }(),
                    effect_number: A2($elm$core$List$cons, n, s.effect_number)
                });
            }));
        };
        return A2($andre_dietrich$parser_combinators$Combine$andThen, state, $andre_dietrich$parser_combinators$Combine$Num$int);
    }();
    var $author$project$Lia$Parser$Helper$c_frame = A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$length, $andre_dietrich$parser_combinators$Combine$regex("(`){3,}"));
    var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, "", strings);
    };
    var $author$project$Lia$Parser$Indentation$par_ = function(s) {
        return _Utils_eq(s.indentation, _List_Nil) ? $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0) : s.indentation_skip ? $andre_dietrich$parser_combinators$Combine$skip($andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0)) : $andre_dietrich$parser_combinators$Combine$skip($andre_dietrich$parser_combinators$Combine$regex($elm$core$String$concat(s.indentation)));
    };
    var $author$project$Lia$Parser$Indentation$skip_ = F2(function(bool, state) {
        return _Utils_update(state, {
            indentation_skip: bool
        });
    });
    var $author$project$Lia$Parser$Indentation$check = A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$modifyState($author$project$Lia$Parser$Indentation$skip_(false)), $andre_dietrich$parser_combinators$Combine$withState($author$project$Lia$Parser$Indentation$par_));
    var $elm$core$List$singleton = function(value) {
        return _List_fromArray([
            value
        ]);
    };
    var $author$project$Lia$Markdown$Macro$Parser$code_block = function(backticks_count) {
        var backticks = A2($elm$core$String$repeat, backticks_count, "`");
        return A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$Basics$composeR, $elm$core$String$concat, A2($elm$core$Basics$composeR, $elm$core$String$dropRight(1), $elm$core$List$singleton)), A2($andre_dietrich$parser_combinators$Combine$manyTill, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("(.(?!" + (backticks + "))*\n?")), $andre_dietrich$parser_combinators$Combine$maybe($author$project$Lia$Parser$Indentation$check)), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$string(backticks), $andre_dietrich$parser_combinators$Combine$maybe($author$project$Lia$Parser$Indentation$check))));
    };
    var $author$project$Lia$Markdown$Macro$Parser$debugEnvironment = F2(function(env, code) {
        return env ? "<lia-keep><pre id='ls'><code style='background: #CCCCCC; white-space: pre;'>" + (code + "</code></pre></lia-keep>") : code;
    });
    var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
    var $author$project$Lia$Markdown$Macro$Parser$debugReplace = F3(function(pat, fn, string) {
        var _v0 = $elm$regex$Regex$fromString(pat);
        if (_v0.$ === "Just") {
            var regex = _v0.a;
            return A3($elm$regex$Regex$replace, regex, fn, string);
        } else return string;
    });
    var $author$project$Lia$Markdown$Macro$Parser$debug = function(env) {
        return A2($elm$core$Basics$composeR, A2($author$project$Lia$Markdown$Macro$Parser$debugReplace, "[*+`{}#^|$\\[\\]]", A2($elm$core$Basics$composeR, function($) {
            return $.match;
        }, $elm$core$Basics$append("\\"))), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "<", "\\<"), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, ">", "\\>"), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "\\\\`", "`"), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "\n", "<br id='ls'>"), A2($elm$core$Basics$composeR, A2($author$project$Lia$Markdown$Macro$Parser$debugReplace, "@[a-zA-Z]+[\\w\\d._\\-]*", function(x) {
            return x.match !== "@input" ? "@-" + x.match : x.match;
        }), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "\\<br id='ls'\\>", "<br id='ls'>"), $author$project$Lia$Markdown$Macro$Parser$debugEnvironment(env))))))));
    };
    var $author$project$Lia$Markdown$Macro$Parser$get = F2(function(name, def) {
        var _v0 = A2($elm$core$String$startsWith, "@@", name) ? _Utils_Tuple3(true, true, A2($elm$core$String$dropLeft, 2, name)) : A2($elm$core$String$startsWith, "@-@", name) ? _Utils_Tuple3(true, false, A2($elm$core$String$dropLeft, 3, name)) : _Utils_Tuple3(false, false, A2($elm$core$String$dropLeft, 1, name));
        var isDebug = _v0.a;
        var deepDebug = _v0.b;
        var id = _v0.c;
        return A2($elm$core$Maybe$map, function(x) {
            return _Utils_Tuple3(isDebug, deepDebug, x);
        }, function() {
            switch(id){
                case "author":
                    return $elm$core$Maybe$Just(def.author);
                case "date":
                    return $elm$core$Maybe$Just(def.date);
                case "email":
                    return $elm$core$Maybe$Just(def.email);
                case "version":
                    return $elm$core$Maybe$Just(def.version);
                case "section":
                    return $elm$core$Maybe$Just($elm$core$String$fromInt(def.section));
                case "uid":
                    return $elm$core$Maybe$Just($elm$core$String$fromInt(def.section) + ("_" + $elm$core$String$fromInt(def.uid)));
                default:
                    return A2($elm$core$Dict$get, id, def.macro);
            }
        }());
    });
    var $author$project$Lia$Markdown$Macro$Parser$guard_pattern = "iex3OAQpP4u3QT9xq";
    var $author$project$Lia$Markdown$Macro$Parser$guard = A2($elm$core$String$replace, "\\@", $author$project$Lia$Markdown$Macro$Parser$guard_pattern);
    var $elm$core$String$lines = _String_lines;
    var $andre_dietrich$parser_combinators$Combine$many = function(p) {
        var accumulate = F3(function(acc, state, stream) {
            accumulate: while(true){
                var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
                if (_v0.c.$ === "Ok") {
                    var rstate = _v0.a;
                    var rstream = _v0.b;
                    var res = _v0.c.a;
                    if (_Utils_eq(stream, rstream)) return _Utils_Tuple3(rstate, rstream, $elm$core$List$reverse(acc));
                    else {
                        var $temp$acc = A2($elm$core$List$cons, res, acc), $temp$state = rstate, $temp$stream = rstream;
                        acc = $temp$acc;
                        state = $temp$state;
                        stream = $temp$stream;
                        continue accumulate;
                    }
                } else return _Utils_Tuple3(state, stream, $elm$core$List$reverse(acc));
            }
        });
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v1 = A3(accumulate, _List_Nil, state, stream);
            var rstate = _v1.a;
            var rstream = _v1.b;
            var res = _v1.c;
            return _Utils_Tuple3(rstate, rstream, $elm$core$Result$Ok(res));
        }));
    };
    var $andre_dietrich$parser_combinators$Combine$many1 = function(p) {
        return A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$many(p), A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$List$cons, p));
    };
    var $elm$core$Tuple$mapSecond = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    });
    var $andre_dietrich$parser_combinators$Combine$modifyInput = function(f) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return A3($andre_dietrich$parser_combinators$Combine$app, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0), state, _Utils_update(stream, {
                input: f(stream.input)
            }));
        }));
    };
    var $andre_dietrich$parser_combinators$Combine$optional = F2(function(res, p) {
        return A2($andre_dietrich$parser_combinators$Combine$or, p, $andre_dietrich$parser_combinators$Combine$succeed(res));
    });
    var $author$project$Lia$Parser$Helper$inlineCode = A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$String$replace, "\\`", "`"), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("`"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("([^`\n\\\\]*|\\\\`|\\\\)+"), $andre_dietrich$parser_combinators$Combine$string("`"))));
    var $author$project$Lia$Markdown$Macro$Parser$parameter = $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        A2($andre_dietrich$parser_combinators$Combine$andThen, function(startLength) {
            return $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$string(A2($elm$core$String$repeat, startLength, "`")));
        }, $author$project$Lia$Parser$Helper$c_frame),
        $author$project$Lia$Parser$Helper$inlineCode,
        $andre_dietrich$parser_combinators$Combine$regex("[^),]+")
    ]));
    var $andre_dietrich$parser_combinators$Combine$between = F3(function(lp, rp, p) {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, rp, A2($andre_dietrich$parser_combinators$Combine$keep, p, lp));
    });
    var $andre_dietrich$parser_combinators$Combine$parens = A2($andre_dietrich$parser_combinators$Combine$between, $andre_dietrich$parser_combinators$Combine$string("("), $andre_dietrich$parser_combinators$Combine$string(")"));
    var $andre_dietrich$parser_combinators$Combine$sepBy1 = F2(function(sep, p) {
        return A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$many(A2($andre_dietrich$parser_combinators$Combine$keep, p, sep)), A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$List$cons, p));
    });
    var $andre_dietrich$parser_combinators$Combine$sepBy = F2(function(sep, p) {
        return A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$sepBy1, sep, p), $andre_dietrich$parser_combinators$Combine$succeed(_List_Nil));
    });
    var $author$project$Lia$Markdown$Macro$Parser$parameter_list = A2($andre_dietrich$parser_combinators$Combine$optional, _List_Nil, $andre_dietrich$parser_combinators$Combine$parens(A2($andre_dietrich$parser_combinators$Combine$sepBy, $andre_dietrich$parser_combinators$Combine$string(","), $author$project$Lia$Markdown$Macro$Parser$parameter)));
    var $author$project$Lia$Markdown$Macro$Parser$identifier = $andre_dietrich$parser_combinators$Combine$regex("\\w[\\w\\d._]+");
    var $author$project$Lia$Markdown$Macro$Parser$start = A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$optional, false, A2($andre_dietrich$parser_combinators$Combine$onsuccess, true, $andre_dietrich$parser_combinators$Combine$string("'"))), A2($andre_dietrich$parser_combinators$Combine$map, F3(function(ad, escape, name_) {
        return _Utils_Tuple2(_Utils_ap(ad, name_), escape);
    }), $andre_dietrich$parser_combinators$Combine$regex("@-?@?")));
    var $author$project$Lia$Markdown$Macro$Parser$pattern = A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Macro$Parser$identifier, $author$project$Lia$Markdown$Macro$Parser$start);
    var $andre_dietrich$parser_combinators$Combine$putState = function(state) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(_v0, stream) {
            return A3($andre_dietrich$parser_combinators$Combine$app, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0), state, stream);
        }));
    };
    var $author$project$Lia$Markdown$Macro$Parser$reference_macro = A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$withState(function(c) {
        return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(c.defines.base, c.defines.appendix));
    }), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("(\\)|[^)]*\\))"), A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$regex("[^) ]*"), A2($andre_dietrich$parser_combinators$Combine$map, F3(function(list, url, _v0) {
        var baseURL = _v0.a;
        var appendix = _v0.b;
        return A2($elm$core$List$append, list, _List_fromArray([
            A3($author$project$Lia$Markdown$HTML$Attributes$toURL, baseURL, appendix, url)
        ]));
    }), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("]("), $author$project$Lia$Markdown$Macro$Parser$parameter_list))))), A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Macro$Parser$identifier, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("["), $author$project$Lia$Markdown$Macro$Parser$start))));
    var $andre_dietrich$parser_combinators$Combine$InputStream = F3(function(data, input, position) {
        return {
            data: data,
            input: input,
            position: position
        };
    });
    var $andre_dietrich$parser_combinators$Combine$initStream = function(s) {
        return A3($andre_dietrich$parser_combinators$Combine$InputStream, s, s, 0);
    };
    var $andre_dietrich$parser_combinators$Combine$runParser = F3(function(p, st, s) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, st, $andre_dietrich$parser_combinators$Combine$initStream(s));
        if (_v0.c.$ === "Ok") {
            var state = _v0.a;
            var stream = _v0.b;
            var res = _v0.c.a;
            return $elm$core$Result$Ok(_Utils_Tuple3(state, stream, res));
        } else {
            var state = _v0.a;
            var stream = _v0.b;
            var ms = _v0.c.a;
            return $elm$core$Result$Err(_Utils_Tuple3(state, stream, ms));
        }
    });
    var $author$project$Lia$Markdown$Macro$Parser$simple_macro = A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Macro$Parser$parameter_list, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, $author$project$Lia$Markdown$Macro$Parser$pattern));
    var $author$project$Lia$Utils$toEscapeString = function(str) {
        return A3($elm$core$String$replace, "${", "\\${", A3($elm$core$String$replace, "	", "\\t", A3($elm$core$String$replace, "\n", "\\n", A3($elm$core$String$replace, "`", "\\`", A3($elm$core$String$replace, "'", "\\'", A3($elm$core$String$replace, '"', '\\"', A3($elm$core$String$replace, "\\", "\\\\", str)))))));
    };
    var $author$project$Lia$Markdown$Macro$Parser$uid_update = function(state) {
        var def = state.defines;
        return _Utils_update(state, {
            defines: _Utils_update(def, {
                uid: def.uid + 1
            })
        });
    };
    var $author$project$Lia$Markdown$Macro$Parser$uid_macro = A2($andre_dietrich$parser_combinators$Combine$onsuccess, _Utils_Tuple2(_Utils_Tuple2("@uid", false), _List_Nil), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$modifyState($author$project$Lia$Markdown$Macro$Parser$uid_update), $andre_dietrich$parser_combinators$Combine$string("@uid")));
    var $author$project$Lia$Markdown$Macro$Parser$unguard = A2($elm$core$String$replace, $author$project$Lia$Markdown$Macro$Parser$guard_pattern, "\\@");
    var $author$project$Lia$Markdown$Macro$Parser$eval_parameter = F2(function(param, _v8) {
        var state = _v8.a;
        var i = _v8.b;
        var code = _v8.c;
        var _v9 = A2($author$project$Lia$Markdown$Macro$Parser$macro_parse, state, $author$project$Lia$Markdown$Macro$Parser$guard(param));
        var new_state = _v9.a;
        var new_param = _v9.b;
        return _Utils_Tuple3(new_state, i + 1, $author$project$Lia$Markdown$Macro$Parser$unguard(A3($elm$core$String$replace, "@" + $elm$core$String$fromInt(i), new_param, A3($elm$core$String$replace, "@'" + $elm$core$String$fromInt(i), $author$project$Lia$Utils$toEscapeString(new_param), $author$project$Lia$Markdown$Macro$Parser$guard(code)))));
    });
    var $author$project$Lia$Markdown$Macro$Parser$inject_macro = function(_v3) {
        var _v4 = _v3.a;
        var name = _v4.a;
        var escape = _v4.b;
        var params = _v3.b;
        var inject = function(state) {
            var _v5 = A2($author$project$Lia$Markdown$Macro$Parser$get, name, state.defines);
            if (_v5.$ === "Just") {
                var _v6 = _v5.a;
                var isDebug = _v6.a;
                var deepDebug = _v6.b;
                var code = _v6.c;
                var code_ = _Utils_eq(state.indentation, _List_Nil) ? code : A2($elm$core$String$join, "\n" + A3($elm$core$String$replace, "*", "", A3($elm$core$String$replace, "?", "", $elm$core$String$concat(state.indentation))), $elm$core$String$lines(code));
                var _v7 = A3($elm$core$List$foldl, $author$project$Lia$Markdown$Macro$Parser$eval_parameter, _Utils_Tuple3(state, 0, code_), params);
                var new_state = _v7.a;
                var new_code = _v7.c;
                return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$putState(new_state), $andre_dietrich$parser_combinators$Combine$modifyInput($elm$core$Basics$append((isDebug ? $author$project$Lia$Markdown$Macro$Parser$debug(deepDebug) : $elm$core$Basics$identity)(escape ? $author$project$Lia$Utils$toEscapeString(new_code) : new_code))));
            } else return $andre_dietrich$parser_combinators$Combine$fail("macro definition not found");
        };
        return $andre_dietrich$parser_combinators$Combine$withState(inject);
    };
    var $author$project$Lia$Markdown$Macro$Parser$macro_parse = F2(function(defines, str) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$runParser, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$concat, $andre_dietrich$parser_combinators$Combine$many1(A2($andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$regex("@input[^@]+"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("[^@]+"), $author$project$Lia$Markdown$Macro$Parser$cyclic$macro())))), defines, str);
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var state = _v1.a;
            var stream = _v1.b;
            var s = _v1.c;
            return stream.input === "" ? _Utils_Tuple2(state, s) : A2($elm$core$Tuple$mapSecond, $elm$core$Basics$append(s), A2($author$project$Lia$Markdown$Macro$Parser$macro_parse, state, stream.input));
        } else return _Utils_Tuple2(defines, str);
    });
    function $author$project$Lia$Markdown$Macro$Parser$cyclic$macro() {
        return $andre_dietrich$parser_combinators$Combine$skip($andre_dietrich$parser_combinators$Combine$maybe($andre_dietrich$parser_combinators$Combine$many1($andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Macro$Parser$inject_macro, $author$project$Lia$Markdown$Macro$Parser$uid_macro),
            A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Macro$Parser$inject_macro, $author$project$Lia$Markdown$Macro$Parser$simple_macro),
            A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Macro$Parser$inject_macro, $author$project$Lia$Markdown$Macro$Parser$reference_macro),
            $author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing()
        ])))));
    }
    function $author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing() {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, function(_v2) {
            var backticks = _v2.a;
            var name = _v2.b;
            return A2($andre_dietrich$parser_combinators$Combine$andThen, function(params) {
                return A2($andre_dietrich$parser_combinators$Combine$andThen, function(p) {
                    return $author$project$Lia$Markdown$Macro$Parser$inject_macro(_Utils_Tuple2(name, p));
                }, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$List$append(params), $author$project$Lia$Markdown$Macro$Parser$code_block(backticks)));
            }, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("[	 ]*\n"), $author$project$Lia$Markdown$Macro$Parser$parameter_list));
        }, A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Macro$Parser$pattern, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("[	 ]*[a-zA-Z0-9_]*[	 ]*"), $author$project$Lia$Parser$Helper$c_frame))));
    }
    try {
        var $author$project$Lia$Markdown$Macro$Parser$macro = $author$project$Lia$Markdown$Macro$Parser$cyclic$macro();
        $author$project$Lia$Markdown$Macro$Parser$cyclic$macro = function() {
            return $author$project$Lia$Markdown$Macro$Parser$macro;
        };
        var $author$project$Lia$Markdown$Macro$Parser$macro_listing = $author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing();
        $author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing = function() {
            return $author$project$Lia$Markdown$Macro$Parser$macro_listing;
        };
    } catch ($) {
        throw "Some top-level definitions from `Lia.Markdown.Macro.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    eval_parameter\n  │     ↓\n  │    macro\n  │     ↓\n  │    inject_macro\n  │     ↓\n  │    macro_listing\n  │     ↓\n  │    macro_parse\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $author$project$Lia$Markdown$Effect$Parser$reset_effect_number = $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
        return _Utils_update(s, {
            effect_number: A2($elm$core$List$drop, 1, s.effect_number)
        });
    });
    var $author$project$Lia$Parser$Helper$spaces1 = $andre_dietrich$parser_combinators$Combine$regex("[	 ]+");
    var $author$project$Lia$Markdown$Effect$Parser$hidden_comment = $andre_dietrich$parser_combinators$Combine$skip(A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Effect$Parser$add_comment(false), A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Markdown$Effect$Parser$reset_effect_number, A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$manyTill, $andre_dietrich$parser_combinators$Combine$Char$anyChar, $andre_dietrich$parser_combinators$Combine$string("-->")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("}}--[	 ]*"), A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$maybe(A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("[A-Za-z0-9 ]+"), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Macro$Parser$macro, $author$project$Lia$Parser$Helper$spaces1))), A2($andre_dietrich$parser_combinators$Combine$map, F3(function(i, voice, text) {
        return _Utils_Tuple3(i, voice, _List_fromArray([
            A2($author$project$Lia$Markdown$Inline$Types$Chars, $elm$core$String$trim($elm$core$String$fromList(text)), _List_Nil)
        ]));
    }), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Effect$Parser$effect_number, $andre_dietrich$parser_combinators$Combine$regex("<!--[	 ]*--{{")))))))));
    var $author$project$Lia$Markdown$Inline$Parser$comments = $andre_dietrich$parser_combinators$Combine$skip($andre_dietrich$parser_combinators$Combine$many($andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $andre_dietrich$parser_combinators$Combine$skip($author$project$Lia$Markdown$Inline$Parser$ignore_comment),
        $author$project$Lia$Markdown$Effect$Parser$hidden_comment,
        $andre_dietrich$parser_combinators$Combine$skip($author$project$Lia$Markdown$Inline$Parser$ignore_comment)
    ]))));
    var $author$project$Lia$Markdown$HTML$Attributes$base = F3(function(url, appendix, _v0) {
        var key = _v0.a;
        var value = _v0.b;
        return _Utils_Tuple2(key, key === "src" || key === "href" || key === "data" || key === "data-src" || key === "formaction" || key === "poster" ? A3($author$project$Lia$Markdown$HTML$Attributes$toURL, url, appendix, value) : value);
    });
    var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
    };
    var $author$project$Lia$Markdown$HTML$NamedCharacterReferences$dict = $elm$core$Dict$fromList(_List_fromArray([
        _Utils_Tuple2("Aacute", "\xc1"),
        _Utils_Tuple2("aacute", "\xe1"),
        _Utils_Tuple2("Abreve", "Ă"),
        _Utils_Tuple2("abreve", "ă"),
        _Utils_Tuple2("ac", "∾"),
        _Utils_Tuple2("acd", "∿"),
        _Utils_Tuple2("acE", "∾̳"),
        _Utils_Tuple2("Acirc", "\xc2"),
        _Utils_Tuple2("acirc", "\xe2"),
        _Utils_Tuple2("acute", "\xb4"),
        _Utils_Tuple2("Acy", "А"),
        _Utils_Tuple2("acy", "а"),
        _Utils_Tuple2("AElig", "\xc6"),
        _Utils_Tuple2("aelig", "\xe6"),
        _Utils_Tuple2("af", "⁡"),
        _Utils_Tuple2("Afr", "\uD835\uDD04"),
        _Utils_Tuple2("afr", "\uD835\uDD1E"),
        _Utils_Tuple2("Agrave", "\xc0"),
        _Utils_Tuple2("agrave", "\xe0"),
        _Utils_Tuple2("alefsym", "ℵ"),
        _Utils_Tuple2("aleph", "ℵ"),
        _Utils_Tuple2("Alpha", "Α"),
        _Utils_Tuple2("alpha", "α"),
        _Utils_Tuple2("Amacr", "Ā"),
        _Utils_Tuple2("amacr", "ā"),
        _Utils_Tuple2("amalg", "⨿"),
        _Utils_Tuple2("amp", "&"),
        _Utils_Tuple2("AMP", "&"),
        _Utils_Tuple2("andand", "⩕"),
        _Utils_Tuple2("And", "⩓"),
        _Utils_Tuple2("and", "∧"),
        _Utils_Tuple2("andd", "⩜"),
        _Utils_Tuple2("andslope", "⩘"),
        _Utils_Tuple2("andv", "⩚"),
        _Utils_Tuple2("ang", "∠"),
        _Utils_Tuple2("ange", "⦤"),
        _Utils_Tuple2("angle", "∠"),
        _Utils_Tuple2("angmsdaa", "⦨"),
        _Utils_Tuple2("angmsdab", "⦩"),
        _Utils_Tuple2("angmsdac", "⦪"),
        _Utils_Tuple2("angmsdad", "⦫"),
        _Utils_Tuple2("angmsdae", "⦬"),
        _Utils_Tuple2("angmsdaf", "⦭"),
        _Utils_Tuple2("angmsdag", "⦮"),
        _Utils_Tuple2("angmsdah", "⦯"),
        _Utils_Tuple2("angmsd", "∡"),
        _Utils_Tuple2("angrt", "∟"),
        _Utils_Tuple2("angrtvb", "⊾"),
        _Utils_Tuple2("angrtvbd", "⦝"),
        _Utils_Tuple2("angsph", "∢"),
        _Utils_Tuple2("angst", "\xc5"),
        _Utils_Tuple2("angzarr", "⍼"),
        _Utils_Tuple2("Aogon", "Ą"),
        _Utils_Tuple2("aogon", "ą"),
        _Utils_Tuple2("Aopf", "\uD835\uDD38"),
        _Utils_Tuple2("aopf", "\uD835\uDD52"),
        _Utils_Tuple2("apacir", "⩯"),
        _Utils_Tuple2("ap", "≈"),
        _Utils_Tuple2("apE", "⩰"),
        _Utils_Tuple2("ape", "≊"),
        _Utils_Tuple2("apid", "≋"),
        _Utils_Tuple2("apos", "'"),
        _Utils_Tuple2("ApplyFunction", "⁡"),
        _Utils_Tuple2("approx", "≈"),
        _Utils_Tuple2("approxeq", "≊"),
        _Utils_Tuple2("Aring", "\xc5"),
        _Utils_Tuple2("aring", "\xe5"),
        _Utils_Tuple2("Ascr", "\uD835\uDC9C"),
        _Utils_Tuple2("ascr", "\uD835\uDCB6"),
        _Utils_Tuple2("Assign", "≔"),
        _Utils_Tuple2("ast", "*"),
        _Utils_Tuple2("asymp", "≈"),
        _Utils_Tuple2("asympeq", "≍"),
        _Utils_Tuple2("Atilde", "\xc3"),
        _Utils_Tuple2("atilde", "\xe3"),
        _Utils_Tuple2("Auml", "\xc4"),
        _Utils_Tuple2("auml", "\xe4"),
        _Utils_Tuple2("awconint", "∳"),
        _Utils_Tuple2("awint", "⨑"),
        _Utils_Tuple2("backcong", "≌"),
        _Utils_Tuple2("backepsilon", "϶"),
        _Utils_Tuple2("backprime", "‵"),
        _Utils_Tuple2("backsim", "∽"),
        _Utils_Tuple2("backsimeq", "⋍"),
        _Utils_Tuple2("Backslash", "∖"),
        _Utils_Tuple2("Barv", "⫧"),
        _Utils_Tuple2("barvee", "⊽"),
        _Utils_Tuple2("barwed", "⌅"),
        _Utils_Tuple2("Barwed", "⌆"),
        _Utils_Tuple2("barwedge", "⌅"),
        _Utils_Tuple2("bbrk", "⎵"),
        _Utils_Tuple2("bbrktbrk", "⎶"),
        _Utils_Tuple2("bcong", "≌"),
        _Utils_Tuple2("Bcy", "Б"),
        _Utils_Tuple2("bcy", "б"),
        _Utils_Tuple2("bdquo", "„"),
        _Utils_Tuple2("becaus", "∵"),
        _Utils_Tuple2("because", "∵"),
        _Utils_Tuple2("Because", "∵"),
        _Utils_Tuple2("bemptyv", "⦰"),
        _Utils_Tuple2("bepsi", "϶"),
        _Utils_Tuple2("bernou", "ℬ"),
        _Utils_Tuple2("Bernoullis", "ℬ"),
        _Utils_Tuple2("Beta", "Β"),
        _Utils_Tuple2("beta", "β"),
        _Utils_Tuple2("beth", "ℶ"),
        _Utils_Tuple2("between", "≬"),
        _Utils_Tuple2("Bfr", "\uD835\uDD05"),
        _Utils_Tuple2("bfr", "\uD835\uDD1F"),
        _Utils_Tuple2("bigcap", "⋂"),
        _Utils_Tuple2("bigcirc", "◯"),
        _Utils_Tuple2("bigcup", "⋃"),
        _Utils_Tuple2("bigodot", "⨀"),
        _Utils_Tuple2("bigoplus", "⨁"),
        _Utils_Tuple2("bigotimes", "⨂"),
        _Utils_Tuple2("bigsqcup", "⨆"),
        _Utils_Tuple2("bigstar", "★"),
        _Utils_Tuple2("bigtriangledown", "▽"),
        _Utils_Tuple2("bigtriangleup", "△"),
        _Utils_Tuple2("biguplus", "⨄"),
        _Utils_Tuple2("bigvee", "⋁"),
        _Utils_Tuple2("bigwedge", "⋀"),
        _Utils_Tuple2("bkarow", "⤍"),
        _Utils_Tuple2("blacklozenge", "⧫"),
        _Utils_Tuple2("blacksquare", "▪"),
        _Utils_Tuple2("blacktriangle", "▴"),
        _Utils_Tuple2("blacktriangledown", "▾"),
        _Utils_Tuple2("blacktriangleleft", "◂"),
        _Utils_Tuple2("blacktriangleright", "▸"),
        _Utils_Tuple2("blank", "␣"),
        _Utils_Tuple2("blk12", "▒"),
        _Utils_Tuple2("blk14", "░"),
        _Utils_Tuple2("blk34", "▓"),
        _Utils_Tuple2("block", "█"),
        _Utils_Tuple2("bne", "=⃥"),
        _Utils_Tuple2("bnequiv", "≡⃥"),
        _Utils_Tuple2("bNot", "⫭"),
        _Utils_Tuple2("bnot", "⌐"),
        _Utils_Tuple2("Bopf", "\uD835\uDD39"),
        _Utils_Tuple2("bopf", "\uD835\uDD53"),
        _Utils_Tuple2("bot", "⊥"),
        _Utils_Tuple2("bottom", "⊥"),
        _Utils_Tuple2("bowtie", "⋈"),
        _Utils_Tuple2("boxbox", "⧉"),
        _Utils_Tuple2("boxdl", "┐"),
        _Utils_Tuple2("boxdL", "╕"),
        _Utils_Tuple2("boxDl", "╖"),
        _Utils_Tuple2("boxDL", "╗"),
        _Utils_Tuple2("boxdr", "┌"),
        _Utils_Tuple2("boxdR", "╒"),
        _Utils_Tuple2("boxDr", "╓"),
        _Utils_Tuple2("boxDR", "╔"),
        _Utils_Tuple2("boxh", "─"),
        _Utils_Tuple2("boxH", "═"),
        _Utils_Tuple2("boxhd", "┬"),
        _Utils_Tuple2("boxHd", "╤"),
        _Utils_Tuple2("boxhD", "╥"),
        _Utils_Tuple2("boxHD", "╦"),
        _Utils_Tuple2("boxhu", "┴"),
        _Utils_Tuple2("boxHu", "╧"),
        _Utils_Tuple2("boxhU", "╨"),
        _Utils_Tuple2("boxHU", "╩"),
        _Utils_Tuple2("boxminus", "⊟"),
        _Utils_Tuple2("boxplus", "⊞"),
        _Utils_Tuple2("boxtimes", "⊠"),
        _Utils_Tuple2("boxul", "┘"),
        _Utils_Tuple2("boxuL", "╛"),
        _Utils_Tuple2("boxUl", "╜"),
        _Utils_Tuple2("boxUL", "╝"),
        _Utils_Tuple2("boxur", "└"),
        _Utils_Tuple2("boxuR", "╘"),
        _Utils_Tuple2("boxUr", "╙"),
        _Utils_Tuple2("boxUR", "╚"),
        _Utils_Tuple2("boxv", "│"),
        _Utils_Tuple2("boxV", "║"),
        _Utils_Tuple2("boxvh", "┼"),
        _Utils_Tuple2("boxvH", "╪"),
        _Utils_Tuple2("boxVh", "╫"),
        _Utils_Tuple2("boxVH", "╬"),
        _Utils_Tuple2("boxvl", "┤"),
        _Utils_Tuple2("boxvL", "╡"),
        _Utils_Tuple2("boxVl", "╢"),
        _Utils_Tuple2("boxVL", "╣"),
        _Utils_Tuple2("boxvr", "├"),
        _Utils_Tuple2("boxvR", "╞"),
        _Utils_Tuple2("boxVr", "╟"),
        _Utils_Tuple2("boxVR", "╠"),
        _Utils_Tuple2("bprime", "‵"),
        _Utils_Tuple2("breve", "˘"),
        _Utils_Tuple2("Breve", "˘"),
        _Utils_Tuple2("brvbar", "\xa6"),
        _Utils_Tuple2("bscr", "\uD835\uDCB7"),
        _Utils_Tuple2("Bscr", "ℬ"),
        _Utils_Tuple2("bsemi", "⁏"),
        _Utils_Tuple2("bsim", "∽"),
        _Utils_Tuple2("bsime", "⋍"),
        _Utils_Tuple2("bsolb", "⧅"),
        _Utils_Tuple2("bsol", "\\"),
        _Utils_Tuple2("bsolhsub", "⟈"),
        _Utils_Tuple2("bull", "•"),
        _Utils_Tuple2("bullet", "•"),
        _Utils_Tuple2("bump", "≎"),
        _Utils_Tuple2("bumpE", "⪮"),
        _Utils_Tuple2("bumpe", "≏"),
        _Utils_Tuple2("Bumpeq", "≎"),
        _Utils_Tuple2("bumpeq", "≏"),
        _Utils_Tuple2("Cacute", "Ć"),
        _Utils_Tuple2("cacute", "ć"),
        _Utils_Tuple2("capand", "⩄"),
        _Utils_Tuple2("capbrcup", "⩉"),
        _Utils_Tuple2("capcap", "⩋"),
        _Utils_Tuple2("cap", "∩"),
        _Utils_Tuple2("Cap", "⋒"),
        _Utils_Tuple2("capcup", "⩇"),
        _Utils_Tuple2("capdot", "⩀"),
        _Utils_Tuple2("CapitalDifferentialD", "ⅅ"),
        _Utils_Tuple2("caps", "∩︀"),
        _Utils_Tuple2("caret", "⁁"),
        _Utils_Tuple2("caron", "ˇ"),
        _Utils_Tuple2("Cayleys", "ℭ"),
        _Utils_Tuple2("ccaps", "⩍"),
        _Utils_Tuple2("Ccaron", "Č"),
        _Utils_Tuple2("ccaron", "č"),
        _Utils_Tuple2("Ccedil", "\xc7"),
        _Utils_Tuple2("ccedil", "\xe7"),
        _Utils_Tuple2("Ccirc", "Ĉ"),
        _Utils_Tuple2("ccirc", "ĉ"),
        _Utils_Tuple2("Cconint", "∰"),
        _Utils_Tuple2("ccups", "⩌"),
        _Utils_Tuple2("ccupssm", "⩐"),
        _Utils_Tuple2("Cdot", "Ċ"),
        _Utils_Tuple2("cdot", "ċ"),
        _Utils_Tuple2("cedil", "\xb8"),
        _Utils_Tuple2("Cedilla", "\xb8"),
        _Utils_Tuple2("cemptyv", "⦲"),
        _Utils_Tuple2("cent", "\xa2"),
        _Utils_Tuple2("centerdot", "\xb7"),
        _Utils_Tuple2("CenterDot", "\xb7"),
        _Utils_Tuple2("cfr", "\uD835\uDD20"),
        _Utils_Tuple2("Cfr", "ℭ"),
        _Utils_Tuple2("CHcy", "Ч"),
        _Utils_Tuple2("chcy", "ч"),
        _Utils_Tuple2("check", "✓"),
        _Utils_Tuple2("checkmark", "✓"),
        _Utils_Tuple2("Chi", "Χ"),
        _Utils_Tuple2("chi", "χ"),
        _Utils_Tuple2("circ", "ˆ"),
        _Utils_Tuple2("circeq", "≗"),
        _Utils_Tuple2("circlearrowleft", "↺"),
        _Utils_Tuple2("circlearrowright", "↻"),
        _Utils_Tuple2("circledast", "⊛"),
        _Utils_Tuple2("circledcirc", "⊚"),
        _Utils_Tuple2("circleddash", "⊝"),
        _Utils_Tuple2("CircleDot", "⊙"),
        _Utils_Tuple2("circledR", "\xae"),
        _Utils_Tuple2("circledS", "Ⓢ"),
        _Utils_Tuple2("CircleMinus", "⊖"),
        _Utils_Tuple2("CirclePlus", "⊕"),
        _Utils_Tuple2("CircleTimes", "⊗"),
        _Utils_Tuple2("cir", "○"),
        _Utils_Tuple2("cirE", "⧃"),
        _Utils_Tuple2("cire", "≗"),
        _Utils_Tuple2("cirfnint", "⨐"),
        _Utils_Tuple2("cirmid", "⫯"),
        _Utils_Tuple2("cirscir", "⧂"),
        _Utils_Tuple2("ClockwiseContourIntegral", "∲"),
        _Utils_Tuple2("CloseCurlyDoubleQuote", "”"),
        _Utils_Tuple2("CloseCurlyQuote", "’"),
        _Utils_Tuple2("clubs", "♣"),
        _Utils_Tuple2("clubsuit", "♣"),
        _Utils_Tuple2("colon", ":"),
        _Utils_Tuple2("Colon", "∷"),
        _Utils_Tuple2("Colone", "⩴"),
        _Utils_Tuple2("colone", "≔"),
        _Utils_Tuple2("coloneq", "≔"),
        _Utils_Tuple2("comma", ","),
        _Utils_Tuple2("commat", "@"),
        _Utils_Tuple2("comp", "∁"),
        _Utils_Tuple2("compfn", "∘"),
        _Utils_Tuple2("complement", "∁"),
        _Utils_Tuple2("complexes", "ℂ"),
        _Utils_Tuple2("cong", "≅"),
        _Utils_Tuple2("congdot", "⩭"),
        _Utils_Tuple2("Congruent", "≡"),
        _Utils_Tuple2("conint", "∮"),
        _Utils_Tuple2("Conint", "∯"),
        _Utils_Tuple2("ContourIntegral", "∮"),
        _Utils_Tuple2("copf", "\uD835\uDD54"),
        _Utils_Tuple2("Copf", "ℂ"),
        _Utils_Tuple2("coprod", "∐"),
        _Utils_Tuple2("Coproduct", "∐"),
        _Utils_Tuple2("copy", "\xa9"),
        _Utils_Tuple2("COPY", "\xa9"),
        _Utils_Tuple2("copysr", "℗"),
        _Utils_Tuple2("CounterClockwiseContourIntegral", "∳"),
        _Utils_Tuple2("crarr", "↵"),
        _Utils_Tuple2("cross", "✗"),
        _Utils_Tuple2("Cross", "⨯"),
        _Utils_Tuple2("Cscr", "\uD835\uDC9E"),
        _Utils_Tuple2("cscr", "\uD835\uDCB8"),
        _Utils_Tuple2("csub", "⫏"),
        _Utils_Tuple2("csube", "⫑"),
        _Utils_Tuple2("csup", "⫐"),
        _Utils_Tuple2("csupe", "⫒"),
        _Utils_Tuple2("ctdot", "⋯"),
        _Utils_Tuple2("cudarrl", "⤸"),
        _Utils_Tuple2("cudarrr", "⤵"),
        _Utils_Tuple2("cuepr", "⋞"),
        _Utils_Tuple2("cuesc", "⋟"),
        _Utils_Tuple2("cularr", "↶"),
        _Utils_Tuple2("cularrp", "⤽"),
        _Utils_Tuple2("cupbrcap", "⩈"),
        _Utils_Tuple2("cupcap", "⩆"),
        _Utils_Tuple2("CupCap", "≍"),
        _Utils_Tuple2("cup", "∪"),
        _Utils_Tuple2("Cup", "⋓"),
        _Utils_Tuple2("cupcup", "⩊"),
        _Utils_Tuple2("cupdot", "⊍"),
        _Utils_Tuple2("cupor", "⩅"),
        _Utils_Tuple2("cups", "∪︀"),
        _Utils_Tuple2("curarr", "↷"),
        _Utils_Tuple2("curarrm", "⤼"),
        _Utils_Tuple2("curlyeqprec", "⋞"),
        _Utils_Tuple2("curlyeqsucc", "⋟"),
        _Utils_Tuple2("curlyvee", "⋎"),
        _Utils_Tuple2("curlywedge", "⋏"),
        _Utils_Tuple2("curren", "\xa4"),
        _Utils_Tuple2("curvearrowleft", "↶"),
        _Utils_Tuple2("curvearrowright", "↷"),
        _Utils_Tuple2("cuvee", "⋎"),
        _Utils_Tuple2("cuwed", "⋏"),
        _Utils_Tuple2("cwconint", "∲"),
        _Utils_Tuple2("cwint", "∱"),
        _Utils_Tuple2("cylcty", "⌭"),
        _Utils_Tuple2("dagger", "†"),
        _Utils_Tuple2("Dagger", "‡"),
        _Utils_Tuple2("daleth", "ℸ"),
        _Utils_Tuple2("darr", "↓"),
        _Utils_Tuple2("Darr", "↡"),
        _Utils_Tuple2("dArr", "⇓"),
        _Utils_Tuple2("dash", "‐"),
        _Utils_Tuple2("Dashv", "⫤"),
        _Utils_Tuple2("dashv", "⊣"),
        _Utils_Tuple2("dbkarow", "⤏"),
        _Utils_Tuple2("dblac", "˝"),
        _Utils_Tuple2("Dcaron", "Ď"),
        _Utils_Tuple2("dcaron", "ď"),
        _Utils_Tuple2("Dcy", "Д"),
        _Utils_Tuple2("dcy", "д"),
        _Utils_Tuple2("ddagger", "‡"),
        _Utils_Tuple2("ddarr", "⇊"),
        _Utils_Tuple2("DD", "ⅅ"),
        _Utils_Tuple2("dd", "ⅆ"),
        _Utils_Tuple2("DDotrahd", "⤑"),
        _Utils_Tuple2("ddotseq", "⩷"),
        _Utils_Tuple2("deg", "\xb0"),
        _Utils_Tuple2("Del", "∇"),
        _Utils_Tuple2("Delta", "Δ"),
        _Utils_Tuple2("delta", "δ"),
        _Utils_Tuple2("demptyv", "⦱"),
        _Utils_Tuple2("dfisht", "⥿"),
        _Utils_Tuple2("Dfr", "\uD835\uDD07"),
        _Utils_Tuple2("dfr", "\uD835\uDD21"),
        _Utils_Tuple2("dHar", "⥥"),
        _Utils_Tuple2("dharl", "⇃"),
        _Utils_Tuple2("dharr", "⇂"),
        _Utils_Tuple2("DiacriticalAcute", "\xb4"),
        _Utils_Tuple2("DiacriticalDot", "˙"),
        _Utils_Tuple2("DiacriticalDoubleAcute", "˝"),
        _Utils_Tuple2("DiacriticalGrave", "`"),
        _Utils_Tuple2("DiacriticalTilde", "˜"),
        _Utils_Tuple2("diam", "⋄"),
        _Utils_Tuple2("diamond", "⋄"),
        _Utils_Tuple2("Diamond", "⋄"),
        _Utils_Tuple2("diamondsuit", "♦"),
        _Utils_Tuple2("diams", "♦"),
        _Utils_Tuple2("die", "\xa8"),
        _Utils_Tuple2("DifferentialD", "ⅆ"),
        _Utils_Tuple2("digamma", "ϝ"),
        _Utils_Tuple2("disin", "⋲"),
        _Utils_Tuple2("div", "\xf7"),
        _Utils_Tuple2("divide", "\xf7"),
        _Utils_Tuple2("divideontimes", "⋇"),
        _Utils_Tuple2("divonx", "⋇"),
        _Utils_Tuple2("DJcy", "Ђ"),
        _Utils_Tuple2("djcy", "ђ"),
        _Utils_Tuple2("dlcorn", "⌞"),
        _Utils_Tuple2("dlcrop", "⌍"),
        _Utils_Tuple2("dollar", "$"),
        _Utils_Tuple2("Dopf", "\uD835\uDD3B"),
        _Utils_Tuple2("dopf", "\uD835\uDD55"),
        _Utils_Tuple2("Dot", "\xa8"),
        _Utils_Tuple2("dot", "˙"),
        _Utils_Tuple2("DotDot", "⃜"),
        _Utils_Tuple2("doteq", "≐"),
        _Utils_Tuple2("doteqdot", "≑"),
        _Utils_Tuple2("DotEqual", "≐"),
        _Utils_Tuple2("dotminus", "∸"),
        _Utils_Tuple2("dotplus", "∔"),
        _Utils_Tuple2("dotsquare", "⊡"),
        _Utils_Tuple2("doublebarwedge", "⌆"),
        _Utils_Tuple2("DoubleContourIntegral", "∯"),
        _Utils_Tuple2("DoubleDot", "\xa8"),
        _Utils_Tuple2("DoubleDownArrow", "⇓"),
        _Utils_Tuple2("DoubleLeftArrow", "⇐"),
        _Utils_Tuple2("DoubleLeftRightArrow", "⇔"),
        _Utils_Tuple2("DoubleLeftTee", "⫤"),
        _Utils_Tuple2("DoubleLongLeftArrow", "⟸"),
        _Utils_Tuple2("DoubleLongLeftRightArrow", "⟺"),
        _Utils_Tuple2("DoubleLongRightArrow", "⟹"),
        _Utils_Tuple2("DoubleRightArrow", "⇒"),
        _Utils_Tuple2("DoubleRightTee", "⊨"),
        _Utils_Tuple2("DoubleUpArrow", "⇑"),
        _Utils_Tuple2("DoubleUpDownArrow", "⇕"),
        _Utils_Tuple2("DoubleVerticalBar", "∥"),
        _Utils_Tuple2("DownArrowBar", "⤓"),
        _Utils_Tuple2("downarrow", "↓"),
        _Utils_Tuple2("DownArrow", "↓"),
        _Utils_Tuple2("Downarrow", "⇓"),
        _Utils_Tuple2("DownArrowUpArrow", "⇵"),
        _Utils_Tuple2("DownBreve", "̑"),
        _Utils_Tuple2("downdownarrows", "⇊"),
        _Utils_Tuple2("downharpoonleft", "⇃"),
        _Utils_Tuple2("downharpoonright", "⇂"),
        _Utils_Tuple2("DownLeftRightVector", "⥐"),
        _Utils_Tuple2("DownLeftTeeVector", "⥞"),
        _Utils_Tuple2("DownLeftVectorBar", "⥖"),
        _Utils_Tuple2("DownLeftVector", "↽"),
        _Utils_Tuple2("DownRightTeeVector", "⥟"),
        _Utils_Tuple2("DownRightVectorBar", "⥗"),
        _Utils_Tuple2("DownRightVector", "⇁"),
        _Utils_Tuple2("DownTeeArrow", "↧"),
        _Utils_Tuple2("DownTee", "⊤"),
        _Utils_Tuple2("drbkarow", "⤐"),
        _Utils_Tuple2("drcorn", "⌟"),
        _Utils_Tuple2("drcrop", "⌌"),
        _Utils_Tuple2("Dscr", "\uD835\uDC9F"),
        _Utils_Tuple2("dscr", "\uD835\uDCB9"),
        _Utils_Tuple2("DScy", "Ѕ"),
        _Utils_Tuple2("dscy", "ѕ"),
        _Utils_Tuple2("dsol", "⧶"),
        _Utils_Tuple2("Dstrok", "Đ"),
        _Utils_Tuple2("dstrok", "đ"),
        _Utils_Tuple2("dtdot", "⋱"),
        _Utils_Tuple2("dtri", "▿"),
        _Utils_Tuple2("dtrif", "▾"),
        _Utils_Tuple2("duarr", "⇵"),
        _Utils_Tuple2("duhar", "⥯"),
        _Utils_Tuple2("dwangle", "⦦"),
        _Utils_Tuple2("DZcy", "Џ"),
        _Utils_Tuple2("dzcy", "џ"),
        _Utils_Tuple2("dzigrarr", "⟿"),
        _Utils_Tuple2("Eacute", "\xc9"),
        _Utils_Tuple2("eacute", "\xe9"),
        _Utils_Tuple2("easter", "⩮"),
        _Utils_Tuple2("Ecaron", "Ě"),
        _Utils_Tuple2("ecaron", "ě"),
        _Utils_Tuple2("Ecirc", "\xca"),
        _Utils_Tuple2("ecirc", "\xea"),
        _Utils_Tuple2("ecir", "≖"),
        _Utils_Tuple2("ecolon", "≕"),
        _Utils_Tuple2("Ecy", "Э"),
        _Utils_Tuple2("ecy", "э"),
        _Utils_Tuple2("eDDot", "⩷"),
        _Utils_Tuple2("Edot", "Ė"),
        _Utils_Tuple2("edot", "ė"),
        _Utils_Tuple2("eDot", "≑"),
        _Utils_Tuple2("ee", "ⅇ"),
        _Utils_Tuple2("efDot", "≒"),
        _Utils_Tuple2("Efr", "\uD835\uDD08"),
        _Utils_Tuple2("efr", "\uD835\uDD22"),
        _Utils_Tuple2("eg", "⪚"),
        _Utils_Tuple2("Egrave", "\xc8"),
        _Utils_Tuple2("egrave", "\xe8"),
        _Utils_Tuple2("egs", "⪖"),
        _Utils_Tuple2("egsdot", "⪘"),
        _Utils_Tuple2("el", "⪙"),
        _Utils_Tuple2("Element", "∈"),
        _Utils_Tuple2("elinters", "⏧"),
        _Utils_Tuple2("ell", "ℓ"),
        _Utils_Tuple2("els", "⪕"),
        _Utils_Tuple2("elsdot", "⪗"),
        _Utils_Tuple2("Emacr", "Ē"),
        _Utils_Tuple2("emacr", "ē"),
        _Utils_Tuple2("empty", "∅"),
        _Utils_Tuple2("emptyset", "∅"),
        _Utils_Tuple2("EmptySmallSquare", "◻"),
        _Utils_Tuple2("emptyv", "∅"),
        _Utils_Tuple2("EmptyVerySmallSquare", "▫"),
        _Utils_Tuple2("emsp13", " "),
        _Utils_Tuple2("emsp14", " "),
        _Utils_Tuple2("emsp", " "),
        _Utils_Tuple2("ENG", "Ŋ"),
        _Utils_Tuple2("eng", "ŋ"),
        _Utils_Tuple2("ensp", " "),
        _Utils_Tuple2("Eogon", "Ę"),
        _Utils_Tuple2("eogon", "ę"),
        _Utils_Tuple2("Eopf", "\uD835\uDD3C"),
        _Utils_Tuple2("eopf", "\uD835\uDD56"),
        _Utils_Tuple2("epar", "⋕"),
        _Utils_Tuple2("eparsl", "⧣"),
        _Utils_Tuple2("eplus", "⩱"),
        _Utils_Tuple2("epsi", "ε"),
        _Utils_Tuple2("Epsilon", "Ε"),
        _Utils_Tuple2("epsilon", "ε"),
        _Utils_Tuple2("epsiv", "ϵ"),
        _Utils_Tuple2("eqcirc", "≖"),
        _Utils_Tuple2("eqcolon", "≕"),
        _Utils_Tuple2("eqsim", "≂"),
        _Utils_Tuple2("eqslantgtr", "⪖"),
        _Utils_Tuple2("eqslantless", "⪕"),
        _Utils_Tuple2("Equal", "⩵"),
        _Utils_Tuple2("equals", "="),
        _Utils_Tuple2("EqualTilde", "≂"),
        _Utils_Tuple2("equest", "≟"),
        _Utils_Tuple2("Equilibrium", "⇌"),
        _Utils_Tuple2("equiv", "≡"),
        _Utils_Tuple2("equivDD", "⩸"),
        _Utils_Tuple2("eqvparsl", "⧥"),
        _Utils_Tuple2("erarr", "⥱"),
        _Utils_Tuple2("erDot", "≓"),
        _Utils_Tuple2("escr", "ℯ"),
        _Utils_Tuple2("Escr", "ℰ"),
        _Utils_Tuple2("esdot", "≐"),
        _Utils_Tuple2("Esim", "⩳"),
        _Utils_Tuple2("esim", "≂"),
        _Utils_Tuple2("Eta", "Η"),
        _Utils_Tuple2("eta", "η"),
        _Utils_Tuple2("ETH", "\xd0"),
        _Utils_Tuple2("eth", "\xf0"),
        _Utils_Tuple2("Euml", "\xcb"),
        _Utils_Tuple2("euml", "\xeb"),
        _Utils_Tuple2("euro", "€"),
        _Utils_Tuple2("excl", "!"),
        _Utils_Tuple2("exist", "∃"),
        _Utils_Tuple2("Exists", "∃"),
        _Utils_Tuple2("expectation", "ℰ"),
        _Utils_Tuple2("exponentiale", "ⅇ"),
        _Utils_Tuple2("ExponentialE", "ⅇ"),
        _Utils_Tuple2("fallingdotseq", "≒"),
        _Utils_Tuple2("Fcy", "Ф"),
        _Utils_Tuple2("fcy", "ф"),
        _Utils_Tuple2("female", "♀"),
        _Utils_Tuple2("ffilig", "ﬃ"),
        _Utils_Tuple2("fflig", "ﬀ"),
        _Utils_Tuple2("ffllig", "ﬄ"),
        _Utils_Tuple2("Ffr", "\uD835\uDD09"),
        _Utils_Tuple2("ffr", "\uD835\uDD23"),
        _Utils_Tuple2("filig", "ﬁ"),
        _Utils_Tuple2("FilledSmallSquare", "◼"),
        _Utils_Tuple2("FilledVerySmallSquare", "▪"),
        _Utils_Tuple2("fjlig", "fj"),
        _Utils_Tuple2("flat", "♭"),
        _Utils_Tuple2("fllig", "ﬂ"),
        _Utils_Tuple2("fltns", "▱"),
        _Utils_Tuple2("fnof", "ƒ"),
        _Utils_Tuple2("Fopf", "\uD835\uDD3D"),
        _Utils_Tuple2("fopf", "\uD835\uDD57"),
        _Utils_Tuple2("forall", "∀"),
        _Utils_Tuple2("ForAll", "∀"),
        _Utils_Tuple2("fork", "⋔"),
        _Utils_Tuple2("forkv", "⫙"),
        _Utils_Tuple2("Fouriertrf", "ℱ"),
        _Utils_Tuple2("fpartint", "⨍"),
        _Utils_Tuple2("frac12", "\xbd"),
        _Utils_Tuple2("frac13", "⅓"),
        _Utils_Tuple2("frac14", "\xbc"),
        _Utils_Tuple2("frac15", "⅕"),
        _Utils_Tuple2("frac16", "⅙"),
        _Utils_Tuple2("frac18", "⅛"),
        _Utils_Tuple2("frac23", "⅔"),
        _Utils_Tuple2("frac25", "⅖"),
        _Utils_Tuple2("frac34", "\xbe"),
        _Utils_Tuple2("frac35", "⅗"),
        _Utils_Tuple2("frac38", "⅜"),
        _Utils_Tuple2("frac45", "⅘"),
        _Utils_Tuple2("frac56", "⅚"),
        _Utils_Tuple2("frac58", "⅝"),
        _Utils_Tuple2("frac78", "⅞"),
        _Utils_Tuple2("frasl", "⁄"),
        _Utils_Tuple2("frown", "⌢"),
        _Utils_Tuple2("fscr", "\uD835\uDCBB"),
        _Utils_Tuple2("Fscr", "ℱ"),
        _Utils_Tuple2("gacute", "ǵ"),
        _Utils_Tuple2("Gamma", "Γ"),
        _Utils_Tuple2("gamma", "γ"),
        _Utils_Tuple2("Gammad", "Ϝ"),
        _Utils_Tuple2("gammad", "ϝ"),
        _Utils_Tuple2("gap", "⪆"),
        _Utils_Tuple2("Gbreve", "Ğ"),
        _Utils_Tuple2("gbreve", "ğ"),
        _Utils_Tuple2("Gcedil", "Ģ"),
        _Utils_Tuple2("Gcirc", "Ĝ"),
        _Utils_Tuple2("gcirc", "ĝ"),
        _Utils_Tuple2("Gcy", "Г"),
        _Utils_Tuple2("gcy", "г"),
        _Utils_Tuple2("Gdot", "Ġ"),
        _Utils_Tuple2("gdot", "ġ"),
        _Utils_Tuple2("ge", "≥"),
        _Utils_Tuple2("gE", "≧"),
        _Utils_Tuple2("gEl", "⪌"),
        _Utils_Tuple2("gel", "⋛"),
        _Utils_Tuple2("geq", "≥"),
        _Utils_Tuple2("geqq", "≧"),
        _Utils_Tuple2("geqslant", "⩾"),
        _Utils_Tuple2("gescc", "⪩"),
        _Utils_Tuple2("ges", "⩾"),
        _Utils_Tuple2("gesdot", "⪀"),
        _Utils_Tuple2("gesdoto", "⪂"),
        _Utils_Tuple2("gesdotol", "⪄"),
        _Utils_Tuple2("gesl", "⋛︀"),
        _Utils_Tuple2("gesles", "⪔"),
        _Utils_Tuple2("Gfr", "\uD835\uDD0A"),
        _Utils_Tuple2("gfr", "\uD835\uDD24"),
        _Utils_Tuple2("gg", "≫"),
        _Utils_Tuple2("Gg", "⋙"),
        _Utils_Tuple2("ggg", "⋙"),
        _Utils_Tuple2("gimel", "ℷ"),
        _Utils_Tuple2("GJcy", "Ѓ"),
        _Utils_Tuple2("gjcy", "ѓ"),
        _Utils_Tuple2("gla", "⪥"),
        _Utils_Tuple2("gl", "≷"),
        _Utils_Tuple2("glE", "⪒"),
        _Utils_Tuple2("glj", "⪤"),
        _Utils_Tuple2("gnap", "⪊"),
        _Utils_Tuple2("gnapprox", "⪊"),
        _Utils_Tuple2("gne", "⪈"),
        _Utils_Tuple2("gnE", "≩"),
        _Utils_Tuple2("gneq", "⪈"),
        _Utils_Tuple2("gneqq", "≩"),
        _Utils_Tuple2("gnsim", "⋧"),
        _Utils_Tuple2("Gopf", "\uD835\uDD3E"),
        _Utils_Tuple2("gopf", "\uD835\uDD58"),
        _Utils_Tuple2("grave", "`"),
        _Utils_Tuple2("GreaterEqual", "≥"),
        _Utils_Tuple2("GreaterEqualLess", "⋛"),
        _Utils_Tuple2("GreaterFullEqual", "≧"),
        _Utils_Tuple2("GreaterGreater", "⪢"),
        _Utils_Tuple2("GreaterLess", "≷"),
        _Utils_Tuple2("GreaterSlantEqual", "⩾"),
        _Utils_Tuple2("GreaterTilde", "≳"),
        _Utils_Tuple2("Gscr", "\uD835\uDCA2"),
        _Utils_Tuple2("gscr", "ℊ"),
        _Utils_Tuple2("gsim", "≳"),
        _Utils_Tuple2("gsime", "⪎"),
        _Utils_Tuple2("gsiml", "⪐"),
        _Utils_Tuple2("gtcc", "⪧"),
        _Utils_Tuple2("gtcir", "⩺"),
        _Utils_Tuple2("gt", ">"),
        _Utils_Tuple2("GT", ">"),
        _Utils_Tuple2("Gt", "≫"),
        _Utils_Tuple2("gtdot", "⋗"),
        _Utils_Tuple2("gtlPar", "⦕"),
        _Utils_Tuple2("gtquest", "⩼"),
        _Utils_Tuple2("gtrapprox", "⪆"),
        _Utils_Tuple2("gtrarr", "⥸"),
        _Utils_Tuple2("gtrdot", "⋗"),
        _Utils_Tuple2("gtreqless", "⋛"),
        _Utils_Tuple2("gtreqqless", "⪌"),
        _Utils_Tuple2("gtrless", "≷"),
        _Utils_Tuple2("gtrsim", "≳"),
        _Utils_Tuple2("gvertneqq", "≩︀"),
        _Utils_Tuple2("gvnE", "≩︀"),
        _Utils_Tuple2("Hacek", "ˇ"),
        _Utils_Tuple2("hairsp", " "),
        _Utils_Tuple2("half", "\xbd"),
        _Utils_Tuple2("hamilt", "ℋ"),
        _Utils_Tuple2("HARDcy", "Ъ"),
        _Utils_Tuple2("hardcy", "ъ"),
        _Utils_Tuple2("harrcir", "⥈"),
        _Utils_Tuple2("harr", "↔"),
        _Utils_Tuple2("hArr", "⇔"),
        _Utils_Tuple2("harrw", "↭"),
        _Utils_Tuple2("Hat", "^"),
        _Utils_Tuple2("hbar", "ℏ"),
        _Utils_Tuple2("Hcirc", "Ĥ"),
        _Utils_Tuple2("hcirc", "ĥ"),
        _Utils_Tuple2("hearts", "♥"),
        _Utils_Tuple2("heartsuit", "♥"),
        _Utils_Tuple2("hellip", "…"),
        _Utils_Tuple2("hercon", "⊹"),
        _Utils_Tuple2("hfr", "\uD835\uDD25"),
        _Utils_Tuple2("Hfr", "ℌ"),
        _Utils_Tuple2("HilbertSpace", "ℋ"),
        _Utils_Tuple2("hksearow", "⤥"),
        _Utils_Tuple2("hkswarow", "⤦"),
        _Utils_Tuple2("hoarr", "⇿"),
        _Utils_Tuple2("homtht", "∻"),
        _Utils_Tuple2("hookleftarrow", "↩"),
        _Utils_Tuple2("hookrightarrow", "↪"),
        _Utils_Tuple2("hopf", "\uD835\uDD59"),
        _Utils_Tuple2("Hopf", "ℍ"),
        _Utils_Tuple2("horbar", "―"),
        _Utils_Tuple2("HorizontalLine", "─"),
        _Utils_Tuple2("hscr", "\uD835\uDCBD"),
        _Utils_Tuple2("Hscr", "ℋ"),
        _Utils_Tuple2("hslash", "ℏ"),
        _Utils_Tuple2("Hstrok", "Ħ"),
        _Utils_Tuple2("hstrok", "ħ"),
        _Utils_Tuple2("HumpDownHump", "≎"),
        _Utils_Tuple2("HumpEqual", "≏"),
        _Utils_Tuple2("hybull", "⁃"),
        _Utils_Tuple2("hyphen", "‐"),
        _Utils_Tuple2("Iacute", "\xcd"),
        _Utils_Tuple2("iacute", "\xed"),
        _Utils_Tuple2("ic", "⁣"),
        _Utils_Tuple2("Icirc", "\xce"),
        _Utils_Tuple2("icirc", "\xee"),
        _Utils_Tuple2("Icy", "И"),
        _Utils_Tuple2("icy", "и"),
        _Utils_Tuple2("Idot", "İ"),
        _Utils_Tuple2("IEcy", "Е"),
        _Utils_Tuple2("iecy", "е"),
        _Utils_Tuple2("iexcl", "\xa1"),
        _Utils_Tuple2("iff", "⇔"),
        _Utils_Tuple2("ifr", "\uD835\uDD26"),
        _Utils_Tuple2("Ifr", "ℑ"),
        _Utils_Tuple2("Igrave", "\xcc"),
        _Utils_Tuple2("igrave", "\xec"),
        _Utils_Tuple2("ii", "ⅈ"),
        _Utils_Tuple2("iiiint", "⨌"),
        _Utils_Tuple2("iiint", "∭"),
        _Utils_Tuple2("iinfin", "⧜"),
        _Utils_Tuple2("iiota", "℩"),
        _Utils_Tuple2("IJlig", "Ĳ"),
        _Utils_Tuple2("ijlig", "ĳ"),
        _Utils_Tuple2("Imacr", "Ī"),
        _Utils_Tuple2("imacr", "ī"),
        _Utils_Tuple2("image", "ℑ"),
        _Utils_Tuple2("ImaginaryI", "ⅈ"),
        _Utils_Tuple2("imagline", "ℐ"),
        _Utils_Tuple2("imagpart", "ℑ"),
        _Utils_Tuple2("imath", "ı"),
        _Utils_Tuple2("Im", "ℑ"),
        _Utils_Tuple2("imof", "⊷"),
        _Utils_Tuple2("imped", "Ƶ"),
        _Utils_Tuple2("Implies", "⇒"),
        _Utils_Tuple2("incare", "℅"),
        _Utils_Tuple2("in", "∈"),
        _Utils_Tuple2("infin", "∞"),
        _Utils_Tuple2("infintie", "⧝"),
        _Utils_Tuple2("inodot", "ı"),
        _Utils_Tuple2("intcal", "⊺"),
        _Utils_Tuple2("int", "∫"),
        _Utils_Tuple2("Int", "∬"),
        _Utils_Tuple2("integers", "ℤ"),
        _Utils_Tuple2("Integral", "∫"),
        _Utils_Tuple2("intercal", "⊺"),
        _Utils_Tuple2("Intersection", "⋂"),
        _Utils_Tuple2("intlarhk", "⨗"),
        _Utils_Tuple2("intprod", "⨼"),
        _Utils_Tuple2("InvisibleComma", "⁣"),
        _Utils_Tuple2("InvisibleTimes", "⁢"),
        _Utils_Tuple2("IOcy", "Ё"),
        _Utils_Tuple2("iocy", "ё"),
        _Utils_Tuple2("Iogon", "Į"),
        _Utils_Tuple2("iogon", "į"),
        _Utils_Tuple2("Iopf", "\uD835\uDD40"),
        _Utils_Tuple2("iopf", "\uD835\uDD5A"),
        _Utils_Tuple2("Iota", "Ι"),
        _Utils_Tuple2("iota", "ι"),
        _Utils_Tuple2("iprod", "⨼"),
        _Utils_Tuple2("iquest", "\xbf"),
        _Utils_Tuple2("iscr", "\uD835\uDCBE"),
        _Utils_Tuple2("Iscr", "ℐ"),
        _Utils_Tuple2("isin", "∈"),
        _Utils_Tuple2("isindot", "⋵"),
        _Utils_Tuple2("isinE", "⋹"),
        _Utils_Tuple2("isins", "⋴"),
        _Utils_Tuple2("isinsv", "⋳"),
        _Utils_Tuple2("isinv", "∈"),
        _Utils_Tuple2("it", "⁢"),
        _Utils_Tuple2("Itilde", "Ĩ"),
        _Utils_Tuple2("itilde", "ĩ"),
        _Utils_Tuple2("Iukcy", "І"),
        _Utils_Tuple2("iukcy", "і"),
        _Utils_Tuple2("Iuml", "\xcf"),
        _Utils_Tuple2("iuml", "\xef"),
        _Utils_Tuple2("Jcirc", "Ĵ"),
        _Utils_Tuple2("jcirc", "ĵ"),
        _Utils_Tuple2("Jcy", "Й"),
        _Utils_Tuple2("jcy", "й"),
        _Utils_Tuple2("Jfr", "\uD835\uDD0D"),
        _Utils_Tuple2("jfr", "\uD835\uDD27"),
        _Utils_Tuple2("jmath", "ȷ"),
        _Utils_Tuple2("Jopf", "\uD835\uDD41"),
        _Utils_Tuple2("jopf", "\uD835\uDD5B"),
        _Utils_Tuple2("Jscr", "\uD835\uDCA5"),
        _Utils_Tuple2("jscr", "\uD835\uDCBF"),
        _Utils_Tuple2("Jsercy", "Ј"),
        _Utils_Tuple2("jsercy", "ј"),
        _Utils_Tuple2("Jukcy", "Є"),
        _Utils_Tuple2("jukcy", "є"),
        _Utils_Tuple2("Kappa", "Κ"),
        _Utils_Tuple2("kappa", "κ"),
        _Utils_Tuple2("kappav", "ϰ"),
        _Utils_Tuple2("Kcedil", "Ķ"),
        _Utils_Tuple2("kcedil", "ķ"),
        _Utils_Tuple2("Kcy", "К"),
        _Utils_Tuple2("kcy", "к"),
        _Utils_Tuple2("Kfr", "\uD835\uDD0E"),
        _Utils_Tuple2("kfr", "\uD835\uDD28"),
        _Utils_Tuple2("kgreen", "ĸ"),
        _Utils_Tuple2("KHcy", "Х"),
        _Utils_Tuple2("khcy", "х"),
        _Utils_Tuple2("KJcy", "Ќ"),
        _Utils_Tuple2("kjcy", "ќ"),
        _Utils_Tuple2("Kopf", "\uD835\uDD42"),
        _Utils_Tuple2("kopf", "\uD835\uDD5C"),
        _Utils_Tuple2("Kscr", "\uD835\uDCA6"),
        _Utils_Tuple2("kscr", "\uD835\uDCC0"),
        _Utils_Tuple2("lAarr", "⇚"),
        _Utils_Tuple2("Lacute", "Ĺ"),
        _Utils_Tuple2("lacute", "ĺ"),
        _Utils_Tuple2("laemptyv", "⦴"),
        _Utils_Tuple2("lagran", "ℒ"),
        _Utils_Tuple2("Lambda", "Λ"),
        _Utils_Tuple2("lambda", "λ"),
        _Utils_Tuple2("lang", "⟨"),
        _Utils_Tuple2("Lang", "⟪"),
        _Utils_Tuple2("langd", "⦑"),
        _Utils_Tuple2("langle", "⟨"),
        _Utils_Tuple2("lap", "⪅"),
        _Utils_Tuple2("Laplacetrf", "ℒ"),
        _Utils_Tuple2("laquo", "\xab"),
        _Utils_Tuple2("larrb", "⇤"),
        _Utils_Tuple2("larrbfs", "⤟"),
        _Utils_Tuple2("larr", "←"),
        _Utils_Tuple2("Larr", "↞"),
        _Utils_Tuple2("lArr", "⇐"),
        _Utils_Tuple2("larrfs", "⤝"),
        _Utils_Tuple2("larrhk", "↩"),
        _Utils_Tuple2("larrlp", "↫"),
        _Utils_Tuple2("larrpl", "⤹"),
        _Utils_Tuple2("larrsim", "⥳"),
        _Utils_Tuple2("larrtl", "↢"),
        _Utils_Tuple2("latail", "⤙"),
        _Utils_Tuple2("lAtail", "⤛"),
        _Utils_Tuple2("lat", "⪫"),
        _Utils_Tuple2("late", "⪭"),
        _Utils_Tuple2("lates", "⪭︀"),
        _Utils_Tuple2("lbarr", "⤌"),
        _Utils_Tuple2("lBarr", "⤎"),
        _Utils_Tuple2("lbbrk", "❲"),
        _Utils_Tuple2("lbrace", "{"),
        _Utils_Tuple2("lbrack", "["),
        _Utils_Tuple2("lbrke", "⦋"),
        _Utils_Tuple2("lbrksld", "⦏"),
        _Utils_Tuple2("lbrkslu", "⦍"),
        _Utils_Tuple2("Lcaron", "Ľ"),
        _Utils_Tuple2("lcaron", "ľ"),
        _Utils_Tuple2("Lcedil", "Ļ"),
        _Utils_Tuple2("lcedil", "ļ"),
        _Utils_Tuple2("lceil", "⌈"),
        _Utils_Tuple2("lcub", "{"),
        _Utils_Tuple2("Lcy", "Л"),
        _Utils_Tuple2("lcy", "л"),
        _Utils_Tuple2("ldca", "⤶"),
        _Utils_Tuple2("ldquo", "“"),
        _Utils_Tuple2("ldquor", "„"),
        _Utils_Tuple2("ldrdhar", "⥧"),
        _Utils_Tuple2("ldrushar", "⥋"),
        _Utils_Tuple2("ldsh", "↲"),
        _Utils_Tuple2("le", "≤"),
        _Utils_Tuple2("lE", "≦"),
        _Utils_Tuple2("LeftAngleBracket", "⟨"),
        _Utils_Tuple2("LeftArrowBar", "⇤"),
        _Utils_Tuple2("leftarrow", "←"),
        _Utils_Tuple2("LeftArrow", "←"),
        _Utils_Tuple2("Leftarrow", "⇐"),
        _Utils_Tuple2("LeftArrowRightArrow", "⇆"),
        _Utils_Tuple2("leftarrowtail", "↢"),
        _Utils_Tuple2("LeftCeiling", "⌈"),
        _Utils_Tuple2("LeftDoubleBracket", "⟦"),
        _Utils_Tuple2("LeftDownTeeVector", "⥡"),
        _Utils_Tuple2("LeftDownVectorBar", "⥙"),
        _Utils_Tuple2("LeftDownVector", "⇃"),
        _Utils_Tuple2("LeftFloor", "⌊"),
        _Utils_Tuple2("leftharpoondown", "↽"),
        _Utils_Tuple2("leftharpoonup", "↼"),
        _Utils_Tuple2("leftleftarrows", "⇇"),
        _Utils_Tuple2("leftrightarrow", "↔"),
        _Utils_Tuple2("LeftRightArrow", "↔"),
        _Utils_Tuple2("Leftrightarrow", "⇔"),
        _Utils_Tuple2("leftrightarrows", "⇆"),
        _Utils_Tuple2("leftrightharpoons", "⇋"),
        _Utils_Tuple2("leftrightsquigarrow", "↭"),
        _Utils_Tuple2("LeftRightVector", "⥎"),
        _Utils_Tuple2("LeftTeeArrow", "↤"),
        _Utils_Tuple2("LeftTee", "⊣"),
        _Utils_Tuple2("LeftTeeVector", "⥚"),
        _Utils_Tuple2("leftthreetimes", "⋋"),
        _Utils_Tuple2("LeftTriangleBar", "⧏"),
        _Utils_Tuple2("LeftTriangle", "⊲"),
        _Utils_Tuple2("LeftTriangleEqual", "⊴"),
        _Utils_Tuple2("LeftUpDownVector", "⥑"),
        _Utils_Tuple2("LeftUpTeeVector", "⥠"),
        _Utils_Tuple2("LeftUpVectorBar", "⥘"),
        _Utils_Tuple2("LeftUpVector", "↿"),
        _Utils_Tuple2("LeftVectorBar", "⥒"),
        _Utils_Tuple2("LeftVector", "↼"),
        _Utils_Tuple2("lEg", "⪋"),
        _Utils_Tuple2("leg", "⋚"),
        _Utils_Tuple2("leq", "≤"),
        _Utils_Tuple2("leqq", "≦"),
        _Utils_Tuple2("leqslant", "⩽"),
        _Utils_Tuple2("lescc", "⪨"),
        _Utils_Tuple2("les", "⩽"),
        _Utils_Tuple2("lesdot", "⩿"),
        _Utils_Tuple2("lesdoto", "⪁"),
        _Utils_Tuple2("lesdotor", "⪃"),
        _Utils_Tuple2("lesg", "⋚︀"),
        _Utils_Tuple2("lesges", "⪓"),
        _Utils_Tuple2("lessapprox", "⪅"),
        _Utils_Tuple2("lessdot", "⋖"),
        _Utils_Tuple2("lesseqgtr", "⋚"),
        _Utils_Tuple2("lesseqqgtr", "⪋"),
        _Utils_Tuple2("LessEqualGreater", "⋚"),
        _Utils_Tuple2("LessFullEqual", "≦"),
        _Utils_Tuple2("LessGreater", "≶"),
        _Utils_Tuple2("lessgtr", "≶"),
        _Utils_Tuple2("LessLess", "⪡"),
        _Utils_Tuple2("lesssim", "≲"),
        _Utils_Tuple2("LessSlantEqual", "⩽"),
        _Utils_Tuple2("LessTilde", "≲"),
        _Utils_Tuple2("lfisht", "⥼"),
        _Utils_Tuple2("lfloor", "⌊"),
        _Utils_Tuple2("Lfr", "\uD835\uDD0F"),
        _Utils_Tuple2("lfr", "\uD835\uDD29"),
        _Utils_Tuple2("lg", "≶"),
        _Utils_Tuple2("lgE", "⪑"),
        _Utils_Tuple2("lHar", "⥢"),
        _Utils_Tuple2("lhard", "↽"),
        _Utils_Tuple2("lharu", "↼"),
        _Utils_Tuple2("lharul", "⥪"),
        _Utils_Tuple2("lhblk", "▄"),
        _Utils_Tuple2("LJcy", "Љ"),
        _Utils_Tuple2("ljcy", "љ"),
        _Utils_Tuple2("llarr", "⇇"),
        _Utils_Tuple2("ll", "≪"),
        _Utils_Tuple2("Ll", "⋘"),
        _Utils_Tuple2("llcorner", "⌞"),
        _Utils_Tuple2("Lleftarrow", "⇚"),
        _Utils_Tuple2("llhard", "⥫"),
        _Utils_Tuple2("lltri", "◺"),
        _Utils_Tuple2("Lmidot", "Ŀ"),
        _Utils_Tuple2("lmidot", "ŀ"),
        _Utils_Tuple2("lmoustache", "⎰"),
        _Utils_Tuple2("lmoust", "⎰"),
        _Utils_Tuple2("lnap", "⪉"),
        _Utils_Tuple2("lnapprox", "⪉"),
        _Utils_Tuple2("lne", "⪇"),
        _Utils_Tuple2("lnE", "≨"),
        _Utils_Tuple2("lneq", "⪇"),
        _Utils_Tuple2("lneqq", "≨"),
        _Utils_Tuple2("lnsim", "⋦"),
        _Utils_Tuple2("loang", "⟬"),
        _Utils_Tuple2("loarr", "⇽"),
        _Utils_Tuple2("lobrk", "⟦"),
        _Utils_Tuple2("longleftarrow", "⟵"),
        _Utils_Tuple2("LongLeftArrow", "⟵"),
        _Utils_Tuple2("Longleftarrow", "⟸"),
        _Utils_Tuple2("longleftrightarrow", "⟷"),
        _Utils_Tuple2("LongLeftRightArrow", "⟷"),
        _Utils_Tuple2("Longleftrightarrow", "⟺"),
        _Utils_Tuple2("longmapsto", "⟼"),
        _Utils_Tuple2("longrightarrow", "⟶"),
        _Utils_Tuple2("LongRightArrow", "⟶"),
        _Utils_Tuple2("Longrightarrow", "⟹"),
        _Utils_Tuple2("looparrowleft", "↫"),
        _Utils_Tuple2("looparrowright", "↬"),
        _Utils_Tuple2("lopar", "⦅"),
        _Utils_Tuple2("Lopf", "\uD835\uDD43"),
        _Utils_Tuple2("lopf", "\uD835\uDD5D"),
        _Utils_Tuple2("loplus", "⨭"),
        _Utils_Tuple2("lotimes", "⨴"),
        _Utils_Tuple2("lowast", "∗"),
        _Utils_Tuple2("lowbar", "_"),
        _Utils_Tuple2("LowerLeftArrow", "↙"),
        _Utils_Tuple2("LowerRightArrow", "↘"),
        _Utils_Tuple2("loz", "◊"),
        _Utils_Tuple2("lozenge", "◊"),
        _Utils_Tuple2("lozf", "⧫"),
        _Utils_Tuple2("lpar", "("),
        _Utils_Tuple2("lparlt", "⦓"),
        _Utils_Tuple2("lrarr", "⇆"),
        _Utils_Tuple2("lrcorner", "⌟"),
        _Utils_Tuple2("lrhar", "⇋"),
        _Utils_Tuple2("lrhard", "⥭"),
        _Utils_Tuple2("lrm", "‎"),
        _Utils_Tuple2("lrtri", "⊿"),
        _Utils_Tuple2("lsaquo", "‹"),
        _Utils_Tuple2("lscr", "\uD835\uDCC1"),
        _Utils_Tuple2("Lscr", "ℒ"),
        _Utils_Tuple2("lsh", "↰"),
        _Utils_Tuple2("Lsh", "↰"),
        _Utils_Tuple2("lsim", "≲"),
        _Utils_Tuple2("lsime", "⪍"),
        _Utils_Tuple2("lsimg", "⪏"),
        _Utils_Tuple2("lsqb", "["),
        _Utils_Tuple2("lsquo", "‘"),
        _Utils_Tuple2("lsquor", "‚"),
        _Utils_Tuple2("Lstrok", "Ł"),
        _Utils_Tuple2("lstrok", "ł"),
        _Utils_Tuple2("ltcc", "⪦"),
        _Utils_Tuple2("ltcir", "⩹"),
        _Utils_Tuple2("lt", "<"),
        _Utils_Tuple2("LT", "<"),
        _Utils_Tuple2("Lt", "≪"),
        _Utils_Tuple2("ltdot", "⋖"),
        _Utils_Tuple2("lthree", "⋋"),
        _Utils_Tuple2("ltimes", "⋉"),
        _Utils_Tuple2("ltlarr", "⥶"),
        _Utils_Tuple2("ltquest", "⩻"),
        _Utils_Tuple2("ltri", "◃"),
        _Utils_Tuple2("ltrie", "⊴"),
        _Utils_Tuple2("ltrif", "◂"),
        _Utils_Tuple2("ltrPar", "⦖"),
        _Utils_Tuple2("lurdshar", "⥊"),
        _Utils_Tuple2("luruhar", "⥦"),
        _Utils_Tuple2("lvertneqq", "≨︀"),
        _Utils_Tuple2("lvnE", "≨︀"),
        _Utils_Tuple2("macr", "\xaf"),
        _Utils_Tuple2("male", "♂"),
        _Utils_Tuple2("malt", "✠"),
        _Utils_Tuple2("maltese", "✠"),
        _Utils_Tuple2("Map", "⤅"),
        _Utils_Tuple2("map", "↦"),
        _Utils_Tuple2("mapsto", "↦"),
        _Utils_Tuple2("mapstodown", "↧"),
        _Utils_Tuple2("mapstoleft", "↤"),
        _Utils_Tuple2("mapstoup", "↥"),
        _Utils_Tuple2("marker", "▮"),
        _Utils_Tuple2("mcomma", "⨩"),
        _Utils_Tuple2("Mcy", "М"),
        _Utils_Tuple2("mcy", "м"),
        _Utils_Tuple2("mdash", "—"),
        _Utils_Tuple2("mDDot", "∺"),
        _Utils_Tuple2("measuredangle", "∡"),
        _Utils_Tuple2("MediumSpace", " "),
        _Utils_Tuple2("Mellintrf", "ℳ"),
        _Utils_Tuple2("Mfr", "\uD835\uDD10"),
        _Utils_Tuple2("mfr", "\uD835\uDD2A"),
        _Utils_Tuple2("mho", "℧"),
        _Utils_Tuple2("micro", "\xb5"),
        _Utils_Tuple2("midast", "*"),
        _Utils_Tuple2("midcir", "⫰"),
        _Utils_Tuple2("mid", "∣"),
        _Utils_Tuple2("middot", "\xb7"),
        _Utils_Tuple2("minusb", "⊟"),
        _Utils_Tuple2("minus", "−"),
        _Utils_Tuple2("minusd", "∸"),
        _Utils_Tuple2("minusdu", "⨪"),
        _Utils_Tuple2("MinusPlus", "∓"),
        _Utils_Tuple2("mlcp", "⫛"),
        _Utils_Tuple2("mldr", "…"),
        _Utils_Tuple2("mnplus", "∓"),
        _Utils_Tuple2("models", "⊧"),
        _Utils_Tuple2("Mopf", "\uD835\uDD44"),
        _Utils_Tuple2("mopf", "\uD835\uDD5E"),
        _Utils_Tuple2("mp", "∓"),
        _Utils_Tuple2("mscr", "\uD835\uDCC2"),
        _Utils_Tuple2("Mscr", "ℳ"),
        _Utils_Tuple2("mstpos", "∾"),
        _Utils_Tuple2("Mu", "Μ"),
        _Utils_Tuple2("mu", "μ"),
        _Utils_Tuple2("multimap", "⊸"),
        _Utils_Tuple2("mumap", "⊸"),
        _Utils_Tuple2("nabla", "∇"),
        _Utils_Tuple2("Nacute", "Ń"),
        _Utils_Tuple2("nacute", "ń"),
        _Utils_Tuple2("nang", "∠⃒"),
        _Utils_Tuple2("nap", "≉"),
        _Utils_Tuple2("napE", "⩰̸"),
        _Utils_Tuple2("napid", "≋̸"),
        _Utils_Tuple2("napos", "ŉ"),
        _Utils_Tuple2("napprox", "≉"),
        _Utils_Tuple2("natural", "♮"),
        _Utils_Tuple2("naturals", "ℕ"),
        _Utils_Tuple2("natur", "♮"),
        _Utils_Tuple2("nbsp", "\xa0"),
        _Utils_Tuple2("nbump", "≎̸"),
        _Utils_Tuple2("nbumpe", "≏̸"),
        _Utils_Tuple2("ncap", "⩃"),
        _Utils_Tuple2("Ncaron", "Ň"),
        _Utils_Tuple2("ncaron", "ň"),
        _Utils_Tuple2("Ncedil", "Ņ"),
        _Utils_Tuple2("ncedil", "ņ"),
        _Utils_Tuple2("ncong", "≇"),
        _Utils_Tuple2("ncongdot", "⩭̸"),
        _Utils_Tuple2("ncup", "⩂"),
        _Utils_Tuple2("Ncy", "Н"),
        _Utils_Tuple2("ncy", "н"),
        _Utils_Tuple2("ndash", "–"),
        _Utils_Tuple2("nearhk", "⤤"),
        _Utils_Tuple2("nearr", "↗"),
        _Utils_Tuple2("neArr", "⇗"),
        _Utils_Tuple2("nearrow", "↗"),
        _Utils_Tuple2("ne", "≠"),
        _Utils_Tuple2("nedot", "≐̸"),
        _Utils_Tuple2("NegativeMediumSpace", "​"),
        _Utils_Tuple2("NegativeThickSpace", "​"),
        _Utils_Tuple2("NegativeThinSpace", "​"),
        _Utils_Tuple2("NegativeVeryThinSpace", "​"),
        _Utils_Tuple2("nequiv", "≢"),
        _Utils_Tuple2("nesear", "⤨"),
        _Utils_Tuple2("nesim", "≂̸"),
        _Utils_Tuple2("NestedGreaterGreater", "≫"),
        _Utils_Tuple2("NestedLessLess", "≪"),
        _Utils_Tuple2("NewLine", "\n"),
        _Utils_Tuple2("nexist", "∄"),
        _Utils_Tuple2("nexists", "∄"),
        _Utils_Tuple2("Nfr", "\uD835\uDD11"),
        _Utils_Tuple2("nfr", "\uD835\uDD2B"),
        _Utils_Tuple2("ngE", "≧̸"),
        _Utils_Tuple2("nge", "≱"),
        _Utils_Tuple2("ngeq", "≱"),
        _Utils_Tuple2("ngeqq", "≧̸"),
        _Utils_Tuple2("ngeqslant", "⩾̸"),
        _Utils_Tuple2("nges", "⩾̸"),
        _Utils_Tuple2("nGg", "⋙̸"),
        _Utils_Tuple2("ngsim", "≵"),
        _Utils_Tuple2("nGt", "≫⃒"),
        _Utils_Tuple2("ngt", "≯"),
        _Utils_Tuple2("ngtr", "≯"),
        _Utils_Tuple2("nGtv", "≫̸"),
        _Utils_Tuple2("nharr", "↮"),
        _Utils_Tuple2("nhArr", "⇎"),
        _Utils_Tuple2("nhpar", "⫲"),
        _Utils_Tuple2("ni", "∋"),
        _Utils_Tuple2("nis", "⋼"),
        _Utils_Tuple2("nisd", "⋺"),
        _Utils_Tuple2("niv", "∋"),
        _Utils_Tuple2("NJcy", "Њ"),
        _Utils_Tuple2("njcy", "њ"),
        _Utils_Tuple2("nlarr", "↚"),
        _Utils_Tuple2("nlArr", "⇍"),
        _Utils_Tuple2("nldr", "‥"),
        _Utils_Tuple2("nlE", "≦̸"),
        _Utils_Tuple2("nle", "≰"),
        _Utils_Tuple2("nleftarrow", "↚"),
        _Utils_Tuple2("nLeftarrow", "⇍"),
        _Utils_Tuple2("nleftrightarrow", "↮"),
        _Utils_Tuple2("nLeftrightarrow", "⇎"),
        _Utils_Tuple2("nleq", "≰"),
        _Utils_Tuple2("nleqq", "≦̸"),
        _Utils_Tuple2("nleqslant", "⩽̸"),
        _Utils_Tuple2("nles", "⩽̸"),
        _Utils_Tuple2("nless", "≮"),
        _Utils_Tuple2("nLl", "⋘̸"),
        _Utils_Tuple2("nlsim", "≴"),
        _Utils_Tuple2("nLt", "≪⃒"),
        _Utils_Tuple2("nlt", "≮"),
        _Utils_Tuple2("nltri", "⋪"),
        _Utils_Tuple2("nltrie", "⋬"),
        _Utils_Tuple2("nLtv", "≪̸"),
        _Utils_Tuple2("nmid", "∤"),
        _Utils_Tuple2("NoBreak", "⁠"),
        _Utils_Tuple2("NonBreakingSpace", "\xa0"),
        _Utils_Tuple2("nopf", "\uD835\uDD5F"),
        _Utils_Tuple2("Nopf", "ℕ"),
        _Utils_Tuple2("Not", "⫬"),
        _Utils_Tuple2("not", "\xac"),
        _Utils_Tuple2("NotCongruent", "≢"),
        _Utils_Tuple2("NotCupCap", "≭"),
        _Utils_Tuple2("NotDoubleVerticalBar", "∦"),
        _Utils_Tuple2("NotElement", "∉"),
        _Utils_Tuple2("NotEqual", "≠"),
        _Utils_Tuple2("NotEqualTilde", "≂̸"),
        _Utils_Tuple2("NotExists", "∄"),
        _Utils_Tuple2("NotGreater", "≯"),
        _Utils_Tuple2("NotGreaterEqual", "≱"),
        _Utils_Tuple2("NotGreaterFullEqual", "≧̸"),
        _Utils_Tuple2("NotGreaterGreater", "≫̸"),
        _Utils_Tuple2("NotGreaterLess", "≹"),
        _Utils_Tuple2("NotGreaterSlantEqual", "⩾̸"),
        _Utils_Tuple2("NotGreaterTilde", "≵"),
        _Utils_Tuple2("NotHumpDownHump", "≎̸"),
        _Utils_Tuple2("NotHumpEqual", "≏̸"),
        _Utils_Tuple2("notin", "∉"),
        _Utils_Tuple2("notindot", "⋵̸"),
        _Utils_Tuple2("notinE", "⋹̸"),
        _Utils_Tuple2("notinva", "∉"),
        _Utils_Tuple2("notinvb", "⋷"),
        _Utils_Tuple2("notinvc", "⋶"),
        _Utils_Tuple2("NotLeftTriangleBar", "⧏̸"),
        _Utils_Tuple2("NotLeftTriangle", "⋪"),
        _Utils_Tuple2("NotLeftTriangleEqual", "⋬"),
        _Utils_Tuple2("NotLess", "≮"),
        _Utils_Tuple2("NotLessEqual", "≰"),
        _Utils_Tuple2("NotLessGreater", "≸"),
        _Utils_Tuple2("NotLessLess", "≪̸"),
        _Utils_Tuple2("NotLessSlantEqual", "⩽̸"),
        _Utils_Tuple2("NotLessTilde", "≴"),
        _Utils_Tuple2("NotNestedGreaterGreater", "⪢̸"),
        _Utils_Tuple2("NotNestedLessLess", "⪡̸"),
        _Utils_Tuple2("notni", "∌"),
        _Utils_Tuple2("notniva", "∌"),
        _Utils_Tuple2("notnivb", "⋾"),
        _Utils_Tuple2("notnivc", "⋽"),
        _Utils_Tuple2("NotPrecedes", "⊀"),
        _Utils_Tuple2("NotPrecedesEqual", "⪯̸"),
        _Utils_Tuple2("NotPrecedesSlantEqual", "⋠"),
        _Utils_Tuple2("NotReverseElement", "∌"),
        _Utils_Tuple2("NotRightTriangleBar", "⧐̸"),
        _Utils_Tuple2("NotRightTriangle", "⋫"),
        _Utils_Tuple2("NotRightTriangleEqual", "⋭"),
        _Utils_Tuple2("NotSquareSubset", "⊏̸"),
        _Utils_Tuple2("NotSquareSubsetEqual", "⋢"),
        _Utils_Tuple2("NotSquareSuperset", "⊐̸"),
        _Utils_Tuple2("NotSquareSupersetEqual", "⋣"),
        _Utils_Tuple2("NotSubset", "⊂⃒"),
        _Utils_Tuple2("NotSubsetEqual", "⊈"),
        _Utils_Tuple2("NotSucceeds", "⊁"),
        _Utils_Tuple2("NotSucceedsEqual", "⪰̸"),
        _Utils_Tuple2("NotSucceedsSlantEqual", "⋡"),
        _Utils_Tuple2("NotSucceedsTilde", "≿̸"),
        _Utils_Tuple2("NotSuperset", "⊃⃒"),
        _Utils_Tuple2("NotSupersetEqual", "⊉"),
        _Utils_Tuple2("NotTilde", "≁"),
        _Utils_Tuple2("NotTildeEqual", "≄"),
        _Utils_Tuple2("NotTildeFullEqual", "≇"),
        _Utils_Tuple2("NotTildeTilde", "≉"),
        _Utils_Tuple2("NotVerticalBar", "∤"),
        _Utils_Tuple2("nparallel", "∦"),
        _Utils_Tuple2("npar", "∦"),
        _Utils_Tuple2("nparsl", "⫽⃥"),
        _Utils_Tuple2("npart", "∂̸"),
        _Utils_Tuple2("npolint", "⨔"),
        _Utils_Tuple2("npr", "⊀"),
        _Utils_Tuple2("nprcue", "⋠"),
        _Utils_Tuple2("nprec", "⊀"),
        _Utils_Tuple2("npreceq", "⪯̸"),
        _Utils_Tuple2("npre", "⪯̸"),
        _Utils_Tuple2("nrarrc", "⤳̸"),
        _Utils_Tuple2("nrarr", "↛"),
        _Utils_Tuple2("nrArr", "⇏"),
        _Utils_Tuple2("nrarrw", "↝̸"),
        _Utils_Tuple2("nrightarrow", "↛"),
        _Utils_Tuple2("nRightarrow", "⇏"),
        _Utils_Tuple2("nrtri", "⋫"),
        _Utils_Tuple2("nrtrie", "⋭"),
        _Utils_Tuple2("nsc", "⊁"),
        _Utils_Tuple2("nsccue", "⋡"),
        _Utils_Tuple2("nsce", "⪰̸"),
        _Utils_Tuple2("Nscr", "\uD835\uDCA9"),
        _Utils_Tuple2("nscr", "\uD835\uDCC3"),
        _Utils_Tuple2("nshortmid", "∤"),
        _Utils_Tuple2("nshortparallel", "∦"),
        _Utils_Tuple2("nsim", "≁"),
        _Utils_Tuple2("nsime", "≄"),
        _Utils_Tuple2("nsimeq", "≄"),
        _Utils_Tuple2("nsmid", "∤"),
        _Utils_Tuple2("nspar", "∦"),
        _Utils_Tuple2("nsqsube", "⋢"),
        _Utils_Tuple2("nsqsupe", "⋣"),
        _Utils_Tuple2("nsub", "⊄"),
        _Utils_Tuple2("nsubE", "⫅̸"),
        _Utils_Tuple2("nsube", "⊈"),
        _Utils_Tuple2("nsubset", "⊂⃒"),
        _Utils_Tuple2("nsubseteq", "⊈"),
        _Utils_Tuple2("nsubseteqq", "⫅̸"),
        _Utils_Tuple2("nsucc", "⊁"),
        _Utils_Tuple2("nsucceq", "⪰̸"),
        _Utils_Tuple2("nsup", "⊅"),
        _Utils_Tuple2("nsupE", "⫆̸"),
        _Utils_Tuple2("nsupe", "⊉"),
        _Utils_Tuple2("nsupset", "⊃⃒"),
        _Utils_Tuple2("nsupseteq", "⊉"),
        _Utils_Tuple2("nsupseteqq", "⫆̸"),
        _Utils_Tuple2("ntgl", "≹"),
        _Utils_Tuple2("Ntilde", "\xd1"),
        _Utils_Tuple2("ntilde", "\xf1"),
        _Utils_Tuple2("ntlg", "≸"),
        _Utils_Tuple2("ntriangleleft", "⋪"),
        _Utils_Tuple2("ntrianglelefteq", "⋬"),
        _Utils_Tuple2("ntriangleright", "⋫"),
        _Utils_Tuple2("ntrianglerighteq", "⋭"),
        _Utils_Tuple2("Nu", "Ν"),
        _Utils_Tuple2("nu", "ν"),
        _Utils_Tuple2("num", "#"),
        _Utils_Tuple2("numero", "№"),
        _Utils_Tuple2("numsp", " "),
        _Utils_Tuple2("nvap", "≍⃒"),
        _Utils_Tuple2("nvdash", "⊬"),
        _Utils_Tuple2("nvDash", "⊭"),
        _Utils_Tuple2("nVdash", "⊮"),
        _Utils_Tuple2("nVDash", "⊯"),
        _Utils_Tuple2("nvge", "≥⃒"),
        _Utils_Tuple2("nvgt", ">⃒"),
        _Utils_Tuple2("nvHarr", "⤄"),
        _Utils_Tuple2("nvinfin", "⧞"),
        _Utils_Tuple2("nvlArr", "⤂"),
        _Utils_Tuple2("nvle", "≤⃒"),
        _Utils_Tuple2("nvlt", "<⃒"),
        _Utils_Tuple2("nvltrie", "⊴⃒"),
        _Utils_Tuple2("nvrArr", "⤃"),
        _Utils_Tuple2("nvrtrie", "⊵⃒"),
        _Utils_Tuple2("nvsim", "∼⃒"),
        _Utils_Tuple2("nwarhk", "⤣"),
        _Utils_Tuple2("nwarr", "↖"),
        _Utils_Tuple2("nwArr", "⇖"),
        _Utils_Tuple2("nwarrow", "↖"),
        _Utils_Tuple2("nwnear", "⤧"),
        _Utils_Tuple2("Oacute", "\xd3"),
        _Utils_Tuple2("oacute", "\xf3"),
        _Utils_Tuple2("oast", "⊛"),
        _Utils_Tuple2("Ocirc", "\xd4"),
        _Utils_Tuple2("ocirc", "\xf4"),
        _Utils_Tuple2("ocir", "⊚"),
        _Utils_Tuple2("Ocy", "О"),
        _Utils_Tuple2("ocy", "о"),
        _Utils_Tuple2("odash", "⊝"),
        _Utils_Tuple2("Odblac", "Ő"),
        _Utils_Tuple2("odblac", "ő"),
        _Utils_Tuple2("odiv", "⨸"),
        _Utils_Tuple2("odot", "⊙"),
        _Utils_Tuple2("odsold", "⦼"),
        _Utils_Tuple2("OElig", "Œ"),
        _Utils_Tuple2("oelig", "œ"),
        _Utils_Tuple2("ofcir", "⦿"),
        _Utils_Tuple2("Ofr", "\uD835\uDD12"),
        _Utils_Tuple2("ofr", "\uD835\uDD2C"),
        _Utils_Tuple2("ogon", "˛"),
        _Utils_Tuple2("Ograve", "\xd2"),
        _Utils_Tuple2("ograve", "\xf2"),
        _Utils_Tuple2("ogt", "⧁"),
        _Utils_Tuple2("ohbar", "⦵"),
        _Utils_Tuple2("ohm", "Ω"),
        _Utils_Tuple2("oint", "∮"),
        _Utils_Tuple2("olarr", "↺"),
        _Utils_Tuple2("olcir", "⦾"),
        _Utils_Tuple2("olcross", "⦻"),
        _Utils_Tuple2("oline", "‾"),
        _Utils_Tuple2("olt", "⧀"),
        _Utils_Tuple2("Omacr", "Ō"),
        _Utils_Tuple2("omacr", "ō"),
        _Utils_Tuple2("Omega", "Ω"),
        _Utils_Tuple2("omega", "ω"),
        _Utils_Tuple2("Omicron", "Ο"),
        _Utils_Tuple2("omicron", "ο"),
        _Utils_Tuple2("omid", "⦶"),
        _Utils_Tuple2("ominus", "⊖"),
        _Utils_Tuple2("Oopf", "\uD835\uDD46"),
        _Utils_Tuple2("oopf", "\uD835\uDD60"),
        _Utils_Tuple2("opar", "⦷"),
        _Utils_Tuple2("OpenCurlyDoubleQuote", "“"),
        _Utils_Tuple2("OpenCurlyQuote", "‘"),
        _Utils_Tuple2("operp", "⦹"),
        _Utils_Tuple2("oplus", "⊕"),
        _Utils_Tuple2("orarr", "↻"),
        _Utils_Tuple2("Or", "⩔"),
        _Utils_Tuple2("or", "∨"),
        _Utils_Tuple2("ord", "⩝"),
        _Utils_Tuple2("order", "ℴ"),
        _Utils_Tuple2("orderof", "ℴ"),
        _Utils_Tuple2("ordf", "\xaa"),
        _Utils_Tuple2("ordm", "\xba"),
        _Utils_Tuple2("origof", "⊶"),
        _Utils_Tuple2("oror", "⩖"),
        _Utils_Tuple2("orslope", "⩗"),
        _Utils_Tuple2("orv", "⩛"),
        _Utils_Tuple2("oS", "Ⓢ"),
        _Utils_Tuple2("Oscr", "\uD835\uDCAA"),
        _Utils_Tuple2("oscr", "ℴ"),
        _Utils_Tuple2("Oslash", "\xd8"),
        _Utils_Tuple2("oslash", "\xf8"),
        _Utils_Tuple2("osol", "⊘"),
        _Utils_Tuple2("Otilde", "\xd5"),
        _Utils_Tuple2("otilde", "\xf5"),
        _Utils_Tuple2("otimesas", "⨶"),
        _Utils_Tuple2("Otimes", "⨷"),
        _Utils_Tuple2("otimes", "⊗"),
        _Utils_Tuple2("Ouml", "\xd6"),
        _Utils_Tuple2("ouml", "\xf6"),
        _Utils_Tuple2("ovbar", "⌽"),
        _Utils_Tuple2("OverBar", "‾"),
        _Utils_Tuple2("OverBrace", "⏞"),
        _Utils_Tuple2("OverBracket", "⎴"),
        _Utils_Tuple2("OverParenthesis", "⏜"),
        _Utils_Tuple2("para", "\xb6"),
        _Utils_Tuple2("parallel", "∥"),
        _Utils_Tuple2("par", "∥"),
        _Utils_Tuple2("parsim", "⫳"),
        _Utils_Tuple2("parsl", "⫽"),
        _Utils_Tuple2("part", "∂"),
        _Utils_Tuple2("PartialD", "∂"),
        _Utils_Tuple2("Pcy", "П"),
        _Utils_Tuple2("pcy", "п"),
        _Utils_Tuple2("percnt", "%"),
        _Utils_Tuple2("period", "."),
        _Utils_Tuple2("permil", "‰"),
        _Utils_Tuple2("perp", "⊥"),
        _Utils_Tuple2("pertenk", "‱"),
        _Utils_Tuple2("Pfr", "\uD835\uDD13"),
        _Utils_Tuple2("pfr", "\uD835\uDD2D"),
        _Utils_Tuple2("Phi", "Φ"),
        _Utils_Tuple2("phi", "φ"),
        _Utils_Tuple2("phiv", "ϕ"),
        _Utils_Tuple2("phmmat", "ℳ"),
        _Utils_Tuple2("phone", "☎"),
        _Utils_Tuple2("Pi", "Π"),
        _Utils_Tuple2("pi", "π"),
        _Utils_Tuple2("pitchfork", "⋔"),
        _Utils_Tuple2("piv", "ϖ"),
        _Utils_Tuple2("planck", "ℏ"),
        _Utils_Tuple2("planckh", "ℎ"),
        _Utils_Tuple2("plankv", "ℏ"),
        _Utils_Tuple2("plusacir", "⨣"),
        _Utils_Tuple2("plusb", "⊞"),
        _Utils_Tuple2("pluscir", "⨢"),
        _Utils_Tuple2("plus", "+"),
        _Utils_Tuple2("plusdo", "∔"),
        _Utils_Tuple2("plusdu", "⨥"),
        _Utils_Tuple2("pluse", "⩲"),
        _Utils_Tuple2("PlusMinus", "\xb1"),
        _Utils_Tuple2("plusmn", "\xb1"),
        _Utils_Tuple2("plussim", "⨦"),
        _Utils_Tuple2("plustwo", "⨧"),
        _Utils_Tuple2("pm", "\xb1"),
        _Utils_Tuple2("Poincareplane", "ℌ"),
        _Utils_Tuple2("pointint", "⨕"),
        _Utils_Tuple2("popf", "\uD835\uDD61"),
        _Utils_Tuple2("Popf", "ℙ"),
        _Utils_Tuple2("pound", "\xa3"),
        _Utils_Tuple2("prap", "⪷"),
        _Utils_Tuple2("Pr", "⪻"),
        _Utils_Tuple2("pr", "≺"),
        _Utils_Tuple2("prcue", "≼"),
        _Utils_Tuple2("precapprox", "⪷"),
        _Utils_Tuple2("prec", "≺"),
        _Utils_Tuple2("preccurlyeq", "≼"),
        _Utils_Tuple2("Precedes", "≺"),
        _Utils_Tuple2("PrecedesEqual", "⪯"),
        _Utils_Tuple2("PrecedesSlantEqual", "≼"),
        _Utils_Tuple2("PrecedesTilde", "≾"),
        _Utils_Tuple2("preceq", "⪯"),
        _Utils_Tuple2("precnapprox", "⪹"),
        _Utils_Tuple2("precneqq", "⪵"),
        _Utils_Tuple2("precnsim", "⋨"),
        _Utils_Tuple2("pre", "⪯"),
        _Utils_Tuple2("prE", "⪳"),
        _Utils_Tuple2("precsim", "≾"),
        _Utils_Tuple2("prime", "′"),
        _Utils_Tuple2("Prime", "″"),
        _Utils_Tuple2("primes", "ℙ"),
        _Utils_Tuple2("prnap", "⪹"),
        _Utils_Tuple2("prnE", "⪵"),
        _Utils_Tuple2("prnsim", "⋨"),
        _Utils_Tuple2("prod", "∏"),
        _Utils_Tuple2("Product", "∏"),
        _Utils_Tuple2("profalar", "⌮"),
        _Utils_Tuple2("profline", "⌒"),
        _Utils_Tuple2("profsurf", "⌓"),
        _Utils_Tuple2("prop", "∝"),
        _Utils_Tuple2("Proportional", "∝"),
        _Utils_Tuple2("Proportion", "∷"),
        _Utils_Tuple2("propto", "∝"),
        _Utils_Tuple2("prsim", "≾"),
        _Utils_Tuple2("prurel", "⊰"),
        _Utils_Tuple2("Pscr", "\uD835\uDCAB"),
        _Utils_Tuple2("pscr", "\uD835\uDCC5"),
        _Utils_Tuple2("Psi", "Ψ"),
        _Utils_Tuple2("psi", "ψ"),
        _Utils_Tuple2("puncsp", " "),
        _Utils_Tuple2("Qfr", "\uD835\uDD14"),
        _Utils_Tuple2("qfr", "\uD835\uDD2E"),
        _Utils_Tuple2("qint", "⨌"),
        _Utils_Tuple2("qopf", "\uD835\uDD62"),
        _Utils_Tuple2("Qopf", "ℚ"),
        _Utils_Tuple2("qprime", "⁗"),
        _Utils_Tuple2("Qscr", "\uD835\uDCAC"),
        _Utils_Tuple2("qscr", "\uD835\uDCC6"),
        _Utils_Tuple2("quaternions", "ℍ"),
        _Utils_Tuple2("quatint", "⨖"),
        _Utils_Tuple2("quest", "?"),
        _Utils_Tuple2("questeq", "≟"),
        _Utils_Tuple2("quot", '"'),
        _Utils_Tuple2("QUOT", '"'),
        _Utils_Tuple2("rAarr", "⇛"),
        _Utils_Tuple2("race", "∽̱"),
        _Utils_Tuple2("Racute", "Ŕ"),
        _Utils_Tuple2("racute", "ŕ"),
        _Utils_Tuple2("radic", "√"),
        _Utils_Tuple2("raemptyv", "⦳"),
        _Utils_Tuple2("rang", "⟩"),
        _Utils_Tuple2("Rang", "⟫"),
        _Utils_Tuple2("rangd", "⦒"),
        _Utils_Tuple2("range", "⦥"),
        _Utils_Tuple2("rangle", "⟩"),
        _Utils_Tuple2("raquo", "\xbb"),
        _Utils_Tuple2("rarrap", "⥵"),
        _Utils_Tuple2("rarrb", "⇥"),
        _Utils_Tuple2("rarrbfs", "⤠"),
        _Utils_Tuple2("rarrc", "⤳"),
        _Utils_Tuple2("rarr", "→"),
        _Utils_Tuple2("Rarr", "↠"),
        _Utils_Tuple2("rArr", "⇒"),
        _Utils_Tuple2("rarrfs", "⤞"),
        _Utils_Tuple2("rarrhk", "↪"),
        _Utils_Tuple2("rarrlp", "↬"),
        _Utils_Tuple2("rarrpl", "⥅"),
        _Utils_Tuple2("rarrsim", "⥴"),
        _Utils_Tuple2("Rarrtl", "⤖"),
        _Utils_Tuple2("rarrtl", "↣"),
        _Utils_Tuple2("rarrw", "↝"),
        _Utils_Tuple2("ratail", "⤚"),
        _Utils_Tuple2("rAtail", "⤜"),
        _Utils_Tuple2("ratio", "∶"),
        _Utils_Tuple2("rationals", "ℚ"),
        _Utils_Tuple2("rbarr", "⤍"),
        _Utils_Tuple2("rBarr", "⤏"),
        _Utils_Tuple2("RBarr", "⤐"),
        _Utils_Tuple2("rbbrk", "❳"),
        _Utils_Tuple2("rbrace", "}"),
        _Utils_Tuple2("rbrack", "]"),
        _Utils_Tuple2("rbrke", "⦌"),
        _Utils_Tuple2("rbrksld", "⦎"),
        _Utils_Tuple2("rbrkslu", "⦐"),
        _Utils_Tuple2("Rcaron", "Ř"),
        _Utils_Tuple2("rcaron", "ř"),
        _Utils_Tuple2("Rcedil", "Ŗ"),
        _Utils_Tuple2("rcedil", "ŗ"),
        _Utils_Tuple2("rceil", "⌉"),
        _Utils_Tuple2("rcub", "}"),
        _Utils_Tuple2("Rcy", "Р"),
        _Utils_Tuple2("rcy", "р"),
        _Utils_Tuple2("rdca", "⤷"),
        _Utils_Tuple2("rdldhar", "⥩"),
        _Utils_Tuple2("rdquo", "”"),
        _Utils_Tuple2("rdquor", "”"),
        _Utils_Tuple2("rdsh", "↳"),
        _Utils_Tuple2("real", "ℜ"),
        _Utils_Tuple2("realine", "ℛ"),
        _Utils_Tuple2("realpart", "ℜ"),
        _Utils_Tuple2("reals", "ℝ"),
        _Utils_Tuple2("Re", "ℜ"),
        _Utils_Tuple2("rect", "▭"),
        _Utils_Tuple2("reg", "\xae"),
        _Utils_Tuple2("REG", "\xae"),
        _Utils_Tuple2("ReverseElement", "∋"),
        _Utils_Tuple2("ReverseEquilibrium", "⇋"),
        _Utils_Tuple2("ReverseUpEquilibrium", "⥯"),
        _Utils_Tuple2("rfisht", "⥽"),
        _Utils_Tuple2("rfloor", "⌋"),
        _Utils_Tuple2("rfr", "\uD835\uDD2F"),
        _Utils_Tuple2("Rfr", "ℜ"),
        _Utils_Tuple2("rHar", "⥤"),
        _Utils_Tuple2("rhard", "⇁"),
        _Utils_Tuple2("rharu", "⇀"),
        _Utils_Tuple2("rharul", "⥬"),
        _Utils_Tuple2("Rho", "Ρ"),
        _Utils_Tuple2("rho", "ρ"),
        _Utils_Tuple2("rhov", "ϱ"),
        _Utils_Tuple2("RightAngleBracket", "⟩"),
        _Utils_Tuple2("RightArrowBar", "⇥"),
        _Utils_Tuple2("rightarrow", "→"),
        _Utils_Tuple2("RightArrow", "→"),
        _Utils_Tuple2("Rightarrow", "⇒"),
        _Utils_Tuple2("RightArrowLeftArrow", "⇄"),
        _Utils_Tuple2("rightarrowtail", "↣"),
        _Utils_Tuple2("RightCeiling", "⌉"),
        _Utils_Tuple2("RightDoubleBracket", "⟧"),
        _Utils_Tuple2("RightDownTeeVector", "⥝"),
        _Utils_Tuple2("RightDownVectorBar", "⥕"),
        _Utils_Tuple2("RightDownVector", "⇂"),
        _Utils_Tuple2("RightFloor", "⌋"),
        _Utils_Tuple2("rightharpoondown", "⇁"),
        _Utils_Tuple2("rightharpoonup", "⇀"),
        _Utils_Tuple2("rightleftarrows", "⇄"),
        _Utils_Tuple2("rightleftharpoons", "⇌"),
        _Utils_Tuple2("rightrightarrows", "⇉"),
        _Utils_Tuple2("rightsquigarrow", "↝"),
        _Utils_Tuple2("RightTeeArrow", "↦"),
        _Utils_Tuple2("RightTee", "⊢"),
        _Utils_Tuple2("RightTeeVector", "⥛"),
        _Utils_Tuple2("rightthreetimes", "⋌"),
        _Utils_Tuple2("RightTriangleBar", "⧐"),
        _Utils_Tuple2("RightTriangle", "⊳"),
        _Utils_Tuple2("RightTriangleEqual", "⊵"),
        _Utils_Tuple2("RightUpDownVector", "⥏"),
        _Utils_Tuple2("RightUpTeeVector", "⥜"),
        _Utils_Tuple2("RightUpVectorBar", "⥔"),
        _Utils_Tuple2("RightUpVector", "↾"),
        _Utils_Tuple2("RightVectorBar", "⥓"),
        _Utils_Tuple2("RightVector", "⇀"),
        _Utils_Tuple2("ring", "˚"),
        _Utils_Tuple2("risingdotseq", "≓"),
        _Utils_Tuple2("rlarr", "⇄"),
        _Utils_Tuple2("rlhar", "⇌"),
        _Utils_Tuple2("rlm", "‏"),
        _Utils_Tuple2("rmoustache", "⎱"),
        _Utils_Tuple2("rmoust", "⎱"),
        _Utils_Tuple2("rnmid", "⫮"),
        _Utils_Tuple2("roang", "⟭"),
        _Utils_Tuple2("roarr", "⇾"),
        _Utils_Tuple2("robrk", "⟧"),
        _Utils_Tuple2("ropar", "⦆"),
        _Utils_Tuple2("ropf", "\uD835\uDD63"),
        _Utils_Tuple2("Ropf", "ℝ"),
        _Utils_Tuple2("roplus", "⨮"),
        _Utils_Tuple2("rotimes", "⨵"),
        _Utils_Tuple2("RoundImplies", "⥰"),
        _Utils_Tuple2("rpar", ")"),
        _Utils_Tuple2("rpargt", "⦔"),
        _Utils_Tuple2("rppolint", "⨒"),
        _Utils_Tuple2("rrarr", "⇉"),
        _Utils_Tuple2("Rrightarrow", "⇛"),
        _Utils_Tuple2("rsaquo", "›"),
        _Utils_Tuple2("rscr", "\uD835\uDCC7"),
        _Utils_Tuple2("Rscr", "ℛ"),
        _Utils_Tuple2("rsh", "↱"),
        _Utils_Tuple2("Rsh", "↱"),
        _Utils_Tuple2("rsqb", "]"),
        _Utils_Tuple2("rsquo", "’"),
        _Utils_Tuple2("rsquor", "’"),
        _Utils_Tuple2("rthree", "⋌"),
        _Utils_Tuple2("rtimes", "⋊"),
        _Utils_Tuple2("rtri", "▹"),
        _Utils_Tuple2("rtrie", "⊵"),
        _Utils_Tuple2("rtrif", "▸"),
        _Utils_Tuple2("rtriltri", "⧎"),
        _Utils_Tuple2("RuleDelayed", "⧴"),
        _Utils_Tuple2("ruluhar", "⥨"),
        _Utils_Tuple2("rx", "℞"),
        _Utils_Tuple2("Sacute", "Ś"),
        _Utils_Tuple2("sacute", "ś"),
        _Utils_Tuple2("sbquo", "‚"),
        _Utils_Tuple2("scap", "⪸"),
        _Utils_Tuple2("Scaron", "Š"),
        _Utils_Tuple2("scaron", "š"),
        _Utils_Tuple2("Sc", "⪼"),
        _Utils_Tuple2("sc", "≻"),
        _Utils_Tuple2("sccue", "≽"),
        _Utils_Tuple2("sce", "⪰"),
        _Utils_Tuple2("scE", "⪴"),
        _Utils_Tuple2("Scedil", "Ş"),
        _Utils_Tuple2("scedil", "ş"),
        _Utils_Tuple2("Scirc", "Ŝ"),
        _Utils_Tuple2("scirc", "ŝ"),
        _Utils_Tuple2("scnap", "⪺"),
        _Utils_Tuple2("scnE", "⪶"),
        _Utils_Tuple2("scnsim", "⋩"),
        _Utils_Tuple2("scpolint", "⨓"),
        _Utils_Tuple2("scsim", "≿"),
        _Utils_Tuple2("Scy", "С"),
        _Utils_Tuple2("scy", "с"),
        _Utils_Tuple2("sdotb", "⊡"),
        _Utils_Tuple2("sdot", "⋅"),
        _Utils_Tuple2("sdote", "⩦"),
        _Utils_Tuple2("searhk", "⤥"),
        _Utils_Tuple2("searr", "↘"),
        _Utils_Tuple2("seArr", "⇘"),
        _Utils_Tuple2("searrow", "↘"),
        _Utils_Tuple2("sect", "\xa7"),
        _Utils_Tuple2("semi", ";"),
        _Utils_Tuple2("seswar", "⤩"),
        _Utils_Tuple2("setminus", "∖"),
        _Utils_Tuple2("setmn", "∖"),
        _Utils_Tuple2("sext", "✶"),
        _Utils_Tuple2("Sfr", "\uD835\uDD16"),
        _Utils_Tuple2("sfr", "\uD835\uDD30"),
        _Utils_Tuple2("sfrown", "⌢"),
        _Utils_Tuple2("sharp", "♯"),
        _Utils_Tuple2("SHCHcy", "Щ"),
        _Utils_Tuple2("shchcy", "щ"),
        _Utils_Tuple2("SHcy", "Ш"),
        _Utils_Tuple2("shcy", "ш"),
        _Utils_Tuple2("ShortDownArrow", "↓"),
        _Utils_Tuple2("ShortLeftArrow", "←"),
        _Utils_Tuple2("shortmid", "∣"),
        _Utils_Tuple2("shortparallel", "∥"),
        _Utils_Tuple2("ShortRightArrow", "→"),
        _Utils_Tuple2("ShortUpArrow", "↑"),
        _Utils_Tuple2("shy", "\xad"),
        _Utils_Tuple2("Sigma", "Σ"),
        _Utils_Tuple2("sigma", "σ"),
        _Utils_Tuple2("sigmaf", "ς"),
        _Utils_Tuple2("sigmav", "ς"),
        _Utils_Tuple2("sim", "∼"),
        _Utils_Tuple2("simdot", "⩪"),
        _Utils_Tuple2("sime", "≃"),
        _Utils_Tuple2("simeq", "≃"),
        _Utils_Tuple2("simg", "⪞"),
        _Utils_Tuple2("simgE", "⪠"),
        _Utils_Tuple2("siml", "⪝"),
        _Utils_Tuple2("simlE", "⪟"),
        _Utils_Tuple2("simne", "≆"),
        _Utils_Tuple2("simplus", "⨤"),
        _Utils_Tuple2("simrarr", "⥲"),
        _Utils_Tuple2("slarr", "←"),
        _Utils_Tuple2("SmallCircle", "∘"),
        _Utils_Tuple2("smallsetminus", "∖"),
        _Utils_Tuple2("smashp", "⨳"),
        _Utils_Tuple2("smeparsl", "⧤"),
        _Utils_Tuple2("smid", "∣"),
        _Utils_Tuple2("smile", "⌣"),
        _Utils_Tuple2("smt", "⪪"),
        _Utils_Tuple2("smte", "⪬"),
        _Utils_Tuple2("smtes", "⪬︀"),
        _Utils_Tuple2("SOFTcy", "Ь"),
        _Utils_Tuple2("softcy", "ь"),
        _Utils_Tuple2("solbar", "⌿"),
        _Utils_Tuple2("solb", "⧄"),
        _Utils_Tuple2("sol", "/"),
        _Utils_Tuple2("Sopf", "\uD835\uDD4A"),
        _Utils_Tuple2("sopf", "\uD835\uDD64"),
        _Utils_Tuple2("spades", "♠"),
        _Utils_Tuple2("spadesuit", "♠"),
        _Utils_Tuple2("spar", "∥"),
        _Utils_Tuple2("sqcap", "⊓"),
        _Utils_Tuple2("sqcaps", "⊓︀"),
        _Utils_Tuple2("sqcup", "⊔"),
        _Utils_Tuple2("sqcups", "⊔︀"),
        _Utils_Tuple2("Sqrt", "√"),
        _Utils_Tuple2("sqsub", "⊏"),
        _Utils_Tuple2("sqsube", "⊑"),
        _Utils_Tuple2("sqsubset", "⊏"),
        _Utils_Tuple2("sqsubseteq", "⊑"),
        _Utils_Tuple2("sqsup", "⊐"),
        _Utils_Tuple2("sqsupe", "⊒"),
        _Utils_Tuple2("sqsupset", "⊐"),
        _Utils_Tuple2("sqsupseteq", "⊒"),
        _Utils_Tuple2("square", "□"),
        _Utils_Tuple2("Square", "□"),
        _Utils_Tuple2("SquareIntersection", "⊓"),
        _Utils_Tuple2("SquareSubset", "⊏"),
        _Utils_Tuple2("SquareSubsetEqual", "⊑"),
        _Utils_Tuple2("SquareSuperset", "⊐"),
        _Utils_Tuple2("SquareSupersetEqual", "⊒"),
        _Utils_Tuple2("SquareUnion", "⊔"),
        _Utils_Tuple2("squarf", "▪"),
        _Utils_Tuple2("squ", "□"),
        _Utils_Tuple2("squf", "▪"),
        _Utils_Tuple2("srarr", "→"),
        _Utils_Tuple2("Sscr", "\uD835\uDCAE"),
        _Utils_Tuple2("sscr", "\uD835\uDCC8"),
        _Utils_Tuple2("ssetmn", "∖"),
        _Utils_Tuple2("ssmile", "⌣"),
        _Utils_Tuple2("sstarf", "⋆"),
        _Utils_Tuple2("Star", "⋆"),
        _Utils_Tuple2("star", "☆"),
        _Utils_Tuple2("starf", "★"),
        _Utils_Tuple2("straightepsilon", "ϵ"),
        _Utils_Tuple2("straightphi", "ϕ"),
        _Utils_Tuple2("strns", "\xaf"),
        _Utils_Tuple2("sub", "⊂"),
        _Utils_Tuple2("Sub", "⋐"),
        _Utils_Tuple2("subdot", "⪽"),
        _Utils_Tuple2("subE", "⫅"),
        _Utils_Tuple2("sube", "⊆"),
        _Utils_Tuple2("subedot", "⫃"),
        _Utils_Tuple2("submult", "⫁"),
        _Utils_Tuple2("subnE", "⫋"),
        _Utils_Tuple2("subne", "⊊"),
        _Utils_Tuple2("subplus", "⪿"),
        _Utils_Tuple2("subrarr", "⥹"),
        _Utils_Tuple2("subset", "⊂"),
        _Utils_Tuple2("Subset", "⋐"),
        _Utils_Tuple2("subseteq", "⊆"),
        _Utils_Tuple2("subseteqq", "⫅"),
        _Utils_Tuple2("SubsetEqual", "⊆"),
        _Utils_Tuple2("subsetneq", "⊊"),
        _Utils_Tuple2("subsetneqq", "⫋"),
        _Utils_Tuple2("subsim", "⫇"),
        _Utils_Tuple2("subsub", "⫕"),
        _Utils_Tuple2("subsup", "⫓"),
        _Utils_Tuple2("succapprox", "⪸"),
        _Utils_Tuple2("succ", "≻"),
        _Utils_Tuple2("succcurlyeq", "≽"),
        _Utils_Tuple2("Succeeds", "≻"),
        _Utils_Tuple2("SucceedsEqual", "⪰"),
        _Utils_Tuple2("SucceedsSlantEqual", "≽"),
        _Utils_Tuple2("SucceedsTilde", "≿"),
        _Utils_Tuple2("succeq", "⪰"),
        _Utils_Tuple2("succnapprox", "⪺"),
        _Utils_Tuple2("succneqq", "⪶"),
        _Utils_Tuple2("succnsim", "⋩"),
        _Utils_Tuple2("succsim", "≿"),
        _Utils_Tuple2("SuchThat", "∋"),
        _Utils_Tuple2("sum", "∑"),
        _Utils_Tuple2("Sum", "∑"),
        _Utils_Tuple2("sung", "♪"),
        _Utils_Tuple2("sup1", "\xb9"),
        _Utils_Tuple2("sup2", "\xb2"),
        _Utils_Tuple2("sup3", "\xb3"),
        _Utils_Tuple2("sup", "⊃"),
        _Utils_Tuple2("Sup", "⋑"),
        _Utils_Tuple2("supdot", "⪾"),
        _Utils_Tuple2("supdsub", "⫘"),
        _Utils_Tuple2("supE", "⫆"),
        _Utils_Tuple2("supe", "⊇"),
        _Utils_Tuple2("supedot", "⫄"),
        _Utils_Tuple2("Superset", "⊃"),
        _Utils_Tuple2("SupersetEqual", "⊇"),
        _Utils_Tuple2("suphsol", "⟉"),
        _Utils_Tuple2("suphsub", "⫗"),
        _Utils_Tuple2("suplarr", "⥻"),
        _Utils_Tuple2("supmult", "⫂"),
        _Utils_Tuple2("supnE", "⫌"),
        _Utils_Tuple2("supne", "⊋"),
        _Utils_Tuple2("supplus", "⫀"),
        _Utils_Tuple2("supset", "⊃"),
        _Utils_Tuple2("Supset", "⋑"),
        _Utils_Tuple2("supseteq", "⊇"),
        _Utils_Tuple2("supseteqq", "⫆"),
        _Utils_Tuple2("supsetneq", "⊋"),
        _Utils_Tuple2("supsetneqq", "⫌"),
        _Utils_Tuple2("supsim", "⫈"),
        _Utils_Tuple2("supsub", "⫔"),
        _Utils_Tuple2("supsup", "⫖"),
        _Utils_Tuple2("swarhk", "⤦"),
        _Utils_Tuple2("swarr", "↙"),
        _Utils_Tuple2("swArr", "⇙"),
        _Utils_Tuple2("swarrow", "↙"),
        _Utils_Tuple2("swnwar", "⤪"),
        _Utils_Tuple2("szlig", "\xdf"),
        _Utils_Tuple2("Tab", "	"),
        _Utils_Tuple2("target", "⌖"),
        _Utils_Tuple2("Tau", "Τ"),
        _Utils_Tuple2("tau", "τ"),
        _Utils_Tuple2("tbrk", "⎴"),
        _Utils_Tuple2("Tcaron", "Ť"),
        _Utils_Tuple2("tcaron", "ť"),
        _Utils_Tuple2("Tcedil", "Ţ"),
        _Utils_Tuple2("tcedil", "ţ"),
        _Utils_Tuple2("Tcy", "Т"),
        _Utils_Tuple2("tcy", "т"),
        _Utils_Tuple2("tdot", "⃛"),
        _Utils_Tuple2("telrec", "⌕"),
        _Utils_Tuple2("Tfr", "\uD835\uDD17"),
        _Utils_Tuple2("tfr", "\uD835\uDD31"),
        _Utils_Tuple2("there4", "∴"),
        _Utils_Tuple2("therefore", "∴"),
        _Utils_Tuple2("Therefore", "∴"),
        _Utils_Tuple2("Theta", "Θ"),
        _Utils_Tuple2("theta", "θ"),
        _Utils_Tuple2("thetasym", "ϑ"),
        _Utils_Tuple2("thetav", "ϑ"),
        _Utils_Tuple2("thickapprox", "≈"),
        _Utils_Tuple2("thicksim", "∼"),
        _Utils_Tuple2("ThickSpace", "  "),
        _Utils_Tuple2("ThinSpace", " "),
        _Utils_Tuple2("thinsp", " "),
        _Utils_Tuple2("thkap", "≈"),
        _Utils_Tuple2("thksim", "∼"),
        _Utils_Tuple2("THORN", "\xde"),
        _Utils_Tuple2("thorn", "\xfe"),
        _Utils_Tuple2("tilde", "˜"),
        _Utils_Tuple2("Tilde", "∼"),
        _Utils_Tuple2("TildeEqual", "≃"),
        _Utils_Tuple2("TildeFullEqual", "≅"),
        _Utils_Tuple2("TildeTilde", "≈"),
        _Utils_Tuple2("timesbar", "⨱"),
        _Utils_Tuple2("timesb", "⊠"),
        _Utils_Tuple2("times", "\xd7"),
        _Utils_Tuple2("timesd", "⨰"),
        _Utils_Tuple2("tint", "∭"),
        _Utils_Tuple2("toea", "⤨"),
        _Utils_Tuple2("topbot", "⌶"),
        _Utils_Tuple2("topcir", "⫱"),
        _Utils_Tuple2("top", "⊤"),
        _Utils_Tuple2("Topf", "\uD835\uDD4B"),
        _Utils_Tuple2("topf", "\uD835\uDD65"),
        _Utils_Tuple2("topfork", "⫚"),
        _Utils_Tuple2("tosa", "⤩"),
        _Utils_Tuple2("tprime", "‴"),
        _Utils_Tuple2("trade", "™"),
        _Utils_Tuple2("TRADE", "™"),
        _Utils_Tuple2("triangle", "▵"),
        _Utils_Tuple2("triangledown", "▿"),
        _Utils_Tuple2("triangleleft", "◃"),
        _Utils_Tuple2("trianglelefteq", "⊴"),
        _Utils_Tuple2("triangleq", "≜"),
        _Utils_Tuple2("triangleright", "▹"),
        _Utils_Tuple2("trianglerighteq", "⊵"),
        _Utils_Tuple2("tridot", "◬"),
        _Utils_Tuple2("trie", "≜"),
        _Utils_Tuple2("triminus", "⨺"),
        _Utils_Tuple2("TripleDot", "⃛"),
        _Utils_Tuple2("triplus", "⨹"),
        _Utils_Tuple2("trisb", "⧍"),
        _Utils_Tuple2("tritime", "⨻"),
        _Utils_Tuple2("trpezium", "⏢"),
        _Utils_Tuple2("Tscr", "\uD835\uDCAF"),
        _Utils_Tuple2("tscr", "\uD835\uDCC9"),
        _Utils_Tuple2("TScy", "Ц"),
        _Utils_Tuple2("tscy", "ц"),
        _Utils_Tuple2("TSHcy", "Ћ"),
        _Utils_Tuple2("tshcy", "ћ"),
        _Utils_Tuple2("Tstrok", "Ŧ"),
        _Utils_Tuple2("tstrok", "ŧ"),
        _Utils_Tuple2("twixt", "≬"),
        _Utils_Tuple2("twoheadleftarrow", "↞"),
        _Utils_Tuple2("twoheadrightarrow", "↠"),
        _Utils_Tuple2("Uacute", "\xda"),
        _Utils_Tuple2("uacute", "\xfa"),
        _Utils_Tuple2("uarr", "↑"),
        _Utils_Tuple2("Uarr", "↟"),
        _Utils_Tuple2("uArr", "⇑"),
        _Utils_Tuple2("Uarrocir", "⥉"),
        _Utils_Tuple2("Ubrcy", "Ў"),
        _Utils_Tuple2("ubrcy", "ў"),
        _Utils_Tuple2("Ubreve", "Ŭ"),
        _Utils_Tuple2("ubreve", "ŭ"),
        _Utils_Tuple2("Ucirc", "\xdb"),
        _Utils_Tuple2("ucirc", "\xfb"),
        _Utils_Tuple2("Ucy", "У"),
        _Utils_Tuple2("ucy", "у"),
        _Utils_Tuple2("udarr", "⇅"),
        _Utils_Tuple2("Udblac", "Ű"),
        _Utils_Tuple2("udblac", "ű"),
        _Utils_Tuple2("udhar", "⥮"),
        _Utils_Tuple2("ufisht", "⥾"),
        _Utils_Tuple2("Ufr", "\uD835\uDD18"),
        _Utils_Tuple2("ufr", "\uD835\uDD32"),
        _Utils_Tuple2("Ugrave", "\xd9"),
        _Utils_Tuple2("ugrave", "\xf9"),
        _Utils_Tuple2("uHar", "⥣"),
        _Utils_Tuple2("uharl", "↿"),
        _Utils_Tuple2("uharr", "↾"),
        _Utils_Tuple2("uhblk", "▀"),
        _Utils_Tuple2("ulcorn", "⌜"),
        _Utils_Tuple2("ulcorner", "⌜"),
        _Utils_Tuple2("ulcrop", "⌏"),
        _Utils_Tuple2("ultri", "◸"),
        _Utils_Tuple2("Umacr", "Ū"),
        _Utils_Tuple2("umacr", "ū"),
        _Utils_Tuple2("uml", "\xa8"),
        _Utils_Tuple2("UnderBar", "_"),
        _Utils_Tuple2("UnderBrace", "⏟"),
        _Utils_Tuple2("UnderBracket", "⎵"),
        _Utils_Tuple2("UnderParenthesis", "⏝"),
        _Utils_Tuple2("Union", "⋃"),
        _Utils_Tuple2("UnionPlus", "⊎"),
        _Utils_Tuple2("Uogon", "Ų"),
        _Utils_Tuple2("uogon", "ų"),
        _Utils_Tuple2("Uopf", "\uD835\uDD4C"),
        _Utils_Tuple2("uopf", "\uD835\uDD66"),
        _Utils_Tuple2("UpArrowBar", "⤒"),
        _Utils_Tuple2("uparrow", "↑"),
        _Utils_Tuple2("UpArrow", "↑"),
        _Utils_Tuple2("Uparrow", "⇑"),
        _Utils_Tuple2("UpArrowDownArrow", "⇅"),
        _Utils_Tuple2("updownarrow", "↕"),
        _Utils_Tuple2("UpDownArrow", "↕"),
        _Utils_Tuple2("Updownarrow", "⇕"),
        _Utils_Tuple2("UpEquilibrium", "⥮"),
        _Utils_Tuple2("upharpoonleft", "↿"),
        _Utils_Tuple2("upharpoonright", "↾"),
        _Utils_Tuple2("uplus", "⊎"),
        _Utils_Tuple2("UpperLeftArrow", "↖"),
        _Utils_Tuple2("UpperRightArrow", "↗"),
        _Utils_Tuple2("upsi", "υ"),
        _Utils_Tuple2("Upsi", "ϒ"),
        _Utils_Tuple2("upsih", "ϒ"),
        _Utils_Tuple2("Upsilon", "Υ"),
        _Utils_Tuple2("upsilon", "υ"),
        _Utils_Tuple2("UpTeeArrow", "↥"),
        _Utils_Tuple2("UpTee", "⊥"),
        _Utils_Tuple2("upuparrows", "⇈"),
        _Utils_Tuple2("urcorn", "⌝"),
        _Utils_Tuple2("urcorner", "⌝"),
        _Utils_Tuple2("urcrop", "⌎"),
        _Utils_Tuple2("Uring", "Ů"),
        _Utils_Tuple2("uring", "ů"),
        _Utils_Tuple2("urtri", "◹"),
        _Utils_Tuple2("Uscr", "\uD835\uDCB0"),
        _Utils_Tuple2("uscr", "\uD835\uDCCA"),
        _Utils_Tuple2("utdot", "⋰"),
        _Utils_Tuple2("Utilde", "Ũ"),
        _Utils_Tuple2("utilde", "ũ"),
        _Utils_Tuple2("utri", "▵"),
        _Utils_Tuple2("utrif", "▴"),
        _Utils_Tuple2("uuarr", "⇈"),
        _Utils_Tuple2("Uuml", "\xdc"),
        _Utils_Tuple2("uuml", "\xfc"),
        _Utils_Tuple2("uwangle", "⦧"),
        _Utils_Tuple2("vangrt", "⦜"),
        _Utils_Tuple2("varepsilon", "ϵ"),
        _Utils_Tuple2("varkappa", "ϰ"),
        _Utils_Tuple2("varnothing", "∅"),
        _Utils_Tuple2("varphi", "ϕ"),
        _Utils_Tuple2("varpi", "ϖ"),
        _Utils_Tuple2("varpropto", "∝"),
        _Utils_Tuple2("varr", "↕"),
        _Utils_Tuple2("vArr", "⇕"),
        _Utils_Tuple2("varrho", "ϱ"),
        _Utils_Tuple2("varsigma", "ς"),
        _Utils_Tuple2("varsubsetneq", "⊊︀"),
        _Utils_Tuple2("varsubsetneqq", "⫋︀"),
        _Utils_Tuple2("varsupsetneq", "⊋︀"),
        _Utils_Tuple2("varsupsetneqq", "⫌︀"),
        _Utils_Tuple2("vartheta", "ϑ"),
        _Utils_Tuple2("vartriangleleft", "⊲"),
        _Utils_Tuple2("vartriangleright", "⊳"),
        _Utils_Tuple2("vBar", "⫨"),
        _Utils_Tuple2("Vbar", "⫫"),
        _Utils_Tuple2("vBarv", "⫩"),
        _Utils_Tuple2("Vcy", "В"),
        _Utils_Tuple2("vcy", "в"),
        _Utils_Tuple2("vdash", "⊢"),
        _Utils_Tuple2("vDash", "⊨"),
        _Utils_Tuple2("Vdash", "⊩"),
        _Utils_Tuple2("VDash", "⊫"),
        _Utils_Tuple2("Vdashl", "⫦"),
        _Utils_Tuple2("veebar", "⊻"),
        _Utils_Tuple2("vee", "∨"),
        _Utils_Tuple2("Vee", "⋁"),
        _Utils_Tuple2("veeeq", "≚"),
        _Utils_Tuple2("vellip", "⋮"),
        _Utils_Tuple2("verbar", "|"),
        _Utils_Tuple2("Verbar", "‖"),
        _Utils_Tuple2("vert", "|"),
        _Utils_Tuple2("Vert", "‖"),
        _Utils_Tuple2("VerticalBar", "∣"),
        _Utils_Tuple2("VerticalLine", "|"),
        _Utils_Tuple2("VerticalSeparator", "❘"),
        _Utils_Tuple2("VerticalTilde", "≀"),
        _Utils_Tuple2("VeryThinSpace", " "),
        _Utils_Tuple2("Vfr", "\uD835\uDD19"),
        _Utils_Tuple2("vfr", "\uD835\uDD33"),
        _Utils_Tuple2("vltri", "⊲"),
        _Utils_Tuple2("vnsub", "⊂⃒"),
        _Utils_Tuple2("vnsup", "⊃⃒"),
        _Utils_Tuple2("Vopf", "\uD835\uDD4D"),
        _Utils_Tuple2("vopf", "\uD835\uDD67"),
        _Utils_Tuple2("vprop", "∝"),
        _Utils_Tuple2("vrtri", "⊳"),
        _Utils_Tuple2("Vscr", "\uD835\uDCB1"),
        _Utils_Tuple2("vscr", "\uD835\uDCCB"),
        _Utils_Tuple2("vsubnE", "⫋︀"),
        _Utils_Tuple2("vsubne", "⊊︀"),
        _Utils_Tuple2("vsupnE", "⫌︀"),
        _Utils_Tuple2("vsupne", "⊋︀"),
        _Utils_Tuple2("Vvdash", "⊪"),
        _Utils_Tuple2("vzigzag", "⦚"),
        _Utils_Tuple2("Wcirc", "Ŵ"),
        _Utils_Tuple2("wcirc", "ŵ"),
        _Utils_Tuple2("wedbar", "⩟"),
        _Utils_Tuple2("wedge", "∧"),
        _Utils_Tuple2("Wedge", "⋀"),
        _Utils_Tuple2("wedgeq", "≙"),
        _Utils_Tuple2("weierp", "℘"),
        _Utils_Tuple2("Wfr", "\uD835\uDD1A"),
        _Utils_Tuple2("wfr", "\uD835\uDD34"),
        _Utils_Tuple2("Wopf", "\uD835\uDD4E"),
        _Utils_Tuple2("wopf", "\uD835\uDD68"),
        _Utils_Tuple2("wp", "℘"),
        _Utils_Tuple2("wr", "≀"),
        _Utils_Tuple2("wreath", "≀"),
        _Utils_Tuple2("Wscr", "\uD835\uDCB2"),
        _Utils_Tuple2("wscr", "\uD835\uDCCC"),
        _Utils_Tuple2("xcap", "⋂"),
        _Utils_Tuple2("xcirc", "◯"),
        _Utils_Tuple2("xcup", "⋃"),
        _Utils_Tuple2("xdtri", "▽"),
        _Utils_Tuple2("Xfr", "\uD835\uDD1B"),
        _Utils_Tuple2("xfr", "\uD835\uDD35"),
        _Utils_Tuple2("xharr", "⟷"),
        _Utils_Tuple2("xhArr", "⟺"),
        _Utils_Tuple2("Xi", "Ξ"),
        _Utils_Tuple2("xi", "ξ"),
        _Utils_Tuple2("xlarr", "⟵"),
        _Utils_Tuple2("xlArr", "⟸"),
        _Utils_Tuple2("xmap", "⟼"),
        _Utils_Tuple2("xnis", "⋻"),
        _Utils_Tuple2("xodot", "⨀"),
        _Utils_Tuple2("Xopf", "\uD835\uDD4F"),
        _Utils_Tuple2("xopf", "\uD835\uDD69"),
        _Utils_Tuple2("xoplus", "⨁"),
        _Utils_Tuple2("xotime", "⨂"),
        _Utils_Tuple2("xrarr", "⟶"),
        _Utils_Tuple2("xrArr", "⟹"),
        _Utils_Tuple2("Xscr", "\uD835\uDCB3"),
        _Utils_Tuple2("xscr", "\uD835\uDCCD"),
        _Utils_Tuple2("xsqcup", "⨆"),
        _Utils_Tuple2("xuplus", "⨄"),
        _Utils_Tuple2("xutri", "△"),
        _Utils_Tuple2("xvee", "⋁"),
        _Utils_Tuple2("xwedge", "⋀"),
        _Utils_Tuple2("Yacute", "\xdd"),
        _Utils_Tuple2("yacute", "\xfd"),
        _Utils_Tuple2("YAcy", "Я"),
        _Utils_Tuple2("yacy", "я"),
        _Utils_Tuple2("Ycirc", "Ŷ"),
        _Utils_Tuple2("ycirc", "ŷ"),
        _Utils_Tuple2("Ycy", "Ы"),
        _Utils_Tuple2("ycy", "ы"),
        _Utils_Tuple2("yen", "\xa5"),
        _Utils_Tuple2("Yfr", "\uD835\uDD1C"),
        _Utils_Tuple2("yfr", "\uD835\uDD36"),
        _Utils_Tuple2("YIcy", "Ї"),
        _Utils_Tuple2("yicy", "ї"),
        _Utils_Tuple2("Yopf", "\uD835\uDD50"),
        _Utils_Tuple2("yopf", "\uD835\uDD6A"),
        _Utils_Tuple2("Yscr", "\uD835\uDCB4"),
        _Utils_Tuple2("yscr", "\uD835\uDCCE"),
        _Utils_Tuple2("YUcy", "Ю"),
        _Utils_Tuple2("yucy", "ю"),
        _Utils_Tuple2("yuml", "\xff"),
        _Utils_Tuple2("Yuml", "Ÿ"),
        _Utils_Tuple2("Zacute", "Ź"),
        _Utils_Tuple2("zacute", "ź"),
        _Utils_Tuple2("Zcaron", "Ž"),
        _Utils_Tuple2("zcaron", "ž"),
        _Utils_Tuple2("Zcy", "З"),
        _Utils_Tuple2("zcy", "з"),
        _Utils_Tuple2("Zdot", "Ż"),
        _Utils_Tuple2("zdot", "ż"),
        _Utils_Tuple2("zeetrf", "ℨ"),
        _Utils_Tuple2("ZeroWidthSpace", "​"),
        _Utils_Tuple2("Zeta", "Ζ"),
        _Utils_Tuple2("zeta", "ζ"),
        _Utils_Tuple2("zfr", "\uD835\uDD37"),
        _Utils_Tuple2("Zfr", "ℨ"),
        _Utils_Tuple2("ZHcy", "Ж"),
        _Utils_Tuple2("zhcy", "ж"),
        _Utils_Tuple2("zigrarr", "⇝"),
        _Utils_Tuple2("zopf", "\uD835\uDD6B"),
        _Utils_Tuple2("Zopf", "ℤ"),
        _Utils_Tuple2("Zscr", "\uD835\uDCB5"),
        _Utils_Tuple2("zscr", "\uD835\uDCCF"),
        _Utils_Tuple2("zwj", "‍"),
        _Utils_Tuple2("zwnj", "‌")
    ]));
    var $author$project$Lia$Markdown$HTML$Attributes$namedCharacterReference = A2($andre_dietrich$parser_combinators$Combine$map, function(reference) {
        return A2($elm$core$Maybe$withDefault, "&" + (reference + ";"), A2($elm$core$Dict$get, reference, $author$project$Lia$Markdown$HTML$NamedCharacterReferences$dict));
    }, $andre_dietrich$parser_combinators$Combine$regex("[a-zA-Z]+"));
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $elm$core$Basics$pow = _Basics_pow;
    var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(function(position, chars, accumulated) {
        fromStringHelp: while(true){
            if (!chars.b) return $elm$core$Result$Ok(accumulated);
            else {
                var _char = chars.a;
                var rest = chars.b;
                switch(_char.valueOf()){
                    case "0":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated;
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "1":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "2":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 2 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "3":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 3 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "4":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 4 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "5":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 5 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "6":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 6 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "7":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 7 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "8":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 8 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "9":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 9 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "a":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 10 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "b":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 11 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "c":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 12 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "d":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 13 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "e":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 14 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "f":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 15 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    default:
                        var nonHex = _char;
                        return $elm$core$Result$Err($elm$core$String$fromChar(nonHex) + " is not a valid hexadecimal character.");
                }
            }
        }
    });
    var $elm$core$Result$map = F2(function(func, ra) {
        if (ra.$ === "Ok") {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        } else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    });
    var $elm$core$Result$mapError = F2(function(f, result) {
        if (result.$ === "Ok") {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        } else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    });
    var $elm$core$List$tail = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(xs);
        } else return $elm$core$Maybe$Nothing;
    };
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function(string) {
        return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
    };
    var $rtfeldman$elm_hex$Hex$fromString = function(str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Result$Err("Empty strings are not valid hexadecimal strings.");
        else {
            var result = function() {
                if (A2($elm$core$String$startsWith, "-", str)) {
                    var list = A2($elm$core$Maybe$withDefault, _List_Nil, $elm$core$List$tail($elm$core$String$toList(str)));
                    return A2($elm$core$Result$map, $elm$core$Basics$negate, A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$List$length(list) - 1, list, 0));
                } else return A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$String$length(str) - 1, $elm$core$String$toList(str), 0);
            }();
            var formatError = function(err) {
                return A2($elm$core$String$join, " ", _List_fromArray([
                    '"' + (str + '"'),
                    "is not a valid hexadecimal string because",
                    err
                ]));
            };
            return A2($elm$core$Result$mapError, formatError, result);
        }
    };
    var $author$project$Lia$Markdown$HTML$Attributes$hexadecimal = A2($andre_dietrich$parser_combinators$Combine$andThen, function(hex) {
        var _v0 = $rtfeldman$elm_hex$Hex$fromString($elm$core$String$toLower(hex));
        if (_v0.$ === "Ok") {
            var value = _v0.a;
            return $andre_dietrich$parser_combinators$Combine$succeed(value);
        } else {
            var err = _v0.a;
            return $andre_dietrich$parser_combinators$Combine$fail(err);
        }
    }, $andre_dietrich$parser_combinators$Combine$regex("[0-9a-fA-F]+"));
    var $author$project$Lia$Markdown$HTML$Attributes$numericCharacterReference = function() {
        var codePoint = $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$HTML$Attributes$hexadecimal, $andre_dietrich$parser_combinators$Combine$regex("(x|X)")),
            A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$Num$int, $andre_dietrich$parser_combinators$Combine$regex("0*"))
        ]));
        return A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar), codePoint), $andre_dietrich$parser_combinators$Combine$string("#"));
    }();
    var $author$project$Lia$Markdown$HTML$Attributes$characterReference = A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(";"), $author$project$Lia$Markdown$HTML$Attributes$namedCharacterReference),
        A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(";"), $author$project$Lia$Markdown$HTML$Attributes$numericCharacterReference),
        $andre_dietrich$parser_combinators$Combine$succeed("&")
    ])), $andre_dietrich$parser_combinators$Combine$string("&"));
    var $author$project$Lia$Markdown$HTML$Attributes$tagAttributeQuotedValue = function(quote) {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(quote), A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$concat, $andre_dietrich$parser_combinators$Combine$many($andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$String$replace, "\\" + quote, quote), $andre_dietrich$parser_combinators$Combine$regex("([^" + (quote + ("]*|\\\\" + (quote + "|\\\\)*"))))),
            $author$project$Lia$Markdown$HTML$Attributes$characterReference
        ])))), $andre_dietrich$parser_combinators$Combine$string(quote)));
    };
    var $author$project$Lia$Markdown$HTML$Attributes$tagAttributeUnquotedValue = A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$concat, $andre_dietrich$parser_combinators$Combine$many1($andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $andre_dietrich$parser_combinators$Combine$regex("[^\\s\"'=<>`&]+"),
        $author$project$Lia$Markdown$HTML$Attributes$characterReference
    ]))));
    var $author$project$Lia$Markdown$HTML$Attributes$tagAttributeValue = A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $author$project$Lia$Markdown$HTML$Attributes$tagAttributeUnquotedValue,
        $author$project$Lia$Markdown$HTML$Attributes$tagAttributeQuotedValue('"'),
        $author$project$Lia$Markdown$HTML$Attributes$tagAttributeQuotedValue("'")
    ])), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, $andre_dietrich$parser_combinators$Combine$string("="))), $andre_dietrich$parser_combinators$Combine$succeed(""));
    var $author$project$Lia$Markdown$HTML$Attributes$parse = function(_v0) {
        var url = _v0.a;
        var appendix = _v0.b;
        return A2($andre_dietrich$parser_combinators$Combine$map, A2($author$project$Lia$Markdown$HTML$Attributes$base, url, appendix), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$HTML$Attributes$tagAttributeValue, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, $andre_dietrich$parser_combinators$Combine$regex("[A-Za-z0-9_\\-:]+"))))));
    };
    var $author$project$Lia$Parser$Helper$spaces = $andre_dietrich$parser_combinators$Combine$regex("[	 ]*");
    var $author$project$Lia$Markdown$Inline$Parser$annotations = function() {
        var attr = A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$HTML$Attributes$parse, $andre_dietrich$parser_combinators$Combine$withState(function(c) {
            return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(c.defines.base, c.defines.appendix));
        }));
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Markdown$Inline$Parser$comments, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Maybe$withDefault(_List_Nil), $andre_dietrich$parser_combinators$Combine$maybe(A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Inline$Parser$comment(attr), $author$project$Lia$Parser$Helper$spaces))));
    }();
    var $author$project$Lia$Markdown$Inline$Types$Symbol = F2(function(a, b) {
        return {
            $: "Symbol",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Parser$Symbol$arrows = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Symbol, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟷", $andre_dietrich$parser_combinators$Combine$string("<-->")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟵", $andre_dietrich$parser_combinators$Combine$string("<--")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟶", $andre_dietrich$parser_combinators$Combine$string("-->")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↞", $andre_dietrich$parser_combinators$Combine$string("<<-")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↠", $andre_dietrich$parser_combinators$Combine$string("->>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↔", $andre_dietrich$parser_combinators$Combine$string("<->")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↣", $andre_dietrich$parser_combinators$Combine$string(">->")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↢", $andre_dietrich$parser_combinators$Combine$string("<-<")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "→", $andre_dietrich$parser_combinators$Combine$string("->")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "←", $andre_dietrich$parser_combinators$Combine$string("<-")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↜", $andre_dietrich$parser_combinators$Combine$string("<~")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "↝", $andre_dietrich$parser_combinators$Combine$string("~>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟺", $andre_dietrich$parser_combinators$Combine$string("<==>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟹", $andre_dietrich$parser_combinators$Combine$string("==>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⟸", $andre_dietrich$parser_combinators$Combine$string("<==")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⇔", $andre_dietrich$parser_combinators$Combine$string("<=>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⇒", $andre_dietrich$parser_combinators$Combine$string("=>")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "⇐", $andre_dietrich$parser_combinators$Combine$string("<="))
    ])));
    var $elm$core$Maybe$andThen = F2(function(callback, maybeValue) {
        if (maybeValue.$ === "Just") {
            var value = maybeValue.a;
            return callback(value);
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === "Just") {
            var x = _v0.a;
            return A2($elm$core$List$cons, x, xs);
        } else return xs;
    });
    var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
    });
    var $author$project$Lia$Markdown$Inline$Multimedia$fragment = F2(function(url, params) {
        return _Utils_ap(params, A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$map, $elm$core$Basics$append("#"), A2($elm$core$Maybe$andThen, $elm$core$List$head, $elm$core$List$tail(A2($elm$core$String$split, "#", url))))));
    });
    var $author$project$Lia$Markdown$Inline$Multimedia$preserve = function(url) {
        var params = A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Maybe$map, $elm$core$String$split("&"), A2($elm$core$Maybe$andThen, $elm$core$List$head, A2($elm$core$Maybe$map, $elm$core$String$split("#"), A2($elm$core$Maybe$andThen, $elm$core$List$head, $elm$core$List$tail(A2($elm$core$String$split, "?", url)))))));
        return A2($elm$core$Basics$composeR, $elm$core$List$filterMap(function(w) {
            var _v0 = A2($elm$core$List$filter, $elm$core$String$startsWith(w), params);
            if (!_v0.b) return $elm$core$Maybe$Nothing;
            else {
                var p = _v0.a;
                return $elm$core$Maybe$Just(p);
            }
        }), A2($elm$core$Basics$composeR, $elm$core$String$join("&"), A2($elm$core$Basics$composeR, $elm$core$Basics$append("?"), A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$Inline$Multimedia$fragment(url), function(parameters) {
            if (parameters === "?") return "";
            else return parameters;
        }))));
    };
    var $author$project$Lia$Markdown$Inline$Multimedia$youTubeRules = _List_fromArray([
        "autoplay",
        "cc_lang_pref",
        "color",
        "disablekb",
        "enablejsapi",
        "end",
        "fs",
        "hl",
        "iv_load_policy",
        "list",
        "listType",
        "loop",
        "modestbranding",
        "mute",
        "origin",
        "playlist",
        "playsinline",
        "rel",
        "start",
        "widget_referrer"
    ]);
    var $author$project$Lia$Markdown$Inline$Multimedia$audio = $author$project$Lia$Parser$PatReplace$replace(_List_fromArray([
        {
            by: F2(function(_v0, w) {
                var link = "https://widget.deezer.com/widget/dark/" + w;
                return A2($elm$core$String$startsWith, "artist", w) ? link + "/top_tracks" : link;
            }),
            pattern: "https://(?:www\\.|widget\\.)?deezer\\.com/(?:.*)/(.*/.*)\\??"
        },
        {
            by: F2(function(url, w) {
                return "https://www.youtube.com/embed/" + (w + A2($author$project$Lia$Markdown$Inline$Multimedia$preserve, url, $author$project$Lia$Markdown$Inline$Multimedia$youTubeRules));
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("music\\.(?:youtu\\.be/|youtube\\.com/(?:(?:watch)?\\?(?:.*&)?v(?:i)?=|(?:v|vi|user)/))([^\\?&\"'<> #]+)")
        }
    ]));
    var $andre_dietrich$parser_combinators$Combine$lookAhead = function(p) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
            if (_v0.c.$ === "Ok") {
                var rstate = _v0.a;
                var res = _v0.c.a;
                return _Utils_Tuple3(rstate, stream, $elm$core$Result$Ok(res));
            } else {
                var err = _v0;
                return err;
            }
        }));
    };
    var $author$project$Lia$Parser$Context$checkAbort = $andre_dietrich$parser_combinators$Combine$withState(function(context) {
        var _v0 = context.abort.stack;
        if (!_v0.b) return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0);
        else {
            var name = _v0.a;
            return context.abort.isTrue ? $andre_dietrich$parser_combinators$Combine$fail("abort") : A2($andre_dietrich$parser_combinators$Combine$andThen, function(found) {
                if (found.$ === "Nothing") return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0);
                else return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$fail("abort"), $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
                    return _Utils_update(s, {
                        abort: {
                            isTrue: true,
                            stack: s.abort.stack
                        }
                    });
                }));
            }, $andre_dietrich$parser_combinators$Combine$lookAhead($andre_dietrich$parser_combinators$Combine$maybe($andre_dietrich$parser_combinators$Combine$string(name))));
        }
    });
    var $author$project$Lia$Markdown$Inline$Types$Verbatim = F2(function(a, b) {
        return {
            $: "Verbatim",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Inline$Parser$code = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Verbatim, $author$project$Lia$Parser$Helper$inlineCode);
    var $author$project$Lia$Markdown$Inline$Types$combineHelper = F2(function(input, output) {
        combineHelper: while(true){
            var _v0 = _Utils_Tuple2(input, output);
            if (!_v0.a.b) return $elm$core$List$reverse(output);
            else if (_v0.a.a.$ === "Chars" && !_v0.a.a.b.b && _v0.b.b && _v0.b.a.$ === "Chars" && !_v0.b.a.b.b) {
                var _v1 = _v0.a;
                var _v2 = _v1.a;
                var str1 = _v2.a;
                var is = _v1.b;
                var _v3 = _v0.b;
                var _v4 = _v3.a;
                var str2 = _v4.a;
                var os = _v3.b;
                var $temp$input = is, $temp$output = A2($elm$core$List$cons, A2($author$project$Lia$Markdown$Inline$Types$Chars, _Utils_ap(str2, str1), _List_Nil), os);
                input = $temp$input;
                output = $temp$output;
                continue combineHelper;
            } else {
                var _v5 = _v0.a;
                var i = _v5.a;
                var is = _v5.b;
                var $temp$input = is, $temp$output = A2($elm$core$List$cons, i, output);
                input = $temp$input;
                output = $temp$output;
                continue combineHelper;
            }
        }
    });
    var $author$project$Lia$Markdown$Inline$Types$combine = function(list) {
        return A2($author$project$Lia$Markdown$Inline$Types$combineHelper, list, _List_Nil);
    };
    var $author$project$Lia$Markdown$Inline$Parser$dashes = $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$Inline$Types$Chars("—")), $andre_dietrich$parser_combinators$Combine$string("---")),
        A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$Inline$Types$Chars("–")), $andre_dietrich$parser_combinators$Combine$string("--"))
    ]));
    var $andre_dietrich$parser_combinators$Combine$regexWith = function(_v0) {
        var caseInsensitive = _v0.caseInsensitive;
        var multiline = _v0.multiline;
        return A2($elm$core$Basics$composeR, A2($andre_dietrich$parser_combinators$Combine$regexer, $elm$regex$Regex$fromStringWith({
            caseInsensitive: caseInsensitive,
            multiline: multiline
        }), function($) {
            return $.match;
        }), $andre_dietrich$parser_combinators$Combine$Parser);
    };
    var $author$project$Lia$Markdown$Inline$Parser$scriptBody = A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$concat, A2($andre_dietrich$parser_combinators$Combine$manyTill, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $andre_dietrich$parser_combinators$Combine$regex("[^@\"'`</]+"),
        $andre_dietrich$parser_combinators$Combine$regex("\\s+"),
        $andre_dietrich$parser_combinators$Combine$string("@'"),
        $andre_dietrich$parser_combinators$Combine$string("@"),
        $andre_dietrich$parser_combinators$Combine$regex('"([^"]*|\\\\"|\\\\)*"'),
        $andre_dietrich$parser_combinators$Combine$regex("'([^']*|\\\\'|\\\\)*'"),
        $andre_dietrich$parser_combinators$Combine$regex("`([^`]*|\n|\\\\`|\\\\)*`"),
        $andre_dietrich$parser_combinators$Combine$regex("<(?!/)"),
        $andre_dietrich$parser_combinators$Combine$regex("//[^\n]*"),
        $andre_dietrich$parser_combinators$Combine$string("/")
    ])), A2($andre_dietrich$parser_combinators$Combine$regexWith, {
        caseInsensitive: true,
        multiline: false
    }, "</script>")));
    var $author$project$Lia$Markdown$Inline$Parser$javascriptWithAttributes = function() {
        var attr = A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$HTML$Attributes$parse, $andre_dietrich$parser_combinators$Combine$withState(function(c) {
            return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(c.defines.base, c.defines.appendix));
        }));
        return A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$scriptBody, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(">"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$many(A2($andre_dietrich$parser_combinators$Combine$keep, attr, $andre_dietrich$parser_combinators$Combine$whitespace)), A2($andre_dietrich$parser_combinators$Combine$regexWith, {
            caseInsensitive: true,
            multiline: false
        }, "<script")))));
    }();
    var $elm$core$Tuple$mapFirst = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(func(x), y);
    });
    var $author$project$Lia$Markdown$Effect$Script$Types$Text = function(a) {
        return {
            $: "Text",
            a: a
        };
    };
    var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
    });
    var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
    var $author$project$Lia$Markdown$HTML$Attributes$get = F2(function(name, attr) {
        get: while(true){
            if (!attr.b) return $elm$core$Maybe$Nothing;
            else {
                var _v1 = attr.a;
                var key = _v1.a;
                var value = _v1.b;
                var xs = attr.b;
                if (_Utils_eq(key, name)) return $elm$core$Maybe$Just(value);
                else {
                    var $temp$name = name, $temp$attr = xs;
                    name = $temp$name;
                    attr = $temp$attr;
                    continue get;
                }
            }
        }
    });
    var $author$project$Lia$Markdown$HTML$Attributes$isTrue = function(val) {
        return val === "" || val === "1" || val === "true";
    };
    var $author$project$Lia$Markdown$HTML$Attributes$isSetMaybe = function(name) {
        return A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$HTML$Attributes$get(name), $elm$core$Maybe$map(A2($elm$core$Basics$composeR, $elm$core$String$trim, A2($elm$core$Basics$composeR, $elm$core$String$toLower, $author$project$Lia$Markdown$HTML$Attributes$isTrue))));
    };
    var $author$project$Lia$Markdown$HTML$Attributes$isSet = function(name) {
        return A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$HTML$Attributes$isSetMaybe(name), $elm$core$Maybe$withDefault(false));
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Button_ = function(a) {
        return {
            $: "Button_",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Checkbox_ = function(a) {
        return {
            $: "Checkbox_",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Color_ = {
        $: "Color_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Date_ = {
        $: "Date_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$DatetimeLocal_ = {
        $: "DatetimeLocal_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Email_ = {
        $: "Email_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$File_ = {
        $: "File_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Hidden_ = {
        $: "Hidden_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Image_ = {
        $: "Image_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Month_ = {
        $: "Month_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Number_ = {
        $: "Number_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Password_ = {
        $: "Password_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Radio_ = function(a) {
        return {
            $: "Radio_",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Range_ = {
        $: "Range_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Search_ = {
        $: "Search_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Select_ = function(a) {
        return {
            $: "Select_",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Tel_ = {
        $: "Tel_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Text_ = {
        $: "Text_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Textarea_ = {
        $: "Textarea_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Time_ = {
        $: "Time_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Url_ = {
        $: "Url_"
    };
    var $author$project$Lia$Markdown$Effect$Script$Input$Week_ = {
        $: "Week_"
    };
    var $elm$core$Basics$not = _Basics_not;
    var $author$project$Lia$Markdown$Effect$Script$Input$options = A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$HTML$Attributes$get("options"), A2($elm$core$Basics$composeR, $elm$core$Maybe$map($elm$core$String$split("|")), A2($elm$core$Basics$composeR, $elm$core$Maybe$withDefault(_List_Nil), A2($elm$core$Basics$composeR, $elm$core$List$map($elm$core$String$trim), $elm$core$List$filter(A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not))))));
    var $author$project$Lia$Markdown$Effect$Script$Input$parseType_ = F2(function(params, input_) {
        switch(input_){
            case "button":
                return $author$project$Lia$Markdown$Effect$Script$Input$Button_(false);
            case "submit":
                return $author$project$Lia$Markdown$Effect$Script$Input$Button_(true);
            case "checkbox":
                return $author$project$Lia$Markdown$Effect$Script$Input$Checkbox_($author$project$Lia$Markdown$Effect$Script$Input$options(params));
            case "color":
                return $author$project$Lia$Markdown$Effect$Script$Input$Color_;
            case "date":
                return $author$project$Lia$Markdown$Effect$Script$Input$Date_;
            case "datetime-local":
                return $author$project$Lia$Markdown$Effect$Script$Input$DatetimeLocal_;
            case "email":
                return $author$project$Lia$Markdown$Effect$Script$Input$Email_;
            case "file":
                return $author$project$Lia$Markdown$Effect$Script$Input$File_;
            case "hidden":
                return $author$project$Lia$Markdown$Effect$Script$Input$Hidden_;
            case "image":
                return $author$project$Lia$Markdown$Effect$Script$Input$Image_;
            case "month":
                return $author$project$Lia$Markdown$Effect$Script$Input$Month_;
            case "number":
                return $author$project$Lia$Markdown$Effect$Script$Input$Number_;
            case "password":
                return $author$project$Lia$Markdown$Effect$Script$Input$Password_;
            case "radio":
                return $author$project$Lia$Markdown$Effect$Script$Input$Radio_($author$project$Lia$Markdown$Effect$Script$Input$options(params));
            case "range":
                return $author$project$Lia$Markdown$Effect$Script$Input$Range_;
            case "search":
                return $author$project$Lia$Markdown$Effect$Script$Input$Search_;
            case "select":
                return $author$project$Lia$Markdown$Effect$Script$Input$Select_($author$project$Lia$Markdown$Effect$Script$Input$options(params));
            case "tel":
                return $author$project$Lia$Markdown$Effect$Script$Input$Tel_;
            case "textarea":
                return $author$project$Lia$Markdown$Effect$Script$Input$Textarea_;
            case "time":
                return $author$project$Lia$Markdown$Effect$Script$Input$Time_;
            case "url":
                return $author$project$Lia$Markdown$Effect$Script$Input$Url_;
            case "week":
                return $author$project$Lia$Markdown$Effect$Script$Input$Week_;
            default:
                return $author$project$Lia$Markdown$Effect$Script$Input$Text_;
        }
    });
    var $author$project$Lia$Markdown$Effect$Script$Input$runnable = F2(function(t_, updateOnChange) {
        var _v0 = _Utils_Tuple2(updateOnChange, t_);
        if (_v0.a.$ === "Just") {
            var b = _v0.a.a;
            return b;
        } else if (_v0.b.$ === "Nothing") {
            var _v1 = _v0.a;
            var _v2 = _v0.b;
            return false;
        } else {
            var _v3 = _v0.a;
            var t = _v0.b.a;
            switch(t.$){
                case "Email_":
                    return false;
                case "Password_":
                    return false;
                case "Search_":
                    return false;
                case "Tel_":
                    return false;
                case "Textarea_":
                    return false;
                case "Url_":
                    return false;
                default:
                    return true;
            }
        }
    });
    var $author$project$Lia$Markdown$Effect$Script$Input$from = function(params) {
        var val = A2($elm$core$Maybe$withDefault, "", A2($author$project$Lia$Markdown$HTML$Attributes$get, "value", params));
        var t_ = A2($elm$core$Maybe$map, $author$project$Lia$Markdown$Effect$Script$Input$parseType_(params), A2($author$project$Lia$Markdown$HTML$Attributes$get, "input", params));
        var alwaysActive = A2($author$project$Lia$Markdown$HTML$Attributes$isSet, "input-always-active", params);
        return {
            active: alwaysActive ? true : A2($author$project$Lia$Markdown$HTML$Attributes$isSet, "input-active", params),
            alwaysActive: alwaysActive,
            _default: val,
            type_: t_,
            updateOnChange: A2($author$project$Lia$Markdown$Effect$Script$Input$runnable, t_, A2($author$project$Lia$Markdown$HTML$Attributes$isSetMaybe, "update-on-change", params)),
            value: val
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Intl$datetime = _List_fromArray([
        "calendar",
        "datestyle",
        "day",
        "dayperiod",
        "era",
        "formatmatcher",
        "fractionalseconddigits",
        "hour",
        "hour12",
        "hourcycle",
        "localematcher",
        "minute",
        "month",
        "numberingsystem",
        "second",
        "timestyle",
        "timezone",
        "timezonename",
        "weekday",
        "year"
    ]);
    var $author$project$Lia$Markdown$Effect$Script$Intl$list = _List_fromArray([
        "localematcher",
        "type",
        "localestyle"
    ]);
    var $author$project$Lia$Markdown$Effect$Script$Intl$locale = function(lang) {
        return A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$HTML$Attributes$get("locale"), A2($elm$core$Basics$composeR, $elm$core$Maybe$withDefault(lang), $elm$core$Tuple$pair("locale")));
    };
    var $author$project$Lia$Markdown$Effect$Script$Intl$number = _List_fromArray([
        "compactdisplay",
        "currency",
        "currencydisplay",
        "currencysign",
        "localematcher",
        "maximumfractiondigits",
        "maximumsignificantdigits",
        "minimumfractiondigits",
        "minimumintegerdigits",
        "minimumsignificantdigits",
        "notation",
        "numberingsystem",
        "signdisplay",
        "localestyle",
        "unit",
        "unitdisplay",
        "usegrouping"
    ]);
    var $author$project$Lia$Markdown$Effect$Script$Intl$pluralrules = _List_fromArray([
        "localematcher",
        "type",
        "minimumintegerdigits",
        "minimumfractiondigits",
        "maximumfractiondigits",
        "minimumsignificantdigits",
        "maximumsignificantdigits"
    ]);
    var $author$project$Lia$Markdown$Effect$Script$Intl$relativetime = _List_fromArray([
        "unit",
        "localematcher",
        "numeric",
        "localestyle"
    ]);
    var $elm$core$List$any = F2(function(isOkay, list) {
        any: while(true){
            if (!list.b) return false;
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) return true;
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    });
    var $elm$core$List$member = F2(function(x, xs) {
        return A2($elm$core$List$any, function(a) {
            return _Utils_eq(a, x);
        }, xs);
    });
    var $author$project$Lia$Markdown$HTML$Attributes$isMemberOf = F2(function(names, _v0) {
        var name = _v0.a;
        return A2($elm$core$List$member, name, names);
    });
    var $author$project$Lia$Markdown$HTML$Attributes$filterNames = function(names) {
        return $elm$core$List$filter($author$project$Lia$Markdown$HTML$Attributes$isMemberOf(names));
    };
    var $author$project$Lia$Markdown$Effect$Script$Intl$to = F2(function(format, names) {
        return A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$HTML$Attributes$filterNames(names), A2($elm$core$Basics$composeR, $elm$core$List$cons(_Utils_Tuple2("format", format)), $elm$core$Maybe$Just));
    });
    var $author$project$Lia$Markdown$Effect$Script$Intl$from = F2(function(lang, params) {
        return A2($elm$core$Maybe$map, $elm$core$List$cons(A2($author$project$Lia$Markdown$Effect$Script$Intl$locale, lang, params)), function() {
            var _v0 = A2($elm$core$Maybe$map, $elm$core$String$toLower, A2($author$project$Lia$Markdown$HTML$Attributes$get, "format", params));
            _v0$5: while(true){
                if (_v0.$ === "Just") switch(_v0.a){
                    case "number":
                        return A3($author$project$Lia$Markdown$Effect$Script$Intl$to, "number", $author$project$Lia$Markdown$Effect$Script$Intl$number, params);
                    case "datetime":
                        return A3($author$project$Lia$Markdown$Effect$Script$Intl$to, "datetime", $author$project$Lia$Markdown$Effect$Script$Intl$datetime, params);
                    case "relativetime":
                        return A3($author$project$Lia$Markdown$Effect$Script$Intl$to, "relativetime", $author$project$Lia$Markdown$Effect$Script$Intl$relativetime, params);
                    case "list":
                        return A3($author$project$Lia$Markdown$Effect$Script$Intl$to, "list", $author$project$Lia$Markdown$Effect$Script$Intl$list, params);
                    case "pluralrules":
                        return A3($author$project$Lia$Markdown$Effect$Script$Intl$to, "pluralrules", $author$project$Lia$Markdown$Effect$Script$Intl$pluralrules, params);
                    default:
                        break _v0$5;
                }
                else break _v0$5;
            }
            return $elm$core$Maybe$Nothing;
        }());
    });
    var $author$project$Lia$Markdown$Effect$Script$Types$input = A2($elm$core$Maybe$withDefault, $elm$regex$Regex$never, $elm$regex$Regex$fromString("@input\\(`([^`]+)`\\)"));
    var $author$project$Lia$Markdown$Effect$Script$Types$No = {
        $: "No"
    };
    var $author$project$Lia$Markdown$Effect$Script$Types$Partially = function(a) {
        return {
            $: "Partially",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Effect$Script$Types$Yes = {
        $: "Yes"
    };
    var $author$project$Lia$Markdown$Effect$Script$Types$modifications = function(params) {
        var pattern = A2($author$project$Lia$Markdown$HTML$Attributes$get, "modify", params);
        var _v0 = A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $elm$core$String$trim, $elm$core$String$toLower), pattern);
        if (_v0.$ === "Nothing") return $author$project$Lia$Markdown$Effect$Script$Types$Yes;
        else switch(_v0.a){
            case "true":
                return $author$project$Lia$Markdown$Effect$Script$Types$Yes;
            case "1":
                return $author$project$Lia$Markdown$Effect$Script$Types$Yes;
            case "":
                return $author$project$Lia$Markdown$Effect$Script$Types$Yes;
            case "false":
                return $author$project$Lia$Markdown$Effect$Script$Types$No;
            case "0":
                return $author$project$Lia$Markdown$Effect$Script$Types$No;
            default:
                return A2($elm$core$Maybe$withDefault, $author$project$Lia$Markdown$Effect$Script$Types$No, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "\\n", "\n"), A2($elm$core$Basics$composeR, A2($elm$core$String$replace, "\\t", "	"), $author$project$Lia$Markdown$Effect$Script$Types$Partially)), pattern));
        }
    };
    var $author$project$Lia$Markdown$Effect$Script$Types$push = F5(function(lang, id, params, script, javascript) {
        return A2($elm$core$Array$push, {
            block: A2($author$project$Lia$Markdown$HTML$Attributes$isSet, "block", params),
            counter: 0,
            edit: false,
            effect_id: id,
            highlighting: A2($elm$core$Maybe$withDefault, "javascript", A2($elm$core$Maybe$map, A2($elm$core$String$replace, "text/", ""), A2($author$project$Lia$Markdown$HTML$Attributes$get, "type", params))),
            input: $author$project$Lia$Markdown$Effect$Script$Input$from(params),
            inputs: A2($elm$core$List$filterMap, $elm$core$Basics$identity, A2($elm$core$List$concatMap, function($) {
                return $.submatches;
            }, A2($elm$regex$Regex$find, $author$project$Lia$Markdown$Effect$Script$Types$input, script))),
            intl: A2($author$project$Lia$Markdown$Effect$Script$Intl$from, lang, params),
            modify: $author$project$Lia$Markdown$Effect$Script$Types$modifications(params),
            output: A2($author$project$Lia$Markdown$HTML$Attributes$get, "output", params),
            result: A2($elm$core$Maybe$map, $author$project$Lia$Markdown$Effect$Script$Types$Text, A2($author$project$Lia$Markdown$HTML$Attributes$get, "default", params)),
            runOnce: A2($author$project$Lia$Markdown$HTML$Attributes$isSet, "run-once", params),
            running: false,
            script: script,
            update: false,
            updated: false,
            worker: A2($author$project$Lia$Markdown$HTML$Attributes$isSet, "worker", params)
        }, javascript);
    });
    var $author$project$Lia$Markdown$Effect$Script$Types$count = A2($elm$core$Basics$composeR, $elm$core$Array$length, $elm$core$Basics$add(-1));
    var $author$project$Lia$Markdown$Inline$Parser$scriptID = $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
        return $.effect_model;
    }, A2($elm$core$Basics$composeR, function($) {
        return $.javascript;
    }, A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$Effect$Script$Types$count, $andre_dietrich$parser_combinators$Combine$succeed))));
    var $author$project$Lia$Markdown$Inline$Parser$eScript = function(_default) {
        var state = function(_v0) {
            var attr = _v0.a;
            var script = _v0.b;
            return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(attr), $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
                var effect_model = s.effect_model;
                return _Utils_update(s, {
                    effect_model: _Utils_update(effect_model, {
                        javascript: A5($author$project$Lia$Markdown$Effect$Script$Types$push, s.defines.language, A2($elm$core$Maybe$withDefault, 0, $elm$core$List$head(s.effect_number)), attr, $elm$core$String$trim(script), effect_model.javascript)
                    })
                });
            }));
        };
        return A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$scriptID, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$andThen, state, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$mapFirst(function(attr) {
            return A2($elm$core$List$append, attr, _default);
        }), $author$project$Lia$Markdown$Inline$Parser$javascriptWithAttributes))));
    };
    var $author$project$Lia$Markdown$Inline$Parser$ellipsis = A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$Inline$Types$Chars("…")), $andre_dietrich$parser_combinators$Combine$string("..."));
    var $author$project$Lia$Markdown$Inline$Parser$email = A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Basics$append("mailto:"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("[a-zA-Z0-9_.\\-]+@[a-zA-Z0-9_.\\-]+"), $andre_dietrich$parser_combinators$Combine$maybe($andre_dietrich$parser_combinators$Combine$string("mailto:"))));
    var $author$project$Lia$Markdown$Inline$Types$Formula = F3(function(a, b, c) {
        return {
            $: "Formula",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Inline$Parser$Formula$formula_block = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Formula("true"), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$string("$$")), $andre_dietrich$parser_combinators$Combine$string("$$")));
    var $author$project$Lia$Markdown$Inline$Parser$Formula$formula_inline = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Formula("false"), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("$"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("[^\n$]+"), $andre_dietrich$parser_combinators$Combine$string("$"))));
    var $author$project$Lia$Markdown$Inline$Parser$Formula$formula = A2($andre_dietrich$parser_combinators$Combine$or, $author$project$Lia$Markdown$Inline$Parser$Formula$formula_block, $author$project$Lia$Markdown$Inline$Parser$Formula$formula_inline);
    var $author$project$Lia$Parser$Input$getPermission = $andre_dietrich$parser_combinators$Combine$withState(function(state) {
        return $andre_dietrich$parser_combinators$Combine$succeed(state.input.isEnabled || state.input.grouping);
    });
    var $author$project$Lia$Markdown$Effect$Parser$begin_ = function(e) {
        return A2($andre_dietrich$parser_combinators$Combine$map, function(i) {
            return _Utils_update(e, {
                begin: i
            });
        }, $author$project$Lia$Markdown$Effect$Parser$effect_number);
    };
    var $author$project$Lia$Markdown$Effect$Parser$end_ = function(e) {
        return A2($andre_dietrich$parser_combinators$Combine$map, function(i) {
            return _Utils_update(e, {
                end: $elm$core$Maybe$Just(i)
            });
        }, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$Num$int, $andre_dietrich$parser_combinators$Combine$regex("-[	 ]*")));
    };
    var $author$project$Lia$Markdown$Effect$Parser$playback_ = function(e) {
        return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_update(e, {
            playback: true
        })), A2($andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$string("!>"), $andre_dietrich$parser_combinators$Combine$string("|>")));
    };
    var $author$project$Lia$Markdown$Effect$Parser$voice_ = function(e) {
        return A2($andre_dietrich$parser_combinators$Combine$map, function(str) {
            return _Utils_update(e, {
                voice: $elm$core$String$trim(str)
            });
        }, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("([A-Za-z][A-Za-z0-9]+[ 	]*)+"), $author$project$Lia$Markdown$Macro$Parser$macro));
    };
    var $author$project$Lia$Markdown$Effect$Parser$effect = function(e) {
        return A2($andre_dietrich$parser_combinators$Combine$optional, e, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            $author$project$Lia$Markdown$Effect$Parser$end_(e),
            $author$project$Lia$Markdown$Effect$Parser$begin_(e),
            $author$project$Lia$Markdown$Effect$Parser$playback_(e),
            $author$project$Lia$Markdown$Effect$Parser$voice_(e)
        ])), $andre_dietrich$parser_combinators$Combine$whitespace));
    };
    var $author$project$Lia$Markdown$Effect$Types$empty = function(e) {
        return !e.playback && e.begin < 0;
    };
    var $author$project$Lia$Markdown$Effect$Types$init = function(voice) {
        return {
            begin: -1,
            content: _List_Nil,
            end: $elm$core$Maybe$Nothing,
            id: -1,
            playback: false,
            voice: voice
        };
    };
    var $author$project$Lia$Markdown$Effect$Parser$definition = A2($andre_dietrich$parser_combinators$Combine$andThen, function(e) {
        return $author$project$Lia$Markdown$Effect$Types$empty(e) ? $andre_dietrich$parser_combinators$Combine$fail("no effect definition") : $andre_dietrich$parser_combinators$Combine$succeed(e);
    }, A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Effect$Parser$effect, A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Effect$Parser$effect, A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Effect$Parser$effect, A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Effect$Parser$effect, A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Effect$Types$init, $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
        return $.defines;
    }, A2($elm$core$Basics$composeR, function($) {
        return $.narrator;
    }, $andre_dietrich$parser_combinators$Combine$succeed)))))))));
    var $author$project$Lia$Markdown$Effect$Parser$effect_id = A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
        return _Utils_update(s, {
            effect_id: s.effect_id + 1
        });
    }), $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
        return $.effect_id;
    }, $andre_dietrich$parser_combinators$Combine$succeed)));
    var $author$project$Lia$Markdown$Effect$Parser$inline = function(inlines) {
        return A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Effect$Parser$effect_id, A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Markdown$Effect$Parser$reset_effect_number, A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$manyTill, inlines, $andre_dietrich$parser_combinators$Combine$string("}")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("}{"), A2($andre_dietrich$parser_combinators$Combine$map, F3(function(e, b, c) {
            return _Utils_update(e, {
                content: b,
                id: c
            });
        }), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Effect$Parser$definition, $andre_dietrich$parser_combinators$Combine$string("{")))))));
    };
    var $author$project$Lia$Markdown$Inline$Types$FootnoteMark = F2(function(a, b) {
        return {
            $: "FootnoteMark",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Types$Paragraph = F2(function(a, b) {
        return {
            $: "Paragraph",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Footnote$Model$insert = F3(function(key, val, model) {
        return A3($elm$core$Dict$insert, key, val, model);
    });
    var $author$project$Lia$Markdown$Footnote$Parser$add_footnote = function(_v0) {
        var key = _v0.a;
        var val = _v0.b;
        return $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
            return _Utils_update(s, {
                footnotes: A3($author$project$Lia$Markdown$Footnote$Model$insert, key, val, s.footnotes)
            });
        });
    };
    var $author$project$Lia$Markdown$Footnote$Parser$store = function(_v0) {
        var key = _v0.a;
        var val = _v0.b;
        if (val.$ === "Just") {
            var v = val.a;
            return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$Inline$Types$FootnoteMark(key)), $author$project$Lia$Markdown$Footnote$Parser$add_footnote(_Utils_Tuple2(key, _List_fromArray([
                A2($author$project$Lia$Markdown$Types$Paragraph, _List_Nil, v)
            ]))));
        } else return $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$Inline$Types$FootnoteMark(key));
    };
    var $author$project$Lia$Markdown$Footnote$Parser$inline = function(parser) {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Footnote$Parser$store, A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$maybe(A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$withState($andre_dietrich$parser_combinators$Combine$succeed), A2($andre_dietrich$parser_combinators$Combine$map, F2(function(str, state) {
            return A2(parser, state, str);
        }), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$string(")")), $andre_dietrich$parser_combinators$Combine$string("("))))), A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$string("]")), $andre_dietrich$parser_combinators$Combine$string("[^")))));
    };
    var $author$project$Lia$Markdown$Inline$Parser$baseURL = function(u) {
        return A2($andre_dietrich$parser_combinators$Combine$map, function(_v0) {
            var base = _v0.a;
            var appendix = _v0.b;
            return A3($author$project$Lia$Markdown$HTML$Attributes$toURL, base, appendix, u);
        }, $andre_dietrich$parser_combinators$Combine$withState(function(c) {
            return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(c.defines.base, c.defines.appendix));
        }));
    };
    var $author$project$Lia$Markdown$Inline$Parser$url = A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Inline$Parser$baseURL, $andre_dietrich$parser_combinators$Combine$regex('[a-zA-Z]+://(/)?[a-zA-Z0-9\\.\\-\\_]+\\.([a-z\\.]{2,6})[^ \\]\\)	\n"]*'));
    var $author$project$Lia$Markdown$Inline$Parser$inline_url = A2($andre_dietrich$parser_combinators$Combine$map, function(u) {
        return $author$project$Lia$Markdown$Inline$Types$Ref(A3($author$project$Lia$Markdown$Inline$Types$Link, _List_fromArray([
            A2($author$project$Lia$Markdown$Inline$Types$Chars, u, _List_Nil)
        ]), u, $elm$core$Maybe$Nothing));
    }, $author$project$Lia$Markdown$Inline$Parser$url);
    var $andre_dietrich$parser_combinators$Combine$lazy = function(t) {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, t, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0));
    };
    var $author$project$Lia$Markdown$HTML$Types$InnerHtml = function(a) {
        return {
            $: "InnerHtml",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Inline$Parser$lineBreak = A2($andre_dietrich$parser_combinators$Combine$onsuccess, $elm$core$Basics$always(A2($author$project$Lia$Markdown$Inline$Types$IHTML, $author$project$Lia$Markdown$HTML$Types$InnerHtml("<br>"), _List_Nil)), $andre_dietrich$parser_combinators$Combine$string("\\\n"));
    var $andre_dietrich$parser_combinators$Combine$many1Till = function(p) {
        return A2($elm$core$Basics$composeR, $andre_dietrich$parser_combinators$Combine$manyTill(p), $andre_dietrich$parser_combinators$Combine$andThen(function(result) {
            if (!result.b) return $andre_dietrich$parser_combinators$Combine$fail("not enough results");
            else return $andre_dietrich$parser_combinators$Combine$succeed(result);
        }));
    };
    var $author$project$Lia$Markdown$Inline$Multimedia$tuFreibergRules = _List_fromArray([
        "key",
        "width",
        "height",
        "autoplay",
        "autolightsoff",
        "loop",
        "chapters",
        "related",
        "responsive",
        "t"
    ]);
    var $author$project$Lia$Markdown$Inline$Multimedia$vimeoRules = _List_fromArray([
        "autopause",
        "autoplay",
        "background",
        "byline",
        "color",
        "controls",
        "dnt",
        "keyboard",
        "loop",
        "muted",
        "pip",
        "playsinline",
        "portrait",
        "quality",
        "speed",
        "texttrack",
        "title",
        "transparent"
    ]);
    var $author$project$Lia$Markdown$Inline$Multimedia$website = {
        youtube: "https://www.youtube-nocookie.com/embed/"
    };
    var $author$project$Lia$Markdown$Inline$Multimedia$movie = $author$project$Lia$Parser$PatReplace$replace(_List_fromArray([
        {
            by: F2(function(url, w) {
                return _Utils_ap($author$project$Lia$Markdown$Inline$Multimedia$website.youtube, _Utils_ap(w, A2($author$project$Lia$Markdown$Inline$Multimedia$preserve, url, $author$project$Lia$Markdown$Inline$Multimedia$youTubeRules)));
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:youtu\\.be/|youtube\\.com/(?:(?:watch)?\\?(?:.*&)?v(?:i)?=|(?:v|vi|user)/))([^\\?&\"'<> #]+)")
        },
        {
            by: F2(function(url, w) {
                return "https://player.vimeo.com/video/" + (w + A2($author$project$Lia$Markdown$Inline$Multimedia$preserve, url, $author$project$Lia$Markdown$Inline$Multimedia$vimeoRules));
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:player.)?(?:vimeo\\.com).*?(\\d+)")
        },
        {
            by: F2(function(_v0, w) {
                return "https://www.dailymotion.com/embed/video/" + w;
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:dailymotion\\.com(?:/embed)?/video/)(.+)")
        },
        {
            by: F2(function(_v1, w) {
                return "https://peertube.tv/videos/embed/" + w;
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:peertube\\.tv/videos/watch/)(.+)")
        },
        {
            by: F2(function(_v2, w) {
                return "https://www.teachertube.com/embed/video/" + w;
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:teachertube\\.com).*?(\\d+.*)")
        },
        {
            by: F2(function(url, w) {
                return "https://video.tu-freiberg.de/media/embed?key=" + (w + A2($author$project$Lia$Markdown$Inline$Multimedia$preserve, url, $author$project$Lia$Markdown$Inline$Multimedia$tuFreibergRules));
            }),
            pattern: $author$project$Lia$Parser$UrlPattern$Generic$root("(?:video\\.tu\\-freiberg\\.de/video/[^/]+/)(.+)")
        }
    ]));
    var $author$project$Lia$Markdown$Inline$Parser$nicer_ref = F4(function(ref_type, info_string, url_string, title_string) {
        return A3(ref_type, info_string, url_string, title_string);
    });
    var $author$project$Lia$Markdown$HTML$Parser$attrParser = A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$HTML$Attributes$parse, $andre_dietrich$parser_combinators$Combine$withState(function(c) {
        return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(c.defines.base, c.defines.appendix));
    }));
    var $author$project$Lia$Markdown$HTML$Types$Node = F3(function(a, b, c) {
        return {
            $: "Node",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$HTML$Types$OuterHtml = F3(function(a, b, c) {
        return {
            $: "OuterHtml",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$HTML$Types$SvgNode = F3(function(a, b, c) {
        return {
            $: "SvgNode",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$HTML$Parser$closingTag = function(name) {
        var chompName = A2($andre_dietrich$parser_combinators$Combine$andThen, function(closingName) {
            return _Utils_eq($elm$core$String$toLower(closingName), name) ? $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0) : $andre_dietrich$parser_combinators$Combine$fail("closing tag does not match opening tag: " + name);
        }, $andre_dietrich$parser_combinators$Combine$regex("\\w+(\\-\\w+)*"));
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("\\s*>"), A2($andre_dietrich$parser_combinators$Combine$keep, chompName, $andre_dietrich$parser_combinators$Combine$regex("\n*</[ 	]*")));
    };
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$left = F2(function(n, string) {
        return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
    });
    var $author$project$Lia$Markdown$HTML$Parser$getAllForeignObjects = F2(function(context, svgCode) {
        var parseAttributes = function(attrStr) {
            var _v1 = A3($andre_dietrich$parser_combinators$Combine$runParser, $andre_dietrich$parser_combinators$Combine$many($author$project$Lia$Markdown$HTML$Parser$attrParser), context, attrStr);
            if (_v1.$ === "Ok") {
                var _v2 = _v1.a;
                var attr = _v2.c;
                return attr;
            } else return _List_Nil;
        };
        var findForeignObjects = F4(function(remaining, offset, results, svgParts) {
            findForeignObjects: while(true){
                var _v0 = A2($elm$core$String$indexes, "<foreignObject", remaining);
                if (!_v0.b) return _Utils_Tuple2(A2($elm$core$String$join, "", $elm$core$List$reverse(A2($elm$core$List$cons, remaining, svgParts))), $elm$core$List$reverse(results));
                else {
                    var startIndex = _v0.a;
                    var contentStart = startIndex + $elm$core$String$length("<foreignObject");
                    var beforeForeignObject = A2($elm$core$String$left, startIndex, remaining);
                    var newSvgParts = A2($elm$core$List$cons, beforeForeignObject, svgParts);
                    var afterStart = A2($elm$core$String$dropLeft, contentStart, remaining);
                    var tagEndIndex = A2($elm$core$Maybe$withDefault, $elm$core$String$length(afterStart), $elm$core$List$head(A2($elm$core$String$indexes, ">", afterStart)));
                    var attributesString = $elm$core$String$trim(A3($elm$core$String$slice, 0, tagEndIndex, afterStart));
                    var attributes = parseAttributes(attributesString);
                    var contentStartIndex = contentStart + tagEndIndex + 1;
                    var content = A2($elm$core$String$dropLeft, contentStartIndex, remaining);
                    var endTagIndex = A2($elm$core$Maybe$withDefault, $elm$core$String$length(content), $elm$core$List$head(A2($elm$core$String$indexes, "</foreignObject>", content)));
                    var foreignObjectContent = A2($elm$core$String$left, endTagIndex, content);
                    var newRemaining = A2($elm$core$String$dropLeft, endTagIndex + $elm$core$String$length("</foreignObject>"), content);
                    var $temp$remaining = newRemaining, $temp$offset = offset + contentStartIndex + endTagIndex + $elm$core$String$length("</foreignObject>"), $temp$results = A2($elm$core$List$cons, _Utils_Tuple2(attributes, foreignObjectContent), results), $temp$svgParts = newSvgParts;
                    remaining = $temp$remaining;
                    offset = $temp$offset;
                    results = $temp$results;
                    svgParts = $temp$svgParts;
                    continue findForeignObjects;
                }
            }
        });
        return A4(findForeignObjects, svgCode, 0, _List_Nil, _List_Nil);
    });
    var $author$project$Lia$Parser$Helper$newlines = $andre_dietrich$parser_combinators$Combine$regex("\n*");
    var $author$project$Lia$Parser$Context$popAbort = A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0), $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
        return _Utils_update(s, {
            abort: {
                isTrue: false,
                stack: A2($elm$core$List$drop, 1, s.abort.stack)
            }
        });
    }));
    var $author$project$Lia$Markdown$HTML$Parser$subParse = F3(function(defines, parser, code) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$runParser, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$many(parser), $andre_dietrich$parser_combinators$Combine$regex("( |	|\n)*")), defines, code + "\n");
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var state = _v1.a;
            var stream = _v1.b;
            var s = _v1.c;
            return _Utils_Tuple2(state, s);
        } else return _Utils_Tuple2(defines, _List_Nil);
    });
    var $author$project$Lia$Markdown$HTML$Attributes$toString = A2($elm$core$Basics$composeR, $elm$core$List$map(function(_v0) {
        var key = _v0.a;
        var value = _v0.b;
        return _Utils_ap(key, $elm$core$String$isEmpty(value) ? "" : '="' + (value + '"'));
    }), $elm$core$String$join(" "));
    var $author$project$Lia$Markdown$HTML$Parser$toStringNode = F3(function(name, attributes, tagBody) {
        return "<" + (name + (" " + ($author$project$Lia$Markdown$HTML$Attributes$toString(attributes) + (">" + (tagBody + ("</" + (name + ">")))))));
    });
    var $author$project$Lia$Markdown$HTML$Parser$tag = F2(function(parser, _v0) {
        var tagType = _v0.a;
        var attributes = _v0.b;
        switch(tagType.$){
            case "HtmlNode":
                var name = tagType.a;
                return A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Context$popAbort, A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$manyTill, A2($andre_dietrich$parser_combinators$Combine$keep, parser, $author$project$Lia$Parser$Helper$newlines), $author$project$Lia$Markdown$HTML$Parser$closingTag(name)), A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Context$addAbort("</" + (name + ">")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("[ 	]*>[ 	]*\n*"), $andre_dietrich$parser_combinators$Combine$succeed(A2($author$project$Lia$Markdown$HTML$Types$Node, name, attributes))))));
            case "HtmlVoidNode":
                var name = tagType.a;
                return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(">"), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$maybe($andre_dietrich$parser_combinators$Combine$string("/")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, $andre_dietrich$parser_combinators$Combine$succeed(A3($author$project$Lia$Markdown$HTML$Types$Node, name, attributes, _List_Nil))))));
            case "WebComponent":
                var name = tagType.a;
                return A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Parser$Helper$stringTill($author$project$Lia$Markdown$HTML$Parser$closingTag(name)), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("[ 	]*>"), $andre_dietrich$parser_combinators$Combine$succeed(A2($author$project$Lia$Markdown$HTML$Types$OuterHtml, name, attributes))));
            case "LiaKeep":
                return A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$HTML$Types$InnerHtml, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Parser$Helper$stringTill($author$project$Lia$Markdown$HTML$Parser$closingTag("lia-keep")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(">"), $andre_dietrich$parser_combinators$Combine$whitespace)));
            default:
                return A2($andre_dietrich$parser_combinators$Combine$andThen, function(_v9) {
                    var state = _v9.a;
                    var node = _v9.b;
                    return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(node), $andre_dietrich$parser_combinators$Combine$putState(state));
                }, A2($andre_dietrich$parser_combinators$Combine$map, function(_v2) {
                    var code = _v2.a;
                    var state = _v2.b;
                    var _v3 = A2($author$project$Lia$Markdown$HTML$Parser$getAllForeignObjects, state, code);
                    var svgCode = _v3.a;
                    var foreignObjects = _v3.b;
                    var _v4 = A3($elm$core$List$foldl, F2(function(_v5, _v6) {
                        var attr = _v5.a;
                        var content = _v5.b;
                        var beforeState = _v6.a;
                        var accList = _v6.b;
                        var _v7 = A3($author$project$Lia$Markdown$HTML$Parser$subParse, beforeState, parser, content);
                        var afterState = _v7.a;
                        var parsedContent = _v7.b;
                        return _Utils_Tuple2(afterState, A2($elm$core$List$cons, _Utils_Tuple2(attr, parsedContent), accList));
                    }), _Utils_Tuple2(state, _List_Nil), foreignObjects);
                    var newState = _v4.a;
                    var parsedForeignObjects = _v4.b;
                    if (!foreignObjects.b) return _Utils_Tuple2(state, $author$project$Lia$Markdown$HTML$Types$InnerHtml(A3($author$project$Lia$Markdown$HTML$Parser$toStringNode, "svg", attributes, svgCode)));
                    else return _Utils_Tuple2(newState, A3($author$project$Lia$Markdown$HTML$Types$SvgNode, attributes, svgCode, parsedForeignObjects));
                }, A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$withState(function(state) {
                    return $andre_dietrich$parser_combinators$Combine$succeed(state);
                }), A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Parser$Helper$stringTill($author$project$Lia$Markdown$HTML$Parser$closingTag("svg")), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(">"), $andre_dietrich$parser_combinators$Combine$whitespace))))));
        }
    });
    var $author$project$Lia$Markdown$HTML$Types$HtmlNode = function(a) {
        return {
            $: "HtmlNode",
            a: a
        };
    };
    var $author$project$Lia$Markdown$HTML$Types$HtmlVoidNode = function(a) {
        return {
            $: "HtmlVoidNode",
            a: a
        };
    };
    var $author$project$Lia$Markdown$HTML$Types$LiaKeep = {
        $: "LiaKeep"
    };
    var $author$project$Lia$Markdown$HTML$Types$SVG = {
        $: "SVG"
    };
    var $author$project$Lia$Markdown$HTML$Types$WebComponent = function(a) {
        return {
            $: "WebComponent",
            a: a
        };
    };
    var $elm$core$String$contains = _String_contains;
    var $author$project$Lia$Markdown$HTML$Parser$voidElements = _List_fromArray([
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ]);
    var $author$project$Lia$Markdown$HTML$Parser$isVoidElement = function(name) {
        return A2($elm$core$List$member, name, $author$project$Lia$Markdown$HTML$Parser$voidElements);
    };
    var $author$project$Lia$Markdown$HTML$Parser$toTag = function(name) {
        switch(name){
            case "script":
                return $andre_dietrich$parser_combinators$Combine$fail("");
            case "lia-keep":
                return $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$HTML$Types$LiaKeep);
            case "svg":
                return $andre_dietrich$parser_combinators$Combine$succeed($author$project$Lia$Markdown$HTML$Types$SVG);
            default:
                return $andre_dietrich$parser_combinators$Combine$succeed(A2($elm$core$String$contains, "-", name) ? $author$project$Lia$Markdown$HTML$Types$WebComponent(name) : $author$project$Lia$Markdown$HTML$Parser$isVoidElement(name) ? $author$project$Lia$Markdown$HTML$Types$HtmlVoidNode(name) : $author$project$Lia$Markdown$HTML$Types$HtmlNode(name));
        }
    };
    var $author$project$Lia$Markdown$HTML$Parser$tagName = A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$HTML$Parser$toTag, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$toLower, $andre_dietrich$parser_combinators$Combine$regex("\\w+(\\-\\w+)*")));
    var $author$project$Lia$Markdown$HTML$Parser$parse = function(parser) {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$HTML$Parser$tag(parser), A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$many($author$project$Lia$Markdown$HTML$Parser$attrParser), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$HTML$Parser$tagName, $andre_dietrich$parser_combinators$Combine$regex("[ 	]*<[ 	]*"))))));
    };
    var $author$project$Lia$Markdown$Quiz$Block$Types$Quiz = F2(function(options, solution) {
        return {
            options: options,
            solution: solution
        };
    });
    var $author$project$Lia$Markdown$Quiz$Block$Types$Text = function(a) {
        return {
            $: "Text",
            a: a
        };
    };
    var $author$project$Lia$Markdown$Quiz$Block$Parser$unescapeString = function(input) {
        return A3($elm$core$String$replace, "\\@", "@", A3($elm$core$String$replace, "\\]", "]", A3($elm$core$String$replace, "\\[", "[", A3($elm$core$String$replace, "\\)", ")", A3($elm$core$String$replace, "\\(", "(", A3($elm$core$String$replace, "\\|", "|", input))))));
    };
    var $author$project$Lia$Markdown$Quiz$Block$Parser$check = F4(function(parse_inlines, state, id, str) {
        var option = $elm$core$String$trim(str);
        var inlines = parse_inlines(state);
        return A2($elm$core$String$startsWith, "(", option) && A2($elm$core$String$endsWith, ")", option) ? _Utils_Tuple2(id, inlines($author$project$Lia$Markdown$Quiz$Block$Parser$unescapeString($elm$core$String$trim(A3($elm$core$String$slice, 1, -1, option))))) : _Utils_Tuple2(-1, inlines($author$project$Lia$Markdown$Quiz$Block$Parser$unescapeString(option)));
    });
    var $elm$regex$Regex$split = _Regex_splitAtMost(_Regex_infinity);
    var $author$project$Lia$Markdown$Quiz$Block$Parser$splitAtUnescapedPipe = function(input) {
        var regex = A2($elm$core$Maybe$withDefault, $elm$regex$Regex$never, $elm$regex$Regex$fromString("(?<!\\\\)\\|"));
        return A2($elm$core$List$map, A2($elm$core$String$replace, "\\|", "|"), A2($elm$regex$Regex$split, regex, input));
    };
    var $author$project$Lia$Markdown$Quiz$Block$Types$Select = F2(function(a, b) {
        return {
            $: "Select",
            a: a,
            b: b
        };
    });
    var $author$project$Lia$Markdown$Quiz$Block$Parser$toSelect = function(list) {
        return $andre_dietrich$parser_combinators$Combine$succeed(A2($author$project$Lia$Markdown$Quiz$Block$Types$Quiz, A2($elm$core$List$map, $elm$core$Tuple$second, list), A2($author$project$Lia$Markdown$Quiz$Block$Types$Select, false, A2($elm$core$List$map, $elm$core$Tuple$first, A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$le(0)), list)))));
    };
    var $author$project$Lia$Markdown$Quiz$Block$Parser$split = F3(function(parse_inlines, str, state) {
        var _v0 = $author$project$Lia$Markdown$Quiz$Block$Parser$splitAtUnescapedPipe(str);
        if (_v0.b && !_v0.b.b) {
            var solution = _v0.a;
            var str_ = $elm$core$String$trim(A3($elm$core$String$replace, "_", " ", solution));
            return str_ === "?" || str_ === "!" || str_ === "" ? $andre_dietrich$parser_combinators$Combine$fail("") : $andre_dietrich$parser_combinators$Combine$succeed(A2($author$project$Lia$Markdown$Quiz$Block$Types$Quiz, _List_Nil, $author$project$Lia$Markdown$Quiz$Block$Types$Text($author$project$Lia$Markdown$Quiz$Block$Parser$unescapeString($elm$core$String$trim(solution)))));
        } else {
            var options = _v0;
            return $author$project$Lia$Markdown$Quiz$Block$Parser$toSelect(A2($elm$core$List$indexedMap, A2($author$project$Lia$Markdown$Quiz$Block$Parser$check, parse_inlines, state), options));
        }
    });
    var $author$project$Lia$Markdown$Quiz$Block$Types$Drop = F3(function(a, b, c) {
        return {
            $: "Drop",
            a: a,
            b: b,
            c: c
        };
    });
    var $author$project$Lia$Markdown$Quiz$Block$Parser$toDrop = function(list) {
        return $andre_dietrich$parser_combinators$Combine$succeed(A2($author$project$Lia$Markdown$Quiz$Block$Types$Quiz, A2($elm$core$List$map, $elm$core$Tuple$second, list), A3($author$project$Lia$Markdown$Quiz$Block$Types$Drop, false, false, A2($elm$core$List$map, $elm$core$Tuple$first, A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$le(0)), list)))));
    };
    var $author$project$Lia$Markdown$Quiz$Block$Parser$splitDrop = F3(function(parse_inlines, str, state) {
        var _v0 = $author$project$Lia$Markdown$Quiz$Block$Parser$splitAtUnescapedPipe(str);
        if (_v0.b && !_v0.b.b) {
            var solution = _v0.a;
            var option = $elm$core$String$trim(solution);
            return $author$project$Lia$Markdown$Quiz$Block$Parser$toDrop(A2($elm$core$List$indexedMap, A2($author$project$Lia$Markdown$Quiz$Block$Parser$check, parse_inlines, state), _List_fromArray([
                A2($elm$core$String$startsWith, "(", option) && A2($elm$core$String$endsWith, ")", option) ? option : "(" + (option + ")")
            ])));
        } else {
            var options = _v0;
            return $author$project$Lia$Markdown$Quiz$Block$Parser$toDrop(A2($elm$core$List$indexedMap, A2($author$project$Lia$Markdown$Quiz$Block$Parser$check, parse_inlines, state), options));
        }
    });
    var $author$project$Lia$Markdown$Quiz$Block$Parser$string1Till = A2($elm$core$Basics$composeR, $andre_dietrich$parser_combinators$Combine$many1Till(A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$succeed(_Utils_chr("]")), $andre_dietrich$parser_combinators$Combine$string("\\]")), $andre_dietrich$parser_combinators$Combine$Char$anyChar)), $andre_dietrich$parser_combinators$Combine$map($elm$core$String$fromList));
    var $author$project$Lia$Markdown$Quiz$Block$Parser$pattern = function(parse_inlines) {
        return A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$andThen, $andre_dietrich$parser_combinators$Combine$withState, A2($andre_dietrich$parser_combinators$Combine$map, F2(function(s, context) {
            return A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair($elm$core$String$length(s)), A3($author$project$Lia$Markdown$Quiz$Block$Parser$split, parse_inlines, s, context));
        }), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Quiz$Block$Parser$string1Till($andre_dietrich$parser_combinators$Combine$string("]]")), $andre_dietrich$parser_combinators$Combine$string("[[")))), A2($andre_dietrich$parser_combinators$Combine$andThen, $andre_dietrich$parser_combinators$Combine$withState, A2($andre_dietrich$parser_combinators$Combine$map, F2(function(s, context) {
            return A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Tuple$pair($elm$core$String$length(s)), A3($author$project$Lia$Markdown$Quiz$Block$Parser$splitDrop, parse_inlines, s, context));
        }), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Quiz$Block$Parser$string1Till($andre_dietrich$parser_combinators$Combine$string("]]")), $andre_dietrich$parser_combinators$Combine$string("[->[")))));
    };
    var $author$project$Lia$Markdown$Inline$Parser$refToEmbed = function(ref) {
        if (ref.$ === "Audio") {
            var info = ref.a;
            var _v1 = ref.b;
            var extern = _v1.a;
            var link = _v1.b;
            var title = ref.c;
            return !extern && (A2($elm$core$String$contains, "soundcloud.com", link) || A2($elm$core$String$contains, "spotify.com", link)) ? A3($author$project$Lia$Markdown$Inline$Types$Embed, info, link, title) : ref;
        } else return ref;
    };
    var $author$project$Lia$Parser$Context$searchIndex = $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
        return $.search_index;
    }, $andre_dietrich$parser_combinators$Combine$succeed));
    var $author$project$Lia$Markdown$Inline$Parser$ref_url_1 = $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $author$project$Lia$Markdown$Inline$Parser$url,
        A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$regex("#[^ 	\\)]+"), $author$project$Lia$Parser$Context$searchIndex),
        A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Markdown$Inline$Parser$baseURL, $andre_dietrich$parser_combinators$Combine$regex('[^\\)\n "]*'))
    ]));
    var $author$project$Lia$Markdown$Inline$Parser$ref_url_2 = A2($andre_dietrich$parser_combinators$Combine$or, $author$project$Lia$Markdown$Inline$Parser$url, A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$regex('[^\\)\n "]*'), A2($andre_dietrich$parser_combinators$Combine$map, F2(function(_v0, url_) {
        var base = _v0.a;
        var appendix = _v0.b;
        return A3($author$project$Lia$Markdown$HTML$Attributes$toURL, base, appendix, url_);
    }), $andre_dietrich$parser_combinators$Combine$withState(function(s) {
        return $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple2(s.defines.base, s.defines.appendix));
    }))));
    var $author$project$Lia$Markdown$Inline$Parser$Symbol$smileys = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Symbol, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE42", $andre_dietrich$parser_combinators$Combine$string(":-)")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE09", $andre_dietrich$parser_combinators$Combine$string(";-)")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE00", $andre_dietrich$parser_combinators$Combine$string(":-D")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE2E", $andre_dietrich$parser_combinators$Combine$string(":-O")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE41", $andre_dietrich$parser_combinators$Combine$string(":-(")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE10", $andre_dietrich$parser_combinators$Combine$string(":-|")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE15", $andre_dietrich$parser_combinators$Combine$string(":-/")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE15", $andre_dietrich$parser_combinators$Combine$string(":-\\")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE1B", $andre_dietrich$parser_combinators$Combine$string(":-P")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE1B", $andre_dietrich$parser_combinators$Combine$string(":-p")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE1C", $andre_dietrich$parser_combinators$Combine$string(";-P")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE1C", $andre_dietrich$parser_combinators$Combine$string(";-p")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE17", $andre_dietrich$parser_combinators$Combine$string(":-*")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE18", $andre_dietrich$parser_combinators$Combine$string(";-*")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE02", $andre_dietrich$parser_combinators$Combine$string(":')")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE22", $andre_dietrich$parser_combinators$Combine$string(":'(")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE2D", $andre_dietrich$parser_combinators$Combine$string(":'[")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE20", $andre_dietrich$parser_combinators$Combine$string(":-[")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE37", $andre_dietrich$parser_combinators$Combine$string(":-#")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE37", $andre_dietrich$parser_combinators$Combine$string(":-X")),
        A2($andre_dietrich$parser_combinators$Combine$onsuccess, "\uD83D\uDE16", $andre_dietrich$parser_combinators$Combine$string(":-\xa7"))
    ])));
    var $author$project$Lia$Markdown$Inline$Parser$stringBase = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Chars, $andre_dietrich$parser_combinators$Combine$regex("[^\\[\\]\\(\\)@*+_~:;`\\^{}\\\\\\n<>=$ \"\\-|']+"));
    var $author$project$Lia$Markdown$Inline$Parser$stringBase2 = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Chars, $andre_dietrich$parser_combinators$Combine$regex("[^\n*+\\-]+"));
    var $author$project$Lia$Markdown$Inline$Parser$stringCharacters = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Chars, $andre_dietrich$parser_combinators$Combine$regex("[\\[\\]\\(\\)~:_;=${}\\-+\"*<>|']"));
    var $author$project$Lia$Markdown$Inline$Parser$stringEscape = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Chars, A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$regex("[@\\^*_+~`\\\\${}\\[\\]|#\\-<>'\".]"), $andre_dietrich$parser_combinators$Combine$string("\\")));
    var $author$project$Lia$Markdown$Inline$Parser$stringSpaces = A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Chars, $andre_dietrich$parser_combinators$Combine$regex("[ 	]+"));
    var $author$project$Lia$Markdown$Inline$Parser$toContainer = function(inline_list) {
        var _v0 = $author$project$Lia$Markdown$Inline$Types$combine(inline_list);
        if (_v0.b && !_v0.b.b) {
            var one = _v0.a;
            return one;
        } else {
            var moreThanOne = _v0;
            return A2($author$project$Lia$Markdown$Inline$Types$Container, moreThanOne, _List_Nil);
        }
    };
    var $author$project$Lia$Markdown$Inline$Parser$toInlines = function(element) {
        if (element.$ === "Container" && !element.b.b) {
            var elements = element.a;
            return elements;
        } else return _List_fromArray([
            element
        ]);
    };
    var $author$project$Lia$Markdown$Inline$Parser$between_ = function(str) {
        return A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$Inline$Types$combine, $author$project$Lia$Markdown$Inline$Parser$toContainer), A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$many1Till, $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines(), $andre_dietrich$parser_combinators$Combine$string(str)), $andre_dietrich$parser_combinators$Combine$string(str)));
    };
    var $author$project$Lia$Markdown$Inline$Parser$between_2 = F2(function(begin, end) {
        return A2($andre_dietrich$parser_combinators$Combine$map, A2($elm$core$Basics$composeR, $author$project$Lia$Markdown$Inline$Types$combine, $author$project$Lia$Markdown$Inline$Parser$toContainer), A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$many1Till, $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines(), $andre_dietrich$parser_combinators$Combine$string(end)), $andre_dietrich$parser_combinators$Combine$string(begin)));
    });
    var $author$project$Lia$Markdown$Inline$Parser$parse_inlines = F2(function(state, str) {
        var _v1 = A3($andre_dietrich$parser_combinators$Combine$runParser, $author$project$Lia$Markdown$Inline$Parser$cyclic$line(), state, A3($elm$core$String$replace, "\n", " ", str));
        if (_v1.$ === "Ok") {
            var _v2 = _v1.a;
            var rslt = _v2.c;
            return rslt;
        } else return _List_Nil;
    });
    var $author$project$Lia$Markdown$Inline$Parser$ref_pattern = F3(function(ref_type, info_type, url_type) {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(")"), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title(), A2($andre_dietrich$parser_combinators$Combine$andMap, url_type, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("("), A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Parser$nicer_ref(ref_type), info_type)))));
    });
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$stringWithStyle() {
        return $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Bold, $author$project$Lia$Markdown$Inline$Parser$between_("**")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Bold, $author$project$Lia$Markdown$Inline$Parser$between_("__")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Italic, $author$project$Lia$Markdown$Inline$Parser$between_("*")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Italic, $author$project$Lia$Markdown$Inline$Parser$between_("_")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Underline, $author$project$Lia$Markdown$Inline$Parser$between_("~~")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Strike, $author$project$Lia$Markdown$Inline$Parser$between_("~")),
            A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Superscript, $author$project$Lia$Markdown$Inline$Parser$between_("^")),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$stringQuote()
        ]));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$stringQuote() {
        return A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
            return $.defines;
        }, A2($elm$core$Basics$composeR, function($) {
            return $.typographic_quotation;
        }, A2($elm$core$Basics$composeR, function($) {
            return $._double;
        }, $andre_dietrich$parser_combinators$Combine$succeed)))), A2($andre_dietrich$parser_combinators$Combine$map, F2(function(text, _v5) {
            var start = _v5.a;
            var end = _v5.b;
            return $author$project$Lia$Markdown$Inline$Types$Container(_List_fromArray([
                A2($author$project$Lia$Markdown$Inline$Types$Chars, start, _List_Nil),
                text,
                A2($author$project$Lia$Markdown$Inline$Types$Chars, end, _List_Nil)
            ]));
        }), $author$project$Lia$Markdown$Inline$Parser$between_('"'))), A2($andre_dietrich$parser_combinators$Combine$andMap, $andre_dietrich$parser_combinators$Combine$withState(A2($elm$core$Basics$composeR, function($) {
            return $.defines;
        }, A2($elm$core$Basics$composeR, function($) {
            return $.typographic_quotation;
        }, A2($elm$core$Basics$composeR, function($) {
            return $.single;
        }, $andre_dietrich$parser_combinators$Combine$succeed)))), A2($andre_dietrich$parser_combinators$Combine$map, F2(function(text, _v6) {
            var start = _v6.a;
            var end = _v6.b;
            return $author$project$Lia$Markdown$Inline$Types$Container(_List_fromArray([
                A2($author$project$Lia$Markdown$Inline$Types$Chars, " " + start, _List_Nil),
                text,
                A2($author$project$Lia$Markdown$Inline$Types$Chars, end, _List_Nil)
            ]));
        }), A2($author$project$Lia$Markdown$Inline$Parser$between_2, " '", "'"))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$reference() {
        return A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Ref, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refEmbed(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refMovie(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refAudio(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refImage(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refMail(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refPreview(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refQr(),
            $author$project$Lia$Markdown$Inline$Parser$cyclic$refLink()
        ])));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refMovie() {
        return A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video(), $andre_dietrich$parser_combinators$Combine$string("!?"));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video() {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(")"), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title(), A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Multimedia$movie, $author$project$Lia$Markdown$Inline$Parser$ref_url_2), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("("), A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Movie, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info())))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refAudio() {
        return A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio(), $andre_dietrich$parser_combinators$Combine$string("?"));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio() {
        return A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Parser$refToEmbed, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(")"), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title(), A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Multimedia$audio, $author$project$Lia$Markdown$Inline$Parser$ref_url_2), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("("), A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Audio, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info()))))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refQr() {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(")"), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title(), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$ref_url_1, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("("), A2($andre_dietrich$parser_combinators$Combine$onsuccess, $author$project$Lia$Markdown$Inline$Types$QR_Link, A2($andre_dietrich$parser_combinators$Combine$regexWith, {
            caseInsensitive: true,
            multiline: false
        }, "\\[\\w*qr-code\\w*]"))))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refPreview() {
        return A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string(")"), A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title(), A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Markdown$Inline$Parser$ref_url_1, A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$string("("), A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$regex("\\w*]"), A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
            A2($andre_dietrich$parser_combinators$Combine$onsuccess, $author$project$Lia$Markdown$Inline$Types$Preview_Lia, A2($andre_dietrich$parser_combinators$Combine$regexWith, {
                caseInsensitive: true,
                multiline: false
            }, "lia")),
            A2($andre_dietrich$parser_combinators$Combine$onsuccess, $author$project$Lia$Markdown$Inline$Types$Preview_Link, A2($andre_dietrich$parser_combinators$Combine$regexWith, {
                caseInsensitive: true,
                multiline: false
            }, "link"))
        ])), A2($andre_dietrich$parser_combinators$Combine$regexWith, {
            caseInsensitive: true,
            multiline: false
        }, "\\[\\w*preview-")))))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title() {
        return $andre_dietrich$parser_combinators$Combine$maybe(A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Parser$toInlines, A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Helper$spaces, A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$or, $author$project$Lia$Markdown$Inline$Parser$between_('"'), $author$project$Lia$Markdown$Inline$Parser$between_("'")), $author$project$Lia$Parser$Helper$spaces))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refMail() {
        return A3($author$project$Lia$Markdown$Inline$Parser$ref_pattern, $author$project$Lia$Markdown$Inline$Types$Mail, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(), $author$project$Lia$Markdown$Inline$Parser$email);
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refLink() {
        return A3($author$project$Lia$Markdown$Inline$Parser$ref_pattern, $author$project$Lia$Markdown$Inline$Types$Link, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(), $author$project$Lia$Markdown$Inline$Parser$ref_url_1);
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refImage() {
        return A2($andre_dietrich$parser_combinators$Combine$keep, A3($author$project$Lia$Markdown$Inline$Parser$ref_pattern, $author$project$Lia$Markdown$Inline$Types$Image, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(), $author$project$Lia$Markdown$Inline$Parser$ref_url_2), $andre_dietrich$parser_combinators$Combine$string("!"));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$refEmbed() {
        return A2($andre_dietrich$parser_combinators$Combine$keep, A3($author$project$Lia$Markdown$Inline$Parser$ref_pattern, $author$project$Lia$Markdown$Inline$Types$Embed, $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(), $author$project$Lia$Markdown$Inline$Parser$ref_url_1), $andre_dietrich$parser_combinators$Combine$string("??"));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info() {
        return A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$combine, A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Context$popAbort, A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$manyTill, $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines(), $andre_dietrich$parser_combinators$Combine$string("]")), A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Context$addAbort("]"), $andre_dietrich$parser_combinators$Combine$string("[")))));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$line() {
        return A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$combine, $andre_dietrich$parser_combinators$Combine$many1($author$project$Lia$Markdown$Inline$Parser$cyclic$inlines()));
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines() {
        return $andre_dietrich$parser_combinators$Combine$lazy(function(_v3) {
            return A2($andre_dietrich$parser_combinators$Combine$keep, A2($andre_dietrich$parser_combinators$Combine$or, A2($andre_dietrich$parser_combinators$Combine$map, function(_v4) {
                var attr = _v4.a;
                var id = _v4.b;
                return A2($author$project$Lia$Markdown$Inline$Types$Script, id, attr);
            }, $author$project$Lia$Markdown$Inline$Parser$eScript(_List_Nil)), A2($andre_dietrich$parser_combinators$Combine$andMap, A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Inline$Parser$annotations, $author$project$Lia$Markdown$Macro$Parser$macro), $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
                $author$project$Lia$Markdown$Inline$Parser$code,
                $author$project$Lia$Markdown$Footnote$Parser$inline($author$project$Lia$Markdown$Inline$Parser$parse_inlines),
                $author$project$Lia$Markdown$Inline$Parser$cyclic$reference(),
                $author$project$Lia$Markdown$Inline$Parser$Formula$formula,
                A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$EInline, $author$project$Lia$Markdown$Effect$Parser$inline($author$project$Lia$Markdown$Inline$Parser$cyclic$inlines())),
                $author$project$Lia$Markdown$Inline$Parser$cyclic$input(),
                $author$project$Lia$Markdown$Inline$Parser$cyclic$strings()
            ])))), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Markdown$Macro$Parser$macro, $author$project$Lia$Parser$Context$checkAbort));
        });
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$input() {
        return A2($andre_dietrich$parser_combinators$Combine$andThen, function(isAllowed) {
            return isAllowed ? A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$Quiz, A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Parser$Input$add, $author$project$Lia$Markdown$Quiz$Block$Parser$pattern($author$project$Lia$Markdown$Inline$Parser$parse_inlines))) : $andre_dietrich$parser_combinators$Combine$fail("no inputs allowed");
        }, $author$project$Lia$Parser$Input$getPermission);
    }
    function $author$project$Lia$Markdown$Inline$Parser$cyclic$strings() {
        return $andre_dietrich$parser_combinators$Combine$lazy(function(_v0) {
            return A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
                $author$project$Lia$Markdown$Inline$Parser$inline_url,
                $author$project$Lia$Markdown$Inline$Parser$ellipsis,
                $author$project$Lia$Markdown$Inline$Parser$stringBase,
                $author$project$Lia$Markdown$Inline$Parser$Symbol$arrows,
                $author$project$Lia$Markdown$Inline$Parser$dashes,
                $author$project$Lia$Markdown$Inline$Parser$Symbol$smileys,
                $author$project$Lia$Markdown$Inline$Parser$stringEscape,
                $author$project$Lia$Markdown$Inline$Parser$cyclic$stringWithStyle(),
                $author$project$Lia$Markdown$Inline$Parser$stringSpaces,
                A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Markdown$Inline$Types$IHTML, $author$project$Lia$Markdown$HTML$Parser$parse($author$project$Lia$Markdown$Inline$Parser$cyclic$inlines())),
                $author$project$Lia$Markdown$Inline$Parser$stringCharacters,
                $author$project$Lia$Markdown$Inline$Parser$lineBreak,
                $author$project$Lia$Markdown$Inline$Parser$stringBase2
            ])), $author$project$Lia$Parser$Context$checkAbort);
        });
    }
    try {
        var $author$project$Lia$Markdown$Inline$Parser$stringWithStyle = $author$project$Lia$Markdown$Inline$Parser$cyclic$stringWithStyle();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$stringWithStyle = function() {
            return $author$project$Lia$Markdown$Inline$Parser$stringWithStyle;
        };
        var $author$project$Lia$Markdown$Inline$Parser$stringQuote = $author$project$Lia$Markdown$Inline$Parser$cyclic$stringQuote();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$stringQuote = function() {
            return $author$project$Lia$Markdown$Inline$Parser$stringQuote;
        };
        var $author$project$Lia$Markdown$Inline$Parser$reference = $author$project$Lia$Markdown$Inline$Parser$cyclic$reference();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$reference = function() {
            return $author$project$Lia$Markdown$Inline$Parser$reference;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refMovie = $author$project$Lia$Markdown$Inline$Parser$cyclic$refMovie();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refMovie = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refMovie;
        };
        var $author$project$Lia$Markdown$Inline$Parser$ref_video = $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video = function() {
            return $author$project$Lia$Markdown$Inline$Parser$ref_video;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refAudio = $author$project$Lia$Markdown$Inline$Parser$cyclic$refAudio();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refAudio = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refAudio;
        };
        var $author$project$Lia$Markdown$Inline$Parser$ref_audio = $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio = function() {
            return $author$project$Lia$Markdown$Inline$Parser$ref_audio;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refQr = $author$project$Lia$Markdown$Inline$Parser$cyclic$refQr();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refQr = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refQr;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refPreview = $author$project$Lia$Markdown$Inline$Parser$cyclic$refPreview();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refPreview = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refPreview;
        };
        var $author$project$Lia$Markdown$Inline$Parser$ref_title = $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_title = function() {
            return $author$project$Lia$Markdown$Inline$Parser$ref_title;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refMail = $author$project$Lia$Markdown$Inline$Parser$cyclic$refMail();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refMail = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refMail;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refLink = $author$project$Lia$Markdown$Inline$Parser$cyclic$refLink();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refLink = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refLink;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refImage = $author$project$Lia$Markdown$Inline$Parser$cyclic$refImage();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refImage = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refImage;
        };
        var $author$project$Lia$Markdown$Inline$Parser$refEmbed = $author$project$Lia$Markdown$Inline$Parser$cyclic$refEmbed();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$refEmbed = function() {
            return $author$project$Lia$Markdown$Inline$Parser$refEmbed;
        };
        var $author$project$Lia$Markdown$Inline$Parser$ref_info = $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info = function() {
            return $author$project$Lia$Markdown$Inline$Parser$ref_info;
        };
        var $author$project$Lia$Markdown$Inline$Parser$line = $author$project$Lia$Markdown$Inline$Parser$cyclic$line();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$line = function() {
            return $author$project$Lia$Markdown$Inline$Parser$line;
        };
        var $author$project$Lia$Markdown$Inline$Parser$inlines = $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$inlines = function() {
            return $author$project$Lia$Markdown$Inline$Parser$inlines;
        };
        var $author$project$Lia$Markdown$Inline$Parser$input = $author$project$Lia$Markdown$Inline$Parser$cyclic$input();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$input = function() {
            return $author$project$Lia$Markdown$Inline$Parser$input;
        };
        var $author$project$Lia$Markdown$Inline$Parser$strings = $author$project$Lia$Markdown$Inline$Parser$cyclic$strings();
        $author$project$Lia$Markdown$Inline$Parser$cyclic$strings = function() {
            return $author$project$Lia$Markdown$Inline$Parser$strings;
        };
    } catch ($) {
        throw "Some top-level definitions from `Lia.Markdown.Inline.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    stringWithStyle\n  │     ↓\n  │    stringQuote\n  │     ↓\n  │    reference\n  │     ↓\n  │    refMovie\n  │     ↓\n  │    ref_video\n  │     ↓\n  │    refAudio\n  │     ↓\n  │    ref_audio\n  │     ↓\n  │    refQr\n  │     ↓\n  │    refPreview\n  │     ↓\n  │    ref_title\n  │     ↓\n  │    between_\n  │     ↓\n  │    between_2\n  │     ↓\n  │    refMail\n  │     ↓\n  │    refLink\n  │     ↓\n  │    refImage\n  │     ↓\n  │    refEmbed\n  │     ↓\n  │    ref_info\n  │     ↓\n  │    line\n  │     ↓\n  │    inlines\n  │     ↓\n  │    input\n  │     ↓\n  │    parse_inlines\n  │     ↓\n  │    ref_pattern\n  │     ↓\n  │    strings\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $author$project$Lia$Definition$Parser$inline_parser = F2(function(defines, str) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$runParser, $author$project$Lia$Markdown$Inline$Parser$line, A3($author$project$Lia$Parser$Context$init, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, defines), A3($elm$core$String$replace, "\n", " ", str));
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var rslt = _v1.c;
            return rslt;
        } else return _List_Nil;
    });
    var $author$project$I18n$Quotation$single1 = _List_fromArray([
        "zh",
        "en",
        "es",
        "ru",
        "hi",
        "id",
        "ta",
        "tr",
        "ur",
        "no",
        "ko",
        "af",
        "sq",
        "fil",
        "eo",
        "ga",
        "mt",
        "ia",
        "io",
        "ua",
        "cy",
        "gd"
    ]);
    var $author$project$I18n$Quotation$single2 = _List_fromArray([
        "fr",
        "am",
        "ti",
        "ug",
        "rm"
    ]);
    var $author$project$I18n$Quotation$single3 = _List_fromArray([
        "sv",
        "fi",
        "bg",
        "hr",
        "bs"
    ]);
    var $author$project$I18n$Quotation$single4 = _List_fromArray([
        "de",
        "cs",
        "sr",
        "sk",
        "lt",
        "is",
        "sl",
        "sb",
        "uz"
    ]);
    var $author$project$I18n$Quotation$single5 = _List_fromArray([
        "nl",
        "he"
    ]);
    var $author$project$I18n$Quotation$single6 = _List_fromArray([
        "bo",
        "khb",
        "tdd"
    ]);
    var $author$project$I18n$Quotation$one = function(languageCode) {
        return A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single1) ? _Utils_Tuple2("‘", "’") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single4) ? _Utils_Tuple2("‚", "‘") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single2) ? _Utils_Tuple2("‹", "›") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single5) ? _Utils_Tuple2("‚", "’") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single3) ? _Utils_Tuple2("’", "’") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$single6) ? _Utils_Tuple2("〈", "〉") : _Utils_Tuple2("'", "'");
    };
    var $author$project$I18n$Quotation$double1 = _List_fromArray([
        "en",
        "hi",
        "id",
        "pt",
        "ur",
        "vi",
        "tr",
        "ta",
        "th",
        "ko",
        "fil",
        "az",
        "af",
        "lo",
        "lv",
        "mt",
        "ia",
        "eo",
        "ga",
        "cy",
        "gd"
    ]);
    var $author$project$I18n$Quotation$double2 = _List_fromArray([
        "de",
        "sr",
        "bg",
        "cs",
        "sk",
        "lt",
        "mk",
        "sq",
        "sl",
        "ka",
        "et",
        "is",
        "sb"
    ]);
    var $author$project$I18n$Quotation$double3 = _List_fromArray([
        "sv",
        "fi",
        "bs"
    ]);
    var $author$project$I18n$Quotation$double4 = _List_fromArray([
        "es",
        "fr",
        "ar",
        "ru",
        "fa",
        "uz",
        "kk",
        "am",
        "uk",
        "ps",
        "hy",
        "km",
        "oc",
        "ca",
        "gl",
        "el",
        "it",
        "ug",
        "eu",
        "rm",
        "ti",
        "kaa",
        "no",
        "io"
    ]);
    var $author$project$I18n$Quotation$double5 = _List_fromArray([
        "pl",
        "nl",
        "hu",
        "ro",
        "hr"
    ]);
    var $author$project$I18n$Quotation$double6 = _List_fromArray([
        "da"
    ]);
    var $author$project$I18n$Quotation$double7 = _List_fromArray([
        "bo",
        "khb",
        "tdd"
    ]);
    var $author$project$I18n$Quotation$double8 = _List_fromArray([
        "zh",
        "ja"
    ]);
    var $author$project$I18n$Quotation$two = function(languageCode) {
        return A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double8) ? _Utils_Tuple2("「", "」") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double4) ? _Utils_Tuple2("\xab", "\xbb") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double1) ? _Utils_Tuple2("“", "”") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double2) ? _Utils_Tuple2("„", "“") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double5) ? _Utils_Tuple2("„", "”") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double3) ? _Utils_Tuple2("”", "”") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double7) ? _Utils_Tuple2("《", "》") : A2($elm$core$List$member, languageCode, $author$project$I18n$Quotation$double6) ? _Utils_Tuple2("\xbb", "\xab") : _Utils_Tuple2('"', '"');
    };
    var $author$project$I18n$Quotation$quotation = function(languageCode) {
        return {
            _double: $author$project$I18n$Quotation$two(languageCode),
            single: $author$project$I18n$Quotation$one(languageCode)
        };
    };
    var $author$project$Lia$Definition$Parser$set = function(fct) {
        return $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
            return _Utils_update(s, {
                defines: fct(s.defines)
            });
        });
    };
    var $author$project$Lia$Definition$Parser$store = function(_v0) {
        var key_ = _v0.a;
        var value_ = _v0.b;
        switch(key_){
            case "attribute":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        attributes: A2($elm$core$List$append, c.attributes, _List_fromArray([
                            A2($author$project$Lia$Definition$Parser$inline_parser, c, value_)
                        ]))
                    });
                });
            case "author":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        author: value_
                    });
                });
            case "base":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        base: value_
                    });
                });
            case "comment":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    var singleLineComment = $author$project$Lia$Definition$Parser$reduce(value_);
                    return A2($author$project$Lia$Markdown$Macro$Parser$add, _Utils_Tuple2("comment", singleLineComment), _Utils_update(c, {
                        comment: A2($author$project$Lia$Definition$Parser$inline_parser, c, singleLineComment)
                    }));
                });
            case "dark":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        lightMode: function() {
                            var _v2 = $elm$core$String$toLower(value_);
                            switch(_v2){
                                case "true":
                                    return $elm$core$Maybe$Just(false);
                                case "false":
                                    return $elm$core$Maybe$Just(true);
                                default:
                                    return $elm$core$Maybe$Nothing;
                            }
                        }()
                    });
                });
            case "date":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        date: value_
                    });
                });
            case "email":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        email: value_
                    });
                });
            case "import":
                return $author$project$Lia$Definition$Parser$set($author$project$Lia$Definition$Types$add_imports(value_));
            case "language":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        language: value_,
                        typographic_quotation: $author$project$I18n$Quotation$quotation(value_)
                    });
                });
            case "link":
                return $author$project$Lia$Definition$Parser$set(A2($author$project$Lia$Definition$Types$addToResources, $author$project$Lia$Definition$Types$Link, value_));
            case "logo":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        logo: A3($author$project$Lia$Markdown$HTML$Attributes$toURL, c.base, c.appendix, value_)
                    });
                });
            case "narrator":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        narrator: value_
                    });
                });
            case "script":
                return $author$project$Lia$Definition$Parser$set(A2($author$project$Lia$Definition$Types$addToResources, $author$project$Lia$Definition$Types$Script, value_));
            case "SCRIPT":
                return $author$project$Lia$Definition$Parser$set(A2($author$project$Lia$Definition$Types$addToResources, $author$project$Lia$Definition$Types$Module, value_));
            case "translation":
                return $author$project$Lia$Definition$Parser$set($author$project$Lia$Definition$Types$add_translation(value_));
            case "formula":
                return $author$project$Lia$Definition$Parser$set($author$project$Lia$Definition$Types$add_formula(value_));
            case "version":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        version: value_
                    });
                });
            case "mode":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        mode: function() {
                            var _v3 = $elm$core$String$toLower(value_);
                            switch(_v3){
                                case "textbook":
                                    return $elm$core$Maybe$Just($author$project$Lia$Settings$Types$Textbook);
                                case "presentation":
                                    return $elm$core$Maybe$Just($author$project$Lia$Settings$Types$Presentation);
                                case "slides":
                                    return $elm$core$Maybe$Just($author$project$Lia$Settings$Types$Slides);
                                default:
                                    return $elm$core$Maybe$Nothing;
                            }
                        }()
                    });
                });
            case "debug":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        debug: value_ === "true"
                    });
                });
            case "onload":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        onload: value_
                    });
                });
            case "icon":
                return $author$project$Lia$Definition$Parser$set(function(c) {
                    return _Utils_update(c, {
                        macro: A3($elm$core$Dict$insert, "icon", A3($author$project$Lia$Markdown$HTML$Attributes$toURL, c.base, c.appendix, value_), c.macro)
                    });
                });
            default:
                return $author$project$Lia$Definition$Parser$set($author$project$Lia$Markdown$Macro$Parser$add(_Utils_Tuple2(key_, value_)));
        }
    };
    var $author$project$Lia$Definition$Parser$defs = $andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $andre_dietrich$parser_combinators$Combine$skip(A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Definition$Parser$multiline, $andre_dietrich$parser_combinators$Combine$regex("@@@.*\n"))),
        $andre_dietrich$parser_combinators$Combine$skip(A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Definition$Parser$lines, $andre_dietrich$parser_combinators$Combine$regex("@@.*\n"))),
        A2($andre_dietrich$parser_combinators$Combine$andThen, $author$project$Lia$Definition$Parser$store, $author$project$Lia$Definition$Parser$key_value)
    ]));
    var $author$project$Lia$Definition$Parser$definition = $andre_dietrich$parser_combinators$Combine$lazy(function(_v0) {
        return $andre_dietrich$parser_combinators$Combine$skip($author$project$Lia$Markdown$Inline$Parser$comment(A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, $andre_dietrich$parser_combinators$Combine$many1(A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Definition$Parser$defs, $andre_dietrich$parser_combinators$Combine$whitespace)))));
    });
    var $author$project$Lia$Definition$Parser$parse = $andre_dietrich$parser_combinators$Combine$skip(A2($andre_dietrich$parser_combinators$Combine$ignore, $andre_dietrich$parser_combinators$Combine$whitespace, $andre_dietrich$parser_combinators$Combine$maybe(A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$modifyState(function(s) {
        return _Utils_update(s, {
            defines_updated: true
        });
    }), $author$project$Lia$Definition$Parser$definition))));
    var $author$project$Error$Message$parseDefinition = F3(function(first, _v0, message) {
        var code = _v0.a;
        var errorLine = _v0.b;
        var end = _Utils_cmp(errorLine + 10, $elm$core$String$length(code)) > 0 ? $elm$core$String$length(code) : errorLine + 10;
        var begin = errorLine < 10 ? 0 : errorLine - 10;
        return (first ? "\n> I was trying to parse the **first** part of the course, which is either an\n> HTML-comment or something else, until I reach the header (which is marked by\n> an `#`). But, everything I got was the following:" : "> I have a problem with the following part of the code:") + ('\n\n<!-- data-showGutter data-firstLineNumber="' + ($elm$core$String$fromInt(begin) + ('" -->\n````` markdown\n...\n' + (A2($elm$core$String$join, "\n", A2($elm$core$List$take, end - begin, A2($elm$core$List$drop, begin, $elm$core$String$lines(code)))) + ("\n...\n`````\n" + ((first ? "\n> I might be wrong, but in most cases this refers to a falsely loaded HTML page!\n>\n> Please make sure, that the course you try to load is a Markdown file, which\n> is served as a plain text file...\n" : "> If you see this in the editor, try to fix it otherwise contact the creator.\n") + ("\n---\n\n**Error Message:**\n\n```\n" + (message + "\n```\n\n---\n\nIf it should work, and you think you have detected a bug, please contact us. For\nmore information see the [last Section](#get-help?).\n"))))))));
    });
    var $author$project$Lia$Parser$Parser$parse_definition = F3(function(base, appendix, code) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$runParser, A2($andre_dietrich$parser_combinators$Combine$ignore, A2($andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$string("#"), $author$project$Lia$Parser$Helper$stringTill($andre_dietrich$parser_combinators$Combine$regex("\n#"))), A2($andre_dietrich$parser_combinators$Combine$keep, $author$project$Lia$Definition$Parser$parse, $andre_dietrich$parser_combinators$Combine$regex("\\s*"))), A3($author$project$Lia$Parser$Context$init, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, A2($author$project$Lia$Definition$Types$default, base, appendix)), code + "\n");
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var state = _v1.a;
            var data = _v1.b;
            return $elm$core$Result$Ok(_Utils_Tuple2(state.defines, "#" + data.input));
        } else {
            var _v2 = _v0.a;
            var stream = _v2.b;
            var ms = _v2.c;
            return $elm$core$Result$Err($elm$core$String$trim(code) === "" ? $author$project$Error$Message$emptyFile : A3($author$project$Error$Message$parseDefinition, true, _Utils_Tuple2(code, $andre_dietrich$parser_combinators$Combine$currentLocation(stream).line), A2($author$project$Lia$Parser$Parser$formatError, ms, stream)));
        }
    });
    var $author$project$Lia$Section$Base = F3(function(indentation, title, code) {
        return {
            code: code,
            indentation: indentation,
            title: title
        };
    });
    var $author$project$Lia$Parser$Preprocessor$check = function(c) {
        return !c ? $andre_dietrich$parser_combinators$Combine$fail("") : $andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0);
    };
    var $andre_dietrich$parser_combinators$Combine$currentColumn = A2($elm$core$Basics$composeR, $andre_dietrich$parser_combinators$Combine$currentLocation, function($) {
        return $.column;
    });
    var $andre_dietrich$parser_combinators$Combine$withColumn = function(f) {
        return $andre_dietrich$parser_combinators$Combine$Parser(F2(function(state, stream) {
            return A3($andre_dietrich$parser_combinators$Combine$app, f($andre_dietrich$parser_combinators$Combine$currentColumn(stream)), state, stream);
        }));
    };
    var $author$project$Lia$Parser$Preprocessor$body = A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$concat, $andre_dietrich$parser_combinators$Combine$many($andre_dietrich$parser_combinators$Combine$choice(_List_fromArray([
        $andre_dietrich$parser_combinators$Combine$regex("(?:[^#`<]+|[\\x0D\n]+|<!--[\\S\\s]{0,1000}?-->)"),
        $andre_dietrich$parser_combinators$Combine$regex("(`{3,})[\\S\\s]*?\\1"),
        $andre_dietrich$parser_combinators$Combine$regex("`.+?`"),
        A2($andre_dietrich$parser_combinators$Combine$regexWith, {
            caseInsensitive: true,
            multiline: false
        }, "<(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)[ 	]*/?>"),
        $andre_dietrich$parser_combinators$Combine$regex("(?:<([\\w+\\-]+)[\\S\\s]*?<[ 	]*/[ 	]*\\1[ 	]*>|`|<)"),
        $andre_dietrich$parser_combinators$Combine$regex("#+(\\w|[^\\u0000-\\u007F]|[ 	]*\n)"),
        A2($andre_dietrich$parser_combinators$Combine$keep, $andre_dietrich$parser_combinators$Combine$string("#"), $andre_dietrich$parser_combinators$Combine$withColumn($author$project$Lia$Parser$Preprocessor$check))
    ]))));
    var $author$project$Lia$Parser$Helper$newline = $andre_dietrich$parser_combinators$Combine$string("\n");
    var $author$project$Lia$Parser$Preprocessor$title_str = A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Helper$newline, $author$project$Lia$Markdown$Inline$Parser$line);
    var $author$project$Lia$Parser$Preprocessor$title_tag = A2($andre_dietrich$parser_combinators$Combine$ignore, $author$project$Lia$Parser$Helper$spaces1, A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$String$length, $andre_dietrich$parser_combinators$Combine$regex("#+")));
    var $author$project$Lia$Parser$Preprocessor$section = A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Parser$Preprocessor$body, A2($andre_dietrich$parser_combinators$Combine$andMap, $author$project$Lia$Parser$Preprocessor$title_str, A2($andre_dietrich$parser_combinators$Combine$map, $author$project$Lia$Section$Base, $author$project$Lia$Parser$Preprocessor$title_tag)));
    var $author$project$Lia$Parser$Parser$parse_titles = F2(function(defines, code) {
        var _v0 = A3($andre_dietrich$parser_combinators$Combine$runParser, $author$project$Lia$Parser$Preprocessor$section, A3($author$project$Lia$Parser$Context$init, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, defines), code);
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var data = _v1.b;
            var rslt = _v1.c;
            return $elm$core$Result$Ok(_Utils_Tuple2(rslt, data.input));
        } else {
            var _v2 = _v0.a;
            var stream = _v2.b;
            var ms = _v2.c;
            return $elm$core$Result$Err(A2($author$project$Lia$Parser$Parser$formatError, ms, stream));
        }
    });
    var $elm$core$Array$getHelp = F3(function(shift, index, tree) {
        getHelp: while(true){
            var pos = $elm$core$Array$bitMask & index >>> shift;
            var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (_v0.$ === "SubTree") {
                var subTree = _v0.a;
                var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$index = index, $temp$tree = subTree;
                shift = $temp$shift;
                index = $temp$index;
                tree = $temp$tree;
                continue getHelp;
            } else {
                var values = _v0.a;
                return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
            }
        }
    });
    var $elm$core$Array$tailIndex = function(len) {
        return len >>> 5 << 5;
    };
    var $elm$core$Array$get = F2(function(index, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        return index < 0 || _Utils_cmp(index, len) > -1 ? $elm$core$Maybe$Nothing : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1 ? $elm$core$Maybe$Just(A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(A3($elm$core$Array$getHelp, startShift, index, tree));
    });
    var $author$project$Lia$Utils$get = F2(function(i, list) {
        get: while(true){
            if (!list.b) return $elm$core$Maybe$Nothing;
            else {
                var r = list.a;
                var rs = list.b;
                if (i <= 0) return $elm$core$Maybe$Just(r);
                else {
                    var $temp$i = i - 1, $temp$list = rs;
                    i = $temp$i;
                    list = $temp$list;
                    continue get;
                }
            }
        }
    });
    var $author$project$Lia$Markdown$Effect$Types$isIn_ = F2(function(effect, id) {
        var _v0 = effect.end;
        if (_v0.$ === "Nothing") return _Utils_cmp(effect.begin, id) < 1;
        else {
            var end = _v0.a;
            return _Utils_cmp(effect.begin, id) < 1 && _Utils_cmp(end, id) > 0;
        }
    });
    var $author$project$Lia$Markdown$Effect$Types$isIn = F2(function(id, effect) {
        return A2($elm$core$Maybe$withDefault, true, A2($elm$core$Maybe$map, $author$project$Lia$Markdown$Effect$Types$isIn_(effect), id));
    });
    var $author$project$Lia$Markdown$Effect$Script$Types$text = function(stdout) {
        if (stdout.$ === "Text") {
            var str = stdout.a;
            return $elm$core$Maybe$Just(str);
        } else return $elm$core$Maybe$Nothing;
    };
    var $author$project$Lia$Markdown$Inline$Stringify$inline2string = F2(function(config, inline) {
        inline2string: while(true){
            _v1$14: while(true)switch(inline.$){
                case "Chars":
                    var str = inline.a;
                    return str;
                case "Bold":
                    var x = inline.a;
                    var $temp$config = config, $temp$inline = x;
                    config = $temp$config;
                    inline = $temp$inline;
                    continue inline2string;
                case "Italic":
                    var x = inline.a;
                    var $temp$config = config, $temp$inline = x;
                    config = $temp$config;
                    inline = $temp$inline;
                    continue inline2string;
                case "Strike":
                    var x = inline.a;
                    var $temp$config = config, $temp$inline = x;
                    config = $temp$config;
                    inline = $temp$inline;
                    continue inline2string;
                case "Underline":
                    var x = inline.a;
                    var $temp$config = config, $temp$inline = x;
                    config = $temp$config;
                    inline = $temp$inline;
                    continue inline2string;
                case "Superscript":
                    var x = inline.a;
                    var $temp$config = config, $temp$inline = x;
                    config = $temp$config;
                    inline = $temp$inline;
                    continue inline2string;
                case "Verbatim":
                    var str = inline.a;
                    return str;
                case "Formula":
                    var str = inline.b;
                    return str;
                case "Ref":
                    var ref = inline.a;
                    return A2($author$project$Lia$Markdown$Inline$Stringify$ref2string, config, ref);
                case "IHTML":
                    if (inline.a.$ === "Node") {
                        var _v2 = inline.a;
                        var x = _v2.c;
                        return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, x);
                    } else break _v1$14;
                case "Container":
                    var x = inline.a;
                    return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, x);
                case "EInline":
                    var e = inline.a;
                    return A2($author$project$Lia$Markdown$Effect$Types$isIn, config.visible, e) ? A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, e.content) : "";
                case "Script":
                    var i = inline.a;
                    return A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$andThen, $author$project$Lia$Markdown$Effect$Script$Types$text, A2($elm$core$Maybe$andThen, function($) {
                        return $.result;
                    }, A2($elm$core$Array$get, i, config.scripts))));
                case "Quiz":
                    var _v3 = inline.a;
                    var id = _v3.b;
                    var _v4 = A2($elm$core$Array$get, id, config.input.state);
                    _v4$2: while(true){
                        if (_v4.$ === "Just") switch(_v4.a.$){
                            case "Text":
                                var str = _v4.a.a;
                                return str;
                            case "Select":
                                if (_v4.a.b.b && !_v4.a.b.b.b) {
                                    var _v5 = _v4.a;
                                    var _v6 = _v5.b;
                                    var id2 = _v6.a;
                                    return _Utils_eq(id2, -1) ? "" : A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$map, $author$project$Lia$Markdown$Inline$Stringify$stringify_(config), A2($elm$core$Maybe$andThen, $author$project$Lia$Utils$get(id2), A2($elm$core$Array$get, id, config.input.options))));
                                } else break _v4$2;
                            default:
                                break _v4$2;
                        }
                        else break _v4$2;
                    }
                    return "";
                default:
                    break _v1$14;
            }
            return "";
        }
    });
    var $author$project$Lia$Markdown$Inline$Stringify$ref2string = F2(function(config, ref) {
        switch(ref.$){
            case "Movie":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Image":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Audio":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Link":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Mail":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Embed":
                var alt = ref.a;
                return A2($author$project$Lia$Markdown$Inline$Stringify$stringify_, config, alt);
            case "Preview_Lia":
                return "preview-lia";
            case "Preview_Link":
                return "preview-link";
            default:
                return "qr-code";
        }
    });
    var $author$project$Lia$Markdown$Inline$Stringify$stringify_ = function(config) {
        return A2($elm$core$Basics$composeR, $elm$core$List$map($author$project$Lia$Markdown$Inline$Stringify$inline2string(config)), $elm$core$String$concat);
    };
    var $author$project$Lia$Markdown$Inline$Stringify$stringify = $author$project$Lia$Markdown$Inline$Stringify$stringify_({
        input: {
            options: $elm$core$Array$empty,
            state: $elm$core$Array$empty
        },
        scripts: $elm$core$Array$empty,
        visible: $elm$core$Maybe$Nothing
    });
    var $elm$core$Result$toMaybe = function(result) {
        if (result.$ === "Ok") {
            var v = result.a;
            return $elm$core$Maybe$Just(v);
        } else return $elm$core$Maybe$Nothing;
    };
    var $author$project$Preview$analyze = function(readme) {
        var _v0 = A3($author$project$Lia$Parser$Parser$parse_definition, "", "", readme);
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var definition = _v1.a;
            var code = _v1.b;
            var title = A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, function($) {
                return $.title;
            }), $elm$core$Result$toMaybe(A2($author$project$Lia$Parser$Parser$parse_titles, definition, code))));
            return _Utils_Tuple2(code, $author$project$Preview$output(A2($elm$core$Tuple$pair, true, $elm$json$Json$Encode$object(_List_fromArray([
                _Utils_Tuple2("logo", $elm$json$Json$Encode$string(definition.logo)),
                _Utils_Tuple2("icon", A2($elm$core$Maybe$withDefault, $elm$json$Json$Encode$null, A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, A2($elm$core$Dict$get, "icon", definition.macro)))),
                _Utils_Tuple2("title", $elm$json$Json$Encode$string($author$project$Lia$Markdown$Inline$Stringify$stringify(title))),
                _Utils_Tuple2("author", $elm$json$Json$Encode$string(definition.author)),
                _Utils_Tuple2("tags", $elm$json$Json$Encode$string(A2($elm$core$Maybe$withDefault, "", A2($elm$core$Dict$get, "tags", definition.macro)))),
                _Utils_Tuple2("email", $elm$json$Json$Encode$string(definition.email)),
                _Utils_Tuple2("description", $elm$json$Json$Encode$string($author$project$Lia$Markdown$Inline$Stringify$stringify(definition.comment))),
                _Utils_Tuple2("version", $elm$json$Json$Encode$string(definition.version))
            ])))));
        } else {
            var log = _v0.a;
            return _Utils_Tuple2("", A2($author$project$Preview$error, "parse", log));
        }
    };
    var $author$project$Preview$update = F2(function(msg, _v0) {
        var readme = msg.a;
        return $author$project$Preview$analyze(readme);
    });
    var $elm$core$Platform$worker = _Platform_worker;
    var $author$project$Preview$main = $elm$core$Platform$worker({
        init: $author$project$Preview$init,
        subscriptions: function(_v0) {
            return $author$project$Preview$input($author$project$Preview$Analyze);
        },
        update: $author$project$Preview$update
    });
    _Platform_export({
        "Preview": {
            "init": $author$project$Preview$main(A2($elm$json$Json$Decode$andThen, function(cmd) {
                return $elm$json$Json$Decode$succeed({
                    cmd: cmd
                });
            }, A2($elm$json$Json$Decode$field, "cmd", $elm$json$Json$Decode$string)))({
                "versions": {
                    "elm": "0.19.1"
                },
                "types": {
                    "message": "Preview.Msg",
                    "aliases": {},
                    "unions": {
                        "Preview.Msg": {
                            "args": [],
                            "tags": {
                                "Analyze": [
                                    "String.String"
                                ]
                            }
                        },
                        "String.String": {
                            "args": [],
                            "tags": {
                                "String": []
                            }
                        }
                    }
                }
            })
        }
    });
    //////////////////// HMR BEGIN ////////////////////
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/ /*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */ if (module.hot) {
        (function() {
            "use strict";
            //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
            if (typeof Object.assign != "function") Object.assign = function(target) {
                "use strict";
                if (target == null) throw new TypeError("Cannot convert undefined or null to object");
                target = Object(target);
                for(var index = 1; index < arguments.length; index++){
                    var source = arguments[index];
                    if (source != null) {
                        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                    }
                }
                return target;
            };
            // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
            // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
            var elmVersion;
            if (typeof elm$core$Maybe$Just !== "undefined") elmVersion = "0.19.0";
            else if (typeof $elm$core$Maybe$Just !== "undefined") elmVersion = "0.19.1";
            else throw new Error("Could not determine Elm version");
            function elmSymbol(symbol) {
                try {
                    switch(elmVersion){
                        case "0.19.0":
                            return eval(symbol);
                        case "0.19.1":
                            return eval("$" + symbol);
                        default:
                            throw new Error("Cannot resolve " + symbol + ". Elm version unknown!");
                    }
                } catch (e) {
                    if (e instanceof ReferenceError) return undefined;
                    else throw e;
                }
            }
            var instances = module.hot.data ? module.hot.data.instances || {} : {};
            var uid = module.hot.data ? module.hot.data.uid || 0 : 0;
            if (Object.keys(instances).length === 0) log("[elm-hot] Enabled");
            var cancellers = [];
            // These 2 variables act as dynamically-scoped variables which are set only when the
            // Elm module's hooked init function is called.
            var initializingInstance = null;
            var swappingInstance = null;
            module.hot.accept();
            module.hot.dispose(function(data) {
                data.instances = instances;
                data.uid = uid;
                // Cleanup pending async tasks
                // First, make sure that no new tasks can be started until we finish replacing the code
                _Scheduler_binding = function() {
                    return _Scheduler_fail(new Error("[elm-hot] Inactive Elm instance."));
                };
                // Second, kill pending tasks belonging to the old instance
                if (cancellers.length) {
                    log("[elm-hot] Killing " + cancellers.length + " running processes...");
                    try {
                        cancellers.forEach(function(cancel) {
                            cancel();
                        });
                    } catch (e) {
                        console.warn("[elm-hot] Kill process error: " + e.message);
                    }
                }
            });
            function log(message) {
                if (module.hot.verbose) console.log(message);
            }
            function getId() {
                return ++uid;
            }
            function findPublicModules(parent, path) {
                var modules = [];
                for(var key in parent){
                    var child = parent[key];
                    var currentPath = path ? path + "." + key : key;
                    if ("init" in child) modules.push({
                        path: currentPath,
                        module: child
                    });
                    else modules = modules.concat(findPublicModules(child, currentPath));
                }
                return modules;
            }
            function registerInstance(domNode, flags, path, portSubscribes, portSends) {
                var id = getId();
                var instance = {
                    id: id,
                    path: path,
                    domNode: domNode,
                    flags: flags,
                    portSubscribes: portSubscribes,
                    portSends: portSends,
                    lastState: null // last Elm app state (root model)
                };
                return instances[id] = instance;
            }
            function isFullscreenApp() {
                // Returns true if the Elm app will take over the entire DOM body.
                return typeof elmSymbol("elm$browser$Browser$application") !== "undefined" || typeof elmSymbol("elm$browser$Browser$document") !== "undefined";
            }
            function wrapDomNode(node) {
                // When embedding an Elm app into a specific DOM node, Elm will replace the provided
                // DOM node with the Elm app's content. When the Elm app is compiled normally, the
                // original DOM node is reused (its attributes and content changes, but the object
                // in memory remains the same). But when compiled using `--debug`, Elm will completely
                // destroy the original DOM node and instead replace it with 2 brand new nodes: one
                // for your Elm app's content and the other for the Elm debugger UI. In this case,
                // if you held a reference to the DOM node provided for embedding, it would be orphaned
                // after Elm module initialization.
                //
                // So in order to make both cases consistent and isolate us from changes in how Elm
                // does this, we will insert a dummy node to wrap the node for embedding and hold
                // a reference to the dummy node.
                //
                // We will also put a tag on the dummy node so that the Elm developer knows who went
                // behind their back and rudely put stuff in their DOM.
                var dummyNode = document.createElement("div");
                dummyNode.setAttribute("data-elm-hot", "true");
                dummyNode.style.height = "inherit";
                var parentNode = node.parentNode;
                parentNode.replaceChild(dummyNode, node);
                dummyNode.appendChild(node);
                return dummyNode;
            }
            function wrapPublicModule(path, module1) {
                var originalInit = module1.init;
                if (originalInit) module1.init = function(args) {
                    var elm;
                    var portSubscribes = {};
                    var portSends = {};
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== "undefined") {
                        // normal case
                        domNode = args["node"] && !isFullscreenApp() ? wrapDomNode(args["node"]) : document.body;
                        flags = args["flags"];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined;
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
                else console.error("Could not find a public module to wrap at path " + path);
            }
            function swap(Elm, instance) {
                log("[elm-hot] Hot-swapping module: " + instance.path);
                swappingInstance = instance;
                // remove from the DOM everything that had been created by the old Elm app
                var containerNode = instance.domNode;
                while(containerNode.lastChild)containerNode.removeChild(containerNode.lastChild);
                var m = getAt(instance.path.split("."), Elm);
                var elm;
                if (m) {
                    // prepare to initialize the new Elm module
                    var args = {
                        flags: instance.flags
                    };
                    if (containerNode === document.body) ;
                    else {
                        // embed case: provide a new node for Elm to use
                        var nodeForEmbed = document.createElement("div");
                        containerNode.appendChild(nodeForEmbed);
                        args["node"] = nodeForEmbed;
                    }
                    elm = m.init(args);
                    Object.keys(instance.portSubscribes).forEach(function(portName) {
                        if (portName in elm.ports && "subscribe" in elm.ports[portName]) {
                            var handlers = instance.portSubscribes[portName];
                            if (!handlers.length) return;
                            log("[elm-hot] Reconnect " + handlers.length + " handler(s) to port '" + portName + "' (" + instance.path + ").");
                            handlers.forEach(function(handler) {
                                elm.ports[portName].subscribe(handler);
                            });
                        } else {
                            delete instance.portSubscribes[portName];
                            log("[elm-hot] Port was removed: " + portName);
                        }
                    });
                    Object.keys(instance.portSends).forEach(function(portName) {
                        if (portName in elm.ports && "send" in elm.ports[portName]) {
                            log("[elm-hot] Replace old port send with the new send");
                            instance.portSends[portName] = elm.ports[portName].send;
                        } else {
                            delete instance.portSends[portName];
                            log("[elm-hot] Port was removed: " + portName);
                        }
                    });
                } else log("[elm-hot] Module was removed: " + instance.path);
                swappingInstance = null;
            }
            function wrapPorts(elm, portSubscribes, portSends) {
                var portNames = Object.keys(elm.ports || {});
                //hook ports
                if (portNames.length) {
                    // hook outgoing ports
                    portNames.filter(function(name) {
                        return "subscribe" in elm.ports[name];
                    }).forEach(function(portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function(handler) {
                                log("[elm-hot] ports." + portName + ".subscribe called.");
                                if (!portSubscribes[portName]) portSubscribes[portName] = [
                                    handler
                                ];
                                else //TODO handle subscribing to single handler more than once?
                                portSubscribes[portName].push(handler);
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function(handler) {
                                log("[elm-hot] ports." + portName + ".unsubscribe called.");
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) list.splice(list.lastIndexOf(handler), 1);
                                else console.warn("[elm-hot] ports." + portName + ".unsubscribe: handler not subscribed");
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });
                    // hook incoming ports
                    portNames.filter(function(name) {
                        return "send" in elm.ports[name];
                    }).forEach(function(portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function(val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
                }
                return portSubscribes;
            }
            /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */ function findNavKey(rootModel) {
                var queue = [];
                if (isDebuggerModel(rootModel)) /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */ queue.push({
                    value: rootModel["state"],
                    keypath: [
                        "state"
                    ]
                });
                else queue.push({
                    value: rootModel,
                    keypath: []
                });
                while(queue.length !== 0){
                    var item = queue.shift();
                    if (typeof item.value === "undefined" || item.value === null) continue;
                    // The nav key is identified by a runtime tag added by the elm-hot injector.
                    if (item.value.hasOwnProperty("elm-hot-nav-key")) // found it!
                    return item;
                    if (typeof item.value !== "object") continue;
                    for(var propName in item.value){
                        if (!item.value.hasOwnProperty(propName)) continue;
                        var newKeypath = item.keypath.slice();
                        newKeypath.push(propName);
                        queue.push({
                            value: item.value[propName],
                            keypath: newKeypath
                        });
                    }
                }
                return null;
            }
            function isDebuggerModel(model) {
                // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
                // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
                return model && (model.hasOwnProperty("expando") || model.hasOwnProperty("expandoModel")) && model.hasOwnProperty("state");
            }
            function getAt(keyPath, obj) {
                return keyPath.reduce(function(xs, x) {
                    return xs && xs[x] ? xs[x] : null;
                }, obj);
            }
            function removeNavKeyListeners(navKey) {
                window.removeEventListener("popstate", navKey.value);
                window.navigator.userAgent.indexOf("Trident") < 0 || window.removeEventListener("hashchange", navKey.value);
            }
            // hook program creation
            var initialize = _Platform_initialize;
            _Platform_initialize = function(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
                var instance = initializingInstance || swappingInstance;
                var tryFirstRender = !!swappingInstance;
                var hookedInit = function(args) {
                    var initialStateTuple = init(args);
                    if (swappingInstance) {
                        var oldModel = swappingInstance.lastState;
                        var newModel = initialStateTuple.a;
                        if (typeof elmSymbol("elm$browser$Browser$application") !== "undefined") {
                            var oldKeyLoc = findNavKey(oldModel);
                            // attempt to find the Browser.Navigation.Key in the newly-constructed model
                            // and bring it along with the rest of the old data.
                            var newKeyLoc = findNavKey(newModel);
                            var error = null;
                            if (newKeyLoc === null) error = "could not find Browser.Navigation.Key in the new app model";
                            else if (oldKeyLoc === null) error = "could not find Browser.Navigation.Key in the old app model.";
                            else if (newKeyLoc.keypath.toString() !== oldKeyLoc.keypath.toString()) error = "the location of the Browser.Navigation.Key in the model has changed.";
                            else {
                                // remove event listeners attached to the old nav key
                                removeNavKeyListeners(oldKeyLoc.value);
                                // insert the new nav key into the old model in the exact same location
                                var parentKeyPath = oldKeyLoc.keypath.slice(0, -1);
                                var lastSegment = oldKeyLoc.keypath.slice(-1)[0];
                                var oldParent = getAt(parentKeyPath, oldModel);
                                oldParent[lastSegment] = newKeyLoc.value;
                            }
                            if (error !== null) {
                                console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                                oldModel = newModel;
                            }
                        }
                        // the heart of the app state hot-swap
                        initialStateTuple.a = oldModel;
                        // ignore any Cmds returned by the init during hot-swap
                        initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                    } else // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;
                    return initialStateTuple;
                };
                var hookedStepperBuilder = function(sendToApp, model) {
                    var result;
                    // first render may fail if shape of model changed too much
                    if (tryFirstRender) {
                        tryFirstRender = false;
                        try {
                            result = stepperBuilder(sendToApp, model);
                        } catch (e) {
                            throw new Error("[elm-hot] Hot-swapping " + instance.path + " is not possible, please reload page. Error: " + e.message);
                        }
                    } else result = stepperBuilder(sendToApp, model);
                    return function(nextModel, isSync) {
                        if (instance) // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel;
                        return result(nextModel, isSync);
                    };
                };
                return initialize(flagDecoder, args, hookedInit, update, subscriptions, hookedStepperBuilder);
            };
            // hook process creation
            var originalBinding = _Scheduler_binding;
            _Scheduler_binding = function(originalCallback) {
                return originalBinding(function() {
                    // start the scheduled process, which may return a cancellation function.
                    var cancel = originalCallback.apply(this, arguments);
                    if (cancel) {
                        cancellers.push(cancel);
                        return function() {
                            cancellers.splice(cancellers.indexOf(cancel), 1);
                            return cancel();
                        };
                    }
                    return cancel;
                });
            };
            scope["_elm_hot_loader_init"] = function(Elm) {
                // swap instances
                var removedInstances = [];
                for(var id in instances){
                    var instance = instances[id];
                    if (instance.domNode.parentNode) swap(Elm, instance);
                    else removedInstances.push(id);
                }
                removedInstances.forEach(function(id) {
                    delete instance[id];
                });
                // wrap all public modules
                var publicModules = findPublicModules(Elm);
                publicModules.forEach(function(m) {
                    wrapPublicModule(m.path, m.module);
                });
            };
        })();
        scope["_elm_hot_loader_init"](scope["Elm"]);
    }
//////////////////// HMR END ////////////////////
})(this);

},{}],"7hqDz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "debounce2", ()=>debounce2);
parcelHelpers.export(exports, "throttle", ()=>throttle);
parcelHelpers.export(exports, "allowedProtocol", ()=>allowedProtocol);
parcelHelpers.export(exports, "getHashCode", ()=>getHashCode);
parcelHelpers.export(exports, "getColorFor", ()=>getColorFor);
parcelHelpers.export(exports, "PROXY", ()=>PROXY);
function debounce(func) {
    // this is required since, safari and opera do not provide this interfaces ...
    if (!window.cancelIdleCallback || !window.requestIdleCallback) return func;
    let token;
    return function() {
        const later = ()=>{
            token = null;
            func.apply(null, arguments);
        };
        window.cancelIdleCallback(token);
        token = window.requestIdleCallback(later);
    };
}
function debounce2(fn, ms = 1000, immed = false) {
    let timer = undefined;
    return function(...args) {
        if (timer === undefined && immed) fn.apply(this, args);
        clearTimeout(timer);
        return setTimeout(()=>fn.apply(this, args), ms);
    };
}
function throttle(cb, delay = 500) {
    let wait = false;
    let storedArgs = null;
    function checkStoredArgs() {
        if (storedArgs == null) wait = false;
        else {
            cb(...storedArgs);
            storedArgs = null;
            setTimeout(checkStoredArgs, delay);
        }
    }
    return (...args)=>{
        if (wait) {
            storedArgs = args;
            return;
        }
        cb(...args);
        wait = true;
        setTimeout(checkStoredArgs, delay);
    };
}
function allowedProtocol(url) {
    return url.startsWith("https://") || url.startsWith("http://") || url.startsWith("file://") || url.startsWith("hyper://") || url.startsWith("dat://") || url.startsWith("ipfs://") || url.startsWith("ipns://") || url.startsWith("blob:");
}
function getHashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for(let i = 0; i < str.length; i++){
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash // Convert to 32bit integer
        ;
    }
    return hash;
}
function getColorCode(hashCode) {
    let red = (hashCode & 0xff0000) >> 16;
    let green = (hashCode & 0x00ff00) >> 8;
    let blue = hashCode & 0x0000ff;
    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function getColorFor(str) {
    let hashCode = getHashCode(str);
    let colorCode = getColorCode(hashCode);
    return colorCode;
}
const PROXY = "https://api.allorigins.win/get?url=";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2Y2tb","4vhwS"], "4vhwS", "parcelRequire55a5")

//# sourceMappingURL=index.c1051bca.js.map
