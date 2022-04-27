import definitionVn from './definitionVd'
export const achieveVd =  (vm: Target) => {
    /**
     * 1、获取到节点的类型，判断是元素节点还是文本节点 1 元素节点 3 文本节点
     *    - 元素节点
     *      + 获取到元素的 name 与 attr
     *      + 获取到的属性是一个伪数组，将伪书组转换为对象
     *    - 文本节点    
    */
    let nodeType = vm.nodeType;
    let _vnode = null;
    if (nodeType === 1) { // 元素节点              
        let nodeName = vm.nodeName;
        let attrs = vm.attributes;
        let attrObj: any = {};
        for (let i = 0; i < attrs.length; i++) {
            attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        // 元素节点没有 value
        _vnode = new definitionVn(nodeName, attrObj, undefined, nodeType);

        // 有子元素的情况
        let childNodes = vm.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let childNode = achieveVd(childNodes[i]);
            _vnode.appendChild(childNode);
        }

    } else if (nodeType === 3) { // 文本节点没有标签与属性
        _vnode = new definitionVn(undefined, undefined, vm.nodeValue, nodeType);
    }
    return _vnode;
}