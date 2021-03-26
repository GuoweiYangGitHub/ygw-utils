// 判断类型
var toString = Object.prototype.toString;

// 检测类型
function typeOf(obj) {
  var maps = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return maps[toString.call(obj)];
}

/**
 * @description 检测函数
 * @param obj
 * @returns {boolean}
 */
export function isFunction(obj) {
  return typeOf(obj) === 'function';
}

/**
 * @description 检测数组
 * @param obj
 * @returns {boolean}
 */
export function isArray(obj) {
  return typeOf(obj) === 'array';
}

/**
 * @description 检测日期
 * @param obj
 * @returns {boolean}
 */
export function isDate(obj) {
  return typeOf(obj) === 'date';
}

/**
 * @description 检测对象
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
  return typeOf(obj) === 'object';
}

/**
 * @description 检测正则
 * @param obj
 * @returns {boolean}
 */
export function isRegExp(obj) {
  return typeOf(obj) === 'regExp';
}

/**
 * @description 检测undefined
 * @param obj
 * @returns {boolean}
 */
export function isUndefined(obj) {
  return typeOf(obj) === 'undefined';
}

/**
 * @description 检测undefined
 * @param obj
 * @returns {boolean}
 */
export function isNull(obj) {
  return typeOf(obj) === 'null';
}

/**
 * @description 检测数字
 * @param obj
 * @returns {boolean}
 */
export function isNumber(obj) {
  return typeOf(obj) === 'number';
}

/**
 * @description 检测字符串
 * @param obj
 * @returns {boolean}
 */
export function isString(obj) {
  return typeOf(obj) === 'string';
}

/**
 * @description 检测布尔类型
 * @param obj
 * @returns {boolean}
 */
export function isBoolean(obj) {
  return typeOf(obj) === 'boolean';
}

/**
 * 函数防抖
 * 将多次操作合并为一次操作进行
 * @param {function} fn 函数
 * @param {number} t 等待时间（毫秒）
 * @return {function}
 */
export function debounce(fn, delay = 500) {
  let timeId = null;
  return function () {
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      timeId = null;
      fn.apply(this, arguments);
    }, delay);
  };
}

/**
 * 节流:
 * 不管事件触发有多频繁,都会保证在规定时间内只执行一次
 * @param {Function} fn 执行方法
 * @param {Number} wait 等待时间
 *
 */
export function throttle(fn, wait = 500) {
  var valid = true;
  return function () {
    if (!valid) return;
    valid = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      valid = true;
    }, wait);
  };
}

/**
 * 获取随机数组
 */
export function randomArrayElements(arr, count) {
  var shuffled = arr.slice(0);
  var i = arr.length;
  var min = i - count;
  var temp;
  var index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  );
}

export default {
  isFunction,
  isArray,
  isDate,
  isObject,
  isRegExp,
  isUndefined,
  isNull,
  isNumber,
  isString,
  isBoolean,
  debounce,
  throttle,
  randomArrayElements,
  param2Obj,
};
