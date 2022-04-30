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
import RemoveFormat from './removeFormat'
export default (Config?: Target) => {
    return {
        children: [
            Img(Config),
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
            RemoveFormat
        ],
        xs_data: {
            class: `xs-editor-decorate`
        },
        xs_tag: "article",
        xs_type: 1,
        xs_value: undefined
    }
}