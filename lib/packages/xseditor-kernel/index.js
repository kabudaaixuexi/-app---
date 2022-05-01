"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prepare_1 = __importDefault(require("./prepare"));
exports.default = (Config) => {
    console.log(Config.value, 'Config.value');
    Config.value && (0, prepare_1.default)(Config);
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
