import request from "../xseditor-utils/request";
import message from "../xseditor-decorate/_message";
import { achieveVd } from "../xseditor-dummy/achieveVd";
import changeStyle from "../xseditor-utils/changeStyle";
import insertAtCursor from "../xseditor-utils/insertAtCursor";
const forbidDefaultEvent = (e: Target) => {
    e.preventDefault();
}
export default (el: Target,  Config: Target) => {
    el.addEventListener('dragover', (ev: Target) => {
        forbidDefaultEvent(ev)
    })
    el.addEventListener('drop', (e: Target) => {
        forbidDefaultEvent(e)
        var df = e.dataTransfer;
        var dropFiles: any = []; // 存放拖拽的文件对象

        if (df.items !== undefined) {
            // Chrome有items属性，对Chrome的单独处理
            for (var i = 0; i < df.items.length; i++) {
                var item = df.items[i];
                // 用webkitGetAsEntry禁止上传目录
                if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
                    var file = item.getAsFile();
                    dropFiles.push(file);
                }
            }
        }

        // 追加图片
        const appendImg = async (ev: any) => {
            if (!Config.upFileUrl) {
                message.setOption({
                    message: "如需上传文件请先设置upFileUrl",
                    showClose: true,
                    type: "error",
                    duration: 3000,
                  });
                return
            }
            let data = new FormData() //初始化时将form Dom对象传入
            data.append('file', ev) //将imagefile键追加进去，值为input-file的dom对象，否则服务端无法获取file
            request({
                type: 'POST',
                url: Config.upFileUrl,
                data
            }).then((res: Target) => {
                insertAtCursor(`
                    <img class="xs-inset" onclick="window.open('${res.data[0]}')" src="${res.data[0]}" />
                `)
                // 手动执行一次onChange
                Config.onChange && Config.onChange(el, achieveVd(el));
            })
        }
        // 追加pdf
        const appendOther = (ev: any) => {
            const template = `<iframe width="300px" height="400px" src="${URL.createObjectURL(ev)}" frameborder="0"></iframe>`;
            changeStyle({
                command: 'insertHTML',
                value: template
            })
        }
        dropFiles.map((ev: Target) => {
            // 如果拖进来的是图片
            if(ev['type'].indexOf('image') !== -1) {
                appendImg(ev)
            } else if (ev['type'].indexOf('pdf') !== -1) { // 如果拖进来的是pdf
                appendOther(ev)
            } else {
                message.setOption({
                    message: "目前只识别图片或pdf",
                    showClose: true,
                    type: "warning",
                    duration: 3000,
                  });
            }
        })
    })
}