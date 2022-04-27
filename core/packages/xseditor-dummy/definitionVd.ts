/**
* 将DOM转换为虚拟DOM(这里使用的是递归的方法，但是在真正的vue源码中使用的 栈结构，使用栈存储 )
*/
export default class virtualNode {
    constructor(tag: Target, data: Target, value: Target, type: Number) {
        let vm = (this as Target)
        vm._tag = tag && tag.toLowerCase();
        vm._data = data;
        vm._value = value;
        vm._type = type;
        vm.children = [];
    }
    appendChild(vd: Target) {
        let vm = (this as Target)
        vm.children.push(vd);
    }
}