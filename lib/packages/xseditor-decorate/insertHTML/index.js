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
        class: `xs-insertHTML`,
        onClick: (e) => {
            const Ele = document.querySelector('#xs-insertHTML-box');
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-insertHTML-show')) {
                newClass.push('xs-insertHTML-hide');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-insertHTML-show');
                Ele.className = newClass.join(' ');
            }
            else {
                newClass.push('xs-insertHTML-show');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-insertHTML-hide');
                Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651464322012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3837" width="16" height="16"><path d="M19.692308 512A25 25 0 1 1 19.692308 531.692308Z" p-id="3838" fill="#fefafa"></path><path d="M711.59627 286.625965C756.296611 286.625965 792.533213 322.898276 792.533213 367.642667 792.533213 412.387058 756.296611 448.659369 711.59627 448.659369 666.895931 448.659369 630.659328 412.387058 630.659328 367.642667 630.659438 322.898276 666.896041 286.625965 711.59627 286.625965L711.59627 286.625965Z" p-id="3839" fill="#fefafa"></path><path d="M310.73715 286.625965C355.437491 286.625965 391.674092 322.898276 391.674092 367.642667 391.674092 412.387058 355.437491 448.659369 310.73715 448.659369 266.036809 448.659369 229.800208 412.387058 229.800208 367.642667 229.800208 322.898276 266.036809 286.625965 310.73715 286.625965L310.73715 286.625965Z" p-id="3840" fill="#fefafa"></path><path d="M761.510209 633.145716C736.812916 742.981134 625.189321 818.997906 511.993303 818.997906 394.704234 818.997906 283.635686 740.921017 261.458914 628.724533 261.458914 598.401185 284.583786 587.521741 298.828633 587.521741L719.423009 587.521741C729.782947 587.544891 769.395771 591.132788 761.510209 633.145716L761.510209 633.145716Z" p-id="3841" fill="#fefafa"></path></svg>'
        },
        {
            xs_tag: 'div',
            xs_type: 1,
            xs_data: {
                class: 'xs-insertHTML-hide',
                id: 'xs-insertHTML-box'
            },
            children: config_1.fontEmgs.map((ce) => ({
                xs_type: 1,
                xs_tag: "span",
                xs_data: {
                    onClick: () => {
                        (0, changeStyle_1.default)({ command: 'insertHTML', value: ce });
                    }
                },
                children: [
                    {
                        xs_type: 2,
                        xs_value: `<span>${ce};</span>`
                    }
                ],
            }))
        }
    ],
};
