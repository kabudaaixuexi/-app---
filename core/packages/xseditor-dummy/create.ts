const vNodeType  = {
    HTML: "HTML",
    TEXT: "TEXT",
    COMPONENT: "COMPONENT",
    CLASS_COMPONENT: "CLASS_COMPONENT"
}
const childrenType = {
    EMPTY: "EMPTY",
    SINGLE: "SINGLE",
    MULTIPLE: "MULTIPLE"
}



// 标签名，属性，子元素
export function createElement(tag: Target, data: Target, children: null | Target = null) {
    let flag; // 用于标记元素的类型
    if (typeof tag === "string") {
        //元素是一个普通的html标签
        flag = vNodeType.HTML;
    } else if (typeof tag === "function") {
        flag = vNodeType.COMPONENT
    } else {
        flag = vNodeType.TEXT
    }
    let childrenFlag; // 用于标记子元素的类型，没有子元素，一个子元素和多个子元素
    if (children == null) {
        childrenFlag = childrenType.EMPTY;
    } else if (Array.isArray(children)) {
        let len = children.length;
        if (len === 0) {
            childrenFlag = childrenType.EMPTY;
        } else if (len >= 1) {
            childrenFlag = childrenType.MULTIPLE;
        }
    } else {
        //其他情况认为是文本
        childrenFlag = childrenType.SINGLE;
        children = createTextVNode(children + "")
    }

    // 返回vNode
    return {
        tag, // 如果是文本，没有tag，如果是组件，就是一个函数
        flag, // vnode类型
        data,
        children,
        childrenFlag,
        el: null
    }
}


// 创建文本类型的虚拟DOM
export function createTextVNode(text: Target) {
    return {
        flag: vNodeType.TEXT,
        tag: null,
        data: null,
        children: text,
        childrenFlag: childrenType.EMPTY
    }
}