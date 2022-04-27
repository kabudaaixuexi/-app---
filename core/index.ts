import renderXsEditor from './render'
export default (
    Element: Element | null,
    Config:Configure = {
        'xs-class': '',
        onChange: () => {}
    }
) => {
    if (!Element) return new Error('渲染目标节点不能为空')
    renderXsEditor(Element, Config)
}