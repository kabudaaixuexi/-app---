import { achieveD } from "../packages/xseditor-dummy/achieveD"
import OptionArea from '../packages/xseditor-decorate'
import EditArea from '../packages/xseditor-kernel'
import handleChange from '../packages/xseditor-listener/change'
import listenerDrop from '../packages/xseditor-listener/drop'
export default (Vm: Element | Target, Config: Target) => {
    {
        // 渲染选项区
        Vm.appendChild(achieveD(OptionArea(Config)))
        // 渲染编辑区
        const xsEditor = achieveD(EditArea(Config))
        Vm.appendChild(xsEditor)
        // 配置监听项
        handleChange(xsEditor, Config)
        // 监听拖拽
        listenerDrop(xsEditor, Config)
    }
}