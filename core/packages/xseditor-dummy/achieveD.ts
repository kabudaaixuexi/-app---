export const achieveD = (vd: Target, vm?: Element | Target) => {
    let _node: any = null;
    let type = vd._type;
    if (type === 1) { // 元素节点
        _node = document.createElement(vd._tag);
        // 属性
        let _data = vd._data;
        Object.entries(_data).forEach(([attrName, attrValue]) => {
            _node.setAttribute(attrName, attrValue);
        })
        // 含有子节点
        let children = vd.children;
        children.forEach((ed: Target) => {
            let childNode = achieveD(ed);
            _node.appendChild(childNode);
        })

    } else if (type === 3) { // 文本节点
        return document.createTextNode(vd._value); // 创建一个文本节点
    }
    return _node;
}