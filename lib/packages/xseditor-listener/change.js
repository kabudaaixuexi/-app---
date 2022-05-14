"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const achieveVd_1 = require("../xseditor-dummy/achieveVd");
const achieveD_1 = require("../xseditor-dummy/achieveD");
exports.default = (region, Config) => {
    region === null || region === void 0 ? void 0 : region.addEventListener("input", utils_1.debounce((ev) => {
        Config.onChange(achieveD_1.achieveD(achieveVd_1.achieveVd(ev.target)), achieveVd_1.achieveVd(ev.target));
    }, 300, false));
};
