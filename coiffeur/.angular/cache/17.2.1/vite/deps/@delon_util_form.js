import {
  isChinese,
  isColor,
  isDecimal,
  isIdCard,
  isInt,
  isIp,
  isMobile,
  isNum,
  isUrl
} from "./chunk-H2P56GNF.js";
import "./chunk-Q3BVRUJT.js";
import "./chunk-WL36VPKJ.js";
import "./chunk-T4EVUEAM.js";
import "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@delon/util/fesm2022/form.mjs
var _Validators = class {
  /**
   * Wheter is number
   *
   * 是否为数字
   */
  static num(control) {
    return isNum(control.value) ? null : { num: true };
  }
  /**
   * Wheter is integer
   *
   * 是否为整数
   */
  static int(control) {
    return isInt(control.value) ? null : { int: true };
  }
  /**
   * Wheter is decimal
   *
   * 是否为小数点数值
   */
  static decimal(control) {
    return isDecimal(control.value) ? null : { decimal: true };
  }
  /**
   * Wheter is People's Republic of China identity card
   *
   * 是否为中华人民共和国居民身份证
   */
  static idCard(control) {
    return isIdCard(control.value) ? null : { idCard: true };
  }
  /**
   * Wheter is china mobile (China)
   *
   * 是否为手机号（中国）
   */
  static mobile(control) {
    return isMobile(control.value) ? null : { mobile: true };
  }
  /**
   * Wheter is url address
   *
   * 是否URL地址
   */
  static url(control) {
    return isUrl(control.value) ? null : { url: true };
  }
  /**
   * Wheter is IPv4 address (Support v4, v6)
   *
   * 是否IP4地址（支持v4、v6）
   */
  static ip(control) {
    return isIp(control.value) ? null : { ip: true };
  }
  /**
   * Wheter is color
   *
   * 是否颜色代码值
   */
  static color(control) {
    return isColor(control.value) ? null : { color: true };
  }
  /**
   * Wheter is chinese
   *
   * 是否中文
   */
  static chinese(control) {
    return isChinese(control.value) ? null : { chinese: true };
  }
};
function MatchControl(controlName, matchingControlName) {
  return (formGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (matchingControl.errors && !matchingControl.errors.matchControl) {
      return null;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchControl: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
export {
  MatchControl,
  _Validators
};
//# sourceMappingURL=@delon_util_form.js.map
