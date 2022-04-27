"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("./packages/xseditor-dummy/render");
const xseditor_decorate_1 = __importDefault(require("./packages/xseditor-decorate"));
const xseditor_kernel_1 = __importDefault(require("./packages/xseditor-kernel"));
const change_1 = __importDefault(require("./packages/xseditor-listener/change"));
exports.default = (Element, Config = {
    'xs-class': '',
    onChange: () => { }
}) => {
    if (!Element)
        return new Error('渲染节点不能为空');
    {
        (0, render_1.render)((0, xseditor_decorate_1.default)(Config), Element, Config);
        (0, render_1.render)((0, xseditor_kernel_1.default)(Config), Element, Config);
        (0, change_1.default)(Element, Config.onChange);
    }
};
