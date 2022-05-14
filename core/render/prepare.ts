import { patternClass } from '../config'
export default (vm: Target, Config: Target) => {
    vm.style = `background-color: ${patternClass[Config.pattern].impression};display: flex;flex-direction: column;z-index: 1;position: relative;border-radius: 3px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);`
    vm.innerHTML = ""
    // const devOptions = document.querySelector('.xs-editor-decorate') 
    // const devContent = document.querySelector('.xs-editor-container') 
    // devContent && (devContent.parentNode as Element).removeChild(devContent);
    // devOptions && (devOptions.parentNode as Element).removeChild(devOptions); 
    // // 清除水印
    // devContent && (devContent.parentNode as Element).removeChild(devOptions); 
}