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
        class: `xs-fontSize`,
        onClick: (e) => {
            changeStyle_1.default({ command: 'fontSize', value: 6 });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651334968339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3623" width="16" height="16"><path d="M720.11 622.26c7.7 0 15.19-0.64 22.47-1.93 7.27-1.28 13.85-3.42 19.74-6.42 5.88-2.99 10.91-6.85 15.09-11.55 4.17-4.7 6.9-10.48 8.18-17.33h29.85V809.7h-40.12V651.15h-55.21v-28.89zM210.51 462.46h410.22v100.19H210.51z" fill="#fefafa" p-id="3624"></path><path d="M572.09 809.716v-594.32h100.19v594.32zM210.517 809.714v-594.32h100.19v594.32z" fill="#fefafa" p-id="3625"></path></svg>'
        },
    ],
};
