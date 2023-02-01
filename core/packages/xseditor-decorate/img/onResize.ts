export default (options: any) => {
    var doc = document;

    // 参数处理
    var defaults: any = {
        selector: '.resizable, [resizable]',
        maxWidth: true,
        whenDisabled: function () {
            return false
        },
        // 拖拽完成
        onFinish: function () {}
    };

    options = options || {};

    var params: any = {};
    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }

    // 存放临时数据的地方
    var store: any = {};
    // 匹配目标元素的选择器
    var strSelector = params.selector;
    var strSelectorImg = strSelector.split(',').map(function (selector: any) {
        return 'img' + selector.trim();
    }).join();
    var strSelectorActive = strSelector.split(',').map(function (selector: any) {
        return selector.trim() + '.active';
    }).join();

    // 载入必要的 CSS 样式
    var eleStyle = document.createElement('style');
    var strSvg = "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23914AFF' d='M2.5 2.5h25v25h-25z'/%3E%3Cpath d='M0 0v12h2V2h10V0H0zM0 30V18h2v10h10v2H0zM30 0H18v2h10v10h2V0zM30 30H18v-2h10V18h2v12z' fill='%23914AFF'/%3E%3C/svg%3E";
    eleStyle.innerHTML = strSelectorImg + '{display:inline-block;vertical-align: bottom;font-size:12px;border: 3px solid transparent;margin:-1px;position: relative;-webkit-user-select: none; user-select: none; }' + strSelectorActive + '{border-image: url("' + strSvg + '") 12 / 12px / 0; cursor: default; z-index: 1;}';
    document.head.appendChild(eleStyle);

    // 先点击图片，进入可拉伸状态
    doc.addEventListener('click', function (event) {
        var eleTarget: any = event.target;
        if (!eleTarget || !eleTarget.matches) {
            return;
        }

        var eleActive = document.querySelector(strSelectorActive);
        if (eleActive && eleActive != eleTarget) {
            eleActive.classList.remove('active');
        }
        if (params.whenDisabled()) {
            return;
        }
        if (eleTarget.matches(strSelector)) {
            eleTarget.classList.add('active');
        }
    });

    // 设置拉伸触发的标志量
    doc.addEventListener('mousedown', function (event) {
        var eleTarget: any = event.target;
        if (eleTarget.matches && eleTarget.matches(strSelectorActive) && eleTarget.style.cursor) {
            event.preventDefault();
            store.reszing = true;
            store.image = eleTarget;
            store.clientX = event.clientX;
            store.clientY = event.clientY;
            // 此时图片的尺寸
            store.imageWidth = eleTarget.width || eleTarget.clientWidth;
            store.imageHeight = eleTarget.height || eleTarget.clientHeight;
            // 此时图片的拉伸方位
            store.position = eleTarget.position;
            // 最大宽度
            if (typeof params.maxWidth == 'number') {
                store.maxWidth = params.maxWidth;
            } else if (params.maxWidth) {
                // 使用第一个非内联水平的祖先元素的尺寸作为最大尺寸
                var eleParent = (function (element) {
                    var step: any = function (ele: any) {
                        var display = (getComputedStyle(ele) as any).style;
                        if (/inline/.test(display)) {
                            return step(ele.parentElement);
                        }

                        return ele;
                    }

                    return step(element);
                })(eleTarget.parentElement);
                // 设置最大尺寸
                if (eleParent) {
                    store.maxWidth = eleParent.clientWidth - 4;
                }
            }
        }
    });

    // 设置手形，或者拖拽，视标志量决定
    doc.addEventListener('mousemove', function (event) {
        var eleTarget: any = event.target;

        if (store.reszing) {
            event.preventDefault();

            // 移动距离
            var distanceX = event.clientX - store.clientX;
            var distanceY = event.clientY - store.clientY;
            // 变化的尺寸
            var width = 0;
            var height = 0;
            // 方位计算是加还是减
            var scale = 1;
            // 不同方位有着不同的判断逻辑
            var position = store.position;
            // 左下角
            if ((position == 'bottom left' || position == 'top right') && distanceX * distanceY < 0) {
              // 左下方是变大，右上是变小
              // distanceX- distanceY+ 变大，distanceX+ distanceY-是变小
              // 右上角
              // 左下方是变小，右上是变大，正好和 'bottom left' 相反
              if (position == 'top right') {
                scale = -1;
              }
              width = store.imageWidth - distanceX * scale;
              height = store.imageHeight + distanceY * scale;
            } else if ((position == 'top left' || position == 'bottom right') && distanceX * distanceY > 0) {
              // 左上角
              // distanceX+, distanceY+是缩小
              // distanceX-, distanceY-是放大
              // 如果是右下角，则相反
              if (position == 'bottom right') {
                scale = -1;
              }
              width = store.imageWidth - distanceX * scale;
              height = store.imageHeight - distanceY * scale;
            }
            if (!width && !height) {
              return;
            }
            // 目标尺寸
            var imageWidth = 0;
            var imageHeight = 0;
            // 图像的原始比例
            var ratio = store.imageWidth / store.imageHeight;
            // 选择移动距离大的方向
            if (Math.abs(distanceX) > Math.abs(distanceY)) {
              // 宽度变化为主
              imageWidth = width;
              imageHeight = width / ratio;
            } else {
              // 高度变化为主
              imageHeight = height;
              imageWidth = height * ratio;
            }
            // 最终设置图片的尺寸
            store.image.width = Math.round(imageWidth);
            store.image.height = Math.round(imageHeight);
        } else if (eleTarget.matches && eleTarget.matches(strSelectorActive)) {
            // 根据位置设置手形
            var clientX = event.clientX;
            var clientY = event.clientY;
            var bounding = eleTarget.getBoundingClientRect();
            // 边缘判断
            if ((clientX - bounding.left < 20 && clientY - bounding.bottom > -20)
                || (clientX - bounding.right > -20 && clientY - bounding.top < 20)
            ) {
                eleTarget.style.cursor = 'nesw-resize';
                // 判断位置
                if (clientX - bounding.left < 20) {
                    eleTarget.position = 'bottom left';
                } else {
                    eleTarget.position = 'top right';
                }
            } else if ((clientX - bounding.left < 20 && clientY - bounding.top < 20)
                || (clientX - bounding.right > -20 && clientY - bounding.bottom > -20)
            ) {
                eleTarget.style.cursor = 'nwse-resize';
                // 判断位置
                if (clientX - bounding.left < 20) {
                    eleTarget.position = 'top left';
                } else {
                    eleTarget.position = 'bottom right';
                }
            } else {
                eleTarget.style.cursor = '';
                eleTarget.position = '';
            }
        }
    });

    // 拖拽结束
    doc.addEventListener('mouseup', function (event) {
        // 图片尺寸超出100%限制
        if (store.image && store.maxWidth && store.image.width > store.maxWidth) {
            // 目标尺寸
            var imageWidth = store.maxWidth;
            var imageHeight = imageWidth / (store.imageWidth / store.imageHeight);
            // 最终设置图片的尺寸
            store.image.width = Math.round(imageWidth);
            store.image.height = Math.round(imageHeight);
        }
        if (store.reszing) {
            store.reszing = false;
            params.onFinish();
        }
    });
};