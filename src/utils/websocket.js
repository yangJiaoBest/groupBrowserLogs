import { ref } from "vue";
let websocket; // 用于存储实例化后websocket
let rec; // 断线重连后，延迟5秒重新创建WebSocket连接  rec用来存储延迟请求的代码
let lockReconnect = false;

// 创建websocket
function createWebSocket(wsUrl) {
  console.log("websocket==================");

  // 判断当前浏览器是否支持WebSocket
  // if ("WebSocket" in window) {
  //   console.log("当前浏览器支持 WebSocket");
  // } else if ("MozWebSocket" in window) {
  //   console.log("当前浏览器支持 MozWebSocket");
  // } else {
  //   console.log("当前浏览器不支持 WebSocket");
  // }


  try {
    // 初始化websocket连接
    initWebSocket(wsUrl);
  } catch (e) {
    console.log("尝试创建连接失败");
    // 如果无法连接上 webSocket 那么重新连接！可能会因为服务器重新部署，或者短暂断网等导致无法创建连接
    reConnect(wsUrl);
  }
}

// 初始化websocket
function initWebSocket(wsUrl) {
  websocket = new WebSocket(wsUrl);
  console.log("websocket:", websocket);
  websocket.onopen = function () {
    console.log("连接成功");
    lockReconnect = true; // 修改连接状态
  };

  // 接收信息
  websocket.onmessage = function (e) {
    websocketOnmessage(e);
  };

  // 连接发生错误
  websocket.onerror = function () {
    console.log("WebSocket连接发生错误");
    reConnect(wsUrl); // 连接错误 需要重连
  };
}

// 定义重连函数
let reConnect = (wsUrl) => {
  console.log("尝试重新连接");
  if (lockReconnect) return; // 如果已经连上就不在重连了
  rec && clearTimeout(rec);
  rec = setTimeout(function () {
    // 延迟5秒重连  避免过多次过频繁请求重连
    createWebSocket(wsUrl);
  }, 5000);
};


// 数据接收
function websocketOnmessage(e) {
  console.log("数据接收", e.data);
  const data = JSON.parse(e.data);  // 解析JSON格式的数据
  // 下面的判断则是后台返回的接收到的数据  如何处理自己决定
  if (data.code === 200 || data.code === 0) {
    console.log(data);
    // todo 成功后的相应处理 
    // 如果 user_id
    user_list[data.user_id] = true



  } else {
    console.log("error", data.msg);
    // 延时5秒后刷新页面
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
}

// 数据发送
function websocketSend(data) {
  console.log("发送的数据", data, JSON.stringify(data));
  if (websocket && lockReconnect) { // 检查连接状态
    websocket.send(JSON.stringify(data));
  } else {
    console.log('请连接!');
  }
}


// 实际调用的方法==============

// 发送
function sendWebSocket(data) {
  // 如果未保持连接状态 不允许直接发送消息 提示请选择连接设备
  if (!lockReconnect) {
    console.log('请连接!');
  } else {
    websocketSend(data);
  }
}

export {
  initWebSocket,
  sendWebSocket,
  createWebSocket,
};