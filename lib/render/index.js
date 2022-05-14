"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const achieveD_1 = require("../packages/xseditor-dummy/achieveD");
const achieveVd_1 = require("../packages/xseditor-dummy/achieveVd");
const xseditor_decorate_1 = __importDefault(require("../packages/xseditor-decorate"));
const xseditor_kernel_1 = __importDefault(require("../packages/xseditor-kernel"));
const change_1 = __importDefault(require("../packages/xseditor-listener/change"));
const drop_1 = __importDefault(require("../packages/xseditor-listener/drop"));
const prepare_1 = __importDefault(require("./prepare"));
const _message_1 = __importDefault(require("../packages/xseditor-decorate/_message"));
const watermark_1 = __importDefault(require("../packages/xseditor-utils/watermark"));
exports.default = (Vm, Config, Callback = () => { }) => {
    prepare_1.default(Vm);
    {
        Config.operable && Vm.appendChild(achieveD_1.achieveD(xseditor_decorate_1.default(Config)));
        const xsEditor = achieveD_1.achieveD(xseditor_kernel_1.default(Config));
        Vm.appendChild(xsEditor);
        console.log(Vm.id);
        Config.watermark && watermark_1.default({ watermarl_element: Vm.id, watermark_txt: Config.watermark });
        change_1.default(xsEditor, Config);
        drop_1.default(xsEditor, Config);
        Callback({
            message: _message_1.default,
            achieveD: achieveD_1.achieveD,
            achieveVd: achieveVd_1.achieveVd
        });
    }
};
