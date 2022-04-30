"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.achieveVd = void 0;
const definitionVd_1 = __importDefault(require("./definitionVd"));
const achieveVd = (vm) => {
    let nodeType = vm.nodeType;
    let xs_vnode = null;
    if (nodeType === 1) {
        let nodeName = vm.nodeName;
        let attrs = vm.attributes;
        let attrObj = {};
        for (let i = 0; i < attrs.length; i++) {
            attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        xs_vnode = new definitionVd_1.default(nodeName, attrObj, undefined, nodeType);
        let childNodes = vm.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let childNode = (0, exports.achieveVd)(childNodes[i]);
            xs_vnode.appendChild(childNode);
        }
    }
    else if (nodeType === 2) {
        xs_vnode = vm.innerHTML;
    }
    else if (nodeType === 3) {
        xs_vnode = new definitionVd_1.default(undefined, undefined, vm.nodeValue, nodeType);
    }
    return xs_vnode;
};
exports.achieveVd = achieveVd;
