export default (Config?: Target) => {
    console.log(Config, 'Config');
    return (Config.value && Config.value.xs_data && Config.value.xs_tag) ? Config.value : {
        children: [],
        xs_data: {
            contenteditable: `'${Config.operable}'`,
            allowdrop: `'${Config.operable}'`,
            class: `xs-editor-container`
        },
        xs_tag: "article",
        xs_type: 1,
    }
}