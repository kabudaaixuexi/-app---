import renderXsEditor from './render'
export default (
    Element: Element | null,
    Config:Configure = {
        value: null,
        onChange: () => {}
    }
) => {
    if (!Element) return new Error('Initialize XS editor render target DOM cannot be empty')
    renderXsEditor(Element, Config)
}