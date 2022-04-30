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
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceSelection = void 0;
const replaceSelection = (container, action, selection, containers) => __awaiter(void 0, void 0, void 0, function* () {
    const range = selection.getRangeAt(0);
    const fragment = range.extractContents();
    const span = yield createSpan(container, action, containers);
    span.appendChild(fragment);
    range.insertNode(span);
    selection.selectAllChildren(span);
});
exports.replaceSelection = replaceSelection;
function createSpan(container, action, containers) {
    return new Promise(resolve => {
        const span = document.createElement('span');
        resolve(span);
    });
}
