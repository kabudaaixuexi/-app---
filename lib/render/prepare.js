"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (vm) => {
    vm.style = 'display: flex;flex-direction: column;';
    const devOptions = document.querySelector('.xs-editor-decorate');
    const devContent = document.querySelector('.xs-editor-container');
    devContent && devContent.parentNode.removeChild(devContent);
    devOptions && devOptions.parentNode.removeChild(devOptions);
};
