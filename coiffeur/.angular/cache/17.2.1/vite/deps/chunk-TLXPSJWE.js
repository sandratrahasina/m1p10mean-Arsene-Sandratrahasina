import {
  NzRadioComponent,
  NzRadioModule
} from "./chunk-HXOUKI53.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-DHBECBBO.js";
import {
  CurrencyService,
  formatMask
} from "./chunk-H2P56GNF.js";
import {
  NzBadgeComponent,
  NzBadgeModule
} from "./chunk-SUXV5X43.js";
import {
  WINDOW
} from "./chunk-ZGRETNTS.js";
import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-G5E3ZBBD.js";
import {
  ImagePreloadService,
  NzDestroyService
} from "./chunk-CI5DGOKL.js";
import {
  fadeMotion
} from "./chunk-NTY5IID6.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FLHT77OR.js";
import {
  CdkDrag,
  CdkDragHandle,
  formatDate,
  yn
} from "./chunk-KGHF7NNJ.js";
import {
  NzI18nService
} from "./chunk-2X2DHHBW.js";
import {
  ComponentPortal,
  Overlay,
  OverlayConfig,
  OverlayRef
} from "./chunk-Z4GMGEHN.js";
import {
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  hasModifierKey
} from "./chunk-27BDGVS6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3MXKVZO7.js";
import {
  NzConfigService,
  WithConfig,
  isPresetColor,
  isStatusColor,
  presetColors,
  statusColors
} from "./chunk-6WPOZNJ5.js";
import {
  InputBoolean,
  isNotNil,
  warn as warn2
} from "./chunk-YORGFY4X.js";
import {
  Directionality
} from "./chunk-DSM4JBCF.js";
import {
  updateHostClass
} from "./chunk-75EB2NOQ.js";
import {
  AlainConfigService,
  deepMerge,
  warn
} from "./chunk-Q3BVRUJT.js";
import {
  Router
} from "./chunk-TQFAWZD6.js";
import {
  DomSanitizer
} from "./chunk-BPMU3QPJ.js";
import {
  CommonModule,
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  makeEnvironmentProviders,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-T4EVUEAM.js";
import {
  Subject,
  __decorate,
  filter,
  fromEvent,
  map,
  of,
  take,
  takeUntil
} from "./chunk-JKR55PDT.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-image.mjs
var _c0 = ["imgRef"];
var _c1 = ["imagePreviewWrapper"];
function NzImagePreviewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7);
    ɵɵlistener("click", function NzImagePreviewComponent_For_6_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r10);
      const option_r4 = restoredCtx.$implicit;
      return ɵɵresetView(option_r4.onClick());
    });
    ɵɵelement(1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-image-preview-operations-operation-disabled", ctx_r0.zoomOutDisabled && option_r4.type === "zoomOut");
    ɵɵadvance();
    ɵɵproperty("nzType", option_r4.icon);
  }
}
function NzImagePreviewComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10, 11);
  }
  if (rf & 2) {
    const image_r11 = ɵɵnextContext().$implicit;
    const ctx_r16 = ɵɵnextContext();
    ɵɵstyleProp("width", image_r11.width)("height", image_r11.height)("transform", ctx_r16.previewImageTransform);
    ɵɵattribute("src", ctx_r16.sanitizerResourceUrl(image_r11.src), ɵɵsanitizeUrl)("srcset", image_r11.srcset)("alt", image_r11.alt);
  }
}
function NzImagePreviewComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzImagePreviewComponent_For_10_Conditional_0_Template, 2, 9, "img", 9);
  }
  if (rf & 2) {
    const imageIndex_r12 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, imageIndex_r12 === ctx_r2.index ? 0 : -1);
  }
}
function NzImagePreviewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12);
    ɵɵlistener("click", function NzImagePreviewComponent_Conditional_11_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onSwitchLeft($event));
    });
    ɵɵelement(2, "span", 13);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14);
    ɵɵlistener("click", function NzImagePreviewComponent_Conditional_11_Template_div_click_3_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onSwitchRight($event));
    });
    ɵɵelement(4, "span", 15);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("ant-image-preview-switch-left-disabled", ctx_r3.index <= 0);
    ɵɵadvance(2);
    ɵɵclassProp("ant-image-preview-switch-right-disabled", ctx_r3.index >= ctx_r3.images.length - 1);
  }
}
var _c2 = ["*"];
var FADE_CLASS_NAME_MAP = {
  enter: "ant-fade-enter",
  enterActive: "ant-fade-enter-active",
  leave: "ant-fade-leave",
  leaveActive: "ant-fade-leave-active"
};
var IMAGE_PREVIEW_MASK_CLASS_NAME = "ant-image-preview-mask";
var NZ_CONFIG_MODULE_NAME$1 = "image";
function getFitContentPosition(params) {
  let fixPos = {};
  if (params.width <= params.clientWidth && params.height <= params.clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  }
  if (params.width > params.clientWidth || params.height > params.clientHeight) {
    fixPos = {
      x: fitPoint(params.left, params.width, params.clientWidth),
      y: fitPoint(params.top, params.height, params.clientHeight)
    };
  }
  return fixPos;
}
function getOffset(node) {
  const box = node.getBoundingClientRect();
  const docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height
  };
}
function fitPoint(start, size, clientSize) {
  const startAddSize = start + size;
  const offsetStart = (size - clientSize) / 2;
  let distance = null;
  if (size > clientSize) {
    if (start > 0) {
      distance = offsetStart;
    }
    if (start < 0 && startAddSize < clientSize) {
      distance = -offsetStart;
    }
  } else {
    if (start < 0 || startAddSize > clientSize) {
      distance = start < 0 ? offsetStart : -offsetStart;
    }
  }
  return distance;
}
var NzImagePreviewOptions = class {
  constructor() {
    this.nzKeyboard = true;
    this.nzNoAnimation = false;
    this.nzMaskClosable = true;
    this.nzCloseOnNavigation = true;
  }
};
var initialPosition = {
  x: 0,
  y: 0
};
var NZ_DEFAULT_SCALE_STEP = 0.5;
var NZ_DEFAULT_ZOOM = 1;
var NZ_DEFAULT_ROTATE = 0;
var _NzImagePreviewComponent = class _NzImagePreviewComponent {
  get animationDisabled() {
    return this.config.nzNoAnimation ?? false;
  }
  get maskClosable() {
    const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    return this.config.nzMaskClosable ?? defaultConfig.nzMaskClosable ?? true;
  }
  constructor(ngZone, host, cdr, nzConfigService, config, overlayRef, destroy$, sanitizer) {
    this.ngZone = ngZone;
    this.host = host;
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.config = config;
    this.overlayRef = overlayRef;
    this.destroy$ = destroy$;
    this.sanitizer = sanitizer;
    this._defaultNzZoom = NZ_DEFAULT_ZOOM;
    this._defaultNzScaleStep = NZ_DEFAULT_SCALE_STEP;
    this._defaultNzRotate = NZ_DEFAULT_ROTATE;
    this.images = [];
    this.index = 0;
    this.isDragging = false;
    this.visible = true;
    this.animationState = "enter";
    this.animationStateChanged = new EventEmitter();
    this.scaleStepMap = /* @__PURE__ */ new Map();
    this.previewImageTransform = "";
    this.previewImageWrapperTransform = "";
    this.operations = [{
      icon: "close",
      onClick: () => {
        this.onClose();
      },
      type: "close"
    }, {
      icon: "zoom-in",
      onClick: () => {
        this.onZoomIn();
      },
      type: "zoomIn"
    }, {
      icon: "zoom-out",
      onClick: () => {
        this.onZoomOut();
      },
      type: "zoomOut"
    }, {
      icon: "rotate-right",
      onClick: () => {
        this.onRotateRight();
      },
      type: "rotateRight"
    }, {
      icon: "rotate-left",
      onClick: () => {
        this.onRotateLeft();
      },
      type: "rotateLeft"
    }];
    this.zoomOutDisabled = false;
    this.position = __spreadValues({}, initialPosition);
    this.containerClick = new EventEmitter();
    this.closeClick = new EventEmitter();
    this.zoom = this.config.nzZoom ?? this._defaultNzZoom;
    this.scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
    this.rotate = this.config.nzRotate ?? this._defaultNzRotate;
    this.updateZoomOutDisabled();
    this.updatePreviewImageTransform();
    this.updatePreviewImageWrapperTransform();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.target === event.currentTarget && this.maskClosable && this.containerClick.observers.length) {
          this.ngZone.run(() => this.containerClick.emit());
        }
      });
      fromEvent(this.imagePreviewWrapper.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.isDragging = true;
      });
    });
  }
  setImages(images, scaleStepMap) {
    if (scaleStepMap)
      this.scaleStepMap = scaleStepMap;
    this.images = images;
    this.cdr.markForCheck();
  }
  switchTo(index) {
    this.index = index;
    this.cdr.markForCheck();
  }
  next() {
    if (this.index < this.images.length - 1) {
      this.reset();
      this.index++;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.cdr.markForCheck();
    }
  }
  prev() {
    if (this.index > 0) {
      this.reset();
      this.index--;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.cdr.markForCheck();
    }
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  onClose() {
    this.closeClick.emit();
  }
  onZoomIn() {
    const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
    this.zoom += zoomStep;
    this.updatePreviewImageTransform();
    this.updateZoomOutDisabled();
    this.position = __spreadValues({}, initialPosition);
  }
  onZoomOut() {
    if (this.zoom > 1) {
      const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
      this.zoom -= zoomStep;
      this.updatePreviewImageTransform();
      this.updateZoomOutDisabled();
      this.position = __spreadValues({}, initialPosition);
    }
  }
  onRotateRight() {
    this.rotate += 90;
    this.updatePreviewImageTransform();
  }
  onRotateLeft() {
    this.rotate -= 90;
    this.updatePreviewImageTransform();
  }
  onSwitchLeft(event) {
    event.preventDefault();
    event.stopPropagation();
    this.prev();
  }
  onSwitchRight(event) {
    event.preventDefault();
    event.stopPropagation();
    this.next();
  }
  onAnimationStart(event) {
    if (event.toState === "enter") {
      this.setEnterAnimationClass();
    } else if (event.toState === "leave") {
      this.setLeaveAnimationClass();
    }
    this.animationStateChanged.emit(event);
  }
  onAnimationDone(event) {
    if (event.toState === "enter") {
      this.setEnterAnimationClass();
    } else if (event.toState === "leave") {
      this.setLeaveAnimationClass();
    }
    this.animationStateChanged.emit(event);
  }
  startLeaveAnimation() {
    this.animationState = "leave";
    this.cdr.markForCheck();
  }
  onDragReleased() {
    this.isDragging = false;
    const width = this.imageRef.nativeElement.offsetWidth * this.zoom;
    const height = this.imageRef.nativeElement.offsetHeight * this.zoom;
    const {
      left,
      top
    } = getOffset(this.imageRef.nativeElement);
    const {
      width: clientWidth,
      height: clientHeight
    } = getClientSize();
    const isRotate = this.rotate % 180 !== 0;
    const fitContentParams = {
      width: isRotate ? height : width,
      height: isRotate ? width : height,
      left,
      top,
      clientWidth,
      clientHeight
    };
    const fitContentPos = getFitContentPosition(fitContentParams);
    if (isNotNil(fitContentPos.x) || isNotNil(fitContentPos.y)) {
      this.position = __spreadValues(__spreadValues({}, this.position), fitContentPos);
    }
  }
  sanitizerResourceUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  updatePreviewImageTransform() {
    this.previewImageTransform = `scale3d(${this.zoom}, ${this.zoom}, 1) rotate(${this.rotate}deg)`;
  }
  updatePreviewImageWrapperTransform() {
    this.previewImageWrapperTransform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
  }
  updateZoomOutDisabled() {
    this.zoomOutDisabled = this.zoom <= 1;
  }
  setEnterAnimationClass() {
    if (this.animationDisabled) {
      return;
    }
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
    }
  }
  setLeaveAnimationClass() {
    if (this.animationDisabled) {
      return;
    }
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
    }
  }
  reset() {
    this.zoom = this.config.nzZoom ?? this._defaultNzZoom;
    this.scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
    this.rotate = this.config.nzRotate ?? this._defaultNzRotate;
    this.position = __spreadValues({}, initialPosition);
  }
};
_NzImagePreviewComponent.ɵfac = function NzImagePreviewComponent_Factory(t) {
  return new (t || _NzImagePreviewComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzImagePreviewOptions), ɵɵdirectiveInject(OverlayRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(DomSanitizer));
};
_NzImagePreviewComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzImagePreviewComponent,
  selectors: [["nz-image-preview"]],
  viewQuery: function NzImagePreviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imagePreviewWrapper = _t.first);
    }
  },
  hostAttrs: ["tabindex", "-1", "role", "document", 1, "ant-image-preview-wrap"],
  hostVars: 6,
  hostBindings: function NzImagePreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@fadeMotion.start", function NzImagePreviewComponent_animation_fadeMotion_start_HostBindingHandler($event) {
        return ctx.onAnimationStart($event);
      })("@fadeMotion.done", function NzImagePreviewComponent_animation_fadeMotion_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@fadeMotion", ctx.animationState);
      ɵɵstyleProp("z-index", ctx.config.nzZIndex);
      ɵɵclassProp("ant-image-preview-moving", ctx.isDragging);
    }
  },
  exportAs: ["nzImagePreview"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 13,
  vars: 4,
  consts: [[1, "ant-image-preview"], ["tabindex", "0", "aria-hidden", "true", 2, "width", "0", "height", "0", "overflow", "hidden", "outline", "none"], [1, "ant-image-preview-content"], [1, "ant-image-preview-body"], [1, "ant-image-preview-operations"], ["cdkDrag", "", 1, "ant-image-preview-img-wrapper", 3, "cdkDragFreeDragPosition", "cdkDragReleased"], ["imagePreviewWrapper", ""], [1, "ant-image-preview-operations-operation", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 1, "ant-image-preview-operations-icon", 3, "nzType"], ["cdkDragHandle", "", "class", "ant-image-preview-img", 3, "width", "height", "transform"], ["cdkDragHandle", "", 1, "ant-image-preview-img"], ["imgRef", ""], [1, "ant-image-preview-switch-left", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "ant-image-preview-switch-right", 3, "click"], ["nz-icon", "", "nzType", "right", "nzTheme", "outline"], ["class", "ant-image-preview-operations-operation", 3, "ant-image-preview-operations-operation-disabled"]],
  template: function NzImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      ɵɵrepeaterCreate(5, NzImagePreviewComponent_For_6_Template, 2, 3, "li", 16, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div", 5, 6);
      ɵɵlistener("cdkDragReleased", function NzImagePreviewComponent_Template_div_cdkDragReleased_7_listener() {
        return ctx.onDragReleased();
      });
      ɵɵrepeaterCreate(9, NzImagePreviewComponent_For_10_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵtemplate(11, NzImagePreviewComponent_Conditional_11_Template, 5, 4, "ng-container");
      ɵɵelementEnd()();
      ɵɵelement(12, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵrepeater(ctx.operations);
      ɵɵadvance(2);
      ɵɵstyleProp("transform", ctx.previewImageWrapperTransform);
      ɵɵproperty("cdkDragFreeDragPosition", ctx.position);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.images);
      ɵɵadvance(2);
      ɵɵconditional(11, ctx.images.length > 1 ? 11 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, CdkDragHandle, CdkDrag],
  encapsulation: 2,
  data: {
    animation: [fadeMotion]
  },
  changeDetection: 0
});
var NzImagePreviewComponent = _NzImagePreviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImagePreviewComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-preview",
      exportAs: "nzImagePreview",
      animations: [fadeMotion],
      standalone: true,
      template: `
    <div class="ant-image-preview">
      <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
      <div class="ant-image-preview-content">
        <div class="ant-image-preview-body">
          <ul class="ant-image-preview-operations">
            @for (option of operations; track option) {
              <li
                class="ant-image-preview-operations-operation"
                [class.ant-image-preview-operations-operation-disabled]="zoomOutDisabled && option.type === 'zoomOut'"
                (click)="option.onClick()"
              >
                <span class="ant-image-preview-operations-icon" nz-icon [nzType]="option.icon" nzTheme="outline"></span>
              </li>
            }
          </ul>
          <div
            class="ant-image-preview-img-wrapper"
            #imagePreviewWrapper
            cdkDrag
            [style.transform]="previewImageWrapperTransform"
            [cdkDragFreeDragPosition]="position"
            (cdkDragReleased)="onDragReleased()"
          >
            @for (image of images; track image; let imageIndex = $index) {
              @if (imageIndex === index) {
                <img
                  cdkDragHandle
                  class="ant-image-preview-img"
                  #imgRef
                  [attr.src]="sanitizerResourceUrl(image.src)"
                  [attr.srcset]="image.srcset"
                  [attr.alt]="image.alt"
                  [style.width]="image.width"
                  [style.height]="image.height"
                  [style.transform]="previewImageTransform"
                />
              }
            }
          </div>
          @if (images.length > 1) {
            <ng-container>
              <div
                class="ant-image-preview-switch-left"
                [class.ant-image-preview-switch-left-disabled]="index <= 0"
                (click)="onSwitchLeft($event)"
              >
                <span nz-icon nzType="left" nzTheme="outline"></span>
              </div>
              <div
                class="ant-image-preview-switch-right"
                [class.ant-image-preview-switch-right-disabled]="index >= images.length - 1"
                (click)="onSwitchRight($event)"
              >
                <span nz-icon nzType="right" nzTheme="outline"></span>
              </div>
            </ng-container>
          }
        </div>
      </div>
      <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
    </div>
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-image-preview-wrap",
        "[class.ant-image-preview-moving]": "isDragging",
        "[style.zIndex]": "config.nzZIndex",
        "[@.disabled]": "config.nzNoAnimation",
        "[@fadeMotion]": "animationState",
        "(@fadeMotion.start)": "onAnimationStart($event)",
        "(@fadeMotion.done)": "onAnimationDone($event)",
        tabindex: "-1",
        role: "document"
      },
      imports: [NzIconModule, CdkDragHandle, CdkDrag],
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: NzImagePreviewOptions
  }, {
    type: OverlayRef
  }, {
    type: NzDestroyService
  }, {
    type: DomSanitizer
  }], {
    imageRef: [{
      type: ViewChild,
      args: ["imgRef"]
    }],
    imagePreviewWrapper: [{
      type: ViewChild,
      args: ["imagePreviewWrapper", {
        static: true
      }]
    }]
  });
})();
var NzImagePreviewRef = class {
  constructor(previewInstance, config, overlayRef) {
    this.previewInstance = previewInstance;
    this.config = config;
    this.overlayRef = overlayRef;
    this.destroy$ = new Subject();
    overlayRef.keydownEvents().pipe(filter((event) => this.config.nzKeyboard && (event.keyCode === ESCAPE || event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW) && !hasModifierKey(event))).subscribe((event) => {
      event.preventDefault();
      if (event.keyCode === ESCAPE) {
        this.close();
      }
      if (event.keyCode === LEFT_ARROW) {
        this.prev();
      }
      if (event.keyCode === RIGHT_ARROW) {
        this.next();
      }
    });
    overlayRef.detachments().subscribe(() => {
      this.overlayRef.dispose();
    });
    previewInstance.containerClick.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
    previewInstance.closeClick.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
    previewInstance.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "leave"), take(1)).subscribe(() => {
      this.dispose();
    });
  }
  switchTo(index) {
    this.previewInstance.switchTo(index);
  }
  next() {
    this.previewInstance.next();
  }
  prev() {
    this.previewInstance.prev();
  }
  close() {
    this.previewInstance.startLeaveAnimation();
  }
  dispose() {
    this.destroy$.next();
    this.overlayRef.dispose();
  }
};
var _NzImageService = class _NzImageService {
  constructor(overlay, injector, nzConfigService, directionality) {
    this.overlay = overlay;
    this.injector = injector;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
  }
  preview(images, options, zoomMap) {
    return this.display(images, options, zoomMap);
  }
  display(images, config, scaleStepMap) {
    const configMerged = __spreadValues(__spreadValues({}, new NzImagePreviewOptions()), config ?? {});
    const overlayRef = this.createOverlay(configMerged);
    const previewComponent = this.attachPreviewComponent(overlayRef, configMerged);
    previewComponent.setImages(images, scaleStepMap);
    const previewRef = new NzImagePreviewRef(previewComponent, configMerged, overlayRef);
    previewComponent.previewRef = previewRef;
    return previewRef;
  }
  attachPreviewComponent(overlayRef, config) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{
        provide: OverlayRef,
        useValue: overlayRef
      }, {
        provide: NzImagePreviewOptions,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(NzImagePreviewComponent, null, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
  createOverlay(config) {
    const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    const overLayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      disposeOnNavigation: config.nzCloseOnNavigation ?? globalConfig.nzCloseOnNavigation ?? true,
      backdropClass: IMAGE_PREVIEW_MASK_CLASS_NAME,
      direction: config.nzDirection || globalConfig.nzDirection || this.directionality.value
    });
    return this.overlay.create(overLayConfig);
  }
};
_NzImageService.ɵfac = function NzImageService_Factory(t) {
  return new (t || _NzImageService)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(NzConfigService), ɵɵinject(Directionality, 8));
};
_NzImageService.ɵprov = ɵɵdefineInjectable({
  token: _NzImageService,
  factory: _NzImageService.ɵfac
});
var NzImageService = _NzImageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _NzImageGroupComponent = class _NzImageGroupComponent {
  constructor() {
    this.nzScaleStep = null;
    this.images = [];
  }
  addImage(image) {
    this.images.push(image);
  }
};
_NzImageGroupComponent.ɵfac = function NzImageGroupComponent_Factory(t) {
  return new (t || _NzImageGroupComponent)();
};
_NzImageGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzImageGroupComponent,
  selectors: [["nz-image-group"]],
  inputs: {
    nzScaleStep: "nzScaleStep"
  },
  exportAs: ["nzImageGroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function NzImageGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzImageGroupComponent = _NzImageGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-group",
      exportAs: "nzImageGroup",
      template: "<ng-content></ng-content>",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true
    }]
  }], null, {
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "image";
var _NzImageDirective = class _NzImageDirective {
  get previewable() {
    return !this.nzDisablePreview && this.status !== "error";
  }
  constructor(document2, nzConfigService, elementRef, nzImageService, cdr, parentGroup, directionality) {
    this.document = document2;
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.nzImageService = nzImageService;
    this.cdr = cdr;
    this.parentGroup = parentGroup;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzSrc = "";
    this.nzSrcset = "";
    this.nzDisablePreview = false;
    this.nzFallback = null;
    this.nzPlaceholder = null;
    this.nzScaleStep = null;
    this.status = "normal";
    this.backLoadDestroy$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.backLoad();
    if (this.parentGroup) {
      this.parentGroup.addImage(this);
    }
    if (this.directionality) {
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPreview() {
    if (!this.previewable) {
      return;
    }
    if (this.parentGroup) {
      const previewAbleImages = this.parentGroup.images.filter((e) => e.previewable);
      const previewImages = previewAbleImages.map((e) => ({
        src: e.nzSrc,
        srcset: e.nzSrcset
      }));
      const previewIndex = previewAbleImages.findIndex((el) => this === el);
      const scaleStepMap = /* @__PURE__ */ new Map();
      previewAbleImages.forEach((imageDirective) => {
        scaleStepMap.set(imageDirective.nzSrc ?? imageDirective.nzSrcset, imageDirective.nzScaleStep ?? this.parentGroup.nzScaleStep ?? this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP);
      });
      const previewRef = this.nzImageService.preview(previewImages, {
        nzDirection: this.dir
      }, scaleStepMap);
      previewRef.switchTo(previewIndex);
    } else {
      const previewImages = [{
        src: this.nzSrc,
        srcset: this.nzSrcset
      }];
      this.nzImageService.preview(previewImages, {
        nzDirection: this.dir,
        nzScaleStep: this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP
      });
    }
  }
  getElement() {
    return this.elementRef;
  }
  ngOnChanges(changes) {
    const {
      nzSrc
    } = changes;
    if (nzSrc) {
      this.getElement().nativeElement.src = nzSrc.currentValue;
      this.backLoad();
    }
  }
  /**
   * use internal Image object handle fallback & placeholder
   *
   * @private
   */
  backLoad() {
    this.backLoadImage = this.document.createElement("img");
    this.backLoadImage.src = this.nzSrc;
    this.backLoadImage.srcset = this.nzSrcset;
    this.status = "loading";
    this.backLoadDestroy$.next();
    this.backLoadDestroy$.complete();
    this.backLoadDestroy$ = new Subject();
    if (this.backLoadImage.complete) {
      this.status = "normal";
      this.getElement().nativeElement.src = this.nzSrc;
      this.getElement().nativeElement.srcset = this.nzSrcset;
    } else {
      if (this.nzPlaceholder) {
        this.getElement().nativeElement.src = this.nzPlaceholder;
        this.getElement().nativeElement.srcset = "";
      } else {
        this.getElement().nativeElement.src = this.nzSrc;
        this.getElement().nativeElement.srcset = this.nzSrcset;
      }
      fromEvent(this.backLoadImage, "load").pipe(takeUntil(this.backLoadDestroy$), takeUntil(this.destroy$)).subscribe(() => {
        this.status = "normal";
        this.getElement().nativeElement.src = this.nzSrc;
        this.getElement().nativeElement.srcset = this.nzSrcset;
      });
      fromEvent(this.backLoadImage, "error").pipe(takeUntil(this.backLoadDestroy$), takeUntil(this.destroy$)).subscribe(() => {
        this.status = "error";
        if (this.nzFallback) {
          this.getElement().nativeElement.src = this.nzFallback;
          this.getElement().nativeElement.srcset = "";
        }
      });
    }
  }
};
_NzImageDirective.ɵfac = function NzImageDirective_Factory(t) {
  return new (t || _NzImageDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzImageService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzImageGroupComponent, 8), ɵɵdirectiveInject(Directionality, 8));
};
_NzImageDirective.ɵdir = ɵɵdefineDirective({
  type: _NzImageDirective,
  selectors: [["img", "nz-image", ""]],
  hostBindings: function NzImageDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzImageDirective_click_HostBindingHandler() {
        return ctx.onPreview();
      });
    }
  },
  inputs: {
    nzSrc: "nzSrc",
    nzSrcset: "nzSrcset",
    nzDisablePreview: "nzDisablePreview",
    nzFallback: "nzFallback",
    nzPlaceholder: "nzPlaceholder",
    nzScaleStep: "nzScaleStep"
  },
  exportAs: ["nzImage"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzImageDirective = _NzImageDirective;
__decorate([InputBoolean(), WithConfig()], NzImageDirective.prototype, "nzDisablePreview", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzFallback", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzPlaceholder", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzScaleStep", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[nz-image]",
      exportAs: "nzImage",
      host: {
        "(click)": "onPreview()"
      },
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzImageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzImageGroupComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzSrc: [{
      type: Input
    }],
    nzSrcset: [{
      type: Input
    }],
    nzDisablePreview: [{
      type: Input
    }],
    nzFallback: [{
      type: Input
    }],
    nzPlaceholder: [{
      type: Input
    }],
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var _NzImageModule = class _NzImageModule {
};
_NzImageModule.ɵfac = function NzImageModule_Factory(t) {
  return new (t || _NzImageModule)();
};
_NzImageModule.ɵmod = ɵɵdefineNgModule({
  type: _NzImageModule,
  imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
  exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]
});
_NzImageModule.ɵinj = ɵɵdefineInjector({
  providers: [NzImageService],
  imports: [NzImagePreviewComponent]
});
var NzImageModule = _NzImageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageModule, [{
    type: NgModule,
    args: [{
      imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      providers: [NzImageService]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
function NzTagComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 1);
    ɵɵlistener("click", function NzTagComponent_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeTag($event));
    });
    ɵɵelementEnd();
  }
}
var _c02 = ["*"];
var _NzTagComponent = class _NzTagComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.isPresetColor = false;
    this.nzMode = "default";
    this.nzChecked = false;
    this.nzBordered = true;
    this.nzOnClose = new EventEmitter();
    this.nzCheckedChange = new EventEmitter();
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  updateCheckedStatus() {
    if (this.nzMode === "checkable") {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  clearPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
    const classname = hostElement.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    hostElement.classList.remove(...matches);
  }
  setPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
    }
    if (this.isPresetColor) {
      hostElement.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTagComponent.ɵfac = function NzTagComponent_Factory(t) {
  return new (t || _NzTagComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzTagComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTagComponent,
  selectors: [["nz-tag"]],
  hostAttrs: [1, "ant-tag"],
  hostVars: 12,
  hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() {
        return ctx.updateCheckedStatus();
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
      ɵɵclassProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl")("ant-tag-borderless", !ctx.nzBordered);
    }
  },
  inputs: {
    nzMode: "nzMode",
    nzColor: "nzColor",
    nzChecked: "nzChecked",
    nzBordered: "nzBordered"
  },
  outputs: {
    nzOnClose: "nzOnClose",
    nzCheckedChange: "nzCheckedChange"
  },
  exportAs: ["nzTag"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
  template: function NzTagComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, NzTagComponent_span_1_Template, 1, 0, "span", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzMode === "closeable");
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTagComponent = _NzTagComponent;
__decorate([InputBoolean()], NzTagComponent.prototype, "nzChecked", void 0);
__decorate([InputBoolean()], NzTagComponent.prototype, "nzBordered", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
    type: Component,
    args: [{
      selector: "nz-tag",
      exportAs: "nzTag",
      preserveWhitespaces: false,
      template: `
    <ng-content></ng-content>
    <span
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-tag",
        "[style.background-color]": `isPresetColor ? '' : nzColor`,
        "[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
        "[class.ant-tag-checkable]": `nzMode === 'checkable'`,
        "[class.ant-tag-checkable-checked]": `nzChecked`,
        "[class.ant-tag-rtl]": `dir === 'rtl'`,
        "[class.ant-tag-borderless]": `!nzBordered`,
        "(click)": "updateCheckedStatus()"
      },
      imports: [NzIconModule, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzMode: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzChecked: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzOnClose: [{
      type: Output
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var _NzTagModule = class _NzTagModule {
};
_NzTagModule.ɵfac = function NzTagModule_Factory(t) {
  return new (t || _NzTagModule)();
};
_NzTagModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTagModule,
  imports: [NzTagComponent],
  exports: [NzTagComponent]
});
_NzTagModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTagComponent]
});
var NzTagModule = _NzTagModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
    type: NgModule,
    args: [{
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-experimental-image.mjs
var _c03 = ["imageRef"];
function isFixedSize(size) {
  return typeof size === "number" || /^(\d)+(px)?$/.test(size);
}
var defaultImageSrcLoader = ({
  src
}) => {
  return src;
};
var NZ_CONFIG_MODULE_NAME2 = "imageExperimental";
var sizeBreakpoints = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
var _NzImageViewComponent = class _NzImageViewComponent {
  constructor(cdr, nzConfigService, imagePreloadService) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.imagePreloadService = imagePreloadService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.nzSrc = "";
    this.nzAlt = "";
    this.nzWidth = "auto";
    this.nzHeight = "auto";
    this.nzSrcLoader = defaultImageSrcLoader;
    this.nzAutoSrcset = false;
    this.nzPriority = false;
    this.nzFallback = null;
    this.nzPlaceholder = null;
    this.nzDisablePreview = false;
    this.src = "";
    this.width = "auto";
    this.height = "auto";
    this.srcset = "";
    this.destroy$ = new Subject();
    this.reloadDisposeHandler = () => void 0;
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.composeImageAttrs();
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    if (this.nzPriority) {
      this.preload();
    }
  }
  ngOnChanges(changes) {
    const {
      nzLoader,
      nzSrc,
      nzOptimize
    } = changes;
    if (nzSrc || nzLoader || nzOptimize) {
      this.composeImageAttrs();
    }
  }
  ngOnDestroy() {
    this.reloadDisposeHandler();
    this.destroy$.next();
    this.destroy$.complete();
  }
  preload() {
    this.reloadDisposeHandler = this.imagePreloadService.addPreload({
      src: this.src,
      srcset: this.srcset
    });
  }
  optimizable() {
    if (this.nzAutoSrcset) {
      if (!isFixedSize(this.nzWidth) || !isFixedSize(this.nzHeight)) {
        warn2(`When using "nzAutoSrcset" you should use a fixed size width and height, for more information please refer to CLS (https://web.dev/cls/) performance metrics`);
        return false;
      }
      if (this.nzSrc.endsWith(".svg")) {
        warn2(`SVG does not need to be optimized`);
        return false;
      }
      if (this.nzSrc.startsWith("data:")) {
        warn2(`Data URLs cannot be optimized`);
        return false;
      }
      return true;
    }
    return false;
  }
  composeImageAttrs() {
    const loader = this.getLoader();
    if (!this.optimizable()) {
      this.src = loader({
        src: this.nzSrc
      });
      this.width = this.nzWidth;
      this.height = this.nzHeight;
      return;
    }
    this.width = typeof this.nzWidth === "number" ? this.nzWidth : parseInt(this.nzWidth, 10);
    this.height = typeof this.nzHeight === "number" ? this.nzHeight : parseInt(this.nzHeight, 10);
    const widths = this.convertWidths(this.width, sizeBreakpoints);
    this.src = loader({
      src: this.nzSrc,
      width: widths[0]
    });
    this.srcset = widths.map((w, i) => `${loader({
      src: this.nzSrc,
      width: w
    })} ${i + 1}x`).join(", ");
  }
  getLoader() {
    return this.nzSrcLoader || defaultImageSrcLoader;
  }
  convertWidths(width, optimizeSizes) {
    const allSizes = [...optimizeSizes].sort((a, b) => a - b);
    return [...new Set(
      // 2x scale is sufficient
      // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
      [width, width * 2].map((w) => allSizes.find((p) => p >= w) || w)
    )];
  }
};
_NzImageViewComponent.ɵfac = function NzImageViewComponent_Factory(t) {
  return new (t || _NzImageViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ImagePreloadService));
};
_NzImageViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzImageViewComponent,
  selectors: [["nz-image"]],
  viewQuery: function NzImageViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    }
  },
  inputs: {
    nzSrc: "nzSrc",
    nzAlt: "nzAlt",
    nzWidth: "nzWidth",
    nzHeight: "nzHeight",
    nzSrcLoader: "nzSrcLoader",
    nzAutoSrcset: "nzAutoSrcset",
    nzPriority: "nzPriority",
    nzFallback: "nzFallback",
    nzPlaceholder: "nzPlaceholder",
    nzDisablePreview: "nzDisablePreview"
  },
  exportAs: ["nzImage"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 9,
  consts: [["nz-image", "", 3, "nzSrc", "nzSrcset", "nzDisablePreview", "nzFallback", "nzPlaceholder"], ["imageRef", ""]],
  template: function NzImageViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "img", 0, 1);
    }
    if (rf & 2) {
      ɵɵproperty("nzSrc", ctx.src)("nzSrcset", ctx.srcset)("nzDisablePreview", ctx.nzDisablePreview)("nzFallback", ctx.nzFallback)("nzPlaceholder", ctx.nzPlaceholder);
      ɵɵattribute("width", ctx.width)("height", ctx.height)("srcset", ctx.srcset)("alt", ctx.nzAlt || null);
    }
  },
  dependencies: [NzImageDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzImageViewComponent = _NzImageViewComponent;
__decorate([WithConfig()], NzImageViewComponent.prototype, "nzSrcLoader", void 0);
__decorate([InputBoolean(), WithConfig()], NzImageViewComponent.prototype, "nzAutoSrcset", void 0);
__decorate([InputBoolean()], NzImageViewComponent.prototype, "nzPriority", void 0);
__decorate([WithConfig()], NzImageViewComponent.prototype, "nzFallback", void 0);
__decorate([WithConfig()], NzImageViewComponent.prototype, "nzPlaceholder", void 0);
__decorate([InputBoolean(), WithConfig()], NzImageViewComponent.prototype, "nzDisablePreview", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageViewComponent, [{
    type: Component,
    args: [{
      selector: "nz-image",
      exportAs: "nzImage",
      template: `
    <img
      #imageRef
      nz-image
      [nzSrc]="src"
      [nzSrcset]="srcset"
      [nzDisablePreview]="nzDisablePreview"
      [nzFallback]="nzFallback"
      [nzPlaceholder]="nzPlaceholder"
      [attr.width]="width"
      [attr.height]="height"
      [attr.srcset]="srcset"
      [attr.alt]="nzAlt || null"
    />
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      imports: [NzImageDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: ImagePreloadService
  }], {
    nzSrc: [{
      type: Input
    }],
    nzAlt: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzHeight: [{
      type: Input
    }],
    nzSrcLoader: [{
      type: Input
    }],
    nzAutoSrcset: [{
      type: Input
    }],
    nzPriority: [{
      type: Input
    }],
    nzFallback: [{
      type: Input
    }],
    nzPlaceholder: [{
      type: Input
    }],
    nzDisablePreview: [{
      type: Input
    }],
    imageRef: [{
      type: ViewChild,
      args: ["imageRef"]
    }]
  });
})();
var _NzImageModule2 = class _NzImageModule2 {
};
_NzImageModule2.ɵfac = function NzImageModule_Factory(t) {
  return new (t || _NzImageModule2)();
};
_NzImageModule2.ɵmod = ɵɵdefineNgModule({
  type: _NzImageModule2,
  imports: [NzImageViewComponent],
  exports: [NzImageViewComponent]
});
_NzImageModule2.ɵinj = ɵɵdefineInjector({});
var NzImageModule2 = _NzImageModule2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageModule2, [{
    type: NgModule,
    args: [{
      imports: [NzImageViewComponent],
      exports: [NzImageViewComponent]
    }]
  }], null, null);
})();

// node_modules/@delon/abc/fesm2022/cell.mjs
function CellComponent_ng_template_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 3);
    ɵɵlistener("ngModelChange", function CellComponent_ng_template_0_Case_0_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r14.change($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("nzDisabled", ctx_r6.disabled)("ngModel", ctx_r6.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r6.safeOpt.checkbox == null ? null : ctx_r6.safeOpt.checkbox.label, " ");
  }
}
function CellComponent_ng_template_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 4);
    ɵɵlistener("ngModelChange", function CellComponent_ng_template_0_Case_1_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.change($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("nzDisabled", ctx_r7.disabled)("ngModel", ctx_r7.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r7.safeOpt.radio == null ? null : ctx_r7.safeOpt.radio.label, " ");
  }
}
function CellComponent_ng_template_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵlistener("click", function CellComponent_ng_template_0_Case_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r19);
      const ctx_r18 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r18._link($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r8._text, ɵɵsanitizeHtml);
    ɵɵattribute("target", ctx_r8.safeOpt.link == null ? null : ctx_r8.safeOpt.link.target)("title", ctx_r8.value);
  }
}
function CellComponent_ng_template_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-tag", 6);
    ɵɵelement(1, "span", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("nzColor", ctx_r9.res == null ? null : ctx_r9.res.result == null ? null : ctx_r9.res.result.color);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r9._text, ɵɵsanitizeHtml);
  }
}
function CellComponent_ng_template_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-badge", 8);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("nzText", ctx_r10._text);
    ɵɵproperty("nzStatus", ctx_r10.res == null ? null : ctx_r10.res.result == null ? null : ctx_r10.res.result.color);
  }
}
function CellComponent_ng_template_0_Case_5_ng_template_0_Template(rf, ctx) {
}
function CellComponent_ng_template_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_0_Case_5_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("data", ctx_r11.hostData);
  }
}
function CellComponent_ng_template_0_Case_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 10);
    ɵɵlistener("click", function CellComponent_ng_template_0_Case_6_For_1_Template_img_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r28);
      const i_r22 = restoredCtx.$implicit;
      const ctx_r27 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r27._showImg(i_r22));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r22 = ctx.$implicit;
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵclassProp("point", ctx_r21.safeOpt.img == null ? null : ctx_r21.safeOpt.img.big);
    ɵɵattribute("src", i_r22, ɵɵsanitizeUrl)("height", ctx_r21.safeOpt.img == null ? null : ctx_r21.safeOpt.img.size)("width", ctx_r21.safeOpt.img == null ? null : ctx_r21.safeOpt.img.size);
  }
}
function CellComponent_ng_template_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, CellComponent_ng_template_0_Case_6_For_1_Template, 1, 5, "img", 11, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r12._text);
  }
}
function CellComponent_ng_template_0_Case_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(3);
    ɵɵproperty("innerText", ctx_r29._text);
    ɵɵattribute("title", ctx_r29.value);
  }
}
function CellComponent_ng_template_0_Case_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r30._text, ɵɵsanitizeHtml);
    ɵɵattribute("title", ctx_r30.value);
  }
}
function CellComponent_ng_template_0_Case_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r31._unit);
  }
}
function CellComponent_ng_template_0_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_0_Case_7_Conditional_0_Template, 1, 2, "span", 12)(1, CellComponent_ng_template_0_Case_7_Conditional_1_Template, 1, 2)(2, CellComponent_ng_template_0_Case_7_Conditional_2_Template, 2, 1, "span", 13);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r13.isText ? 0 : 1);
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r13._unit ? 2 : -1);
  }
}
function CellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_0_Case_0_Template, 2, 3)(1, CellComponent_ng_template_0_Case_1_Template, 2, 3)(2, CellComponent_ng_template_0_Case_2_Template, 1, 3)(3, CellComponent_ng_template_0_Case_3_Template, 2, 2)(4, CellComponent_ng_template_0_Case_4_Template, 1, 2)(5, CellComponent_ng_template_0_Case_5_Template, 1, 1)(6, CellComponent_ng_template_0_Case_6_Template, 2, 0)(7, CellComponent_ng_template_0_Case_7_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    let CellComponent_ng_template_0_contFlowTmp;
    ɵɵconditional(0, (CellComponent_ng_template_0_contFlowTmp = ctx_r0.safeOpt.type) === "checkbox" ? 0 : CellComponent_ng_template_0_contFlowTmp === "radio" ? 1 : CellComponent_ng_template_0_contFlowTmp === "link" ? 2 : CellComponent_ng_template_0_contFlowTmp === "tag" ? 3 : CellComponent_ng_template_0_contFlowTmp === "badge" ? 4 : CellComponent_ng_template_0_contFlowTmp === "widget" ? 5 : CellComponent_ng_template_0_contFlowTmp === "img" ? 6 : 7);
  }
}
function CellComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r32.safeOpt.default == null ? null : ctx_r32.safeOpt.default.text, " ");
  }
}
function CellComponent_ng_template_2_Conditional_1_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function CellComponent_ng_template_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, CellComponent_ng_template_2_Conditional_1_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    const _r1 = ɵɵreference(1);
    ɵɵproperty("nz-tooltip", ctx_r34.safeOpt.tooltip);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function CellComponent_ng_template_2_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function CellComponent_ng_template_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_2_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const _r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function CellComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_2_Conditional_1_Conditional_0_Template, 2, 2, "span", 15)(1, CellComponent_ng_template_2_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r33.safeOpt.tooltip ? 0 : 1);
  }
}
function CellComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_ng_template_2_Conditional_0_Template, 1, 1)(1, CellComponent_ng_template_2_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r2.showDefault ? 0 : 1);
  }
}
function CellComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
}
function CellComponent_Conditional_5_ng_template_0_Template(rf, ctx) {
}
function CellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CellComponent_Conditional_5_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
var _CellService = class _CellService {
  constructor(configSrv) {
    this.nzI18n = inject(NzI18nService);
    this.currency = inject(CurrencyService);
    this.dom = inject(DomSanitizer);
    this.widgets = {
      date: {
        type: "fn",
        ref: (value, opt) => {
          return {
            text: formatDate(value, opt.date.format, this.nzI18n.getDateLocale())
          };
        }
      },
      mega: {
        type: "fn",
        ref: (value, opt) => {
          const res = this.currency.mega(value, opt.mega);
          return {
            text: res.value,
            unit: res.unitI18n
          };
        }
      },
      currency: {
        type: "fn",
        ref: (value, opt) => {
          return {
            text: this.currency.format(value, opt.currency)
          };
        }
      },
      cny: {
        type: "fn",
        ref: (value, opt) => {
          return {
            text: this.currency.cny(value, opt.cny)
          };
        }
      },
      boolean: {
        type: "fn",
        ref: (value, opt) => {
          return {
            text: this.dom.bypassSecurityTrustHtml(yn(value, opt.boolean))
          };
        }
      },
      img: {
        type: "fn",
        ref: (value) => {
          return {
            text: Array.isArray(value) ? value : [value]
          };
        }
      }
    };
    this.globalOptions = configSrv.merge("cell", {
      date: {
        format: "yyyy-MM-dd HH:mm:ss"
      },
      img: {
        size: 32
      },
      default: {
        text: "-"
      }
    });
  }
  registerWidget(key, widget) {
    this.widgets[key] = {
      type: "widget",
      ref: widget
    };
  }
  getWidget(key) {
    return this.widgets[key];
  }
  genType(value, options) {
    if (options.type != null)
      return options.type;
    const typeOf = typeof value;
    if (typeOf === "number" && /^[0-9]{13}$/g.test(value))
      return "date";
    if (value instanceof Date || options.date != null)
      return "date";
    if (options.widget != null)
      return "widget";
    else if (options.mega != null)
      return "mega";
    else if (options.currency != null)
      return "currency";
    else if (options.cny != null)
      return "cny";
    else if (options.img != null)
      return "img";
    else if (options.link != null)
      return "link";
    else if (options.html != null)
      return "html";
    else if (options.badge != null)
      return "badge";
    else if (options.tag != null)
      return "tag";
    else if (options.checkbox != null)
      return "checkbox";
    else if (options.radio != null)
      return "radio";
    else if (options.enum != null)
      return "enum";
    else if (typeOf === "number")
      return "number";
    else if (typeOf === "boolean" || options.boolean != null)
      return "boolean";
    else
      return "string";
  }
  fixOptions(options) {
    return deepMerge({}, this.globalOptions, options);
  }
  get(value, options) {
    const type = this.genType(value, __spreadValues({}, options));
    const opt = this.fixOptions(options);
    opt.type = type;
    const isSafeHtml = typeof value === "object" && typeof value?.getTypeName === "function" && value?.getTypeName() != null;
    let res = {
      result: typeof value === "object" && !isSafeHtml ? value : {
        text: value == null ? "" : isSafeHtml ? value : `${value}`
      },
      options: opt
    };
    const widget = this.widgets[type];
    if (widget?.type === "fn") {
      res.result = widget.ref(value, opt);
    }
    return (typeof value === "function" ? value(value, opt) : of(res.result)).pipe(map((text) => {
      res.result = text;
      let dictData;
      switch (type) {
        case "badge":
          dictData = (opt.badge?.data ?? {})[value];
          res.result = __spreadValues({
            color: "default"
          }, dictData);
          break;
        case "tag":
          dictData = (opt.tag?.data ?? {})[value];
          res.result = dictData;
          break;
        case "enum":
          res.result = {
            text: (opt.enum ?? {})[value]
          };
          break;
        case "html":
          res.safeHtml = opt.html?.safe;
          break;
        case "string":
          if (isSafeHtml)
            res.safeHtml = "safeHtml";
          break;
      }
      if ((type === "badge" || type === "tag") && dictData?.tooltip != null) {
        res.options.tooltip = dictData.tooltip;
      }
      if (opt.mask != null) {
        res.result.text = formatMask(res.result.text, opt.mask);
      }
      return res;
    }));
  }
};
_CellService.ɵfac = function CellService_Factory(t) {
  return new (t || _CellService)(ɵɵinject(AlainConfigService));
};
_CellService.ɵprov = ɵɵdefineInjectable({
  token: _CellService,
  factory: _CellService.ɵfac,
  providedIn: "root"
});
var CellService = _CellService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AlainConfigService
  }], null);
})();
var _CellHostDirective = class _CellHostDirective {
  constructor() {
    this.srv = inject(CellService);
    this.viewContainerRef = inject(ViewContainerRef);
  }
  ngOnInit() {
    const widget = this.data.options.widget;
    const componentType = this.srv.getWidget(widget.key)?.ref;
    if (componentType == null) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        warn(`cell: No widget for type "${widget.key}"`);
      }
      return;
    }
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentType);
    componentRef.instance.data = this.data;
  }
};
_CellHostDirective.ɵfac = function CellHostDirective_Factory(t) {
  return new (t || _CellHostDirective)();
};
_CellHostDirective.ɵdir = ɵɵdefineDirective({
  type: _CellHostDirective,
  selectors: [["", "cell-widget-host", ""]],
  inputs: {
    data: "data"
  },
  standalone: true
});
var CellHostDirective = _CellHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cell-widget-host]",
      standalone: true
    }]
  }], null, {
    data: [{
      type: Input
    }]
  });
})();
var _CellComponent = class _CellComponent {
  constructor() {
    this.srv = inject(CellService);
    this.router = inject(Router);
    this.cdr = inject(ChangeDetectorRef);
    this.renderer = inject(Renderer2);
    this.imgSrv = inject(NzImageService);
    this.win = inject(WINDOW);
    this.el = inject(ElementRef).nativeElement;
    this.showDefault = false;
    this.valueChange = new EventEmitter();
    this.loading = false;
    this.disabled = false;
  }
  get safeOpt() {
    return this.res?.options ?? {};
  }
  get isText() {
    return this.res?.safeHtml === "text";
  }
  get hostData() {
    return {
      value: this.value,
      options: this.srv.fixOptions(this.options)
    };
  }
  updateValue() {
    this.destroy$?.unsubscribe();
    this.destroy$ = this.srv.get(this.value, this.options).subscribe((res) => {
      this.res = res;
      this.showDefault = this.value == this.safeOpt.default.condition;
      this._text = res.result?.text ?? "";
      this._unit = res.result?.unit ?? this.safeOpt?.unit;
      this.cdr.detectChanges();
      this.setClass();
    });
  }
  setClass() {
    const {
      el,
      renderer
    } = this;
    const {
      renderType,
      size,
      type
    } = this.safeOpt;
    updateHostClass(el, renderer, {
      [`cell`]: true,
      [`cell__${renderType}`]: renderType != null,
      [`cell__${size}`]: size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault,
      [`cell__disabled`]: this.disabled
    });
    el.setAttribute("data-type", `${type}`);
  }
  ngOnChanges(changes) {
    if (Object.keys(changes).every((k) => ["loading", "disabled"].includes(k))) {
      this.setClass();
    } else {
      this.updateValue();
    }
  }
  change(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  _link(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.disabled)
      return;
    const link = this.safeOpt.link;
    const url = link?.url;
    if (url == null)
      return;
    if (/https?:\/\//g.test(url)) {
      this.win.open(url, link?.target);
    } else {
      this.router.navigateByUrl(url);
    }
  }
  _showImg(img) {
    const config = this.safeOpt.img;
    if (config == null || config.big == null)
      return;
    let idx = -1;
    const list = this._text.map((p, index) => {
      if (idx === -1 && p === img)
        idx = index;
      return typeof config.big === "function" ? config.big(p) : p;
    });
    this.imgSrv.preview(list.map((p) => ({
      src: p
    })), config.previewOptions).switchTo(idx);
  }
  ngOnDestroy() {
    this.destroy$?.unsubscribe();
  }
};
_CellComponent.ɵfac = function CellComponent_Factory(t) {
  return new (t || _CellComponent)();
};
_CellComponent.ɵcmp = ɵɵdefineComponent({
  type: _CellComponent,
  selectors: [["cell"], ["", "cell", ""]],
  inputs: {
    value: "value",
    options: "options",
    loading: [InputFlags.HasDecoratorInputTransform, "loading", "loading", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    valueChange: "valueChange"
  },
  exportAs: ["cell"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 1,
  consts: [["text", ""], ["textWrap", ""], ["nz-icon", "", "nzType", "loading"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzDisabled", "ngModel", "ngModelChange"], [3, "innerHTML", "click"], [3, "nzColor"], [3, "innerHTML"], [3, "nzStatus", "nzText"], ["cell-widget-host", "", 3, "data"], [1, "img", 3, "click"], ["class", "img", 3, "point"], [3, "innerText"], ["class", "unit"], [1, "unit"], [3, "nz-tooltip"], [3, "ngTemplateOutlet"]],
  template: function CellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CellComponent_ng_template_0_Template, 8, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CellComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, CellComponent_Conditional_4_Template, 1, 0, "span", 2)(5, CellComponent_Conditional_5_Template, 1, 1);
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵconditional(4, ctx.loading ? 4 : 5);
    }
  },
  dependencies: [FormsModule, NgControlStatus, NgModel, NgTemplateOutlet, NzCheckboxComponent, NzRadioComponent, NzIconDirective, NzTagComponent, NzBadgeComponent, NzTooltipDirective, NzImageModule, CellHostDirective],
  encapsulation: 2,
  changeDetection: 0
});
var CellComponent = _CellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellComponent, [{
    type: Component,
    args: [{
      selector: "cell, [cell]",
      template: `
    <ng-template #text>
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="_text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
        }
        @case ('widget') {
          <ng-template cell-widget-host [data]="hostData" />
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            <img
              [attr.src]="i"
              [attr.height]="safeOpt.img?.size"
              [attr.width]="safeOpt.img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="safeOpt.img?.big"
            />
          }
        }
        @default {
          @if (isText) {
            <span [innerText]="_text" [attr.title]="value"></span>
          } @else {
            <span [innerHTML]="_text" [attr.title]="value"></span>
          }
          @if (_unit) {
            <span class="unit">{{ _unit }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
        {{ safeOpt.default?.text }}
      } @else {
        @if (safeOpt.tooltip) {
          <span [nz-tooltip]="safeOpt.tooltip">
            <ng-template [ngTemplateOutlet]="text" />
          </span>
        } @else {
          <ng-template [ngTemplateOutlet]="text" />
        }
      }
    </ng-template>
    @if (loading) {
      <span nz-icon nzType="loading"></span>
    } @else {
      <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `,
      exportAs: "cell",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [FormsModule, NgTemplateOutlet, NzCheckboxComponent, NzRadioComponent, NzIconDirective, NzTagComponent, NzBadgeComponent, NzTooltipDirective, NzImageModule, CellHostDirective]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var COMPS = [CellComponent];
var _CellModule = class _CellModule {
};
_CellModule.ɵfac = function CellModule_Factory(t) {
  return new (t || _CellModule)();
};
_CellModule.ɵmod = ɵɵdefineNgModule({
  type: _CellModule,
  imports: [CommonModule, FormsModule, NzCheckboxModule, NzRadioModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule2, CellComponent, CellHostDirective],
  exports: [CellComponent]
});
_CellModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, NzCheckboxModule, NzRadioModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule2, COMPS]
});
var CellModule = _CellModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, NzCheckboxModule, NzRadioModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule2, ...COMPS, CellHostDirective],
      exports: COMPS
    }]
  }], null, null);
})();
function provideCellWidgets(...widgets) {
  return makeEnvironmentProviders([{
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      const srv = inject(CellService);
      widgets.forEach((widget) => srv.registerWidget(widget.KEY, widget.type));
    }
  }]);
}

export {
  NzTagComponent,
  NzTagModule,
  CellService,
  CellHostDirective,
  CellComponent,
  CellModule,
  provideCellWidgets
};
//# sourceMappingURL=chunk-TLXPSJWE.js.map
