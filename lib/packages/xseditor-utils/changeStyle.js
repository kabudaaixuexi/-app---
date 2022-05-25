"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    data.value
        ? document.execCommand(data.command, false, data.value)
        : document.execCommand(data.command, false, '');
};
