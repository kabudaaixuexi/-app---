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
            changeStyle_1.default({ command: 'fontSize', value: 3 });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651335076454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4148" width="16" height="16"><path d="M844.4 756.42h-28.89v53.28h-34.66v-53.28h-96.29v-36.27l96.29-135.12h34.66v142.51h28.89v28.88z m-131.6-28.88h68.04v-98.86h-0.64l-67.4 98.86zM184.28 462.46H594.5v100.19H184.28z" fill="#fefafa" p-id="4149"></path><path d="M545.855 809.712v-594.32h100.19v594.32zM184.283 809.71V215.39h100.19v594.32z" fill="#fefafa" p-id="4150"></path></svg>'
        },
    ],
};
