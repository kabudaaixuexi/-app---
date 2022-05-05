#### Hellow! ####

* 这里是一个第一代富文本，依旧是利用html的可编辑属性进行开发，不建议将此编辑器应用到企业应用中 
    > 因为想在个人博客中的笔记工具中引入一个更可控的富文本编辑才有了这个插件

![我是图片](http://124.220.16.124:8099/files/noteFiles/WechatIMG69.png)
* * *

* 实现
  + 创建虚拟dom
  + 将虚拟dom一次性渲染到真实dom树
  + 返回编辑时回调，参数为真实dom结构和虚拟dom对象

 使用案例
 ============

 > npm i xs-editor


```
import foundEdit from 'xs-editor'

const foundXsEditor = (value: vNode | null, operable: Boolean = true) => {
    foundEdit(document.querySelector('#xs-editor-note'), { // 要渲染到哪个节点上
        value, // 传入的虚拟dom对象，默认为null
        operable, // 是否可编辑
        upFileUrl: 'http://124.220.16.124:8099/upload/setFilesNote', // 文件资源上传路径，如果需要上传的话传
        onChange: (vm: Element, vn: vNode) => {
            // vm 真实dom  vn 虚拟dom
        }
    }, () => {
        // 回调，渲染后立即要做的事
    })
}
```

 

email：~~kaburda@163.com~~
