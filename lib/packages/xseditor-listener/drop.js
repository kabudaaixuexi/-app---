"use strict";
// import axios from 'axios'
// export const listenerDrop = (el: Target) => {
//     el.addEventListener('dragover', (ev: Target) => {
//         ev.preventDefault();
//     })
//     el.addEventListener('drop', (e: Target) => {
//         var df = e.dataTransfer;
//         var dropFiles = []; // 存放拖拽的文件对象
//         if (df.items !== undefined) {
//             // Chrome有items属性，对Chrome的单独处理
//             for (var i = 0; i < df.items.length; i++) {
//                 var item = df.items[i];
//                 // 用webkitGetAsEntry禁止上传目录
//                 if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
//                     var file = item.getAsFile();
//                     dropFiles.push(file);
//                 }
//             }
//         }
//         // 追加图片
//         const appendImg = async (ev: any) => {
//             let data = new FormData() //初始化时将form Dom对象传入
//             data.append('file', ev) //将imagefile键追加进去，值为input-file的dom对象，否则服务端无法获取file
//             const { data:result } = await axios.post('http://124.220.16.124:8099/upload/setFilesNote', data);
//             // const img_src = URL.createObjectURL(ev);
//             (Template as any).setup().changeStyle({
//                 command: 'insertImage',
//                 value: result.data
//             })
//             repaintImg(el)
//         }
//         // 追加pdf
//         const appendOther = (ev: any) => {
//             const template = `<iframe width="300px" height="400px" src="${URL.createObjectURL(ev)}" frameborder="0"></iframe>`;
//             (Template as any).setup().changeStyle({
//                 command: 'insertHTML',
//                 value: template
//             })
//         }
//         dropFiles.map(ev => {
//             // console.log(ev, 'ev');
//             // console.log(Template.setup(),'Template');
//             // 如果拖进来的是图片
//             ev['type'].indexOf('image') !== -1 && appendImg(ev)
//             // 如果拖进来的是pdf
//             ev['type'].indexOf('pdf') !== -1 && appendOther(ev)
//         })
//     })
// }
