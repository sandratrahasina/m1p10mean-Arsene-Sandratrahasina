import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import {
  AlainConfigService
} from "./chunk-Q3BVRUJT.js";
import {
  Router
} from "./chunk-TQFAWZD6.js";
import {
  CommonModule
} from "./chunk-WL36VPKJ.js";
import {
  Directive,
  ElementRef,
  Injectable,
  Injector,
  Input,
  InputFlags,
  NgModule,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-T4EVUEAM.js";
import {
  BehaviorSubject,
  Observable,
  filter,
  map,
  of,
  tap
} from "./chunk-JKR55PDT.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/@delon/acl/fesm2022/acl.mjs
var ACL_DEFAULT_CONFIG = {
  guard_url: `/403`
};
var _ACLService = class _ACLService {
  /** ACL变更通知 */
  get change() {
    return this.aclChange.asObservable();
  }
  /** 获取所有数据 */
  get data() {
    return {
      full: this.full,
      roles: this.roles,
      abilities: this.abilities
    };
  }
  get guard_url() {
    return this.options.guard_url;
  }
  constructor(configSrv) {
    this.roles = [];
    this.abilities = [];
    this.full = false;
    this.aclChange = new BehaviorSubject(null);
    this.options = configSrv.merge("acl", ACL_DEFAULT_CONFIG);
  }
  parseACLType(val) {
    let t;
    if (typeof val === "number") {
      t = {
        ability: [val]
      };
    } else if (Array.isArray(val) && val.length > 0 && typeof val[0] === "number") {
      t = {
        ability: val
      };
    } else if (typeof val === "object" && !Array.isArray(val)) {
      t = __spreadValues({}, val);
    } else if (Array.isArray(val)) {
      t = {
        role: val
      };
    } else {
      t = {
        role: val == null ? [] : [val]
      };
    }
    return __spreadValues({
      except: false
    }, t);
  }
  /**
   * 设置当前用户角色或权限能力（会先清除所有）
   */
  set(value) {
    this.full = false;
    this.abilities = [];
    this.roles = [];
    this.add(value);
    this.aclChange.next(value);
  }
  /**
   * 标识当前用户为全量，即不受限
   */
  setFull(val) {
    this.full = val;
    this.aclChange.next(val);
  }
  /**
   * 设置当前用户权限能力（会先清除所有）
   */
  setAbility(abilities) {
    this.set({
      ability: abilities
    });
  }
  /**
   * 设置当前用户角色（会先清除所有）
   */
  setRole(roles) {
    this.set({
      role: roles
    });
  }
  /**
   * 为当前用户增加角色或权限能力
   */
  add(value) {
    if (value.role && value.role.length > 0) {
      this.roles.push(...value.role);
    }
    if (value.ability && value.ability.length > 0) {
      this.abilities.push(...value.ability);
    }
  }
  /**
   * 为当前用户附加角色
   */
  attachRole(roles) {
    for (const val of roles) {
      if (!this.roles.includes(val)) {
        this.roles.push(val);
      }
    }
    this.aclChange.next(this.data);
  }
  /**
   * 为当前用户附加权限
   */
  attachAbility(abilities) {
    for (const val of abilities) {
      if (!this.abilities.includes(val)) {
        this.abilities.push(val);
      }
    }
    this.aclChange.next(this.data);
  }
  /**
   * 为当前用户移除角色
   */
  removeRole(roles) {
    for (const val of roles) {
      const idx = this.roles.indexOf(val);
      if (idx !== -1) {
        this.roles.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data);
  }
  /**
   * 为当前用户移除权限
   */
  removeAbility(abilities) {
    for (const val of abilities) {
      const idx = this.abilities.indexOf(val);
      if (idx !== -1) {
        this.abilities.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data);
  }
  /**
   * 当前用户是否有对应角色，其实 `number` 表示Ability
   *
   * - 当 `full: true` 或参数 `null` 时返回 `true`
   * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
   */
  can(roleOrAbility) {
    const {
      preCan
    } = this.options;
    if (preCan) {
      roleOrAbility = preCan(roleOrAbility);
    }
    const t = this.parseACLType(roleOrAbility);
    let result = false;
    if (this.full === true || !roleOrAbility) {
      result = true;
    } else {
      if (t.role && t.role.length > 0) {
        if (t.mode === "allOf") {
          result = t.role.every((v) => this.roles.includes(v));
        } else {
          result = t.role.some((v) => this.roles.includes(v));
        }
      }
      if (t.ability && t.ability.length > 0) {
        if (t.mode === "allOf") {
          result = t.ability.every((v) => this.abilities.includes(v));
        } else {
          result = t.ability.some((v) => this.abilities.includes(v));
        }
      }
    }
    return t.except === true ? !result : result;
  }
  /** @inner */
  parseAbility(value) {
    if (typeof value === "number" || typeof value === "string" || Array.isArray(value)) {
      value = {
        ability: Array.isArray(value) ? value : [value]
      };
    }
    delete value.role;
    return value;
  }
  /**
   * 当前用户是否有对应权限点
   */
  canAbility(value) {
    return this.can(this.parseAbility(value));
  }
};
_ACLService.ɵfac = function ACLService_Factory(t) {
  return new (t || _ACLService)(ɵɵinject(AlainConfigService));
};
_ACLService.ɵprov = ɵɵdefineInjectable({
  token: _ACLService,
  factory: _ACLService.ɵfac,
  providedIn: "root"
});
var ACLService = _ACLService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ACLService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AlainConfigService
  }], null);
})();
var _ACLIfDirective = class _ACLIfDirective {
  constructor() {
    this.srv = inject(ACLService);
    this._viewContainer = inject(ViewContainerRef);
    this._thenTemplateRef = inject(TemplateRef);
    this._elseTemplateRef = null;
    this._thenViewRef = null;
    this._elseViewRef = null;
    this._except = false;
    this._change$ = this.srv.change.pipe(takeUntilDestroyed(), filter((r) => r != null)).subscribe(() => this._updateView());
  }
  set aclIf(value) {
    this._value = value;
    this._updateView();
  }
  set aclIfThen(templateRef) {
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;
    this._updateView();
  }
  set aclIfElse(templateRef) {
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;
    this._updateView();
  }
  set except(value) {
    this._except = value != null && `${value}` !== "false";
  }
  get except() {
    return this._except;
  }
  _updateView() {
    const res = this.srv.can(this._value);
    if (res && !this.except || !res && this.except) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
        }
      }
    }
  }
  ngOnDestroy() {
    this._change$.unsubscribe();
  }
};
_ACLIfDirective.ɵfac = function ACLIfDirective_Factory(t) {
  return new (t || _ACLIfDirective)();
};
_ACLIfDirective.ɵdir = ɵɵdefineDirective({
  type: _ACLIfDirective,
  selectors: [["", "aclIf", ""]],
  inputs: {
    aclIf: "aclIf",
    aclIfThen: "aclIfThen",
    aclIfElse: "aclIfElse",
    except: "except"
  },
  exportAs: ["aclIf"],
  standalone: true
});
var ACLIfDirective = _ACLIfDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ACLIfDirective, [{
    type: Directive,
    args: [{
      selector: "[aclIf]",
      exportAs: "aclIf",
      standalone: true
    }]
  }], () => [], {
    aclIf: [{
      type: Input
    }],
    aclIfThen: [{
      type: Input
    }],
    aclIfElse: [{
      type: Input
    }],
    except: [{
      type: Input
    }]
  });
})();
var _ACLDirective = class _ACLDirective {
  set acl(value) {
    this.set(value);
  }
  set ability(value) {
    this.set(this.srv.parseAbility(value));
  }
  set(value) {
    this._value = value;
    const CLS = "acl__hide";
    const el = this.el;
    if (this.srv.can(this._value)) {
      this.renderer.removeClass(el, CLS);
    } else {
      this.renderer.addClass(el, CLS);
    }
  }
  constructor() {
    this.el = inject(ElementRef).nativeElement;
    this.renderer = inject(Renderer2);
    this.srv = inject(ACLService);
    this.change$ = this.srv.change.pipe(takeUntilDestroyed(), filter((r) => r != null)).subscribe(() => this.set(this._value));
  }
  ngOnDestroy() {
    this.change$.unsubscribe();
  }
};
_ACLDirective.ɵfac = function ACLDirective_Factory(t) {
  return new (t || _ACLDirective)();
};
_ACLDirective.ɵdir = ɵɵdefineDirective({
  type: _ACLDirective,
  selectors: [["", "acl", ""]],
  inputs: {
    acl: "acl",
    ability: [InputFlags.None, "acl-ability", "ability"]
  },
  exportAs: ["acl"],
  standalone: true
});
var ACLDirective = _ACLDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ACLDirective, [{
    type: Directive,
    args: [{
      selector: "[acl]",
      exportAs: "acl",
      standalone: true
    }]
  }], () => [], {
    acl: [{
      type: Input,
      args: ["acl"]
    }],
    ability: [{
      type: Input,
      args: ["acl-ability"]
    }]
  });
})();
var _ACLGuardService = class _ACLGuardService {
  constructor() {
    this.srv = inject(ACLService);
    this.router = inject(Router);
    this.injector = inject(Injector);
  }
  process(data) {
    data = __spreadValues({
      guard: null,
      guard_url: this.srv.guard_url
    }, data);
    let guard = data.guard;
    if (typeof guard === "function")
      guard = guard(this.srv, this.injector);
    return (guard && guard instanceof Observable ? guard : of(guard != null ? guard : null)).pipe(map((v) => this.srv.can(v)), tap((v) => {
      if (v)
        return;
      this.router.navigateByUrl(data.guard_url);
    }));
  }
};
_ACLGuardService.ɵfac = function ACLGuardService_Factory(t) {
  return new (t || _ACLGuardService)();
};
_ACLGuardService.ɵprov = ɵɵdefineInjectable({
  token: _ACLGuardService,
  factory: _ACLGuardService.ɵfac,
  providedIn: "root"
});
var ACLGuardService = _ACLGuardService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ACLGuardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var aclCanActivate = (route) => inject(ACLGuardService).process(route.data);
var aclCanActivateChild = (route) => inject(ACLGuardService).process(route.data);
var aclCanMatch = (route) => inject(ACLGuardService).process(route.data);
var COMPONENTS = [ACLDirective, ACLIfDirective];
var _DelonACLModule = class _DelonACLModule {
};
_DelonACLModule.ɵfac = function DelonACLModule_Factory(t) {
  return new (t || _DelonACLModule)();
};
_DelonACLModule.ɵmod = ɵɵdefineNgModule({
  type: _DelonACLModule,
  imports: [CommonModule, ACLDirective, ACLIfDirective],
  exports: [ACLDirective, ACLIfDirective]
});
_DelonACLModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var DelonACLModule = _DelonACLModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DelonACLModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();

export {
  ACL_DEFAULT_CONFIG,
  ACLService,
  ACLIfDirective,
  ACLDirective,
  ACLGuardService,
  aclCanActivate,
  aclCanActivateChild,
  aclCanMatch,
  DelonACLModule
};
//# sourceMappingURL=chunk-Y4W7AVST.js.map
