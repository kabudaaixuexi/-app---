import { debounce } from "../../utils";
import { createElement } from "../xseditor-dummy/create";
import { render } from "../xseditor-dummy/render";

export default (region: Element | Target, callback: Function) => {
    region?.addEventListener("input", debounce((ev: any) => {
            callback(region, createElement('article', region), ev, createElement('article', ev.target));
            callback(createElement('article', region).data.vNode);

            render(createElement('article', region).data.vNode, document.querySelector('#app'))
        }, 300, false)
    );
}