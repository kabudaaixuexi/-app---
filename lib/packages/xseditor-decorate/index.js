"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../xseditor-dummy/create");
exports.default = (Config) => {
    return (0, create_1.createElement)("article", { class: `xs-editor-container ${Config['xs-class']}`, contenteditable: true, allowDrop: true, }, [
        (0, create_1.createElement)("p", { key: "a", style: { color: "red", background: "green" } }, "节点1"),
    ]);
};
