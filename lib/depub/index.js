"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const public_1 = __importDefault(require("./public"));
const sw_decorator_property_1 = __importDefault(require("sw-decorator-property"));
exports.default = (0, sw_decorator_property_1.default)(public_1.default);
