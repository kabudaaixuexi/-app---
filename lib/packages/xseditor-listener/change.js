"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const achieveVd_1 = require("../xseditor-dummy/achieveVd");
const achieveD_1 = require("../xseditor-dummy/achieveD");
exports.default = (region, Config) => {
    const handleChange = utils_1.debounce((ev) => {
        Config.onChange(achieveD_1.achieveD(achieveVd_1.achieveVd(ev.target)), achieveVd_1.achieveVd(ev.target));
    }, 300, false);
    Config.onChange && region.addEventListener("input", handleChange);
    Config.onKeyEnter && (region.onkeydown = function (event) {
        if (event.keyCode == 13) {
            region.removeEventListener("input", handleChange);
            Config.onKeyEnter(region.innerHTML, region, achieveVd_1.achieveVd(region));
            setTimeout(() => region.addEventListener("input", handleChange), 0);
        }
    });
};
