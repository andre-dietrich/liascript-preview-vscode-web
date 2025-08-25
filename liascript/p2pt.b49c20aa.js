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
})({"imvlr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "72e9a0e8b49c20aa";
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

},{}],"ladtO":[function(require,module,exports) {
/**
 * Peer 2 Peer WebRTC connections with WebTorrent Trackers as signalling server
 * Copyright Subin Siby <mail@subinsb.com>, 2020
 * Licensed under MIT
 */ var Buffer = require("dd178a00abe08213").Buffer;
const WebSocketTracker = require("d571b04582e5440f");
const randombytes = require("9c203dca44eec38f");
const EventEmitter = require("e3ca52fbaac4cc19");
const sha1 = require("dfa80659e5e4f5e9");
const debug = require("f03423950fd7f106")("p2pt");
/**
 * This character would be prepended to easily identify JSON msgs
 */ const JSON_MESSAGE_IDENTIFIER = "^";
/**
 * WebRTC data channel limit beyond which data is split into chunks
 * Chose 16KB considering Chromium
 * https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels#Concerns_with_large_messages
 */ const MAX_MESSAGE_LENGTH = 16000;
class P2PT extends EventEmitter {
    /**
   *
   * @param array announceURLs List of announce tracker URLs
   * @param string identifierString Identifier used to discover peers in the network
   */ constructor(announceURLs = [], identifierString = ""){
        super();
        this.announceURLs = announceURLs;
        this.trackers = {};
        this.peers = {};
        this.msgChunks = {};
        this.responseWaiting = {};
        if (identifierString) this.setIdentifier(identifierString);
        this._peerIdBuffer = randombytes(20);
        this._peerId = this._peerIdBuffer.toString("hex");
        this._peerIdBinary = this._peerIdBuffer.toString("binary");
        debug("my peer id: " + this._peerId);
    }
    /**
   * Set the identifier string used to discover peers in the network
   * @param string identifierString
   */ setIdentifier(identifierString) {
        this.identifierString = identifierString;
        this.infoHash = sha1.sync(identifierString).toLowerCase();
        this._infoHashBuffer = Buffer.from(this.infoHash, "hex");
        this._infoHashBinary = this._infoHashBuffer.toString("binary");
    }
    /**
   * Connect to network and start discovering peers
   */ start() {
        this.on("peer", (peer)=>{
            let newpeer = false;
            if (!this.peers[peer.id]) {
                newpeer = true;
                this.peers[peer.id] = {};
                this.responseWaiting[peer.id] = {};
            }
            peer.on("connect", ()=>{
                /**
         * Multiple data channels to one peer is possible
         * The `peer` object actually refers to a peer with a data channel. Even though it may have same `id` (peerID) property, the data channel will be different. Different trackers giving the same "peer" will give the `peer` object with different channels.
         * We will store all channels as backups in case any one of them fails
         * A peer is removed if all data channels become unavailable
         */ this.peers[peer.id][peer.channelName] = peer;
                if (newpeer) this.emit("peerconnect", peer);
            });
            peer.on("data", (data)=>{
                this.emit("data", peer, data);
                data = data.toString();
                debug("got a message from " + peer.id);
                if (data[0] === JSON_MESSAGE_IDENTIFIER) try {
                    data = JSON.parse(data.slice(1));
                    // A respond function
                    peer.respond = this._peerRespond(peer, data.id);
                    let msg = this._chunkHandler(data);
                    // msg fully retrieved
                    if (msg !== false) {
                        if (data.o) msg = JSON.parse(msg);
                        /**
               * If there's someone waiting for a response, call them
               */ if (this.responseWaiting[peer.id][data.id]) {
                            this.responseWaiting[peer.id][data.id]([
                                peer,
                                msg
                            ]);
                            delete this.responseWaiting[peer.id][data.id];
                        } else this.emit("msg", peer, msg);
                        this._destroyChunks(data.id);
                    }
                } catch (e) {
                    console.log(e);
                }
            });
            peer.on("error", (err)=>{
                this._removePeer(peer);
                debug("Error in connection : " + err);
            });
            peer.on("close", ()=>{
                this._removePeer(peer);
                debug("Connection closed with " + peer.id);
            });
        });
        // Tracker responded to the announce request
        this.on("update", (response)=>{
            const tracker = this.trackers[this.announceURLs.indexOf(response.announce)];
            this.emit("trackerconnect", tracker, this.getTrackerStats());
        });
        // Errors in tracker connection
        this.on("warning", (err)=>{
            this.emit("trackerwarning", err, this.getTrackerStats());
        });
        this._fetchPeers();
    }
    /**
   * Add a tracker
   * @param string announceURL Tracker Announce URL
   */ addTracker(announceURL) {
        if (this.announceURLs.indexOf(announceURL) !== -1) throw new Error("Tracker already added");
        const key = this.announceURLs.push(announceURL);
        this.trackers[key] = new WebSocketTracker(this, announceURL);
        this.trackers[key].announce(this._defaultAnnounceOpts());
    }
    /**
   * Remove a tracker without destroying peers
   */ removeTracker(announceURL) {
        const key = this.announceURLs.indexOf(announceURL);
        if (key === -1) throw new Error("Tracker does not exist");
        // hack to not destroy peers
        this.trackers[key].peers = [];
        this.trackers[key].destroy();
        delete this.trackers[key];
        delete this.announceURLs[key];
    }
    /**
   * Remove a peer from the list if all channels are closed
   * @param integer id Peer ID
   */ _removePeer(peer) {
        if (!this.peers[peer.id]) return false;
        delete this.peers[peer.id][peer.channelName];
        // All data channels are gone. Peer lost
        if (Object.keys(this.peers[peer.id]).length === 0) {
            this.emit("peerclose", peer);
            delete this.responseWaiting[peer.id];
            delete this.peers[peer.id];
        }
    }
    /**
   * Send a msg and get response for it
   * @param Peer peer simple-peer object to send msg to
   * @param string msg Message to send
   * @param integer msgID ID of message if it's a response to a previous message
   */ send(peer, msg, msgID = "") {
        return new Promise((resolve, reject)=>{
            const data = {
                id: msgID !== "" ? msgID : Math.floor(Math.random() * 100000 + 100000),
                msg
            };
            if (typeof msg === "object") {
                data.msg = JSON.stringify(msg);
                data.o = 1 // indicating object
                ;
            }
            try {
                /**
         * Maybe peer channel is closed, so use a different channel if available
         * Array should atleast have one channel, otherwise peer connection is closed
         */ if (!peer.connected) for(const index in this.peers[peer.id]){
                    peer = this.peers[peer.id][index];
                    if (peer.connected) break;
                }
                if (!this.responseWaiting[peer.id]) this.responseWaiting[peer.id] = {};
                this.responseWaiting[peer.id][data.id] = resolve;
            } catch (e) {
                return reject(Error("Connection to peer closed" + e));
            }
            let chunks = 0;
            let remaining = "";
            while(data.msg.length > 0){
                data.c = chunks;
                remaining = data.msg.slice(MAX_MESSAGE_LENGTH);
                data.msg = data.msg.slice(0, MAX_MESSAGE_LENGTH);
                if (!remaining) data.last = true;
                peer.send(JSON_MESSAGE_IDENTIFIER + JSON.stringify(data));
                data.msg = remaining;
                chunks++;
            }
            debug("sent a message to " + peer.id);
        });
    }
    /**
   * Request more peers
   */ requestMorePeers() {
        return new Promise((resolve)=>{
            for(const key in this.trackers)this.trackers[key].announce(this._defaultAnnounceOpts());
            resolve(this.peers);
        });
    }
    /**
   * Get basic stats about tracker connections
   */ getTrackerStats() {
        let connectedCount = 0;
        for(const key in this.trackers)if (this.trackers[key].socket && this.trackers[key].socket.connected) connectedCount++;
        return {
            connected: connectedCount,
            total: this.announceURLs.length
        };
    }
    /**
   * Destroy object
   */ destroy() {
        let key;
        for(key in this.peers)for(const key2 in this.peers[key])this.peers[key][key2].destroy();
        for(key in this.trackers)this.trackers[key].destroy();
    }
    /**
   * A custom function binded on Peer object to easily respond back to message
   * @param Peer peer Peer to send msg to
   * @param integer msgID Message ID
   */ _peerRespond(peer, msgID) {
        return (msg)=>{
            return this.send(peer, msg, msgID);
        };
    }
    /**
   * Handle msg chunks. Returns false until the last chunk is received. Finally returns the entire msg
   * @param object data
   */ _chunkHandler(data) {
        if (!this.msgChunks[data.id]) this.msgChunks[data.id] = [];
        this.msgChunks[data.id][data.c] = data.msg;
        if (data.last) {
            const completeMsg = this.msgChunks[data.id].join("");
            return completeMsg;
        } else return false;
    }
    /**
   * Remove all stored chunks of a particular message
   * @param integer msgID Message ID
   */ _destroyChunks(msgID) {
        delete this.msgChunks[msgID];
    }
    /**
   * Default announce options
   * @param object opts Options
   */ _defaultAnnounceOpts(opts = {}) {
        if (opts.numwant == null) opts.numwant = 50;
        if (opts.uploaded == null) opts.uploaded = 0;
        if (opts.downloaded == null) opts.downloaded = 0;
        return opts;
    }
    /**
   * Initialize trackers and fetch peers
   */ _fetchPeers() {
        for(const key in this.announceURLs){
            this.trackers[key] = new WebSocketTracker(this, this.announceURLs[key]);
            this.trackers[key].announce(this._defaultAnnounceOpts());
        }
    }
}
module.exports = P2PT;

},{"dd178a00abe08213":"fCgem","d571b04582e5440f":"jd3DG","9c203dca44eec38f":"8hjhE","e3ca52fbaac4cc19":"1VQLm","dfa80659e5e4f5e9":"e4Bgd","f03423950fd7f106":"l0oUb"}],"jd3DG":[function(require,module,exports) {
const clone = require("84587790063d0ee2");
const debug = require("863e25f3434775cb")("bittorrent-tracker:websocket-tracker");
const Peer = require("6f891002d3788f0");
const randombytes = require("8b80fb50ff5d7fea");
const Socket = require("35a4937f93142a10");
const Socks = require("dd5b762aec285137");
const common = require("f1826e8c9867e893");
const Tracker = require("55b41274d0715a53");
// Use a socket pool, so tracker clients share WebSocket objects for the same server.
// In practice, WebSockets are pretty slow to establish, so this gives a nice performance
// boost, and saves browser resources.
const socketPool = {};
const RECONNECT_MINIMUM = 10000;
const RECONNECT_MAXIMUM = 3600000;
const RECONNECT_VARIANCE = 300000;
const OFFER_TIMEOUT = 50000;
class WebSocketTracker extends Tracker {
    constructor(client, announceUrl){
        super(client, announceUrl);
        debug("new websocket tracker %s", announceUrl);
        this.peers = {} // peers (offer id -> peer)
        ;
        this.socket = null;
        this.reconnecting = false;
        this.retries = 0;
        this.reconnectTimer = null;
        // Simple boolean flag to track whether the socket has received data from
        // the websocket server since the last time socket.send() was called.
        this.expectingResponse = false;
        this._openSocket();
    }
    announce(opts) {
        if (this.destroyed || this.reconnecting) return;
        if (!this.socket.connected) {
            this.socket.once("connect", ()=>{
                this.announce(opts);
            });
            return;
        }
        const params = Object.assign({}, opts, {
            action: "announce",
            info_hash: this.client._infoHashBinary,
            peer_id: this.client._peerIdBinary
        });
        if (this._trackerId) params.trackerid = this._trackerId;
        if (opts.event === "stopped" || opts.event === "completed") // Don't include offers with 'stopped' or 'completed' event
        this._send(params);
        else {
            // Limit the number of offers that are generated, since it can be slow
            const numwant = Math.min(opts.numwant, 5);
            this._generateOffers(numwant, (offers)=>{
                params.numwant = numwant;
                params.offers = offers;
                this._send(params);
            });
        }
    }
    scrape(opts) {
        if (this.destroyed || this.reconnecting) return;
        if (!this.socket.connected) {
            this.socket.once("connect", ()=>{
                this.scrape(opts);
            });
            return;
        }
        const infoHashes = Array.isArray(opts.infoHash) && opts.infoHash.length > 0 ? opts.infoHash.map((infoHash)=>infoHash.toString("binary")) : opts.infoHash && opts.infoHash.toString("binary") || this.client._infoHashBinary;
        const params = {
            action: "scrape",
            info_hash: infoHashes
        };
        this._send(params);
    }
    destroy(cb = noop) {
        if (this.destroyed) return cb(null);
        this.destroyed = true;
        clearInterval(this.interval);
        clearTimeout(this.reconnectTimer);
        // Destroy peers
        for(const peerId in this.peers){
            const peer = this.peers[peerId];
            clearTimeout(peer.trackerTimeout);
            peer.destroy();
        }
        this.peers = null;
        if (this.socket) {
            this.socket.removeListener("connect", this._onSocketConnectBound);
            this.socket.removeListener("data", this._onSocketDataBound);
            this.socket.removeListener("close", this._onSocketCloseBound);
            this.socket.removeListener("error", this._onSocketErrorBound);
            this.socket = null;
        }
        this._onSocketConnectBound = null;
        this._onSocketErrorBound = null;
        this._onSocketDataBound = null;
        this._onSocketCloseBound = null;
        if (socketPool[this.announceUrl]) socketPool[this.announceUrl].consumers -= 1;
        // Other instances are using the socket, so there's nothing left to do here
        if (socketPool[this.announceUrl].consumers > 0) return cb();
        let socket = socketPool[this.announceUrl];
        delete socketPool[this.announceUrl];
        socket.on("error", noop) // ignore all future errors
        ;
        socket.once("close", cb);
        let timeout;
        // If there is no data response expected, destroy immediately.
        if (!this.expectingResponse) return destroyCleanup();
        // Otherwise, wait a short time for potential responses to come in from the
        // server, then force close the socket.
        timeout = setTimeout(destroyCleanup, common.DESTROY_TIMEOUT);
        // But, if a response comes from the server before the timeout fires, do cleanup
        // right away.
        socket.once("data", destroyCleanup);
        function destroyCleanup() {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            socket.removeListener("data", destroyCleanup);
            socket.destroy();
            socket = null;
        }
    }
    _openSocket() {
        this.destroyed = false;
        if (!this.peers) this.peers = {};
        this._onSocketConnectBound = ()=>{
            this._onSocketConnect();
        };
        this._onSocketErrorBound = (err)=>{
            this._onSocketError(err);
        };
        this._onSocketDataBound = (data)=>{
            this._onSocketData(data);
        };
        this._onSocketCloseBound = ()=>{
            this._onSocketClose();
        };
        this.socket = socketPool[this.announceUrl];
        if (this.socket) {
            socketPool[this.announceUrl].consumers += 1;
            if (this.socket.connected) this._onSocketConnectBound();
        } else {
            const parsedUrl = new URL(this.announceUrl);
            let agent;
            if (this.client._proxyOpts) {
                agent = parsedUrl.protocol === "wss:" ? this.client._proxyOpts.httpsAgent : this.client._proxyOpts.httpAgent;
                if (!agent && this.client._proxyOpts.socksProxy) agent = new Socks.Agent(clone(this.client._proxyOpts.socksProxy), parsedUrl.protocol === "wss:");
            }
            this.socket = socketPool[this.announceUrl] = new Socket({
                url: this.announceUrl,
                agent
            });
            this.socket.consumers = 1;
            this.socket.once("connect", this._onSocketConnectBound);
        }
        this.socket.on("data", this._onSocketDataBound);
        this.socket.once("close", this._onSocketCloseBound);
        this.socket.once("error", this._onSocketErrorBound);
    }
    _onSocketConnect() {
        if (this.destroyed) return;
        if (this.reconnecting) {
            this.reconnecting = false;
            this.retries = 0;
            this.announce(this.client._defaultAnnounceOpts());
        }
    }
    _onSocketData(data) {
        if (this.destroyed) return;
        this.expectingResponse = false;
        try {
            data = JSON.parse(data);
        } catch (err) {
            this.client.emit("warning", new Error("Invalid tracker response"));
            return;
        }
        if (data.action === "announce") this._onAnnounceResponse(data);
        else if (data.action === "scrape") this._onScrapeResponse(data);
        else this._onSocketError(new Error(`invalid action in WS response: ${data.action}`));
    }
    _onAnnounceResponse(data) {
        if (data.info_hash !== this.client._infoHashBinary) {
            debug("ignoring websocket data from %s for %s (looking for %s: reused socket)", this.announceUrl, common.binaryToHex(data.info_hash), this.client.infoHash);
            return;
        }
        if (data.peer_id && data.peer_id === this.client._peerIdBinary) // ignore offers/answers from this client
        return;
        debug("received %s from %s for %s", JSON.stringify(data), this.announceUrl, this.client.infoHash);
        const failure = data["failure reason"];
        if (failure) return this.client.emit("warning", new Error(failure));
        const warning = data["warning message"];
        if (warning) this.client.emit("warning", new Error(warning));
        const interval = data.interval || data["min interval"];
        if (interval) this.setInterval(interval * 1000);
        const trackerId = data["tracker id"];
        if (trackerId) // If absent, do not discard previous trackerId value
        this._trackerId = trackerId;
        if (data.complete != null) {
            const response = Object.assign({}, data, {
                announce: this.announceUrl,
                infoHash: common.binaryToHex(data.info_hash)
            });
            this.client.emit("update", response);
        }
        let peer;
        if (data.offer && data.peer_id) {
            debug("creating peer (from remote offer)");
            peer = this._createPeer();
            peer.id = common.binaryToHex(data.peer_id);
            peer.once("signal", (answer)=>{
                const params = {
                    action: "announce",
                    info_hash: this.client._infoHashBinary,
                    peer_id: this.client._peerIdBinary,
                    to_peer_id: data.peer_id,
                    answer,
                    offer_id: data.offer_id
                };
                if (this._trackerId) params.trackerid = this._trackerId;
                this._send(params);
            });
            this.client.emit("peer", peer);
            peer.signal(data.offer);
        }
        if (data.answer && data.peer_id) {
            const offerId = common.binaryToHex(data.offer_id);
            peer = this.peers[offerId];
            if (peer) {
                peer.id = common.binaryToHex(data.peer_id);
                this.client.emit("peer", peer);
                peer.signal(data.answer);
                clearTimeout(peer.trackerTimeout);
                peer.trackerTimeout = null;
                delete this.peers[offerId];
            } else debug(`got unexpected answer: ${JSON.stringify(data.answer)}`);
        }
    }
    _onScrapeResponse(data) {
        data = data.files || {};
        const keys = Object.keys(data);
        if (keys.length === 0) {
            this.client.emit("warning", new Error("invalid scrape response"));
            return;
        }
        keys.forEach((infoHash)=>{
            // TODO: optionally handle data.flags.min_request_interval
            // (separate from announce interval)
            const response = Object.assign(data[infoHash], {
                announce: this.announceUrl,
                infoHash: common.binaryToHex(infoHash)
            });
            this.client.emit("scrape", response);
        });
    }
    _onSocketClose() {
        if (this.destroyed) return;
        this.destroy();
        this._startReconnectTimer();
    }
    _onSocketError(err) {
        if (this.destroyed) return;
        this.destroy();
        // errors will often happen if a tracker is offline, so don't treat it as fatal
        this.client.emit("warning", err);
        this._startReconnectTimer();
    }
    _startReconnectTimer() {
        const ms = Math.floor(Math.random() * RECONNECT_VARIANCE) + Math.min(Math.pow(2, this.retries) * RECONNECT_MINIMUM, RECONNECT_MAXIMUM);
        this.reconnecting = true;
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = setTimeout(()=>{
            this.retries++;
            this._openSocket();
        }, ms);
        if (this.reconnectTimer.unref) this.reconnectTimer.unref();
        debug("reconnecting socket in %s ms", ms);
    }
    _send(params) {
        if (this.destroyed) return;
        this.expectingResponse = true;
        const message = JSON.stringify(params);
        debug("send %s", message);
        this.socket.send(message);
    }
    _generateOffers(numwant, cb) {
        const self = this;
        const offers = [];
        debug("generating %s offers", numwant);
        for(let i = 0; i < numwant; ++i)generateOffer();
        checkDone();
        function generateOffer() {
            const offerId = randombytes(20).toString("hex");
            debug("creating peer (from _generateOffers)");
            const peer = self.peers[offerId] = self._createPeer({
                initiator: true
            });
            peer.once("signal", (offer)=>{
                offers.push({
                    offer,
                    offer_id: common.hexToBinary(offerId)
                });
                checkDone();
            });
            peer.trackerTimeout = setTimeout(()=>{
                debug("tracker timeout: destroying peer");
                peer.trackerTimeout = null;
                delete self.peers[offerId];
                peer.destroy();
            }, OFFER_TIMEOUT);
            if (peer.trackerTimeout.unref) peer.trackerTimeout.unref();
        }
        function checkDone() {
            if (offers.length === numwant) {
                debug("generated %s offers", numwant);
                cb(offers);
            }
        }
    }
    _createPeer(opts) {
        const self = this;
        opts = Object.assign({
            trickle: false,
            config: self.client._rtcConfig,
            wrtc: self.client._wrtc
        }, opts);
        const peer = new Peer(opts);
        peer.once("error", onError);
        peer.once("connect", onConnect);
        return peer;
        // Handle peer 'error' events that are fired *before* the peer is emitted in
        // a 'peer' event.
        function onError(err) {
            self.client.emit("warning", new Error(`Connection error: ${err.message}`));
            peer.destroy();
        }
        // Once the peer is emitted in a 'peer' event, then it's the consumer's
        // responsibility to listen for errors, so the listeners are removed here.
        function onConnect() {
            peer.removeListener("error", onError);
            peer.removeListener("connect", onConnect);
        }
    }
}
WebSocketTracker.prototype.DEFAULT_ANNOUNCE_INTERVAL = 30000 // 30 seconds
;
// Normally this shouldn't be accessed but is occasionally useful
WebSocketTracker._socketPool = socketPool;
function noop() {}
module.exports = WebSocketTracker;

},{"84587790063d0ee2":"02d7F","863e25f3434775cb":"l0oUb","6f891002d3788f0":"bngOt","8b80fb50ff5d7fea":"8hjhE","35a4937f93142a10":"5a7A3","dd5b762aec285137":"jhUEF","f1826e8c9867e893":"9IcaR","55b41274d0715a53":"4YnTg"}],"02d7F":[function(require,module,exports) {
var Buffer = require("1a820bb46071bff7").Buffer;
var clone = function() {
    "use strict";
    function _instanceof(obj, type) {
        return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
        nativeMap = Map;
    } catch (_) {
        // maybe a reference error because no `Map`. Give it a dummy value that no
        // value will ever be an instanceof.
        nativeMap = function() {};
    }
    var nativeSet;
    try {
        nativeSet = Set;
    } catch (_) {
        nativeSet = function() {};
    }
    var nativePromise;
    try {
        nativePromise = Promise;
    } catch (_) {
        nativePromise = function() {};
    }
    /**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/ function clone(parent, circular, depth, prototype, includeNonEnumerable) {
        if (typeof circular === "object") {
            depth = circular.depth;
            prototype = circular.prototype;
            includeNonEnumerable = circular.includeNonEnumerable;
            circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != "undefined";
        if (typeof circular == "undefined") circular = true;
        if (typeof depth == "undefined") depth = Infinity;
        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
            // cloning null always returns null
            if (parent === null) return null;
            if (depth === 0) return parent;
            var child;
            var proto;
            if (typeof parent != "object") return parent;
            if (_instanceof(parent, nativeMap)) child = new nativeMap();
            else if (_instanceof(parent, nativeSet)) child = new nativeSet();
            else if (_instanceof(parent, nativePromise)) child = new nativePromise(function(resolve, reject) {
                parent.then(function(value) {
                    resolve(_clone(value, depth - 1));
                }, function(err) {
                    reject(_clone(err, depth - 1));
                });
            });
            else if (clone.__isArray(parent)) child = [];
            else if (clone.__isRegExp(parent)) {
                child = new RegExp(parent.source, __getRegExpFlags(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (clone.__isDate(parent)) child = new Date(parent.getTime());
            else if (useBuffer && Buffer.isBuffer(parent)) {
                if (Buffer.allocUnsafe) // Node.js >= 4.5.0
                child = Buffer.allocUnsafe(parent.length);
                else // Older Node.js versions
                child = new Buffer(parent.length);
                parent.copy(child);
                return child;
            } else if (_instanceof(parent, Error)) child = Object.create(parent);
            else if (typeof prototype == "undefined") {
                proto = Object.getPrototypeOf(parent);
                child = Object.create(proto);
            } else {
                child = Object.create(prototype);
                proto = prototype;
            }
            if (circular) {
                var index = allParents.indexOf(parent);
                if (index != -1) return allChildren[index];
                allParents.push(parent);
                allChildren.push(child);
            }
            if (_instanceof(parent, nativeMap)) parent.forEach(function(value, key) {
                var keyChild = _clone(key, depth - 1);
                var valueChild = _clone(value, depth - 1);
                child.set(keyChild, valueChild);
            });
            if (_instanceof(parent, nativeSet)) parent.forEach(function(value) {
                var entryChild = _clone(value, depth - 1);
                child.add(entryChild);
            });
            for(var i in parent){
                var attrs;
                if (proto) attrs = Object.getOwnPropertyDescriptor(proto, i);
                if (attrs && attrs.set == null) continue;
                child[i] = _clone(parent[i], depth - 1);
            }
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(parent);
                for(var i = 0; i < symbols.length; i++){
                    // Don't need to worry about cloning a symbol because it is a primitive,
                    // like a number or string.
                    var symbol = symbols[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) continue;
                    child[symbol] = _clone(parent[symbol], depth - 1);
                    if (!descriptor.enumerable) Object.defineProperty(child, symbol, {
                        enumerable: false
                    });
                }
            }
            if (includeNonEnumerable) {
                var allPropertyNames = Object.getOwnPropertyNames(parent);
                for(var i = 0; i < allPropertyNames.length; i++){
                    var propertyName = allPropertyNames[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
                    if (descriptor && descriptor.enumerable) continue;
                    child[propertyName] = _clone(parent[propertyName], depth - 1);
                    Object.defineProperty(child, propertyName, {
                        enumerable: false
                    });
                }
            }
            return child;
        }
        return _clone(parent, depth);
    }
    /**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */ clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c = function() {};
        c.prototype = parent;
        return new c();
    };
    // private utility functions
    function __objToStr(o) {
        return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
        return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
        return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
}();
if (0, module.exports) module.exports = clone;

},{"1a820bb46071bff7":"fCgem"}],"l0oUb":[function(require,module,exports) {
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ var process = require("3eeb40bef1e36f6c");
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") return;
        index++;
        if (match === "%c") // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem("debug", namespaces);
        else exports.storage.removeItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("4c41e97903f71015")(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};

},{"3eeb40bef1e36f6c":"d5jf4","4c41e97903f71015":"6Yq2n"}],"6Yq2n":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("851fc8dffc81c24");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") // Anything else let's inspect with %O
            args.unshift("%O");
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") return "%";
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            else createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"851fc8dffc81c24":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + "d";
    if (msAbs >= h) return Math.round(ms / h) + "h";
    if (msAbs >= m) return Math.round(ms / m) + "m";
    if (msAbs >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, "day");
    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
    if (msAbs >= s) return plural(ms, msAbs, s, "second");
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}

},{}],"bngOt":[function(require,module,exports) {
/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ const debug = require("4eabf37dadcbc87d")("simple-peer");
const getBrowserRTC = require("6b1a2f93d4eea294");
const randombytes = require("b1cd8178d7166550");
const stream = require("1c0c08c21fa741f9");
const queueMicrotask = require("42ac1200f7615458") // TODO: remove when Node 10 is not supported
;
const errCode = require("b28ba8889b071470");
const { Buffer  } = require("455789dfe70188ce");
const MAX_BUFFERED_AMOUNT = 65536;
const ICECOMPLETE_TIMEOUT = 5000;
const CHANNEL_CLOSING_TIMEOUT = 5000;
// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle(sdp) {
    return sdp.replace(/a=ice-options:trickle\s\n/g, "");
}
function warn(message) {
    console.warn(message);
}
/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */ class Peer extends stream.Duplex {
    constructor(opts){
        opts = Object.assign({
            allowHalfOpen: false
        }, opts);
        super(opts);
        this._id = randombytes(4).toString("hex").slice(0, 7);
        this._debug("new peer %o", opts);
        this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString("hex") : null;
        this.initiator = opts.initiator || false;
        this.channelConfig = opts.channelConfig || Peer.channelConfig;
        this.channelNegotiated = this.channelConfig.negotiated;
        this.config = Object.assign({}, Peer.config, opts.config);
        this.offerOptions = opts.offerOptions || {};
        this.answerOptions = opts.answerOptions || {};
        this.sdpTransform = opts.sdpTransform || ((sdp)=>sdp);
        this.streams = opts.streams || (opts.stream ? [
            opts.stream
        ] : [] // support old "stream" option
        );
        this.trickle = opts.trickle !== undefined ? opts.trickle : true;
        this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false;
        this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
        this.destroyed = false;
        this.destroying = false;
        this._connected = false;
        this.remoteAddress = undefined;
        this.remoteFamily = undefined;
        this.remotePort = undefined;
        this.localAddress = undefined;
        this.localFamily = undefined;
        this.localPort = undefined;
        this._wrtc = opts.wrtc && typeof opts.wrtc === "object" ? opts.wrtc : getBrowserRTC();
        if (!this._wrtc) {
            if (typeof window === "undefined") throw errCode(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
            else throw errCode(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        }
        this._pcReady = false;
        this._channelReady = false;
        this._iceComplete = false // ice candidate trickle done (got null candidate)
        ;
        this._iceCompleteTimer = null // send an offer/answer anyway after some timeout
        ;
        this._channel = null;
        this._pendingCandidates = [];
        this._isNegotiating = false // is this peer waiting for negotiation to complete?
        ;
        this._firstNegotiation = true;
        this._batchedNegotiation = false // batch synchronous negotiations
        ;
        this._queuedNegotiation = false // is there a queued negotiation request?
        ;
        this._sendersAwaitingStable = [];
        this._senderMap = new Map();
        this._closingInterval = null;
        this._remoteTracks = [];
        this._remoteStreams = [];
        this._chunk = null;
        this._cb = null;
        this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config);
        } catch (err) {
            this.destroy(errCode(err, "ERR_PC_CONSTRUCTOR"));
            return;
        }
        // We prefer feature detection whenever possible, but sometimes that's not
        // possible for certain implementations.
        this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === "number";
        this._pc.oniceconnectionstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onicegatheringstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onconnectionstatechange = ()=>{
            this._onConnectionStateChange();
        };
        this._pc.onsignalingstatechange = ()=>{
            this._onSignalingStateChange();
        };
        this._pc.onicecandidate = (event)=>{
            this._onIceCandidate(event);
        };
        // HACK: Fix for odd Firefox behavior, see: https://github.com/feross/simple-peer/pull/783
        if (typeof this._pc.peerIdentity === "object") this._pc.peerIdentity.catch((err)=>{
            this.destroy(errCode(err, "ERR_PC_PEER_IDENTITY"));
        });
        // Other spec events, unused by this implementation:
        // - onconnectionstatechange
        // - onicecandidateerror
        // - onfingerprintfailure
        // - onnegotiationneeded
        if (this.initiator || this.channelNegotiated) this._setupData({
            channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
        });
        else this._pc.ondatachannel = (event)=>{
            this._setupData(event);
        };
        if (this.streams) this.streams.forEach((stream)=>{
            this.addStream(stream);
        });
        this._pc.ontrack = (event)=>{
            this._onTrack(event);
        };
        this._debug("initial negotiation");
        this._needsNegotiation();
        this._onFinishBound = ()=>{
            this._onFinish();
        };
        this.once("finish", this._onFinishBound);
    }
    get bufferSize() {
        return this._channel && this._channel.bufferedAmount || 0;
    }
    // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    get connected() {
        return this._connected && this._channel.readyState === "open";
    }
    address() {
        return {
            port: this.localPort,
            family: this.localFamily,
            address: this.localAddress
        };
    }
    signal(data) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
        if (typeof data === "string") try {
            data = JSON.parse(data);
        } catch (err) {
            data = {};
        }
        this._debug("signal()");
        if (data.renegotiate && this.initiator) {
            this._debug("got request to renegotiate");
            this._needsNegotiation();
        }
        if (data.transceiverRequest && this.initiator) {
            this._debug("got request for transceiver");
            this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
        }
        if (data.candidate) {
            if (this._pc.remoteDescription && this._pc.remoteDescription.type) this._addIceCandidate(data.candidate);
            else this._pendingCandidates.push(data.candidate);
        }
        if (data.sdp) this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(()=>{
            if (this.destroyed) return;
            this._pendingCandidates.forEach((candidate)=>{
                this._addIceCandidate(candidate);
            });
            this._pendingCandidates = [];
            if (this._pc.remoteDescription.type === "offer") this._createAnswer();
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_SET_REMOTE_DESCRIPTION"));
        });
        if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) this.destroy(errCode(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
    }
    _addIceCandidate(candidate) {
        const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);
        this._pc.addIceCandidate(iceCandidateObj).catch((err)=>{
            if (!iceCandidateObj.address || iceCandidateObj.address.endsWith(".local")) warn("Ignoring unsupported ICE candidate.");
            else this.destroy(errCode(err, "ERR_ADD_ICE_CANDIDATE"));
        });
    }
    /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
   */ send(chunk) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
        this._channel.send(chunk);
    }
    /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */ addTransceiver(kind, init) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTransceiver()");
        if (this.initiator) try {
            this._pc.addTransceiver(kind, init);
            this._needsNegotiation();
        } catch (err) {
            this.destroy(errCode(err, "ERR_ADD_TRANSCEIVER"));
        }
        else this.emit("signal", {
            type: "transceiverRequest",
            transceiverRequest: {
                kind,
                init
            }
        });
    }
    /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */ addStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addStream()");
        stream.getTracks().forEach((track)=>{
            this.addTrack(track, stream);
        });
    }
    /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ addTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
        ;
        let sender = submap.get(stream);
        if (!sender) {
            sender = this._pc.addTrack(track, stream);
            submap.set(stream, sender);
            this._senderMap.set(track, submap);
            this._needsNegotiation();
        } else if (sender.removed) throw errCode(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
        else throw errCode(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
    }
    /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */ replaceTrack(oldTrack, newTrack, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const submap = this._senderMap.get(oldTrack);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) throw errCode(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        if (newTrack) this._senderMap.set(newTrack, submap);
        if (sender.replaceTrack != null) sender.replaceTrack(newTrack);
        else this.destroy(errCode(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
    }
    /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ removeTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const submap = this._senderMap.get(track);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) throw errCode(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            sender.removed = true;
            this._pc.removeTrack(sender);
        } catch (err) {
            if (err.name === "NS_ERROR_UNEXPECTED") this._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
            ;
            else this.destroy(errCode(err, "ERR_REMOVE_TRACK"));
        }
        this._needsNegotiation();
    }
    /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */ removeStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSenders()");
        stream.getTracks().forEach((track)=>{
            this.removeTrack(track, stream);
        });
    }
    _needsNegotiation() {
        this._debug("_needsNegotiation");
        if (this._batchedNegotiation) return; // batch synchronous renegotiations
        this._batchedNegotiation = true;
        queueMicrotask(()=>{
            this._batchedNegotiation = false;
            if (this.initiator || !this._firstNegotiation) {
                this._debug("starting batched negotiation");
                this.negotiate();
            } else this._debug("non-initiator initial negotiation request discarded");
            this._firstNegotiation = false;
        });
    }
    negotiate() {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
        if (this.initiator) {
            if (this._isNegotiating) {
                this._queuedNegotiation = true;
                this._debug("already negotiating, queueing");
            } else {
                this._debug("start negotiation");
                setTimeout(()=>{
                    this._createOffer();
                }, 0);
            }
        } else if (this._isNegotiating) {
            this._queuedNegotiation = true;
            this._debug("already negotiating, queueing");
        } else {
            this._debug("requesting negotiation from initiator");
            this.emit("signal", {
                type: "renegotiate",
                renegotiate: true
            });
        }
        this._isNegotiating = true;
    }
    // TODO: Delete this method once readable-stream is updated to contain a default
    // implementation of destroy() that automatically calls _destroy()
    // See: https://github.com/nodejs/readable-stream/issues/283
    destroy(err) {
        this._destroy(err, ()=>{});
    }
    _destroy(err, cb) {
        if (this.destroyed || this.destroying) return;
        this.destroying = true;
        this._debug("destroying (error: %s)", err && (err.message || err));
        queueMicrotask(()=>{
            this.destroyed = true;
            this.destroying = false;
            this._debug("destroy (error: %s)", err && (err.message || err));
            this.readable = this.writable = false;
            if (!this._readableState.ended) this.push(null);
            if (!this._writableState.finished) this.end();
            this._connected = false;
            this._pcReady = false;
            this._channelReady = false;
            this._remoteTracks = null;
            this._remoteStreams = null;
            this._senderMap = null;
            clearInterval(this._closingInterval);
            this._closingInterval = null;
            clearInterval(this._interval);
            this._interval = null;
            this._chunk = null;
            this._cb = null;
            if (this._onFinishBound) this.removeListener("finish", this._onFinishBound);
            this._onFinishBound = null;
            if (this._channel) {
                try {
                    this._channel.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._channel.onmessage = null;
                this._channel.onopen = null;
                this._channel.onclose = null;
                this._channel.onerror = null;
            }
            if (this._pc) {
                try {
                    this._pc.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._pc.oniceconnectionstatechange = null;
                this._pc.onicegatheringstatechange = null;
                this._pc.onsignalingstatechange = null;
                this._pc.onicecandidate = null;
                this._pc.ontrack = null;
                this._pc.ondatachannel = null;
            }
            this._pc = null;
            this._channel = null;
            if (err) this.emit("error", err);
            this.emit("close");
            cb();
        });
    }
    _setupData(event) {
        if (!event.channel) // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
        // which is invalid behavior. Handle it gracefully.
        // See: https://github.com/feross/simple-peer/issues/163
        return this.destroy(errCode(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = event.channel;
        this._channel.binaryType = "arraybuffer";
        if (typeof this._channel.bufferedAmountLowThreshold === "number") this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
        this.channelName = this._channel.label;
        this._channel.onmessage = (event)=>{
            this._onChannelMessage(event);
        };
        this._channel.onbufferedamountlow = ()=>{
            this._onChannelBufferedAmountLow();
        };
        this._channel.onopen = ()=>{
            this._onChannelOpen();
        };
        this._channel.onclose = ()=>{
            this._onChannelClose();
        };
        this._channel.onerror = (event)=>{
            const err = event.error instanceof Error ? event.error : new Error(`Datachannel error: ${event.message} ${event.filename}:${event.lineno}:${event.colno}`);
            this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
        };
        // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
        // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
        let isClosing = false;
        this._closingInterval = setInterval(()=>{
            if (this._channel && this._channel.readyState === "closing") {
                if (isClosing) this._onChannelClose() // closing timed out: equivalent to onclose firing
                ;
                isClosing = true;
            } else isClosing = false;
        }, CHANNEL_CLOSING_TIMEOUT);
    }
    _read() {}
    _write(chunk, encoding, cb) {
        if (this.destroyed) return cb(errCode(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
        if (this._connected) {
            try {
                this.send(chunk);
            } catch (err) {
                return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
            }
            if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
                this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount);
                this._cb = cb;
            } else cb(null);
        } else {
            this._debug("write before connect");
            this._chunk = chunk;
            this._cb = cb;
        }
    }
    // When stream finishes writing, close socket. Half open connections are not
    // supported.
    _onFinish() {
        if (this.destroyed) return;
        // Wait a bit before destroying so the socket flushes.
        // TODO: is there a more reliable way to accomplish this?
        const destroySoon = ()=>{
            setTimeout(()=>this.destroy(), 1000);
        };
        if (this._connected) destroySoon();
        else this.once("connect", destroySoon);
    }
    _startIceCompleteTimeout() {
        if (this.destroyed) return;
        if (this._iceCompleteTimer) return;
        this._debug("started iceComplete timeout");
        this._iceCompleteTimer = setTimeout(()=>{
            if (!this._iceComplete) {
                this._iceComplete = true;
                this._debug("iceComplete timeout completed");
                this.emit("iceTimeout");
                this.emit("_iceComplete");
            }
        }, this.iceCompleteTimeout);
    }
    _createOffer() {
        if (this.destroyed) return;
        this._pc.createOffer(this.offerOptions).then((offer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
            offer.sdp = this.sdpTransform(offer.sdp);
            const sendOffer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || offer;
                this._debug("signal");
                this.emit("signal", {
                    type: signal.type,
                    sdp: signal.sdp
                });
            };
            const onSuccess = ()=>{
                this._debug("createOffer success");
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendOffer();
                else this.once("_iceComplete", sendOffer) // wait for candidates
                ;
            };
            const onError = (err)=>{
                this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
            };
            this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_CREATE_OFFER"));
        });
    }
    _requestMissingTransceivers() {
        if (this._pc.getTransceivers) this._pc.getTransceivers().forEach((transceiver)=>{
            if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
                transceiver.requested = true // HACK: Safari returns negotiated transceivers with a null mid
                ;
                this.addTransceiver(transceiver.sender.track.kind);
            }
        });
    }
    _createAnswer() {
        if (this.destroyed) return;
        this._pc.createAnswer(this.answerOptions).then((answer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
            answer.sdp = this.sdpTransform(answer.sdp);
            const sendAnswer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || answer;
                this._debug("signal");
                this.emit("signal", {
                    type: signal.type,
                    sdp: signal.sdp
                });
                if (!this.initiator) this._requestMissingTransceivers();
            };
            const onSuccess = ()=>{
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendAnswer();
                else this.once("_iceComplete", sendAnswer);
            };
            const onError = (err)=>{
                this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
            };
            this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_CREATE_ANSWER"));
        });
    }
    _onConnectionStateChange() {
        if (this.destroyed) return;
        if (this._pc.connectionState === "failed") this.destroy(errCode(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const iceConnectionState = this._pc.iceConnectionState;
        const iceGatheringState = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", iceConnectionState, iceGatheringState);
        this.emit("iceStateChange", iceConnectionState, iceGatheringState);
        if (iceConnectionState === "connected" || iceConnectionState === "completed") {
            this._pcReady = true;
            this._maybeReady();
        }
        if (iceConnectionState === "failed") this.destroy(errCode(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE"));
        if (iceConnectionState === "closed") this.destroy(errCode(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
    }
    getStats(cb) {
        // statreports can come with a value array instead of properties
        const flattenValues = (report)=>{
            if (Object.prototype.toString.call(report.values) === "[object Array]") report.values.forEach((value)=>{
                Object.assign(report, value);
            });
            return report;
        };
        // Promise-based getStats() (standard)
        if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) this._pc.getStats().then((res)=>{
            const reports = [];
            res.forEach((report)=>{
                reports.push(flattenValues(report));
            });
            cb(null, reports);
        }, (err)=>cb(err));
        else if (this._pc.getStats.length > 0) this._pc.getStats((res)=>{
            // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
            if (this.destroyed) return;
            const reports = [];
            res.result().forEach((result)=>{
                const report = {};
                result.names().forEach((name)=>{
                    report[name] = result.stat(name);
                });
                report.id = result.id;
                report.type = result.type;
                report.timestamp = result.timestamp;
                reports.push(flattenValues(report));
            });
            cb(null, reports);
        }, (err)=>cb(err));
        else cb(null, []);
    }
    _maybeReady() {
        this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady);
        if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = true;
        // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
        const findCandidatePair = ()=>{
            if (this.destroyed) return;
            this.getStats((err, items)=>{
                if (this.destroyed) return;
                // Treat getStats error as non-fatal. It's not essential.
                if (err) items = [];
                const remoteCandidates = {};
                const localCandidates = {};
                const candidatePairs = {};
                let foundSelectedCandidatePair = false;
                items.forEach((item)=>{
                    // TODO: Once all browsers support the hyphenated stats report types, remove
                    // the non-hypenated ones
                    if (item.type === "remotecandidate" || item.type === "remote-candidate") remoteCandidates[item.id] = item;
                    if (item.type === "localcandidate" || item.type === "local-candidate") localCandidates[item.id] = item;
                    if (item.type === "candidatepair" || item.type === "candidate-pair") candidatePairs[item.id] = item;
                });
                const setSelectedCandidatePair = (selectedCandidatePair)=>{
                    foundSelectedCandidatePair = true;
                    let local = localCandidates[selectedCandidatePair.localCandidateId];
                    if (local && (local.ip || local.address)) {
                        // Spec
                        this.localAddress = local.ip || local.address;
                        this.localPort = Number(local.port);
                    } else if (local && local.ipAddress) {
                        // Firefox
                        this.localAddress = local.ipAddress;
                        this.localPort = Number(local.portNumber);
                    } else if (typeof selectedCandidatePair.googLocalAddress === "string") {
                        // TODO: remove this once Chrome 58 is released
                        local = selectedCandidatePair.googLocalAddress.split(":");
                        this.localAddress = local[0];
                        this.localPort = Number(local[1]);
                    }
                    if (this.localAddress) this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4";
                    let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];
                    if (remote && (remote.ip || remote.address)) {
                        // Spec
                        this.remoteAddress = remote.ip || remote.address;
                        this.remotePort = Number(remote.port);
                    } else if (remote && remote.ipAddress) {
                        // Firefox
                        this.remoteAddress = remote.ipAddress;
                        this.remotePort = Number(remote.portNumber);
                    } else if (typeof selectedCandidatePair.googRemoteAddress === "string") {
                        // TODO: remove this once Chrome 58 is released
                        remote = selectedCandidatePair.googRemoteAddress.split(":");
                        this.remoteAddress = remote[0];
                        this.remotePort = Number(remote[1]);
                    }
                    if (this.remoteAddress) this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4";
                    this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                };
                items.forEach((item)=>{
                    // Spec-compliant
                    if (item.type === "transport" && item.selectedCandidatePairId) setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
                    // Old implementations
                    if (item.type === "googCandidatePair" && item.googActiveConnection === "true" || (item.type === "candidatepair" || item.type === "candidate-pair") && item.selected) setSelectedCandidatePair(item);
                });
                // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
                // But wait until at least 1 candidate pair is available
                if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
                    setTimeout(findCandidatePair, 100);
                    return;
                } else {
                    this._connecting = false;
                    this._connected = true;
                }
                if (this._chunk) {
                    try {
                        this.send(this._chunk);
                    } catch (err) {
                        return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
                    }
                    this._chunk = null;
                    this._debug('sent chunk from "write before connect"');
                    const cb = this._cb;
                    this._cb = null;
                    cb(null);
                }
                // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
                // fallback to using setInterval to implement backpressure.
                if (typeof this._channel.bufferedAmountLowThreshold !== "number") {
                    this._interval = setInterval(()=>this._onInterval(), 150);
                    if (this._interval.unref) this._interval.unref();
                }
                this._debug("connect");
                this.emit("connect");
            });
        };
        findCandidatePair();
    }
    _onInterval() {
        if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) return;
        this._onChannelBufferedAmountLow();
    }
    _onSignalingStateChange() {
        if (this.destroyed) return;
        if (this._pc.signalingState === "stable") {
            this._isNegotiating = false;
            // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
            this._debug("flushing sender queue", this._sendersAwaitingStable);
            this._sendersAwaitingStable.forEach((sender)=>{
                this._pc.removeTrack(sender);
                this._queuedNegotiation = true;
            });
            this._sendersAwaitingStable = [];
            if (this._queuedNegotiation) {
                this._debug("flushing negotiation queue");
                this._queuedNegotiation = false;
                this._needsNegotiation() // negotiate again
                ;
            } else {
                this._debug("negotiated");
                this.emit("negotiated");
            }
        }
        this._debug("signalingStateChange %s", this._pc.signalingState);
        this.emit("signalingStateChange", this._pc.signalingState);
    }
    _onIceCandidate(event) {
        if (this.destroyed) return;
        if (event.candidate && this.trickle) this.emit("signal", {
            type: "candidate",
            candidate: {
                candidate: event.candidate.candidate,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
                sdpMid: event.candidate.sdpMid
            }
        });
        else if (!event.candidate && !this._iceComplete) {
            this._iceComplete = true;
            this.emit("_iceComplete");
        }
        // as soon as we've received one valid candidate start timeout
        if (event.candidate) this._startIceCompleteTimeout();
    }
    _onChannelMessage(event) {
        if (this.destroyed) return;
        let data = event.data;
        if (data instanceof ArrayBuffer) data = Buffer.from(data);
        this.push(data);
    }
    _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;
        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
        const cb = this._cb;
        this._cb = null;
        cb(null);
    }
    _onChannelOpen() {
        if (this._connected || this.destroyed) return;
        this._debug("on channel open");
        this._channelReady = true;
        this._maybeReady();
    }
    _onChannelClose() {
        if (this.destroyed) return;
        this._debug("on channel close");
        this.destroy();
    }
    _onTrack(event) {
        if (this.destroyed) return;
        event.streams.forEach((eventStream)=>{
            this._debug("on track");
            this.emit("track", event.track, eventStream);
            this._remoteTracks.push({
                track: event.track,
                stream: eventStream
            });
            if (this._remoteStreams.some((remoteStream)=>{
                return remoteStream.id === eventStream.id;
            })) return; // Only fire one 'stream' event, even though there may be multiple tracks per stream
            this._remoteStreams.push(eventStream);
            queueMicrotask(()=>{
                this._debug("on stream");
                this.emit("stream", eventStream) // ensure all tracks have been added
                ;
            });
        });
    }
    _debug() {
        const args = [].slice.call(arguments);
        args[0] = "[" + this._id + "] " + args[0];
        debug.apply(null, args);
    }
}
Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */ Peer.config = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478"
            ]
        }
    ],
    sdpSemantics: "unified-plan"
};
Peer.channelConfig = {};
module.exports = Peer;

},{"4eabf37dadcbc87d":"l0oUb","6b1a2f93d4eea294":"2oPI3","b1cd8178d7166550":"8hjhE","1c0c08c21fa741f9":"jXNWE","42ac1200f7615458":"fQqUJ","b28ba8889b071470":"dUrrM","455789dfe70188ce":"fCgem"}],"2oPI3":[function(require,module,exports) {
// originally pulled out of simple-peer
module.exports = function getBrowserRTC() {
    if (typeof globalThis === "undefined") return null;
    var wrtc = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    if (!wrtc.RTCPeerConnection) return null;
    return wrtc;
};

},{}],"8hjhE":[function(require,module,exports) {
var global = arguments[3];
var process = require("19e6cd5d058a5b37");
"use strict";
// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
var MAX_BYTES = 65536;
// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
var MAX_UINT32 = 4294967295;
function oldBrowser() {
    throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
}
var Buffer = require("6fb3b6eea75815d0").Buffer;
var crypto = global.crypto || global.msCrypto;
if (crypto && crypto.getRandomValues) module.exports = randomBytes;
else module.exports = oldBrowser;
function randomBytes(size, cb) {
    // phantomjs needs to throw
    if (size > MAX_UINT32) throw new RangeError("requested too many random bytes");
    var bytes = Buffer.allocUnsafe(size);
    if (size > 0) {
        if (size > MAX_BYTES) // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
        for(var generated = 0; generated < size; generated += MAX_BYTES)// buffer.slice automatically checks if the end is past the end of
        // the buffer so we don't have to here
        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
        else crypto.getRandomValues(bytes);
    }
    if (typeof cb === "function") return process.nextTick(function() {
        cb(null, bytes);
    });
    return bytes;
}

},{"19e6cd5d058a5b37":"d5jf4","6fb3b6eea75815d0":"eW7r9"}],"eW7r9":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require("dde13d561e411fb7");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return buffer.SlowBuffer(size);
};

},{"dde13d561e411fb7":"fCgem"}],"jXNWE":[function(require,module,exports) {
exports = module.exports = require("4c158895cd6c5e9d");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require("958e13217ea24149");
exports.Duplex = require("877ead4445bc3f1");
exports.Transform = require("e1ee40bb094c64d5");
exports.PassThrough = require("7d1e4f78216a7eac");
exports.finished = require("74bab160baede776");
exports.pipeline = require("5bfa3eedb9b93c0e");

},{"4c158895cd6c5e9d":"6NdbQ","958e13217ea24149":"gTkcq","877ead4445bc3f1":"kKNA3","e1ee40bb094c64d5":"ba8Mr","7d1e4f78216a7eac":"2xP98","74bab160baede776":"aOMy2","5bfa3eedb9b93c0e":"fyp4t"}],"6NdbQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var global = arguments[3];
var process = require("246acc2ff8f22fbe");
"use strict";
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require("4de98422659962dd").EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("91fd02f7e08d57af");
/*</replacement>*/ var Buffer = require("46ac8f9aa585dd88").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require("546642a271ba9280");
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
else debug = function debug() {};
/*</replacement>*/ var BufferList = require("1d70eb7c020c4dac");
var destroyImpl = require("4c105dbe18c9e0d6");
var _require = require("a59283de7d394c3c"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("c143a61c2ce8812f").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require("8a27ec2b4e183e09")(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require("15174f0cdb31c05f");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require("2c1dc9c0bd9cd405").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require("15174f0cdb31c05f");
    if (!(this instanceof Readable)) return new Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require("2c1dc9c0bd9cd405").StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = "";
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount("readable") > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self1) {
    var state = self1._readableState;
    state.readableListening = self1.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;
    else if (self1.listenerCount("data") > 0) self1.resume();
}
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === "function") Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require("471bcd61cee4e1fb");
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === "function") Readable.from = function(iterable, opts) {
    if (from === undefined) from = require("44cab9e06f67c079");
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"246acc2ff8f22fbe":"d5jf4","4de98422659962dd":"1VQLm","91fd02f7e08d57af":"60BLS","46ac8f9aa585dd88":"fCgem","546642a271ba9280":"jhUEF","1d70eb7c020c4dac":"hf3P2","4c105dbe18c9e0d6":"YI8DF","a59283de7d394c3c":"61BRN","c143a61c2ce8812f":"aJlwj","8a27ec2b4e183e09":"bRL3M","15174f0cdb31c05f":"kKNA3","2c1dc9c0bd9cd405":"3vmkr","471bcd61cee4e1fb":"k019Y","44cab9e06f67c079":"ak0YH"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"60BLS":[function(require,module,exports) {
module.exports = require("d71f4931c76c4fc0").EventEmitter;

},{"d71f4931c76c4fc0":"1VQLm"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"hf3P2":[function(require,module,exports) {
"use strict";
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var _require = require("d08baeb1ce1242ca"), Buffer = _require.Buffer;
var _require2 = require("709f7e24f1ecd2ec"), inspect = _require2.inspect;
var custom = inspect && inspect.custom || "inspect";
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return "";
                var p = this.head;
                var ret = "" + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            }
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            }
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();

},{"d08baeb1ce1242ca":"fCgem","709f7e24f1ecd2ec":"jhUEF"}],"YI8DF":[function(require,module,exports) {
var process = require("14ecef734ffa5a21");
"use strict";
// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit("close");
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"14ecef734ffa5a21":"d5jf4"}],"61BRN":[function(require,module,exports) {
"use strict";
var ERR_INVALID_OPT_VALUE = require("7be4f2db1f75c50").codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"7be4f2db1f75c50":"aJlwj"}],"aJlwj":[function(require,module,exports) {
"use strict";
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.codes = codes;

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"kKNA3":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var process = require("eb6724cfadb9be09");
"use strict";
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require("650918b8cc69c928");
var Writable = require("bb311cf6a7c4c9d5");
require("e1c4c357bc34ee1c")(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys = objectKeys(Writable.prototype);
for(var v = 0; v < keys.length; v++){
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"eb6724cfadb9be09":"d5jf4","650918b8cc69c928":"6NdbQ","bb311cf6a7c4c9d5":"gTkcq","e1c4c357bc34ee1c":"bRL3M"}],"gTkcq":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var global = arguments[3];
var process = require("ef41dcdc098cb36c");
"use strict";
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require("b6a84cdb75c9b2f7")
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("5132727c94880906");
/*</replacement>*/ var Buffer = require("343ede5f3a3efa7a").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require("58d7c8aad3216628");
var _require = require("3023a98d42d7afd8"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("c02d6091f8202934").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require("e1e8209dcf8d10f3")(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require("bdeb0ccd918cecd0");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require("bdeb0ccd918cecd0");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== "string" && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer"
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"ef41dcdc098cb36c":"d5jf4","b6a84cdb75c9b2f7":"j92NQ","5132727c94880906":"60BLS","343ede5f3a3efa7a":"fCgem","58d7c8aad3216628":"YI8DF","3023a98d42d7afd8":"61BRN","c02d6091f8202934":"aJlwj","e1e8209dcf8d10f3":"bRL3M","bdeb0ccd918cecd0":"kKNA3"}],"j92NQ":[function(require,module,exports) {
/**
 * Module exports.
 */ var global = arguments[3];
module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config("noDeprecation")) return fn;
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config("throwDeprecation")) throw new Error(msg);
            else if (config("traceDeprecation")) console.trace(msg);
            else console.warn(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!global.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === "true";
}

},{}],"3vmkr":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
/*<replacement>*/ var Buffer = require("f9be4ec67070c2a1").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

},{"f9be4ec67070c2a1":"eW7r9"}],"k019Y":[function(require,module,exports) {
var process = require("4f23978c9995bd98");
"use strict";
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var finished = require("bdc6f31f864b4bde");
var kLastResolve = Symbol("lastResolve");
var kLastReject = Symbol("lastReject");
var kError = Symbol("error");
var kEnded = Symbol("ended");
var kLastPromise = Symbol("lastPromise");
var kHandlePromise = Symbol("handlePromise");
var kStream = Symbol("stream");
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"4f23978c9995bd98":"d5jf4","bdc6f31f864b4bde":"aOMy2"}],"aOMy2":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var ERR_STREAM_PREMATURE_CLOSE = require("f5ce96140ef752c6").codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function eos(stream, opts, callback) {
    if (typeof opts === "function") return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
module.exports = eos;

},{"f5ce96140ef752c6":"aJlwj"}],"ak0YH":[function(require,module,exports) {
module.exports = function() {
    throw new Error("Readable.from is not available in the browser");
};

},{}],"ba8Mr":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
"use strict";
module.exports = Transform;
var _require$codes = require("abc92e9eb04aa678").codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require("552598c549a8e56f");
require("c75d0ee9dba5991a")(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);
    // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"abc92e9eb04aa678":"aJlwj","552598c549a8e56f":"kKNA3","c75d0ee9dba5991a":"bRL3M"}],"2xP98":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
"use strict";
module.exports = PassThrough;
var Transform = require("b3ea77063f4fb235");
require("7a7196767a08d151")(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"b3ea77063f4fb235":"ba8Mr","7a7196767a08d151":"bRL3M"}],"fyp4t":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require("c125de1d5d8f93b4").codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on("close", function() {
        closed = true;
    });
    if (eos === undefined) eos = require("33e922757fe071eb");
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== "function") return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"c125de1d5d8f93b4":"aJlwj","33e922757fe071eb":"aOMy2"}],"fQqUJ":[function(require,module,exports) {
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var global = arguments[3];
let promise;
module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{
            throw err;
        }, 0));

},{}],"dUrrM":[function(require,module,exports) {
"use strict";
/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */ /**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */ function assign(obj, props) {
    for(const key in props)Object.defineProperty(obj, key, {
        value: props[key],
        enumerable: true,
        configurable: true
    });
    return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */ function createError(err, code, props) {
    if (!err || typeof err === "string") throw new TypeError("Please pass an Error to err-code");
    if (!props) props = {};
    if (typeof code === "object") {
        props = code;
        code = "";
    }
    if (code) props.code = code;
    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;
        const ErrClass = function() {};
        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
        // @ts-ignore
        const output = assign(new ErrClass(), props);
        return output;
    }
}
module.exports = createError;

},{}],"5a7A3":[function(require,module,exports) {
/*! simple-websocket. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* global WebSocket */ var Buffer = require("eddff587174dfa23").Buffer;
const debug = require("2b18090bbb9fb5bb")("simple-websocket");
const randombytes = require("eba1d93bf79027a0");
const stream = require("d39e6eaaf76ec0e6");
const queueMicrotask = require("a901eae0be98a0c") // TODO: remove when Node 10 is not supported
;
const ws = require("bd97e9b6cb58fd82") // websockets in node - will be empty object in browser
;
const _WebSocket = typeof ws !== "function" ? WebSocket : ws;
const MAX_BUFFERED_AMOUNT = 65536;
/**
 * WebSocket. Same API as node core `net.Socket`. Duplex stream.
 * @param {Object} opts
 * @param {string=} opts.url websocket server url
 * @param {string=} opts.socket raw websocket instance to wrap
 */ class Socket extends stream.Duplex {
    constructor(opts = {}){
        // Support simple usage: `new Socket(url)`
        if (typeof opts === "string") opts = {
            url: opts
        };
        opts = Object.assign({
            allowHalfOpen: false
        }, opts);
        super(opts);
        if (opts.url == null && opts.socket == null) throw new Error("Missing required `url` or `socket` option");
        if (opts.url != null && opts.socket != null) throw new Error("Must specify either `url` or `socket` option, not both");
        this._id = randombytes(4).toString("hex").slice(0, 7);
        this._debug("new websocket: %o", opts);
        this.connected = false;
        this.destroyed = false;
        this._chunk = null;
        this._cb = null;
        this._interval = null;
        if (opts.socket) {
            this.url = opts.socket.url;
            this._ws = opts.socket;
            this.connected = opts.socket.readyState === _WebSocket.OPEN;
        } else {
            this.url = opts.url;
            try {
                if (typeof ws === "function") // `ws` package accepts options
                this._ws = new _WebSocket(opts.url, null, {
                    ...opts,
                    encoding: undefined // encoding option breaks ws internals
                });
                else this._ws = new _WebSocket(opts.url);
            } catch (err) {
                queueMicrotask(()=>this.destroy(err));
                return;
            }
        }
        this._ws.binaryType = "arraybuffer";
        if (opts.socket && this.connected) queueMicrotask(()=>this._handleOpen());
        else this._ws.onopen = ()=>this._handleOpen();
        this._ws.onmessage = (event)=>this._handleMessage(event);
        this._ws.onclose = ()=>this._handleClose();
        this._ws.onerror = (err)=>this._handleError(err);
        this._handleFinishBound = ()=>this._handleFinish();
        this.once("finish", this._handleFinishBound);
    }
    /**
   * Send text/binary data to the WebSocket server.
   * @param {TypedArrayView|ArrayBuffer|Buffer|string|Blob|Object} chunk
   */ send(chunk) {
        this._ws.send(chunk);
    }
    // TODO: Delete this method once readable-stream is updated to contain a default
    // implementation of destroy() that automatically calls _destroy()
    // See: https://github.com/nodejs/readable-stream/issues/283
    destroy(err) {
        this._destroy(err, ()=>{});
    }
    _destroy(err, cb) {
        if (this.destroyed) return;
        this._debug("destroy (error: %s)", err && (err.message || err));
        this.readable = this.writable = false;
        if (!this._readableState.ended) this.push(null);
        if (!this._writableState.finished) this.end();
        this.connected = false;
        this.destroyed = true;
        clearInterval(this._interval);
        this._interval = null;
        this._chunk = null;
        this._cb = null;
        if (this._handleFinishBound) this.removeListener("finish", this._handleFinishBound);
        this._handleFinishBound = null;
        if (this._ws) {
            const ws = this._ws;
            const onClose = ()=>{
                ws.onclose = null;
            };
            if (ws.readyState === _WebSocket.CLOSED) onClose();
            else try {
                ws.onclose = onClose;
                ws.close();
            } catch (err) {
                onClose();
            }
            ws.onopen = null;
            ws.onmessage = null;
            ws.onerror = ()=>{};
        }
        this._ws = null;
        if (err) this.emit("error", err);
        this.emit("close");
        cb();
    }
    _read() {}
    _write(chunk, encoding, cb) {
        if (this.destroyed) return cb(new Error("cannot write after socket is destroyed"));
        if (this.connected) {
            try {
                this.send(chunk);
            } catch (err) {
                return this.destroy(err);
            }
            if (typeof ws !== "function" && this._ws.bufferedAmount > MAX_BUFFERED_AMOUNT) {
                this._debug("start backpressure: bufferedAmount %d", this._ws.bufferedAmount);
                this._cb = cb;
            } else cb(null);
        } else {
            this._debug("write before connect");
            this._chunk = chunk;
            this._cb = cb;
        }
    }
    _handleOpen() {
        if (this.connected || this.destroyed) return;
        this.connected = true;
        if (this._chunk) {
            try {
                this.send(this._chunk);
            } catch (err) {
                return this.destroy(err);
            }
            this._chunk = null;
            this._debug('sent chunk from "write before connect"');
            const cb = this._cb;
            this._cb = null;
            cb(null);
        }
        // Backpressure is not implemented in Node.js. The `ws` module has a buggy
        // `bufferedAmount` property. See: https://github.com/websockets/ws/issues/492
        if (typeof ws !== "function") {
            this._interval = setInterval(()=>this._onInterval(), 150);
            if (this._interval.unref) this._interval.unref();
        }
        this._debug("connect");
        this.emit("connect");
    }
    _handleMessage(event) {
        if (this.destroyed) return;
        let data = event.data;
        if (data instanceof ArrayBuffer) data = Buffer.from(data);
        this.push(data);
    }
    _handleClose() {
        if (this.destroyed) return;
        this._debug("on close");
        this.destroy();
    }
    _handleError(_) {
        this.destroy(new Error(`Error connecting to ${this.url}`));
    }
    // When stream finishes writing, close socket. Half open connections are not
    // supported.
    _handleFinish() {
        if (this.destroyed) return;
        // Wait a bit before destroying so the socket flushes.
        // TODO: is there a more reliable way to accomplish this?
        const destroySoon = ()=>{
            setTimeout(()=>this.destroy(), 1000);
        };
        if (this.connected) destroySoon();
        else this.once("connect", destroySoon);
    }
    _onInterval() {
        if (!this._cb || !this._ws || this._ws.bufferedAmount > MAX_BUFFERED_AMOUNT) return;
        this._debug("ending backpressure: bufferedAmount %d", this._ws.bufferedAmount);
        const cb = this._cb;
        this._cb = null;
        cb(null);
    }
    _debug() {
        const args = [].slice.call(arguments);
        args[0] = "[" + this._id + "] " + args[0];
        debug.apply(null, args);
    }
}
Socket.WEBSOCKET_SUPPORT = !!_WebSocket;
module.exports = Socket;

},{"eddff587174dfa23":"fCgem","2b18090bbb9fb5bb":"l0oUb","eba1d93bf79027a0":"8hjhE","d39e6eaaf76ec0e6":"jXNWE","a901eae0be98a0c":"fQqUJ","bd97e9b6cb58fd82":"jhUEF"}],"9IcaR":[function(require,module,exports) {
/**
 * Functions/constants needed by both the client and server.
 */ var Buffer = require("acdbb4161dd0d4a4").Buffer;
exports.DEFAULT_ANNOUNCE_PEERS = 50;
exports.MAX_ANNOUNCE_PEERS = 82;
exports.binaryToHex = (str)=>{
    if (typeof str !== "string") str = String(str);
    return Buffer.from(str, "binary").toString("hex");
};
exports.hexToBinary = (str)=>{
    if (typeof str !== "string") str = String(str);
    return Buffer.from(str, "hex").toString("binary");
};
// HACK: Fix for WHATWG URL object not parsing non-standard URL schemes like
// 'udp:'. Just replace it with 'http:' since we only need a few properties.
//
// Note: Only affects Chrome and Firefox. Works fine in Node.js, Safari, and
// Edge.
//
// Note: UDP trackers aren't used in the normal browser build, but they are
// used in a Chrome App build (i.e. by Brave Browser).
//
// Bug reports:
// - Chrome: https://bugs.chromium.org/p/chromium/issues/detail?id=734880
// - Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1374505
exports.parseUrl = (str)=>{
    const url = new URL(str.replace(/^udp:/, "http:"));
    if (str.match(/^udp:/)) Object.defineProperties(url, {
        href: {
            value: url.href.replace(/^http/, "udp")
        },
        protocol: {
            value: url.protocol.replace(/^http/, "udp")
        },
        origin: {
            value: url.origin.replace(/^http/, "udp")
        }
    });
    return url;
};
const config = require("569e09beb65c3ec");
Object.assign(exports, config);

},{"acdbb4161dd0d4a4":"fCgem","569e09beb65c3ec":"jhUEF"}],"4YnTg":[function(require,module,exports) {
const EventEmitter = require("2ecffb5f74ea23da");
class Tracker extends EventEmitter {
    constructor(client, announceUrl){
        super();
        this.client = client;
        this.announceUrl = announceUrl;
        this.interval = null;
        this.destroyed = false;
    }
    setInterval(intervalMs) {
        if (intervalMs == null) intervalMs = this.DEFAULT_ANNOUNCE_INTERVAL;
        clearInterval(this.interval);
        if (intervalMs) {
            this.interval = setInterval(()=>{
                this.announce(this.client._defaultAnnounceOpts());
            }, intervalMs);
            if (this.interval.unref) this.interval.unref();
        }
    }
}
module.exports = Tracker;

},{"2ecffb5f74ea23da":"1VQLm"}],"e4Bgd":[function(require,module,exports) {
/* global self */ const Rusha = require("ae827faad4e4270f");
const rushaWorkerSha1 = require("4cbea6b7a83a9114");
const rusha = new Rusha();
const scope = typeof window !== "undefined" ? window : self;
const crypto = scope.crypto || scope.msCrypto || {};
let subtle = crypto.subtle || crypto.webkitSubtle;
function sha1sync(buf) {
    return rusha.digest(buf);
}
// Browsers throw if they lack support for an algorithm.
// Promise will be rejected on non-secure origins. (http://goo.gl/lq4gCo)
try {
    subtle.digest({
        name: "sha-1"
    }, new Uint8Array()).catch(function() {
        subtle = false;
    });
} catch (err) {
    subtle = false;
}
function sha1(buf, cb) {
    if (!subtle) {
        if (typeof window !== "undefined") rushaWorkerSha1(buf, function onRushaWorkerSha1(err, hash) {
            if (err) {
                // On error, fallback to synchronous method which cannot fail
                cb(sha1sync(buf));
                return;
            }
            cb(hash);
        });
        else queueMicrotask(()=>cb(sha1sync(buf)));
        return;
    }
    if (typeof buf === "string") buf = uint8array(buf);
    subtle.digest({
        name: "sha-1"
    }, buf).then(function succeed(result) {
        cb(hex(new Uint8Array(result)));
    }, function fail() {
        // On error, fallback to synchronous method which cannot fail
        cb(sha1sync(buf));
    });
}
function uint8array(s) {
    const l = s.length;
    const array = new Uint8Array(l);
    for(let i = 0; i < l; i++)array[i] = s.charCodeAt(i);
    return array;
}
function hex(buf) {
    const l = buf.length;
    const chars = [];
    for(let i = 0; i < l; i++){
        const bite = buf[i];
        chars.push((bite >>> 4).toString(16));
        chars.push((bite & 0x0f).toString(16));
    }
    return chars.join("");
}
module.exports = sha1;
module.exports.sync = sha1sync;

},{"ae827faad4e4270f":"7ePab","4cbea6b7a83a9114":"8NTW2"}],"7ePab":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(typeof self !== "undefined" ? self : this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 3);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            /* eslint-env commonjs, browser */ var RushaCore = __webpack_require__(5);
            var _require = __webpack_require__(1), toHex = _require.toHex, ceilHeapSize = _require.ceilHeapSize;
            var conv = __webpack_require__(6);
            // Calculate the length of buffer that the sha1 routine uses
            // including the padding.
            var padlen = function(len) {
                for(len += 9; len % 64 > 0; len += 1);
                return len;
            };
            var padZeroes = function(bin, len) {
                var h8 = new Uint8Array(bin.buffer);
                var om = len % 4, align = len - om;
                switch(om){
                    case 0:
                        h8[align + 3] = 0;
                    case 1:
                        h8[align + 2] = 0;
                    case 2:
                        h8[align + 1] = 0;
                    case 3:
                        h8[align + 0] = 0;
                }
                for(var i = (len >> 2) + 1; i < bin.length; i++)bin[i] = 0;
            };
            var padData = function(bin, chunkLen, msgLen) {
                bin[chunkLen >> 2] |= 0x80 << 24 - (chunkLen % 4 << 3);
                // To support msgLen >= 2 GiB, use a float division when computing the
                // high 32-bits of the big-endian message length in bits.
                bin[((chunkLen >> 2) + 2 & -16) + 14] = msgLen / 536870912 | 0;
                bin[((chunkLen >> 2) + 2 & -16) + 15] = msgLen << 3;
            };
            var getRawDigest = function(heap, padMaxChunkLen) {
                var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
                var out = new Int32Array(5);
                var arr = new DataView(out.buffer);
                arr.setInt32(0, io[0], false);
                arr.setInt32(4, io[1], false);
                arr.setInt32(8, io[2], false);
                arr.setInt32(12, io[3], false);
                arr.setInt32(16, io[4], false);
                return out;
            };
            var Rusha = function() {
                function Rusha(chunkSize) {
                    _classCallCheck(this, Rusha);
                    chunkSize = chunkSize || 65536;
                    if (chunkSize % 64 > 0) throw new Error("Chunk size must be a multiple of 128 bit");
                    this._offset = 0;
                    this._maxChunkLen = chunkSize;
                    this._padMaxChunkLen = padlen(chunkSize);
                    // The size of the heap is the sum of:
                    // 1. The padded input message size
                    // 2. The extended space the algorithm needs (320 byte)
                    // 3. The 160 bit state the algoritm uses
                    this._heap = new ArrayBuffer(ceilHeapSize(this._padMaxChunkLen + 320 + 20));
                    this._h32 = new Int32Array(this._heap);
                    this._h8 = new Int8Array(this._heap);
                    this._core = new RushaCore({
                        Int32Array: Int32Array
                    }, {}, this._heap);
                }
                Rusha.prototype._initState = function _initState(heap, padMsgLen) {
                    this._offset = 0;
                    var io = new Int32Array(heap, padMsgLen + 320, 5);
                    io[0] = 1732584193;
                    io[1] = -271733879;
                    io[2] = -1732584194;
                    io[3] = 271733878;
                    io[4] = -1009589776;
                };
                Rusha.prototype._padChunk = function _padChunk(chunkLen, msgLen) {
                    var padChunkLen = padlen(chunkLen);
                    var view = new Int32Array(this._heap, 0, padChunkLen >> 2);
                    padZeroes(view, chunkLen);
                    padData(view, chunkLen, msgLen);
                    return padChunkLen;
                };
                Rusha.prototype._write = function _write(data, chunkOffset, chunkLen, off) {
                    conv(data, this._h8, this._h32, chunkOffset, chunkLen, off || 0);
                };
                Rusha.prototype._coreCall = function _coreCall(data, chunkOffset, chunkLen, msgLen, finalize) {
                    var padChunkLen = chunkLen;
                    this._write(data, chunkOffset, chunkLen);
                    if (finalize) padChunkLen = this._padChunk(chunkLen, msgLen);
                    this._core.hash(padChunkLen, this._padMaxChunkLen);
                };
                Rusha.prototype.rawDigest = function rawDigest(str) {
                    var msgLen = str.byteLength || str.length || str.size || 0;
                    this._initState(this._heap, this._padMaxChunkLen);
                    var chunkOffset = 0, chunkLen = this._maxChunkLen;
                    for(chunkOffset = 0; msgLen > chunkOffset + chunkLen; chunkOffset += chunkLen)this._coreCall(str, chunkOffset, chunkLen, msgLen, false);
                    this._coreCall(str, chunkOffset, msgLen - chunkOffset, msgLen, true);
                    return getRawDigest(this._heap, this._padMaxChunkLen);
                };
                Rusha.prototype.digest = function digest(str) {
                    return toHex(this.rawDigest(str).buffer);
                };
                Rusha.prototype.digestFromString = function digestFromString(str) {
                    return this.digest(str);
                };
                Rusha.prototype.digestFromBuffer = function digestFromBuffer(str) {
                    return this.digest(str);
                };
                Rusha.prototype.digestFromArrayBuffer = function digestFromArrayBuffer(str) {
                    return this.digest(str);
                };
                Rusha.prototype.resetState = function resetState() {
                    this._initState(this._heap, this._padMaxChunkLen);
                    return this;
                };
                Rusha.prototype.append = function append(chunk) {
                    var chunkOffset = 0;
                    var chunkLen = chunk.byteLength || chunk.length || chunk.size || 0;
                    var turnOffset = this._offset % this._maxChunkLen;
                    var inputLen = void 0;
                    this._offset += chunkLen;
                    while(chunkOffset < chunkLen){
                        inputLen = Math.min(chunkLen - chunkOffset, this._maxChunkLen - turnOffset);
                        this._write(chunk, chunkOffset, inputLen, turnOffset);
                        turnOffset += inputLen;
                        chunkOffset += inputLen;
                        if (turnOffset === this._maxChunkLen) {
                            this._core.hash(this._maxChunkLen, this._padMaxChunkLen);
                            turnOffset = 0;
                        }
                    }
                    return this;
                };
                Rusha.prototype.getState = function getState() {
                    var turnOffset = this._offset % this._maxChunkLen;
                    var heap = void 0;
                    if (!turnOffset) {
                        var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
                        heap = io.buffer.slice(io.byteOffset, io.byteOffset + io.byteLength);
                    } else heap = this._heap.slice(0);
                    return {
                        offset: this._offset,
                        heap: heap
                    };
                };
                Rusha.prototype.setState = function setState(state) {
                    this._offset = state.offset;
                    if (state.heap.byteLength === 20) {
                        var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
                        io.set(new Int32Array(state.heap));
                    } else this._h32.set(new Int32Array(state.heap));
                    return this;
                };
                Rusha.prototype.rawEnd = function rawEnd() {
                    var msgLen = this._offset;
                    var chunkLen = msgLen % this._maxChunkLen;
                    var padChunkLen = this._padChunk(chunkLen, msgLen);
                    this._core.hash(padChunkLen, this._padMaxChunkLen);
                    var result = getRawDigest(this._heap, this._padMaxChunkLen);
                    this._initState(this._heap, this._padMaxChunkLen);
                    return result;
                };
                Rusha.prototype.end = function end() {
                    return toHex(this.rawEnd().buffer);
                };
                return Rusha;
            }();
            module1.exports = Rusha;
            module1.exports._core = RushaCore;
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            /* eslint-env commonjs, browser */ //
            // toHex
            //
            var precomputedHex = new Array(256);
            for(var i = 0; i < 256; i++)precomputedHex[i] = (i < 0x10 ? "0" : "") + i.toString(16);
            module1.exports.toHex = function(arrayBuffer) {
                var binarray = new Uint8Array(arrayBuffer);
                var res = new Array(arrayBuffer.byteLength);
                for(var _i = 0; _i < res.length; _i++)res[_i] = precomputedHex[binarray[_i]];
                return res.join("");
            };
            //
            // ceilHeapSize
            //
            module1.exports.ceilHeapSize = function(v) {
                // The asm.js spec says:
                // The heap object's byteLength must be either
                // 2^n for n in [12, 24) or 2^24 * n for n ≥ 1.
                // Also, byteLengths smaller than 2^16 are deprecated.
                var p = 0;
                // If v is smaller than 2^16, the smallest possible solution
                // is 2^16.
                if (v <= 65536) return 65536;
                // If v < 2^24, we round up to 2^n,
                // otherwise we round up to 2^24 * n.
                if (v < 16777216) {
                    for(p = 1; p < v; p = p << 1);
                } else {
                    for(p = 16777216; p < v; p += 16777216);
                }
                return p;
            };
            //
            // isDedicatedWorkerScope
            //
            module1.exports.isDedicatedWorkerScope = function(self1) {
                var isRunningInWorker = "WorkerGlobalScope" in self1 && self1 instanceof self1.WorkerGlobalScope;
                var isRunningInSharedWorker = "SharedWorkerGlobalScope" in self1 && self1 instanceof self1.SharedWorkerGlobalScope;
                var isRunningInServiceWorker = "ServiceWorkerGlobalScope" in self1 && self1 instanceof self1.ServiceWorkerGlobalScope;
                // Detects whether we run inside a dedicated worker or not.
                //
                // We can't just check for `DedicatedWorkerGlobalScope`, since IE11
                // has a bug where it only supports `WorkerGlobalScope`.
                //
                // Therefore, we consider us as running inside a dedicated worker
                // when we are running inside a worker, but not in a shared or service worker.
                //
                // When new types of workers are introduced, we will need to adjust this code.
                return isRunningInWorker && !isRunningInSharedWorker && !isRunningInServiceWorker;
            };
        /***/ },
        /* 2 */ /***/ function(module1, exports, __webpack_require__) {
            /* eslint-env commonjs, worker */ module1.exports = function() {
                var Rusha = __webpack_require__(0);
                var hashData = function(hasher, data, cb) {
                    try {
                        return cb(null, hasher.digest(data));
                    } catch (e) {
                        return cb(e);
                    }
                };
                var hashFile = function(hasher, readTotal, blockSize, file, cb) {
                    var reader = new self.FileReader();
                    reader.onloadend = function onloadend() {
                        if (reader.error) return cb(reader.error);
                        var buffer = reader.result;
                        readTotal += reader.result.byteLength;
                        try {
                            hasher.append(buffer);
                        } catch (e) {
                            cb(e);
                            return;
                        }
                        if (readTotal < file.size) hashFile(hasher, readTotal, blockSize, file, cb);
                        else cb(null, hasher.end());
                    };
                    reader.readAsArrayBuffer(file.slice(readTotal, readTotal + blockSize));
                };
                var workerBehaviourEnabled = true;
                self.onmessage = function(event) {
                    if (!workerBehaviourEnabled) return;
                    var data = event.data.data, file = event.data.file, id = event.data.id;
                    if (typeof id === "undefined") return;
                    if (!file && !data) return;
                    var blockSize = event.data.blockSize || 4194304;
                    var hasher = new Rusha(blockSize);
                    hasher.resetState();
                    var done = function(err, hash) {
                        if (!err) self.postMessage({
                            id: id,
                            hash: hash
                        });
                        else self.postMessage({
                            id: id,
                            error: err.name
                        });
                    };
                    if (data) hashData(hasher, data, done);
                    if (file) hashFile(hasher, 0, blockSize, file, done);
                };
                return function() {
                    workerBehaviourEnabled = false;
                };
            };
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            /* eslint-env commonjs, browser */ var work = __webpack_require__(4);
            var Rusha = __webpack_require__(0);
            var createHash = __webpack_require__(7);
            var runWorker = __webpack_require__(2);
            var _require = __webpack_require__(1), isDedicatedWorkerScope = _require.isDedicatedWorkerScope;
            var isRunningInDedicatedWorker = typeof self !== "undefined" && isDedicatedWorkerScope(self);
            Rusha.disableWorkerBehaviour = isRunningInDedicatedWorker ? runWorker() : function() {};
            Rusha.createWorker = function() {
                var worker = work(/*require.resolve*/ 2);
                var terminate = worker.terminate;
                worker.terminate = function() {
                    URL.revokeObjectURL(worker.objectURL);
                    terminate.call(worker);
                };
                return worker;
            };
            Rusha.createHash = createHash;
            module1.exports = Rusha;
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            function webpackBootstrapFunc(modules) {
                /******/ // The module cache
                /******/ var installedModules = {};
                /******/ // The require function
                /******/ function __webpack_require__(moduleId) {
                    /******/ // Check if module is in cache
                    /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
                    /******/ // Create a new module (and put it into the cache)
                    /******/ var module1 = installedModules[moduleId] = {
                        /******/ i: moduleId,
                        /******/ l: false,
                        /******/ exports: {}
                    };
                    /******/ // Execute the module function
                    /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
                    /******/ // Flag the module as loaded
                    /******/ module1.l = true;
                    /******/ // Return the exports of the module
                    /******/ return module1.exports;
                /******/ }
                /******/ // expose the modules object (__webpack_modules__)
                /******/ __webpack_require__.m = modules;
                /******/ // expose the module cache
                /******/ __webpack_require__.c = installedModules;
                /******/ // identity function for calling harmony imports with the correct context
                /******/ __webpack_require__.i = function(value) {
                    return value;
                };
                /******/ // define getter function for harmony exports
                /******/ __webpack_require__.d = function(exports, name, getter) {
                    /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                        /******/ configurable: false,
                        /******/ enumerable: true,
                        /******/ get: getter
                    });
                /******/ };
                /******/ // define __esModule on exports
                /******/ __webpack_require__.r = function(exports) {
                    /******/ Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                /******/ };
                /******/ // getDefaultExport function for compatibility with non-harmony modules
                /******/ __webpack_require__.n = function(module1) {
                    /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                        return module1["default"];
                    } : /******/ function getModuleExports() {
                        return module1;
                    };
                    /******/ __webpack_require__.d(getter, "a", getter);
                    /******/ return getter;
                /******/ };
                /******/ // Object.prototype.hasOwnProperty.call
                /******/ __webpack_require__.o = function(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                };
                /******/ // __webpack_public_path__
                /******/ __webpack_require__.p = "/";
                /******/ // on error function for async loading
                /******/ __webpack_require__.oe = function(err) {
                    console.error(err);
                    throw err;
                };
                var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
                return f.default || f // try to call default if defined to also support babel esmodule exports
                ;
            }
            var moduleNameReqExp = "[\\.|\\-|\\+|\\w|/|@]+";
            var dependencyRegExp = "\\((/\\*.*?\\*/)?s?.*?(" + moduleNameReqExp + ").*?\\)" // additional chars when output.pathinfo is true
            ;
            // http://stackoverflow.com/a/2593661/130442
            function quoteRegExp(str) {
                return (str + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
            }
            function getModuleDependencies(sources, module1, queueName) {
                var retval = {};
                retval[queueName] = [];
                var fnString = module1.toString();
                var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!wrapperSignature) return retval;
                var webpackRequireName = wrapperSignature[1];
                // main bundle deps
                var re = new RegExp("(\\\\n|\\W)" + quoteRegExp(webpackRequireName) + dependencyRegExp, "g");
                var match;
                while(match = re.exec(fnString)){
                    if (match[3] === "dll-reference") continue;
                    retval[queueName].push(match[3]);
                }
                // dll deps
                re = new RegExp("\\(" + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, "g");
                while(match = re.exec(fnString)){
                    if (!sources[match[2]]) {
                        retval[queueName].push(match[1]);
                        sources[match[2]] = __webpack_require__(match[1]).m;
                    }
                    retval[match[2]] = retval[match[2]] || [];
                    retval[match[2]].push(match[4]);
                }
                return retval;
            }
            function hasValuesInQueues(queues) {
                var keys = Object.keys(queues);
                return keys.reduce(function(hasValues, key) {
                    return hasValues || queues[key].length > 0;
                }, false);
            }
            function getRequiredModules(sources, moduleId) {
                var modulesQueue = {
                    main: [
                        moduleId
                    ]
                };
                var requiredModules = {
                    main: []
                };
                var seenModules = {
                    main: {}
                };
                while(hasValuesInQueues(modulesQueue)){
                    var queues = Object.keys(modulesQueue);
                    for(var i = 0; i < queues.length; i++){
                        var queueName = queues[i];
                        var queue = modulesQueue[queueName];
                        var moduleToCheck = queue.pop();
                        seenModules[queueName] = seenModules[queueName] || {};
                        if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue;
                        seenModules[queueName][moduleToCheck] = true;
                        requiredModules[queueName] = requiredModules[queueName] || [];
                        requiredModules[queueName].push(moduleToCheck);
                        var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
                        var newModulesKeys = Object.keys(newModules);
                        for(var j = 0; j < newModulesKeys.length; j++){
                            modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
                            modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
                        }
                    }
                }
                return requiredModules;
            }
            module1.exports = function(moduleId, options) {
                options = options || {};
                var sources = {
                    main: __webpack_require__.m
                };
                var requiredModules = options.all ? {
                    main: Object.keys(sources)
                } : getRequiredModules(sources, moduleId);
                var src = "";
                Object.keys(requiredModules).filter(function(m) {
                    return m !== "main";
                }).forEach(function(module1) {
                    var entryModule = 0;
                    while(requiredModules[module1][entryModule])entryModule++;
                    requiredModules[module1].push(entryModule);
                    sources[module1][entryModule] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })";
                    src = src + "var " + module1 + " = (" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(entryModule)) + ")({" + requiredModules[module1].map(function(id) {
                        return "" + JSON.stringify(id) + ": " + sources[module1][id].toString();
                    }).join(",") + "});\n";
                });
                src = src + "(" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(moduleId)) + ")({" + requiredModules.main.map(function(id) {
                    return "" + JSON.stringify(id) + ": " + sources.main[id].toString();
                }).join(",") + "})(self);";
                var blob = new window.Blob([
                    src
                ], {
                    type: "text/javascript"
                });
                if (options.bare) return blob;
                var URL1 = window.URL || window.webkitURL || window.mozURL || window.msURL;
                var workerUrl = URL1.createObjectURL(blob);
                var worker = new window.Worker(workerUrl);
                worker.objectURL = workerUrl;
                return worker;
            };
        /***/ },
        /* 5 */ /***/ function(module1, exports) {
            // The low-level RushCore module provides the heart of Rusha,
            // a high-speed sha1 implementation working on an Int32Array heap.
            // At first glance, the implementation seems complicated, however
            // with the SHA1 spec at hand, it is obvious this almost a textbook
            // implementation that has a few functions hand-inlined and a few loops
            // hand-unrolled.
            module1.exports = function RushaCore(stdlib$840, foreign$841, heap$842) {
                "use asm";
                var H$843 = new stdlib$840.Int32Array(heap$842);
                function hash$844(k$845, x$846) {
                    // k in bytes
                    k$845 = k$845 | 0;
                    x$846 = x$846 | 0;
                    var i$847 = 0, j$848 = 0, y0$849 = 0, z0$850 = 0, y1$851 = 0, z1$852 = 0, y2$853 = 0, z2$854 = 0, y3$855 = 0, z3$856 = 0, y4$857 = 0, z4$858 = 0, t0$859 = 0, t1$860 = 0;
                    y0$849 = H$843[x$846 + 320 >> 2] | 0;
                    y1$851 = H$843[x$846 + 324 >> 2] | 0;
                    y2$853 = H$843[x$846 + 328 >> 2] | 0;
                    y3$855 = H$843[x$846 + 332 >> 2] | 0;
                    y4$857 = H$843[x$846 + 336 >> 2] | 0;
                    for(i$847 = 0; (i$847 | 0) < (k$845 | 0); i$847 = i$847 + 64 | 0){
                        z0$850 = y0$849;
                        z1$852 = y1$851;
                        z2$854 = y2$853;
                        z3$856 = y3$855;
                        z4$858 = y4$857;
                        for(j$848 = 0; (j$848 | 0) < 64; j$848 = j$848 + 4 | 0){
                            t1$860 = H$843[i$847 + j$848 >> 2] | 0;
                            t0$859 = ((y0$849 << 5 | y0$849 >>> 27) + (y1$851 & y2$853 | ~y1$851 & y3$855) | 0) + ((t1$860 + y4$857 | 0) + 1518500249 | 0) | 0;
                            y4$857 = y3$855;
                            y3$855 = y2$853;
                            y2$853 = y1$851 << 30 | y1$851 >>> 2;
                            y1$851 = y0$849;
                            y0$849 = t0$859;
                            H$843[k$845 + j$848 >> 2] = t1$860;
                        }
                        for(j$848 = k$845 + 64 | 0; (j$848 | 0) < (k$845 + 80 | 0); j$848 = j$848 + 4 | 0){
                            t1$860 = (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) << 1 | (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) >>> 31;
                            t0$859 = ((y0$849 << 5 | y0$849 >>> 27) + (y1$851 & y2$853 | ~y1$851 & y3$855) | 0) + ((t1$860 + y4$857 | 0) + 1518500249 | 0) | 0;
                            y4$857 = y3$855;
                            y3$855 = y2$853;
                            y2$853 = y1$851 << 30 | y1$851 >>> 2;
                            y1$851 = y0$849;
                            y0$849 = t0$859;
                            H$843[j$848 >> 2] = t1$860;
                        }
                        for(j$848 = k$845 + 80 | 0; (j$848 | 0) < (k$845 + 160 | 0); j$848 = j$848 + 4 | 0){
                            t1$860 = (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) << 1 | (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) >>> 31;
                            t0$859 = ((y0$849 << 5 | y0$849 >>> 27) + (y1$851 ^ y2$853 ^ y3$855) | 0) + ((t1$860 + y4$857 | 0) + 1859775393 | 0) | 0;
                            y4$857 = y3$855;
                            y3$855 = y2$853;
                            y2$853 = y1$851 << 30 | y1$851 >>> 2;
                            y1$851 = y0$849;
                            y0$849 = t0$859;
                            H$843[j$848 >> 2] = t1$860;
                        }
                        for(j$848 = k$845 + 160 | 0; (j$848 | 0) < (k$845 + 240 | 0); j$848 = j$848 + 4 | 0){
                            t1$860 = (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) << 1 | (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) >>> 31;
                            t0$859 = ((y0$849 << 5 | y0$849 >>> 27) + (y1$851 & y2$853 | y1$851 & y3$855 | y2$853 & y3$855) | 0) + ((t1$860 + y4$857 | 0) - 1894007588 | 0) | 0;
                            y4$857 = y3$855;
                            y3$855 = y2$853;
                            y2$853 = y1$851 << 30 | y1$851 >>> 2;
                            y1$851 = y0$849;
                            y0$849 = t0$859;
                            H$843[j$848 >> 2] = t1$860;
                        }
                        for(j$848 = k$845 + 240 | 0; (j$848 | 0) < (k$845 + 320 | 0); j$848 = j$848 + 4 | 0){
                            t1$860 = (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) << 1 | (H$843[j$848 - 12 >> 2] ^ H$843[j$848 - 32 >> 2] ^ H$843[j$848 - 56 >> 2] ^ H$843[j$848 - 64 >> 2]) >>> 31;
                            t0$859 = ((y0$849 << 5 | y0$849 >>> 27) + (y1$851 ^ y2$853 ^ y3$855) | 0) + ((t1$860 + y4$857 | 0) - 899497514 | 0) | 0;
                            y4$857 = y3$855;
                            y3$855 = y2$853;
                            y2$853 = y1$851 << 30 | y1$851 >>> 2;
                            y1$851 = y0$849;
                            y0$849 = t0$859;
                            H$843[j$848 >> 2] = t1$860;
                        }
                        y0$849 = y0$849 + z0$850 | 0;
                        y1$851 = y1$851 + z1$852 | 0;
                        y2$853 = y2$853 + z2$854 | 0;
                        y3$855 = y3$855 + z3$856 | 0;
                        y4$857 = y4$857 + z4$858 | 0;
                    }
                    H$843[x$846 + 320 >> 2] = y0$849;
                    H$843[x$846 + 324 >> 2] = y1$851;
                    H$843[x$846 + 328 >> 2] = y2$853;
                    H$843[x$846 + 332 >> 2] = y3$855;
                    H$843[x$846 + 336 >> 2] = y4$857;
                }
                return {
                    hash: hash$844
                };
            };
        /***/ },
        /* 6 */ /***/ function(module1, exports) {
            var _this = this;
            /* eslint-env commonjs, browser */ var reader = void 0;
            if (typeof self !== "undefined" && typeof self.FileReaderSync !== "undefined") reader = new self.FileReaderSync();
            // Convert a binary string and write it to the heap.
            // A binary string is expected to only contain char codes < 256.
            var convStr = function(str, H8, H32, start, len, off) {
                var i = void 0, om = off % 4, lm = (len + om) % 4, j = len - lm;
                switch(om){
                    case 0:
                        H8[off] = str.charCodeAt(start + 3);
                    case 1:
                        H8[off + 1 - (om << 1) | 0] = str.charCodeAt(start + 2);
                    case 2:
                        H8[off + 2 - (om << 1) | 0] = str.charCodeAt(start + 1);
                    case 3:
                        H8[off + 3 - (om << 1) | 0] = str.charCodeAt(start);
                }
                if (len < lm + (4 - om)) return;
                for(i = 4 - om; i < j; i = i + 4 | 0)H32[off + i >> 2] = str.charCodeAt(start + i) << 24 | str.charCodeAt(start + i + 1) << 16 | str.charCodeAt(start + i + 2) << 8 | str.charCodeAt(start + i + 3);
                switch(lm){
                    case 3:
                        H8[off + j + 1 | 0] = str.charCodeAt(start + j + 2);
                    case 2:
                        H8[off + j + 2 | 0] = str.charCodeAt(start + j + 1);
                    case 1:
                        H8[off + j + 3 | 0] = str.charCodeAt(start + j);
                }
            };
            // Convert a buffer or array and write it to the heap.
            // The buffer or array is expected to only contain elements < 256.
            var convBuf = function(buf, H8, H32, start, len, off) {
                var i = void 0, om = off % 4, lm = (len + om) % 4, j = len - lm;
                switch(om){
                    case 0:
                        H8[off] = buf[start + 3];
                    case 1:
                        H8[off + 1 - (om << 1) | 0] = buf[start + 2];
                    case 2:
                        H8[off + 2 - (om << 1) | 0] = buf[start + 1];
                    case 3:
                        H8[off + 3 - (om << 1) | 0] = buf[start];
                }
                if (len < lm + (4 - om)) return;
                for(i = 4 - om; i < j; i = i + 4 | 0)H32[off + i >> 2 | 0] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];
                switch(lm){
                    case 3:
                        H8[off + j + 1 | 0] = buf[start + j + 2];
                    case 2:
                        H8[off + j + 2 | 0] = buf[start + j + 1];
                    case 1:
                        H8[off + j + 3 | 0] = buf[start + j];
                }
            };
            var convBlob = function(blob, H8, H32, start, len, off) {
                var i = void 0, om = off % 4, lm = (len + om) % 4, j = len - lm;
                var buf = new Uint8Array(reader.readAsArrayBuffer(blob.slice(start, start + len)));
                switch(om){
                    case 0:
                        H8[off] = buf[3];
                    case 1:
                        H8[off + 1 - (om << 1) | 0] = buf[2];
                    case 2:
                        H8[off + 2 - (om << 1) | 0] = buf[1];
                    case 3:
                        H8[off + 3 - (om << 1) | 0] = buf[0];
                }
                if (len < lm + (4 - om)) return;
                for(i = 4 - om; i < j; i = i + 4 | 0)H32[off + i >> 2 | 0] = buf[i] << 24 | buf[i + 1] << 16 | buf[i + 2] << 8 | buf[i + 3];
                switch(lm){
                    case 3:
                        H8[off + j + 1 | 0] = buf[j + 2];
                    case 2:
                        H8[off + j + 2 | 0] = buf[j + 1];
                    case 1:
                        H8[off + j + 3 | 0] = buf[j];
                }
            };
            module1.exports = function(data, H8, H32, start, len, off) {
                if (typeof data === "string") return convStr(data, H8, H32, start, len, off);
                if (data instanceof Array) return convBuf(data, H8, H32, start, len, off);
                // Safely doing a Buffer check using "this" to avoid Buffer polyfill to be included in the dist
                if (_this && _this.Buffer && _this.Buffer.isBuffer(data)) return convBuf(data, H8, H32, start, len, off);
                if (data instanceof ArrayBuffer) return convBuf(new Uint8Array(data), H8, H32, start, len, off);
                if (data.buffer instanceof ArrayBuffer) return convBuf(new Uint8Array(data.buffer, data.byteOffset, data.byteLength), H8, H32, start, len, off);
                if (data instanceof Blob) return convBlob(data, H8, H32, start, len, off);
                throw new Error("Unsupported data type.");
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            /* eslint-env commonjs, browser */ var Rusha = __webpack_require__(0);
            var _require = __webpack_require__(1), toHex = _require.toHex;
            var Hash = function() {
                function Hash() {
                    _classCallCheck(this, Hash);
                    this._rusha = new Rusha();
                    this._rusha.resetState();
                }
                Hash.prototype.update = function update(data) {
                    this._rusha.append(data);
                    return this;
                };
                Hash.prototype.digest = function digest(encoding) {
                    var digest = this._rusha.rawEnd().buffer;
                    if (!encoding) return digest;
                    if (encoding === "hex") return toHex(digest);
                    throw new Error("unsupported digest encoding");
                };
                _createClass(Hash, [
                    {
                        key: "state",
                        get: function() {
                            return this._rusha.getState();
                        },
                        set: function(state) {
                            this._rusha.setState(state);
                        }
                    }
                ]);
                return Hash;
            }();
            module1.exports = function() {
                return new Hash();
            };
        /***/ }
    ]);
});

},{}],"8NTW2":[function(require,module,exports) {
const Rusha = require("4e98e3be41b84d46");
let worker;
let nextTaskId;
let cbs;
function init() {
    worker = Rusha.createWorker();
    nextTaskId = 1;
    cbs = {} // taskId -> cb
    ;
    worker.onmessage = function onRushaMessage(e) {
        const taskId = e.data.id;
        const cb = cbs[taskId];
        delete cbs[taskId];
        if (e.data.error != null) cb(new Error("Rusha worker error: " + e.data.error));
        else cb(null, e.data.hash);
    };
}
function sha1(buf, cb) {
    if (!worker) init();
    cbs[nextTaskId] = cb;
    worker.postMessage({
        id: nextTaskId,
        data: buf
    });
    nextTaskId += 1;
}
module.exports = sha1;

},{"4e98e3be41b84d46":"7ePab"}]},["imvlr"], null, "parcelRequire55a5")

//# sourceMappingURL=p2pt.b49c20aa.js.map
