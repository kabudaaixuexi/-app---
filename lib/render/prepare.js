"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (vm) => {
    vm.style = 'display: flex;flex-direction: column;z-index: 1;width: calc(100% - 200px);height: 100%;position: relative;';
    const devOptions = document.querySelector('.xs-editor-decorate');
    const devContent = document.querySelector('.xs-editor-container');
    devContent && devContent.parentNode.removeChild(devContent);
    devOptions && devOptions.parentNode.removeChild(devOptions);
};
