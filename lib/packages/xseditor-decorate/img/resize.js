"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onlyImageResize(options) {
    var doc = document;
    var defaults = {
        selector: '.resizable, [resizable]',
        maxWidth: true,
        whenDisabled: function () {
            return false;
        },
        onFinish: function () { }
    };
    options = options || {};
    var params = {};
    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }
    var store = {};
    var strSelector = params.selector;
    var strSelectorImg = strSelector.split(',').map(function (selector) {
        return 'img' + selector.trim();
    }).join();
    var strSelectorActive = strSelector.split(',').map(function (selector) {
        return selector.trim() + '.active';
    }).join();
    var eleStyle = document.createElement('style');
    var strSvg = "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23914AFF' d='M2.5 2.5h25v25h-25z'/%3E%3Cpath d='M0 0v12h2V2h10V0H0zM0 30V18h2v10h10v2H0zM30 0H18v2h10v10h2V0zM30 30H18v-2h10V18h2v12z' fill='%23914AFF'/%3E%3C/svg%3E";
    eleStyle.innerHTML = strSelectorImg + '{display:inline-block;vertical-align: bottom;font-size:12px;border: 3px solid transparent;margin:-1px;position: relative;-webkit-user-select: none; user-select: none; }' + strSelectorActive + '{border-image: url("' + strSvg + '") 12 / 12px / 0; cursor: default; z-index: 1;}';
    document.head.appendChild(eleStyle);
    doc.addEventListener('click', function (event) {
        var eleTarget = event.target;
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
    doc.addEventListener('mousedown', function (event) {
        var eleTarget = event.target;
        if (eleTarget.matches && eleTarget.matches(strSelectorActive) && eleTarget.style.cursor) {
            event.preventDefault();
            store.reszing = true;
            store.image = eleTarget;
            store.clientX = event.clientX;
            store.clientY = event.clientY;
            store.imageWidth = eleTarget.width || eleTarget.clientWidth;
            store.imageHeight = eleTarget.height || eleTarget.clientHeight;
            store.position = eleTarget.position;
            if (typeof params.maxWidth == 'number') {
                store.maxWidth = params.maxWidth;
            }
            else if (params.maxWidth) {
                var eleParent = (function (element) {
                    var step = function (ele) {
                        var display = getComputedStyle(ele).style;
                        if (/inline/.test(display)) {
                            return step(ele.parentElement);
                        }
                        return ele;
                    };
                    return step(element);
                })(eleTarget.parentElement);
                if (eleParent) {
                    store.maxWidth = eleParent.clientWidth - 4;
                }
            }
        }
    });
    doc.addEventListener('mousemove', function (event) {
        var eleTarget = event.target;
        if (store.reszing) {
            event.preventDefault();
            var distanceX = event.clientX - store.clientX;
            var distanceY = event.clientY - store.clientY;
            var width = 0;
            var height = 0;
            var scale = 1;
            var position = store.position;
            if ((position == 'bottom left' || position == 'top right') && distanceX * distanceY < 0) {
                if (position == 'top right') {
                    scale = -1;
                }
                width = store.imageWidth - distanceX * scale;
                height = store.imageHeight + distanceY * scale;
            }
            else if ((position == 'top left' || position == 'bottom right') && distanceX * distanceY > 0) {
                if (position == 'bottom right') {
                    scale = -1;
                }
                width = store.imageWidth - distanceX * scale;
                height = store.imageHeight - distanceY * scale;
            }
            if (!width && !height) {
                return;
            }
            var imageWidth = 0;
            var imageHeight = 0;
            var ratio = store.imageWidth / store.imageHeight;
            if (Math.abs(distanceX) > Math.abs(distanceY)) {
                imageWidth = width;
                imageHeight = width / ratio;
            }
            else {
                imageHeight = height;
                imageWidth = height * ratio;
            }
            store.image.width = Math.round(imageWidth);
            store.image.height = Math.round(imageHeight);
        }
        else if (eleTarget.matches && eleTarget.matches(strSelectorActive)) {
            var clientX = event.clientX;
            var clientY = event.clientY;
            var bounding = eleTarget.getBoundingClientRect();
            if ((clientX - bounding.left < 20 && clientY - bounding.bottom > -20)
                || (clientX - bounding.right > -20 && clientY - bounding.top < 20)) {
                eleTarget.style.cursor = 'nesw-resize';
                if (clientX - bounding.left < 20) {
                    eleTarget.position = 'bottom left';
                }
                else {
                    eleTarget.position = 'top right';
                }
            }
            else if ((clientX - bounding.left < 20 && clientY - bounding.top < 20)
                || (clientX - bounding.right > -20 && clientY - bounding.bottom > -20)) {
                eleTarget.style.cursor = 'nwse-resize';
                if (clientX - bounding.left < 20) {
                    eleTarget.position = 'top left';
                }
                else {
                    eleTarget.position = 'bottom right';
                }
            }
            else {
                eleTarget.style.cursor = '';
                eleTarget.position = '';
            }
        }
    });
    doc.addEventListener('mouseup', function (event) {
        if (store.image && store.maxWidth && store.image.width > store.maxWidth) {
            var imageWidth = store.maxWidth;
            var imageHeight = imageWidth / (store.imageWidth / store.imageHeight);
            store.image.width = Math.round(imageWidth);
            store.image.height = Math.round(imageHeight);
        }
        if (store.reszing) {
            store.reszing = false;
            params.onFinish();
        }
    });
}
exports.default = onlyImageResize;
;
