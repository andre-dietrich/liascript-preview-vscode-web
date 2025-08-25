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
})({"9yJLl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "88f127014c6c3031";
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

},{}],"3lJKr":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This has to be called after the DOM has been created. It appends two
 * div-container to the end of the DOM:
 *
 * 1. for putting and showing tooltips
 * 2. for injecting sandbox iframes if the tooltips has to be parsed
 */ parcelHelpers.export(exports, "initTooltip", ()=>initTooltip);
var _index = require("../embed/index");
var _previewLia = require("../preview-lia");
var _helper = require("../../helper");
var _html = require("./html");
/**
 * Tooltips are presented in one single div that is attached to the very end of
 * the DOM. This ID is used as the main unit to identify this element.
 */ const TOOLTIP_ID = "lia-tooltip";
/**
 * Currently links pointing to LiaScript-courses are identified by this regular
 * expression, whereby only the part after "/course/?..." is extracted and only
 * if it ends with ".md".
 *
 * TODO: URL-substitution as it is done internally by LiaScript has to be added
 */ const LIASCRIPT_PATTERN = /(?:https?:)(?:\/\/)liascript\.github\.io\/course\/\?(.+\.md)/i;
/**
 * All retrieved links are stored within this global variable. The key is
 * defined by the URL, whereby the body is a string that should replace the
 * innerHTML of the tooltip-container.
 */ var backup = Object();
/**
 * Main implementation of the Tooltip-webcomponent. Currently with support for
 * three types of pages:
 *
 * 1. pages with an oEmbed service
 * 2. LiaScript courses, pointing to the LiaScript-course website
 * 3. everything else requires to load and interpret the content by using the
 *    `iframe.ts` module
 *
 * It is added to the HTML-DOM by:
 *
 * ```html
 * <preview-link src="url" light="false">
 *    <a href="url">...</a>
 * </preview-link>
 * ```
 *
 * In most cases, the internal element will contain a link, however, the
 * doubling of `src` and `href` is required, since the internal element can
 * als be something else.
 * With the second attribute is it possible to change the light mode of this
 * web component.
 */ class PreviewLink extends HTMLElement {
    /**
   * URL of the page to be previewed
   */ sourceUrl = "";
    /**
   * once a tooltip has been created, it is locally preserved within this
   * member variable
   */ cache = null;
    /**
   * to prevent a site from being fetched multiple times accidentally, which
   * might happen on multiple hover actions
   */ isFetching = false;
    /**
   * This variable is used to prevent a tooltip from being loaded, if the user
   * clicks or long-presses on a tablet. Such that the link should be clicked.
   */ isClicked = false;
    /**
   * this marker is used to prevent a tooltip from loading, if the mouse has
   * left the link, but the loading/parsing is still in progress
   */ isActive = false;
    /**
   * defines weather the tooltip should be displayed in dark or in light-mode
   */ lightMode = true;
    constructor(){
        super();
    }
    /**
   * called when the webcomponent is attached to the DOM and becomes visible
   */ connectedCallback() {
        // the main URL, for which a tooltip has to be created
        this.sourceUrl = this.getAttribute("src") || "";
        // if such an URL exists
        if (this.sourceUrl) {
            // this makes urls more equal
            if (this.sourceUrl.endsWith("/")) this.sourceUrl = this.sourceUrl.slice(0, -1);
            // get the tooltip container
            this.container = document.getElementById(TOOLTIP_ID) || undefined;
            // the tooltip-container is required
            // to the first child additional events have to be associated
            if (this.container && this.firstChild) {
                // basic mouse events to cover hovering
                this.firstChild.addEventListener("mouseenter", this._onmouseenter);
                this.firstChild.addEventListener("mouseout", this._onmouseout);
                this.firstChild.addEventListener("click", this._onclick);
                // Accessibility events which are required for keyboard navigation
                this.firstChild.addEventListener("focus", this._onfocus);
                this.firstChild.addEventListener("focusout", this._onfocusout);
                this.firstChild.addEventListener("keyup", this._onescape);
            }
        }
    }
    /**
   * called when the element gets released from the DOM
   */ disconnectedCallback() {
        if (this.firstChild) {
            // delete all mouse hovering event-listeners
            this.firstChild.removeEventListener("mouseenter", this._onmouseenter);
            this.firstChild.removeEventListener("mouseout", this._onmouseout);
            this.firstChild.removeEventListener("click", this._onclick);
            // delete all keyboard related event-listeners
            this.firstChild.removeEventListener("focus", this._onfocus);
            this.firstChild.removeEventListener("focusout", this._onfocusout);
            this.firstChild.removeEventListener("keyup", this._onescape);
        }
    }
    /**
   * Handler for click-events is used to prevent a tooltip from being loaded,
   * if the user clicks onto the link.
   */ _onclick() {
        const parent = this.parentElement;
        parent.isActive = false;
        parent.isClicked = true;
    }
    /**
   * for web-accessibility reasons, handles the keyboard escape, which becomes
   * handy if tab is used for navigation
   *
   * @param event
   */ _onescape(event) {
        if (event.code === "Escape") {
            const parent = this.parentElement;
            // this is required to enforce closing the tooltip even if the mouse is
            // still hovering this element, such that it is hold alive by the main
            // hover-events instantiated within `initTooltip()`
            parent.setAttribute("data-active", "false");
            parent.deactivate();
        }
    }
    /**
   * handler for basic mouse hovering
   */ _onmouseenter() {
        // show, that there is some progress going on
        this.style.cursor = "progress";
        // activate the tooltip at the current mouse-position
        const boundingBox = this.getBoundingClientRect();
        this.parentElement.activate(boundingBox.left + boundingBox.width / 2, boundingBox.top + boundingBox.height / 2);
    }
    /**
   * this event handler is called, if the mouse is not hovering anymore.
   */ _onmouseout() {
        this.parentElement.deactivate();
    }
    /**
   * activate the tooltip if the current link received the focus
   *
   * @param _event - not required
   */ _onfocus(_event) {
        // in this case the center of the bounding box of the element in focus is
        // used as the marker for the activation
        const boundingBox = this.getBoundingClientRect();
        this.parentElement.activate(boundingBox.left + boundingBox.width / 2, boundingBox.top + boundingBox.height / 2);
    }
    /**
   * as the opposite to onfocus, this closed the tooltip, when the link looses
   * its focus
   */ _onfocusout() {
        const parent = this.parentElement;
        // without this, the deactivate function might not trigger on tablets
        // the "data-active" is only required for mouse manipulation
        if (parent.container) parent.container.setAttribute("data-active", "false");
        parent.deactivate();
    }
    /**
   * Helper method to calculate the ideal positioning of the tooltip on the
   * screen
   *
   * @param positionX
   * @param positionY
   */ activate(positionX, positionY) {
        if (this.container) {
            // mark the tooltip as activated
            this.isActive = true;
            if (this.isClicked) {
                this.isClicked = false;
                return;
            }
            // Calculate the tooltip positioning
            this.container.style.left = `${positionX - 425 * positionX / window.innerWidth}px`;
            if (positionY * 1.5 > window.innerHeight) {
                this.container.style.top = "";
                this.container.style.bottom = `${window.innerHeight - positionY + 10}px`;
            } else {
                this.container.style.top = `${positionY + 10}px`;
                this.container.style.bottom = "";
            }
            // Check if we already have cached tooltip data
            if (this.cache) this.show();
            else if (backup[this.sourceUrl]) {
                this.cache = backup[this.sourceUrl];
                this.show();
            } else if (!this.isFetching) {
                this.isFetching = true;
                let self = this;
                // Check if this is a link to a LiaScript course
                let liascript_url = this.sourceUrl.match(LIASCRIPT_PATTERN);
                if (liascript_url) _previewLia.fetch(liascript_url[1], function(url, meta) {
                    self.cache = toCard(self.sourceUrl, meta.title, meta.description, meta.logo, meta.logo_alt);
                    self.show();
                });
                else {
                    // Use the revised regex to detect Wikipedia links (which supports titles with parentheses)
                    const wikipediaRegex = /\/\/([a-z]+)\.wikipedia\.org\/wiki\/([^#?\s]+(?:\([^#?\s]*\)[^#?\s]*)*)/i;
                    const wikipediaMatch = this.sourceUrl.match(wikipediaRegex);
                    if (wikipediaMatch) {
                        let lang = wikipediaMatch[1];
                        let title = wikipediaMatch[2];
                        // Decode first to avoid double encoding (e.g. '%28' becomes '(')
                        try {
                            title = decodeURIComponent(title);
                        } catch (e) {
                            console.error("Error decoding title:", e);
                        }
                        // Re-encode the title for a proper API request
                        let wikiApiUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
                        window.fetch(wikiApiUrl, {
                            headers: {
                                Accept: "application/json"
                            }
                        }).then((response)=>{
                            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                            return response.json();
                        }).then((data)=>{
                            this.cache = toCard(this.sourceUrl, data.title, data.extract, data.thumbnail?.source, data.thumbnail?.caption);
                            this.show();
                        }).catch((error)=>{
                            console.error("Wikipedia API error:", error);
                            // Fallback: try using oEmbed or direct HTML parsing if the API fails
                            _index.extract(this.sourceUrl, {}).then((data)=>{
                                this.cache = toCard(this.sourceUrl, data.title, undefined, data.thumbnail_url);
                                this.show();
                            }).catch((_)=>{
                                fetch(this.sourceUrl, (function(doc) {
                                    this.parse(doc);
                                }).bind(this));
                            });
                        });
                    } else // For all other links, try the oEmbed service first
                    try {
                        _index.extract(this.sourceUrl, {}).then((data)=>{
                            this.cache = toCard(this.sourceUrl, data.title, undefined, data.thumbnail_url);
                            this.show();
                        }).catch((_)=>{
                            // If no oEmbed service exists, fetch and parse the full HTML
                            fetch(this.sourceUrl, (function(doc) {
                                this.parse(doc);
                            }).bind(this));
                        });
                    } catch (e) {}
                }
            }
        }
    }
    /**
   * Helper for deactivating the tooltip
   */ deactivate() {
        if (this.container && // this is false, when the mouse is above the tooltip
        this.container.getAttribute("data-active") === "false") {
            // this has to be set to false in order to prevent a later displayed
            // tooltip, due to some loading delay
            this.isActive = false;
            this.container.style.display = "none";
            this.container.style.zIndex = "-1000";
        }
    }
    /**
   * Load the doc-string into an iframe-sandbox and query it for the main
   * information.
   *
   * @param doc
   */ parse(html) {
        // if for some reason, there has already been a tooltip cached
        if (this.cache !== null) {
            this.show();
            return;
        }
        // run a local extractor to get all required values
        let data = _html.parse(this.sourceUrl, html);
        // for some reason this might be required to get images from the proxy
        // version, which might change the url
        if (typeof data.image == "string") {
            // this cleans up the image url, if it is behind the proxy, which
            // looks like this `https://proxy.../"realImageURL"`
            const url = data.image.match(/.*?%22(.*)\/%22/);
            if (url && url.length == 2) data.image = url[1];
        }
        // create a new tooltip
        this.cache = toCard(data.url, data.title, data.description, data.image, data.image_alt);
        // if there is no tooltip, the reference to the tooltip container gets
        // deleted to prevent it from loading an empty div
        if (this.cache === "") this.container = undefined;
        this.show() // show the tooltip
        ;
    // remove the iframe from the DOM, since it is not needed anymore
    }
    /**
   * display the tooltip
   */ show() {
        if (this.container && // tooltip container
        this.cache && // HTML string
        this.isActive // has not been deactivated so far
        ) {
            if (this.lightMode) {
                this.container.style.background = "white";
                this.container.style.boxShadow = "0 30px 90px -20px rgba(0, 0, 0, 0.3)";
            } else {
                this.container.style.background = "#202020";
                this.container.style.boxShadow = "0 30px 90px -20px rgba(120, 120, 120, 0.3)";
            }
            this.container.style.zIndex = "20000";
            this.container.style.display = "inline-block";
            this.container.innerHTML = this.cache;
        }
        // remove the progress cursor from the internal link and set it to default
        if (this.firstChild) this.firstChild.style.cursor = "";
    }
    // via this attribute it is possible to use the tooltip either in dark or
    // light-mode
    set light(value) {
        // redraw only if the light mode has changed
        if (this.lightMode !== value) {
            this.lightMode = value;
            this.show();
        }
    }
    get light() {
        return this.lightMode;
    }
}
/**
 * Generate and return an HTML-string for a tooltip, which is stored within the
 * `backup` variable:
 *
 * ```
 * +-------------+
 * |    image    |
 * |-------------|
 * | title       |
 * | description |
 * | url         |
 * +-------------+
 * ```
 *
 * @param url - link to be opened
 * @param title - of the page
 * @param description - excerpt of the content
 * @param image - associated with the page
 * @returns a HTML-string representation on success, otherwise an empty string
 */ function toCard(url, title, description, image, image_alt) {
    if (!url) return "";
    // if the starts with the internal proxy that is used, when CORS errors occur
    url = url.replace(_helper.PROXY, "");
    let card = "";
    if (image) try {
        if (!_helper.allowedProtocol(image)) // redefine the image url from relative to absolute
        image = new URL(image, url).toString();
        // add a possible alt attribute if exists
        image_alt = image_alt ? `alt="${image_alt}"` : "";
        // the light background is required for transparent images in dark mode
        card += `<img src="${image}" ${image_alt} style="background-color:white; margin-bottom: 1.5rem;">`;
    } catch (e) {}
    if (title) card += `<h4>${title}</h4>`;
    if (description) card += description;
    if (card != "") card += `<hr style="border: 0px; height:1px; background:#888;"/><a style="font-size:x-small; display:block" href="${url}" target="_blank">${url}</a>`;
    // backup the result globally, so that a second parsing will not be necessary
    backup[url] = card;
    return card;
}
function initTooltip() {
    // create the Tooltip element
    if (!document.getElementById(TOOLTIP_ID)) setTimeout(function() {
        const div = document.createElement("div");
        div.id = TOOLTIP_ID;
        // since LiaScript modals can have a z-Index larger than 10000
        div.style.zIndex = "-1000";
        div.style.width = "425px";
        //div.style.height = '400px '
        div.style.padding = "15px";
        div.style.background = "white";
        div.style.boxShadow = "0 30px 90px -20px rgba(0, 0, 0, 0.3)";
        div.style.position = "fixed";
        div.style.display = "none";
        div.style.maxHeight = "480px";
        div.style.overflow = "auto";
        // this additional marker is used to not close the tooltip, if the user
        // moves the mouse onto the tooltip, this way, the original link triggers
        // a closing, but this is prevented by this second marker
        div.setAttribute("data-active", "true");
        // these two listeners are required when the mouse hovers the tooltip
        // to stay visible or close it ...
        div.addEventListener("mouseenter", ()=>{
            div.style.display = "inline-block";
            div.style.zIndex = "20000";
            div.setAttribute("data-active", "true");
        });
        div.addEventListener("mouseleave", ()=>{
            div.style.display = "none";
            div.style.zIndex = "-1000";
            div.setAttribute("data-active", "false");
        });
        document.body.appendChild(div);
    }, 0);
}
/**
 * Fetch the HTML-text for a certain website. This might happen two times,
 * if the target website has CORS disabled. The first try is the normal
 * fetch, the second one uses a proxy to get the HTML-string
 *
 * @param url - of the website
 * @param callback - to be called on success
 * @param trial - by default 0, the proxy-trial is 1
 */ function fetch(url, callback, trial = 0) {
    // shortcut for directly use the proxy
    if (trial == 0 && proxy(url)) {
        fetch(_helper.PROXY + url, callback, 1);
        return;
    }
    let http = new XMLHttpRequest();
    http.open("GET", url, true) // async fetch
    ;
    http.onload = function(_e) {
        // everything went fine
        if (http.readyState === 4 && http.status === 200) try {
            let html = http.responseText;
            try {
                // get the real HTML file
                html = JSON.parse(html).contents;
            } catch (e) {}
            callback(html);
        } catch (e) {
            console.warn("fetching", e);
        }
    };
    http.onerror = function(_e) {
        if (trial === 0) // try to fetch the website with a proxy url
        fetch(_helper.PROXY + url, callback, 1);
    };
    // start fetching
    http.send();
}
/**
 * helper which checks the url against different servers, which require a
 * proxy and do not allow direct calling.
 *
 * - wikipedia
 */ function proxy(url) {
    if (url.search(/wikipedia\.org/gi)) return true;
    return false;
}
customElements.define("preview-link", PreviewLink);

},{"../embed/index":"bpS8D","../preview-lia":"4vhwS","../../helper":"7hqDz","./html":"4ieyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ieyK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
var _helper = require("../../helper");
const HREF = /href=[\"'](.*?)[\"']/gi;
const SRC = /src=[\"'](.*?)[\"']/gi;
const ALT = /alt=[\"'](.*?)[\"']/gi;
const H1 = /<h1.*?>(.*?)<\/h1>/gi;
const H2 = /<h2.*?>(.*?)<\/h2>/gi;
const TITLE = /<title>(.*?)<\/title>/gi;
function parse(url, html) {
    const image = parseImage(html);
    const base = new URL(parseBase(html) || url);
    return {
        url: url,
        title: parseTitle(html),
        description: parseDescription(base, html),
        image: image.url,
        image_alt: image.alt
    };
}
function parseBase(html) {
    return firstMatch(/<base.*?href\s*=\s*[\"'](.*?)[\"']>/gi, html);
}
function parseImage(html) {
    const ogImage = parseContent("og:image", html);
    if (ogImage) return {
        url: ogImage,
        alt: parseContent("og:image:alt", html)
    };
    const imgRelLink = firstMatch(/<link.*?rel=[\"']image_src[\"'].*?>/gi, html);
    if (imgRelLink) return {
        url: firstMatch(HREF, imgRelLink)
    };
    const twitterImage = parseContent("twitter:image", html);
    if (twitterImage) return {
        url: twitterImage,
        alt: parseContent("twitter:image:alt", html)
    };
    const image = firstMatch(/<img .*?>/gi, html);
    if (image) return {
        url: firstMatch(SRC, image),
        alt: firstMatch(ALT, image)
    };
    return {};
}
function parseTitle(html) {
    const ogTitle = parseContent("og:title", html);
    if (ogTitle && ogTitle.length > 0) return ogTitle;
    const twitterTitle = parseContent("twitter:title", html);
    if (twitterTitle && twitterTitle.length > 0) return twitterTitle;
    const docTitle = firstMatch(TITLE, html);
    if (docTitle && docTitle.length > 0) return docTitle;
    const h1 = firstMatch(H1, html);
    if (h1 && h1.length > 0) return h1;
    const h2 = firstMatch(H2, html);
    if (h2 && h2.length > 0) return h2;
}
function parseDescription(url, html) {
    const ogDescription = parseContent("og:description", html);
    if (ogDescription && ogDescription.length > 0) return ogDescription;
    const twitterDescription = parseContent("twitter:description", html);
    if (twitterDescription && twitterDescription.length > 0) return twitterDescription;
    const metaDescription = firstMatch(/<meta.*?name=[\"']description[\"'].*?>/gi, html);
    if (metaDescription) {
        const description = firstMatch(/content=[\"'](.*?)[\"']/gi, metaDescription);
        if (description && description.length > 0) return description;
    }
    let p = firstMatch(/<p>([\s\S]+?)<\/p>/gi, html);
    if (p) {
        p = p.replace(/(href|src)\s*=\s*[\"'].*?[\"']/g, function(e) {
            return baseHREF(url, e);
        });
        return p;
    }
}
/**
 * **private helper:** to run regular expression onto a single string, to speed
 * up the process, only the first match is returned
 *
 * @param str - to parse
 * @param pattern - to match
 * @returns the first match as a string or undefined
 */ function firstMatch(pattern, str) {
    const match = str.matchAll(pattern).next();
    return match.value ? match.value[match.value.length - 1] : undefined;
}
function parseContent(property, html) {
    const meta = firstMatch(new RegExp(`<meta[^>]+?property=[\"']${property}[\"'][^>]*?>`, "gi"), html);
    if (meta) return firstMatch(/content=[\"'](.*?)[\"']/gi, meta);
}
function baseHREF(url, match) {
    const pos = match.search(/[\"']/);
    if (match.startsWith("href")) match += ' target="blank_"';
    const begin = match.slice(0, pos + 1);
    const end = match.slice(pos + 1);
    if (_helper.allowedProtocol(begin)) return match;
    else if (end.startsWith("//")) return match;
    else if (end.startsWith("/")) return begin + url.origin + end;
    else if (end.startsWith("#")) return begin + url.href + end;
    return begin + url.origin + "/" + end;
}

},{"../../helper":"7hqDz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9yJLl","3lJKr"], "3lJKr", "parcelRequire55a5")

//# sourceMappingURL=index.4c6c3031.js.map
