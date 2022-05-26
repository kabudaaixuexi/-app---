import renderXsEditor from './render'

export default (
    Element: Element | null,
    Config:Configure = {
        value: null,
        operable: true, // Editable？
        watermark: '',
        upFileUrl: '',
        pattern: 'classic',
        onChange: () => {},
        onKeyEnter: () => {}
    },
    Callback: Function = () => {}
) => {
    if (!Element) return new Error('Initialize XS editor render target DOM cannot be empty')
    renderXsEditor(Element, Config, Callback)
}