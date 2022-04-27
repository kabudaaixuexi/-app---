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




import { mount } from "./mount";
// DOM diff 算法
export function patch(prev: Target, next: Target, container: Element | Target) {
    let nextVNodeType = next.flag;
    let prevVNodeType = prev.flag;
    if (nextVNodeType !== prevVNodeType) {
        // 如果节点类型不同，则直接替换  HTML,TEXT或者组件类型
        replaceVNode(prev, next, container);
    } else if (nextVNodeType === "HTML") {
        // HTML类型的对比
        patchElement(prev, next, container);
    } else if (nextVNodeType === "TEXT") {
        // TEXT类型的对比
        patchText(prev, next, container);
    }
}

// 直接替换原来的节点
function replaceVNode(prev: Target, next: Target, container: Element | Target) {
    container.removeChild(prev.el);
    mount(next, container);
}

function patchText(prev: Target, next: Target, container: Element | Target) {
    let el = next.el;
    if (next.children !== prev.children) {
        el && (el.nodeValue = next.children);
    }
}

function patchElement(prev: Target, next: Target, container: Element | Target) {
    if (next.tag !== prev.tag) {
        // 元素标签不同，直接替换
        replaceVNode(prev, next, container);
        return;
    }
    // 如果元素相同
    let el = (next.el = prev.el);
    let prevData = prev.data;
    let nextData = next.data;
    if (nextData) {
        // 更新
        for (let key in nextData) {
            let prevVal = prevData[key];
            let nextVal = nextData[key]
            patchData(el, key, prevVal, nextVal)
        }
    }
    // 删除老的里面一些新的没有的属性
    if (prevData) {
        for (let key in prevData) {
            let prevVal = prevData[key];
            if (prevVal && !nextData.hasOwnProperty(key)) {
                patchData(el, key, prevVal, null)
            }
        }
    }
    // data 更新完毕 下面更新子元素
    patchChildren(
        prev.childrenFlag,
        next.childrenFlag,
        prev.children,
        next.children,
        el
    )


}

// patchChildren

function patchChildren(
    prevChildrenFlag: String,
    nextChildrenFlag: String,
    prevChildren: Target,
    nextChildren: Target,
    container: Element | Target) {
    // 更新子元素
    switch (prevChildrenFlag) {
        case childrenType.EMPTY:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    // 两次都是空的，不需要处理
                    break;
                case childrenType.SINGLE:
                    // 只有原来不存在，新的存在时才需要进行挂载
                    mount(nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    // 原来是空的，现在是多个子元素，那么就直接挂载多个子元素即可。
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount(nextChildren[i], container);
                    }
                    break;
            }
            break;
        case childrenType.SINGLE:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    // 老的是单个文本，新的是空，说明要删除老的。
                    container.removeChild(prevChildren.el);
                    break;
                case childrenType.SINGLE:
                    // 两个都是SINGLE说明都是简单的字符串，
                    patch(prevChildren, nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    // 先把旧的干掉，然后添加新的。只有需要添加时，才需要进行挂载
                    // TODO:其实不应该是这样简单处理，正常应该需要根据key来判断
                    container.removeChild(prevChildren.el);
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount(nextChildren[i], container);
                    }
                    break;
            }
            break;
        case childrenType.MULTIPLE:
            switch (nextChildrenFlag) {
                case childrenType.EMPTY:
                    // 如果旧的是多个，先遍历删除，然后添加新的。
                    // 新的是单个，删除新的。
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el);
                    }
                    break;
                case childrenType.SINGLE:
                    // 如果旧的是多个，先遍历删除，然后添加新的。
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el);
                    }
                    mount(nextChildren, container);
                    break;
                case childrenType.MULTIPLE:
                    // 众多虚拟DOM，在这里进行优化
                    // 老的是个数组，新的也是个数组
                    console.log("新老都是数组");
                    // 根据相对顺序来进行判断
                    let lastIndex = 0;
                    for (let i = 0; i < nextChildren.length; i++) {
                        let isFind = false;
                        let nextVNode = nextChildren[i];
                        let j = 0;
                        console.log("lastIndex:",lastIndex)
                        console.log("nextNode:", nextChildren[i])
                        for (j; j < prevChildren.length; j++) {
                            let preVNode = prevChildren[j];
                            
                            if (preVNode.data.key === nextVNode.data.key) {
                                isFind = true;
                                // key相同，表示是同一个元素
                                patch(preVNode, nextVNode, container);
                                // 只要新数组中，元素相对于前一个兄弟元素的位置，仍然是递增的，那么就不需要处理。
                                if (j < lastIndex) {
                                    // 需要移动元素 insertBefore移动元素
                                    // abc a 移动到b之后。那么需要c的位置，然后使用父元素.insertBefore(a,c)
                                    // 只能通过insertBefore进行移动。
                                    let flagNode = nextChildren[i - 1].el.nextSibling;
                                    container.insertBefore(preVNode.el, flagNode);
                                } else {
                                    lastIndex = j;
                                }
                            }
                        }
                        if (!isFind) {
                            console.log("是新增的元素")
                            let flagNode = i === 0 ? prevChildren.el : nextChildren[i - 1].el.nextSibling;
                            // 表示是需要新增的元素
                            mount(nextVNode, container, flagNode)
                        }
                    }
                    // 移除不需要的元素
                    console.log("接下来执行移除不需要的元素")
                    for (let i = 0; i < prevChildren.length; i++) {
                        const preVNode = prevChildren[i];
                        const has = nextChildren.find((next:Target) => next.key === preVNode.key);
                        if (!has) {
                            container.removeChild(preVNode.el);
                        }
                    }
                    break;
            }
            break;
    }

}





// 挂载data
export function patchData(el: Element | Target, key: String, prev: Target, next: Target) {
    switch (key) {
        case "style":
            for (let k in next) {
                el.style[k] = next[k];
            }
            for (let k in prev) {
                if (next && !next.hasOwnProperty(k)) {
                    el.style[k] = "";
                }
            }
            break;
        case "class":
            el.className = next;
            break;
        default:
            if (key[0] === "@") {
                if (prev) {
                    el.removeEventListener(key.slice(1), prev)
                }
                if (next) {
                    el.addEventListener(key.slice(1), next);
                }
            } else {
                el.setAttribute(key, next);
            }
            break;
    }
}