declare class Message {
    private messageQueue;
    position: String;
    message: String;
    type: String;
    duration: Number;
    body: Element;
    id: Target;
    constructor();
    setType(messageDom: Element, type: String): void;
    createTextDom(messageDom: Element, message: Target): void;
    removeMessageDom(messageDom: Element, targetId: Number): void;
    setOption(options: Target): void;
    setCurrentMessageDom(): void;
    updateMessageDom(startIndex: Target): void;
}
declare const _default: Message;
export default _default;
