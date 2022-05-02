import { achieveD } from "../packages/xseditor-dummy/achieveD"
import { achieveVd } from "../packages/xseditor-dummy/achieveVd"
import OptionArea from '../packages/xseditor-decorate'
import EditArea from '../packages/xseditor-kernel'
import handleChange from '../packages/xseditor-listener/change'
import listenerDrop from '../packages/xseditor-listener/drop'
import prepare from "./prepare"
import message from "../packages/xseditor-decorate/_message"
export default (Vm: Element | Target, Config: Target, Callback: Function = () => {}) => {
    prepare(Vm)
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
        // 执行回调
        Callback({
            message,
            achieveD,
            achieveVd
        })
    }
}