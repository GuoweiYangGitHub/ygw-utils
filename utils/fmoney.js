/**
 * 金融类
 */

/**
 *  金融数字  每千位，+ n位小数
 * @param m
 * @param n
 */
export function fmoney(m, n = 0) {
  // eslint-disable-next-line no-param-reassign
  n = n >= 0 && n <= 20 ? n : 2;
  const s = `${parseFloat(`${m}`.replace(/[^\d.-]/g, '')).toFixed(n)}`;
  const l = s.split('.')[0].split('').reverse();
  const r = s.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i += 1) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + (n ? `.${r}` : '');
}

// 金融数字格式化，保留小数部分不变
export const formatFAmount = (amount) =>
  String(amount).replace(/(\d)(?=(?:\d{3})+($|\.))/g, '$1,');

  
export default {
  fmoney,
  formatFAmount,
};
