import { debounce } from "../../utils";
import { achieveVd } from "../xseditor-dummy/achieveVd";
import { achieveD } from "../xseditor-dummy/achieveD";

export default (region: Element | Target, Config: Target) => {
    region?.addEventListener("input", debounce((ev: Target) => {
            Config.onChange(achieveD(achieveVd(ev.target)), achieveVd(ev.target));
            console.log((window as any).getSelection().anchorOffset)  //起始点位置
            console.log((window as any).getSelection().focusOffset)   //末尾点位置
        }, 300, false)
    );
}