"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function watermark(settings = {}) {
    var defaultSettings = Object.assign({ watermarl_element: '', watermark_txt: "水印", watermark_x: 20, watermark_y: 40, watermark_rows: 2000, watermark_cols: 2000, watermark_x_space: 30, watermark_y_space: 20, watermark_color: '#aaa', watermark_alpha: 0.2, watermark_fontsize: '14px', watermark_font: 'cursive', watermark_width: 150, watermark_height: 70, watermark_angle: 18 }, settings);
    if (arguments.length === 1 && typeof arguments[0] === "object") {
        var src = arguments[0] || {};
        for (const key in src) {
            if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key])
                continue;
            else if (src[key])
                defaultSettings[key] = src[key];
        }
    }
    var oTemp = document.createDocumentFragment();
    var maskElement = document.getElementById(defaultSettings.watermarl_element) || document.body;
    console.log(defaultSettings.watermarl_element);
    console.log(maskElement);
    var page_width = Math.max(maskElement.scrollWidth, maskElement.clientWidth);
    var page_height = Math.max(maskElement.scrollHeight, maskElement.clientHeight);
    defaultSettings.watermark_cols = Math.ceil(page_width / (defaultSettings.watermark_x_space + defaultSettings.watermark_width));
    defaultSettings.watermark_rows = Math.ceil(page_height / (defaultSettings.watermark_y_space + defaultSettings.watermark_height));
    var x;
    var y;
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
            var mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            mask_div.innerHTML = (defaultSettings.watermark_txt);
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            mask_div.style.pointerEvents = 'none';
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = "center";
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        }
        ;
    }
    ;
    maskElement.appendChild(oTemp);
}
exports.default = watermark;
