import message from "../xseditor-decorate/_message";
import { getCookie } from "../../utils";

export default (props: Target) => {
  const { type = "post", url = "", data = {} } = props;
  return new Promise((resolve) => {
    fetch(url, {
      method: type,
      headers:{
        'Authorization': 'Bearer ' + getCookie('token')
       },
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
