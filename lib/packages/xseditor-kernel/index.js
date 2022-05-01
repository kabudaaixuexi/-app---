"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Config) => {
    console.log(Config.value, 'Config.value');
    Config.value && (Config.value.xs_data.style = 'display: flex;flex-direction: column;');
    return Config.value ? Config.value : {
        children: [],
        xs_data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `xs-editor-container`
        },
        xs_tag: "article",
        xs_type: 1,
    };
};
