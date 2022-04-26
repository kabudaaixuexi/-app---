import { mount } from "./mount";
import { patch } from "./patch";
// 如何渲染 render
export function render(vNode: Target, container: Element | Target = {}) {
    // 区分首次渲染和再次渲染,再次渲染需要进行diff。
    if (container.vNode) {
        patch(container.vNode, vNode, container);
    } else {
        // 首次渲染
        mount(vNode, container)
    }
    container.vNode = vNode;
}

