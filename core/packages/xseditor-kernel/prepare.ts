export default (Config: Target) => {
    Config.value.xs_data.style = 'display: flex;flex-direction: column;z-index: 1;height: 100%'
    const devOptions = document.querySelector('.xs-editor-container') 
    const devContent = document.querySelector('.xs-editor-container') 
    devContent && (devContent.parentNode as Element).removeChild(devContent);
    devOptions && (devOptions.parentNode as Element).removeChild(devOptions); 
}