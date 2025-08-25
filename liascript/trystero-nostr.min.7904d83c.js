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
})({"841Fv":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f684898a7904d83c";
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

},{}],"f5JGy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultRelayUrls", ()=>rt);
parcelHelpers.export(exports, "getRelaySockets", ()=>et);
parcelHelpers.export(exports, "joinRoom", ()=>Qe);
parcelHelpers.export(exports, "selfId", ()=>ce);
var e = Object.freeze({
    __proto__: null,
    default: {}
});
const t = BigInt(0), r = BigInt(1), n = BigInt(2), o = BigInt(3), a = BigInt(8), i = Object.freeze({
    a: t,
    b: BigInt(7),
    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: r,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
}), s = (e, t)=>(e + t / n) / t, c = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar (e) {
        const { n: t  } = i, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), o = -r * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), a = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), c = n, f = BigInt("0x100000000000000000000000000000000"), u = s(c * e, t), l = s(-o * e, t);
        let d = D(e - u * n - l * a, t), h = D(-u * o - l * c, t);
        const y = d > f, g = h > f;
        if (y && (d = t - d), g && (h = t - h), d > f || h > f) throw Error("splitScalarEndo: Endomorphism failed, k=" + e);
        return {
            k1neg: y,
            k1: d,
            k2neg: g,
            k2: h
        };
    }
}, f = 32, u = 32;
function l(e) {
    const { a: t , b: r  } = i, n = D(e * e), o = D(n * e);
    return D(o + t * e + r);
}
const d = i.a === t;
class h extends Error {
    constructor(e){
        super(e);
    }
}
function y(e) {
    if (!(e instanceof g)) throw new TypeError("JacobianPoint expected");
}
class g {
    constructor(e, t, r){
        this.x = e, this.y = t, this.z = r;
    }
    static fromAffine(e) {
        if (!(e instanceof w)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
        return e.equals(w.ZERO) ? g.ZERO : new g(e.x, e.y, r);
    }
    static toAffineBatch(e) {
        const n = function(e, n = i.P) {
            const o = Array(e.length), a = $(e.reduce((e, r, a)=>r === t ? e : (o[a] = e, D(e * r, n)), r), n);
            return e.reduceRight((e, r, a)=>r === t ? e : (o[a] = D(e * o[a], n), D(e * r, n)), a), o;
        }(e.map((e)=>e.z));
        return e.map((e, t)=>e.toAffine(n[t]));
    }
    static normalizeZ(e) {
        return g.toAffineBatch(e).map(g.fromAffine);
    }
    equals(e) {
        y(e);
        const { x: t , y: r , z: n  } = this, { x: o , y: a , z: i  } = e, s = D(n * n), c = D(i * i), f = D(t * c), u = D(o * s), l = D(D(r * i) * c), d = D(D(a * n) * s);
        return f === u && l === d;
    }
    negate() {
        return new g(this.x, D(-this.y), this.z);
    }
    double() {
        const { x: e , y: t , z: r  } = this, i = D(e * e), s = D(t * t), c = D(s * s), f = e + s, u = D(n * (D(f * f) - i - c)), l = D(o * i), d = D(l * l), h = D(d - n * u), y = D(l * (u - h) - a * c), p = D(n * t * r);
        return new g(h, y, p);
    }
    add(e) {
        y(e);
        const { x: r , y: o , z: a  } = this, { x: i , y: s , z: c  } = e;
        if (i === t || s === t) return this;
        if (r === t || o === t) return e;
        const f = D(a * a), u = D(c * c), l = D(r * u), d = D(i * f), h = D(D(o * c) * u), p = D(D(s * a) * f), m = D(d - l), w = D(p - h);
        if (m === t) return w === t ? this.double() : g.ZERO;
        const b = D(m * m), E = D(m * b), x = D(l * b), v = D(w * w - E - n * x), A = D(w * (x - v) - h * E), S = D(a * c * m);
        return new g(v, A, S);
    }
    subtract(e) {
        return this.add(e.negate());
    }
    multiplyUnsafe(e) {
        const n = g.ZERO;
        if ("bigint" == typeof e && e === t) return n;
        let o = C(e);
        if (o === r) return this;
        if (!d) {
            let e = n, a = this;
            for(; o > t;)o & r && (e = e.add(a)), a = a.double(), o >>= r;
            return e;
        }
        let { k1neg: a , k1: i , k2neg: s , k2: f  } = c.splitScalar(o), u = n, l = n, h = this;
        for(; i > t || f > t;)i & r && (u = u.add(h)), f & r && (l = l.add(h)), h = h.double(), i >>= r, f >>= r;
        return a && (u = u.negate()), s && (l = l.negate()), l = new g(D(l.x * c.beta), l.y, l.z), u.add(l);
    }
    precomputeWindow(e) {
        const t = d ? 128 / e + 1 : 256 / e + 1, r = [];
        let n = this, o = n;
        for(let a = 0; a < t; a++){
            o = n, r.push(o);
            for(let t = 1; t < 2 ** (e - 1); t++)o = o.add(n), r.push(o);
            n = o.double();
        }
        return r;
    }
    wNAF(e, t) {
        !t && this.equals(g.BASE) && (t = w.BASE);
        const n = t && t._WINDOW_SIZE || 1;
        if (256 % n) throw Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let o = t && m.get(t);
        o || (o = this.precomputeWindow(n), t && 1 !== n && (o = g.normalizeZ(o), m.set(t, o)));
        let a = g.ZERO, i = g.BASE;
        const s = 1 + (d ? 128 / n : 256 / n), c = 2 ** (n - 1), f = BigInt(2 ** n - 1), u = 2 ** n, l = BigInt(n);
        for(let t = 0; t < s; t++){
            const n = t * c;
            let s = Number(e & f);
            e >>= l, s > c && (s -= u, e += r);
            const d = n, h = n + Math.abs(s) - 1, y = t % 2 != 0, g = s < 0;
            0 === s ? i = i.add(p(y, o[d])) : a = a.add(p(g, o[h]));
        }
        return {
            p: a,
            f: i
        };
    }
    multiply(e, t) {
        let r, n, o = C(e);
        if (d) {
            const { k1neg: e , k1: a , k2neg: i , k2: s  } = c.splitScalar(o);
            let { p: f , f: u  } = this.wNAF(a, t), { p: l , f: d  } = this.wNAF(s, t);
            f = p(e, f), l = p(i, l), l = new g(D(l.x * c.beta), l.y, l.z), r = f.add(l), n = u.add(d);
        } else {
            const { p: e , f: a  } = this.wNAF(o, t);
            r = e, n = a;
        }
        return g.normalizeZ([
            r,
            n
        ])[0];
    }
    toAffine(e) {
        const { x: t , y: n , z: o  } = this, i = this.equals(g.ZERO);
        null == e && (e = i ? a : $(o));
        const s = e, c = D(s * s), f = D(c * s), u = D(t * c), l = D(n * f), d = D(o * s);
        if (i) return w.ZERO;
        if (d !== r) throw Error("invZ was invalid");
        return new w(u, l);
    }
}
function p(e, t) {
    const r = t.negate();
    return e ? r : t;
}
g.BASE = new g(i.Gx, i.Gy, r), g.ZERO = new g(t, r, t);
const m = new WeakMap;
class w {
    constructor(e, t){
        this.x = e, this.y = t;
    }
    _setWindowSize(e) {
        this._WINDOW_SIZE = e, m.delete(this);
    }
    hasEvenY() {
        return this.y % n === t;
    }
    static fromCompressedHex(e) {
        const t = 32 === e.length, a = R(t ? e : e.subarray(1));
        if (!_(a)) throw Error("Point is not on curve");
        let s = function(e) {
            const { P: t  } = i, r = BigInt(6), a = BigInt(11), s = BigInt(22), c = BigInt(23), f = BigInt(44), u = BigInt(88), l = e * e * e % t, d = l * l * e % t, h = z(d, o) * d % t, y = z(h, o) * d % t, g = z(y, n) * l % t, p = z(g, a) * g % t, m = z(p, s) * p % t, w = z(m, f) * m % t, b = z(w, u) * w % t, E = z(b, f) * m % t, x = z(E, o) * d % t, v = z(x, c) * p % t, A = z(v, r) * l % t, S = z(A, n);
            if (S * S % t !== e) throw Error("Cannot find square root");
            return S;
        }(l(a));
        const c = (s & r) === r;
        if (t) c && (s = D(-s));
        else !(1 & ~e[0]) !== c && (s = D(-s));
        const f = new w(a, s);
        return f.assertValidity(), f;
    }
    static fromUncompressedHex(e) {
        const t = R(e.subarray(1, 33)), r = R(e.subarray(33, 65)), n = new w(t, r);
        return n.assertValidity(), n;
    }
    static fromHex(e) {
        const t = U(e), r = t.length, n = t[0];
        if (r === f) return this.fromCompressedHex(t);
        if (33 === r && (2 === n || 3 === n)) return this.fromCompressedHex(t);
        if (65 === r && 4 === n) return this.fromUncompressedHex(t);
        throw Error("Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not " + r);
    }
    static fromPrivateKey(e) {
        return w.BASE.multiply(Z(e));
    }
    static fromSignature(e, t, r) {
        const { r: n , s: o  } = function(e) {
            if (e instanceof x) return e.assertValidity(), e;
            try {
                return x.fromDER(e);
            } catch (t) {
                return x.fromCompact(e);
            }
        }(t);
        if (![
            0,
            1,
            2,
            3
        ].includes(r)) throw Error("Cannot recover: invalid recovery bit");
        const a = function(e, t = !1) {
            const r = function(e) {
                const t = 8 * e.length - 256, r = R(e);
                return t > 0 ? r >> BigInt(t) : r;
            }(e);
            if (t) return r;
            const { n  } = i;
            return r >= n ? r - n : r;
        }(U(e)), { n: s  } = i, c = 2 === r || 3 === r ? n + s : n, f = $(c, s), u = D(-a * f, s), l = D(o * f, s), d = 1 & r ? "03" : "02", h = w.fromHex(d + k(c)), y = w.BASE.multiplyAndAddUnsafe(h, u, l);
        if (!y) throw Error("Cannot recover signature: point at infinify");
        return y.assertValidity(), y;
    }
    toRawBytes(e = !1) {
        return H(this.toHex(e));
    }
    toHex(e = !1) {
        const t = k(this.x);
        if (e) return `${this.hasEvenY() ? "02" : "03"}${t}`;
        return `04${t}${k(this.y)}`;
    }
    toHexX() {
        return this.toHex(!0).slice(2);
    }
    toRawX() {
        return this.toRawBytes(!0).slice(1);
    }
    assertValidity() {
        const e = "Point is not on elliptic curve", { x: r , y: n  } = this;
        if (!_(r) || !_(n)) throw Error(e);
        const o = D(n * n);
        if (D(o - l(r)) !== t) throw Error(e);
    }
    equals(e) {
        return this.x === e.x && this.y === e.y;
    }
    negate() {
        return new w(this.x, D(-this.y));
    }
    double() {
        return g.fromAffine(this).double().toAffine();
    }
    add(e) {
        return g.fromAffine(this).add(g.fromAffine(e)).toAffine();
    }
    subtract(e) {
        return this.add(e.negate());
    }
    multiply(e) {
        return g.fromAffine(this).multiply(e, this).toAffine();
    }
    multiplyAndAddUnsafe(e, n, o) {
        const a = g.fromAffine(this), i = n === t || n === r || this !== w.BASE ? a.multiplyUnsafe(n) : a.multiply(n), s = g.fromAffine(e).multiplyUnsafe(o), c = i.add(s);
        return c.equals(g.ZERO) ? void 0 : c.toAffine();
    }
}
function b(e) {
    return Number.parseInt(e[0], 16) >= 8 ? "00" + e : e;
}
function E(e) {
    if (e.length < 2 || 2 !== e[0]) throw Error("Invalid signature integer tag: " + S(e));
    const t = e[1], r = e.subarray(2, t + 2);
    if (!t || r.length !== t) throw Error("Invalid signature integer: wrong length");
    if (0 === r[0] && r[1] <= 127) throw Error("Invalid signature integer: trailing length");
    return {
        data: R(r),
        left: e.subarray(t + 2)
    };
}
w.BASE = new w(i.Gx, i.Gy), w.ZERO = new w(t, t);
class x {
    constructor(e, t){
        this.r = e, this.s = t, this.assertValidity();
    }
    static fromCompact(e) {
        const t = e instanceof Uint8Array, r = "Signature.fromCompact";
        if ("string" != typeof e && !t) throw new TypeError(r + ": Expected string or Uint8Array");
        const n = t ? S(e) : e;
        if (128 !== n.length) throw Error(r + ": Expected 64-byte hex");
        return new x(T(n.slice(0, 64)), T(n.slice(64, 128)));
    }
    static fromDER(e) {
        const t = e instanceof Uint8Array;
        if ("string" != typeof e && !t) throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
        const { r , s: n  } = function(e) {
            if (e.length < 2 || 48 != e[0]) throw Error("Invalid signature tag: " + S(e));
            if (e[1] !== e.length - 2) throw Error("Invalid signature: incorrect length");
            const { data: t , left: r  } = E(e.subarray(2)), { data: n , left: o  } = E(r);
            if (o.length) throw Error("Invalid signature: left bytes after parsing: " + S(o));
            return {
                r: t,
                s: n
            };
        }(t ? e : H(e));
        return new x(r, n);
    }
    static fromHex(e) {
        return this.fromDER(e);
    }
    assertValidity() {
        const { r: e , s: t  } = this;
        if (!L(e)) throw Error("Invalid Signature: r must be 0 < r < n");
        if (!L(t)) throw Error("Invalid Signature: s must be 0 < s < n");
    }
    hasHighS() {
        const e = i.n >> r;
        return this.s > e;
    }
    normalizeS() {
        return this.hasHighS() ? new x(this.r, D(-this.s, i.n)) : this;
    }
    toDERRawBytes() {
        return H(this.toDERHex());
    }
    toDERHex() {
        const e = b(B(this.s)), t = b(B(this.r)), r = e.length / 2, n = t.length / 2, o = B(r), a = B(n);
        return `30${B(n + r + 4)}02${a}${t}02${o}${e}`;
    }
    toRawBytes() {
        return this.toDERRawBytes();
    }
    toHex() {
        return this.toDERHex();
    }
    toCompactRawBytes() {
        return H(this.toCompactHex());
    }
    toCompactHex() {
        return k(this.r) + k(this.s);
    }
}
function v(...e) {
    if (!e.every((e)=>e instanceof Uint8Array)) throw Error("Uint8Array list expected");
    if (1 === e.length) return e[0];
    const t = e.reduce((e, t)=>e + t.length, 0), r = new Uint8Array(t);
    for(let t = 0, n = 0; t < e.length; t++){
        const o = e[t];
        r.set(o, n), n += o.length;
    }
    return r;
}
const A = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
function S(e) {
    if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
    let t = "";
    for(let r = 0; r < e.length; r++)t += A[e[r]];
    return t;
}
const P = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function k(e) {
    if ("bigint" != typeof e) throw Error("Expected bigint");
    if (!(t <= e && e < P)) throw Error("Expected number 0 <= n < 2^256");
    return e.toString(16).padStart(64, "0");
}
function I(e) {
    const t = H(k(e));
    if (32 !== t.length) throw Error("Error: expected 32 bytes");
    return t;
}
function B(e) {
    const t = e.toString(16);
    return 1 & t.length ? "0" + t : t;
}
function T(e) {
    if ("string" != typeof e) throw new TypeError("hexToNumber: expected string, got " + typeof e);
    return BigInt("0x" + e);
}
function H(e) {
    if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
    if (e.length % 2) throw Error("hexToBytes: received invalid unpadded hex" + e.length);
    const t = new Uint8Array(e.length / 2);
    for(let r = 0; r < t.length; r++){
        const n = 2 * r, o = e.slice(n, n + 2), a = Number.parseInt(o, 16);
        if (Number.isNaN(a) || a < 0) throw Error("Invalid byte sequence");
        t[r] = a;
    }
    return t;
}
function R(e) {
    return T(S(e));
}
function U(e) {
    return e instanceof Uint8Array ? Uint8Array.from(e) : H(e);
}
function C(e) {
    if ("number" == typeof e && Number.isSafeInteger(e) && e > 0) return BigInt(e);
    if ("bigint" == typeof e && L(e)) return e;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function D(e, r = i.P) {
    const n = e % r;
    return n >= t ? n : r + n;
}
function z(e, r) {
    const { P: n  } = i;
    let o = e;
    for(; r-- > t;)o *= o, o %= n;
    return o;
}
function $(e, n = i.P) {
    if (e === t || n <= t) throw Error(`invert: expected positive integers, got n=${e} mod=${n}`);
    let o = D(e, n), a = n, s = t, c = r;
    for(; o !== t;){
        const e = a % o, t = s - c * (a / o);
        a = o, o = e, s = c, c = t;
    }
    if (a !== r) throw Error("invert: does not exist");
    return D(s, n);
}
let N, O;
function L(e) {
    return t < e && e < i.n;
}
function _(e) {
    return t < e && e < i.P;
}
function Z(e) {
    let t;
    if ("bigint" == typeof e) t = e;
    else if ("number" == typeof e && Number.isSafeInteger(e) && e > 0) t = BigInt(e);
    else if ("string" == typeof e) {
        if (64 !== e.length) throw Error("Expected 32 bytes of private key");
        t = T(e);
    } else {
        if (!(e instanceof Uint8Array)) throw new TypeError("Expected valid private key");
        if (e.length !== u) throw Error("Expected 32 bytes of private key");
        t = R(e);
    }
    if (!L(t)) throw Error("Expected private key: 0 < key < n");
    return t;
}
function V(e) {
    return e instanceof w ? (e.assertValidity(), e) : w.fromHex(e);
}
function K(e) {
    return D(R(e), i.n);
}
class j {
    constructor(e, t){
        this.r = e, this.s = t, this.assertValidity();
    }
    static fromHex(e) {
        const t = U(e);
        if (64 !== t.length) throw new TypeError("SchnorrSignature.fromHex: expected 64 bytes, not " + t.length);
        const r = R(t.subarray(0, 32)), n = R(t.subarray(32, 64));
        return new j(r, n);
    }
    assertValidity() {
        const { r: e , s: t  } = this;
        if (!_(e) || !L(t)) throw Error("Invalid signature");
    }
    toHex() {
        return k(this.r) + k(this.s);
    }
    toRawBytes() {
        return H(this.toHex());
    }
}
class q {
    constructor(e, t, r = ee.randomBytes()){
        if (null == e) throw new TypeError(`sign: Expected valid message, not "${e}"`);
        this.m = U(e);
        const { x: n , scalar: o  } = this.getScalar(Z(t));
        if (this.px = n, this.d = o, this.rand = U(r), 32 !== this.rand.length) throw new TypeError("sign: Expected 32 bytes of aux randomness");
    }
    getScalar(e) {
        const t = w.fromPrivateKey(e), r = t.hasEvenY() ? e : i.n - e;
        return {
            point: t,
            scalar: r,
            x: t.toRawX()
        };
    }
    initNonce(e, t) {
        return I(e ^ R(t));
    }
    finalizeNonce(e) {
        const r = D(R(e), i.n);
        if (r === t) throw Error("sign: Creation of signature failed. k is zero");
        const { point: n , x: o , scalar: a  } = this.getScalar(r);
        return {
            R: n,
            rx: o,
            k: a
        };
    }
    finalizeSig(e, t, r, n) {
        return new j(e.x, D(t + r * n, i.n)).toRawBytes();
    }
    error() {
        throw Error("sign: Invalid signature produced");
    }
    async calc() {
        const { m: e , d: t , px: r , rand: n  } = this, o = ee.taggedHash, a = this.initNonce(t, await o(Y.aux, n)), { R: i , rx: s , k: c  } = this.finalizeNonce(await o(Y.nonce, a, r, e)), f = K(await o(Y.challenge, s, r, e)), u = this.finalizeSig(i, c, f, t);
        return await G(u, e, r) || this.error(), u;
    }
    calcSync() {
        const { m: e , d: t , px: r , rand: n  } = this, o = ee.taggedHashSync, a = this.initNonce(t, o(Y.aux, n)), { R: i , rx: s , k: c  } = this.finalizeNonce(o(Y.nonce, a, r, e)), f = K(o(Y.challenge, s, r, e)), u = this.finalizeSig(i, c, f, t);
        return J(u, e, r) || this.error(), u;
    }
}
function M(e, t, r) {
    const n = e instanceof j, o = n ? e : j.fromHex(e);
    return n && o.assertValidity(), {
        ...o,
        m: U(t),
        P: V(r)
    };
}
function W(e, t, r, n) {
    const o = w.BASE.multiplyAndAddUnsafe(t, Z(r), D(-n, i.n));
    return !(!o || !o.hasEvenY() || o.x !== e);
}
async function G(e, t, r) {
    try {
        const { r: n , s: o , m: a , P: i  } = M(e, t, r), s = K(await ee.taggedHash(Y.challenge, I(n), i.toRawX(), a));
        return W(n, i, o, s);
    } catch (e) {
        return !1;
    }
}
function J(e, t, r) {
    try {
        const { r: n , s: o , m: a , P: i  } = M(e, t, r), s = K(ee.taggedHashSync(Y.challenge, I(n), i.toRawX(), a));
        return W(n, i, o, s);
    } catch (e) {
        if (e instanceof h) throw e;
        return !1;
    }
}
const F = {
    Signature: j,
    getPublicKey (e) {
        return w.fromPrivateKey(e).toRawX();
    },
    async sign (e, t, r) {
        return new q(e, t, r).calc();
    },
    verify: G,
    signSync (e, t, r) {
        return new q(e, t, r).calcSync();
    },
    verifySync: J
};
w.BASE._setWindowSize(8);
const X = {
    node: e,
    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
}, Y = {
    challenge: "BIP0340/challenge",
    aux: "BIP0340/aux",
    nonce: "BIP0340/nonce"
}, Q = {}, ee = {
    bytesToHex: S,
    hexToBytes: H,
    concatBytes: v,
    mod: D,
    invert: $,
    isValidPrivateKey (e) {
        try {
            return Z(e), !0;
        } catch (e) {
            return !1;
        }
    },
    _bigintTo32Bytes: I,
    _normalizePrivateKey: Z,
    hashToPrivateKey (e) {
        if ((e = U(e)).length < 40 || e.length > 1024) throw Error("Expected valid bytes of private key as per FIPS 186");
        return I(D(R(e), i.n - r) + r);
    },
    randomBytes (e = 32) {
        if (X.web) return X.web.getRandomValues(new Uint8Array(e));
        if (X.node) {
            const { randomBytes: t  } = X.node;
            return Uint8Array.from(t(e));
        }
        throw Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey () {
        return ee.hashToPrivateKey(ee.randomBytes(40));
    },
    precompute (e = 8, t = w.BASE) {
        const r = t === w.BASE ? t : new w(t.x, t.y);
        return r._setWindowSize(e), r.multiply(o), r;
    },
    async sha256 (...e) {
        if (X.web) {
            const t = await X.web.subtle.digest("SHA-256", v(...e));
            return new Uint8Array(t);
        }
        if (X.node) {
            const { createHash: t  } = X.node, r = t("sha256");
            return e.forEach((e)=>r.update(e)), Uint8Array.from(r.digest());
        }
        throw Error("The environment doesn't have sha256 function");
    },
    async hmacSha256 (e, ...t) {
        if (X.web) {
            const r = await X.web.subtle.importKey("raw", e, {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, !1, [
                "sign"
            ]), n = v(...t), o = await X.web.subtle.sign("HMAC", r, n);
            return new Uint8Array(o);
        }
        if (X.node) {
            const { createHmac: r  } = X.node, n = r("sha256", e);
            return t.forEach((e)=>n.update(e)), Uint8Array.from(n.digest());
        }
        throw Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: void 0,
    hmacSha256Sync: void 0,
    async taggedHash (e, ...t) {
        let r = Q[e];
        if (void 0 === r) {
            const t = await ee.sha256(Uint8Array.from(e, (e)=>e.charCodeAt(0)));
            r = v(t, t), Q[e] = r;
        }
        return ee.sha256(r, ...t);
    },
    taggedHashSync (e, ...t) {
        if ("function" != typeof N) throw new h("sha256Sync is undefined, you need to set it");
        let r = Q[e];
        if (void 0 === r) {
            const t = N(Uint8Array.from(e, (e)=>e.charCodeAt(0)));
            r = v(t, t), Q[e] = r;
        }
        return N(r, ...t);
    },
    _JacobianPoint: g
};
Object.defineProperties(ee, {
    sha256Sync: {
        configurable: !1,
        get: ()=>N,
        set (e) {
            N || (N = e);
        }
    },
    hmacSha256Sync: {
        configurable: !1,
        get: ()=>O,
        set (e) {
            O || (O = e);
        }
    }
});
const { floor: te , random: re , sin: ne  } = Math, oe = "Trystero", ae = (e, t)=>Array(e).fill().map(t), ie = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", se = (e)=>ae(e, ()=>ie[te(62 * re())]).join(""), ce = se(20), fe = Promise.all.bind(Promise), ue = "undefined" != typeof window, { entries: le , fromEntries: de , keys: he  } = Object, ye = ()=>{}, ge = (e)=>Error(`${oe}: ${e}`), pe = new TextEncoder, me = new TextDecoder, we = (e)=>pe.encode(e), be = (e)=>me.decode(e), Ee = (e)=>e.reduce((e, t)=>e + t.toString(16).padStart(2, "0"), ""), xe = (...e)=>e.join("@"), ve = (e, t, r)=>(e.relayUrls || ((e, t)=>{
        const r = [
            ...e
        ], n = ()=>{
            const e = 1e4 * ne(t++);
            return e - te(e);
        };
        let o = r.length;
        for(; o;){
            const e = te(n() * o--);
            [r[o], r[e]] = [
                r[e],
                r[o]
            ];
        }
        return r;
    })(t, Pe(e.appId))).slice(0, e.relayUrls ? e.relayUrls.length : e.relayRedundancy || r), Ae = JSON.stringify, Se = JSON.parse, Pe = (e, t = Number.MAX_SAFE_INTEGER)=>e.split("").reduce((e, t)=>e + t.charCodeAt(0), 0) % t, ke = {}, Ie = "AES-GCM", Be = {}, Te = async (e)=>Be[e] || (Be[e] = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", we(e)))).map((e)=>e.toString(36)).join("")), He = async (e, t)=>{
    const r = crypto.getRandomValues(new Uint8Array(16));
    var n;
    return r.join(",") + "$" + (n = await crypto.subtle.encrypt({
        name: Ie,
        iv: r
    }, await e, we(t)), btoa(String.fromCharCode.apply(null, new Uint8Array(n))));
}, Re = async (e, t)=>{
    const [r, n] = t.split("$");
    return be(await crypto.subtle.decrypt({
        name: Ie,
        iv: new Uint8Array(r.split(","))
    }, await e, ((e)=>{
        const t = atob(e);
        return new Uint8Array(t.length).map((e, r)=>t.charCodeAt(r)).buffer;
    })(n)));
}, Ue = "icegatheringstatechange", Ce = "offer";
var De = (e, { rtcConfig: t , rtcPolyfill: r , turnConfig: n  })=>{
    const o = new (r || RTCPeerConnection)({
        iceServers: ze.concat(n || []),
        ...t
    }), a = {};
    let i = !1, s = !1, c = null;
    const f = (e)=>{
        e.binaryType = "arraybuffer", e.bufferedAmountLowThreshold = 65535, e.onmessage = (e)=>a.data?.(e.data), e.onopen = ()=>a.connect?.(), e.onclose = ()=>a.close?.(), e.onerror = (e)=>a.error?.(e);
    }, u = (e)=>Promise.race([
            new Promise((t)=>{
                const r = ()=>{
                    "complete" === e.iceGatheringState && (e.removeEventListener(Ue, r), t());
                };
                e.addEventListener(Ue, r), r();
            }),
            new Promise((e)=>setTimeout(e, 5e3))
        ]).then(()=>({
                type: e.localDescription.type,
                sdp: e.localDescription.sdp.replace(/a=ice-options:trickle\s\n/g, "")
            }));
    return e ? (c = o.createDataChannel("data"), f(c)) : o.ondatachannel = ({ channel: e  })=>{
        c = e, f(e);
    }, o.onnegotiationneeded = async ()=>{
        try {
            i = !0, await o.setLocalDescription();
            const e = await u(o);
            a.signal?.(e);
        } catch (e) {
            a.error?.(e);
        } finally{
            i = !1;
        }
    }, o.onconnectionstatechange = ()=>{
        [
            "disconnected",
            "failed",
            "closed"
        ].includes(o.connectionState) && a.close?.();
    }, o.ontrack = (e)=>{
        a.track?.(e.track, e.streams[0]), a.stream?.(e.streams[0]);
    }, o.onremovestream = (e)=>a.stream?.(e.stream), e && (o.canTrickleIceCandidates || o.onnegotiationneeded()), {
        created: Date.now(),
        connection: o,
        get channel () {
            return c;
        },
        get isDead () {
            return "closed" === o.connectionState;
        },
        async signal (t) {
            if ("open" !== c?.readyState || t.sdp?.includes("a=rtpmap")) try {
                if (t.type === Ce) {
                    if (i || "stable" !== o.signalingState && !s) {
                        if (e) return;
                        await fe([
                            o.setLocalDescription({
                                type: "rollback"
                            }),
                            o.setRemoteDescription(t)
                        ]);
                    } else await o.setRemoteDescription(t);
                    await o.setLocalDescription();
                    const r = await u(o);
                    return a.signal?.(r), r;
                }
                if ("answer" === t.type) {
                    s = !0;
                    try {
                        await o.setRemoteDescription(t);
                    } finally{
                        s = !1;
                    }
                }
            } catch (e) {
                a.error?.(e);
            }
        },
        sendData (e) {
            return c.send(e);
        },
        destroy () {
            c?.close(), o.close(), i = !1, s = !1;
        },
        setHandlers (e) {
            return Object.assign(a, e);
        },
        offerPromise: e ? new Promise((e)=>a.signal = (t)=>{
                t.type === Ce && e(t);
            }) : Promise.resolve(),
        addStream (e) {
            return e.getTracks().forEach((t)=>o.addTrack(t, e));
        },
        removeStream (e) {
            return o.getSenders().filter((t)=>e.getTracks().includes(t.track)).forEach((e)=>o.removeTrack(e));
        },
        addTrack (e, t) {
            return o.addTrack(e, t);
        },
        removeTrack (e) {
            const t = o.getSenders().find((t)=>t.track === e);
            t && o.removeTrack(t);
        },
        replaceTrack (e, t) {
            const r = o.getSenders().find((t)=>t.track === e);
            if (r) return r.replaceTrack(t);
        }
    };
};
const ze = [
    ...ae(3, (e, t)=>`stun:stun${t || ""}.l.google.com:19302`),
    "stun:stun.cloudflare.com:3478"
].map((e)=>({
        urls: e
    })), $e = Object.getPrototypeOf(Uint8Array), Ne = 16369, Oe = 255, Le = "bufferedamountlow", _e = (e)=>"@_" + e;
const Ze = {}, Ve = "EVENT", Ke = ee.randomPrivateKey(), je = Ee(F.getPublicKey(Ke)), qe = {}, Me = {}, We = {}, Ge = ()=>Math.floor(Date.now() / 1e3), Je = (e)=>We[e] ??= Pe(e, 1e4) + 2e4, Fe = async (e, t)=>{
    const r = {
        kind: Je(e),
        content: t,
        pubkey: je,
        created_at: Ge(),
        tags: [
            [
                "x",
                e
            ]
        ]
    }, n = Ee(new Uint8Array(await crypto.subtle.digest("SHA-256", we(Ae([
        0,
        r.pubkey,
        r.created_at,
        r.kind,
        r.tags,
        r.content
    ])))));
    return Ae([
        Ve,
        {
            ...r,
            id: n,
            sig: Ee(await F.sign(n, Ke))
        }
    ]);
}, Xe = (e, t)=>(qe[e] = t, Ae([
        "REQ",
        e,
        {
            kinds: [
                Je(t)
            ],
            since: Ge(),
            "#x": [
                t
            ]
        }
    ])), Ye = (e)=>(delete qe[e], Ae([
        "CLOSE",
        e
    ])), Qe = (({ init: e , subscribe: t , announce: r  })=>{
    const n = {};
    let o, a, i, s = !1;
    return (c, f, u)=>{
        const { appId: l  } = c;
        if (n[l]?.[f]) return n[l][f];
        const d = {}, h = {}, y = xe(oe, l, f), g = Te(y), p = Te(xe(y, ce)), m = (async (e, t, r)=>crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, we(`${e}:${t}:${r}`)), {
                name: Ie
            }, !1, [
                "encrypt",
                "decrypt"
            ]))(c.password || "", l, f), w = (e)=>async (t)=>({
                    type: t.type,
                    sdp: await e(m, t.sdp)
                }), b = w(Re), E = w(He), x = ()=>De(!0, c), v = (e, t, r)=>{
            h[t] ? h[t] !== e && e.destroy() : (h[t] = e, H(e, t), d[t]?.forEach((e, t)=>{
                t !== r && e.destroy();
            }), delete d[t]);
        }, A = (e, t)=>{
            h[t] === e && delete h[t];
        }, S = (e)=>(a.push(...ae(e, x)), fe(a.splice(0, e).map((e)=>e.offerPromise.then(E).then((t)=>({
                        peer: e,
                        offer: t
                    }))))), P = (e, t)=>u?.({
                error: `incorrect password (${c.password}) when decrypting ${t}`,
                appId: l,
                peerId: e,
                roomId: f
            }), k = (e)=>async (t, r, n)=>{
                const [o, a] = await fe([
                    g,
                    p
                ]);
                if (t !== o && t !== a) return;
                const { peerId: i , offer: s , answer: f , peer: u  } = "string" == typeof r ? Se(r) : r;
                if (i !== ce && !h[i]) {
                    if (!i || s || f) {
                        if (s) {
                            const t = d[i]?.[e];
                            if (t && ce > i) return;
                            const r = De(!1, c);
                            let o;
                            r.setHandlers({
                                connect () {
                                    return v(r, i, e);
                                },
                                close () {
                                    return A(r, i);
                                }
                            });
                            try {
                                o = await b(s);
                            } catch  {
                                return void P(i, "offer");
                            }
                            if (r.isDead) return;
                            const [a, f] = await fe([
                                Te(xe(y, i)),
                                r.signal(o)
                            ]);
                            n(a, Ae({
                                peerId: ce,
                                answer: await E(f)
                            }));
                        } else if (f) {
                            let t;
                            try {
                                t = await b(f);
                            } catch (e) {
                                return void P(i, "answer");
                            }
                            if (u) u.setHandlers({
                                connect () {
                                    return v(u, i, e);
                                },
                                close () {
                                    return A(u, i);
                                }
                            }), u.signal(t);
                            else {
                                const r = d[i]?.[e];
                                r && !r.isDead && r.signal(t);
                            }
                        }
                    } else {
                        if (d[i]?.[e]) return;
                        const [[{ peer: t , offer: r  }], o] = await fe([
                            S(1),
                            Te(xe(y, i))
                        ]);
                        d[i] ||= [], d[i][e] = t, setTimeout(()=>((e, t)=>{
                                if (h[e]) return;
                                const r = d[e]?.[t];
                                r && (delete d[e][t], r.destroy());
                            })(i, e), .9 * I[e]), t.setHandlers({
                            connect () {
                                return v(t, i, e);
                            },
                            close () {
                                return A(t, i);
                            }
                        }), n(o, Ae({
                            peerId: ce,
                            offer: r
                        }));
                    }
                }
            };
        if (!c) throw ge("requires a config map as the first argument");
        if (!l && !c.firebaseApp) throw ge("config map is missing appId field");
        if (!f) throw ge("roomId argument required");
        if (!s) {
            const t = e(c);
            a = ae(20, x), o = Array.isArray(t) ? t : [
                t
            ], s = !0, i = setInterval(()=>a = a.filter((e)=>{
                    const t = Date.now() - e.created < 57333;
                    return t || e.destroy(), t;
                }), 59052.99);
        }
        const I = o.map(()=>5333), B = [], T = o.map(async (e, r)=>t(await e, await g, await p, k(r), S));
        fe([
            g,
            p
        ]).then(([e, t])=>{
            const n = async (o, a)=>{
                const i = await r(o, e, t);
                "number" == typeof i && (I[a] = i), B[a] = setTimeout(()=>n(o, a), I[a]);
            };
            T.forEach(async (e, t)=>{
                await e, n(await o[t], t);
            });
        });
        let H = ye;
        return n[l] ||= {}, n[l][f] = ((e, t, r)=>{
            const n = {}, o = {}, a = {}, i = {}, s = {}, c = {}, f = {}, u = {
                onPeerJoin: ye,
                onPeerLeave: ye,
                onPeerStream: ye,
                onPeerTrack: ye
            }, l = (e, t)=>(e ? Array.isArray(e) ? e : [
                    e
                ] : he(n)).flatMap((e)=>{
                    const r = n[e];
                    return r ? t(e, r) : (console.warn(`${oe}: no peer with id ${e} found`), []);
                }), d = (e)=>{
                n[e] && (delete n[e], delete i[e], delete s[e], u.onPeerLeave(e), t(e));
            }, h = (e)=>{
                if (o[e]) return a[e];
                if (!e) throw ge("action type argument is required");
                const t = we(e);
                if (t.byteLength > 12) throw ge(`action type string "${e}" (${t.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
                const r = new Uint8Array(12);
                r.set(t);
                let i = 0;
                return o[e] = {
                    onComplete: ye,
                    onProgress: ye,
                    setOnComplete: (t)=>o[e] = {
                            ...o[e],
                            onComplete: t
                        },
                    setOnProgress: (t)=>o[e] = {
                            ...o[e],
                            onProgress: t
                        },
                    async send (e, t, o, a) {
                        if (o && "object" != typeof o) throw ge("action meta argument must be an object");
                        const s = typeof e;
                        if ("undefined" === s) throw ge("action data cannot be undefined");
                        const c = "string" !== s, f = e instanceof Blob, u = f || e instanceof ArrayBuffer || e instanceof $e;
                        if (o && !u) throw ge("action meta argument can only be used with binary data");
                        const d = u ? new Uint8Array(f ? await e.arrayBuffer() : e) : we(c ? Ae(e) : e), h = o ? we(Ae(o)) : null, y = Math.ceil(d.byteLength / Ne) + (o ? 1 : 0) || 1, g = ae(y, (e, t)=>{
                            const n = t === y - 1, a = o && 0 === t, s = new Uint8Array(15 + (a ? h.byteLength : n ? d.byteLength - Ne * (y - (o ? 2 : 1)) : Ne));
                            return s.set(r), s.set([
                                i
                            ], 12), s.set([
                                n | a << 1 | u << 2 | c << 3
                            ], 13), s.set([
                                Math.round((t + 1) / y * Oe)
                            ], 14), s.set(o ? a ? h : d.subarray((t - 1) * Ne, t * Ne) : d.subarray(t * Ne, (t + 1) * Ne), 15), s;
                        });
                        return i = i + 1 & Oe, fe(l(t, async (e, t)=>{
                            const { channel: r  } = t;
                            let i = 0;
                            for(; i < y;){
                                const s = g[i];
                                if (r.bufferedAmount > r.bufferedAmountLowThreshold && await new Promise((e)=>{
                                    const t = ()=>{
                                        r.removeEventListener(Le, t), e();
                                    };
                                    r.addEventListener(Le, t);
                                }), !n[e]) break;
                                t.sendData(s), i++, a?.(s[14] / Oe, e, o);
                            }
                        }));
                    }
                }, a[e] ||= [
                    o[e].send,
                    o[e].setOnComplete,
                    o[e].setOnProgress
                ];
            }, y = (e, t)=>{
                const r = new Uint8Array(t), n = be(r.subarray(0, 12)).replaceAll("\0", ""), [a] = r.subarray(12, 13), [s] = r.subarray(13, 14), [c] = r.subarray(14, 15), f = r.subarray(15), u = !!(1 & s), l = !!(2 & s), d = !!(4 & s), h = !!(8 & s);
                if (!o[n]) return void console.warn(`${oe}: received message with unregistered type (${n})`);
                i[e] ||= {}, i[e][n] ||= {};
                const y = i[e][n][a] ||= {
                    chunks: []
                };
                if (l ? y.meta = Se(be(f)) : y.chunks.push(f), o[n].onProgress(c / Oe, e, y.meta), !u) return;
                const g = new Uint8Array(y.chunks.reduce((e, t)=>e + t.byteLength, 0));
                if (y.chunks.reduce((e, t)=>(g.set(t, e), e + t.byteLength), 0), delete i[e][n][a], d) o[n].onComplete(g, e, y.meta);
                else {
                    const t = be(g);
                    o[n].onComplete(h ? Se(t) : t, e);
                }
            }, g = async ()=>{
                await k(""), await new Promise((e)=>setTimeout(e, 99)), le(n).forEach(([e, t])=>{
                    t.destroy(), delete n[e];
                }), r();
            }, [p, m] = h(_e("ping")), [w, b] = h(_e("pong")), [E, x] = h(_e("signal")), [v, A] = h(_e("stream")), [S, P] = h(_e("track")), [k, I] = h(_e("leave"));
            return e((e, t)=>{
                n[t] || (n[t] = e, e.setHandlers({
                    data: (e)=>y(t, e),
                    stream (e) {
                        u.onPeerStream(e, t, c[t]), delete c[t];
                    },
                    track (e, r) {
                        u.onPeerTrack(e, r, t, f[t]), delete f[t];
                    },
                    signal: (e)=>E(e, t),
                    close: ()=>d(t),
                    error (e) {
                        console.error(e), d(t);
                    }
                }), u.onPeerJoin(t), e.drainEarlyData?.((e)=>y(t, e)));
            }), m((e, t)=>w("", t)), b((e, t)=>{
                s[t]?.(), delete s[t];
            }), x((e, t)=>n[t]?.signal(e)), A((e, t)=>c[t] = e), P((e, t)=>f[t] = e), I((e, t)=>d(t)), ue && addEventListener("beforeunload", g), {
                makeAction: h,
                leave: g,
                async ping (e) {
                    if (!e) throw ge("ping() must be called with target peer ID");
                    const t = Date.now();
                    return p("", e), await new Promise((t)=>s[e] = t), Date.now() - t;
                },
                getPeers: ()=>de(le(n).map(([e, t])=>[
                            e,
                            t.connection
                        ])),
                addStream: (e, t, r)=>l(t, async (t, n)=>{
                        r && await v(r, t), n.addStream(e);
                    }),
                removeStream: (e, t)=>l(t, (t, r)=>r.removeStream(e)),
                addTrack: (e, t, r, n)=>l(r, async (r, o)=>{
                        n && await S(n, r), o.addTrack(e, t);
                    }),
                removeTrack: (e, t)=>l(t, (t, r)=>r.removeTrack(e)),
                replaceTrack: (e, t, r, n)=>l(r, async (r, o)=>{
                        n && await S(n, r), o.replaceTrack(e, t);
                    }),
                onPeerJoin: (e)=>u.onPeerJoin = e,
                onPeerLeave: (e)=>u.onPeerLeave = e,
                onPeerStream: (e)=>u.onPeerStream = e,
                onPeerTrack: (e)=>u.onPeerTrack = e
            };
        })((e)=>H = e, (e)=>delete h[e], ()=>{
            delete n[l][f], B.forEach(clearTimeout), T.forEach(async (e)=>(await e)()), clearInterval(i);
        });
    };
})({
    init (e) {
        return ve(e, rt, 5).map((e)=>{
            const t = ((e, t)=>{
                const r = {}, n = ()=>{
                    const o = new WebSocket(e);
                    o.onclose = ()=>{
                        ke[e] ??= 3333, setTimeout(n, ke[e]), ke[e] *= 2;
                    }, o.onmessage = (e)=>t(e.data), r.socket = o, r.url = o.url, r.ready = new Promise((t)=>o.onopen = ()=>{
                            t(r), ke[e] = 3333;
                        }), r.send = (e)=>{
                        1 === o.readyState && o.send(e);
                    };
                };
                return n(), r;
            })(e, (e)=>{
                const [r, n, o, a] = Se(e);
                if (r === Ve) Me[n]?.(qe[n], o.content);
                else {
                    const e = `${oe}: relay failure from ${t.url} - `;
                    "NOTICE" === r ? console.warn(e + n) : "OK" !== r || o || console.warn(e + a);
                }
            });
            return Ze[e] = t, t.ready;
        });
    },
    subscribe (e, t, r, n) {
        const o = se(64), a = se(64);
        return Me[o] = Me[a] = (t, r)=>n(t, r, async (t, r)=>e.send(await Fe(t, r))), e.send(Xe(o, t)), e.send(Xe(a, r)), ()=>{
            e.send(Ye(o)), e.send(Ye(a)), delete Me[o], delete Me[a];
        };
    },
    async announce (e, t) {
        return e.send(await Fe(t, Ae({
            peerId: ce
        })));
    }
}), et = (tt = Ze, ()=>de(le(tt).map(([e, t])=>[
            e,
            t.socket
        ])));
var tt;
const rt = [
    "eu.purplerelay.com",
    "ftp.halifax.rwth-aachen.de/nostr",
    "multiplexer.huszonegy.world",
    "nostr.cool110.xyz",
    "nostr.data.haus",
    "nostr.grooveix.com",
    "nostr.huszonegy.world",
    "nostr.mom",
    "nostr.sathoarder.com",
    "nostr.vulpem.com",
    "relay.fountain.fm",
    "relay.nostraddress.com",
    "relay.nostromo.social",
    "relay.snort.social",
    "relay.verified-nostr.com",
    "yabu.me/v2"
].map((e)=>"wss://" + e);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["841Fv"], null, "parcelRequire55a5")

//# sourceMappingURL=trystero-nostr.min.7904d83c.js.map
