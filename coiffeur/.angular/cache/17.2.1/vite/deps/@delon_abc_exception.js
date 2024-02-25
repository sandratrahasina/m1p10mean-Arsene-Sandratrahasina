import {
  DelonLocaleModule,
  DelonLocaleService
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
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-XF22SSGY.js";
import "./chunk-AH32UZUP.js";
import "./chunk-UYYIOVNB.js";
import "./chunk-27BDGVS6.js";
import "./chunk-A532CSVY.js";
import "./chunk-Z2ZVAQCX.js";
import "./chunk-3MXKVZO7.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-6WPOZNJ5.js";
import "./chunk-YORGFY4X.js";
import {
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
import "./chunk-B7EG4KFO.js";
import "./chunk-NX2IJXEA.js";
import "./chunk-KN3RWPAL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-TQFAWZD6.js";
import {
  DomSanitizer
} from "./chunk-BPMU3QPJ.js";
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
  ViewChild,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-T4EVUEAM.js";
import "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/abc/fesm2022/exception.mjs
var _c0 = ["conTpl"];
function ExceptionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r1.backRouterLink)("nzType", "primary");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.backToHome, " ");
  }
}
var _c1 = ["*"];
var _ExceptionComponent = class _ExceptionComponent {
  set type(value) {
    const item = this.typeDict[value];
    if (!item)
      return;
    this.fixImg(item.img);
    this._type = value;
    this._title = item.title;
    this._desc = "";
  }
  fixImg(src) {
    this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
  }
  set img(value) {
    this.fixImg(value);
  }
  set title(value) {
    this._title = this.dom.bypassSecurityTrustHtml(value);
  }
  set desc(value) {
    this._desc = this.dom.bypassSecurityTrustHtml(value);
  }
  checkContent() {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
    this.cdr.detectChanges();
  }
  constructor(configSrv) {
    this.i18n = inject(DelonLocaleService);
    this.dom = inject(DomSanitizer);
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = inject(DestroyRef);
    this.locale = {};
    this.hasCon = false;
    this.dir = "ltr";
    this._img = "";
    this._title = "";
    this._desc = "";
    this.backRouterLink = "/";
    configSrv.attach(this, "exception", {
      typeDict: {
        403: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",
          title: "403"
        },
        404: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",
          title: "404"
        },
        500: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",
          title: "500"
        }
      }
    });
  }
  ngOnInit() {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getData("exception");
      this.cdr.detectChanges();
    });
    this.checkContent();
  }
};
_ExceptionComponent.ɵfac = function ExceptionComponent_Factory(t) {
  return new (t || _ExceptionComponent)(ɵɵdirectiveInject(AlainConfigService));
};
_ExceptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _ExceptionComponent,
  selectors: [["exception"]],
  viewQuery: function ExceptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.conTpl = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function ExceptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("exception", true)("exception-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    type: "type",
    img: "img",
    title: "title",
    desc: "desc",
    backRouterLink: "backRouterLink"
  },
  exportAs: ["exception"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 10,
  vars: 5,
  consts: [[1, "exception__img-block"], [1, "exception__img"], [1, "exception__cont"], [1, "exception__cont-title", 3, "innerHTML"], [1, "exception__cont-desc", 3, "innerHTML"], [1, "exception__cont-actions"], [3, "cdkObserveContent"], ["conTpl", ""], ["nz-button", "", 3, "routerLink", "nzType"]],
  template: function ExceptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵelement(3, "h1", 3)(4, "div", 4);
      ɵɵelementStart(5, "div", 5)(6, "div", 6, 7);
      ɵɵlistener("cdkObserveContent", function ExceptionComponent_Template_div_cdkObserveContent_6_listener() {
        return ctx.checkContent();
      });
      ɵɵprojection(8);
      ɵɵelementEnd();
      ɵɵtemplate(9, ExceptionComponent_Conditional_9_Template, 2, 3, "button", 8);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵstyleProp("background-image", ctx._img);
      ɵɵadvance(2);
      ɵɵproperty("innerHTML", ctx._title, ɵɵsanitizeHtml);
      ɵɵadvance();
      ɵɵproperty("innerHTML", ctx._desc || ctx.locale[ctx._type], ɵɵsanitizeHtml);
      ɵɵadvance(5);
      ɵɵconditional(9, !ctx.hasCon ? 9 : -1);
    }
  },
  dependencies: [CdkObserveContent, NzButtonComponent, RouterLink],
  encapsulation: 2,
  changeDetection: 0
});
var ExceptionComponent = _ExceptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExceptionComponent, [{
    type: Component,
    args: [{
      selector: "exception",
      exportAs: "exception",
      host: {
        "[class.exception]": "true",
        "[class.exception-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkObserveContent, NzButtonComponent, RouterLink],
      template: `<div class="exception__img-block">
  <div class="exception__img" [style.backgroundImage]="_img"></div>
</div>
<div class="exception__cont">
  <h1 class="exception__cont-title" [innerHTML]="_title"></h1>
  <div class="exception__cont-desc" [innerHTML]="_desc || locale[_type]"></div>
  <div class="exception__cont-actions">
    <div (cdkObserveContent)="checkContent()" #conTpl>
      <ng-content />
    </div>
    @if (!hasCon) {
      <button nz-button [routerLink]="backRouterLink" [nzType]="'primary'">
        {{ locale.backToHome }}
      </button>
    }
  </div>
</div>
`
    }]
  }], () => [{
    type: AlainConfigService
  }], {
    conTpl: [{
      type: ViewChild,
      args: ["conTpl", {
        static: true
      }]
    }],
    type: [{
      type: Input
    }],
    img: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    desc: [{
      type: Input
    }],
    backRouterLink: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [ExceptionComponent];
var _ExceptionModule = class _ExceptionModule {
};
_ExceptionModule.ɵfac = function ExceptionModule_Factory(t) {
  return new (t || _ExceptionModule)();
};
_ExceptionModule.ɵmod = ɵɵdefineNgModule({
  type: _ExceptionModule,
  imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ExceptionComponent],
  exports: [ExceptionComponent]
});
_ExceptionModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, COMPONENTS]
});
var ExceptionModule = _ExceptionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExceptionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  ExceptionComponent,
  ExceptionModule
};
//# sourceMappingURL=@delon_abc_exception.js.map
