"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.createVdom = exports.createDom = void 0;
const render_1 = __importDefault(require("./render"));
const achieveD_1 = require("./packages/xseditor-dummy/achieveD");
const achieveVd_1 = require("./packages/xseditor-dummy/achieveVd");
const request_1 = __importDefault(require("./packages/xseditor-utils/request"));
exports.createDom = achieveD_1.achieveD;
exports.createVdom = achieveVd_1.achieveVd;
exports.uploadFile = request_1.default;
exports.default = (Element, Config = {
    value: null,
    operable: true,
    watermark: '',
    upFileUrl: '',
    pattern: 'classic',
    onChange: () => { },
    onKeyEnter: () => { }
}, Callback = () => { }) => {
    if (!Element)
        return new Error('Initialize XS editor render target DOM cannot be empty');
    render_1.default(Element, Config, Callback);
};
