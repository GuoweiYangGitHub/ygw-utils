/**
 * 检测手机号
 */
export function checkPhoneNumber(value) {
  return /^((((\+?86)|(86))?)\s*)*((1[3-9][0-9]))\d{8,17}$/.test(value);
}

/**
 * 检测邮箱
 */
export function checkEmailRegExp(value) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}

/**
 * 检测身份证
 */
export function checkIdCardRegExp(value) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    value
  );
}

export default {
  checkPhoneNumber,
  checkEmailRegExp,
  checkIdCardRegExp,
};
