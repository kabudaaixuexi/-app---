"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const filter = (value, Config) => {
    const xs_data = value.xs_data;
    xs_data.contenteditable = Config.operable;
    xs_data.allowdrop = Config.operable;
    xs_data.style = `color: ${config_1.patternClass[Config.pattern].upperStrata}`;
    return {
        children: value.children,
        xs_data,
        xs_tag: value.xs_tag,
        xs_type: value.xs_type,
        xs_value: value.xs_value
    };
};
exports.default = (Config) => {
    return (Config.value && Config.value.xs_data && Config.value.xs_tag) ? filter(Config.value, Config) : {
        children: [],
        xs_data: {
            contenteditable: "true",
            allowdrop: "true",
            style: `color: ${config_1.patternClass[Config.pattern].upperStrata}`,
            class: `xs-editor-container`
        },
        xs_tag: "article",
        xs_type: 1,
    };
};
