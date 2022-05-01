"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const changeStyle_1 = __importDefault(require("../../xseditor-utils/changeStyle"));
const config_1 = require("../config");
const hasClass = (el, className) => {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
};
exports.default = {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-foreColor`,
        onClick: (e) => {
            const Ele = document.querySelector('#xs-foreColor-box');
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-foreColor-show')) {
                newClass.push('xs-foreColor-hide');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-foreColor-show');
                Ele.className = newClass.join(' ');
            }
            else {
                newClass.push('xs-foreColor-show');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-foreColor-hide');
                Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651321607230" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3354" width="16" height="16"><path d="M490.37 428.91h47.77l98.77 256.44h-48.13l-24.06-67.88H462.35l-24.06 67.88h-46.33l98.41-256.44z m-15.8 154.44h78.3l-38.43-110.26h-1.08l-38.79 110.26z" fill="#fefafa" p-id="3355"></path><path d="M514.6 889.68c-9.53 0-19.12-0.46-28.74-1.37-74.03-7.05-142.07-42.62-191.59-100.16-49.21-57.18-74.72-129.69-71.82-204.17 3.28-84.33 37.06-168.74 100.43-250.9 49.33-63.96 105.22-111.93 143.42-140.9 28.34-21.5 67.98-21.45 96.4 0.13 73.35 55.68 243.95 206.6 243.95 405.14 0 41.89-8.69 82.35-25.82 120.25-16.54 36.59-40.05 68.9-69.87 96.01-29.76 27.06-64.06 47.35-101.94 60.3-30.5 10.43-62.15 15.67-94.42 15.67z m-0.24-645.87c-2.49 0-4.97 0.8-7.08 2.4-28.58 21.68-83.57 67.18-130.7 128.29-54.59 70.78-83.65 142.15-86.36 212.11-2.23 57.29 17.47 113.16 55.46 157.3 38.03 44.2 90.1 71.5 146.61 76.88 32.57 3.1 64.45-0.59 94.78-10.96 29.07-9.94 55.4-25.52 78.26-46.31 22.93-20.85 40.99-45.67 53.69-73.77 13.14-29.06 19.8-60.12 19.8-92.32 0-72.02-28.05-145.62-83.38-218.75-47.69-63.04-104.27-109.99-133.75-132.37-2.2-1.66-4.77-2.5-7.33-2.5z" fill="#fefafa" p-id="3356"></path></svg>'
        },
        {
            xs_tag: 'div',
            xs_type: 1,
            xs_data: {
                class: 'xs-foreColor-hide',
                id: 'xs-foreColor-box'
            },
            children: config_1.colors.map((ce) => ({
                xs_type: 1,
                xs_tag: "span",
                xs_data: {
                    style: `background-color: ${ce}`,
                    onClick: () => {
                        (0, changeStyle_1.default)({ command: 'foreColor', value: ce });
                    }
                },
                children: []
            }))
        }
    ],
};
