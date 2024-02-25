import {
  DOCUMENT
} from "./chunk-WL36VPKJ.js";
import {
  InjectionToken,
  inject
} from "./chunk-T4EVUEAM.js";
import {
  distinctUntilChanged,
  fromEvent,
  map,
  share,
  startWith
} from "./chunk-JKR55PDT.js";

// node_modules/@delon/util/fesm2022/token.mjs
var WINDOW = new InjectionToken("WINDOW", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var PAGE_VISIBILITY = new InjectionToken("PAGE_VISIBILITY`", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return fromEvent(doc, "visibilitychange").pipe(startWith(0), map(() => !doc.hidden), distinctUntilChanged(), share());
  }
});

export {
  WINDOW
};
//# sourceMappingURL=chunk-ZGRETNTS.js.map
