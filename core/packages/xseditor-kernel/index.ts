const filter = (value: Target, operable: Boolean) => {
    const xs_data = value.xs_data
    xs_data.contenteditable = operable
    xs_data.allowdrop = operable
    return {
        children: value.children,
        xs_data,
        xs_tag: value.xs_tag,
        xs_type: value.xs_type,
        xs_value: value.xs_value
    }
}
export default (Config?: Target) => {
    console.log(Config, 'Config');
    return (Config.value && Config.value.xs_data && Config.value.xs_tag) ? filter(Config.value, Config.operable) : {
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