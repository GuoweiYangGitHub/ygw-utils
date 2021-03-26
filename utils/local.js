// 获取本地储存
export const getItem = function (name) {
  const value = localStorage.getItem(name);
  try {
    const res = JSON.parse(value);
    return res;
  } catch (error) {
    return value;
  }
};

// 设置本地储存
export const setItem = function (name, value) {
  if (value === null && value === undefined) return;

  if (typeof value === 'object') {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value);
  }
};

// 移除本地储存
export const removeItem = function (name) {
  localStorage.removeItem(name);
  return true;
};

export default {
  getItem,
  setItem,
  removeItem,
};
