export const achieveD = (vd: Target, vm?: Element | Target) => {
    let xs_node: any = null;
    let type = vd.xs_type;
    if (type === 1) { // 元素节点
        xs_node = document.createElement(vd.xs_tag);
        // 属性
        let xs_data = vd.xs_data;
        Object.entries(xs_data).forEach(([attrName, attrValue]) => {
            if (attrName.substring(0, 2) === 'on' && attrName !== 'onclick') { // event
                xs_node.addEventListener(attrName.substring(2).toLowerCase(), (attrValue as any).bind(xs_node));
            } else {
                xs_node.setAttribute(attrName, attrValue);
            }
        })
        // 含有子节点
        let children = vd.children;
        children.forEach((ed: Target) => {
            let childNode = achieveD(ed);
            xs_node.appendChild(childNode);
        })
    } 
    else if (type === 2) {
        return new DOMParser().parseFromString(vd.xs_value, "text/xml").documentElement
    }
    else if (type === 3) { // 文本节点
        return document.createTextNode(vd.xs_value); // 创建一个文本节点
    }
    return xs_node;
}