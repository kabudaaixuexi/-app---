"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const create_1 = require("../xseditor-dummy/create");
const render_1 = require("../xseditor-dummy/render");
exports.default = (region, callback) => {
    region === null || region === void 0 ? void 0 : region.addEventListener("input", (0, utils_1.debounce)((ev) => {
        callback(region, (0, create_1.createElement)('article', region), ev, (0, create_1.createElement)('article', ev.target));
        callback((0, create_1.createElement)('article', region).data.vNode);
        (0, render_1.render)((0, create_1.createElement)('article', region).data.vNode, document.querySelector('#app'));
    }, 300, false));
};
