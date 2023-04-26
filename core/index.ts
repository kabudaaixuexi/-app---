import renderXsEditor from './render'
import { achieveD } from './packages/xseditor-dummy/achieveD'
import { achieveVd } from './packages/xseditor-dummy/achieveVd'

export const createDom = achieveD
export const createVdom = achieveVd
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