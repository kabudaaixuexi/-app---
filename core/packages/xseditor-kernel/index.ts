export default (Config?: Target) => {
    return Config.value ? Config.value : {
        children: [],
        xs_data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `xs-editor-container`
        },
        xs_tag: "article",
        xs_type: 1,
    }
}