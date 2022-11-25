"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _message_1 = __importDefault(require("../xseditor-decorate/_message"));
const utils_1 = require("../../utils");
exports.default = (props) => {
    const { type = "post", url = "", data = {} } = props;
    return new Promise((resolve) => {
        fetch(url, {
            method: type,
            headers: {
                'Authorization': 'Bearer ' + utils_1.getCookie('token')
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
            if (data.statusCode === 200) {
                resolve(data);
            }
        })
            .catch(error => {
            _message_1.default.setOption({
                message: error,
                showClose: true,
                type: "error",
                duration: 2000,
            });
        });
    });
};
