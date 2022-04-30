"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const achieveD_1 = require("../packages/xseditor-dummy/achieveD");
const xseditor_decorate_1 = __importDefault(require("../packages/xseditor-decorate"));
const xseditor_kernel_1 = __importDefault(require("../packages/xseditor-kernel"));
const change_1 = __importDefault(require("../packages/xseditor-listener/change"));
exports.default = (Vm, Config) => {
    {
        Vm.appendChild((0, achieveD_1.achieveD)((0, xseditor_decorate_1.default)(Config)));
        const xsEditor = (0, achieveD_1.achieveD)((0, xseditor_kernel_1.default)(Config));
        Vm.appendChild(xsEditor);
        (0, change_1.default)(xsEditor, Config);
    }
};
