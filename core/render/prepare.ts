export default (vm: Target) => {
    vm.style = 'display: flex;flex-direction: column;z-index: 1;width: calc(100% - 200px);height: 100%;position: relative;'
    const devOptions = document.querySelector('.xs-editor-decorate') 
    const devContent = document.querySelector('.xs-editor-container') 
    devContent && (devContent.parentNode as Element).removeChild(devContent);
    devOptions && (devOptions.parentNode as Element).removeChild(devOptions); 
}