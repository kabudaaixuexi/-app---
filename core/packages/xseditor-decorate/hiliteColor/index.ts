import changeStyle from '../../xseditor-utils/changeStyle'
import { colors } from  '../config'

const hasClass = (el: Element, className: String) => {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className)
}

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-hiliteColor`,
        onClick: (e: Target) => {
            const Ele: Element = (document.querySelector('#xs-hiliteColor-box') as Element)
            let newClass = Ele.className.split(' ');
            if (hasClass(Ele, 'xs-hiliteColor-show')) {
                newClass.push('xs-hiliteColor-hide');
                newClass = [
                    ...newClass
                ].filter((ca: Target) => ca !== 'xs-hiliteColor-show')
		        Ele.className = newClass.join(' ');
            } else {
                newClass.push('xs-hiliteColor-show');
                newClass = [
                    ...newClass
                ].filter((ca: Target) => ca !== 'xs-hiliteColor-hide')
		        Ele.className = newClass.join(' ');
            }
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651321576162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3085" width="16" height="16"><path d="M513.05 759.04c-6.26 0-12.55-0.37-18.84-1.12-79.4-9.45-141.37-82.87-138.15-163.67 1.76-44.21 19.28-88.16 52.06-130.63 25-32.39 53.24-56.63 72.53-71.26 19.28-14.62 46.22-14.61 65.52 0.03 37.49 28.45 124.7 105.78 124.7 209.21 0 44.97-19.3 87.9-52.94 117.78-28.93 25.67-66.35 39.66-104.88 39.66z m0.33-311.08c-14.07 11.21-35.73 30.3-54.61 54.76-24.5 31.75-37.55 63.41-38.77 94.09-1.89 47.39 35.55 92.07 81.76 97.57 27.25 3.24 53.4-4.88 73.65-22.86 19.98-17.74 31.44-43.23 31.44-69.92 0-31.54-12.58-64.16-37.39-96.94-19.2-25.38-41.58-45.16-56.08-56.7z" fill="#333333" p-id="3086"></path><path d="M728.52 917.33H298.26c-72.79 0-132-59.21-132-132V355.07c0-72.79 59.21-132 132-132h430.26c72.79 0 132 59.21 132 132v430.26c0 72.79-59.21 132-132 132zM298.26 287.07c-37.5 0-68 30.5-68 68v430.26c0 37.5 30.5 68 68 68h430.26c37.5 0 68-30.5 68-68V355.07c0-37.5-30.5-68-68-68H298.26z" fill="#333333" p-id="3087"></path></svg>'
        },
        {
            xs_tag: 'div',
            xs_type: 1,
            xs_data: {
                class: 'xs-hiliteColor-hide',
                id: 'xs-hiliteColor-box'
            },
            children: colors.map((ce: Target) => ({
                xs_type: 1,
                xs_tag: "span",
                xs_data: {
                    style: `background-color: ${ce}`,
                    onClick: () => {
                        changeStyle({command:'hiliteColor', value: ce})
                    }
                },
                children: []
            }))
        }
    ],
}