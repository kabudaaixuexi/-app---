import { debounce } from "../../utils";
import { createElement } from "../xseditor-dummy/create";

export default (region: Element | Target, callback: Function) => {
    region?.addEventListener("input", debounce((ev: any) => {
            callback(createElement('article', ev.target));
        }, 300, false)
    );
}