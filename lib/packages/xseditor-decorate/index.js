"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const display_1 = __importDefault(require("./display"));
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
const _fontSize01_1 = __importDefault(require("./_fontSize01"));
const _fontSize02_1 = __importDefault(require("./_fontSize02"));
const _fontSize03_1 = __importDefault(require("./_fontSize03"));
const _fontSize04_1 = __importDefault(require("./_fontSize04"));
const _fontSize05_1 = __importDefault(require("./_fontSize05"));
const _fontSize06_1 = __importDefault(require("./_fontSize06"));
const _fontName01_1 = __importDefault(require("./_fontName01"));
const _fontName02_1 = __importDefault(require("./_fontName02"));
const _fontName03_1 = __importDefault(require("./_fontName03"));
const _fontName04_1 = __importDefault(require("./_fontName04"));
const insertHTML_1 = __importDefault(require("./insertHTML"));
const removeFormat_1 = __importDefault(require("./removeFormat"));
exports.default = (Config) => {
    return {
        children: [
            display_1.default,
            img_1.default(Config),
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
            _fontSize01_1.default,
            _fontSize02_1.default,
            _fontSize03_1.default,
            _fontSize04_1.default,
            _fontSize05_1.default,
            _fontSize06_1.default,
            _fontName01_1.default,
            _fontName02_1.default,
            _fontName03_1.default,
            _fontName04_1.default,
            insertHTML_1.default,
            removeFormat_1.default
        ],
        xs_data: {
            class: `xs-editor-decorate xs-display-hide`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    };
};
