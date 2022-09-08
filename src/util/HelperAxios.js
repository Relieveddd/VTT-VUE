import axiosNew from "axios";
//通过axios.create函数，创建一个axios实例（）axiosInstance
const axiosInstance = axiosNew.create({
  //预设超时时间
  baseURL: "http://localhost:46208",
  timeout: 7000,
});
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
function reqFuncAxios(_strMethod, _url, _reqParam, _funcFollow) {
  const reqParamInner = {
    url: _url,
    method: _strMethod,
  };
  switch (_strMethod) {
    case "post":
    case "put":
      reqParamInner.data = _reqData;
      break;
    case "get":
    case "delete":
      reqParamInner.params = _reqData;
      break;
  }
  const promiseReq = axiosInstance({
    url: _url,
    method: _strMethod,
    data: _reqParam, //
  });
  promiseReq.then((responseResult) => {
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
  });
}
export default reqFuncAxios;
