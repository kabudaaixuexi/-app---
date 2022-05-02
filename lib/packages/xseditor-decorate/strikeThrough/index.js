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
        class: `xs-strikeThrough`,
        onClick: (e) => {
            (0, changeStyle_1.default)({ command: 'strikeThrough' });
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651464443734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10597" width="16" height="16"><path d="M979 1024H45c-24.9 0-45-20.1-45-45s20.1-45 45-45h934c24.9 0 45 20.1 45 45s-20.1 45-45 45zM338.212 287.01l49.383-75.24L820.81 496.108l-49.383 75.24z" p-id="10598" fill="#fefafa"></path><path d="M555.7 871H306.9c-26 0-51.2-7.5-72.9-21.8l-112.4-73.8c-29.7-19.5-50-49.3-57.2-84.1s-0.5-70.2 19-99.9L432.2 60.1c40.2-61.2 122.7-78.4 184-38.2l286.3 187.9c29.7 19.5 50 49.3 57.2 84.1 7.2 34.8 0.5 70.2-19 99.9L666.8 811c-24.7 37.6-66.2 60-111.1 60zM543.3 90.1c-14 0-27.7 6.8-35.9 19.3L158.6 640.8c-6.3 9.6-8.5 21-6.1 32.2 2.3 11.2 8.9 20.8 18.5 27.1L283.4 774c7 4.6 15.1 7 23.5 7h248.8c14.5 0 27.9-7.2 35.8-19.3l273.9-417.2c6.3-9.6 8.5-21 6.1-32.2-2.3-11.2-8.9-20.8-18.5-27.1L566.8 97.1c-7.3-4.7-15.4-7-23.5-7z" p-id="10599" fill="#fefafa"></path></svg>'
        },
    ],
};
