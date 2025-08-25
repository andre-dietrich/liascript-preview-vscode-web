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
})({"6UYtG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c59461a8361a74ef";
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

},{}],"bpS8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extract", ()=>extract);
var _endpoints = require("./endpoints");
var _helper = require("../../helper");
/**
 * All retrieved embeds are stored within this global variable. The key is
 * defined by the URL, whereby the body is a string that should replace the
 * innerHTML.
 */ var backup = Object();
/**
 * Handle providers according to the spec:
 *
 * <https://oembed.com/>
 *
 * The only difference is, that it will previously lookup the internal provider
 * list and if there is no proper result, it will grab the website, if possible,
 * and extract the provider URL from the link-tag within the header.
 *
 * @param url
 * @returns
 */ async function findProvider(url) {
    const link = url.replace("https://", "").replace("http://", "");
    const candidate = (0, _endpoints.endpoints).find((endpoint)=>{
        const [url, schema] = endpoint;
        if (!schema || !schema.length) return url.includes(link);
        return schema.some((schema)=>{
            return link.match(new RegExp(schema.replace(/\*/g, "(?:.*)"), "i"));
        });
    });
    if (candidate) return "https://" + candidate[0];
    else // try to grab the provider from the website
    return fetchProviderFromWebsite(url);
}
async function fetchProviderFromWebsite(url, withoutProxy = true) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        // find the oembed service as defined here:
        // https://oembed.com
        const match = text.match(/<link.+?type="(application\/)?json\+oembed".+?(\/?[ \\n\\t]*>)/gi);
        if (match?.[0]) {
            const href = match[0].match(/.*?href="(.*?)"/i);
            return href?.[1];
        }
    } catch (err) {
        // if the first loading fails, a second attempt is done with a
        // proxy server in between
        if (withoutProxy) return fetchProviderFromWebsite(_helper.PROXY + url, false);
    }
}
async function fetchEmbed(link, resourceUrl, params, prefix) {
    resourceUrl = resourceUrl.replace(/\{format\}/g, "json");
    let url = `${resourceUrl}?format=json&url=${encodeURIComponent(link)}`;
    url = params.maxwidth ? `${url}&maxwidth=${params.maxwidth}` : url;
    url = params.maxheight ? `${url}&maxheight=${params.maxheight}` : url;
    let res;
    let json;
    if (prefix) {
        url = prefix + encodeURIComponent(url);
        res = await fetch(url);
        json = JSON.parse(await res.text());
        json = JSON.parse(json.contents);
    } else {
        res = await fetch(url);
        json = await res.json();
    }
    return json;
}
async function extract(link, params) {
    // this makes urls more equal
    if (link.endsWith("/")) link = link.slice(0, -1);
    // check if it has been loaded so far
    if (backup[link] && backup[link][JSON.stringify(params)]) return backup[link][JSON.stringify(params)];
    const p = await findProvider(link);
    if (!p) throw new Error(`No provider found with given url "${link}"`);
    let data;
    try {
        data = await fetchEmbed(link, p, params);
    } catch (error) {
        data = await fetchEmbed(link, p, params, _helper.PROXY);
    }
    const key = JSON.stringify(params);
    if (!backup[link]) {
        let x = {};
        x[key] = data;
        backup[link] = x;
    } else backup[link][key] = data;
    return data;
}
function iframe(url) {
    return `<iframe src="${url}" style="width: 100%; height: inherit" allowfullscreen></iframe>`;
}
function init(event) {
    if (event.target instanceof HTMLElement) event.target.style.width = "100%";
}
customElements.define("lia-embed", class extends HTMLElement {
    constructor(){
        super();
        this.url_ = null;
        this.div_ = document.createElement("div");
        this.div_.style.width = "inherit";
        this.div_.style.height = "inherit";
        this.div_.style.display = "inline-block";
        this.thumbnail_ = false;
        this.paramCount = 0;
        this.dataAttributes = {};
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: "closed"
        });
        shadowRoot.appendChild(this.div_);
        const container = this.parentElement // document.getElementsByClassName("lia-slide__content")[0]
        ;
        let scale = parseFloat(this.getAttribute("scale") || "0.674");
        try {
            const attributes = this.getAttribute("data-attributes");
            if (attributes) this.dataAttributes = JSON.parse(attributes);
        } catch (e) {
            console.warn("oembed: Couldn't parse data-attributes");
        }
        if (container) {
            const paddingLeft = parseInt(window.getComputedStyle(container).getPropertyValue("padding-left").replace("px", ""));
            this.maxwidth_ = this.maxwidth_ != null ? this.maxwidth_ : container.clientWidth - paddingLeft - 30;
            this.maxheight_ = this.maxheight_ != null ? this.maxheight_ : Math.floor(this.maxwidth_ * (scale || 0.674));
            if (this.maxheight_ > screen.availHeight) this.maxheight_ = Math.floor(screen.availHeight * (scale || 0.76));
        }
        this.render();
    }
    render() {
        if (this.paramCount > 2) {
            let div = this.div_;
            let options = {
                maxwidth: this.maxwidth_,
                maxheight: this.maxheight_
            };
            if (this.url_) {
                let url_ = this.url_;
                let thumbnail_ = this.thumbnail_;
                extract(url_, options).then((json)=>{
                    try {
                        if (thumbnail_ && json.thumbnail_url) div.innerHTML = `<img style="width: inherit; height: inherit; object-fit: cover" src="${json.thumbnail_url}"></img>`;
                        else {
                            div.innerHTML = json.html;
                            this.applyAttributesToIframe(div);
                        }
                    } catch (e) {
                        div.innerHTML = iframe(url_);
                        this.applyAttributesToIframe(div);
                    }
                    const newChild = div.children[0];
                    if (newChild) {
                        // directly loads iframe
                        if (newChild.nodeName === "IFRAME") newChild.addEventListener("load", init);
                        else if (newChild.childElementCount === 1 && newChild.children[0].nodeName === "IFRAME") newChild.children[0].addEventListener("load", init);
                        else if (newChild instanceof HTMLElement) newChild.style.width = "100%";
                    }
                }).catch((err)=>{
                    div.innerHTML = `<iframe src="${url_}" style="width: 100%; height: ${options.maxheight ? options.maxheight + "px" : "inherit"};" allowfullscreen></iframe>`;
                    this.applyAttributesToIframe(div);
                });
            }
        }
    }
    applyAttributesToIframe(div) {
        const iframe = div.firstElementChild;
        if (iframe) {
            for(const key in this.dataAttributes)if (this.dataAttributes.hasOwnProperty(key)) {
                if (key === "style") iframe.style.cssText += this.dataAttributes[key];
                else iframe.setAttribute(key, this.dataAttributes[key]);
            }
        }
    }
    get url() {
        return this.url_;
    }
    set url(value) {
        if (this.url_ !== value) {
            this.url_ = value;
            this.paramCount++;
            this.render();
        }
    }
    get maxheight() {
        return this.maxheight_;
    }
    set maxheight(value) {
        if (this.maxheight_ !== value) {
            this.paramCount++;
            if (value != 0) this.maxheight_ = value;
        }
    }
    get maxwidth() {
        return this.maxwidth_;
    }
    set maxwidth(value) {
        if (this.maxwidth_ !== value) {
            this.paramCount++;
            if (value != 0) this.maxwidth_ = value;
        }
    }
    get thumbnail() {
        return this.thumbnail_;
    }
    set thumbnail(value) {
        this.thumbnail_ = value;
    }
});

},{"./endpoints":"f1lxX","../../helper":"7hqDz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1lxX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endpoints", ()=>endpoints);
const endpoints = JSON.parse(`[["www.23hq.com/23/oembed",["www.23hq.com/*/photo/*"]],["playout.3qsdn.com/oembed",["playout.3qsdn.com/embed/*"]],["api.abraia.me/oembed",["store.abraia.me/*"]],["oembed.acast.com/v1/embed-player",["play.acast.com/s/*"]],["secure.actblue.com/cf/oembed",["secure.actblue.com/donate/*"]],["adilo.bigcommand.com/web/oembed",["adilo.bigcommand.com/watch/*"]],["openapi.afreecatv.com/oembed/embedinfo",["vod.afreecatv.com/player/","v.afree.ca/ST/","vod.afreecatv.com/ST/","vod.afreecatv.com/PLAYER/STATION/","play.afreecatv.com/"]],["openapi.sooplive.co.kr/oembed/embedinfo",["vod.sooplive.co.kr/player/","v.afree.ca/ST/","vod.sooplive.co.kr/ST/","vod.sooplive.co.kr/PLAYER/STATION/","play.sooplive.co.kr/"]],["viewer.altium.com/shell/oembed",["altium.com/viewer/*"]],["api.altrulabs.com/api/v1/social/oembed",["app.altrulabs.com/*/*?answer_id=*","app.altrulabs.com/player/*"]],["live.amcharts.com/oembed",["live.amcharts.com/*","live.amcharts.com/*"]],["api.amtraker.com/v3/oembed",["amtraker.com/trains/*","amtraker.com/trains/*/*","*.amtraker.com/trains/*","*.amtraker.com/trains/*/*"]],["animatron.com/oembed/json",["www.animatron.com/project/*","animatron.com/project/*"]],["animoto.com/oembeds/create",["animoto.com/play/*"]],["api.anniemusic.app/api/v1/oembed",["anniemusic.app/t/*","anniemusic.app/p/*"]],["storymaps.arcgis.com/oembed",["storymaps.arcgis.com/stories/*"]],["studio.assemblrworld.com/api/oembed",["*.studio.assemblrworld.com/creation/*","studio.assemblrworld.com/creation/*","*.app-edu.assemblrworld.com/Creation/*","app-edu.assemblrworld.com/Creation/*","assemblr.world/*","editor.assemblrworld.com/*","*.assemblrworld.com/creation/*","*.assemblrworld.com/Creation/*","*.studio.assemblrworld.com/creation/*","studio.assemblrworld.com/creation/*","*.app-edu.assemblrworld.com/Creation/*","app-edu.assemblrworld.com/Creation/*","assemblr.world/*","editor.assemblrworld.com/*","*.assemblrworld.com/creation/*","*.assemblrworld.com/Creation/*"]],["api.audio.com/oembed",["audio.com/*","www.audio.com/*","audio.com/*","www.audio.com/*"]],["audioboom.com/publishing/oembed.{format}",["audioboom.com/channels/*","audioboom.com/channel/*","audioboom.com/playlists/*","audioboom.com/podcasts/*","audioboom.com/podcast/*","audioboom.com/posts/*","audioboom.com/episodes/*"]],["audioclip.naver.com/oembed",["audioclip.naver.com/channels/*/clips/*","audioclip.naver.com/audiobooks/*"]],["audiomack.com/oembed",["audiomack.com/*/song/*","audiomack.com/*/album/*","audiomack.com/*/playlist/*"]],["podcasts.audiomeans.fr/services/oembed",["podcasts.audiomeans.fr/*"]],["backtracks.fm/oembed",["backtracks.fm/*/*/e/*","backtracks.fm/*/s/*/*","backtracks.fm/*/*/*/*/e/*/*","backtracks.fm/*","backtracks.fm/*"]],["balsamiq.cloud/oembed",["balsamiq.cloud/*"]],["api.beams.fm/oEmbed",["beams.fm/*"]],["www.beautiful.ai/api/oembed",[]],["www.behance.net/services/oembed",["www.behance.net/gallery/*/*","www.behance.net/*/services/*/*"]],["api.bitchute.com/oembed/",[]],["blackfire.io/oembed",["blackfire.io/profiles/*/graph","blackfire.io/profiles/compare/*/graph"]],["blogcast.host/oembed",["blogcast.host/embed/*","blogcast.host/embedly/*"]],["embed.bsky.app/oembed",["bsky.app/profile/*/post/*"]],["bookingmood.com/api/oembed",["www.bookingmood.com/embed/*/*"]],["www.bornetube.dk/media/lasync/oembed/",["www.bornetube.dk/media/*","www.bornetube.dk/video/*"]],["boxofficebuz.com/oembed",[]],["www.bumper.com/oembed/bumper",["www.bumper.com/oembed/bumper","www.bumper.com/oembed-s/bumper"]],["video.bunnycdn.com/OEmbed",["iframe.mediadelivery.net/*","iframe.mediadelivery.net/*","video.bunnycdn.com/*","video.bunnycdn.com/*"]],["buttondown.email/embed",["buttondown.email/*"]],["cacoo.com/oembed.{format}",["cacoo.com/diagrams/*"]],["www.canva.com/_oembed",["www.canva.com/design/*/view"]],["castmake-ai.com/api/embed",["www.castmake-ai.com/c/*/episodes/*"]],["img.catbo.at/oembed.json",["img.catbo.at/*"]],["api.celero.io/api/oembed",["embeds.celero.io/*"]],["view.ceros.com/oembed",["view.ceros.com/*","view.ceros.com/*"]],["embed.chartblocks.com/1.0/oembed",["public.chartblocks.com/c/*"]],["chirb.it/oembed.{format}",["chirb.it/*"]],["chroco.ooo/embed",["chroco.ooo/mypage/*","chroco.ooo/story/*"]],["www.circuitlab.com/circuit/oembed/",["www.circuitlab.com/circuit/*"]],["www.clipland.com/api/oembed",["www.clipland.com/v/*","www.clipland.com/v/*"]],["api.clyp.it/oembed/",["clyp.it/*","clyp.it/playlist/*"]],["app.ilovecoco.video/api/oembed.{format}",["app.ilovecoco.video/*/embed"]],["codehs.com/api/sharedprogram/1/oembed/",["codehs.com/editor/share_abacus/*"]],["codepen.io/api/oembed",["codepen.io/*","codepen.io/*"]],["codepoints.net/api/v1/oembed",["codepoints.net/*","codepoints.net/*","www.codepoints.net/*","www.codepoints.net/*"]],["codesandbox.io/oembed",["codesandbox.io/s/*","codesandbox.io/embed/*"]],["www.collegehumor.com/oembed.{format}",["www.collegehumor.com/video/*"]],["commaful.com/api/oembed/",["commaful.com/play/*"]],["coub.com/api/oembed.{format}",["coub.com/view/*","coub.com/embed/*"]],["crowdranking.com/api/oembed.{format}",["crowdranking.com/*/*"]],["crumb.sh/oembed/",["crumb.sh/*"]],["gql.cueup.io/oembed",["cueup.io/user/*/sounds/*"]],["api.curated.co/oembed",["*.curated.co/*"]],["app.customerdb.com/embed",["app.customerdb.com/share/*"]],["app.dadan.io/api/video/oembed",["app.dadan.io/*","stage.dadan.io/*"]],["www.dailymotion.com/services/oembed",["www.dailymotion.com/video/*","geo.dailymotion.com/player.html?video=*"]],["dalexni.com/oembed/",["dalexni.com/i/*"]],["api.datawrapper.de/v3/oembed/",["datawrapper.dwcdn.net/*"]],["embed.deseret.com/",["*.deseret.com/*"]],["backend.deviantart.com/oembed",["*.deviantart.com/art/*","*.deviantart.com/*#/d*","fav.me/*","sta.sh/*","*.deviantart.com/art/*","*.deviantart.com/*/art/*","sta.sh/*","*.deviantart.com/*#/d*"]],["www.ultimedia.com/api/search/oembed",["www.ultimedia.com/central/video/edit/id/*/topic_id/*/","www.ultimedia.com/default/index/videogeneric/id/*/showtitle/1/viewnc/1","www.ultimedia.com/default/index/videogeneric/id/*"]],["www.docdroid.net/api/oembed",["*.docdroid.net/*","*.docdroid.net/*","docdro.id/*","docdro.id/*","*.docdroid.com/*","*.docdroid.com/*"]],["www.docswell.com/service/oembed",["docswell.com/s/*/*","docswell.com/s/*/*","www.docswell.com/s/*/*","www.docswell.com/s/*/*"]],["dotsub.com/services/oembed",["dotsub.com/view/*"]],["dreambroker.com/channel/oembed",["www.dreambroker.com/channel/*/*"]],["api.d.tube/oembed",["d.tube/v/*"]],["api.echoeshq.com/oembed",["app.echoeshq.com/embed/*"]],["www.edumedia-sciences.com/oembed.json",[]],["www.edumedia-sciences.com/oembed.xml",[]],["egliseinfo.catholique.fr/api/oembed",["egliseinfo.catholique.fr/*"]],["embedery.com/api/oembed",["embedery.com/widget/*"]],["ethfiddle.com/services/oembed/",["ethfiddle.com/*"]],["evt.live/api/oembed",["evt.live/*","evt.live/*/*","live.eventlive.pro/*","live.eventlive.pro/*/*"]],["api.everviz.com/oembed",["app.everviz.com/embed/*","app.everviz.com/embed/*"]],["graph.facebook.com/v16.0/oembed_post",["www.facebook.com/*/posts/*","www.facebook.com/*/activity/*","www.facebook.com/*/photos/*","www.facebook.com/photo.php?fbid=*","www.facebook.com/photos/*","www.facebook.com/permalink.php?story_fbid=*","www.facebook.com/media/set?set=*","www.facebook.com/questions/*","www.facebook.com/notes/*/*/*"]],["graph.facebook.com/v16.0/oembed_video",["www.facebook.com/*/videos/*","www.facebook.com/video.php?id=*","www.facebook.com/video.php?v=*"]],["graph.facebook.com/v16.0/oembed_page",["www.facebook.com/*"]],["faithlifetv.com/api/oembed",["faithlifetv.com/items/*","faithlifetv.com/items/resource/*/*","faithlifetv.com/media/*","faithlifetv.com/media/assets/*","faithlifetv.com/media/resource/*/*"]],["www.figma.com/api/oembed",["www.figma.com/file/*"]],["www.fireworktv.com/oembed",["*.fireworktv.com/*","*.fireworktv.com/embed/*/v/*"]],["www.fite.tv/oembed",["www.fite.tv/watch/*"]],["flat.io/services/oembed",["flat.io/score/*","*.flat.io/score/*"]],["www.flickr.com/services/oembed/",["*.flickr.com/photos/*","flic.kr/p/*","flic.kr/s/*","*.flickr.com/photos/*","flic.kr/p/*","flic.kr/s/*","*.*.flickr.com/*/*","*.*.flickr.com/*/*"]],["app.flourish.studio/api/v1/oembed",["public.flourish.studio/visualisation/*","public.flourish.studio/story/*"]],["flowhub.org/o/embed",["flowhub.org/f/*","flowhub.org/s/*"]],["fooday.app/oembed",["fooday.app/*/reviews/*","fooday.app/*/spots/*"]],["fiso.foxsports.com.au/oembed",["fiso.foxsports.com.au/isomorphic-widget/*","fiso.foxsports.com.au/isomorphic-widget/*"]],["framatube.org/services/oembed",["framatube.org/w/*"]],["framebuzz.com/oembed/",["framebuzz.com/v/*","framebuzz.com/v/*"]],["api.framer.com/web/oembed",["framer.com/share/*","framer.com/embed/*"]],["api.geograph.org.uk/api/oembed",["*.geograph.org.uk/*","*.geograph.co.uk/*","*.geograph.ie/*","*.wikimedia.org/*_geograph.org.uk_*"]],["www.geograph.org.gg/api/oembed",["*.geograph.org.gg/*","*.geograph.org.je/*","channel-islands.geograph.org/*","channel-islands.geographs.org/*","*.channel.geographs.org/*"]],["geo.hlipp.de/restapi.php/api/oembed",["geo-en.hlipp.de/*","geo.hlipp.de/*","germany.geograph.org/*"]],["embed.gettyimages.com/oembed",["gty.im/*"]],["www.gifnote.com/services/oembed",["www.gifnote.com/play/*"]],["giphy.com/services/oembed",["giphy.com/gifs/*","giphy.com/clips/*","gph.is/*","media.giphy.com/media/*/giphy.gif"]],["gloria.tv/oembed/",[]],["embed.gmetri.com/oembed/",["view.gmetri.com/*","*.gmetri.com/*"]],["app.gong.io/oembed",["app.gong.io/call?id=*"]],["api.grain.com/_/api/oembed",["grain.co/highlight/*","grain.co/share/*","grain.com/share/*"]],["api.luminery.com/oembed",["gtchannel.com/watch/*"]],["api.gumlet.com/v1/oembed",["gumlet.tv/watch/*","play.gumlet.io/embed/*"]],["api.gyazo.com/api/oembed",["gyazo.com/*"]],["api.hash.ai/oembed",["core.hash.ai/@*"]],["hearthis.at/oembed/?format=json",["hearthis.at/*/*/","hearthis.at/*/set/*/"]],["heyzine.com/api1/oembed",["heyzine.com/flip-book/*","*.hflip.co/*","*.aflip.in/*"]],["player.hihaho.com/services/oembed",["player.hihaho.com/*"]],["www.hippovideo.io/services/oembed",["*.hippovideo.io/*","*.hippovideo.io/*"]],["homey.app/api/oembed/flow",["homey.app/f/*","homey.app/*/flow/*"]],["portal.hopvue.com/api/oembed/",["*.hopvue.com/*"]],["huffduffer.com/oembed",["huffduffer.com/*/*"]],["www.hulu.com/api/oembed.{format}",["www.hulu.com/watch/*"]],["api.icosa.gallery/v1/oembed",["icosa.gallery/view/*"]],["oembed.ideamapper.com/oembed",["oembed.ideamapper.com/*"]],["www.ifixit.com/Embed",["www.ifixit.com/Guide/View/*"]],["www.ifttt.com/oembed/",["ifttt.com/recipes/*"]],["app.ignitevideo.cloud/api/oembed",["*.videocdn.net/player/*","*.euvideocdn.com/player/*"]],["www.iheart.com/oembed",["www.iheart.com/podcast/*/*"]],["qr.imenupro.com/api/oembed",["qr.imenupro.com/*","qr.imenupro.com/*"]],["player.indacolive.com/services/oembed",["player.indacolive.com/player/jwp/clients/*"]],["infogram.com/oembed",["infogram.com/*"]],["infoveave.net/services/oembed/",["*.infoveave.net/E/*","*.infoveave.net/P/*"]],["www.injurymap.com/services/oembed",["www.injurymap.com/exercises/*"]],["www.inoreader.com/oembed/api/",["www.inoreader.com/oembed/"]],["api.inphood.com/oembed",["*.inphood.com/*"]],["widgets.insighttimer.com/services/oembed",["insighttimer.com/*"]],["graph.facebook.com/v16.0/instagram_oembed",["instagram.com/*/p/*","www.instagram.com/*/p/*","instagram.com/*/p/*","www.instagram.com/*/p/*","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","www.instagram.com/reel/*","www.instagram.com/reel/*","instagram.com/reel/*","instagram.com/reel/*","instagr.am/reel/*","instagr.am/reel/*"]],["www.insticator.com/oembed",["ppa.insticator.com/embed-unit/*"]],["issuu.com/oembed",["issuu.com/*/docs/*"]],["samay.itabtechinfosys.com/oembed/",["samay.itabtechinfosys.com/*"]],["create.storage.api.itemis.io/api/embed",["play.itemis.io/*"]],["api.jovian.com/oembed.json",["jovian.ml/*","jovian.ml/viewer*","*.jovian.ml/*","jovian.ai/*","jovian.ai/viewer*","*.jovian.ai/*","jovian.com/*","jovian.com/viewer*","*.jovian.com/*"]],["tv.kakao.com/oembed",["tv.kakao.com/channel/*/cliplink/*","tv.kakao.com/m/channel/*/cliplink/*","tv.kakao.com/channel/v/*","tv.kakao.com/channel/*/livelink/*","tv.kakao.com/m/channel/*/livelink/*","tv.kakao.com/channel/l/*"]],["www.kickstarter.com/services/oembed",["www.kickstarter.com/projects/*"]],["www.kidoju.com/api/oembed",["www.kidoju.com/en/x/*/*","www.kidoju.com/fr/x/*/*"]],["embed.kit.co/oembed",["kit.co/*/*","kit.co/*/*"]],["www.kitchenbowl.com/oembed",["www.kitchenbowl.com/recipe/*"]],["jdr.knacki.info/oembed",["jdr.knacki.info/meuh/*","jdr.knacki.info/meuh/*"]],["api.spoonacular.com/knowledge/oembed",["knowledgepad.co/#/knowledge/*"]],["embed.kooapp.com/services/oembed",["*.kooapp.com/koo/*","*.kooapp.com/koo/*"]],["kurozora.app/oembed",["kurozora.app/episodes/*","kurozora.app/songs/*"]],["learningapps.org/oembed.php",["learningapps.org/*"]],["pod.univ-lille.fr/video/oembed",["pod.univ-lille.fr/video/*"]],["place.line.me/oembed",["place.line.me/businesses/*"]],["api.linkstackz.com/oembed",["linkstackz.com/irf/*","linkstackz.com/post/*"]],["livestream.com/oembed",["livestream.com/accounts/*/events/*","livestream.com/accounts/*/events/*/videos/*","livestream.com/*/events/*","livestream.com/*/events/*/videos/*","livestream.com/*/*","livestream.com/*/*/videos/*"]],["www.loom.com/v1/oembed",["loom.com/i/*","loom.com/share/*"]],["embed.lottiefiles.com/oembed",["lottiefiles.com/*","*.lottiefiles.com/*","*.lottie.host/*","lottie.host/*"]],["app.ludus.one/oembed",["app.ludus.one/*"]],["admin.lumiere.is/api/services/oembed",["*.lumiere.is/v/*"]],["marimo.app/oembed",["marimo.app/*"]],["mathembed.com/oembed",["mathembed.com/latex?inputText=*","mathembed.com/latex?inputText=*"]],["my.matterport.com/api/v1/models/oembed/",[]],["me.me/oembed",["me.me/i/*"]],["mdstrm.com/oembed",["mdstrm.com/embed/*","mdstrm.com/live-stream/*","mdstrm.com/image/*"]],["medienarchiv.zhdk.ch/oembed.{format}",["medienarchiv.zhdk.ch/entries/*"]],["mermaid.ink/services/oembed",["mermaid.ink/img/*","mermaid.ink/svg/*"]],["web.microsoftstream.com/oembed",["*.microsoftstream.com/video/*","*.microsoftstream.com/channel/*"]],["miro.com/api/v1/oembed",["miro.com/app/board/*"]],["www.mixcloud.com/oembed/",["www.mixcloud.com/*/*/","www.mixcloud.com/*/*/"]],["mixpanel.com/api/app/embed/oembed/",["mixpanel.com/*","*.mixpanel.com/*"]],["api.mobypicture.com/oEmbed",["www.mobypicture.com/user/*/view/*","moby.to/*"]],["musicboxmaniacs.com/embed/",["musicboxmaniacs.com/explore/melody/*"]],["api.mysqlexplain.com/v2/oembed.json",["mysqlexplain.com/explain/*","embed.mysqlexplain.com/explain/*"]],["namchey.com/api/oembed",["namchey.com/embeds/*"]],["www.nanoo.tv/services/oembed",["*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*"]],["api.nb.no/catalog/v1/oembed",["www.nb.no/items/*"]],["naturalatlas.com/oembed.{format}",["naturalatlas.com/*","naturalatlas.com/*/*","naturalatlas.com/*/*/*","naturalatlas.com/*/*/*/*"]],["ndla.no/oembed",["ndla.no/*","ndla.no/article/*","ndla.no/audio/*","ndla.no/concept/*","ndla.no/image/*","ndla.no/video/*"]],["nebula.tv/api/oembed",["nebula.tv/videos/*"]],["beta.nebula.tv/api/oembed",["beta.nebula.tv/videos/*"]],["cloud.needle.tools/oembed",["cloud.needle.tools/-/assets/*/file","cloud.needle.tools/view?file=*","*.needle.run/*"]],["api.neetorecord.com/api/v1/oembed",["*.neetorecord.com/watch/*"]],["www.nfb.ca/remote/services/oembed/",["*.nfb.ca/film/*"]],["api.observablehq.com/oembed",["observablehq.com/@*/*","observablehq.com/d/*","observablehq.com/embed/*"]],["www.odds.com.au/api/oembed/",["www.odds.com.au/*","odds.com.au/*"]],["song.link/oembed",["song.link/*","album.link/*","artist.link/*","playlist.link/*","pods.link/*","mylink.page/*","odesli.co/*"]],["odysee.com/$/oembed",["odysee.com/*/*","odysee.com/*"]],["official.fm/services/oembed.{format}",["official.fm/tracks/*","official.fm/playlists/*"]],["omniscope.me/_global_/oembed/json",["omniscope.me/*"]],["omny.fm/oembed",["omny.fm/shows/*"]],["orbitvu.co/service/oembed",["orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view","orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view"]],["origits.net/oembed",["origits.com/v/*"]],["origits.com/oembed",["origits.com/v/*"]],["outplayed.tv/oembed",["outplayed.tv/media/*"]],["overflow.io/services/oembed",["overflow.io/s/*","overflow.io/embed/*"]],["core.oz.com/oembed",["www.oz.com/*/video/*"]],["padlet.com/oembed/",["padlet.com/*"]],["api-v2.pandavideo.com.br/oembed",["*.tv.pandavideo.com.br/embed/?v=*","*.tv.pandavideo.com.br/*/playlist.m3u8","dashboard.pandavideo.com.br/#/videos/*"]],["www.pastery.net/oembed",["pastery.net/*","pastery.net/*","www.pastery.net/*","www.pastery.net/*"]],["peertube.tv/services/oembed",["peertube.tv/w/*"]],["piggy.to/oembed",["piggy.to/@*/*","piggy.to/view/*"]],["builder.pikasso.xyz/api/oembed",["*.builder.pikasso.xyz/embed/*"]],["beta.pingvp.com.kpnis.nl/p/oembed.php",[]],["tools.pinpoll.com/oembed",["tools.pinpoll.com/embed/*"]],["www.pinterest.com/oembed.json",["www.pinterest.com/*"]],["player.pitchhub.com/en/public/oembed",["player.pitchhub.com/en/public/player/*"]],["store.pixdor.com/oembed",["store.pixdor.com/place-marker-widget/*/show","store.pixdor.com/map/*/show"]],["app.plusdocs.com/oembed",["app.plusdocs.com/*/snapshots/*","app.plusdocs.com/*/pages/edit/*","app.plusdocs.com/*/pages/share/*"]],["api.podbean.com/v1/oembed",["*.podbean.com/e/*","*.podbean.com/e/*"]],["polldaddy.com/oembed/",["*.polldaddy.com/s/*","*.polldaddy.com/poll/*","*.polldaddy.com/ratings/*"]],["api.portfolium.com/oembed",["portfolium.com/entry/*"]],["prezi.com/v/oembed",["prezi.com/v/*","*.prezi.com/v/*"]],["qtpi.gg/fashion/oembed",["qtpi.gg/fashion/*"]],["web.quartr.com/api/oembed",["quartr.com/*","web.quartr.com/*"]],["www.quiz.biz/api/oembed",["www.quiz.biz/quizz-*.html"]],["www.quizz.biz/api/oembed",["www.quizz.biz/quizz-*.html"]],["oembed.radiopublic.com/oembed",["play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","*.radiopublic.com/*"]],["pub.raindrop.io/api/oembed",["raindrop.io/*","raindrop.io/*/*","raindrop.io/*/*/*","raindrop.io/*/*/*/*"]],["animatron.com/oembed",["www.rcvis.com/v/*","www.rcvis.com/visualize=*","www.rcvis.com/ve/*","www.rcvis.com/visualizeEmbedded=*"]],["www.reddit.com/oembed",["reddit.com/r/*/comments/*/*","www.reddit.com/r/*/comments/*/*"]],["redlof-medien.de/wp-json/oembed/1.0/embed",["redlof-medien.de/*","www.redlof-medien.de/*"]],["api.wexcreator.com/oembed/",["show.wexcreator.com/*","showroom.redlof-medien.de/*"]],["publisher.releasewire.com/oembed/",["rwire.com/*"]],["replit.com/data/oembed",["repl.it/@*/*","replit.com/@*/*"]],["www.reverbnation.com/oembed",["www.reverbnation.com/*","www.reverbnation.com/*/songs/*"]],["roomshare.jp/en/oembed.{format}",["roomshare.jp/post/*","roomshare.jp/en/post/*"]],["roosterteeth.com/oembed",["roosterteeth.com/*"]],["embed.runkit.com/oembed",["embed.runkit.com/*,","embed.runkit.com/*,"]],["octopus.saooti.com/oembed",["octopus.saooti.com/main/pub/podcast/*"]],["videos.sapo.pt/oembed",["videos.sapo.pt/*"]],["www.satcat.com/api/sats/oembed",["www.satcat.com/sats/*"]],["sbedit.net/oembed/",["sbedit.net/*"]],["getscenes.com/oembed",["getscenes.com/e/*","getscenes.com/event/*"]],["api.screen9.com/oembed",["console.screen9.com/*","*.screen9.tv/*"]],["api.screencast.com/external/oembed",["www.screencast.com/*"]],["www.screenr.com/api/oembed.{format}",["www.screenr.com/*/"]],["scribblemaps.com/api/services/oembed.{format}",["www.scribblemaps.com/maps/view/*","www.scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*"]],["www.scribd.com/services/oembed/",["www.scribd.com/doc/*"]],["embed.sendtonews.com/services/oembed",["embed.sendtonews.com/oembed/*"]],["shared-file-kappa.vercel.app/file/api/oembed",["shared-file-kappa.vercel.app/file/*"]],["shoudio.com/api/oembed",["shoudio.com/*","shoud.io/*"]],["api.getshow.io/oembed.{format}",["app.getshow.io/iframe/*","*.getshow.io/share/*"]],["showtheway.io/oembed",["showtheway.io/to/*"]],["simplecast.com/oembed",["simplecast.com/s/*"]],["onsizzle.com/oembed",["onsizzle.com/i/*"]],["sketchfab.com/oembed",["sketchfab.com/*models/*","sketchfab.com/*models/*","sketchfab.com/*/folders/*"]],["www.skoletube.dk/media/lasync/oembed/",["www.skoletube.dk/media/*","www.skoletube.dk/video/*","www.studietube.dk/media/*","www.studietube.dk/video/*"]],["www.slideshare.net/api/oembed/2",["www.slideshare.net/*/*","www.slideshare.net/*/*","fr.slideshare.net/*/*","fr.slideshare.net/*/*","de.slideshare.net/*/*","de.slideshare.net/*/*","es.slideshare.net/*/*","es.slideshare.net/*/*","pt.slideshare.net/*/*","pt.slideshare.net/*/*"]],["smashnotes.com/services/oembed",["smashnotes.com/p/*","smashnotes.com/p/*/e/*-smashnotes.com/p/*/e/*/s/*"]],["api.smugmug.com/services/oembed/",["*.smugmug.com/*","*.smugmug.com/*"]],["www.socialexplorer.com/services/oembed/",["www.socialexplorer.com/*/explore","www.socialexplorer.com/*/view","www.socialexplorer.com/*/edit","www.socialexplorer.com/*/embed"]],["soundcloud.com/oembed",["soundcloud.com/*","soundcloud.com/*","on.soundcloud.com/*","soundcloud.app.goog.gl/*"]],["speakerdeck.com/oembed.json",["speakerdeck.com/*/*","speakerdeck.com/*/*"]],["open.spotify.com/oembed",["open.spotify.com/*","spotify:*","spotify.link/*"]],["api.spotlightr.com/getOEmbed",["*.spotlightr.com/watch/*","*.spotlightr.com/publish/*","*.cdn.spotlightr.com/watch/*","*.cdn.spotlightr.com/publish/*"]],["api.spreaker.com/oembed",["*.spreaker.com/*","*.spreaker.com/*"]],["sproutvideo.com/oembed.{format}",["sproutvideo.com/videos/*","*.vids.io/videos/*"]],["api.spyke.social/embed/oembed",["spyke.social/p/*","spyke.social/u/*","spyke.social/g/*","spyke.social/c/*","spyke.social/p/*","spyke.social/u/*","spyke.social/g/*","spyke.social/c/*","www.spyke.social/p/*","www.spyke.social/u/*","www.spyke.social/g/*","www.spyke.social/c/*","www.spyke.social/p/*","www.spyke.social/u/*","www.spyke.social/g/*","www.spyke.social/c/*"]],["purl.stanford.edu/embed.{format}",["purl.stanford.edu/*"]],["api.streamable.com/oembed.json",["streamable.com/*","streamable.com/*"]],["streamio.com/api/v1/oembed",["s3m.io/*","23m.io/*"]],["subscribi.io/api/oembed",["subscribi.io/api/oembed*"]],["www.sudomemo.net/oembed",["www.sudomemo.net/watch/*","www.sudomemo.net/watch/*","flipnot.es/*","flipnot.es/*"]],["supercut.video/oembed",["supercut.video/share/*"]],["www.sutori.com/api/oembed",["www.sutori.com/story/*"]],["sway.com/api/v1.0/oembed",["sway.com/*","www.sway.com/*"]],["sway.office.com/api/v1.0/oembed",["sway.office.com/*"]],["69jr5v75rc.execute-api.eu-west-1.amazonaws.com/prod/v2/oembed",["share.synthesia.io/*"]],["techpostcast.com/oembed/",["techpostcast.com/headline-topic-programs/*"]],["www.ted.com/services/v1/oembed.{format}",["ted.com/talks/*","ted.com/talks/*","www.ted.com/talks/*"]],["hubspot-media-bridge.thedamconsultants.com/oembed/",["hubspot-media-bridge.thedamconsultants.com/*"]],["www.nytimes.com/svc/oembed/json/",["www.nytimes.com/svc/oembed","nytimes.com/*","*.nytimes.com/*"]],["theysaidso.com/extensions/oembed/",["theysaidso.com/image/*"]],["www.tickcounter.com/oembed",["www.tickcounter.com/widget/*","www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/clock/*","www.tickcounter.com/worldclock/*","www.tickcounter.com/widget/*","www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/clock/*","www.tickcounter.com/worldclock/*"]],["www.tiktok.com/oembed",["www.tiktok.com/*","www.tiktok.com/*/video/*"]],["tksn.me/api/oembed/",["tksn.me/*","*.tksn.me/*"]],["tonicaudio.com/oembed",["tonicaudio.com/take/*","tonicaudio.com/song/*","tnic.io/song/*","tnic.io/take/*"]],["widget.toornament.com/oembed",["www.toornament.com/tournaments/*/information","www.toornament.com/tournaments/*/registration/","www.toornament.com/tournaments/*/matches/schedule","www.toornament.com/tournaments/*/stages/*/"]],["www.topy.se/oembed/",["www.topy.se/image/*"]],["app-test.totango.com/oembed",["app-test.totango.com/*"]],["trackspace.upitup.com/oembed",["trackspace.upitup.com/*"]],["trinitymedia.ai/services/oembed",["trinitymedia.ai/player/*","trinitymedia.ai/player/*/*","trinitymedia.ai/player/*/*/*"]],["www.tumblr.com/oembed/1.0",["*.tumblr.com/post/*"]],["www.tuxx.be/services/oembed",["www.tuxx.be/*"]],["play.tvcf.co.kr/rest/oembed",["play.tvcf.co.kr/*","*.tvcf.co.kr/*"]],["twinmotion.unrealengine.com/oembed",["twinmotion.unrealengine.com/presentation/*","twinmotion.unrealengine.com/panorama/*"]],["publish.twitter.com/oembed",["twitter.com/*","twitter.com/*/status/*","*.twitter.com/*/status/*"]],["play.typecast.ai/oembed",["play.typecast.ai/s/*","play.typecast.ai/e/*","play.typecast.ai/*"]],["typlog.com/oembed",[]],["uapod.univ-antilles.fr/oembed",["uapod.univ-antilles.fr/video/*"]],["map.cam.ac.uk/oembed/",["map.cam.ac.uk/*"]],["mediatheque.univ-paris1.fr/oembed",["mediatheque.univ-paris1.fr/video/*"]],["pod.u-pec.fr/oembed",["pod.u-pec.fr/video/*"]],["www.ustream.tv/oembed",["*.ustream.tv/*","*.ustream.com/*"]],["api.veer.tv/oembed",["veer.tv/videos/*"]],["api.veervr.tv/oembed",["veervr.tv/videos/*"]],["www.vevo.com/oembed",["www.vevo.com/*","www.vevo.com/*"]],["videfit.com/oembed",["videfit.com/videos/*"]],["vidmount.com/oembed",["vidmount.com/*"]],["api.vidyard.com/dashboard/v1.1/oembed",["*.vidyard.com/*","*.vidyard.com/*","*.hubs.vidyard.com/*","*.hubs.vidyard.com/*"]],["vimeo.com/api/oembed.{format}",["vimeo.com/*","vimeo.com/album/*/video/*","vimeo.com/channels/*/*","vimeo.com/groups/*/videos/*","vimeo.com/ondemand/*/*","player.vimeo.com/video/*","vimeo.com/event/*/*"]],["play.viostream.com/oembed",["share.viostream.com/*"]],["www.viously.com/oembed",["www.viously.com/*/*"]],["vizdom.dev/api/v1/oembed",["vizdom.dev/link/*"]],["vlipsy.com/oembed",["vlipsy.com/*"]],["www.vlive.tv/oembed",["www.vlive.tv/video/*"]],["embed.vouchfor.com/v1/oembed",["*.vouchfor.com/*"]],["data.voxsnap.com/oembed",["article.voxsnap.com/*/*"]],["embed.wave.video/oembed",["watch.wave.video/*","embed.wave.video/*"]],["www.web3isgoinggreat.com/api/oembed",["www.web3isgoinggreat.com/?id=*","www.web3isgoinggreat.com/single/*","www.web3isgoinggreat.com/embed/*"]],["share.webcrumbs.org/",["share.webcrumbs.org/*","tools.webcrumbs.org/*","www.webcrumbs.org/*"]],["play.wecandeo.com/oembed/",["play.wecandeo.com/video/v/*"]],["whimsical.com/api/oembed",["whimsical.com/*"]],["fast.wistia.com/oembed.{format}",["fast.wistia.com/embed/iframe/*","fast.wistia.com/embed/playlists/*","*.wistia.com/medias/*"]],["app.wizer.me/api/oembed.{format}",["*.wizer.me/learn/*","*.wizer.me/preview/*"]],["wokwi.com/api/oembed",["wokwi.com/share/*"]],["www.wolframcloud.com/oembed",["*.wolframcloud.com/*"]],["public-api.wordpress.com/oembed/",["wordpress.com/*","wordpress.com/*","*.wordpress.com/*","*.wordpress.com/*","*.*.wordpress.com/*","*.*.wordpress.com/*","wp.me/*","wp.me/*"]],["publish.x.com/oembed",["x.com/*","x.com/*/status/*","*.x.com/*/status/*"]],["www.youtube.com/oembed",["*.youtube.com/watch*","*.youtube.com/v/*","youtu.be/*","*.youtube.com/playlist?list=*","youtube.com/playlist?list=*","*.youtube.com/shorts*","youtube.com/shorts*","*.youtube.com/embed/*","*.youtube.com/live*","youtube.com/live*"]],["www.yumpu.com/services/oembed",["www.yumpu.com/*/document/view/*/*"]],["app.zeplin.io/embed",["app.zeplin.io/project/*/screen/*","app.zeplin.io/project/*/screen/*/version/*","app.zeplin.io/project/*/styleguide/components?coid=*","app.zeplin.io/styleguide/*/components?coid=*"]],["app.zingsoft.com/oembed",["app.zingsoft.com/embed/*","app.zingsoft.com/view/*"]],["api.znipe.tv/v3/oembed/",["*.znipe.tv/*"]],["srv2.zoomable.ca/oembed",["srv2.zoomable.ca/viewer.php*"]]]`);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6UYtG","bpS8D"], "bpS8D", "parcelRequire55a5")

//# sourceMappingURL=index.361a74ef.js.map
