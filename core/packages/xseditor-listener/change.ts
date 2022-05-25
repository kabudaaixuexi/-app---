import { debounce } from "../../utils";
import { achieveVd } from "../xseditor-dummy/achieveVd";
import { achieveD } from "../xseditor-dummy/achieveD";

export default (region: Element | Target, Config: Target) => {
    // 编辑
    region?.addEventListener("input", debounce((ev: Target) => {
            Config.onChange(achieveD(achieveVd(ev.target)), achieveVd(ev.target));
        }, 300, false)
    );
    // 回车
    // region.onkeyup=function(){
    //     var word = window.getSelection?window.getSelection():document.selection.createRange().text;
    //     Config.onKeyup(word)
    // }
}