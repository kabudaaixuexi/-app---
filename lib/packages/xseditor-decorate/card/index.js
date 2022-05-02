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
        class: `xs-card`,
        onClick: (e) => {
            const Ele = document.querySelector('#xs-card-box');
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-card-show')) {
                newClass.push('xs-card-hide');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-card-show');
                Ele.className = newClass.join(' ');
            }
            else {
                newClass.push('xs-card-show');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-card-hide');
                Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651464268152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2045" width="16" height="16"><path d="M736 213.333333a160 160 0 0 1 159.914667 154.816L896 373.333333v298.666667a160 160 0 0 1-154.816 159.914667L736 832h-426.666667a160 160 0 0 1-159.914666-154.816L149.333333 672v-298.666667a160 160 0 0 1 154.816-159.914666L309.333333 213.333333h426.666667zM832 482.410667H213.333333V672a96 96 0 0 0 91.477334 95.893333L309.333333 768h426.666667a96 96 0 0 0 95.893333-91.477333L832 672v-189.589333z m-96 149.333333a32 32 0 0 1 3.072 63.850667l-3.072 0.149333h-133.717333a32 32 0 0 1-3.093334-63.850667l3.093334-0.149333H736zM736 277.333333h-426.666667a96 96 0 0 0-95.893333 91.477334L213.333333 373.333333v45.077334h618.666667V373.333333a96 96 0 0 0-91.477333-95.893333L736 277.333333z" p-id="2046" fill="#fefafa"></path></svg>'
        },
        {
            xs_tag: 'div',
            xs_type: 1,
            xs_data: {
                class: 'xs-card-hide',
                id: 'xs-card-box'
            },
            children: config_1.cards.map((ce, index) => ({
                xs_type: 1,
                xs_tag: 'div',
                xs_data: {
                    class: `xs-card${index + 1}`,
                    onClick: () => {
                        (0, changeStyle_1.default)({ command: 'insertHTML', value: ce });
                    }
                },
                children: [
                    {
                        xs_type: 3,
                        xs_value: `卡片${index + 1}`
                    }
                ]
            }))
        }
    ],
};
