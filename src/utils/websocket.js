
import { ref } from "vue";
let websocket; // 用于存储实例化后websocket
let ws_msg=1;
let rec; // 断线重连后，延迟5秒重新创建WebSocket连接  rec用来存储延迟请求的代码

let lockReconnect=false
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
  // }xm_

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
function initWebSocket(wsUrl,msg) {
  if (msg){
    ws_msg = msg
  }
  
  websocket = new WebSocket(wsUrl);
  console.log("websocket:", websocket);
  websocket.onopen = function () {
    //console.log("连接成功");
    //alert(`全局变量的值是: ${this.$ceshi}`);
    lockReconnect = true; // 修改连接状态
    websocketSend({'type':'init_web'})
  };

  // 接收信息
  websocket.onmessage = function (e) {
    ws_msg(e)
    
    };

  // 连接发生错误
//websocket.onerror = function () {
  //lockReconnect=false
    //console.log("WebSocket连接发生错误");
   //reConnect(wsUrl); // 连接错误 需要重连
  //};

  websocket.onclose =function(){
    lockReconnect=false
    console.log("WebSocket连接断开了")
    reConnect(wsUrl); // 连接断开 需要重连
  }
}

// 定义重连函数
let reConnect = (wsUrl) => {
  console.log("尝试重新连接");
  if (lockReconnect) return; // 如果已经连上就不在重连了
  rec && clearTimeout(rec);
  rec = setTimeout(function () {
    // 延迟1秒重连  避免过多次过频繁请求重连
    createWebSocket(wsUrl);
  }, 1000);
};



// 数据发送
function websocketSend(data) {
  console.log("发送的数据", data, JSON.stringify(data));
      if (websocket && lockReconnect) { // 检查连接状态
        websocket.send(JSON.stringify(data));
      } else {
        console.log('发送失败重连2');
        createWebSocket(wsUrl);
      }
}


// 实际调用的方法==============

// 发送
function sendWebSocket(data) {
  // 如果未保持连接状态 不允许直接发送消息 提示请选择连接设备
  if (!lockReconnect) {
    console.log('发送失败重连1');
    createWebSocket(wsUrl);
  } else {
    websocketSend(data) 
  }
}

export {
  initWebSocket,
  sendWebSocket,
  createWebSocket,
};


