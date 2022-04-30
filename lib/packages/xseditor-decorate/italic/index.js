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
        class: `xs-italic`,
        onClick: (e) => {
            (0, changeStyle_1.default)({ command: 'italic' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651306849341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1325" width="16" height="16"><path d="M603.54 276.12l-97.07 533.93H422.2l97.07-533.93h84.27z" fill="#333333" p-id="1326"></path><path d="M709.99 346.99H387.06l13.88-76.36h322.93l-13.88 76.36zM625.68 810.69H302.75l13.88-76.35h322.93l-13.88 76.35z" fill="#333333" p-id="1327"></path></svg>'
        },
    ],
};
