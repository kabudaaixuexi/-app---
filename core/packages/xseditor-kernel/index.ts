import { createElement } from "../xseditor-dummy/create"
export default (Config?: Target) => {
    return createElement(
        "article",
        { class: `xs-editor-container ${Config['xs-class']}`, contenteditable: true, allowDrop: true, },
        [
            createElement("p",{key:"a",style:{color:"red",background:"green"}},"节点1"),
        ]
    )
}