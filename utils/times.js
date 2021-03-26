/**
 * 时间类
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    );
  }
}

/**
 * 获取 多少天前的日期
 * @param {Date} time 时间节点
 * @param {Number} day 几天前
 */
export function getBeforeTimeNode(time = new Date(), day = 7) {
  // 获取单位时间内的时间戳
  const timeStamp = day * 1000 * 60 * 60 * 24;
  // day天前的时间戳
  const beforeTimes = time.getTime() - timeStamp;
  // day天前的时间
  const beforeDate = parseTime(beforeTimes, '{y}-{m}-{d}');

  return beforeDate;
}

//获取两个日期相差几天
export function dateMinus(dateStart, dateEnd) {
  const sdate = new Date(dateStart);
  const now = new Date(dateEnd);
  const days = now.getTime() - sdate.getTime();
  const day = Math.floor(days / (1000 * 60 * 60 * 24));

  return day;
}

//比较两个日期大小 yyyy-mm-dd hh:mm:ss,如果d2不传，则比较d1和当前日期大小
export function CompareDate(d1, d2) {
  if (d2) {
    return new Date(d1.replace(/-/g, '/')) > new Date(d2.replace(/-/g, '/'));
  } else {
    return new Date(d1.replace(/-/g, '/')) > new Date();
  }
}

export default {
  parseTime,
  formatTime,
  getBeforeTimeNode,
  dateMinus,
  CompareDate
}