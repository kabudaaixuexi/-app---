export function deepClone(O: Target) {
    return new Promise((resolve, reject) => {
      try {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = function (e) {
          resolve(e.data);
        };
        port1.postMessage(O);
      } catch (e) {
        reject(e);
      }
    });
}
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
 export function debounce(func: any, wait: any, immediate: any) {
  let timer: any;
  return function(this: {}) {
    let context = this,
    args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer  = setTimeout(() => {
        func.apply(context, args);
      }, wait)
    }
  }
}