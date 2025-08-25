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
})({"fr5nD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "55a3759f43c0b397";
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

},{}],"4hKvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultRelayUrls", ()=>Q);
parcelHelpers.export(exports, "getRelaySockets", ()=>W);
parcelHelpers.export(exports, "joinRoom", ()=>V);
parcelHelpers.export(exports, "selfId", ()=>s);
const { floor: e , random: r  } = Math, t = "Trystero", n = (e, r)=>Array(e).fill().map(r), a = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", o = (t)=>n(t, ()=>a[e(62 * r())]).join(""), s = o(20), i = Promise.all.bind(Promise), c = "undefined" != typeof window, { entries: l , fromEntries: d , keys: f  } = Object, u = ()=>{}, p = (e)=>Error(`${t}: ${e}`), y = new TextEncoder, m = new TextDecoder, w = (e)=>y.encode(e), g = (e)=>m.decode(e), h = (...e)=>e.join("@"), b = JSON.stringify, k = JSON.parse, v = {}, P = "AES-GCM", T = {}, A = async (e)=>T[e] || (T[e] = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", w(e)))).map((e)=>e.toString(36)).join("")), S = async (e, r)=>{
    const t = crypto.getRandomValues(new Uint8Array(16));
    var n;
    return t.join(",") + "$" + (n = await crypto.subtle.encrypt({
        name: P,
        iv: t
    }, await e, w(r)), btoa(String.fromCharCode.apply(null, new Uint8Array(n))));
}, D = async (e, r)=>{
    const [t, n] = r.split("$");
    return g(await crypto.subtle.decrypt({
        name: P,
        iv: new Uint8Array(t.split(","))
    }, await e, ((e)=>{
        const r = atob(e);
        return new Uint8Array(r.length).map((e, t)=>r.charCodeAt(t)).buffer;
    })(n)));
}, L = "icegatheringstatechange", I = "offer";
var $ = (e, { rtcConfig: r , rtcPolyfill: t , turnConfig: n  })=>{
    const a = new (t || RTCPeerConnection)({
        iceServers: E.concat(n || []),
        ...r
    }), o = {};
    let s = !1, c = !1, l = null;
    const d = (e)=>{
        e.binaryType = "arraybuffer", e.bufferedAmountLowThreshold = 65535, e.onmessage = (e)=>o.data?.(e.data), e.onopen = ()=>o.connect?.(), e.onclose = ()=>o.close?.(), e.onerror = (e)=>o.error?.(e);
    }, f = (e)=>Promise.race([
            new Promise((r)=>{
                const t = ()=>{
                    "complete" === e.iceGatheringState && (e.removeEventListener(L, t), r());
                };
                e.addEventListener(L, t), t();
            }),
            new Promise((e)=>setTimeout(e, 5e3))
        ]).then(()=>({
                type: e.localDescription.type,
                sdp: e.localDescription.sdp.replace(/a=ice-options:trickle\s\n/g, "")
            }));
    return e ? (l = a.createDataChannel("data"), d(l)) : a.ondatachannel = ({ channel: e  })=>{
        l = e, d(e);
    }, a.onnegotiationneeded = async ()=>{
        try {
            s = !0, await a.setLocalDescription();
            const e = await f(a);
            o.signal?.(e);
        } catch (e) {
            o.error?.(e);
        } finally{
            s = !1;
        }
    }, a.onconnectionstatechange = ()=>{
        [
            "disconnected",
            "failed",
            "closed"
        ].includes(a.connectionState) && o.close?.();
    }, a.ontrack = (e)=>{
        o.track?.(e.track, e.streams[0]), o.stream?.(e.streams[0]);
    }, a.onremovestream = (e)=>o.stream?.(e.stream), e && (a.canTrickleIceCandidates || a.onnegotiationneeded()), {
        created: Date.now(),
        connection: a,
        get channel () {
            return l;
        },
        get isDead () {
            return "closed" === a.connectionState;
        },
        async signal (r) {
            if ("open" !== l?.readyState || r.sdp?.includes("a=rtpmap")) try {
                if (r.type === I) {
                    if (s || "stable" !== a.signalingState && !c) {
                        if (e) return;
                        await i([
                            a.setLocalDescription({
                                type: "rollback"
                            }),
                            a.setRemoteDescription(r)
                        ]);
                    } else await a.setRemoteDescription(r);
                    await a.setLocalDescription();
                    const t = await f(a);
                    return o.signal?.(t), t;
                }
                if ("answer" === r.type) {
                    c = !0;
                    try {
                        await a.setRemoteDescription(r);
                    } finally{
                        c = !1;
                    }
                }
            } catch (e) {
                o.error?.(e);
            }
        },
        sendData (e) {
            return l.send(e);
        },
        destroy () {
            l?.close(), a.close(), s = !1, c = !1;
        },
        setHandlers (e) {
            return Object.assign(o, e);
        },
        offerPromise: e ? new Promise((e)=>o.signal = (r)=>{
                r.type === I && e(r);
            }) : Promise.resolve(),
        addStream (e) {
            return e.getTracks().forEach((r)=>a.addTrack(r, e));
        },
        removeStream (e) {
            return a.getSenders().filter((r)=>e.getTracks().includes(r.track)).forEach((e)=>a.removeTrack(e));
        },
        addTrack (e, r) {
            return a.addTrack(e, r);
        },
        removeTrack (e) {
            const r = a.getSenders().find((r)=>r.track === e);
            r && a.removeTrack(r);
        },
        replaceTrack (e, r) {
            const t = a.getSenders().find((r)=>r.track === e);
            if (t) return t.replaceTrack(r);
        }
    };
};
const E = [
    ...n(3, (e, r)=>`stun:stun${r || ""}.l.google.com:19302`),
    "stun:stun.cloudflare.com:3478"
].map((e)=>({
        urls: e
    })), C = Object.getPrototypeOf(Uint8Array), U = 16369, _ = 255, O = "bufferedamountlow", j = (e)=>"@_" + e;
const H = {}, J = {}, M = {}, R = {}, x = {}, q = {}, B = {}, G = {}, N = async (e)=>{
    if (J[e]) return J[e];
    const r = (await A(e)).slice(0, 20);
    return J[e] = r, M[r] = e, r;
}, z = async (e, r, t)=>e.send(b({
        action: "announce",
        info_hash: await N(r),
        peer_id: s,
        ...t
    })), K = (e, r, n)=>console.warn(`${t}: torrent tracker ${n ? "failure" : "warning"} from ${e} - ${r}`), V = (({ init: e , subscribe: r , announce: a  })=>{
    const o = {};
    let y, m, v, T = !1;
    return (L, I, E)=>{
        const { appId: H  } = L;
        if (o[H]?.[I]) return o[H][I];
        const J = {}, M = {}, R = h(t, H, I), x = A(R), q = A(h(R, s)), B = (async (e, r, t)=>crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, w(`${e}:${r}:${t}`)), {
                name: P
            }, !1, [
                "encrypt",
                "decrypt"
            ]))(L.password || "", H, I), G = (e)=>async (r)=>({
                    type: r.type,
                    sdp: await e(B, r.sdp)
                }), N = G(D), z = G(S), K = ()=>$(!0, L), V = (e, r, t)=>{
            M[r] ? M[r] !== e && e.destroy() : (M[r] = e, re(e, r), J[r]?.forEach((e, r)=>{
                r !== t && e.destroy();
            }), delete J[r]);
        }, W = (e, r)=>{
            M[r] === e && delete M[r];
        }, F = (e)=>(m.push(...n(e, K)), i(m.splice(0, e).map((e)=>e.offerPromise.then(z).then((r)=>({
                        peer: e,
                        offer: r
                    }))))), Q = (e, r)=>E?.({
                error: `incorrect password (${L.password}) when decrypting ${r}`,
                appId: H,
                peerId: e,
                roomId: I
            }), X = (e)=>async (r, t, n)=>{
                const [a, o] = await i([
                    x,
                    q
                ]);
                if (r !== a && r !== o) return;
                const { peerId: c , offer: l , answer: d , peer: f  } = "string" == typeof t ? k(t) : t;
                if (c !== s && !M[c]) {
                    if (!c || l || d) {
                        if (l) {
                            const r = J[c]?.[e];
                            if (r && s > c) return;
                            const t = $(!1, L);
                            let a;
                            t.setHandlers({
                                connect () {
                                    return V(t, c, e);
                                },
                                close () {
                                    return W(t, c);
                                }
                            });
                            try {
                                a = await N(l);
                            } catch  {
                                return void Q(c, "offer");
                            }
                            if (t.isDead) return;
                            const [o, d] = await i([
                                A(h(R, c)),
                                t.signal(a)
                            ]);
                            n(o, b({
                                peerId: s,
                                answer: await z(d)
                            }));
                        } else if (d) {
                            let r;
                            try {
                                r = await N(d);
                            } catch (e) {
                                return void Q(c, "answer");
                            }
                            if (f) f.setHandlers({
                                connect () {
                                    return V(f, c, e);
                                },
                                close () {
                                    return W(f, c);
                                }
                            }), f.signal(r);
                            else {
                                const t = J[c]?.[e];
                                t && !t.isDead && t.signal(r);
                            }
                        }
                    } else {
                        if (J[c]?.[e]) return;
                        const [[{ peer: r , offer: t  }], a] = await i([
                            F(1),
                            A(h(R, c))
                        ]);
                        J[c] ||= [], J[c][e] = r, setTimeout(()=>((e, r)=>{
                                if (M[e]) return;
                                const t = J[e]?.[r];
                                t && (delete J[e][r], t.destroy());
                            })(c, e), .9 * Y[e]), r.setHandlers({
                            connect () {
                                return V(r, c, e);
                            },
                            close () {
                                return W(r, c);
                            }
                        }), n(a, b({
                            peerId: s,
                            offer: t
                        }));
                    }
                }
            };
        if (!L) throw p("requires a config map as the first argument");
        if (!H && !L.firebaseApp) throw p("config map is missing appId field");
        if (!I) throw p("roomId argument required");
        if (!T) {
            const r = e(L);
            m = n(20, K), y = Array.isArray(r) ? r : [
                r
            ], T = !0, v = setInterval(()=>m = m.filter((e)=>{
                    const r = Date.now() - e.created < 57333;
                    return r || e.destroy(), r;
                }), 59052.99);
        }
        const Y = y.map(()=>5333), Z = [], ee = y.map(async (e, t)=>r(await e, await x, await q, X(t), F));
        i([
            x,
            q
        ]).then(([e, r])=>{
            const t = async (n, o)=>{
                const s = await a(n, e, r);
                "number" == typeof s && (Y[o] = s), Z[o] = setTimeout(()=>t(n, o), Y[o]);
            };
            ee.forEach(async (e, r)=>{
                await e, t(await y[r], r);
            });
        });
        let re = u;
        return o[H] ||= {}, o[H][I] = ((e, r, a)=>{
            const o = {}, s = {}, y = {}, m = {}, h = {}, v = {}, P = {}, T = {
                onPeerJoin: u,
                onPeerLeave: u,
                onPeerStream: u,
                onPeerTrack: u
            }, A = (e, r)=>(e ? Array.isArray(e) ? e : [
                    e
                ] : f(o)).flatMap((e)=>{
                    const n = o[e];
                    return n ? r(e, n) : (console.warn(`${t}: no peer with id ${e} found`), []);
                }), S = (e)=>{
                o[e] && (delete o[e], delete m[e], delete h[e], T.onPeerLeave(e), r(e));
            }, D = (e)=>{
                if (s[e]) return y[e];
                if (!e) throw p("action type argument is required");
                const r = w(e);
                if (r.byteLength > 12) throw p(`action type string "${e}" (${r.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
                const t = new Uint8Array(12);
                t.set(r);
                let a = 0;
                return s[e] = {
                    onComplete: u,
                    onProgress: u,
                    setOnComplete: (r)=>s[e] = {
                            ...s[e],
                            onComplete: r
                        },
                    setOnProgress: (r)=>s[e] = {
                            ...s[e],
                            onProgress: r
                        },
                    async send (e, r, s, c) {
                        if (s && "object" != typeof s) throw p("action meta argument must be an object");
                        const l = typeof e;
                        if ("undefined" === l) throw p("action data cannot be undefined");
                        const d = "string" !== l, f = e instanceof Blob, u = f || e instanceof ArrayBuffer || e instanceof C;
                        if (s && !u) throw p("action meta argument can only be used with binary data");
                        const y = u ? new Uint8Array(f ? await e.arrayBuffer() : e) : w(d ? b(e) : e), m = s ? w(b(s)) : null, g = Math.ceil(y.byteLength / U) + (s ? 1 : 0) || 1, h = n(g, (e, r)=>{
                            const n = r === g - 1, o = s && 0 === r, i = new Uint8Array(15 + (o ? m.byteLength : n ? y.byteLength - U * (g - (s ? 2 : 1)) : U));
                            return i.set(t), i.set([
                                a
                            ], 12), i.set([
                                n | o << 1 | u << 2 | d << 3
                            ], 13), i.set([
                                Math.round((r + 1) / g * _)
                            ], 14), i.set(s ? o ? m : y.subarray((r - 1) * U, r * U) : y.subarray(r * U, (r + 1) * U), 15), i;
                        });
                        return a = a + 1 & _, i(A(r, async (e, r)=>{
                            const { channel: t  } = r;
                            let n = 0;
                            for(; n < g;){
                                const a = h[n];
                                if (t.bufferedAmount > t.bufferedAmountLowThreshold && await new Promise((e)=>{
                                    const r = ()=>{
                                        t.removeEventListener(O, r), e();
                                    };
                                    t.addEventListener(O, r);
                                }), !o[e]) break;
                                r.sendData(a), n++, c?.(a[14] / _, e, s);
                            }
                        }));
                    }
                }, y[e] ||= [
                    s[e].send,
                    s[e].setOnComplete,
                    s[e].setOnProgress
                ];
            }, L = (e, r)=>{
                const n = new Uint8Array(r), a = g(n.subarray(0, 12)).replaceAll("\0", ""), [o] = n.subarray(12, 13), [i] = n.subarray(13, 14), [c] = n.subarray(14, 15), l = n.subarray(15), d = !!(1 & i), f = !!(2 & i), u = !!(4 & i), p = !!(8 & i);
                if (!s[a]) return void console.warn(`${t}: received message with unregistered type (${a})`);
                m[e] ||= {}, m[e][a] ||= {};
                const y = m[e][a][o] ||= {
                    chunks: []
                };
                if (f ? y.meta = k(g(l)) : y.chunks.push(l), s[a].onProgress(c / _, e, y.meta), !d) return;
                const w = new Uint8Array(y.chunks.reduce((e, r)=>e + r.byteLength, 0));
                if (y.chunks.reduce((e, r)=>(w.set(r, e), e + r.byteLength), 0), delete m[e][a][o], u) s[a].onComplete(w, e, y.meta);
                else {
                    const r = g(w);
                    s[a].onComplete(p ? k(r) : r, e);
                }
            }, I = async ()=>{
                await N(""), await new Promise((e)=>setTimeout(e, 99)), l(o).forEach(([e, r])=>{
                    r.destroy(), delete o[e];
                }), a();
            }, [$, E] = D(j("ping")), [H, J] = D(j("pong")), [M, R] = D(j("signal")), [x, q] = D(j("stream")), [B, G] = D(j("track")), [N, z] = D(j("leave"));
            return e((e, r)=>{
                o[r] || (o[r] = e, e.setHandlers({
                    data: (e)=>L(r, e),
                    stream (e) {
                        T.onPeerStream(e, r, v[r]), delete v[r];
                    },
                    track (e, t) {
                        T.onPeerTrack(e, t, r, P[r]), delete P[r];
                    },
                    signal: (e)=>M(e, r),
                    close: ()=>S(r),
                    error (e) {
                        console.error(e), S(r);
                    }
                }), T.onPeerJoin(r), e.drainEarlyData?.((e)=>L(r, e)));
            }), E((e, r)=>H("", r)), J((e, r)=>{
                h[r]?.(), delete h[r];
            }), R((e, r)=>o[r]?.signal(e)), q((e, r)=>v[r] = e), G((e, r)=>P[r] = e), z((e, r)=>S(r)), c && addEventListener("beforeunload", I), {
                makeAction: D,
                leave: I,
                async ping (e) {
                    if (!e) throw p("ping() must be called with target peer ID");
                    const r = Date.now();
                    return $("", e), await new Promise((r)=>h[e] = r), Date.now() - r;
                },
                getPeers: ()=>d(l(o).map(([e, r])=>[
                            e,
                            r.connection
                        ])),
                addStream: (e, r, t)=>A(r, async (r, n)=>{
                        t && await x(t, r), n.addStream(e);
                    }),
                removeStream: (e, r)=>A(r, (r, t)=>t.removeStream(e)),
                addTrack: (e, r, t, n)=>A(t, async (t, a)=>{
                        n && await B(n, t), a.addTrack(e, r);
                    }),
                removeTrack: (e, r)=>A(r, (r, t)=>t.removeTrack(e)),
                replaceTrack: (e, r, t, n)=>A(t, async (t, a)=>{
                        n && await B(n, t), a.replaceTrack(e, r);
                    }),
                onPeerJoin: (e)=>T.onPeerJoin = e,
                onPeerLeave: (e)=>T.onPeerLeave = e,
                onPeerStream: (e)=>T.onPeerStream = e,
                onPeerTrack: (e)=>T.onPeerTrack = e
            };
        })((e)=>re = e, (e)=>delete M[e], ()=>{
            delete o[H][I], Z.forEach(clearTimeout), ee.forEach(async (e)=>(await e)()), clearInterval(v);
        });
    };
})({
    init (e) {
        return ((e, r, t)=>(e.relayUrls || r).slice(0, e.relayUrls ? e.relayUrls.length : e.relayRedundancy || t))(e, Q, 3).map((e)=>{
            const r = ((e, r)=>{
                const t = {}, n = ()=>{
                    const a = new WebSocket(e);
                    a.onclose = ()=>{
                        v[e] ??= 3333, setTimeout(n, v[e]), v[e] *= 2;
                    }, a.onmessage = (e)=>r(e.data), t.socket = a, t.url = a.url, t.ready = new Promise((r)=>a.onopen = ()=>{
                            r(t), v[e] = 3333;
                        }), t.send = (e)=>{
                        1 === a.readyState && a.send(e);
                    };
                };
                return n(), t;
            })(e, (e)=>{
                const r = k(e), n = r["failure reason"], a = r["warning message"], { interval: o  } = r, s = M[r.info_hash];
                if (n) K(t, n, !0);
                else {
                    if (a && K(t, a), o && 1e3 * o > q[t] && x[t][s]) {
                        const e = Math.min(1e3 * o, 120333);
                        clearInterval(R[t][s]), q[t] = e, R[t][s] = setInterval(x[t][s], e);
                    }
                    B[r.offer_id] || (r.offer || r.answer) && (B[r.offer_id] = !0, G[t][s]?.(r));
                }
            }), { url: t  } = r;
            return H[t] = r, G[t] = {}, r.ready;
        });
    },
    subscribe (e, r, t, n, a) {
        const { url: s  } = e, i = async ()=>{
            const t = d((await a(10)).map((e)=>[
                    o(20),
                    e
                ]));
            G[e.url][r] = (a)=>{
                if (a.offer) n(r, {
                    offer: a.offer,
                    peerId: a.peer_id
                }, (t, n)=>z(e, r, {
                        answer: k(n).answer,
                        offer_id: a.offer_id,
                        to_peer_id: a.peer_id
                    }));
                else if (a.answer) {
                    const e = t[a.offer_id];
                    e && n(r, {
                        answer: a.answer,
                        peerId: a.peer_id,
                        peer: e.peer
                    });
                }
            }, z(e, r, {
                numwant: 10,
                offers: l(t).map(([e, { offer: r  }])=>({
                        offer_id: e,
                        offer: r
                    }))
            });
        };
        return q[s] = 33333, x[s] ||= {}, x[s][r] = i, R[s] ||= {}, R[s][r] = setInterval(i, q[s]), i(), ()=>{
            clearInterval(R[s][r]), delete G[s][r], delete x[s][r];
        };
    },
    announce (e) {
        return q[e.url];
    }
}), W = (F = H, ()=>d(l(F).map(([e, r])=>[
            e,
            r.socket
        ])));
var F;
const Q = [
    "tracker.webtorrent.dev",
    "tracker.openwebtorrent.com",
    "tracker.btorrent.xyz",
    "tracker.files.fm:7073/announce"
].map((e)=>"wss://" + e);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fr5nD"], null, "parcelRequire55a5")

//# sourceMappingURL=trystero-torrent.min.43c0b397.js.map
