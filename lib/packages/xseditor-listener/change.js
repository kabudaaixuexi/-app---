"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const create_1 = require("../xseditor-dummy/create");
exports.default = (region, callback) => {
    region === null || region === void 0 ? void 0 : region.addEventListener("input", (0, utils_1.debounce)((ev) => {
        callback(region, ev, (0, create_1.createElement)('article', ev.target));
    }, 300, false));
};
