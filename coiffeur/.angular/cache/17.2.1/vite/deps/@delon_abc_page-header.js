import {
  ReuseTabService
} from "./chunk-KF4WV3VD.js";
import "./chunk-ZR55C46X.js";
import {
  NzResizeObserver
} from "./chunk-L2FU2BSY.js";
import {
  NzDropDownDirective,
  NzDropDownModule
} from "./chunk-SUUEDCXU.js";
import "./chunk-JKEQI6P6.js";
import "./chunk-3ZTF6XOF.js";
import {
  NzScrollService
} from "./chunk-CI5DGOKL.js";
import "./chunk-NTY5IID6.js";
import {
  ALAIN_I18N_TOKEN,
  MenuService,
  SettingsService,
  TitleService
} from "./chunk-KGHF7NNJ.js";
import "./chunk-FSEFCYMU.js";
import "./chunk-YI23FGK5.js";
import "./chunk-2X2DHHBW.js";
import "./chunk-XRNNFB2N.js";
import {
  CdkObserveContent,
  ObserversModule
} from "./chunk-IPKUYFYL.js";
import "./chunk-Y4W7AVST.js";
import "./chunk-7A7F2ESV.js";
import "./chunk-Z4GMGEHN.js";
import "./chunk-3Z4XHAHP.js";
import "./chunk-XF22SSGY.js";
import "./chunk-AH32UZUP.js";
import "./chunk-UYYIOVNB.js";
import "./chunk-27BDGVS6.js";
import "./chunk-A532CSVY.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-Z2ZVAQCX.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3MXKVZO7.js";
import "./chunk-5QBFNWJX.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-6WPOZNJ5.js";
import {
  InputBoolean,
  InputNumber,
  PREFIX,
  getStyleAsText,
  shallowEqual,
  toCssPixel
} from "./chunk-YORGFY4X.js";
import {
  BidiModule,
  Directionality
} from "./chunk-DSM4JBCF.js";
import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import {
  isEmpty
} from "./chunk-75EB2NOQ.js";
import {
  AlainConfigService
} from "./chunk-Q3BVRUJT.js";
import {
  Platform,
  PlatformModule
} from "./chunk-B7EG4KFO.js";
import "./chunk-NX2IJXEA.js";
import "./chunk-KN3RWPAL.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-TQFAWZD6.js";
import "./chunk-BPMU3QPJ.js";
import "./chunk-TECWR7MN.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-T4EVUEAM.js";
import {
  ReplaySubject,
  Subject,
  Subscription,
  __decorate,
  filter,
  fromEvent,
  map,
  merge,
  startWith,
  takeUntil,
  throttleTime
} from "./chunk-JKR55PDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-affix.mjs
var _c0 = ["fixedEl"];
var _c1 = ["*"];
var AffixRespondEvents;
(function(AffixRespondEvents2) {
  AffixRespondEvents2["resize"] = "resize";
  AffixRespondEvents2["scroll"] = "scroll";
  AffixRespondEvents2["touchstart"] = "touchstart";
  AffixRespondEvents2["touchmove"] = "touchmove";
  AffixRespondEvents2["touchend"] = "touchend";
  AffixRespondEvents2["pageshow"] = "pageshow";
  AffixRespondEvents2["load"] = "LOAD";
})(AffixRespondEvents || (AffixRespondEvents = {}));
function isTargetWindow(target) {
  return typeof window !== "undefined" && target === window;
}
function getTargetRect(target) {
  return !isTargetWindow(target) ? target.getBoundingClientRect() : {
    top: 0,
    left: 0,
    bottom: 0
  };
}
var NZ_CONFIG_MODULE_NAME = "affix";
var NZ_AFFIX_CLS_PREFIX = "ant-affix";
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
var _NzAffixComponent = class _NzAffixComponent {
  get target() {
    const el = this.nzTarget;
    return (typeof el === "string" ? this.document.querySelector(el) : el) || window;
  }
  constructor(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer, nzResizeObserver, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.ngZone = ngZone;
    this.platform = platform;
    this.renderer = renderer;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzChange = new EventEmitter();
    this.dir = "ltr";
    this.positionChangeSubscription = Subscription.EMPTY;
    this.offsetChanged$ = new ReplaySubject(1);
    this.destroy$ = new Subject();
    this.placeholderNode = el.nativeElement;
    this.document = doc;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.registerListeners();
      this.updatePosition({});
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzOffsetBottom,
      nzOffsetTop,
      nzTarget
    } = changes;
    if (nzOffsetBottom || nzOffsetTop) {
      this.offsetChanged$.next();
    }
    if (nzTarget) {
      this.registerListeners();
    }
  }
  ngAfterViewInit() {
    this.registerListeners();
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  registerListeners() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListeners();
    const el = this.target === window ? this.document.body : this.target;
    this.positionChangeSubscription = this.ngZone.runOutsideAngular(() => merge(...Object.keys(AffixRespondEvents).map((evName) => fromEvent(this.target, evName)), this.offsetChanged$.pipe(map(() => ({}))), this.nzResizeObserver.observe(el)).pipe(throttleTime(NZ_AFFIX_DEFAULT_SCROLL_TIME, void 0, {
      trailing: true
    }), takeUntil(this.destroy$)).subscribe((e) => this.updatePosition(e)));
    this.timeout = setTimeout(() => this.updatePosition({}));
  }
  removeListeners() {
    clearTimeout(this.timeout);
    this.positionChangeSubscription.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  getOffset(element, target) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = getTargetRect(target);
    const scrollTop = this.scrollSrv.getScroll(target, true);
    const scrollLeft = this.scrollSrv.getScroll(target, false);
    const docElem = this.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;
    return {
      top: elemRect.top - targetRect.top + scrollTop - clientTop,
      left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    };
  }
  setAffixStyle(e, affixStyle) {
    const originalAffixStyle = this.affixStyle;
    const isWindow = this.target === window;
    if (e.type === "scroll" && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if (shallowEqual(originalAffixStyle, affixStyle)) {
      return;
    }
    const fixed = !!affixStyle;
    const wrapEl = this.fixedEl.nativeElement;
    this.renderer.setStyle(wrapEl, "cssText", getStyleAsText(affixStyle));
    this.affixStyle = affixStyle;
    if (fixed) {
      wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
    } else {
      wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
    }
    this.updateRtlClass();
    if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
      this.nzChange.emit(fixed);
    }
  }
  setPlaceholderStyle(placeholderStyle) {
    const originalPlaceholderStyle = this.placeholderStyle;
    if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", getStyleAsText(placeholderStyle));
    this.placeholderStyle = placeholderStyle;
  }
  syncPlaceholderStyle(e) {
    if (!this.affixStyle) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", "");
    this.placeholderStyle = void 0;
    const styleObj = {
      width: this.placeholderNode.offsetWidth,
      height: this.fixedEl.nativeElement.offsetHeight
    };
    this.setAffixStyle(e, __spreadValues(__spreadValues({}, this.affixStyle), styleObj));
    this.setPlaceholderStyle(styleObj);
  }
  updatePosition(e) {
    if (!this.platform.isBrowser) {
      return;
    }
    const targetNode = this.target;
    let offsetTop = this.nzOffsetTop;
    const scrollTop = this.scrollSrv.getScroll(targetNode, true);
    const elemOffset = this.getOffset(this.placeholderNode, targetNode);
    const fixedNode = this.fixedEl.nativeElement;
    const elemSize = {
      width: fixedNode.offsetWidth,
      height: fixedNode.offsetHeight
    };
    const offsetMode = {
      top: false,
      bottom: false
    };
    if (typeof offsetTop !== "number" && typeof this.nzOffsetBottom !== "number") {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === "number";
      offsetMode.bottom = typeof this.nzOffsetBottom === "number";
    }
    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
      const width = elemOffset.width;
      const top = targetRect.top + offsetTop;
      this.setAffixStyle(e, {
        position: "fixed",
        top,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemSize.height
      });
    } else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
      const targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
      const width = elemOffset.width;
      this.setAffixStyle(e, {
        position: "fixed",
        bottom: targetBottomOffset + this.nzOffsetBottom,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height
      });
    } else {
      if (e.type === AffixRespondEvents.resize && this.affixStyle && this.affixStyle.position === "fixed" && this.placeholderNode.offsetWidth) {
        this.setAffixStyle(e, __spreadProps(__spreadValues({}, this.affixStyle), {
          width: this.placeholderNode.offsetWidth
        }));
      } else {
        this.setAffixStyle(e);
      }
      this.setPlaceholderStyle();
    }
    if (e.type === "resize") {
      this.syncPlaceholderStyle(e);
    }
  }
  updateRtlClass() {
    const wrapEl = this.fixedEl.nativeElement;
    if (this.dir === "rtl") {
      if (wrapEl.classList.contains(NZ_AFFIX_CLS_PREFIX)) {
        wrapEl.classList.add(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      } else {
        wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      }
    } else {
      wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
    }
  }
};
_NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) {
  return new (t || _NzAffixComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzAffixComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAffixComponent,
  selectors: [["nz-affix"]],
  viewQuery: function NzAffixComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    }
  },
  inputs: {
    nzTarget: "nzTarget",
    nzOffsetTop: "nzOffsetTop",
    nzOffsetBottom: "nzOffsetBottom"
  },
  outputs: {
    nzChange: "nzChange"
  },
  exportAs: ["nzAffix"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["fixedEl", ""]],
  template: function NzAffixComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  dependencies: [BidiModule, PlatformModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzAffixComponent = _NzAffixComponent;
__decorate([WithConfig(), InputNumber(void 0)], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([WithConfig(), InputNumber(void 0)], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixComponent, [{
    type: Component,
    args: [{
      selector: "nz-affix",
      exportAs: "nzAffix",
      standalone: true,
      imports: [BidiModule, PlatformModule],
      template: `
    <div #fixedEl>
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: Renderer2
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    fixedEl: [{
      type: ViewChild,
      args: ["fixedEl", {
        static: true
      }]
    }],
    nzTarget: [{
      type: Input
    }],
    nzOffsetTop: [{
      type: Input
    }],
    nzOffsetBottom: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }]
  });
})();
var _NzAffixModule = class _NzAffixModule {
};
_NzAffixModule.ɵfac = function NzAffixModule_Factory(t) {
  return new (t || _NzAffixModule)();
};
_NzAffixModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAffixModule,
  imports: [NzAffixComponent],
  exports: [NzAffixComponent]
});
_NzAffixModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAffixComponent]
});
var NzAffixModule = _NzAffixModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixModule, [{
    type: NgModule,
    args: [{
      exports: [NzAffixComponent],
      imports: [NzAffixComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs
var _c02 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelement(2, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("nzDropdownMenu", ctx_r0.nzOverlay);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r7.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-breadcrumb-separator");
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-breadcrumb-item")(1, "a", 0);
    ɵɵlistener("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r8);
      const breadcrumb_r2 = restoredCtx.$implicit;
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.navigate(breadcrumb_r2.url, $event));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵattribute("href", breadcrumb_r2.url, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.breadcrumbs);
  }
}
var _NzBreadCrumbSeparatorComponent = class _NzBreadCrumbSeparatorComponent {
};
_NzBreadCrumbSeparatorComponent.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) {
  return new (t || _NzBreadCrumbSeparatorComponent)();
};
_NzBreadCrumbSeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbSeparatorComponent,
  selectors: [["nz-breadcrumb-separator"]],
  hostAttrs: [1, "ant-breadcrumb-separator"],
  exportAs: ["nzBreadcrumbSeparator"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NzBreadCrumbSeparatorComponent = _NzBreadCrumbSeparatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-breadcrumb-separator",
      exportAs: "nzBreadcrumbSeparator",
      standalone: true,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-breadcrumb-separator"
      }
    }]
  }], null, null);
})();
var NzBreadcrumb = class {
};
var _NzBreadCrumbItemComponent = class _NzBreadCrumbItemComponent {
  constructor(nzBreadCrumbComponent) {
    this.nzBreadCrumbComponent = nzBreadCrumbComponent;
  }
};
_NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) {
  return new (t || _NzBreadCrumbItemComponent)(ɵɵdirectiveInject(NzBreadcrumb));
};
_NzBreadCrumbItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbItemComponent,
  selectors: [["nz-breadcrumb-item"]],
  inputs: {
    nzOverlay: "nzOverlay"
  },
  exportAs: ["nzBreadcrumbItem"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 2,
  consts: [["class", "ant-breadcrumb-overlay-link", "nz-dropdown", "", 3, "nzDropdownMenu"], ["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
  template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 0)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1)(2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator")(3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, !!ctx.nzOverlay ? 0 : 1);
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzDropDownDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzBreadCrumbItemComponent = _NzBreadCrumbItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb-item",
      exportAs: "nzBreadcrumbItem",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzIconModule, NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <span nz-icon nzType="down"></span>
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], () => [{
    type: NzBreadcrumb
  }], {
    nzOverlay: [{
      type: Input
    }]
  });
})();
var _NzBreadCrumbComponent = class _NzBreadCrumbComponent {
  constructor(injector, cdr, elementRef, renderer, directionality) {
    this.injector = injector;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.nzAutoGenerate = false;
    this.nzSeparator = "/";
    this.nzRouteLabel = "breadcrumb";
    this.nzRouteLabelFn = (label) => label;
    this.breadcrumbs = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$),
        startWith(true)
        // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch (e) {
      throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl = child.snapshot.url.map((segment) => segment.path).filter((path) => path).join("/");
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: nextUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    }
  }
};
_NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) {
  return new (t || _NzBreadCrumbComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8));
};
_NzBreadCrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbComponent,
  selectors: [["nz-breadcrumb"]],
  hostAttrs: [1, "ant-breadcrumb"],
  inputs: {
    nzAutoGenerate: "nzAutoGenerate",
    nzSeparator: "nzSeparator",
    nzRouteLabel: "nzRouteLabel",
    nzRouteLabelFn: "nzRouteLabelFn"
  },
  exportAs: ["nzBreadcrumb"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NzBreadcrumb,
    useExisting: _NzBreadCrumbComponent
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [[3, "click"]],
  template: function NzBreadCrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
    }
  },
  dependencies: [NzBreadCrumbItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzBreadCrumbComponent = _NzBreadCrumbComponent;
__decorate([InputBoolean()], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb",
      exportAs: "nzBreadcrumb",
      preserveWhitespaces: false,
      providers: [{
        provide: NzBreadcrumb,
        useExisting: NzBreadCrumbComponent
      }],
      standalone: true,
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: "ant-breadcrumb"
      }
    }]
  }], () => [{
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAutoGenerate: [{
      type: Input
    }],
    nzSeparator: [{
      type: Input
    }],
    nzRouteLabel: [{
      type: Input
    }],
    nzRouteLabelFn: [{
      type: Input
    }]
  });
})();
var _NzBreadCrumbModule = class _NzBreadCrumbModule {
};
_NzBreadCrumbModule.ɵfac = function NzBreadCrumbModule_Factory(t) {
  return new (t || _NzBreadCrumbModule)();
};
_NzBreadCrumbModule.ɵmod = ɵɵdefineNgModule({
  type: _NzBreadCrumbModule,
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
  exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
});
_NzBreadCrumbModule.ɵinj = ɵɵdefineInjector({
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
});
var NzBreadCrumbModule = _NzBreadCrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbModule, [{
    type: NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-skeleton.mjs
var _c03 = ["nzType", "button"];
var _c12 = ["nzType", "avatar"];
var _c2 = ["nzType", "input"];
var _c3 = ["nzType", "image"];
function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "nz-skeleton-element", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzSize", ctx_r2.avatar.size || "default")("nzShape", ctx_r2.avatar.shape || "circle");
  }
}
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h3", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r3.toCSSUnit(ctx_r3.title.width));
  }
}
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li");
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r5.toCSSUnit(ctx_r5.widthList[i_r7]));
  }
}
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 8);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 2, "li", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.rowsList);
  }
}
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 2, "div", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 2, "h3", 3)(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !!ctx_r0.nzAvatar);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !!ctx_r0.nzTitle);
    ɵɵadvance();
    ɵɵproperty("ngIf", !!ctx_r0.nzParagraph);
  }
}
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
var _c4 = ["*"];
var _NzSkeletonElementDirective = class _NzSkeletonElementDirective {
  constructor() {
    this.nzActive = false;
    this.nzBlock = false;
  }
};
_NzSkeletonElementDirective.ɵfac = function NzSkeletonElementDirective_Factory(t) {
  return new (t || _NzSkeletonElementDirective)();
};
_NzSkeletonElementDirective.ɵdir = ɵɵdefineDirective({
  type: _NzSkeletonElementDirective,
  selectors: [["nz-skeleton-element"]],
  hostAttrs: [1, "ant-skeleton", "ant-skeleton-element"],
  hostVars: 4,
  hostBindings: function NzSkeletonElementDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-active", ctx.nzActive)("ant-skeleton-block", ctx.nzBlock);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzType: "nzType",
    nzBlock: "nzBlock"
  },
  standalone: true
});
var NzSkeletonElementDirective = _NzSkeletonElementDirective;
__decorate([InputBoolean()], NzSkeletonElementDirective.prototype, "nzBlock", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementDirective, [{
    type: Directive,
    args: [{
      selector: "nz-skeleton-element",
      host: {
        class: "ant-skeleton ant-skeleton-element",
        "[class.ant-skeleton-active]": "nzActive",
        "[class.ant-skeleton-block]": "nzBlock"
      },
      standalone: true
    }]
  }], () => [], {
    nzActive: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzBlock: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementButtonComponent = class _NzSkeletonElementButtonComponent {
  constructor() {
    this.nzShape = "default";
    this.nzSize = "default";
  }
};
_NzSkeletonElementButtonComponent.ɵfac = function NzSkeletonElementButtonComponent_Factory(t) {
  return new (t || _NzSkeletonElementButtonComponent)();
};
_NzSkeletonElementButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementButtonComponent,
  selectors: [["nz-skeleton-element", "nzType", "button"]],
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c03,
  decls: 1,
  vars: 8,
  consts: [[1, "ant-skeleton-button"]],
  template: function NzSkeletonElementButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-button-round", ctx.nzShape === "round")("ant-skeleton-button-circle", ctx.nzShape === "circle")("ant-skeleton-button-lg", ctx.nzSize === "large")("ant-skeleton-button-sm", ctx.nzSize === "small");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementButtonComponent = _NzSkeletonElementButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementButtonComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="button"]',
      template: `
    <span
      class="ant-skeleton-button"
      [class.ant-skeleton-button-round]="nzShape === 'round'"
      [class.ant-skeleton-button-circle]="nzShape === 'circle'"
      [class.ant-skeleton-button-lg]="nzSize === 'large'"
      [class.ant-skeleton-button-sm]="nzSize === 'small'"
    ></span>
  `,
      standalone: true
    }]
  }], null, {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementAvatarComponent = class _NzSkeletonElementAvatarComponent {
  constructor() {
    this.nzShape = "circle";
    this.nzSize = "default";
    this.styleMap = {};
  }
  ngOnChanges(changes) {
    if (changes.nzSize && typeof this.nzSize === "number") {
      const sideLength = `${this.nzSize}px`;
      this.styleMap = {
        width: sideLength,
        height: sideLength,
        "line-height": sideLength
      };
    } else {
      this.styleMap = {};
    }
  }
};
_NzSkeletonElementAvatarComponent.ɵfac = function NzSkeletonElementAvatarComponent_Factory(t) {
  return new (t || _NzSkeletonElementAvatarComponent)();
};
_NzSkeletonElementAvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementAvatarComponent,
  selectors: [["nz-skeleton-element", "nzType", "avatar"]],
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c12,
  decls: 1,
  vars: 9,
  consts: [[1, "ant-skeleton-avatar", 3, "ngStyle"]],
  template: function NzSkeletonElementAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-avatar-square", ctx.nzShape === "square")("ant-skeleton-avatar-circle", ctx.nzShape === "circle")("ant-skeleton-avatar-lg", ctx.nzSize === "large")("ant-skeleton-avatar-sm", ctx.nzSize === "small");
      ɵɵproperty("ngStyle", ctx.styleMap);
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementAvatarComponent = _NzSkeletonElementAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementAvatarComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="avatar"]',
      template: `
    <span
      class="ant-skeleton-avatar"
      [class.ant-skeleton-avatar-square]="nzShape === 'square'"
      [class.ant-skeleton-avatar-circle]="nzShape === 'circle'"
      [class.ant-skeleton-avatar-lg]="nzSize === 'large'"
      [class.ant-skeleton-avatar-sm]="nzSize === 'small'"
      [ngStyle]="styleMap"
    ></span>
  `,
      imports: [NgStyle],
      standalone: true
    }]
  }], null, {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementInputComponent = class _NzSkeletonElementInputComponent {
  constructor() {
    this.nzSize = "default";
  }
};
_NzSkeletonElementInputComponent.ɵfac = function NzSkeletonElementInputComponent_Factory(t) {
  return new (t || _NzSkeletonElementInputComponent)();
};
_NzSkeletonElementInputComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementInputComponent,
  selectors: [["nz-skeleton-element", "nzType", "input"]],
  inputs: {
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c2,
  decls: 1,
  vars: 4,
  consts: [[1, "ant-skeleton-input"]],
  template: function NzSkeletonElementInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-input-lg", ctx.nzSize === "large")("ant-skeleton-input-sm", ctx.nzSize === "small");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementInputComponent = _NzSkeletonElementInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementInputComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="input"]',
      template: `
    <span
      class="ant-skeleton-input"
      [class.ant-skeleton-input-lg]="nzSize === 'large'"
      [class.ant-skeleton-input-sm]="nzSize === 'small'"
    ></span>
  `,
      standalone: true
    }]
  }], null, {
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementImageComponent = class _NzSkeletonElementImageComponent {
};
_NzSkeletonElementImageComponent.ɵfac = function NzSkeletonElementImageComponent_Factory(t) {
  return new (t || _NzSkeletonElementImageComponent)();
};
_NzSkeletonElementImageComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementImageComponent,
  selectors: [["nz-skeleton-element", "nzType", "image"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 3,
  vars: 0,
  consts: [[1, "ant-skeleton-image"], ["viewBox", "0 0 1098 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-skeleton-image-svg"], ["d", "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", 1, "ant-skeleton-image-path"]],
  template: function NzSkeletonElementImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementImageComponent = _NzSkeletonElementImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementImageComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="image"]',
      template: `
    <span class="ant-skeleton-image">
      <svg class="ant-skeleton-image-svg" viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"
          class="ant-skeleton-image-path"
        />
      </svg>
    </span>
  `,
      standalone: true
    }]
  }], null, null);
})();
var _NzSkeletonComponent = class _NzSkeletonComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.nzActive = false;
    this.nzLoading = true;
    this.nzRound = false;
    this.nzTitle = true;
    this.nzAvatar = false;
    this.nzParagraph = true;
    this.rowsList = [];
    this.widthList = [];
  }
  toCSSUnit(value = "") {
    return toCssPixel(value);
  }
  getTitleProps() {
    const hasAvatar = !!this.nzAvatar;
    const hasParagraph = !!this.nzParagraph;
    let width = "";
    if (!hasAvatar && hasParagraph) {
      width = "38%";
    } else if (hasAvatar && hasParagraph) {
      width = "50%";
    }
    return __spreadValues({
      width
    }, this.getProps(this.nzTitle));
  }
  getAvatarProps() {
    const shape = !!this.nzTitle && !this.nzParagraph ? "square" : "circle";
    const size = "large";
    return __spreadValues({
      shape,
      size
    }, this.getProps(this.nzAvatar));
  }
  getParagraphProps() {
    const hasAvatar = !!this.nzAvatar;
    const hasTitle = !!this.nzTitle;
    const basicProps = {};
    if (!hasAvatar || !hasTitle) {
      basicProps.width = "61%";
    }
    if (!hasAvatar && hasTitle) {
      basicProps.rows = 3;
    } else {
      basicProps.rows = 2;
    }
    return __spreadValues(__spreadValues({}, basicProps), this.getProps(this.nzParagraph));
  }
  getProps(prop) {
    return prop && typeof prop === "object" ? prop : {};
  }
  getWidthList() {
    const {
      width,
      rows
    } = this.paragraph;
    let widthList = [];
    if (width && Array.isArray(width)) {
      widthList = width;
    } else if (width && !Array.isArray(width)) {
      widthList = [];
      widthList[rows - 1] = width;
    }
    return widthList;
  }
  updateProps() {
    this.title = this.getTitleProps();
    this.avatar = this.getAvatarProps();
    this.paragraph = this.getParagraphProps();
    this.rowsList = [...Array(this.paragraph.rows)];
    this.widthList = this.getWidthList();
    this.cdr.markForCheck();
  }
  ngOnInit() {
    this.updateProps();
  }
  ngOnChanges(changes) {
    if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
      this.updateProps();
    }
  }
};
_NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) {
  return new (t || _NzSkeletonComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzSkeletonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonComponent,
  selectors: [["nz-skeleton"]],
  hostAttrs: [1, "ant-skeleton"],
  hostVars: 6,
  hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive)("ant-skeleton-round", !!ctx.nzRound);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzLoading: "nzLoading",
    nzRound: "nzRound",
    nzTitle: "nzTitle",
    nzAvatar: "nzAvatar",
    nzParagraph: "nzParagraph"
  },
  exportAs: ["nzSkeleton"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], ["nzType", "avatar", 3, "nzSize", "nzShape"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]],
  template: function NzSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0)(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.nzLoading);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.nzLoading);
    }
  },
  dependencies: [NzSkeletonElementDirective, NzSkeletonElementAvatarComponent, NgIf, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonComponent = _NzSkeletonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-skeleton",
      exportAs: "nzSkeleton",
      host: {
        class: "ant-skeleton",
        "[class.ant-skeleton-with-avatar]": "!!nzAvatar",
        "[class.ant-skeleton-active]": "nzActive",
        "[class.ant-skeleton-round]": "!!nzRound"
      },
      template: `
    <ng-container *ngIf="nzLoading">
      <div class="ant-skeleton-header" *ngIf="!!nzAvatar">
        <nz-skeleton-element
          nzType="avatar"
          [nzSize]="avatar.size || 'default'"
          [nzShape]="avatar.shape || 'circle'"
        ></nz-skeleton-element>
      </div>
      <div class="ant-skeleton-content">
        <h3 *ngIf="!!nzTitle" class="ant-skeleton-title" [style.width]="toCSSUnit(title.width)"></h3>
        <ul *ngIf="!!nzParagraph" class="ant-skeleton-paragraph">
          <li *ngFor="let row of rowsList; let i = index" [style.width]="toCSSUnit(widthList[i])"></li>
        </ul>
      </div>
    </ng-container>
    <ng-container *ngIf="!nzLoading">
      <ng-content></ng-content>
    </ng-container>
  `,
      imports: [NzSkeletonElementDirective, NzSkeletonElementAvatarComponent, NgIf, NgForOf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    nzActive: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzRound: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzAvatar: [{
      type: Input
    }],
    nzParagraph: [{
      type: Input
    }]
  });
})();
var _NzSkeletonModule = class _NzSkeletonModule {
};
_NzSkeletonModule.ɵfac = function NzSkeletonModule_Factory(t) {
  return new (t || _NzSkeletonModule)();
};
_NzSkeletonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSkeletonModule,
  imports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent],
  exports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]
});
_NzSkeletonModule.ɵinj = ɵɵdefineInjector({});
var NzSkeletonModule = _NzSkeletonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent],
      exports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]
    }]
  }], null, null);
})();

// node_modules/@delon/abc/fesm2022/page-header.mjs
var _c04 = ["conTpl"];
var _c13 = ["affix"];
function PageHeaderComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
}
function PageHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-affix", 0, 2);
    ɵɵtemplate(2, PageHeaderComponent_Conditional_0_ng_template_2_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵproperty("nzOffsetTop", ctx_r0.fixedOffsetTop);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function PageHeaderComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function PageHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageHeaderComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageHeaderComponent_ng_template_2_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.breadcrumb);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r19 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", i_r19.link);
    ɵɵadvance();
    ɵɵtextInterpolate(i_r19.title);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const i_r19 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", i_r19.title, " ");
  }
}
function PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Conditional_1_Template, 2, 2, "a", 15)(2, PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r19 = ctx.$implicit;
    ɵɵadvance();
    ɵɵconditional(1, i_r19.link ? 1 : 2);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-breadcrumb");
    ɵɵrepeaterCreate(1, PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_For_2_Template, 3, 1, "nz-breadcrumb-item", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵrepeater(ctx_r17.paths);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageHeaderComponent_ng_template_2_Conditional_4_Conditional_0_Template, 3, 0, "nz-breadcrumb");
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r8.paths && ctx_r8.paths.length > 0 ? 0 : -1);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r9.logo);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_9_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageHeaderComponent_ng_template_2_Conditional_9_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r29._titleTpl);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r33.titleSub);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small");
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r32.titleSub);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Conditional_1_Template, 2, 1, "small");
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ctx_r30._titleVal, " ");
    ɵɵadvance();
    ɵɵconditional(1, ctx_r30.titleSub ? 1 : -1);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1", 17);
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_9_Conditional_1_Template, 1, 1, null, 3)(2, PageHeaderComponent_ng_template_2_Conditional_9_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r10._titleTpl ? 1 : 2);
  }
}
function PageHeaderComponent_ng_template_2_Conditional_10_ng_template_1_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_10_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.action);
  }
}
function PageHeaderComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_16_ng_template_1_Template(rf, ctx) {
}
function PageHeaderComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, PageHeaderComponent_ng_template_2_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r14.extra);
  }
}
function PageHeaderComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
}
var _c22 = () => ({
  rows: 3
});
var _c32 = () => ({
  size: "large",
  shape: "circle"
});
function PageHeaderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div")(2, "nz-skeleton", 5);
    ɵɵtemplate(3, PageHeaderComponent_ng_template_2_Conditional_3_Template, 1, 1, null, 3)(4, PageHeaderComponent_ng_template_2_Conditional_4_Template, 1, 1);
    ɵɵelementStart(5, "div", 6);
    ɵɵtemplate(6, PageHeaderComponent_ng_template_2_Conditional_6_Template, 2, 1, "div", 7);
    ɵɵelementStart(7, "div", 8)(8, "div", 9);
    ɵɵtemplate(9, PageHeaderComponent_ng_template_2_Conditional_9_Template, 3, 1, "h1", 10)(10, PageHeaderComponent_ng_template_2_Conditional_10_Template, 2, 1, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 9)(12, "div", 12, 13);
    ɵɵlistener("cdkObserveContent", function PageHeaderComponent_ng_template_2_Template_div_cdkObserveContent_12_listener() {
      ɵɵrestoreView(_r37);
      const ctx_r36 = ɵɵnextContext();
      return ɵɵresetView(ctx_r36.checkContent());
    });
    ɵɵprojection(14);
    ɵɵtemplate(15, PageHeaderComponent_ng_template_2_ng_template_15_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
    ɵɵtemplate(16, PageHeaderComponent_ng_template_2_Conditional_16_Template, 2, 1, "div", 14);
    ɵɵelementEnd()()();
    ɵɵtemplate(17, PageHeaderComponent_ng_template_2_ng_template_17_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("page-header-rtl", ctx_r2.dir === "rtl");
    ɵɵadvance();
    ɵɵclassProp("page-header__wide", ctx_r2.wide);
    ɵɵadvance();
    ɵɵproperty("nzLoading", ctx_r2.loading)("nzTitle", false)("nzActive", true)("nzParagraph", ɵɵpureFunction0(16, _c22))("nzAvatar", ɵɵpureFunction0(17, _c32));
    ɵɵadvance();
    ɵɵconditional(3, ctx_r2.breadcrumb ? 3 : 4);
    ɵɵadvance(3);
    ɵɵconditional(6, ctx_r2.logo ? 6 : -1);
    ɵɵadvance(3);
    ɵɵconditional(9, ctx_r2._titleVal || ctx_r2._titleTpl ? 9 : -1);
    ɵɵadvance();
    ɵɵconditional(10, ctx_r2.action ? 10 : -1);
    ɵɵadvance(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.content);
    ɵɵadvance();
    ɵɵconditional(16, ctx_r2.extra ? 16 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tab);
  }
}
var _c42 = ["*"];
var _PageHeaderComponent = class _PageHeaderComponent {
  get menus() {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
  }
  set title(value) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
      this._titleVal = "";
    } else {
      this._title = value;
      this._titleVal = this._title;
    }
  }
  // #endregion
  constructor(settings, configSrv, platform) {
    this.renderer = inject(Renderer2);
    this.router = inject(Router);
    this.cdr = inject(ChangeDetectorRef);
    this.menuSrv = inject(MenuService);
    this.i18nSrv = inject(ALAIN_I18N_TOKEN, {
      optional: true
    });
    this.titleSrv = inject(TitleService, {
      optional: true
    });
    this.reuseSrv = inject(ReuseTabService, {
      optional: true
    });
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.destroy$ = inject(DestroyRef);
    this.inited = false;
    this.isBrowser = true;
    this.dir = "ltr";
    this._titleVal = "";
    this.paths = [];
    this._title = null;
    this._titleTpl = null;
    this.loading = false;
    this.wide = false;
    this.breadcrumb = null;
    this.logo = null;
    this.action = null;
    this.content = null;
    this.extra = null;
    this.tab = null;
    this.isBrowser = platform.isBrowser;
    configSrv.attach(this, "pageHeader", {
      home: "首页",
      homeLink: "/",
      autoBreadcrumb: true,
      recursiveBreadcrumb: false,
      autoTitle: true,
      syncTitle: true,
      fixed: false,
      fixedOffsetTop: 64
    });
    settings.notify.pipe(takeUntilDestroyed(), filter((w) => this.affix && w.type === "layout" && w.name === "collapsed")).subscribe(() => this.affix.updatePosition({}));
    const obsList = [this.router.events.pipe(filter((ev) => ev instanceof NavigationEnd))];
    if (this.menuSrv != null)
      obsList.push(this.menuSrv.change);
    if (this.i18nSrv != null)
      obsList.push(this.i18nSrv.change);
    merge(...obsList).pipe(takeUntilDestroyed(), filter(() => this.inited)).subscribe(() => this.refresh());
  }
  refresh() {
    this.setTitle().genBreadcrumb();
    this.cdr.detectChanges();
  }
  genBreadcrumb() {
    if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
      this.paths = [];
      return;
    }
    const paths = [];
    this.menus.forEach((item) => {
      if (typeof item.hideInBreadcrumb !== "undefined" && item.hideInBreadcrumb)
        return;
      let title = item.text;
      if (item.i18n && this.i18nSrv)
        title = this.i18nSrv.fanyi(item.i18n);
      paths.push({
        title,
        link: item.link && [item.link]
      });
    });
    if (this.home) {
      paths.splice(0, 0, {
        title: this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n) || this.home,
        link: [this.homeLink]
      });
    }
    this.paths = paths;
  }
  setTitle() {
    if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) {
        title = this.i18nSrv.fanyi(item.i18n);
      }
      this._titleVal = title;
    }
    if (this._titleVal && this.syncTitle) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(this._titleVal);
      }
      if (!this.inited && this.reuseSrv) {
        this.reuseSrv.title = this._titleVal;
      }
    }
    return this;
  }
  checkContent() {
    if (isEmpty(this.conTpl.nativeElement)) {
      this.renderer.setAttribute(this.conTpl.nativeElement, "hidden", "");
    } else {
      this.renderer.removeAttribute(this.conTpl.nativeElement, "hidden");
    }
  }
  ngOnInit() {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.refresh();
    this.inited = true;
  }
  ngAfterViewInit() {
    this.checkContent();
  }
  ngOnChanges() {
    if (this.inited) {
      this.refresh();
    }
  }
};
_PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
  return new (t || _PageHeaderComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(AlainConfigService), ɵɵdirectiveInject(Platform));
};
_PageHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageHeaderComponent,
  selectors: [["page-header"]],
  viewQuery: function PageHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c04, 5);
      ɵɵviewQuery(_c13, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.conTpl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.affix = _t.first);
    }
  },
  inputs: {
    title: "title",
    titleSub: "titleSub",
    loading: [InputFlags.HasDecoratorInputTransform, "loading", "loading", booleanAttribute],
    wide: [InputFlags.HasDecoratorInputTransform, "wide", "wide", booleanAttribute],
    home: "home",
    homeLink: "homeLink",
    homeI18n: "homeI18n",
    autoBreadcrumb: [InputFlags.HasDecoratorInputTransform, "autoBreadcrumb", "autoBreadcrumb", booleanAttribute],
    autoTitle: [InputFlags.HasDecoratorInputTransform, "autoTitle", "autoTitle", booleanAttribute],
    syncTitle: [InputFlags.HasDecoratorInputTransform, "syncTitle", "syncTitle", booleanAttribute],
    fixed: [InputFlags.HasDecoratorInputTransform, "fixed", "fixed", booleanAttribute],
    fixedOffsetTop: [InputFlags.HasDecoratorInputTransform, "fixedOffsetTop", "fixedOffsetTop", numberAttribute],
    breadcrumb: "breadcrumb",
    recursiveBreadcrumb: [InputFlags.HasDecoratorInputTransform, "recursiveBreadcrumb", "recursiveBreadcrumb", booleanAttribute],
    logo: "logo",
    action: "action",
    content: "content",
    extra: "extra",
    tab: "tab"
  },
  exportAs: ["pageHeader"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c42,
  decls: 4,
  vars: 1,
  consts: [[3, "nzOffsetTop"], ["phTpl", ""], ["affix", ""], [3, "ngTemplateOutlet"], [1, "page-header"], [1, "d-block", 3, "nzLoading", "nzTitle", "nzActive", "nzParagraph", "nzAvatar"], [1, "page-header__detail"], ["class", "page-header__logo"], [1, "page-header__main"], [1, "page-header__row"], ["class", "page-header__title"], ["class", "page-header__action"], [1, "page-header__desc", 3, "cdkObserveContent"], ["conTpl", ""], ["class", "page-header__extra"], [3, "routerLink"], [1, "page-header__logo"], [1, "page-header__title"], [4, "nzStringTemplateOutlet"], [1, "page-header__action"], [1, "page-header__extra"]],
  template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, PageHeaderComponent_Conditional_0_Template, 3, 2, "nz-affix", 0)(1, PageHeaderComponent_Conditional_1_Template, 1, 1)(2, PageHeaderComponent_ng_template_2_Template, 18, 18, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.isBrowser && ctx.fixed ? 0 : 1);
    }
  },
  dependencies: [NzAffixComponent, NgTemplateOutlet, NzSkeletonComponent, NzBreadCrumbComponent, NzBreadCrumbItemComponent, RouterLink, NzStringTemplateOutletDirective, CdkObserveContent],
  encapsulation: 2,
  changeDetection: 0
});
var PageHeaderComponent = _PageHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "page-header",
      exportAs: "pageHeader",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NzAffixComponent, NgTemplateOutlet, NzSkeletonComponent, NzBreadCrumbComponent, NzBreadCrumbItemComponent, RouterLink, NzStringTemplateOutletDirective, CdkObserveContent],
      template: `@if (isBrowser && fixed) {
  <nz-affix #affix [nzOffsetTop]="fixedOffsetTop">
    <ng-template [ngTemplateOutlet]="phTpl" />
  </nz-affix>
} @else {
  <ng-template [ngTemplateOutlet]="phTpl" />
}
<ng-template #phTpl>
  <div class="page-header" [class.page-header-rtl]="dir === 'rtl'">
    <div [class.page-header__wide]="wide">
      <nz-skeleton
        [nzLoading]="loading"
        [nzTitle]="false"
        [nzActive]="true"
        [nzParagraph]="{ rows: 3 }"
        [nzAvatar]="{ size: 'large', shape: 'circle' }"
        class="d-block"
      >
        @if (breadcrumb) {
          <ng-template [ngTemplateOutlet]="breadcrumb" />
        } @else {
          @if (paths && paths.length > 0) {
            <nz-breadcrumb>
              @for (i of paths; track $index) {
                <nz-breadcrumb-item>
                  @if (i.link) {
                    <a [routerLink]="i.link">{{ i.title }}</a>
                  } @else {
                    {{ i.title }}
                  }
                </nz-breadcrumb-item>
              }
            </nz-breadcrumb>
          }
        }
        <div class="page-header__detail">
          @if (logo) {
            <div class="page-header__logo">
              <ng-template [ngTemplateOutlet]="logo" />
            </div>
          }
          <div class="page-header__main">
            <div class="page-header__row">
              @if (_titleVal || _titleTpl) {
                <h1 class="page-header__title">
                  @if (_titleTpl) {
                    <ng-template [ngTemplateOutlet]="_titleTpl" />
                  } @else {
                    {{ _titleVal }}
                    @if (titleSub) {
                      <small>
                        <ng-container *nzStringTemplateOutlet="titleSub">{{ titleSub }}</ng-container>
                      </small>
                    }
                  }
                </h1>
              }
              @if (action) {
                <div class="page-header__action">
                  <ng-template [ngTemplateOutlet]="action" />
                </div>
              }
            </div>
            <div class="page-header__row">
              <div class="page-header__desc" (cdkObserveContent)="checkContent()" #conTpl>
                <ng-content />
                <ng-template [ngTemplateOutlet]="content!" />
              </div>
              @if (extra) {
                <div class="page-header__extra">
                  <ng-template [ngTemplateOutlet]="extra" />
                </div>
              }
            </div>
          </div>
        </div>
        <ng-template [ngTemplateOutlet]="tab!" />
      </nz-skeleton>
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: SettingsService
  }, {
    type: AlainConfigService
  }, {
    type: Platform
  }], {
    conTpl: [{
      type: ViewChild,
      args: ["conTpl", {
        static: false
      }]
    }],
    affix: [{
      type: ViewChild,
      args: ["affix", {
        static: false
      }]
    }],
    title: [{
      type: Input
    }],
    titleSub: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    wide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    home: [{
      type: Input
    }],
    homeLink: [{
      type: Input
    }],
    homeI18n: [{
      type: Input
    }],
    autoBreadcrumb: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoTitle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    syncTitle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedOffsetTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    breadcrumb: [{
      type: Input
    }],
    recursiveBreadcrumb: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    logo: [{
      type: Input
    }],
    action: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    tab: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [PageHeaderComponent];
var _PageHeaderModule = class _PageHeaderModule {
};
_PageHeaderModule.ɵfac = function PageHeaderModule_Factory(t) {
  return new (t || _PageHeaderModule)();
};
_PageHeaderModule.ɵmod = ɵɵdefineNgModule({
  type: _PageHeaderModule,
  imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule, NzOutletModule, PageHeaderComponent],
  exports: [PageHeaderComponent]
});
_PageHeaderModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule, NzOutletModule, COMPONENTS]
});
var PageHeaderModule = _PageHeaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule, NzOutletModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  PageHeaderComponent,
  PageHeaderModule
};
//# sourceMappingURL=@delon_abc_page-header.js.map
