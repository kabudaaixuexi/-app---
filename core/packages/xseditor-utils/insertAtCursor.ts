export default (html: Target) => {
    var sel, range;
    if ((window as any).getSelection) {
        // IE9 and non-IE
        sel = (window as any).getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);

            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ((document as any).selection && (document as any).selection.type != "Control") {
        // IE < 9
        (document as any).selection.createRange().pasteHTML(html);
    }
}