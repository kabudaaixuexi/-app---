"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const packages_1 = require("./packages");
let initEditor = class initEditor {
    constructor(Element, Config) {
        this.initialize = 0;
        this.Element = Element;
        this.Config = Config;
    }
    foundEditor(...[, ,]) { }
};
__decorate([
    packages_1.ReadOnly
], initEditor.prototype, "foundEditor", null);
initEditor = __decorate([
    packages_1.InitializeEditor
], initEditor);
module.exports = (target, config) => {
    return new initEditor(target, config);
};
