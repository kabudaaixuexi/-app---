import { debounce } from "../../utils";
import { achieveVd } from "../xseditor-dummy/achieveVd";

export default (region: Element | Target, callback: Function) => {
    region?.addEventListener("input", debounce((ev: any) => {
            callback(region, achieveVd(ev.target));
        }, 300, false)
    );
}