"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const mount_1 = require("./mount");
const patch_1 = require("./patch");
// 如何渲染 render
function render(vNode, container = {}) {
    // 区分首次渲染和再次渲染,再次渲染需要进行diff。
    if (container.vNode) {
        (0, patch_1.patch)(container.vNode, vNode, container);
    }
    else {
        // 首次渲染
        (0, mount_1.mount)(vNode, container);
    }
    container.vNode = vNode;
}
exports.render = render;
