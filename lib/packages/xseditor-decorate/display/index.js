"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasClass = (el, className) => {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
};
exports.default = {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-display`,
        onClick: (e) => {
            const Ele = document.querySelector('.xs-editor-decorate');
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-display-show')) {
                newClass.push('xs-display-hide');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-display-show');
                Ele.className = newClass.join(' ');
            }
            else {
                newClass.push('xs-display-show');
                newClass = [
                    ...newClass
                ].filter((ca) => ca !== 'xs-display-hide');
                Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: `<svg t="1651469187420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8129" width="16" height="16"><path d="M468.8896 796.125867l-50.312533 46.148266L178.414933 580.266667H853.333333v68.266666H333.585067l135.304533 147.592534zM690.414933 375.466667l-135.304533-147.592534 50.312533-46.148266L845.585067 443.733333H170.666667v-68.266666h519.748266z" p-id="8130" fill="#fefafa"></path></svg>`
        },
    ],
};
