"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
exports.default = (vm, Config) => {
    vm.style = `background-color: ${config_1.patternClass[Config.pattern].impression};display: flex;flex-direction: column;z-index: 1;position: relative;border-radius: 3px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);`;
    vm.innerHTML = "";
};
