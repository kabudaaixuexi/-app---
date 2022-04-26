"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("./packages/xseditor-dummy/render");
const create_1 = require("./packages/xseditor-dummy/create");
const change_1 = __importDefault(require("./packages/xseditor-listener/change"));
exports.default = (Element, Config = {
    'xs-class': '',
    onChange: () => { }
}) => {
    if (!Element)
        return new Error('渲染节点不能为空');
    const ini = (0, create_1.createElement)("article", { id: "test", class: `xs-editor-container ${Config['xs-class']}`, contenteditable: true, allowDrop: true, }, [
        (0, create_1.createElement)("p", { key: "a", style: { color: "red", background: "green" } }, "节点1"),
        // createElement("p",{key:"b",class:"item"},"节点2"),
        // createElement("p",{key:"c","@click":() => {alert(111)}},"节点3"),
        (0, create_1.createElement)("p", { key: "d" }, "节点4"),
        (0, create_1.createElement)("p", { key: "b", class: "item" }, "节点2"),
    ]);
    {
        (0, render_1.render)(ini, Element);
        (0, change_1.default)(Element, Config.onChange);
    }
};
