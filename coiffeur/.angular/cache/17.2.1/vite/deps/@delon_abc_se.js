import {
  NzFormStatusService
} from "./chunk-CZ6RLQOU.js";
import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-G5E3ZBBD.js";
import "./chunk-3ZTF6XOF.js";
import "./chunk-CI5DGOKL.js";
import {
  helpMotion
} from "./chunk-NTY5IID6.js";
import {
  FormControlName,
  NgModel,
  RequiredValidator,
  Validators
} from "./chunk-FLHT77OR.js";
import {
  ResponsiveService
} from "./chunk-KGHF7NNJ.js";
import "./chunk-FSEFCYMU.js";
import "./chunk-YI23FGK5.js";
import "./chunk-2X2DHHBW.js";
import "./chunk-XRNNFB2N.js";
import {
  CdkObserveContent
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
import "./chunk-6WPOZNJ5.js";
import "./chunk-YORGFY4X.js";
import "./chunk-DSM4JBCF.js";
import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import {
  isEmpty
} from "./chunk-75EB2NOQ.js";
import {
  AlainConfigService
} from "./chunk-Q3BVRUJT.js";
import "./chunk-B7EG4KFO.js";
import "./chunk-NX2IJXEA.js";
import "./chunk-KN3RWPAL.js";
import "./chunk-TQFAWZD6.js";
import "./chunk-BPMU3QPJ.js";
import "./chunk-TECWR7MN.js";
import {
  CommonModule,
  NgClass
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Input,
  InputFlags,
  NgModule,
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
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-T4EVUEAM.js";
import {
  BehaviorSubject,
  filter
} from "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/abc/fesm2022/se.mjs
var _c0 = ["*"];
function SEContainerComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function SEContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, SEContainerComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
  }
}
var _c1 = ["contentElement"];
function SEComponent_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.label);
  }
}
function SEComponent_Conditional_1_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r6.optional);
  }
}
function SEComponent_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 12);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("nzTooltipTitle", ctx_r7.optionalHelp)("nzTooltipColor", ctx_r7.optionalHelpColor);
  }
}
function SEComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, SEComponent_Conditional_1_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 9)(2, SEComponent_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "i", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassProp("se__label-optional-no-text", !ctx_r5.optional);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r5.optional);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r5.optionalHelp ? 2 : -1);
  }
}
var _c2 = (a0, a1) => ({
  "ant-form-item-required": a0,
  "se__no-colon": a1
});
function SEComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 7)(1, "span", 8);
    ɵɵtemplate(2, SEComponent_Conditional_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵtemplate(3, SEComponent_Conditional_1_Conditional_3_Template, 3, 4, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c2, ctx_r0.required, ctx_r0._noColon));
    ɵɵattribute("for", ctx_r0._id);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.label);
    ɵɵadvance();
    ɵɵconditional(3, ctx_r0.optional || ctx_r0.optionalHelp ? 3 : -1);
  }
}
function SEComponent_Conditional_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r8._error);
  }
}
function SEComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14);
    ɵɵtemplate(2, SEComponent_Conditional_7_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("@helpMotion", void 0);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2._error);
  }
}
function SEComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r9.extra);
  }
}
function SEComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, SEComponent_Conditional_8_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.extra);
  }
}
var _SETitleComponent = class _SETitleComponent {
  constructor() {
    this.parentComp = inject(SEContainerComponent, {
      host: true,
      optional: true
    });
    this.el = inject(ElementRef).nativeElement;
    this.ren = inject(Renderer2);
    if (this.parentComp == null) {
      throw new Error(`[se-title] must include 'se-container' component`);
    }
  }
  setClass() {
    const {
      el
    } = this;
    const gutter = this.parentComp.gutter;
    this.ren.setStyle(el, "padding-left", `${gutter / 2}px`);
    this.ren.setStyle(el, "padding-right", `${gutter / 2}px`);
  }
  ngOnInit() {
    this.setClass();
  }
};
_SETitleComponent.ɵfac = function SETitleComponent_Factory(t) {
  return new (t || _SETitleComponent)();
};
_SETitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _SETitleComponent,
  selectors: [["se-title"], ["", "se-title", ""]],
  hostVars: 2,
  hostBindings: function SETitleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("se__title", true);
    }
  },
  exportAs: ["seTitle"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SETitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var SETitleComponent = _SETitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SETitleComponent, [{
    type: Component,
    args: [{
      selector: "se-title, [se-title]",
      exportAs: "seTitle",
      template: "<ng-content />",
      host: {
        "[class.se__title]": "true"
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true
    }]
  }], () => [], null);
})();
var _SEContainerComponent = class _SEContainerComponent {
  get gutter() {
    return this.nzLayout === "horizontal" ? this._gutter : 0;
  }
  set gutter(value) {
    this._gutter = value;
  }
  get nzLayout() {
    return this._nzLayout;
  }
  set nzLayout(value) {
    this._nzLayout = value;
    if (value === "inline") {
      this.size = "compact";
    }
  }
  set errors(val) {
    this.setErrors(val);
  }
  get margin() {
    return -(this.gutter / 2);
  }
  get errorNotify() {
    return this.errorNotify$.pipe(filter((v) => v != null));
  }
  constructor(configSrv) {
    this.errorNotify$ = new BehaviorSubject(null);
    this.noColon = false;
    this.line = false;
    configSrv.attach(this, "se", {
      size: "default",
      nzLayout: "horizontal",
      gutter: 32,
      col: 2,
      labelWidth: 150,
      firstVisual: false,
      ingoreDirty: false
    });
  }
  setErrors(errors) {
    for (const error of errors) {
      this.errorNotify$.next(error);
    }
  }
};
_SEContainerComponent.ɵfac = function SEContainerComponent_Factory(t) {
  return new (t || _SEContainerComponent)(ɵɵdirectiveInject(AlainConfigService));
};
_SEContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SEContainerComponent,
  selectors: [["se-container"], ["", "se-container", ""]],
  hostVars: 16,
  hostBindings: function SEContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("margin-left", ctx.margin, "px")("margin-right", ctx.margin, "px");
      ɵɵclassProp("ant-row", true)("se__container", true)("se__horizontal", ctx.nzLayout === "horizontal")("se__vertical", ctx.nzLayout === "vertical")("se__inline", ctx.nzLayout === "inline")("se__compact", ctx.size === "compact");
    }
  },
  inputs: {
    colInCon: [InputFlags.HasDecoratorInputTransform, "se-container", "colInCon", (v) => v == null ? null : numberAttribute(v)],
    col: [InputFlags.HasDecoratorInputTransform, "col", "col", (v) => v == null ? null : numberAttribute(v)],
    labelWidth: [InputFlags.HasDecoratorInputTransform, "labelWidth", "labelWidth", (v) => v == null ? null : numberAttribute(v)],
    noColon: [InputFlags.HasDecoratorInputTransform, "noColon", "noColon", booleanAttribute],
    title: "title",
    gutter: [InputFlags.HasDecoratorInputTransform, "gutter", "gutter", numberAttribute],
    nzLayout: "nzLayout",
    size: "size",
    firstVisual: [InputFlags.HasDecoratorInputTransform, "firstVisual", "firstVisual", booleanAttribute],
    ingoreDirty: [InputFlags.HasDecoratorInputTransform, "ingoreDirty", "ingoreDirty", booleanAttribute],
    line: [InputFlags.HasDecoratorInputTransform, "line", "line", booleanAttribute],
    errors: "errors"
  },
  exportAs: ["seContainer"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["se-title", ""], [4, "nzStringTemplateOutlet"]],
  template: function SEContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SEContainerComponent_Conditional_0_Template, 2, 1, "div", 0);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.title ? 0 : -1);
    }
  },
  dependencies: [SETitleComponent, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var SEContainerComponent = _SEContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SEContainerComponent, [{
    type: Component,
    args: [{
      selector: "se-container, [se-container]",
      exportAs: "seContainer",
      template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `,
      host: {
        "[class.ant-row]": `true`,
        "[class.se__container]": `true`,
        "[class.se__horizontal]": `nzLayout === 'horizontal'`,
        "[class.se__vertical]": `nzLayout === 'vertical'`,
        "[class.se__inline]": `nzLayout === 'inline'`,
        "[class.se__compact]": `size === 'compact'`,
        "[style.margin-left.px]": `margin`,
        "[style.margin-right.px]": `margin`
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [SETitleComponent, NzStringTemplateOutletDirective]
    }]
  }], () => [{
    type: AlainConfigService
  }], {
    colInCon: [{
      type: Input,
      args: [{
        alias: "se-container",
        transform: (v) => v == null ? null : numberAttribute(v)
      }]
    }],
    col: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : numberAttribute(v)
      }]
    }],
    labelWidth: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : numberAttribute(v)
      }]
    }],
    noColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    gutter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzLayout: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    firstVisual: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ingoreDirty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    line: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    errors: [{
      type: Input
    }]
  });
})();
var prefixCls = `se`;
var nextUniqueId = 0;
var _SEComponent = class _SEComponent {
  set error(val) {
    this.errorData = typeof val === "string" || val instanceof TemplateRef ? {
      "": val
    } : val;
  }
  set id(value) {
    this._id = value;
    this._autoId = false;
  }
  // #endregion
  get paddingValue() {
    return this.parentComp.gutter / 2;
  }
  get showErr() {
    return this.invalid && !!this._error && !this.compact;
  }
  get compact() {
    return this.parentComp.size === "compact";
  }
  get ngControl() {
    return this.ngModel || this.formControlName;
  }
  constructor() {
    this.parentComp = inject(SEContainerComponent, {
      host: true,
      optional: true
    });
    this.el = inject(ElementRef).nativeElement;
    this.rep = inject(ResponsiveService);
    this.ren = inject(Renderer2);
    this.cdr = inject(ChangeDetectorRef);
    this.statusSrv = inject(NzFormStatusService);
    this.destroy$ = inject(DestroyRef);
    this.clsMap = [];
    this.inited = false;
    this.onceFlag = false;
    this.errorData = {};
    this.isBindModel = false;
    this.invalid = false;
    this._labelWidth = null;
    this._noColon = null;
    this.optional = null;
    this.optionalHelp = null;
    this.required = false;
    this.controlClass = "";
    this.hideLabel = false;
    this._id = `_se-${++nextUniqueId}`;
    this._autoId = true;
    if (this.parentComp == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }
    this.parentComp.errorNotify.pipe(takeUntilDestroyed(), filter((w) => this.inited && this.ngControl != null && this.ngControl.name === w.name)).subscribe((item) => {
      this.error = item.error;
      this.updateStatus(this.ngControl.invalid);
    });
  }
  setClass() {
    const {
      el,
      ren,
      clsMap,
      col,
      cdr,
      line,
      labelWidth,
      rep,
      noColon
    } = this;
    const parent = this.parentComp;
    this._noColon = noColon != null ? noColon : parent.noColon;
    this._labelWidth = parent.nzLayout === "horizontal" ? labelWidth != null ? labelWidth : parent.labelWidth : null;
    clsMap.forEach((cls) => ren.removeClass(el, cls));
    clsMap.length = 0;
    const parentCol = parent.colInCon || parent.col;
    const repCls = parent.nzLayout === "horizontal" ? rep.genCls(col != null ? col : parentCol, parentCol) : [];
    clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    if (line || parent.line) {
      clsMap.push(`${prefixCls}__line`);
    }
    clsMap.forEach((cls) => ren.addClass(el, cls));
    cdr.detectChanges();
    return this;
  }
  bindModel() {
    if (!this.ngControl || this.isBindModel)
      return;
    this.isBindModel = true;
    this.ngControl.statusChanges.pipe(takeUntilDestroyed(this.destroy$)).subscribe((res) => this.updateStatus(res === "INVALID"));
    if (this._autoId) {
      const controlAccessor = this.ngControl.valueAccessor;
      const control = (controlAccessor?.elementRef || controlAccessor?._elementRef)?.nativeElement;
      if (!!control) {
        if (control.id) {
          this._id = control.id;
        } else {
          control.id = this._id;
        }
      }
    }
    if (this.required !== true) {
      let required = this.ngControl?.control?.hasValidator(Validators.required);
      if (required !== true) {
        const rawValidators = this.ngControl?._rawValidators;
        required = rawValidators.find((w) => w instanceof RequiredValidator) != null;
      }
      this.required = required;
      this.cdr.detectChanges();
    }
  }
  updateStatus(invalid) {
    if (this.ngControl?.disabled || this.ngControl?.isDisabled) {
      return;
    }
    this.invalid = !this.onceFlag && invalid && this.parentComp.ingoreDirty === false && !this.ngControl?.dirty ? false : invalid;
    const errors = this.ngControl?.errors;
    if (errors != null && Object.keys(errors).length > 0) {
      const key = Object.keys(errors)[0] || "";
      const err = this.errorData[key];
      this._error = err != null ? err : this.errorData[""] || "";
    }
    this.statusSrv.formStatusChanges.next({
      status: this.invalid ? "error" : "",
      hasFeedback: false
    });
    this.cdr.detectChanges();
  }
  checkContent() {
    const el = this.contentElement.nativeElement;
    const cls = `${prefixCls}__item-empty`;
    if (isEmpty(el)) {
      this.ren.addClass(el, cls);
    } else {
      this.ren.removeClass(el, cls);
    }
  }
  ngAfterContentInit() {
    this.checkContent();
  }
  ngOnChanges() {
    this.onceFlag = this.parentComp.firstVisual;
    if (this.inited) {
      this.setClass().bindModel();
    }
  }
  ngAfterViewInit() {
    this.setClass().bindModel();
    this.inited = true;
    if (this.onceFlag) {
      Promise.resolve().then(() => {
        this.updateStatus(this.ngControl?.invalid);
        this.onceFlag = false;
      });
    }
  }
};
_SEComponent.ɵfac = function SEComponent_Factory(t) {
  return new (t || _SEComponent)();
};
_SEComponent.ɵcmp = ɵɵdefineComponent({
  type: _SEComponent,
  selectors: [["se"]],
  contentQueries: function SEComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgModel, 7);
      ɵɵcontentQuery(dirIndex, FormControlName, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ngModel = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formControlName = _t.first);
    }
  },
  viewQuery: function SEComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function SEComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("padding-left", ctx.paddingValue, "px")("padding-right", ctx.paddingValue, "px");
      ɵɵclassProp("se__hide-label", ctx.hideLabel)("ant-form-item-has-error", ctx.invalid)("ant-form-item-with-help", ctx.showErr);
    }
  },
  inputs: {
    optional: "optional",
    optionalHelp: "optionalHelp",
    optionalHelpColor: "optionalHelpColor",
    error: "error",
    extra: "extra",
    label: "label",
    col: [InputFlags.HasDecoratorInputTransform, "col", "col", (v) => v == null ? null : numberAttribute(v)],
    required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
    controlClass: "controlClass",
    line: [InputFlags.HasDecoratorInputTransform, "line", "line", (v) => v == null ? null : booleanAttribute(v)],
    labelWidth: [InputFlags.HasDecoratorInputTransform, "labelWidth", "labelWidth", (v) => v == null ? null : numberAttribute(v)],
    noColon: [InputFlags.HasDecoratorInputTransform, "noColon", "noColon", (v) => v == null ? null : booleanAttribute(v)],
    hideLabel: [InputFlags.HasDecoratorInputTransform, "hideLabel", "hideLabel", booleanAttribute],
    id: "id"
  },
  exportAs: ["se"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzFormStatusService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 9,
  vars: 10,
  consts: [[1, "ant-form-item-label"], ["class", "se__label", 3, "ngClass"], [1, "ant-form-item-control", "se__control"], [1, "ant-form-item-control-input-content", 3, "cdkObserveContent"], ["contentElement", ""], ["class", "ant-form-item-explain ant-form-item-explain-connected"], ["class", "ant-form-item-extra"], [1, "se__label", 3, "ngClass"], [1, "se__label-text"], [4, "nzStringTemplateOutlet"], ["class", "se__label-optional", 3, "se__label-optional-no-text"], [1, "se__label-optional"], ["nz-tooltip", "", "nz-icon", "", "nzType", "question-circle", 3, "nzTooltipTitle", "nzTooltipColor"], [1, "ant-form-item-explain", "ant-form-item-explain-connected"], ["role", "alert", 1, "ant-form-item-explain-error"], [1, "ant-form-item-extra"]],
  template: function SEComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, SEComponent_Conditional_1_Template, 4, 7, "label", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2)(3, "div")(4, "div", 3, 4);
      ɵɵlistener("cdkObserveContent", function SEComponent_Template_div_cdkObserveContent_4_listener() {
        return ctx.checkContent();
      });
      ɵɵprojection(6);
      ɵɵelementEnd()();
      ɵɵtemplate(7, SEComponent_Conditional_7_Template, 3, 2, "div", 5)(8, SEComponent_Conditional_8_Template, 2, 1, "div", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx._labelWidth, "px");
      ɵɵclassProp("se__nolabel", ctx.hideLabel || !ctx.label);
      ɵɵadvance();
      ɵɵconditional(1, ctx.label ? 1 : -1);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("ant-form-item-control-input ", ctx.controlClass, "");
      ɵɵadvance(4);
      ɵɵconditional(7, ctx.showErr ? 7 : -1);
      ɵɵadvance();
      ɵɵconditional(8, ctx.extra && !ctx.compact ? 8 : -1);
    }
  },
  dependencies: [NgClass, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent],
  encapsulation: 2,
  data: {
    animation: [helpMotion]
  },
  changeDetection: 0
});
var SEComponent = _SEComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SEComponent, [{
    type: Component,
    args: [{
      selector: "se",
      exportAs: "se",
      host: {
        "[style.padding-left.px]": "paddingValue",
        "[style.padding-right.px]": "paddingValue",
        "[class.se__hide-label]": "hideLabel",
        "[class.ant-form-item-has-error]": "invalid",
        "[class.ant-form-item-with-help]": "showErr"
      },
      preserveWhitespaces: false,
      providers: [NzFormStatusService],
      animations: [helpMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgClass, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent],
      template: `<div class="ant-form-item-label" [class.se__nolabel]="hideLabel || !label" [style.width.px]="_labelWidth">
  @if (label) {
    <label
      [attr.for]="_id"
      class="se__label"
      [ngClass]="{ 'ant-form-item-required': required, 'se__no-colon': _noColon }"
    >
      <span class="se__label-text">
        <ng-container *nzStringTemplateOutlet="label">{{ label }}</ng-container>
      </span>
      @if (optional || optionalHelp) {
        <span class="se__label-optional" [class.se__label-optional-no-text]="!optional">
          <ng-container *nzStringTemplateOutlet="optional">{{ optional }}</ng-container>
          @if (optionalHelp) {
            <i
              nz-tooltip
              [nzTooltipTitle]="optionalHelp"
              [nzTooltipColor]="optionalHelpColor"
              nz-icon
              nzType="question-circle"
            ></i>
          }
        </span>
      }
    </label>
  }
</div>
<div class="ant-form-item-control se__control">
  <div class="ant-form-item-control-input {{ controlClass }}">
    <div class="ant-form-item-control-input-content" (cdkObserveContent)="checkContent()" #contentElement>
      <ng-content />
    </div>
  </div>
  @if (showErr) {
    <div @helpMotion class="ant-form-item-explain ant-form-item-explain-connected">
      <div role="alert" class="ant-form-item-explain-error">
        <ng-container *nzStringTemplateOutlet="_error">{{ _error }}</ng-container>
      </div>
    </div>
  }
  @if (extra && !compact) {
    <div class="ant-form-item-extra">
      <ng-container *nzStringTemplateOutlet="extra">{{ extra }}</ng-container>
    </div>
  }
</div>
`
    }]
  }], () => [], {
    ngModel: [{
      type: ContentChild,
      args: [NgModel, {
        static: true
      }]
    }],
    formControlName: [{
      type: ContentChild,
      args: [FormControlName, {
        static: true
      }]
    }],
    contentElement: [{
      type: ViewChild,
      args: ["contentElement", {
        static: true
      }]
    }],
    optional: [{
      type: Input
    }],
    optionalHelp: [{
      type: Input
    }],
    optionalHelpColor: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    col: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : numberAttribute(v)
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    controlClass: [{
      type: Input
    }],
    line: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : booleanAttribute(v)
      }]
    }],
    labelWidth: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : numberAttribute(v)
      }]
    }],
    noColon: [{
      type: Input,
      args: [{
        transform: (v) => v == null ? null : booleanAttribute(v)
      }]
    }],
    hideLabel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
var _SEModule = class _SEModule {
};
_SEModule.ɵfac = function SEModule_Factory(t) {
  return new (t || _SEModule)();
};
_SEModule.ɵmod = ɵɵdefineNgModule({
  type: _SEModule,
  imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule, SEContainerComponent, SEComponent, SETitleComponent],
  exports: [SEContainerComponent, SEComponent, SETitleComponent]
});
_SEModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule]
});
var SEModule = _SEModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SEModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  SEComponent,
  SEContainerComponent,
  SEModule,
  SETitleComponent
};
//# sourceMappingURL=@delon_abc_se.js.map
