import {
  WINDOW
} from "./chunk-ZGRETNTS.js";
import {
  Directionality
} from "./chunk-DSM4JBCF.js";
import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import {
  Router,
  RouterModule
} from "./chunk-TQFAWZD6.js";
import {
  DomSanitizer
} from "./chunk-BPMU3QPJ.js";
import "./chunk-TECWR7MN.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Input,
  InputFlags,
  NgModule,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-T4EVUEAM.js";
import "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/abc/fesm2022/global-footer.mjs
var _c0 = ["host"];
function GlobalFooterItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = ["*"];
function GlobalFooterComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function GlobalFooterComponent_Conditional_0_For_2_Template_a_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r9);
      const i_r3 = restoredCtx.$implicit;
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.to(i_r3));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    ɵɵproperty("innerHTML", i_r3._title, ɵɵsanitizeHtml);
  }
}
function GlobalFooterComponent_Conditional_0_For_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GlobalFooterComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function GlobalFooterComponent_Conditional_0_For_4_Template_a_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r17);
      const i_r10 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.to(i_r10));
    });
    ɵɵtemplate(1, GlobalFooterComponent_Conditional_0_For_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", i_r10.host);
  }
}
function GlobalFooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵrepeaterCreate(1, GlobalFooterComponent_Conditional_0_For_2_Template, 1, 1, "a", 6, ɵɵrepeaterTrackByIndex);
    ɵɵrepeaterCreate(3, GlobalFooterComponent_Conditional_0_For_4_Template, 2, 1, "a", 7, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.links);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r0.items);
  }
}
var _GlobalFooterItemComponent = class _GlobalFooterItemComponent {
};
_GlobalFooterItemComponent.ɵfac = function GlobalFooterItemComponent_Factory(t) {
  return new (t || _GlobalFooterItemComponent)();
};
_GlobalFooterItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _GlobalFooterItemComponent,
  selectors: [["global-footer-item"]],
  viewQuery: function GlobalFooterItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.host = _t.first);
    }
  },
  inputs: {
    href: "href",
    blankTarget: [InputFlags.HasDecoratorInputTransform, "blankTarget", "blankTarget", booleanAttribute]
  },
  exportAs: ["globalFooterItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  consts: [["host", ""]],
  template: function GlobalFooterItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, GlobalFooterItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var GlobalFooterItemComponent = _GlobalFooterItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalFooterItemComponent, [{
    type: Component,
    args: [{
      selector: "global-footer-item",
      exportAs: "globalFooterItem",
      template: ` <ng-template #host><ng-content /></ng-template> `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true
    }]
  }], null, {
    host: [{
      type: ViewChild,
      args: ["host", {
        static: true
      }]
    }],
    href: [{
      type: Input
    }],
    blankTarget: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _GlobalFooterComponent = class _GlobalFooterComponent {
  constructor() {
    this.router = inject(Router);
    this.win = inject(WINDOW);
    this.dom = inject(DomSanitizer);
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = inject(DestroyRef);
    this._links = [];
    this.dir = "ltr";
  }
  set links(val) {
    val.forEach((i) => i._title = this.dom.bypassSecurityTrustHtml(i.title));
    this._links = val;
  }
  get links() {
    return this._links;
  }
  to(item) {
    if (!item.href) {
      return;
    }
    if (item.blankTarget) {
      this.win.open(item.href);
      return;
    }
    if (/^https?:\/\//.test(item.href)) {
      this.win.location.href = item.href;
    } else {
      this.router.navigateByUrl(item.href);
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
_GlobalFooterComponent.ɵfac = function GlobalFooterComponent_Factory(t) {
  return new (t || _GlobalFooterComponent)();
};
_GlobalFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _GlobalFooterComponent,
  selectors: [["global-footer"]],
  contentQueries: function GlobalFooterComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, GlobalFooterItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  hostVars: 4,
  hostBindings: function GlobalFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("global-footer", true)("global-footer-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    links: "links"
  },
  exportAs: ["globalFooter"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [["class", "global-footer__links"], [1, "global-footer__copyright"], [1, "global-footer__links"], [1, "global-footer__links-item", 3, "innerHTML", "click"], [1, "global-footer__links-item", 3, "click"], [4, "ngTemplateOutlet"], ["class", "global-footer__links-item", 3, "innerHTML"], ["class", "global-footer__links-item"]],
  template: function GlobalFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, GlobalFooterComponent_Conditional_0_Template, 5, 0, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.links.length > 0 || ctx.items.length > 0 ? 0 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var GlobalFooterComponent = _GlobalFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalFooterComponent, [{
    type: Component,
    args: [{
      selector: "global-footer",
      exportAs: "globalFooter",
      host: {
        "[class.global-footer]": "true",
        "[class.global-footer-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgTemplateOutlet],
      template: '@if (links.length > 0 || items.length > 0) {\n  <div class="global-footer__links">\n    @for (i of links; track $index) {\n      <a class="global-footer__links-item" (click)="to(i)" [innerHTML]="i._title"></a>\n    }\n    @for (i of items; track $index) {\n      <a class="global-footer__links-item" (click)="to(i)">\n        <ng-container *ngTemplateOutlet="i.host" />\n      </a>\n    }\n  </div>\n}\n<div class="global-footer__copyright">\n  <ng-content />\n</div>\n'
    }]
  }], null, {
    links: [{
      type: Input
    }],
    items: [{
      type: ContentChildren,
      args: [GlobalFooterItemComponent]
    }]
  });
})();
var COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
var _GlobalFooterModule = class _GlobalFooterModule {
};
_GlobalFooterModule.ɵfac = function GlobalFooterModule_Factory(t) {
  return new (t || _GlobalFooterModule)();
};
_GlobalFooterModule.ɵmod = ɵɵdefineNgModule({
  type: _GlobalFooterModule,
  imports: [CommonModule, RouterModule, GlobalFooterComponent, GlobalFooterItemComponent],
  exports: [GlobalFooterComponent, GlobalFooterItemComponent]
});
_GlobalFooterModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RouterModule]
});
var GlobalFooterModule = _GlobalFooterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalFooterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  GlobalFooterComponent,
  GlobalFooterItemComponent,
  GlobalFooterModule
};
//# sourceMappingURL=@delon_abc_global-footer.js.map
