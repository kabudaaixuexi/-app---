"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.InitializeEditor = exports.ReadOnly = void 0;
/**
 * @decorate
 */
exports.ReadOnly = require('./xseditor-decorate/Readonly');
exports.InitializeEditor = require('./xseditor-decorate/InitializeEditor');
exports.render = require('./xseditor-dummy');
console.log(exports.render);
