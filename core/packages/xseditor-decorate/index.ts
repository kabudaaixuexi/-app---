import Display from './display'
import Img from './img'
import Card from './card'
import Bold from './bold'
import Italic from './italic'
import Underline from './underline'
import ForeColor from './foreColor'
import HiliteColor from './hiliteColor'
import StrikeThrough from './strikeThrough'
import JustifyCenter from './justifyCenter'
import JustifyRight from './justifyRight'
import JustifyLeft from './justifyLeft'
import FontSize01 from './_fontSize01'
import FontSize02 from './_fontSize02'
import FontSize03 from './_fontSize03'
import FontSize04 from './_fontSize04'
import FontSize05 from './_fontSize05'
import FontSize06 from './_fontSize06'
import FontName01 from './_fontName01'
import FontName02 from './_fontName02'
import FontName03 from './_fontName03'
import FontName04 from './_fontName04'
import InsertHTML from './insertHTML'
import RemoveFormat from './removeFormat'
export default (el: Element | Target, Config: Target) => {
    return {
        children: [
            Display,
            Img(el, Config),
            Card,
            Bold,
            Italic,
            Underline,
            StrikeThrough,
            JustifyCenter,
            JustifyRight,
            JustifyLeft,
            ForeColor,
            HiliteColor,

            FontSize01,
            FontSize02,
            FontSize03,
            FontSize04,
            FontSize05,
            FontSize06,

            FontName01,
            FontName02,
            FontName03,
            FontName04,

            InsertHTML,

            RemoveFormat
        ],
        xs_data: {
            class: `xs-editor-decorate xs-display-show`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    }
}