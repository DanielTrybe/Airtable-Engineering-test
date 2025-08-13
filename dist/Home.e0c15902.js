// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"znlhE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "16b17c40e0c15902";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7uL8I":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$5bdd = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$5bdd.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$5bdd.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _material = require("@mui/material");
var _intex = require("../../hooks/assignLanes/intex");
var _timelineItems = require("../../hooks/assignLanes/timelineItems");
var _timelineItemsDefault = parcelHelpers.interopDefault(_timelineItems);
var _renderLanes = require("./components/molecules/RenderLanes");
var _renderLanesDefault = parcelHelpers.interopDefault(_renderLanes);
var _s = $RefreshSig$();
const initialState = (0, _intex.assignLanes)((0, _timelineItemsDefault.default));
function lanesReducer(state, action) {
    switch(action.type){
        case "SET_LANES":
            return (0, _intex.assignLanes)(action.payload);
        default:
            return state;
    }
}
function Home() {
    _s();
    const [lanes, dispatch] = (0, _react.useReducer)(lanesReducer, initialState);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                variant: "h3",
                mb: 3,
                children: "Data lanes (Events)"
            }, void 0, false, {
                fileName: "src/pages/Home/index.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _renderLanesDefault.default), {
                lanes: lanes
            }, void 0, false, {
                fileName: "src/pages/Home/index.js",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Home/index.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Home, "HD5PrKV0+x37J2JZhjjnqVx8HpE=");
_c = Home;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(Home);
var _c, _c1;
$RefreshReg$(_c, "Home");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$5bdd.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@mui/material":"3KIXa","../../hooks/assignLanes/intex":"6MJe4","../../hooks/assignLanes/timelineItems":"lwwcp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","./components/molecules/RenderLanes":"7JibJ"}],"6MJe4":[function(require,module,exports,__globalThis) {
/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assignLanes", ()=>assignLanes);
function assignLanes(items) {
    const sortedItems = items.sort((a, b)=>new Date(a.start) - new Date(b.start));
    const lanes = [];
    function assignItemToLane(item) {
        for (const lane of lanes)if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
            lane.push(item);
            return;
        }
        lanes.push([
            item
        ]);
    }
    for (const item of sortedItems)assignItemToLane(item);
    return lanes;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lwwcp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timelineItems", ()=>timelineItems);
const timelineItems = [
    {
        id: 1,
        start: "2021-01-14",
        end: "2021-01-22",
        name: "Recruit translators"
    },
    {
        id: 2,
        start: "2021-01-17",
        end: "2021-01-31",
        name: "Create lesson plan 1"
    },
    {
        id: 3,
        start: "2021-02-05",
        end: "2021-02-13",
        name: "Translate phrases for lesson 1"
    },
    {
        id: 4,
        start: "2021-02-07",
        end: "2021-03-08",
        name: "Create dark mode design"
    },
    {
        id: 5,
        start: "2021-02-14",
        end: "2021-02-22",
        name: "Recruit copyeditors"
    },
    {
        id: 6,
        start: "2021-02-18",
        end: "2021-02-24",
        name: "Proofread translations for lesson 1"
    },
    {
        id: 7,
        start: "2021-02-20",
        end: "2021-02-22",
        name: "Finalize logo"
    },
    {
        id: 8,
        start: "2021-02-21",
        end: "2021-03-22",
        name: "Implement dark mode"
    },
    {
        id: 9,
        start: "2021-02-21",
        end: "2021-02-28",
        name: "Finalize lesson plan 1"
    },
    {
        id: 10,
        start: "2021-02-23",
        end: "2021-02-23",
        name: "Approve logo"
    },
    {
        id: 11,
        start: "2021-03-03",
        end: "2021-03-29",
        name: "Create lesson plan 2"
    },
    {
        id: 12,
        start: "2021-03-30",
        end: "2021-04-08",
        name: "Translate phrases for lesson 2"
    },
    {
        id: 13,
        start: "2021-04-01",
        end: "2021-04-04",
        name: "Debug mobile notification error"
    },
    {
        id: 14,
        start: "2021-04-05",
        end: "2021-04-06",
        name: "Test debugged mobile notifications"
    },
    {
        id: 15,
        start: "2021-04-16",
        end: "2021-04-30",
        name: "Beta test"
    },
    {
        id: 16,
        start: "2021-05-01",
        end: "2021-05-01",
        name: "Launch day"
    }
];
exports.default = timelineItems;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7JibJ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$f1a8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$f1a8.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$f1a8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _dateFns = require("date-fns");
var _material = require("@mui/material");
var _react = require("react");
var _renderEvents = require("./RenderEvents");
var _renderEventsDefault = parcelHelpers.interopDefault(_renderEvents);
function RenderLanes({ lanes }) {
    const all = lanes.flat();
    const min = new Date(Math.min(...all.map((date)=>new Date(date.start))));
    const max = new Date(Math.min(...all.map((date)=>new Date(date.end))));
    const totalDays = (0, _dateFns.differenceInCalendarDays)(max, min) + 1;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
        display: "flex",
        gap: 3,
        flexDirection: "column",
        width: "100%",
        children: lanes && lanes.length > 0 && lanes.map((lane, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _renderEventsDefault.default), {
                eventLine: lane,
                minDay: min,
                totalDays: totalDays
            }, index, false, {
                fileName: "src/pages/Home/components/molecules/RenderLanes.js",
                lineNumber: 17,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "src/pages/Home/components/molecules/RenderLanes.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = RenderLanes;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(RenderLanes);
var _c, _c1;
$RefreshReg$(_c, "RenderLanes");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$f1a8.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","date-fns":"apLUd","@mui/material":"3KIXa","./RenderEvents":"20WWU"}],"apLUd":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
parcelHelpers.exportAll(_addJs, exports);
var _addBusinessDaysJs = require("./addBusinessDays.js");
parcelHelpers.exportAll(_addBusinessDaysJs, exports);
var _addDaysJs = require("./addDays.js");
parcelHelpers.exportAll(_addDaysJs, exports);
var _addHoursJs = require("./addHours.js");
parcelHelpers.exportAll(_addHoursJs, exports);
var _addISOWeekYearsJs = require("./addISOWeekYears.js");
parcelHelpers.exportAll(_addISOWeekYearsJs, exports);
var _addMillisecondsJs = require("./addMilliseconds.js");
parcelHelpers.exportAll(_addMillisecondsJs, exports);
var _addMinutesJs = require("./addMinutes.js");
parcelHelpers.exportAll(_addMinutesJs, exports);
var _addMonthsJs = require("./addMonths.js");
parcelHelpers.exportAll(_addMonthsJs, exports);
var _addQuartersJs = require("./addQuarters.js");
parcelHelpers.exportAll(_addQuartersJs, exports);
var _addSecondsJs = require("./addSeconds.js");
parcelHelpers.exportAll(_addSecondsJs, exports);
var _addWeeksJs = require("./addWeeks.js");
parcelHelpers.exportAll(_addWeeksJs, exports);
var _addYearsJs = require("./addYears.js");
parcelHelpers.exportAll(_addYearsJs, exports);
var _areIntervalsOverlappingJs = require("./areIntervalsOverlapping.js");
parcelHelpers.exportAll(_areIntervalsOverlappingJs, exports);
var _clampJs = require("./clamp.js");
parcelHelpers.exportAll(_clampJs, exports);
var _closestIndexToJs = require("./closestIndexTo.js");
parcelHelpers.exportAll(_closestIndexToJs, exports);
var _closestToJs = require("./closestTo.js");
parcelHelpers.exportAll(_closestToJs, exports);
var _compareAscJs = require("./compareAsc.js");
parcelHelpers.exportAll(_compareAscJs, exports);
var _compareDescJs = require("./compareDesc.js");
parcelHelpers.exportAll(_compareDescJs, exports);
var _constructFromJs = require("./constructFrom.js");
parcelHelpers.exportAll(_constructFromJs, exports);
var _constructNowJs = require("./constructNow.js");
parcelHelpers.exportAll(_constructNowJs, exports);
var _daysToWeeksJs = require("./daysToWeeks.js");
parcelHelpers.exportAll(_daysToWeeksJs, exports);
var _differenceInBusinessDaysJs = require("./differenceInBusinessDays.js");
parcelHelpers.exportAll(_differenceInBusinessDaysJs, exports);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
parcelHelpers.exportAll(_differenceInCalendarDaysJs, exports);
var _differenceInCalendarISOWeekYearsJs = require("./differenceInCalendarISOWeekYears.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeekYearsJs, exports);
var _differenceInCalendarISOWeeksJs = require("./differenceInCalendarISOWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeeksJs, exports);
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
parcelHelpers.exportAll(_differenceInCalendarMonthsJs, exports);
var _differenceInCalendarQuartersJs = require("./differenceInCalendarQuarters.js");
parcelHelpers.exportAll(_differenceInCalendarQuartersJs, exports);
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarWeeksJs, exports);
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
parcelHelpers.exportAll(_differenceInCalendarYearsJs, exports);
var _differenceInDaysJs = require("./differenceInDays.js");
parcelHelpers.exportAll(_differenceInDaysJs, exports);
var _differenceInHoursJs = require("./differenceInHours.js");
parcelHelpers.exportAll(_differenceInHoursJs, exports);
var _differenceInISOWeekYearsJs = require("./differenceInISOWeekYears.js");
parcelHelpers.exportAll(_differenceInISOWeekYearsJs, exports);
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
parcelHelpers.exportAll(_differenceInMillisecondsJs, exports);
var _differenceInMinutesJs = require("./differenceInMinutes.js");
parcelHelpers.exportAll(_differenceInMinutesJs, exports);
var _differenceInMonthsJs = require("./differenceInMonths.js");
parcelHelpers.exportAll(_differenceInMonthsJs, exports);
var _differenceInQuartersJs = require("./differenceInQuarters.js");
parcelHelpers.exportAll(_differenceInQuartersJs, exports);
var _differenceInSecondsJs = require("./differenceInSeconds.js");
parcelHelpers.exportAll(_differenceInSecondsJs, exports);
var _differenceInWeeksJs = require("./differenceInWeeks.js");
parcelHelpers.exportAll(_differenceInWeeksJs, exports);
var _differenceInYearsJs = require("./differenceInYears.js");
parcelHelpers.exportAll(_differenceInYearsJs, exports);
var _eachDayOfIntervalJs = require("./eachDayOfInterval.js");
parcelHelpers.exportAll(_eachDayOfIntervalJs, exports);
var _eachHourOfIntervalJs = require("./eachHourOfInterval.js");
parcelHelpers.exportAll(_eachHourOfIntervalJs, exports);
var _eachMinuteOfIntervalJs = require("./eachMinuteOfInterval.js");
parcelHelpers.exportAll(_eachMinuteOfIntervalJs, exports);
var _eachMonthOfIntervalJs = require("./eachMonthOfInterval.js");
parcelHelpers.exportAll(_eachMonthOfIntervalJs, exports);
var _eachQuarterOfIntervalJs = require("./eachQuarterOfInterval.js");
parcelHelpers.exportAll(_eachQuarterOfIntervalJs, exports);
var _eachWeekOfIntervalJs = require("./eachWeekOfInterval.js");
parcelHelpers.exportAll(_eachWeekOfIntervalJs, exports);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
parcelHelpers.exportAll(_eachWeekendOfIntervalJs, exports);
var _eachWeekendOfMonthJs = require("./eachWeekendOfMonth.js");
parcelHelpers.exportAll(_eachWeekendOfMonthJs, exports);
var _eachWeekendOfYearJs = require("./eachWeekendOfYear.js");
parcelHelpers.exportAll(_eachWeekendOfYearJs, exports);
var _eachYearOfIntervalJs = require("./eachYearOfInterval.js");
parcelHelpers.exportAll(_eachYearOfIntervalJs, exports);
var _endOfDayJs = require("./endOfDay.js");
parcelHelpers.exportAll(_endOfDayJs, exports);
var _endOfDecadeJs = require("./endOfDecade.js");
parcelHelpers.exportAll(_endOfDecadeJs, exports);
var _endOfHourJs = require("./endOfHour.js");
parcelHelpers.exportAll(_endOfHourJs, exports);
var _endOfISOWeekJs = require("./endOfISOWeek.js");
parcelHelpers.exportAll(_endOfISOWeekJs, exports);
var _endOfISOWeekYearJs = require("./endOfISOWeekYear.js");
parcelHelpers.exportAll(_endOfISOWeekYearJs, exports);
var _endOfMinuteJs = require("./endOfMinute.js");
parcelHelpers.exportAll(_endOfMinuteJs, exports);
var _endOfMonthJs = require("./endOfMonth.js");
parcelHelpers.exportAll(_endOfMonthJs, exports);
var _endOfQuarterJs = require("./endOfQuarter.js");
parcelHelpers.exportAll(_endOfQuarterJs, exports);
var _endOfSecondJs = require("./endOfSecond.js");
parcelHelpers.exportAll(_endOfSecondJs, exports);
var _endOfTodayJs = require("./endOfToday.js");
parcelHelpers.exportAll(_endOfTodayJs, exports);
var _endOfTomorrowJs = require("./endOfTomorrow.js");
parcelHelpers.exportAll(_endOfTomorrowJs, exports);
var _endOfWeekJs = require("./endOfWeek.js");
parcelHelpers.exportAll(_endOfWeekJs, exports);
var _endOfYearJs = require("./endOfYear.js");
parcelHelpers.exportAll(_endOfYearJs, exports);
var _endOfYesterdayJs = require("./endOfYesterday.js");
parcelHelpers.exportAll(_endOfYesterdayJs, exports);
var _formatJs = require("./format.js");
parcelHelpers.exportAll(_formatJs, exports);
var _formatDistanceJs = require("./formatDistance.js");
parcelHelpers.exportAll(_formatDistanceJs, exports);
var _formatDistanceStrictJs = require("./formatDistanceStrict.js");
parcelHelpers.exportAll(_formatDistanceStrictJs, exports);
var _formatDistanceToNowJs = require("./formatDistanceToNow.js");
parcelHelpers.exportAll(_formatDistanceToNowJs, exports);
var _formatDistanceToNowStrictJs = require("./formatDistanceToNowStrict.js");
parcelHelpers.exportAll(_formatDistanceToNowStrictJs, exports);
var _formatDurationJs = require("./formatDuration.js");
parcelHelpers.exportAll(_formatDurationJs, exports);
var _formatISOJs = require("./formatISO.js");
parcelHelpers.exportAll(_formatISOJs, exports);
var _formatISO9075Js = require("./formatISO9075.js");
parcelHelpers.exportAll(_formatISO9075Js, exports);
var _formatISODurationJs = require("./formatISODuration.js");
parcelHelpers.exportAll(_formatISODurationJs, exports);
var _formatRFC3339Js = require("./formatRFC3339.js");
parcelHelpers.exportAll(_formatRFC3339Js, exports);
var _formatRFC7231Js = require("./formatRFC7231.js");
parcelHelpers.exportAll(_formatRFC7231Js, exports);
var _formatRelativeJs = require("./formatRelative.js");
parcelHelpers.exportAll(_formatRelativeJs, exports);
var _fromUnixTimeJs = require("./fromUnixTime.js");
parcelHelpers.exportAll(_fromUnixTimeJs, exports);
var _getDateJs = require("./getDate.js");
parcelHelpers.exportAll(_getDateJs, exports);
var _getDayJs = require("./getDay.js");
parcelHelpers.exportAll(_getDayJs, exports);
var _getDayOfYearJs = require("./getDayOfYear.js");
parcelHelpers.exportAll(_getDayOfYearJs, exports);
var _getDaysInMonthJs = require("./getDaysInMonth.js");
parcelHelpers.exportAll(_getDaysInMonthJs, exports);
var _getDaysInYearJs = require("./getDaysInYear.js");
parcelHelpers.exportAll(_getDaysInYearJs, exports);
var _getDecadeJs = require("./getDecade.js");
parcelHelpers.exportAll(_getDecadeJs, exports);
var _getDefaultOptionsJs = require("./getDefaultOptions.js");
parcelHelpers.exportAll(_getDefaultOptionsJs, exports);
var _getHoursJs = require("./getHours.js");
parcelHelpers.exportAll(_getHoursJs, exports);
var _getISODayJs = require("./getISODay.js");
parcelHelpers.exportAll(_getISODayJs, exports);
var _getISOWeekJs = require("./getISOWeek.js");
parcelHelpers.exportAll(_getISOWeekJs, exports);
var _getISOWeekYearJs = require("./getISOWeekYear.js");
parcelHelpers.exportAll(_getISOWeekYearJs, exports);
var _getISOWeeksInYearJs = require("./getISOWeeksInYear.js");
parcelHelpers.exportAll(_getISOWeeksInYearJs, exports);
var _getMillisecondsJs = require("./getMilliseconds.js");
parcelHelpers.exportAll(_getMillisecondsJs, exports);
var _getMinutesJs = require("./getMinutes.js");
parcelHelpers.exportAll(_getMinutesJs, exports);
var _getMonthJs = require("./getMonth.js");
parcelHelpers.exportAll(_getMonthJs, exports);
var _getOverlappingDaysInIntervalsJs = require("./getOverlappingDaysInIntervals.js");
parcelHelpers.exportAll(_getOverlappingDaysInIntervalsJs, exports);
var _getQuarterJs = require("./getQuarter.js");
parcelHelpers.exportAll(_getQuarterJs, exports);
var _getSecondsJs = require("./getSeconds.js");
parcelHelpers.exportAll(_getSecondsJs, exports);
var _getTimeJs = require("./getTime.js");
parcelHelpers.exportAll(_getTimeJs, exports);
var _getUnixTimeJs = require("./getUnixTime.js");
parcelHelpers.exportAll(_getUnixTimeJs, exports);
var _getWeekJs = require("./getWeek.js");
parcelHelpers.exportAll(_getWeekJs, exports);
var _getWeekOfMonthJs = require("./getWeekOfMonth.js");
parcelHelpers.exportAll(_getWeekOfMonthJs, exports);
var _getWeekYearJs = require("./getWeekYear.js");
parcelHelpers.exportAll(_getWeekYearJs, exports);
var _getWeeksInMonthJs = require("./getWeeksInMonth.js");
parcelHelpers.exportAll(_getWeeksInMonthJs, exports);
var _getYearJs = require("./getYear.js");
parcelHelpers.exportAll(_getYearJs, exports);
var _hoursToMillisecondsJs = require("./hoursToMilliseconds.js");
parcelHelpers.exportAll(_hoursToMillisecondsJs, exports);
var _hoursToMinutesJs = require("./hoursToMinutes.js");
parcelHelpers.exportAll(_hoursToMinutesJs, exports);
var _hoursToSecondsJs = require("./hoursToSeconds.js");
parcelHelpers.exportAll(_hoursToSecondsJs, exports);
var _intervalJs = require("./interval.js");
parcelHelpers.exportAll(_intervalJs, exports);
var _intervalToDurationJs = require("./intervalToDuration.js");
parcelHelpers.exportAll(_intervalToDurationJs, exports);
var _intlFormatJs = require("./intlFormat.js");
parcelHelpers.exportAll(_intlFormatJs, exports);
var _intlFormatDistanceJs = require("./intlFormatDistance.js");
parcelHelpers.exportAll(_intlFormatDistanceJs, exports);
var _isAfterJs = require("./isAfter.js");
parcelHelpers.exportAll(_isAfterJs, exports);
var _isBeforeJs = require("./isBefore.js");
parcelHelpers.exportAll(_isBeforeJs, exports);
var _isDateJs = require("./isDate.js");
parcelHelpers.exportAll(_isDateJs, exports);
var _isEqualJs = require("./isEqual.js");
parcelHelpers.exportAll(_isEqualJs, exports);
var _isExistsJs = require("./isExists.js");
parcelHelpers.exportAll(_isExistsJs, exports);
var _isFirstDayOfMonthJs = require("./isFirstDayOfMonth.js");
parcelHelpers.exportAll(_isFirstDayOfMonthJs, exports);
var _isFridayJs = require("./isFriday.js");
parcelHelpers.exportAll(_isFridayJs, exports);
var _isFutureJs = require("./isFuture.js");
parcelHelpers.exportAll(_isFutureJs, exports);
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
parcelHelpers.exportAll(_isLastDayOfMonthJs, exports);
var _isLeapYearJs = require("./isLeapYear.js");
parcelHelpers.exportAll(_isLeapYearJs, exports);
var _isMatchJs = require("./isMatch.js");
parcelHelpers.exportAll(_isMatchJs, exports);
var _isMondayJs = require("./isMonday.js");
parcelHelpers.exportAll(_isMondayJs, exports);
var _isPastJs = require("./isPast.js");
parcelHelpers.exportAll(_isPastJs, exports);
var _isSameDayJs = require("./isSameDay.js");
parcelHelpers.exportAll(_isSameDayJs, exports);
var _isSameHourJs = require("./isSameHour.js");
parcelHelpers.exportAll(_isSameHourJs, exports);
var _isSameISOWeekJs = require("./isSameISOWeek.js");
parcelHelpers.exportAll(_isSameISOWeekJs, exports);
var _isSameISOWeekYearJs = require("./isSameISOWeekYear.js");
parcelHelpers.exportAll(_isSameISOWeekYearJs, exports);
var _isSameMinuteJs = require("./isSameMinute.js");
parcelHelpers.exportAll(_isSameMinuteJs, exports);
var _isSameMonthJs = require("./isSameMonth.js");
parcelHelpers.exportAll(_isSameMonthJs, exports);
var _isSameQuarterJs = require("./isSameQuarter.js");
parcelHelpers.exportAll(_isSameQuarterJs, exports);
var _isSameSecondJs = require("./isSameSecond.js");
parcelHelpers.exportAll(_isSameSecondJs, exports);
var _isSameWeekJs = require("./isSameWeek.js");
parcelHelpers.exportAll(_isSameWeekJs, exports);
var _isSameYearJs = require("./isSameYear.js");
parcelHelpers.exportAll(_isSameYearJs, exports);
var _isSaturdayJs = require("./isSaturday.js");
parcelHelpers.exportAll(_isSaturdayJs, exports);
var _isSundayJs = require("./isSunday.js");
parcelHelpers.exportAll(_isSundayJs, exports);
var _isThisHourJs = require("./isThisHour.js");
parcelHelpers.exportAll(_isThisHourJs, exports);
var _isThisISOWeekJs = require("./isThisISOWeek.js");
parcelHelpers.exportAll(_isThisISOWeekJs, exports);
var _isThisMinuteJs = require("./isThisMinute.js");
parcelHelpers.exportAll(_isThisMinuteJs, exports);
var _isThisMonthJs = require("./isThisMonth.js");
parcelHelpers.exportAll(_isThisMonthJs, exports);
var _isThisQuarterJs = require("./isThisQuarter.js");
parcelHelpers.exportAll(_isThisQuarterJs, exports);
var _isThisSecondJs = require("./isThisSecond.js");
parcelHelpers.exportAll(_isThisSecondJs, exports);
var _isThisWeekJs = require("./isThisWeek.js");
parcelHelpers.exportAll(_isThisWeekJs, exports);
var _isThisYearJs = require("./isThisYear.js");
parcelHelpers.exportAll(_isThisYearJs, exports);
var _isThursdayJs = require("./isThursday.js");
parcelHelpers.exportAll(_isThursdayJs, exports);
var _isTodayJs = require("./isToday.js");
parcelHelpers.exportAll(_isTodayJs, exports);
var _isTomorrowJs = require("./isTomorrow.js");
parcelHelpers.exportAll(_isTomorrowJs, exports);
var _isTuesdayJs = require("./isTuesday.js");
parcelHelpers.exportAll(_isTuesdayJs, exports);
var _isValidJs = require("./isValid.js");
parcelHelpers.exportAll(_isValidJs, exports);
var _isWednesdayJs = require("./isWednesday.js");
parcelHelpers.exportAll(_isWednesdayJs, exports);
var _isWeekendJs = require("./isWeekend.js");
parcelHelpers.exportAll(_isWeekendJs, exports);
var _isWithinIntervalJs = require("./isWithinInterval.js");
parcelHelpers.exportAll(_isWithinIntervalJs, exports);
var _isYesterdayJs = require("./isYesterday.js");
parcelHelpers.exportAll(_isYesterdayJs, exports);
var _lastDayOfDecadeJs = require("./lastDayOfDecade.js");
parcelHelpers.exportAll(_lastDayOfDecadeJs, exports);
var _lastDayOfISOWeekJs = require("./lastDayOfISOWeek.js");
parcelHelpers.exportAll(_lastDayOfISOWeekJs, exports);
var _lastDayOfISOWeekYearJs = require("./lastDayOfISOWeekYear.js");
parcelHelpers.exportAll(_lastDayOfISOWeekYearJs, exports);
var _lastDayOfMonthJs = require("./lastDayOfMonth.js");
parcelHelpers.exportAll(_lastDayOfMonthJs, exports);
var _lastDayOfQuarterJs = require("./lastDayOfQuarter.js");
parcelHelpers.exportAll(_lastDayOfQuarterJs, exports);
var _lastDayOfWeekJs = require("./lastDayOfWeek.js");
parcelHelpers.exportAll(_lastDayOfWeekJs, exports);
var _lastDayOfYearJs = require("./lastDayOfYear.js");
parcelHelpers.exportAll(_lastDayOfYearJs, exports);
var _lightFormatJs = require("./lightFormat.js");
parcelHelpers.exportAll(_lightFormatJs, exports);
var _maxJs = require("./max.js");
parcelHelpers.exportAll(_maxJs, exports);
var _millisecondsJs = require("./milliseconds.js");
parcelHelpers.exportAll(_millisecondsJs, exports);
var _millisecondsToHoursJs = require("./millisecondsToHours.js");
parcelHelpers.exportAll(_millisecondsToHoursJs, exports);
var _millisecondsToMinutesJs = require("./millisecondsToMinutes.js");
parcelHelpers.exportAll(_millisecondsToMinutesJs, exports);
var _millisecondsToSecondsJs = require("./millisecondsToSeconds.js");
parcelHelpers.exportAll(_millisecondsToSecondsJs, exports);
var _minJs = require("./min.js");
parcelHelpers.exportAll(_minJs, exports);
var _minutesToHoursJs = require("./minutesToHours.js");
parcelHelpers.exportAll(_minutesToHoursJs, exports);
var _minutesToMillisecondsJs = require("./minutesToMilliseconds.js");
parcelHelpers.exportAll(_minutesToMillisecondsJs, exports);
var _minutesToSecondsJs = require("./minutesToSeconds.js");
parcelHelpers.exportAll(_minutesToSecondsJs, exports);
var _monthsToQuartersJs = require("./monthsToQuarters.js");
parcelHelpers.exportAll(_monthsToQuartersJs, exports);
var _monthsToYearsJs = require("./monthsToYears.js");
parcelHelpers.exportAll(_monthsToYearsJs, exports);
var _nextDayJs = require("./nextDay.js");
parcelHelpers.exportAll(_nextDayJs, exports);
var _nextFridayJs = require("./nextFriday.js");
parcelHelpers.exportAll(_nextFridayJs, exports);
var _nextMondayJs = require("./nextMonday.js");
parcelHelpers.exportAll(_nextMondayJs, exports);
var _nextSaturdayJs = require("./nextSaturday.js");
parcelHelpers.exportAll(_nextSaturdayJs, exports);
var _nextSundayJs = require("./nextSunday.js");
parcelHelpers.exportAll(_nextSundayJs, exports);
var _nextThursdayJs = require("./nextThursday.js");
parcelHelpers.exportAll(_nextThursdayJs, exports);
var _nextTuesdayJs = require("./nextTuesday.js");
parcelHelpers.exportAll(_nextTuesdayJs, exports);
var _nextWednesdayJs = require("./nextWednesday.js");
parcelHelpers.exportAll(_nextWednesdayJs, exports);
var _parseJs = require("./parse.js");
parcelHelpers.exportAll(_parseJs, exports);
var _parseISOJs = require("./parseISO.js");
parcelHelpers.exportAll(_parseISOJs, exports);
var _parseJSONJs = require("./parseJSON.js");
parcelHelpers.exportAll(_parseJSONJs, exports);
var _previousDayJs = require("./previousDay.js");
parcelHelpers.exportAll(_previousDayJs, exports);
var _previousFridayJs = require("./previousFriday.js");
parcelHelpers.exportAll(_previousFridayJs, exports);
var _previousMondayJs = require("./previousMonday.js");
parcelHelpers.exportAll(_previousMondayJs, exports);
var _previousSaturdayJs = require("./previousSaturday.js");
parcelHelpers.exportAll(_previousSaturdayJs, exports);
var _previousSundayJs = require("./previousSunday.js");
parcelHelpers.exportAll(_previousSundayJs, exports);
var _previousThursdayJs = require("./previousThursday.js");
parcelHelpers.exportAll(_previousThursdayJs, exports);
var _previousTuesdayJs = require("./previousTuesday.js");
parcelHelpers.exportAll(_previousTuesdayJs, exports);
var _previousWednesdayJs = require("./previousWednesday.js");
parcelHelpers.exportAll(_previousWednesdayJs, exports);
var _quartersToMonthsJs = require("./quartersToMonths.js");
parcelHelpers.exportAll(_quartersToMonthsJs, exports);
var _quartersToYearsJs = require("./quartersToYears.js");
parcelHelpers.exportAll(_quartersToYearsJs, exports);
var _roundToNearestHoursJs = require("./roundToNearestHours.js");
parcelHelpers.exportAll(_roundToNearestHoursJs, exports);
var _roundToNearestMinutesJs = require("./roundToNearestMinutes.js");
parcelHelpers.exportAll(_roundToNearestMinutesJs, exports);
var _secondsToHoursJs = require("./secondsToHours.js");
parcelHelpers.exportAll(_secondsToHoursJs, exports);
var _secondsToMillisecondsJs = require("./secondsToMilliseconds.js");
parcelHelpers.exportAll(_secondsToMillisecondsJs, exports);
var _secondsToMinutesJs = require("./secondsToMinutes.js");
parcelHelpers.exportAll(_secondsToMinutesJs, exports);
var _setJs = require("./set.js");
parcelHelpers.exportAll(_setJs, exports);
var _setDateJs = require("./setDate.js");
parcelHelpers.exportAll(_setDateJs, exports);
var _setDayJs = require("./setDay.js");
parcelHelpers.exportAll(_setDayJs, exports);
var _setDayOfYearJs = require("./setDayOfYear.js");
parcelHelpers.exportAll(_setDayOfYearJs, exports);
var _setDefaultOptionsJs = require("./setDefaultOptions.js");
parcelHelpers.exportAll(_setDefaultOptionsJs, exports);
var _setHoursJs = require("./setHours.js");
parcelHelpers.exportAll(_setHoursJs, exports);
var _setISODayJs = require("./setISODay.js");
parcelHelpers.exportAll(_setISODayJs, exports);
var _setISOWeekJs = require("./setISOWeek.js");
parcelHelpers.exportAll(_setISOWeekJs, exports);
var _setISOWeekYearJs = require("./setISOWeekYear.js");
parcelHelpers.exportAll(_setISOWeekYearJs, exports);
var _setMillisecondsJs = require("./setMilliseconds.js");
parcelHelpers.exportAll(_setMillisecondsJs, exports);
var _setMinutesJs = require("./setMinutes.js");
parcelHelpers.exportAll(_setMinutesJs, exports);
var _setMonthJs = require("./setMonth.js");
parcelHelpers.exportAll(_setMonthJs, exports);
var _setQuarterJs = require("./setQuarter.js");
parcelHelpers.exportAll(_setQuarterJs, exports);
var _setSecondsJs = require("./setSeconds.js");
parcelHelpers.exportAll(_setSecondsJs, exports);
var _setWeekJs = require("./setWeek.js");
parcelHelpers.exportAll(_setWeekJs, exports);
var _setWeekYearJs = require("./setWeekYear.js");
parcelHelpers.exportAll(_setWeekYearJs, exports);
var _setYearJs = require("./setYear.js");
parcelHelpers.exportAll(_setYearJs, exports);
var _startOfDayJs = require("./startOfDay.js");
parcelHelpers.exportAll(_startOfDayJs, exports);
var _startOfDecadeJs = require("./startOfDecade.js");
parcelHelpers.exportAll(_startOfDecadeJs, exports);
var _startOfHourJs = require("./startOfHour.js");
parcelHelpers.exportAll(_startOfHourJs, exports);
var _startOfISOWeekJs = require("./startOfISOWeek.js");
parcelHelpers.exportAll(_startOfISOWeekJs, exports);
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
parcelHelpers.exportAll(_startOfISOWeekYearJs, exports);
var _startOfMinuteJs = require("./startOfMinute.js");
parcelHelpers.exportAll(_startOfMinuteJs, exports);
var _startOfMonthJs = require("./startOfMonth.js");
parcelHelpers.exportAll(_startOfMonthJs, exports);
var _startOfQuarterJs = require("./startOfQuarter.js");
parcelHelpers.exportAll(_startOfQuarterJs, exports);
var _startOfSecondJs = require("./startOfSecond.js");
parcelHelpers.exportAll(_startOfSecondJs, exports);
var _startOfTodayJs = require("./startOfToday.js");
parcelHelpers.exportAll(_startOfTodayJs, exports);
var _startOfTomorrowJs = require("./startOfTomorrow.js");
parcelHelpers.exportAll(_startOfTomorrowJs, exports);
var _startOfWeekJs = require("./startOfWeek.js");
parcelHelpers.exportAll(_startOfWeekJs, exports);
var _startOfWeekYearJs = require("./startOfWeekYear.js");
parcelHelpers.exportAll(_startOfWeekYearJs, exports);
var _startOfYearJs = require("./startOfYear.js");
parcelHelpers.exportAll(_startOfYearJs, exports);
var _startOfYesterdayJs = require("./startOfYesterday.js");
parcelHelpers.exportAll(_startOfYesterdayJs, exports);
var _subJs = require("./sub.js");
parcelHelpers.exportAll(_subJs, exports);
var _subBusinessDaysJs = require("./subBusinessDays.js");
parcelHelpers.exportAll(_subBusinessDaysJs, exports);
var _subDaysJs = require("./subDays.js");
parcelHelpers.exportAll(_subDaysJs, exports);
var _subHoursJs = require("./subHours.js");
parcelHelpers.exportAll(_subHoursJs, exports);
var _subISOWeekYearsJs = require("./subISOWeekYears.js");
parcelHelpers.exportAll(_subISOWeekYearsJs, exports);
var _subMillisecondsJs = require("./subMilliseconds.js");
parcelHelpers.exportAll(_subMillisecondsJs, exports);
var _subMinutesJs = require("./subMinutes.js");
parcelHelpers.exportAll(_subMinutesJs, exports);
var _subMonthsJs = require("./subMonths.js");
parcelHelpers.exportAll(_subMonthsJs, exports);
var _subQuartersJs = require("./subQuarters.js");
parcelHelpers.exportAll(_subQuartersJs, exports);
var _subSecondsJs = require("./subSeconds.js");
parcelHelpers.exportAll(_subSecondsJs, exports);
var _subWeeksJs = require("./subWeeks.js");
parcelHelpers.exportAll(_subWeeksJs, exports);
var _subYearsJs = require("./subYears.js");
parcelHelpers.exportAll(_subYearsJs, exports);
var _toDateJs = require("./toDate.js");
parcelHelpers.exportAll(_toDateJs, exports);
var _transposeJs = require("./transpose.js");
parcelHelpers.exportAll(_transposeJs, exports);
var _weeksToDaysJs = require("./weeksToDays.js");
parcelHelpers.exportAll(_weeksToDaysJs, exports);
var _yearsToDaysJs = require("./yearsToDays.js");
parcelHelpers.exportAll(_yearsToDaysJs, exports);
var _yearsToMonthsJs = require("./yearsToMonths.js");
parcelHelpers.exportAll(_yearsToMonthsJs, exports);
var _yearsToQuartersJs = require("./yearsToQuarters.js");
parcelHelpers.exportAll(_yearsToQuartersJs, exports);

},{"./add.js":false,"./addBusinessDays.js":false,"./addDays.js":false,"./addHours.js":false,"./addISOWeekYears.js":false,"./addMilliseconds.js":false,"./addMinutes.js":false,"./addMonths.js":false,"./addQuarters.js":false,"./addSeconds.js":false,"./addWeeks.js":false,"./addYears.js":false,"./areIntervalsOverlapping.js":false,"./clamp.js":false,"./closestIndexTo.js":false,"./closestTo.js":false,"./compareAsc.js":false,"./compareDesc.js":false,"./constructFrom.js":false,"./constructNow.js":false,"./daysToWeeks.js":false,"./differenceInBusinessDays.js":false,"./differenceInCalendarDays.js":"1F4zu","./differenceInCalendarISOWeekYears.js":false,"./differenceInCalendarISOWeeks.js":false,"./differenceInCalendarMonths.js":false,"./differenceInCalendarQuarters.js":false,"./differenceInCalendarWeeks.js":false,"./differenceInCalendarYears.js":false,"./differenceInDays.js":false,"./differenceInHours.js":false,"./differenceInISOWeekYears.js":false,"./differenceInMilliseconds.js":false,"./differenceInMinutes.js":false,"./differenceInMonths.js":false,"./differenceInQuarters.js":false,"./differenceInSeconds.js":false,"./differenceInWeeks.js":false,"./differenceInYears.js":false,"./eachDayOfInterval.js":false,"./eachHourOfInterval.js":false,"./eachMinuteOfInterval.js":false,"./eachMonthOfInterval.js":false,"./eachQuarterOfInterval.js":false,"./eachWeekOfInterval.js":false,"./eachWeekendOfInterval.js":false,"./eachWeekendOfMonth.js":false,"./eachWeekendOfYear.js":false,"./eachYearOfInterval.js":false,"./endOfDay.js":false,"./endOfDecade.js":false,"./endOfHour.js":false,"./endOfISOWeek.js":false,"./endOfISOWeekYear.js":false,"./endOfMinute.js":false,"./endOfMonth.js":false,"./endOfQuarter.js":false,"./endOfSecond.js":false,"./endOfToday.js":false,"./endOfTomorrow.js":false,"./endOfWeek.js":false,"./endOfYear.js":false,"./endOfYesterday.js":false,"./format.js":"hQsFo","./formatDistance.js":false,"./formatDistanceStrict.js":false,"./formatDistanceToNow.js":false,"./formatDistanceToNowStrict.js":false,"./formatDuration.js":false,"./formatISO.js":false,"./formatISO9075.js":false,"./formatISODuration.js":false,"./formatRFC3339.js":false,"./formatRFC7231.js":false,"./formatRelative.js":false,"./fromUnixTime.js":false,"./getDate.js":false,"./getDay.js":false,"./getDayOfYear.js":false,"./getDaysInMonth.js":false,"./getDaysInYear.js":false,"./getDecade.js":false,"./getDefaultOptions.js":false,"./getHours.js":false,"./getISODay.js":false,"./getISOWeek.js":false,"./getISOWeekYear.js":false,"./getISOWeeksInYear.js":false,"./getMilliseconds.js":false,"./getMinutes.js":false,"./getMonth.js":false,"./getOverlappingDaysInIntervals.js":false,"./getQuarter.js":false,"./getSeconds.js":false,"./getTime.js":false,"./getUnixTime.js":false,"./getWeek.js":false,"./getWeekOfMonth.js":false,"./getWeekYear.js":false,"./getWeeksInMonth.js":false,"./getYear.js":false,"./hoursToMilliseconds.js":false,"./hoursToMinutes.js":false,"./hoursToSeconds.js":false,"./interval.js":false,"./intervalToDuration.js":false,"./intlFormat.js":false,"./intlFormatDistance.js":false,"./isAfter.js":false,"./isBefore.js":false,"./isDate.js":false,"./isEqual.js":false,"./isExists.js":false,"./isFirstDayOfMonth.js":false,"./isFriday.js":false,"./isFuture.js":false,"./isLastDayOfMonth.js":false,"./isLeapYear.js":false,"./isMatch.js":false,"./isMonday.js":false,"./isPast.js":false,"./isSameDay.js":false,"./isSameHour.js":false,"./isSameISOWeek.js":false,"./isSameISOWeekYear.js":false,"./isSameMinute.js":false,"./isSameMonth.js":false,"./isSameQuarter.js":false,"./isSameSecond.js":false,"./isSameWeek.js":false,"./isSameYear.js":false,"./isSaturday.js":false,"./isSunday.js":false,"./isThisHour.js":false,"./isThisISOWeek.js":false,"./isThisMinute.js":false,"./isThisMonth.js":false,"./isThisQuarter.js":false,"./isThisSecond.js":false,"./isThisWeek.js":false,"./isThisYear.js":false,"./isThursday.js":false,"./isToday.js":false,"./isTomorrow.js":false,"./isTuesday.js":false,"./isValid.js":false,"./isWednesday.js":false,"./isWeekend.js":false,"./isWithinInterval.js":false,"./isYesterday.js":false,"./lastDayOfDecade.js":false,"./lastDayOfISOWeek.js":false,"./lastDayOfISOWeekYear.js":false,"./lastDayOfMonth.js":false,"./lastDayOfQuarter.js":false,"./lastDayOfWeek.js":false,"./lastDayOfYear.js":false,"./lightFormat.js":false,"./max.js":false,"./milliseconds.js":false,"./millisecondsToHours.js":false,"./millisecondsToMinutes.js":false,"./millisecondsToSeconds.js":false,"./min.js":false,"./minutesToHours.js":false,"./minutesToMilliseconds.js":false,"./minutesToSeconds.js":false,"./monthsToQuarters.js":false,"./monthsToYears.js":false,"./nextDay.js":false,"./nextFriday.js":false,"./nextMonday.js":false,"./nextSaturday.js":false,"./nextSunday.js":false,"./nextThursday.js":false,"./nextTuesday.js":false,"./nextWednesday.js":false,"./parse.js":false,"./parseISO.js":false,"./parseJSON.js":false,"./previousDay.js":false,"./previousFriday.js":false,"./previousMonday.js":false,"./previousSaturday.js":false,"./previousSunday.js":false,"./previousThursday.js":false,"./previousTuesday.js":false,"./previousWednesday.js":false,"./quartersToMonths.js":false,"./quartersToYears.js":false,"./roundToNearestHours.js":false,"./roundToNearestMinutes.js":false,"./secondsToHours.js":false,"./secondsToMilliseconds.js":false,"./secondsToMinutes.js":false,"./set.js":false,"./setDate.js":false,"./setDay.js":false,"./setDayOfYear.js":false,"./setDefaultOptions.js":false,"./setHours.js":false,"./setISODay.js":false,"./setISOWeek.js":false,"./setISOWeekYear.js":false,"./setMilliseconds.js":false,"./setMinutes.js":false,"./setMonth.js":false,"./setQuarter.js":false,"./setSeconds.js":false,"./setWeek.js":false,"./setWeekYear.js":false,"./setYear.js":false,"./startOfDay.js":false,"./startOfDecade.js":false,"./startOfHour.js":false,"./startOfISOWeek.js":false,"./startOfISOWeekYear.js":false,"./startOfMinute.js":false,"./startOfMonth.js":false,"./startOfQuarter.js":false,"./startOfSecond.js":false,"./startOfToday.js":false,"./startOfTomorrow.js":false,"./startOfWeek.js":false,"./startOfWeekYear.js":false,"./startOfYear.js":false,"./startOfYesterday.js":false,"./sub.js":false,"./subBusinessDays.js":false,"./subDays.js":false,"./subHours.js":false,"./subISOWeekYears.js":false,"./subMilliseconds.js":false,"./subMinutes.js":false,"./subMonths.js":false,"./subQuarters.js":false,"./subSeconds.js":false,"./subWeeks.js":false,"./subYears.js":false,"./toDate.js":false,"./transpose.js":false,"./weeksToDays.js":false,"./yearsToDays.js":false,"./yearsToMonths.js":false,"./yearsToQuarters.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"la42H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */ parcelHelpers.export(exports, "constructFrom", ()=>constructFrom);
var _constantsJs = require("./constants.js");
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && (0, _constantsJs.constructFromSymbol) in date) return date[0, _constantsJs.constructFromSymbol](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
// Fallback for modularized imports:
exports.default = constructFrom;

},{"./constants.js":"9oulg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9oulg":[function(require,module,exports,__globalThis) {
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "millisecondsInWeek", ()=>millisecondsInWeek);
parcelHelpers.export(exports, "millisecondsInDay", ()=>millisecondsInDay);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minutesInYear", ()=>minutesInYear);
parcelHelpers.export(exports, "minutesInMonth", ()=>minutesInMonth);
parcelHelpers.export(exports, "minutesInDay", ()=>minutesInDay);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
parcelHelpers.export(exports, "constructFromSymbol", ()=>constructFromSymbol);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 86400000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1F4zu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarDays} function options.
 */ /**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */ parcelHelpers.export(exports, "differenceInCalendarDays", ()=>differenceInCalendarDays);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _startOfDayJs = require("./startOfDay.js");
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, _startOfDayJs.startOfDay)(laterDate_);
    const earlierStartOfDay = (0, _startOfDayJs.startOfDay)(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / (0, _constantsJs.millisecondsInDay));
}
// Fallback for modularized imports:
exports.default = differenceInCalendarDays;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"iFmyK","./_lib/normalizeDates.js":"grsPk","./constants.js":"9oulg","./startOfDay.js":"5NUHL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iFmyK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ parcelHelpers.export(exports, "getTimezoneOffsetInMilliseconds", ()=>getTimezoneOffsetInMilliseconds);
var _toDateJs = require("../toDate.js");
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, _toDateJs.toDate)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}

},{"../toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5dMgD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ parcelHelpers.export(exports, "toDate", ()=>toDate);
var _constructFromJs = require("./constructFrom.js");
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, _constructFromJs.constructFrom)(context || argument, argument);
}
// Fallback for modularized imports:
exports.default = toDate;

},{"./constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"grsPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeDates", ()=>normalizeDates);
var _constructFromJs = require("../constructFrom.js");
function normalizeDates(context, ...dates) {
    const normalize = (0, _constructFromJs.constructFrom).bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}

},{"../constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5NUHL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfDay} function options.
 */ /**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfDay", ()=>startOfDay);
var _toDateJs = require("./toDate.js");
function startOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfDay;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hQsFo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
parcelHelpers.export(exports, "formatters", ()=>(0, _formattersJs.formatters));
parcelHelpers.export(exports, "longFormatters", ()=>(0, _longFormattersJs.longFormatters));
parcelHelpers.export(exports, "formatDate", ()=>format);
/**
 * The {@link format} function options.
 */ /**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ parcelHelpers.export(exports, "format", ()=>format);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _formattersJs = require("./_lib/format/formatters.js");
var _longFormattersJs = require("./_lib/format/longFormatters.js");
var _protectedTokensJs = require("./_lib/protectedTokens.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, _toDateJs.toDate)(date, options?.in);
    if (!(0, _isValidJs.isValid)(originalDate)) throw new RangeError("Invalid time value");
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = (0, _longFormattersJs.longFormatters)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return {
            isToken: false,
            value: "'"
        };
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return {
            isToken: false,
            value: cleanEscapedString(substring)
        };
        if ((0, _formattersJs.formatters)[firstCharacter]) return {
            isToken: true,
            value: substring
        };
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokensJs.isProtectedWeekYearToken)(token) || !options?.useAdditionalDayOfYearTokens && (0, _protectedTokensJs.isProtectedDayOfYearToken)(token)) (0, _protectedTokensJs.warnOrThrowProtectedError)(token, formatStr, String(date));
        const formatter = (0, _formattersJs.formatters)[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}
// Fallback for modularized imports:
exports.default = format;

},{"./_lib/defaultLocale.js":"3pvnM","./_lib/defaultOptions.js":"5LfG2","./_lib/format/formatters.js":"i16RS","./_lib/format/longFormatters.js":"bx03M","./_lib/protectedTokens.js":"iJEis","./isValid.js":"gVxb0","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pvnM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLocale", ()=>(0, _enUSJs.enUS));
var _enUSJs = require("../locale/en-US.js");

},{"../locale/en-US.js":"ceIk5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ceIk5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enUS", ()=>enUS);
var _formatDistanceJs = require("./en-US/_lib/formatDistance.js");
var _formatLongJs = require("./en-US/_lib/formatLong.js");
var _formatRelativeJs = require("./en-US/_lib/formatRelative.js");
var _localizeJs = require("./en-US/_lib/localize.js");
var _matchJs = require("./en-US/_lib/match.js");
const enUS = {
    code: "en-US",
    formatDistance: (0, _formatDistanceJs.formatDistance),
    formatLong: (0, _formatLongJs.formatLong),
    formatRelative: (0, _formatRelativeJs.formatRelative),
    localize: (0, _localizeJs.localize),
    match: (0, _matchJs.match),
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
exports.default = enUS;

},{"./en-US/_lib/formatDistance.js":"9wcSK","./en-US/_lib/formatLong.js":"4750s","./en-US/_lib/formatRelative.js":"9hkS1","./en-US/_lib/localize.js":"fNMBt","./en-US/_lib/match.js":"glQGS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wcSK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4750s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatLong", ()=>formatLong);
var _buildFormatLongFnJs = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

},{"../../_lib/buildFormatLongFn.js":"hG1eR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hG1eR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildFormatLongFn", ()=>buildFormatLongFn);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9hkS1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fNMBt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localize", ()=>localize);
var _buildLocalizeFnJs = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

},{"../../_lib/buildLocalizeFn.js":"9AV3v","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9AV3v":[function(require,module,exports,__globalThis) {
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLocalizeFn", ()=>buildLocalizeFn);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glQGS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>match);
var _buildMatchFnJs = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFnJs = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, _buildMatchPatternFnJs.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

},{"../../_lib/buildMatchFn.js":"1TSj7","../../_lib/buildMatchPatternFn.js":"YWS9x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TSj7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchFn", ()=>buildMatchFn);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"YWS9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchPatternFn", ()=>buildMatchPatternFn);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5LfG2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i16RS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatters", ()=>formatters);
var _getDayOfYearJs = require("../../getDayOfYear.js");
var _getISOWeekJs = require("../../getISOWeek.js");
var _getISOWeekYearJs = require("../../getISOWeekYear.js");
var _getWeekJs = require("../../getWeek.js");
var _getWeekYearJs = require("../../getWeekYear.js");
var _addLeadingZerosJs = require("../addLeadingZeros.js");
var _lightFormattersJs = require("./lightFormatters.js");
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, _getWeekYearJs.getWeekYear)(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, _addLeadingZerosJs.addLeadingZeros)(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, _getISOWeekYearJs.getISOWeekYear)(date);
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, _addLeadingZerosJs.addLeadingZeros)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return (0, _lightFormattersJs.lightFormatters).M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, _getWeekJs.getWeek)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, _getISOWeekJs.getISOWeek)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getDate(), {
            unit: "date"
        });
        return (0, _lightFormattersJs.lightFormatters).d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, _getDayOfYearJs.getDayOfYear)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _addLeadingZerosJs.addLeadingZeros)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getHours(), {
            unit: "hour"
        });
        return (0, _lightFormattersJs.lightFormatters).H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getMinutes(), {
            unit: "minute"
        });
        return (0, _lightFormattersJs.lightFormatters).m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getSeconds(), {
            unit: "second"
        });
        return (0, _lightFormattersJs.lightFormatters).s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return (0, _lightFormattersJs.lightFormatters).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, _addLeadingZerosJs.addLeadingZeros)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    return sign + String(hours) + delimiter + (0, _addLeadingZerosJs.addLeadingZeros)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, _addLeadingZerosJs.addLeadingZeros)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, _addLeadingZerosJs.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
    const minutes = (0, _addLeadingZerosJs.addLeadingZeros)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}

},{"../../getDayOfYear.js":"hfYVq","../../getISOWeek.js":"bFlS3","../../getISOWeekYear.js":"5sfyb","../../getWeek.js":"fqGGM","../../getWeekYear.js":"9lIvw","../addLeadingZeros.js":"iez8V","./lightFormatters.js":"cNKmc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hfYVq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDayOfYear} function options.
 */ /**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */ parcelHelpers.export(exports, "getDayOfYear", ()=>getDayOfYear);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _startOfYearJs = require("./startOfYear.js");
var _toDateJs = require("./toDate.js");
function getDayOfYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(_date, (0, _startOfYearJs.startOfYear)(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
// Fallback for modularized imports:
exports.default = getDayOfYear;

},{"./differenceInCalendarDays.js":"1F4zu","./startOfYear.js":"kK73U","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kK73U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfYear} function options.
 */ /**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfYear", ()=>startOfYear);
var _toDateJs = require("./toDate.js");
function startOfYear(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = startOfYear;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bFlS3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeek} function options.
 */ /**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */ parcelHelpers.export(exports, "getISOWeek", ()=>getISOWeek);
var _constantsJs = require("./constants.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
var _toDateJs = require("./toDate.js");
function getISOWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfISOWeekJs.startOfISOWeek)(_date) - +(0, _startOfISOWeekYearJs.startOfISOWeekYear)(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getISOWeek;

},{"./constants.js":"9oulg","./startOfISOWeek.js":"6BSx4","./startOfISOWeekYear.js":"2a4IK","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6BSx4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeek} function options.
 */ /**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeek", ()=>startOfISOWeek);
var _startOfWeekJs = require("./startOfWeek.js");
function startOfISOWeek(date, options) {
    return (0, _startOfWeekJs.startOfWeek)(date, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = startOfISOWeek;

},{"./startOfWeek.js":"kSdOJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kSdOJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeek} function options.
 */ /**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfWeek", ()=>startOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function startOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeek;

},{"./_lib/defaultOptions.js":"5LfG2","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2a4IK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeekYear} function options.
 */ /**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeekYear", ()=>startOfISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function startOfISOWeekYear(date, options) {
    const year = (0, _getISOWeekYearJs.getISOWeekYear)(date, options);
    const fourthOfJanuary = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuary);
}
// Fallback for modularized imports:
exports.default = startOfISOWeekYear;

},{"./constructFrom.js":"la42H","./getISOWeekYear.js":"5sfyb","./startOfISOWeek.js":"6BSx4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5sfyb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeekYear} function options.
 */ /**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */ parcelHelpers.export(exports, "getISOWeekYear", ()=>getISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _toDateJs = require("./toDate.js");
function getISOWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (_date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getISOWeekYear;

},{"./constructFrom.js":"la42H","./startOfISOWeek.js":"6BSx4","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fqGGM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeek} function options.
 */ /**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */ parcelHelpers.export(exports, "getWeek", ()=>getWeek);
var _constantsJs = require("./constants.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _startOfWeekYearJs = require("./startOfWeekYear.js");
var _toDateJs = require("./toDate.js");
function getWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfWeekJs.startOfWeek)(_date, options) - +(0, _startOfWeekYearJs.startOfWeekYear)(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getWeek;

},{"./constants.js":"9oulg","./startOfWeek.js":"kSdOJ","./startOfWeekYear.js":"aNqJN","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aNqJN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeekYear} function options.
 */ /**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfWeekYear", ()=>startOfWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _getWeekYearJs = require("./getWeekYear.js");
var _startOfWeekJs = require("./startOfWeek.js");
function startOfWeekYear(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, _getWeekYearJs.getWeekYear)(date, options);
    const firstWeek = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, _startOfWeekJs.startOfWeek)(firstWeek, options);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeekYear;

},{"./_lib/defaultOptions.js":"5LfG2","./constructFrom.js":"la42H","./getWeekYear.js":"9lIvw","./startOfWeek.js":"kSdOJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9lIvw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeekYear} function options.
 */ /**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */ parcelHelpers.export(exports, "getWeekYear", ()=>getWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _toDateJs = require("./toDate.js");
function getWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) return year + 1;
    else if (+_date >= +startOfThisYear) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getWeekYear;

},{"./_lib/defaultOptions.js":"5LfG2","./constructFrom.js":"la42H","./startOfWeek.js":"kSdOJ","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iez8V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addLeadingZeros", ()=>addLeadingZeros);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cNKmc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lightFormatters", ()=>lightFormatters);
var _addLeadingZerosJs = require("../addLeadingZeros.js");
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _addLeadingZerosJs.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _addLeadingZerosJs.addLeadingZeros)(fractionalSeconds, token.length);
    }
};

},{"../addLeadingZeros.js":"iez8V","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bx03M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "longFormatters", ()=>longFormatters);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iJEis":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "warnOrThrowProtectedError", ()=>warnOrThrowProtectedError);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gVxb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ parcelHelpers.export(exports, "isValid", ()=>isValid);
var _isDateJs = require("./isDate.js");
var _toDateJs = require("./toDate.js");
function isValid(date) {
    return !(!(0, _isDateJs.isDate)(date) && typeof date !== "number" || isNaN(+(0, _toDateJs.toDate)(date)));
}
// Fallback for modularized imports:
exports.default = isValid;

},{"./isDate.js":"dFJ8E","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dFJ8E":[function(require,module,exports,__globalThis) {
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDate", ()=>isDate);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
// Fallback for modularized imports:
exports.default = isDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"20WWU":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$5e9b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$5e9b.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$5e9b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RenderEvents);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _dateFns = require("date-fns");
var _material = require("@mui/material");
var _toolTipText = require("../atoms/ToolTipText");
var _toolTipTextDefault = parcelHelpers.interopDefault(_toolTipText);
var _colors = require("@mui/material/colors");
var _customModal = require("../organisms/CustomModal");
var _customModalDefault = parcelHelpers.interopDefault(_customModal);
var _react = require("react");
var _s = $RefreshSig$();
function RenderEvents({ eventLine, minDay, totalDays }) {
    _s();
    const [selectedItem, setSelectedItem] = (0, _react.useState)({
        data: {},
        openModal: false
    });
    const laneToRender = (oneLane)=>{
        // create a copy to not chande the original
        const sortedNewLane = oneLane.slice().sort((a, b)=>new Date(a.start) - new Date(b.start));
        // intervals array
        const intervals = [];
        let currentDay = 0;
        sortedNewLane.forEach((item)=>{
            const startDay = (0, _dateFns.differenceInCalendarDays)(item.start, minDay);
            const duration = (0, _dateFns.differenceInCalendarDays)(item.end, item.start) + 1;
            // bloco cinza para gap antes do item
            if (startDay > currentDay) intervals.push({
                item: null,
                startDay: currentDay,
                duration: startDay - currentDay,
                color: "#eee"
            });
            // bloco verde do item
            intervals.push({
                item,
                startDay,
                duration,
                color: (0, _colors.teal)[700]
            });
            currentDay = startDay + duration;
        });
        // bloco cinza no final se necessário
        if (currentDay < totalDays) intervals.push({
            item: null,
            startDay: currentDay,
            duration: totalDays - currentDay,
            color: "#eee"
        });
        return intervals;
    };
    const closeModal = ()=>{
        setSelectedItem({
            data: {},
            openModal: false
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
        display: "flex",
        height: 30,
        mb: 1,
        gap: 1,
        width: "100%",
        children: [
            laneToRender(eventLine).map(({ item, duration, color }, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Tooltip), {
                    title: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toolTipTextDefault.default), {
                        data: item
                    }, void 0, false, {
                        fileName: "src/pages/Home/components/molecules/RenderEvents.js",
                        lineNumber: 70,
                        columnNumber: 18
                    }, void 0),
                    slotProps: {
                        tooltip: {
                            sx: {
                                bgcolor: "transparent"
                            }
                        }
                    },
                    arrow: true,
                    placement: "top",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
                        sx: {
                            width: `${item ? duration * 12 : duration * 6}%`,
                            height: "100%",
                            bgcolor: color,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            cursor: item ? "pointer" : "default"
                        },
                        onClick: ()=>setSelectedItem(()=>({
                                    data: item,
                                    openModal: true
                                })),
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                            sx: {
                                color: item ? "#FFFFFF" : "black",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            },
                            children: item && item?.name
                        }, void 0, false, {
                            fileName: "src/pages/Home/components/molecules/RenderEvents.js",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Home/components/molecules/RenderEvents.js",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "src/pages/Home/components/molecules/RenderEvents.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _customModalDefault.default), {
                handleClose: closeModal,
                item: selectedItem.data,
                open: selectedItem.openModal
            }, void 0, false, {
                fileName: "src/pages/Home/components/molecules/RenderEvents.js",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Home/components/molecules/RenderEvents.js",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(RenderEvents, "cABjcP7PpiYecQg5GLTA95WtxBI=");
_c = RenderEvents;
var _c;
$RefreshReg$(_c, "RenderEvents");

  $parcel$ReactRefreshHelpers$5e9b.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","date-fns":"apLUd","@mui/material":"3KIXa","../atoms/ToolTipText":"eq6Uk","@mui/material/colors":"2fNaz","../organisms/CustomModal":"2NJdV","react":"jMk1U"}],"eq6Uk":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e305 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e305.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e305.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _material = require("@mui/material");
var _react = require("react");
var _dateFns = require("date-fns");
function ToolTipText({ data }) {
    if (!data) return null;
    const startFormatted = (0, _dateFns.format)(new Date(data.start), "dd/MM/yyyy - HH:mm");
    const endFormatted = (0, _dateFns.format)(new Date(data.end), "dd/MM/yyyy - HH:mm");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Paper), {
        elevation: 3,
        sx: {
            p: 2
        },
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                variant: "subtitle1",
                fontWeight: "bold",
                children: data.name
            }, void 0, false, {
                fileName: "src/pages/Home/components/atoms/ToolTipText.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                variant: "body2",
                children: [
                    "Start: ",
                    startFormatted
                ]
            }, void 0, true, {
                fileName: "src/pages/Home/components/atoms/ToolTipText.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                variant: "body2",
                children: [
                    "End: ",
                    endFormatted
                ]
            }, void 0, true, {
                fileName: "src/pages/Home/components/atoms/ToolTipText.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Home/components/atoms/ToolTipText.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ToolTipText;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(ToolTipText);
var _c, _c1;
$RefreshReg$(_c, "ToolTipText");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$e305.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@mui/material":"3KIXa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","react":"jMk1U","date-fns":"apLUd"}],"2NJdV":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9a18 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$9a18.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$9a18.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _material = require("@mui/material");
var _dateFns = require("date-fns");
var _react = require("react");
function CustomModal({ item, open, handleClose }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Modal), {
        open: open,
        onClose: handleClose,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
            sx: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 3,
                borderRadius: 2
            },
            children: item && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                        variant: "h6",
                        children: item.name
                    }, void 0, false, {
                        fileName: "src/pages/Home/components/organisms/CustomModal.js",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                        variant: "body2",
                        children: [
                            "Start:",
                            " ",
                            item.start && (0, _dateFns.format)(new Date(item.start), "dd/MM/yyyy - HH:mm")
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Home/components/organisms/CustomModal.js",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Typography), {
                        variant: "body2",
                        children: [
                            "End:",
                            " ",
                            item.end && (0, _dateFns.format)(new Date(item.end), "dd/MM/yyyy - HH:mm")
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Home/components/organisms/CustomModal.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Box), {
                        mt: 2,
                        display: "flex",
                        justifyContent: "flex-end",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _material.Button), {
                            variant: "contained",
                            onClick: handleClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "src/pages/Home/components/organisms/CustomModal.js",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Home/components/organisms/CustomModal.js",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "src/pages/Home/components/organisms/CustomModal.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Home/components/organisms/CustomModal.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CustomModal;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(CustomModal);
var _c, _c1;
$RefreshReg$(_c, "CustomModal");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$9a18.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@mui/material":"3KIXa","react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","date-fns":"apLUd"}]},["znlhE"], null, "parcelRequire9642", {})

//# sourceMappingURL=Home.e0c15902.js.map
