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
        class: `xs-underline`,
        onClick: (e) => {
            (0, changeStyle_1.default)({ command: 'underline' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651306953467" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1576" width="16" height="16"><path d="M306.89 243.98h87.75V536c0 16.85 0.81 33.94 2.46 51.24 1.63 17.32 6.32 32.88 14.04 46.68 7.72 13.81 19.41 25.16 35.1 34.04 15.67 8.9 37.79 13.34 66.34 13.34 28.54 0 50.65-4.44 66.34-13.34 15.67-8.88 27.38-20.24 35.1-34.04 7.72-13.8 12.39-29.36 14.04-46.68 1.63-17.31 2.46-34.4 2.46-51.24V243.98h87.75v320.8c0 32.29-4.91 60.37-14.74 84.24-9.83 23.87-23.76 43.87-41.77 60.02-18.02 16.15-39.66 28.2-64.93 36.15-25.27 7.95-53.35 11.93-84.24 11.93-30.89 0-58.96-3.98-84.24-11.93-25.27-7.95-46.92-20.01-64.93-36.15-18.02-16.15-31.94-36.15-41.77-60.02-9.83-23.87-14.74-51.95-14.74-84.24v-320.8zM274.88 798.68h470.15v47.35H274.88z" fill="#fefafa" p-id="1577"></path></svg>'
        },
    ],
};
