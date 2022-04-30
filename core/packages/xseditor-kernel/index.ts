export default (Config?: Target) => {
    return {
        children: [],
        xs_data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `xs-editor-container`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    }
}