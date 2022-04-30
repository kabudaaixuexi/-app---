"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_1 = __importDefault(require("./img"));
const card_1 = __importDefault(require("./card"));
const bold_1 = __importDefault(require("./bold"));
const italic_1 = __importDefault(require("./italic"));
const underline_1 = __importDefault(require("./underline"));
const foreColor_1 = __importDefault(require("./foreColor"));
const hiliteColor_1 = __importDefault(require("./hiliteColor"));
const strikeThrough_1 = __importDefault(require("./strikeThrough"));
const justifyCenter_1 = __importDefault(require("./justifyCenter"));
const justifyRight_1 = __importDefault(require("./justifyRight"));
const justifyLeft_1 = __importDefault(require("./justifyLeft"));
const removeFormat_1 = __importDefault(require("./removeFormat"));
exports.default = (Config) => {
    return {
        children: [
            (0, img_1.default)(Config),
            card_1.default,
            bold_1.default,
            italic_1.default,
            underline_1.default,
            strikeThrough_1.default,
            justifyCenter_1.default,
            justifyRight_1.default,
            justifyLeft_1.default,
            foreColor_1.default,
            hiliteColor_1.default,
            removeFormat_1.default
        ],
        xs_data: {
            class: `xs-editor-decorate`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    };
};
