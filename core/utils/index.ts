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
export const getCookie = (cookie_name: string) => {
  var allcookies = document.cookie;
  //索引长度，开始索引的位置
  var cookie_pos = allcookies.indexOf(cookie_name);

  let value:Target = null
  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookie_pos != -1) {
      // 把cookie_pos放在值的开始，只要给值加1即可
      //计算取cookie值得开始索引，加的1为“=”
      cookie_pos = cookie_pos + cookie_name.length + 1;
      //计算取cookie值得结束索引
      var cookie_end = allcookies.indexOf(";", cookie_pos);


      if (cookie_end == -1) {
          cookie_end = allcookies.length;


      }
      //得到想要的cookie的值
      value = unescape(allcookies.substring(cookie_pos, cookie_end));
  }
  return value;
}