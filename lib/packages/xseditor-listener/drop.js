"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("../xseditor-utils/request"));
const changeStyle_1 = __importDefault(require("../xseditor-utils/changeStyle"));
exports.default = (el, Config) => {
    el.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    });
    el.addEventListener('drop', (e) => {
        var df = e.dataTransfer;
        var dropFiles = [];
        if (df.items !== undefined) {
            for (var i = 0; i < df.items.length; i++) {
                var item = df.items[i];
                if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
                    var file = item.getAsFile();
                    dropFiles.push(file);
                }
            }
        }
        const appendImg = (ev) => __awaiter(void 0, void 0, void 0, function* () {
            let data = new FormData();
            data.append('file', ev);
            (0, request_1.default)({
                type: 'POST',
                url: Config.upFileUrl,
                data,
                form: true
            }).then((res) => {
                (0, changeStyle_1.default)({
                    command: 'insertImage',
                    value: res.data[0]
                });
            });
        });
        const appendOther = (ev) => {
            const template = `<iframe width="300px" height="400px" src="${URL.createObjectURL(ev)}" frameborder="0"></iframe>`;
            (0, changeStyle_1.default)({
                command: 'insertHTML',
                value: template
            });
        };
        dropFiles.map((ev) => {
            ev['type'].indexOf('image') !== -1 && appendImg(ev);
            ev['type'].indexOf('pdf') !== -1 && appendOther(ev);
        });
    });
};
