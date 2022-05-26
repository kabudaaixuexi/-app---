import { debounce } from "../../utils";
import { achieveVd } from "../xseditor-dummy/achieveVd";
import { achieveD } from "../xseditor-dummy/achieveD";

export default (region: Element | Target, Config: Target) => {
    const handleChange = debounce((ev: Target) => {
        Config.onChange && Config.onChange(achieveD(achieveVd(ev.target)), achieveVd(ev.target));
    }, 300, false)
    // 编辑
    Config.onChange && region.addEventListener("input", handleChange);
    // 回车
    Config.onKeyEnter && (region.onkeydown=function(event: Target){
        if(event.keyCode == 13) {
            region.removeEventListener("input", handleChange)
            Config.onKeyEnter(region.innerHTML, region, achieveVd(region))
            setTimeout(() => region.addEventListener("input", handleChange),0)
        }
    })
}