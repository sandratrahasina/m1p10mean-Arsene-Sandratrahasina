import {
  NzDropDownDirective,
  NzDropDownModule,
  NzDropdownMenuComponent
} from "./chunk-SUUEDCXU.js";
import {
  NzMenuDirective,
  NzMenuItemComponent
} from "./chunk-JKEQI6P6.js";
import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-G5E3ZBBD.js";
import "./chunk-3ZTF6XOF.js";
import "./chunk-CI5DGOKL.js";
import "./chunk-NTY5IID6.js";
import "./chunk-7A7F2ESV.js";
import "./chunk-Z4GMGEHN.js";
import "./chunk-3Z4XHAHP.js";
import "./chunk-XF22SSGY.js";
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
  AlainConfigService
} from "./chunk-Q3BVRUJT.js";
import {
  Platform
} from "./chunk-B7EG4KFO.js";
import "./chunk-NX2IJXEA.js";
import "./chunk-KN3RWPAL.js";
import "./chunk-TQFAWZD6.js";
import "./chunk-BPMU3QPJ.js";
import "./chunk-TECWR7MN.js";
import {
  CommonModule,
  DOCUMENT
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Renderer2,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T4EVUEAM.js";
import "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/theme/fesm2022/theme-btn.mjs
function ThemeBtnComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7);
    ɵɵlistener("click", function ThemeBtnComponent_For_9_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r8);
      const i_r2 = restoredCtx.$implicit;
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onThemeChange(i_r2.key));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(i_r2.text);
  }
}
var ALAIN_THEME_BTN_KEYS = new InjectionToken("ALAIN_THEME_BTN_KEYS");
var _ThemeBtnComponent = class _ThemeBtnComponent {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.platform = inject(Platform);
    this.renderer = inject(Renderer2);
    this.configSrv = inject(AlainConfigService);
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = inject(DestroyRef);
    this.theme = "default";
    this.isDev = isDevMode();
    this.types = [{
      key: "default",
      text: "Default Theme"
    }, {
      key: "dark",
      text: "Dark Theme"
    }, {
      key: "compact",
      text: "Compact Theme"
    }];
    this.devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
    this.deployUrl = "";
    this.themeChange = new EventEmitter();
    this.dir = "ltr";
    this.key = inject(ALAIN_THEME_BTN_KEYS, {
      optional: true
    }) ?? "site-theme";
  }
  ngOnInit() {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.initTheme();
  }
  initTheme() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(this.key) || "default";
    this.updateChartTheme();
    this.onThemeChange(this.theme);
  }
  updateChartTheme() {
    this.configSrv.set("chart", {
      theme: this.theme === "dark" ? "dark" : ""
    });
  }
  onThemeChange(theme) {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = theme;
    this.themeChange.emit(theme);
    this.renderer.setAttribute(this.doc.body, "data-theme", theme);
    const dom = this.doc.getElementById(this.key);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(this.key);
    if (theme !== "default") {
      const el = this.doc.createElement("link");
      el.type = "text/css";
      el.rel = "stylesheet";
      el.id = this.key;
      el.href = `${this.deployUrl}assets/style.${theme}.css`;
      localStorage.setItem(this.key, theme);
      this.doc.body.append(el);
    }
    this.updateChartTheme();
  }
  ngOnDestroy() {
    const el = this.doc.getElementById(this.key);
    if (el != null) {
      this.doc.body.removeChild(el);
    }
  }
};
_ThemeBtnComponent.ɵfac = function ThemeBtnComponent_Factory(t) {
  return new (t || _ThemeBtnComponent)();
};
_ThemeBtnComponent.ɵcmp = ɵɵdefineComponent({
  type: _ThemeBtnComponent,
  selectors: [["theme-btn"]],
  hostVars: 4,
  hostBindings: function ThemeBtnComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("theme-btn", true)("theme-btn-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    types: "types",
    devTips: "devTips",
    deployUrl: "deployUrl"
  },
  outputs: {
    themeChange: "themeChange"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 10,
  vars: 2,
  consts: [["nz-dropdown", "", "nzPlacement", "topCenter", 1, "ant-avatar", "ant-avatar-circle", "ant-avatar-icon", 3, "nzDropdownMenu"], ["nz-tooltip", "", "role", "img", "width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "currentColor", 1, "anticon", 3, "nzTooltipTitle"], ["fill-rule", "evenodd"], ["fill-rule", "nonzero"], ["d", "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-menu-item", ""]],
  template: function ThemeBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1)(2, "g", 2)(3, "g", 3);
      ɵɵelement(4, "path", 4);
      ɵɵelementEnd()()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(5, "nz-dropdown-menu", null, 5)(7, "ul", 6);
      ɵɵrepeaterCreate(8, ThemeBtnComponent_For_9_Template, 2, 1, "li", 8, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(6);
      ɵɵproperty("nzDropdownMenu", ctx.types.length > 0 ? _r0 : null);
      ɵɵadvance();
      ɵɵproperty("nzTooltipTitle", ctx.isDev ? ctx.devTips : null);
      ɵɵadvance(7);
      ɵɵrepeater(ctx.types);
    }
  },
  dependencies: [NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemComponent, NzTooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
var ThemeBtnComponent = _ThemeBtnComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeBtnComponent, [{
    type: Component,
    args: [{
      selector: "theme-btn",
      host: {
        "[class.theme-btn]": `true`,
        "[class.theme-btn-rtl]": `dir === 'rtl'`
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemComponent, NzTooltipDirective],
      template: '<div\n  class="ant-avatar ant-avatar-circle ant-avatar-icon"\n  nz-dropdown\n  nzPlacement="topCenter"\n  [nzDropdownMenu]="types.length > 0 ? menu : null"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]="isDev ? devTips : null"\n    class="anticon"\n    role="img"\n    width="21"\n    height="21"\n    viewBox="0 0 21 21"\n    fill="currentColor"\n  >\n    <g fill-rule="evenodd">\n      <g fill-rule="nonzero">\n        <path\n          d="M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu="nzDropdownMenu">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)="onThemeChange(i.key)">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n'
    }]
  }], null, {
    types: [{
      type: Input
    }],
    devTips: [{
      type: Input
    }],
    deployUrl: [{
      type: Input
    }],
    themeChange: [{
      type: Output
    }]
  });
})();
var COMPONENTS = [ThemeBtnComponent];
var _ThemeBtnModule = class _ThemeBtnModule {
};
_ThemeBtnModule.ɵfac = function ThemeBtnModule_Factory(t) {
  return new (t || _ThemeBtnModule)();
};
_ThemeBtnModule.ɵmod = ɵɵdefineNgModule({
  type: _ThemeBtnModule,
  imports: [CommonModule, NzDropDownModule, NzToolTipModule, ThemeBtnComponent],
  exports: [ThemeBtnComponent]
});
_ThemeBtnModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, NzDropDownModule, NzToolTipModule, COMPONENTS]
});
var ThemeBtnModule = _ThemeBtnModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeBtnModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NzDropDownModule, NzToolTipModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();
export {
  ALAIN_THEME_BTN_KEYS,
  ThemeBtnComponent,
  ThemeBtnModule
};
//# sourceMappingURL=@delon_theme_theme-btn.js.map
