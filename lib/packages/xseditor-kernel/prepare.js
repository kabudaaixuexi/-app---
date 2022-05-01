"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Config) => {
    Config.value.xs_data.style = 'display: flex;flex-direction: column;z-index: 1;height: 100%';
    const devOptions = document.querySelector('.xs-editor-container');
    const devContent = document.querySelector('.xs-editor-container');
    devContent && devContent.parentNode.removeChild(devContent);
    devOptions && devOptions.parentNode.removeChild(devOptions);
};
