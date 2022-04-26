import { render } from "./packages/xseditor-dummy/render"
import { createElement } from "./packages/xseditor-dummy/create"
import './style'

export default (
    Element: Element | null,
    Config:Configure = {
        usePersisted: false,
        useDecorator: false
    }
) => {
    if (!Element) return new Error('渲染节点不能为空')
    const ini = createElement("article",{id:"test", class: 'xs-editor-container', contenteditable: true, allowDrop: true, },[
        createElement("p",{key:"a",style:{color:"red",background:"green"}},"节点1"),
        // createElement("p",{key:"b",class:"item"},"节点2"),
        // createElement("p",{key:"c","@click":() => {alert(111)}},"节点3"),
        createElement("p",{key:"d"},"节点4"),
        createElement("p",{key:"b",class:"item"},"节点2"),
    ]);
    return render(ini, Element)
}