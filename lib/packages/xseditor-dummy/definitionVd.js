"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class virtualNode {
    constructor(tag, data, value, type) {
        let vm = this;
        vm.xs_tag = tag && tag.toLowerCase();
        vm.xs_data = data;
        vm.xs_value = value;
        vm.xs_type = type;
        vm.children = [];
    }
    appendChild(vd) {
        let vm = this;
        vm.children.push(vd);
    }
}
exports.default = virtualNode;
