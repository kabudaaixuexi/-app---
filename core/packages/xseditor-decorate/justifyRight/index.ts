import changeStyle from '../../xseditor-utils/changeStyle'

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-justifyRight`,
        onClick: (e: Target) => {
            changeStyle({command:'justifyRight'})
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651307247592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" width="16" height="16"><path d="M191.77 245.35h651.25v100.19H191.77zM432.8 463.95h410.22v100.19H432.8zM191.77 682.55h651.25v100.19H191.77z" fill="#333333" p-id="2558"></path></svg>'
        },
    ],
}