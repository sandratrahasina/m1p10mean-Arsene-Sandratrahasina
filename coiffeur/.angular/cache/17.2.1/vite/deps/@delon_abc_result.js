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
import {
  Directionality
} from "./chunk-DSM4JBCF.js";
import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import "./chunk-B7EG4KFO.js";
import "./chunk-BPMU3QPJ.js";
import "./chunk-TECWR7MN.js";
import {
  CommonModule
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  NgModule,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T4EVUEAM.js";
import "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/abc/fesm2022/result.mjs
function ResultComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function ResultComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.description);
  }
}
function ResultComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ResultComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.description);
  }
}
function ResultComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.extra);
  }
}
function ResultComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ResultComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.extra);
  }
}
var _c0 = ["*"];
var _ResultComponent = class _ResultComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.destroy$ = inject(DestroyRef);
    this._type = "";
    this._icon = "";
    this.dir = "ltr";
  }
  set type(value) {
    this._type = value;
    switch (value) {
      case "success":
        this._icon = "check-circle";
        break;
      case "error":
        this._icon = "close-circle";
        break;
      default:
        this._icon = value;
        break;
    }
  }
  ngOnInit() {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
};
_ResultComponent.ɵfac = function ResultComponent_Factory(t) {
  return new (t || _ResultComponent)();
};
_ResultComponent.ɵcmp = ɵɵdefineComponent({
  type: _ResultComponent,
  selectors: [["result"]],
  hostVars: 4,
  hostBindings: function ResultComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("result", true)("result-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    type: "type",
    title: "title",
    description: "description",
    extra: "extra"
  },
  exportAs: ["result"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 8,
  vars: 7,
  consts: [[1, "result__icon"], ["nz-icon", "", 3, "nzType"], [1, "result__title"], [4, "nzStringTemplateOutlet"], ["class", "result__desc"], ["class", "result__extra"], [1, "result__actions"], [1, "result__desc"], [1, "result__extra"]],
  template: function ResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "i", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, ResultComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, ResultComponent_Conditional_4_Template, 2, 1, "div", 4)(5, ResultComponent_Conditional_5_Template, 2, 1, "div", 5);
      ɵɵelementStart(6, "div", 6);
      ɵɵprojection(7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassMapInterpolate1("result__icon-", ctx._type, "");
      ɵɵproperty("nzType", ctx._icon);
      ɵɵadvance(2);
      ɵɵproperty("nzStringTemplateOutlet", ctx.title);
      ɵɵadvance();
      ɵɵconditional(4, ctx.description ? 4 : -1);
      ɵɵadvance();
      ɵɵconditional(5, ctx.extra ? 5 : -1);
    }
  },
  dependencies: [NzIconDirective, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var ResultComponent = _ResultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultComponent, [{
    type: Component,
    args: [{
      selector: "result",
      exportAs: "result",
      host: {
        "[class.result]": "true",
        "[class.result-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NzIconDirective, NzStringTemplateOutletDirective],
      template: '<div class="result__icon">\n  <i nz-icon [nzType]="_icon" class="result__icon-{{ _type }}"></i>\n</div>\n<div class="result__title">\n  <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>\n</div>\n@if (description) {\n  <div class="result__desc">\n    <ng-container *nzStringTemplateOutlet="description">{{ description }}</ng-container>\n  </div>\n}\n@if (extra) {\n  <div class="result__extra">\n    <ng-container *nzStringTemplateOutlet="extra">{{ extra }}</ng-container>\n  </div>\n}\n<div class="result__actions">\n  <ng-content />\n</div>\n'
    }]
  }], null, {
    type: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    extra: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [ResultComponent];
var _ResultModule = class _ResultModule {
};
_ResultModule.ɵfac = function ResultModule_Factory(t) {
  return new (t || _ResultModule)();
};
_ResultModule.ɵmod = ɵɵdefineNgModule({
  type: _ResultModule,
  imports: [CommonModule, NzIconModule, NzOutletModule, ResultComponent],
  exports: [ResultComponent]
});
_ResultModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, NzIconModule, NzOutletModule]
});
var ResultModule = _ResultModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NzIconModule, NzOutletModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  ResultComponent,
  ResultModule
};
//# sourceMappingURL=@delon_abc_result.js.map
