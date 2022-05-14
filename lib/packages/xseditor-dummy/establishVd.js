"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatEmptyVd = void 0;
const creatEmptyVd = () => {
    return {
        children: [],
        xs_data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `notepad_sidebar_cont`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    };
};
exports.creatEmptyVd = creatEmptyVd;
