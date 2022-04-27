"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const mount_1 = require("./mount");
const patch_1 = require("./patch");
function render(vNode, container = {}, config) {
    if (container.vNode) {
        (0, patch_1.patch)(container.vNode, vNode, container);
    }
    else {
        (0, mount_1.mount)(vNode, container);
    }
    container.vNode = vNode;
}
exports.render = render;
