class Message {
    private messageQueue: any[]; position: String; message: String; type: String; duration: Number; body: Element; id: Target
    constructor() {
      // 消息队列
      this.messageQueue = [];
      // 设置默认值
      this.position = 'top';
      this.message = '';
      this.type = '';
      this.duration = 2000;
      this.body = document.getElementsByTagName('body')[0];
      this.id = 0;
    }
  
    setType(messageDom: Element, type: String) {
      if (type === '') {
        messageDom.classList.add('xs-message-info');
      } else if (type === 'success') {
        messageDom.classList.add('xs-message-success');
      } else if (type === 'warning') {
        messageDom.classList.add('xs-message-warning');
      } else if (type === 'error') {
        messageDom.classList.add('xs-message-error');
      } else {
        messageDom.classList.add('xs-message-info');
      }
    }
  
    createTextDom(messageDom: Element, message: Target) {
      const p = document.createElement('p');
      p.classList.add('xs-message-content');
      p.textContent = message || this.message;
      messageDom.appendChild(p);
    }
  
    removeMessageDom(messageDom: Element, targetId: Number) {
      const startIndex = this.messageQueue.findIndex((message: Target) => message.id === targetId);
      this.messageQueue.splice(startIndex, 1);
      this.updateMessageDom(startIndex);
      //增加移除动画
      messageDom.classList.add('xs-message-leave');
      setTimeout(() => {
        this.body.removeChild(messageDom);
      }, 400);
    }
  
    setOption(options: Target) {
      if (typeof options !== "object") {
        options = {};
      }
      const messageDom = document.createElement('div');
      messageDom.classList.add('xs-message');
      messageDom.classList.add('xs-message-leave');
      if (options.center === true) {
        messageDom.classList.add('xs-message-center');
      }
      const targetId = this.id;
      this.messageQueue.push({
        id: targetId,
        messageDom,
      });
      this.setType(messageDom, options.type);
      this.createTextDom(messageDom, options.message);
      this.setCurrentMessageDom();
      this.body.appendChild(messageDom);
      //增加新增动画
      setTimeout(() => {
        messageDom.classList.remove('xs-message-leave');
      }, 100);
      let i: Target = null;
      if (options.showClose === true) {
        i = document.createElement('i');
        i.classList.add('xs-close-button');
        messageDom.appendChild(i);
      }
      const time: Target = isNaN(Number(options.duration)) ? this.duration : Number(options.duration);
      // 如果duration为0则不需要setTimeout
      let timeId: Target = -1;
      if (time !== 0) {
        timeId = setTimeout(() => {
          this.removeMessageDom(messageDom, targetId);
        }, time);
      }
      if (options.showClose === true) {
        i.addEventListener('click', () => {
          this.removeMessageDom(messageDom, targetId);
          if (targetId !== -1) {
            clearTimeout(timeId);
          }
        });
      }
      this.id++;
    }
  
    setCurrentMessageDom() {
      const index = this.messageQueue.length - 1;
      const targetDom = this.messageQueue[index].messageDom;
      targetDom.style.zIndex = `${2000 + index}`;
      targetDom.style.top = `${64 * index + 20}px`;
    }
  
    updateMessageDom(startIndex: Target) {
      for (let i = startIndex; i < this.messageQueue.length; i++) {
        const messageDom = this.messageQueue[i].messageDom;
        messageDom.style.zIndex = `${2000 + i}`;
        messageDom.style.top = `${64 * i + 20}px`;
      }
    }
}
  
export default new Message()
  
// message.setOption({
//     message: "我被点了！",
//     type: "success",
//     duration: 2000,
//   });
//   message.setOption({
//     message: "我被点了！",
//     type: "warning",
//     center: true,
//     duration: 3000,
//   });