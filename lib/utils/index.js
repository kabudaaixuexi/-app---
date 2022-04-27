"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.deepClone = exports.getUuiD = void 0;
function getUuiD(randomLength = Math.random()) {
    return Number(Math.random().toString().substr(2, randomLength) + Date.now()).toString(36);
}
exports.getUuiD = getUuiD;
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
