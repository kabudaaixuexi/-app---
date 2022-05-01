import changeStyle from "../../xseditor-utils/changeStyle";
// import insertAtCursor from "../../xseditor-utils/insertAtCursor";
import { cards } from  '../config'

const hasClass = (el: Element, className: String) => {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className)
}

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-card`,
        onClick: (e: Target) => {
            const Ele: Element = (document.querySelector('#xs-card-box') as Element)
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-card-show')) {
                newClass.push('xs-card-hide');
                newClass = [
                    ...newClass
                ].filter((ca: Target) => ca !== 'xs-card-show')
		        Ele.className = newClass.join(' ');
            } else {
                newClass.push('xs-card-show');
                newClass = [
                    ...newClass
                ].filter((ca: Target) => ca !== 'xs-card-hide')
		        Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651329642856" style="color: #fefafa" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3958" width="16" height="16"><path d="M810.7 170.7H213.3c-70.6 0-128 57.4-128 128v426.7c0 70.6 57.4 128 128 128h597.3c70.6 0 128-57.4 128-128V298.7c0.1-70.6-57.4-128-127.9-128zM213.3 256h597.3c23.5 0 42.7 19.1 42.7 42.7v42.7H170.7v-42.7c0-23.6 19.1-42.7 42.6-42.7z m597.4 512H213.3c-23.5 0-42.7-19.1-42.7-42.7V426.7h682.7v298.7c0 23.5-19.1 42.6-42.6 42.6z" p-id="3959"></path><path d="M725.3 597.3H512c-23.6 0-42.7 19.1-42.7 42.7s19.1 42.7 42.7 42.7h213.3c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7z" p-id="3960"></path></svg>'
        },
        {
            xs_tag: 'div',
            xs_type: 1,
            xs_data: {
                class: 'xs-card-hide',
                id: 'xs-card-box'
            },
            children: cards.map((ce: Target, index: number) => ({
                xs_type: 1,
                xs_tag: 'div',
                xs_data: {
                    class: `xs-card${index + 1}`,
                    onClick: () => {
                        changeStyle({command:'insertHTML', value: ce})
                    }
                },
                children: [
                    {
                        xs_type: 3,
                        xs_value: `卡片${index + 1}`
                    }
                ]
            }))
        }
    ],
}