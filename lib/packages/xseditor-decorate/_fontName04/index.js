"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const changeStyle_1 = __importDefault(require("../../xseditor-utils/changeStyle"));
exports.default = {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-fontName`,
        style: "font-family: STKaiti",
        onClick: (e) => {
            (0, changeStyle_1.default)({ command: 'fontName', value: 'STKaiti' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: `<span>xE</span>`
        },
    ],
};
