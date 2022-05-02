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
        class: `xs-removeFormat`,
        onClick: (e) => {
            (0, changeStyle_1.default)({ command: 'removeFormat' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651469392201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9116" width="14" height="14"><path d="M610.944 67.84l316.8 316.8a32 32 0 0 1 0 45.312l-402.112 401.984H435.072l424.768-424.64-271.552-271.552-452.48 452.544L379.328 832H288.896L67.904 610.944a32 32 0 0 1 0-45.248L565.696 67.84a32 32 0 0 1 45.248 0z" fill="#fefafa" p-id="9117"></path><path d="M290.304 407.296l316.8 316.8-45.248 45.248-316.8-316.8zM289.344 832h641.92v64H351.744z" fill="#fefafa" p-id="9118"></path></svg>'
        },
    ],
};
