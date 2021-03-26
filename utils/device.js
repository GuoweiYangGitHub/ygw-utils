/**
 * 判断
 */
var userAgent = window.navigator.userAgent;
var browserIns = null;

// 是否为安卓
export function isAndroid() {
  return iOS() === 'Android';
}

// 是否为iOS
export function isIOS() {
  return iOS() === 'iOS';
}

// 是否为电脑端
export function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 获取浏览器信息
export function getBrowser() {
  if (!browserIns) {
    browserIns = uaMatch(userAgent);
  }
  return browserIns;
}

// 检测浏览器
function uaMatch(ua) {
  var rwebkit = /(webkit)[ \/]([\w.]+)/,
    ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
    rmsie = /(msie) ([\w.]+)/,
    rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
    // Matches dashed string for camelizing
    rdashAlpha = /-([a-z]|[0-9])/gi,
    rmsPrefix = /^-ms-/;
  ua = (ua || window.navigator.userAgent).toLowerCase();
  var match =
    rwebkit.exec(ua) ||
    ropera.exec(ua) ||
    rmsie.exec(ua) ||
    (ua.indexOf('compatible') < 0 && rmozilla.exec(ua)) ||
    [];
  return {
    browser: match[1] || '',
    version: match[2] || '0',
  };
}

function iOS() {
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  // 是安卓
  if (isAndroid) {
    return 'Android';
  }
  if (isIOS) {
    return 'iOS';
  }
}

export default {
  isAndroid,
  isIOS,
  IsPC,
  getBrowser,
};
