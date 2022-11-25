"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = exports.debounce = exports.deepClone = void 0;
function deepClone(O) {
    return new Promise((resolve, reject) => {
        try {
            const { port1, port2 } = new MessageChannel();
            port2.onmessage = function (e) {
                resolve(e.data);
            };
            port1.postMessage(O);
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.deepClone = deepClone;
function debounce(func, wait, immediate) {
    let timer;
    return function () {
        let context = this, args = arguments;
        if (timer)
            clearTimeout(timer);
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow)
                func.apply(context, args);
        }
        else {
            timer = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        }
    };
}
exports.debounce = debounce;
const getCookie = (cookie_name) => {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    let value = null;
    if (cookie_pos != -1) {
        cookie_pos = cookie_pos + cookie_name.length + 1;
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }
        value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
};
exports.getCookie = getCookie;
