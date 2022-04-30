export default (data: { command: any; value?: any; }) => {
    console.log(data);
    data.value
    ? document.execCommand(data.command, false, data.value)
    : document.execCommand(data.command, false, '');
};