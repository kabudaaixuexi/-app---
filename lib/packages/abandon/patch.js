"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchData = exports.patch = void 0;
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
const mount_1 = require("./mount");
function patch(prev, next, container) {
    let nextVNodeType = next.flag;
    let prevVNodeType = prev.flag;
    if (nextVNodeType !== prevVNodeType) {
        replaceVNode(prev, next, container);
    }
    else if (nextVNodeType === "HTML") {
        patchElement(prev, next, container);
    }
    else if (nextVNodeType === "TEXT") {
        patchText(prev, next, container);
    }
}
exports.patch = patch;
function replaceVNode(prev, next, container) {
    container.removeChild(prev.el);
    mount_1.mount(next, container);
}
function patchText(prev, next, container) {
    let el = next.el;
    if (next.children !== prev.children) {
        el && (el.nodeValue = next.children);
    }
}
function patchElement(prev, next, container) {
    if (next.tag !== prev.tag) {
        replaceVNode(prev, next, container);
        return;
    }
    let el = (next.el = prev.el);
    let prevData = prev.data;
    let nextData = next.data;
    if (nextData) {
        for (let key in nextData) {
            let prevVal = prevData[key];
            let nextVal = nextData[key];
            patchData(el, key, prevVal, nextVal);
        }
    }
    if (prevData) {
        for (let key in prevData) {
            let prevVal = prevData[key];
            if (prevVal && !nextData.hasOwnProperty(key)) {
                patchData(el, key, prevVal, null);
            }
        }
    }
    patchChildren(prev.childrenFlag, next.childrenFlag, prev.children, next.children, el);
}
function patchChildren(prevChildrenFlag, nextChildrenFlag, prevChildren, nextChildren, container) {
    switch (prevChildrenFlag) {
        case childrenType.EMPTY:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    break;
                case childrenType.SINGLE:
                    mount_1.mount(nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount_1.mount(nextChildren[i], container);
                    }
                    break;
            }
            break;
        case childrenType.SINGLE:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    container.removeChild(prevChildren.el);
                    break;
                case childrenType.SINGLE:
                    patch(prevChildren, nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    container.removeChild(prevChildren.el);
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount_1.mount(nextChildren[i], container);
                    }
                    break;
            }
            break;
        case childrenType.MULTIPLE:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el);
                    }
                    break;
                case childrenType.SINGLE:
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el);
                    }
                    mount_1.mount(nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    console.log("新老都是数组");
                    let lastIndex = 0;
                    for (let i = 0; i < nextChildren.length; i++) {
                        let isFind = false;
                        let nextVNode = nextChildren[i];
                        let j = 0;
                        console.log("lastIndex:", lastIndex);
                        console.log("nextNode:", nextChildren[i]);
                        for (j; j < prevChildren.length; j++) {
                            let preVNode = prevChildren[j];
                            if (preVNode.data.key === nextVNode.data.key) {
                                isFind = true;
                                patch(preVNode, nextVNode, container);
                                if (j < lastIndex) {
                                    let flagNode = nextChildren[i - 1].el.nextSibling;
                                    container.insertBefore(preVNode.el, flagNode);
                                }
                                else {
                                    lastIndex = j;
                                }
                            }
                        }
                        if (!isFind) {
                            console.log("是新增的元素");
                            let flagNode = i === 0 ? prevChildren.el : nextChildren[i - 1].el.nextSibling;
                            mount_1.mount(nextVNode, container, flagNode);
                        }
                    }
                    console.log("接下来执行移除不需要的元素");
                    for (let i = 0; i < prevChildren.length; i++) {
                        const preVNode = prevChildren[i];
                        const has = nextChildren.find((next) => next.key === preVNode.key);
                        if (!has) {
                            container.removeChild(preVNode.el);
                        }
                    }
                    break;
            }
            break;
    }
}
function patchData(el, key, prev, next) {
    switch (key) {
        case "style":
            for (let k in next) {
                el.style[k] = next[k];
            }
            for (let k in prev) {
                if (next && !next.hasOwnProperty(k)) {
                    el.style[k] = "";
                }
            }
            break;
        case "class":
            el.className = next;
            break;
        default:
            if (key[0] === "@") {
                if (prev) {
                    el.removeEventListener(key.slice(1), prev);
                }
                if (next) {
                    el.addEventListener(key.slice(1), next);
                }
            }
            else {
                el.setAttribute(key, next);
            }
            break;
    }
}
exports.patchData = patchData;
