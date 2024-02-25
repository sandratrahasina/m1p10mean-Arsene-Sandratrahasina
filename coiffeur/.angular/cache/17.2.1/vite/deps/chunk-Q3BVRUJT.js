import {
  DOCUMENT
} from "./chunk-WL36VPKJ.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-T4EVUEAM.js";
import {
  BehaviorSubject,
  filter,
  share
} from "./chunk-JKR55PDT.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-ASLTLD6L.js";

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/@delon/util/fesm2022/other.mjs
var import_extend = __toESM(require_extend(), 1);
function deepGet(obj, path, defaultValue) {
  if (!obj || path == null || path.length === 0)
    return defaultValue;
  if (!Array.isArray(path)) {
    path = ~path.indexOf(".") ? path.split(".") : [path];
  }
  if (path.length === 1) {
    const checkObj = obj[path[0]];
    return typeof checkObj === "undefined" ? defaultValue : checkObj;
  }
  const res = path.reduce((o, k) => (o || {})[k], obj);
  return typeof res === "undefined" ? defaultValue : res;
}
function deepCopy(obj) {
  const result = (0, import_extend.default)(true, {}, {
    _: obj
  });
  return result._;
}
function deepMergeKey(original, arrayProcessMethod, ...objects) {
  if (Array.isArray(original) || typeof original !== "object")
    return original;
  const isObject = (v) => typeof v === "object";
  const merge = (target, obj) => {
    Object.keys(obj).filter((key) => key !== "__proto__" && Object.prototype.hasOwnProperty.call(obj, key)).forEach((key) => {
      const fromValue = obj[key];
      const toValue = target[key];
      if (Array.isArray(toValue)) {
        target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
      } else if (typeof fromValue === "function") {
        target[key] = fromValue;
      } else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
        target[key] = merge(toValue, fromValue);
      } else {
        target[key] = deepCopy(fromValue);
      }
    });
    return target;
  };
  objects.filter((v) => v != null && isObject(v)).forEach((v) => merge(original, v));
  return original;
}
function deepMerge(original, ...objects) {
  return deepMergeKey(original, false, ...objects);
}
var record = {};
var PREFIX = "[@DELON]:";
function notRecorded(...args) {
  const asRecord = args.reduce((acc, c) => acc + c.toString(), "");
  if (record[asRecord]) {
    return false;
  } else {
    record[asRecord] = true;
    return true;
  }
}
function consoleCommonBehavior(consoleFunc, ...args) {
  if ((typeof ngDevMode === "undefined" || ngDevMode) && notRecorded(...args)) {
    consoleFunc(...args);
  }
}
var warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
var _LazyService = class _LazyService {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.list = {};
    this.cached = {};
    this._notify = new BehaviorSubject([]);
  }
  get change() {
    return this._notify.asObservable().pipe(share(), filter((ls) => ls.length !== 0));
  }
  clear() {
    this.list = {};
    this.cached = {};
  }
  attachAttributes(el, attributes) {
    if (attributes == null)
      return;
    Object.entries(attributes).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }
  /**
   * Load script or style files
   */
  load(paths) {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }
    const promises = [];
    paths.map((v) => typeof v !== "object" ? {
      path: v
    } : v).forEach((item) => {
      if (item.path.endsWith(".js")) {
        promises.push(this.loadScript(item.path, item.options));
      } else {
        promises.push(this.loadStyle(item.path, item.options));
      }
    });
    return Promise.all(promises).then((res) => {
      this._notify.next(res);
      return Promise.resolve(res);
    });
  }
  loadScript(path, innerContent, attributes) {
    const options = typeof innerContent === "object" ? innerContent : {
      innerContent,
      attributes
    };
    return new Promise((resolve) => {
      if (this.list[path] === true) {
        resolve(__spreadProps(__spreadValues({}, this.cached[path]), {
          status: "loading"
        }));
        return;
      }
      this.list[path] = true;
      const onSuccess = (item) => {
        this.cached[path] = item;
        resolve(item);
        this._notify.next([item]);
      };
      const node = this.doc.createElement("script");
      node.type = "text/javascript";
      node.src = path;
      this.attachAttributes(node, options.attributes);
      if (options.innerContent) {
        node.innerHTML = options.innerContent;
      }
      node.onload = () => onSuccess({
        path,
        status: "ok"
      });
      node.onerror = (error) => onSuccess({
        path,
        status: "error",
        error
      });
      this.doc.getElementsByTagName("head")[0].appendChild(node);
    });
  }
  loadStyle(path, rel, innerContent, attributes) {
    const options = typeof rel === "object" ? rel : {
      rel,
      innerContent,
      attributes
    };
    return new Promise((resolve) => {
      if (this.list[path] === true) {
        resolve(this.cached[path]);
        return;
      }
      this.list[path] = true;
      const node = this.doc.createElement("link");
      node.rel = options.rel ?? "stylesheet";
      node.type = "text/css";
      node.href = path;
      this.attachAttributes(node, options.attributes);
      if (options.innerContent) {
        node.innerHTML = options.innerContent;
      }
      this.doc.getElementsByTagName("head")[0].appendChild(node);
      const item = {
        path,
        status: "ok"
      };
      this.cached[path] = item;
      resolve(item);
    });
  }
};
_LazyService.ɵfac = function LazyService_Factory(t) {
  return new (t || _LazyService)();
};
_LazyService.ɵprov = ɵɵdefineInjectable({
  token: _LazyService,
  factory: _LazyService.ɵfac,
  providedIn: "root"
});
var LazyService = _LazyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@delon/util/fesm2022/config.mjs
var ALAIN_CONFIG = new InjectionToken("alain-config", {
  providedIn: "root",
  factory: ALAIN_CONFIG_FACTORY
});
function ALAIN_CONFIG_FACTORY() {
  return {};
}
var _AlainConfigService = class _AlainConfigService {
  constructor(defaultConfig) {
    this.config = __spreadValues({}, defaultConfig);
  }
  get(componentName, key) {
    const res = this.config[componentName] || {};
    return key ? {
      [key]: res[key]
    } : res;
  }
  merge(componentName, ...defaultValues) {
    return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
  }
  attach(componentThis, componentName, defaultValues) {
    Object.assign(componentThis, this.merge(componentName, defaultValues));
  }
  attachKey(componentThis, componentName, key) {
    Object.assign(componentThis, this.get(componentName, key));
  }
  set(componentName, value) {
    this.config[componentName] = __spreadValues(__spreadValues({}, this.config[componentName]), value);
  }
};
_AlainConfigService.ɵfac = function AlainConfigService_Factory(t) {
  return new (t || _AlainConfigService)(ɵɵinject(ALAIN_CONFIG, 8));
};
_AlainConfigService.ɵprov = ɵɵdefineInjectable({
  token: _AlainConfigService,
  factory: _AlainConfigService.ɵfac,
  providedIn: "root"
});
var AlainConfigService = _AlainConfigService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlainConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ALAIN_CONFIG]
    }]
  }], null);
})();

export {
  deepGet,
  deepCopy,
  deepMergeKey,
  deepMerge,
  warn,
  LazyService,
  ALAIN_CONFIG,
  AlainConfigService
};
//# sourceMappingURL=chunk-Q3BVRUJT.js.map
