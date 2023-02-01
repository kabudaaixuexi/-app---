"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options) => {
    var doc = document;
    var defaults = {
        selector: '.drag, [drag]',
        maxWidth: true,
        whenDisabled: function () {
            return false;
        },
        onFinish: function () { }
    };
    options = options || {};
    var params = {};
    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }
    var strSelector = params.selector;
    var strSelectorImg = strSelector.split(',').map(function (selector) {
        return 'img' + selector.trim();
    }).join();
    var strSelectorActive = strSelector.split(',').map(function (selector) {
        return selector.trim() + '.active';
    }).join();
    var eleStyle = document.createElement('style');
    var strSvg = "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23914AFF' d='M2.5 2.5h25v25h-25z'/%3E%3Cpath d='M0 0v12h2V2h10V0H0zM0 30V18h2v10h10v2H0zM30 0H18v2h10v10h2V0zM30 30H18v-2h10V18h2v12z' fill='%23914AFF'/%3E%3C/svg%3E";
    eleStyle.innerHTML = strSelectorImg + '{display:inline-block;vertical-align: bottom;font-size:12px;border: 3px solid transparent;margin:-1px;position: relative;-webkit-user-select: none; user-select: none; }' + strSelectorActive + '{border-image: url("' + strSvg + '") 12 / 12px / 0; cursor: default; z-index: 1;}';
    document.head.appendChild(eleStyle);
    doc.addEventListener('click', function (event) {
        var eleTarget = event.target;
        if (!eleTarget || !eleTarget.matches) {
            return;
        }
        var eleActive = document.querySelector(strSelectorActive);
        if (eleActive && eleActive != eleTarget) {
            eleActive.classList.remove('active');
        }
        if (params.whenDisabled()) {
            return;
        }
        if (eleTarget.matches(strSelector)) {
            eleTarget.classList.add('active');
        }
    });
    doc.addEventListener('mousedown', function (event) {
        console.log(event, 'ss');
    });
};
