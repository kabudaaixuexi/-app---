import changeStyle from '../../xseditor-utils/changeStyle'

const collapseTemplate = `
<p style="height: 18.5px;margin-bottom: 6px" />
    <div class="xs-collapse-open" ondblclick="
        if(this.className === 'xs-collapse-fold') {
            this.className = 'xs-collapse-open';
            console.dir(this);
        } else {
            this.className = 'xs-collapse-fold';
            this.blur();
            console.dir(this);
        };
    ">段落..</div>
<p style="height:18.5px;margin-top:6px" />
`

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-collapse`,
        onClick: (e: Target) => {
            changeStyle({command:'insertHTML', value: collapseTemplate})
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1675150519299" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3066" width="13" height="13"><path d="M223.418182 147.362909h801.000727v93.090909h-157.882182v661.550546h-93.090909V240.453818h-240.267636v661.550546h-93.090909V591.127273H223.418182a221.835636 221.835636 0 1 1 0-443.671273m0 350.580364h216.669091V240.453818H223.418182a128.744727 128.744727 0 1 0 0 257.489455" p-id="3067" fill="#ffffff"></path></svg>'
        },
    ],
}