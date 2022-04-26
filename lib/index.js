"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("./packages/xseditor-dummy/render");
const create_1 = require("./packages/xseditor-dummy/create");
require("./style");
exports.default = (Element, Config = {
    usePersisted: false,
    useDecorator: false
}) => {
    if (!Element)
        return new Error('渲染节点不能为空');
    const ini = (0, create_1.createElement)("article", { id: "test", contenteditable: true, allowDrop: true, }, [
        (0, create_1.createElement)("p", { key: "a", style: { color: "red", background: "green" } }, "节点1"),
        // createElement("p",{key:"b",class:"item"},"节点2"),
        // createElement("p",{key:"c","@click":() => {alert(111)}},"节点3"),
        (0, create_1.createElement)("p", { key: "d" }, "节点4"),
        (0, create_1.createElement)("p", { key: "b", class: "item" }, "节点2"),
    ]);
    return (0, render_1.render)(ini, Element);
};
