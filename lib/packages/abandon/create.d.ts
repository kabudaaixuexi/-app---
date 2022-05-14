export declare function createElement(tag: Target, data: Target, children?: null | Target): {
    tag: any;
    flag: string;
    data: any;
    children: any;
    childrenFlag: string | undefined;
    el: null;
};
export declare function createTextVNode(text: Target): {
    flag: string;
    tag: null;
    data: null;
    children: any;
    childrenFlag: string;
};
