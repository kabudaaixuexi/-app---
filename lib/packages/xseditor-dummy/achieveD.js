"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achieveD = void 0;
const achieveD = (vd, vm) => {
    let xs_node = null;
    let type = vd.xs_type;
    if (type === 1) {
        xs_node = document.createElement(vd.xs_tag);
        let xs_data = vd.xs_data;
        Object.entries(xs_data).forEach(([attrName, attrValue]) => {
            if (attrName.substring(0, 2) === 'on' && attrName !== 'onclick') {
                xs_node.addEventListener(attrName.substring(2).toLowerCase(), attrValue.bind(xs_node));
            }
            else {
                xs_node.setAttribute(attrName, attrValue);
            }
        });
        let children = vd.children;
        children.forEach((ed) => {
            let childNode = exports.achieveD(ed);
            xs_node.appendChild(childNode);
        });
    }
    else if (type === 2) {
        return new DOMParser().parseFromString(vd.xs_value, "text/xml").documentElement;
    }
    else if (type === 3) {
        return document.createTextNode(vd.xs_value);
    }
    return xs_node;
};
exports.achieveD = achieveD;
