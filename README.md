### 基于html可编辑属性开发的一个插件，提供基础的富文本能力。

+ 介绍

@akar/xs-editor属于第一代富文本，指完全基于原生js能力。

+ 案例
  
![图片加载中..](http://124.220.16.124:8099/files/noteFiles/WechatIMG69.png)

* 实现
  + 创建虚拟dom
  + 将虚拟dom一次性渲染到真实dom树
  + 返回编辑时回调，参数为真实dom结构和虚拟dom对象

+ 引入

```
npm i xs-editor
```

+ 使用

```
import foundEdit from 'xs-editor'

const foundXsEditor = (value: vNode | null, operable: Boolean = true) => {
    foundEdit(document.querySelector('#xs-editor-note'), { // 要渲染到哪个节点上
        value, // 传入的虚拟dom对象，默认为null
        operable, // 是否可编辑
        upFileUrl: 'http://124.220.16.124:8099/upload/setFilesNote', // 文件资源上传路径，不需要上传可以不传
        onChange: (vm: Element, vn: vNode) => {
            // vm 真实dom  vn 虚拟dom
        }
    }, () => {
        // 回调，渲染后立即要做的事
    })
}
```

 

[更多富文本知识学习点击这里](https://juejin.cn/post/6952429235743129636 "editor")
