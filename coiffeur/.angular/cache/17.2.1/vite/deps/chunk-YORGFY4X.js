import {
  ElementRef,
  TemplateRef,
  isDevMode
} from "./chunk-T4EVUEAM.js";
import {
  from,
  isObservable,
  of
} from "./chunk-JKR55PDT.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-environments.mjs
var environment = {
  isTestMode: false
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-logger.mjs
var record = {};
var PREFIX = "[NG-ZORRO]:";
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
  if (environment.isTestMode || isDevMode() && notRecorded(...args)) {
    consoleFunc(...args);
  }
}
var warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs
function arraysEqual(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  const len = array1.length;
  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function isNotNil(value) {
  return typeof value !== "undefined" && value !== null;
}
function isNil(value) {
  return typeof value === "undefined" || value === null;
}
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
function isNonEmptyString(value) {
  return typeof value === "string" && value !== "";
}
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
function toBoolean(value) {
  return coerceBooleanProperty(value);
}
function toNumber(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function toCssPixel(value) {
  return coerceCssPixelValue(value);
}
function valueFunctionProp(prop, ...args) {
  return typeof prop === "function" ? prop(...args) : prop;
}
function propDecoratorFactory(name, fallback) {
  function propDecorator(target, propName, originalDescriptor) {
    const privatePropName = `$$__zorroPropDecorator__${propName}`;
    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
    }
    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });
    return {
      get() {
        return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
      },
      set(value) {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value));
        }
        this[privatePropName] = fallback(value);
      }
    };
  }
  return propDecorator;
}
function InputBoolean() {
  return propDecoratorFactory("InputBoolean", toBoolean);
}
function InputNumber(fallbackValue) {
  return propDecoratorFactory("InputNumber", (value) => toNumber(value, fallbackValue));
}
function getElementOffset(elem) {
  if (!elem.getClientRects().length) {
    return { top: 0, left: 0 };
  }
  const rect = elem.getBoundingClientRect();
  const win = elem.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}
function isTouchEvent(event) {
  return event.type.startsWith("touch");
}
function getEventPosition(event) {
  return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
function isPromise(obj) {
  return !!obj && typeof obj.then === "function" && typeof obj.catch === "function";
}
function isNumberFinite(value) {
  return typeof value === "number" && isFinite(value);
}
function toDecimal(value, decimal) {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
function sum(input, initial = 0) {
  return input.reduce((previous, current) => previous + current, initial);
}
function scrollIntoView(node) {
  const nodeAsAny = node;
  if (nodeAsAny.scrollIntoViewIfNeeded) {
    nodeAsAny.scrollIntoViewIfNeeded(false);
    return;
  }
  if (node.scrollIntoView) {
    node.scrollIntoView(false);
    return;
  }
}
var isBrowser = typeof window !== "undefined";
var isFirefox = isBrowser && window.mozInnerScreenX != null;
function getStyleAsText(styles) {
  if (!styles) {
    return "";
  }
  return Object.keys(styles).map((key) => {
    const val = styles[key];
    return `${key}:${typeof val === "string" ? val : `${val}px`}`;
  }).join(";");
}
var scrollbarVerticalSize;
var scrollbarHorizontalSize;
var scrollbarMeasure = {
  position: "absolute",
  top: "-9999px",
  width: "50px",
  height: "50px"
};
function measureScrollbar(direction = "vertical", prefix = "ant") {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return 0;
  }
  const isVertical = direction === "vertical";
  if (isVertical && scrollbarVerticalSize) {
    return scrollbarVerticalSize;
  } else if (!isVertical && scrollbarHorizontalSize) {
    return scrollbarHorizontalSize;
  }
  const scrollDiv = document.createElement("div");
  Object.keys(scrollbarMeasure).forEach((scrollProp) => {
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  });
  scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
  if (isVertical) {
    scrollDiv.style.overflowY = "scroll";
  } else {
    scrollDiv.style.overflowX = "scroll";
  }
  document.body.appendChild(scrollDiv);
  let size = 0;
  if (isVertical) {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    scrollbarVerticalSize = size;
  } else {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    scrollbarHorizontalSize = size;
  }
  document.body.removeChild(scrollDiv);
  return size;
}
function ensureInBounds(value, boundValue) {
  return value ? value < boundValue ? value : boundValue : boundValue;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var MARK_KEY = `rc-util-key`;
function getMark({ mark } = {}) {
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function injectCSS(css, options = {}) {
  if (!canUseDom()) {
    return null;
  }
  const styleNode = document.createElement("style");
  if (options.cspNonce) {
    styleNode.nonce = options.cspNonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(options);
  const { firstChild } = container;
  if (options.prepend && container.prepend) {
    container.prepend(styleNode);
  } else if (options.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
var containerCache = /* @__PURE__ */ new Map();
function findExistNode(key, option = {}) {
  const container = getContainer(option);
  return Array.from(containerCache.get(container)?.children || []).find((node) => node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key);
}
function updateCSS(css, key, options = {}) {
  const container = getContainer(options);
  if (!containerCache.has(container)) {
    const placeholderStyle = injectCSS("", options);
    const { parentNode } = placeholderStyle;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
  const existNode = findExistNode(key, options);
  if (existNode) {
    if (options.cspNonce && existNode.nonce !== options.cspNonce) {
      existNode.nonce = options.cspNonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, options);
  newNode?.setAttribute(getMark(options), key);
  return newNode;
}
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return {
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  };
}

export {
  coerceNumberProperty,
  coerceArray,
  coerceCssPixelValue,
  coerceElement,
  environment,
  PREFIX,
  warn,
  arraysEqual,
  isNotNil,
  isNil,
  shallowEqual,
  isNonEmptyString,
  isTemplateRef,
  toBoolean,
  toNumber,
  toCssPixel,
  valueFunctionProp,
  InputBoolean,
  InputNumber,
  getElementOffset,
  isTouchEvent,
  getEventPosition,
  isPromise,
  isNumberFinite,
  toDecimal,
  sum,
  scrollIntoView,
  getStyleAsText,
  measureScrollbar,
  ensureInBounds,
  wrapIntoObservable,
  canUseDom,
  updateCSS,
  getStatusClassNames
};
//# sourceMappingURL=chunk-YORGFY4X.js.map
