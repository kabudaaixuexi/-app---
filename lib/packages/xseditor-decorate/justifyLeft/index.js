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
        class: `xs-justifyLeft`,
        onClick: (e) => {
            changeStyle_1.default({ command: 'justifyLeft' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651307197933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2301" width="16" height="16"><path d="M189.08 245.35h651.25v100.19H189.08zM189.08 463.95H599.3v100.19H189.08zM189.08 682.55h651.25v100.19H189.08z" fill="#fefafa" p-id="2302"></path></svg>'
        },
    ],
};
