"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (obj) => {
    obj.onmousedown = function (event) {
        obj.setCapture && obj.setCapture();
        event = event || window.event;
        var ol = event.clientX - obj.offsetLeft;
        var ot = event.clientY - obj.offsetTop;
        document.onmousemove = function (event) {
            event = event || window.event;
            var left = event.clientX - ol;
            var top = event.clientY - ot;
            obj.style.left = left + "px";
            obj.style.top = top + "px";
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            obj.releaseCapture && obj.releaseCapture();
        };
        return false;
    };
};
