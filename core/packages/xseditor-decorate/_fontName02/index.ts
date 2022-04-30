import changeStyle from '../../xseditor-utils/changeStyle'

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-fontName`,
        style: "font-family: Yuanti SC",
        onClick: (e: Target) => {
            changeStyle({command:'fontName', value: 'Yuanti SC'})
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<span>xE</span>'
        },
    ],
}