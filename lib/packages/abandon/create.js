"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTextVNode = exports.createElement = void 0;
const vNodeType = {
    HTML: "HTML",
    TEXT: "TEXT",
    COMPONENT: "COMPONENT",
    CLASS_COMPONENT: "CLASS_COMPONENT"
};
const childrenType = {
    EMPTY: "EMPTY",
    SINGLE: "SINGLE",
    MULTIPLE: "MULTIPLE"
};
function createElement(tag, data, children = []) {
    let flag;
    if (typeof tag === "string") {
        flag = vNodeType.HTML;
    }
    else if (typeof tag === "function") {
        flag = vNodeType.COMPONENT;
    }
    else {
        flag = vNodeType.TEXT;
    }
    let childrenFlag;
    if (children == null) {
        childrenFlag = childrenType.EMPTY;
    }
    else if (Array.isArray(children)) {
        let len = children.length;
        if (len === 0) {
            childrenFlag = childrenType.EMPTY;
        }
        else if (len >= 1) {
            childrenFlag = childrenType.MULTIPLE;
        }
    }
    else {
        childrenFlag = childrenType.SINGLE;
        children = createTextVNode(children + "");
    }
    return {
        tag,
        flag,
        data,
        children,
        childrenFlag,
        el: null
    };
}
exports.createElement = createElement;
function createTextVNode(text) {
    return {
        flag: vNodeType.TEXT,
        tag: null,
        data: null,
        children: text,
        childrenFlag: childrenType.EMPTY
    };
}
exports.createTextVNode = createTextVNode;
