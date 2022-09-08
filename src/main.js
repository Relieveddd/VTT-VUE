import { createApp } from "vue";
import LayoutApp from "./App.vue";
import { router } from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import HelperAxios from "axios";
import reqFuncAxios from "./util/HelperAxios.js";
import { createPinia } from "pinia"; //安装pinia以后引入createPinia
//Axios请求拦截器
HelperAxios.interceptors.request.use(
  function (config) {
    config.baseURL = "http://localhost:46208";
    config.timeout = 5000;
    // console.log(config.method);
    switch (config.method) {
      case "post":
      case "put":
        config.data.PublicMsg = "请求拦截器（Get请求）添加的数据";
        break;
      case "get":
      case "delete":
        config.params.PublicMsg = "请求拦截器（Post请求）添加的数据";
        break;
    }
    // data默认是加在body里，post请求是在body里面，get请求是通过url,拦截器是通过header请求接口
    config.data.PublicMsg = "请求拦截器添加的请求数据";
    // config.headers.authorization = "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//Axios响应拦截器，request在收到响应，进入request回调函数之前，先做一次响应
HelperAxios.interceptors.response.use(
  function (responseResult) {
    //预设网络异常代码
    const jsonHttpCode = {
      100: "客户端应当继续发送请求.这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝.客户端应当继续发送请求的剩余部分，或者请求已经完成，忽略这个响应.服务器必须在完成请求后向客户端发送一个最终响应",
      101: "This is 101",
      102: "This is 102",
      202: "This is 202",
    };
    //预设接口异常代码
    const jsonApiCode = {
      Fail1: "This is fail1",
      Fail2: "This is fail2",
      Frror1: "This is frror1",
      Frror2: "This is frror2",
    };
    if (responseResult.status === 200) {
      if (responseResult.data.StatusCode === "Success") {
        //一切情况正常下执行回调含函数
        _funcFollow(responseResult.data);
      } else {
        alert(jsonApiCode[responseResult.data.StatusCode]);
      }
    } else {
      alert(jsonHttpCode[jsonResult.status]);
    }
    return responseResult;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const AppNew = createApp(LayoutApp);
const pinia = createPinia(); //创建变量，使用createPinia框架（函数类型）
AppNew.use(pinia); //挂载
AppNew.use(router);
AppNew.use(ElementPlus);
//将axios封装的二次函数设为全局属性
AppNew.config.globalProperties.$reqFuncAxios = reqFuncAxios;
// 将HelperAxios定义为全局属性
AppNew.config.globalProperties.$HelperAxios = HelperAxios;
AppNew.mount("#app");
// .config.globalProperties自定义固定语法 .$str $：自定义命名开头需加$符号
AppNew.config.globalProperties.$str = "自定义的字符串";
AppNew.config.globalProperties.$json = { objStr: "自定义的对象字符串" };
// createApp(App).mount("#app");
