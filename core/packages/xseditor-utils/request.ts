import message from "../xseditor-decorate/_message";

export default (props: Target) => {
  const { type = "post", url = "", data = {}, form = false } = props;
  return new Promise((resolve) => {
    fetch(url, {
      method: type,
      body: data
    })
    .then(response => response.json())
    .then(data => {
      if (data.statusCode === 200) {
        resolve(data)
      }
    })
    .catch(error => {
      message.setOption({
        message: error,
        showClose: true,
        type: "error",
        duration: 2000,
      });
    })
  });
};
