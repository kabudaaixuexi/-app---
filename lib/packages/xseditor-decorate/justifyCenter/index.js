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
        class: `xs-justifyCenter`,
        onClick: (e) => {
            changeStyle_1.default({ command: 'justifyCenter' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651307148165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2095" width="16" height="16"><path d="M188.77 216.75h651.25v100.19H188.77zM309.28 435.35H719.5v100.19H309.28zM188.77 653.95h651.25v100.19H188.77z" fill="#fefafa" p-id="2096"></path></svg>'
        },
    ],
};
