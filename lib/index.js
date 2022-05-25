"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = __importDefault(require("./render"));
exports.default = (Element, Config = {
    value: null,
    operable: true,
    watermark: '',
    pattern: 'classic',
    onChange: () => { },
    onKeyup: () => { }
}, Callback = () => { }) => {
    if (!Element)
        return new Error('Initialize XS editor render target DOM cannot be empty');
    render_1.default(Element, Config, Callback);
};
