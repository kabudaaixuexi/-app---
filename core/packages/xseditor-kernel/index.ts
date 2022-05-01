import prepare from './prepare'
export default (Config?: Target) => {
    console.log(Config.value, 'Config.value');
    Config.value && prepare(Config)
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