import { render } from "./packages/xseditor-dummy/render"
import OptionArea from './packages/xseditor-decorate'
import EditArea from './packages/xseditor-kernel'
import handleChange from './packages/xseditor-listener/change'

export default (
    Element: Element | null,
    Config:Configure = {
        'xs-class': '',
        onChange: () => {}
    }
) => {
    if (!Element) return new Error('渲染节点不能为空')
    {
        // 渲染选项区
        render(OptionArea(Config), Element, Config)
        // 渲染编辑区
        render(EditArea(Config), Element, Config)
        // 配置监听项
        handleChange(Element, Config.onChange)
    }
}