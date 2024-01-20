<template>
  <div class="app-left">
    <div class="loading" v-if="_loading">
      <a-spin tip="Loading...">
        <a-alert message="" style="height: 100vh"></a-alert>
      </a-spin>
    </div>

    <div class="app-left-top">
      <a-flex gap="12" vertical="vertical">
        <a-typography-text>分组列表</a-typography-text>
        <a-select
          style="width: 160px"
          v-model:value="selectedValue"
          placeholder="请选择"
          @change="handleChange"
        >
          <a-select-option value="">所有</a-select-option>
          <a-select-option
            v-for="option in selectDataList"
            :value="option.group_id"
            :key="option.group_id"
          >
            {{ option.group_name }}
          </a-select-option>
        </a-select>
      </a-flex>
      <a-divider />
    </div>
    <!-- 浏览器列表 -->
    <div class="app-left-list">
      <a-list item-layout="horizontal" :data-source="user_list">
        <template #renderItem="{ item }">
          <a-tooltip>
            <template #title>{{
              `${item.serial_number}__${item.name}`
            }}</template>
            <a-list-item>
              <a-list-item-meta
                :class="{ activeIcon: item.isActive, activeDot: true }"
                :data-id="item.user_id"
                @click="handelClick(item)"
                @contextmenu.prevent.stop="handleRightClick(item)"
              >
                <template #title>
                  <a-badge
                    :count="item.msg_number"
                    :number-style="{
                      height: '13px',
                      width: '26px',
                      lineHeight: '12px',
                    }"
                  >
                    <icon v-if="item.browserActive">
                      <template #component>
                        <svg
                          t="1705226266375"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="4844"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M87.788 227.913c17.049 29.189 34.039 58.291 51.043 87.383 51.784 88.596 103.585 177.181 155.325 265.804 2.62 4.485 5.062 9.143 7 13.955C349.786 715.89 484.618 771.244 604.34 719.47c2.398-1.037 4.887-1.861 9.302-3.526-2.588 4.897-4.038 7.89-5.7 10.755-54.798 94.487-109.707 188.908-164.246 283.545-4.133 7.171-8.493 8.259-15.899 6.935-206.01-36.867-364.332-183.492-412.98-387.026-33.681-140.916-9.465-273.513 67.799-396.221a55.282 55.282 0 0 1 2.993-4.263c0.41-0.532 1.065-0.875 2.179-1.756zM637.574 322.251c4.879-0.232 7.832-0.494 10.785-0.495 109.636-0.021 219.273 0.08 328.908-0.221 8.034-0.021 11.143 2.592 13.896 9.949 77.165 206.263 15.492 437.682-155.167 576.728-99.718 81.243-214.648 119.245-343.254 115.541-4.101-0.116-8.19-0.579-13.782-0.991 2.282-4.327 3.863-7.594 5.678-10.723 73.799-127.297 147.568-254.609 221.459-381.853 61.326-105.603 35.165-231.359-63.311-303.663-1.275-0.936-2.452-2.003-5.212-4.272zM970.66 284.978h-15.17c-145.492 0-290.984-0.444-436.474 0.156-97.432 0.401-169.373 44.268-212.233 132.11-11.095 22.739-15.798 48.603-23.28 72.528-0.437-0.663-2.509-3.517-4.279-6.546-54.593-93.406-109.079-186.878-163.896-280.152-3.852-6.555-3.331-10.476 1.434-16.115C205.093 82.393 316.58 20.463 452.687 3.72c207.799-25.561 413.84 82.445 511.367 267.993 1.915 3.643 3.675 7.368 6.606 13.265zM702.425 512.551c-0.178 106.027-85.601 189.996-193.057 189.771-103.007-0.212-187.656-86.695-187.287-191.343 0.373-106.007 85.766-189.459 193.555-189.154 102.551 0.287 186.962 86.481 186.789 190.726z"
                            p-id="4845"
                            fill="#6b6d6f"
                          ></path>
                        </svg>
                      </template>
                    </icon>

                    <icon class="activeIcon" v-else>
                      <template #component>
                        <svg
                          t="1705225930636"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="4262"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M986.467644 320.049884h-474.469829A191.947931 191.947931 0 0 0 344.369876 605.899781L107.109961 198.859928a511.691815 511.691815 0 0 1 879.357683 121.189956z"
                            fill="#F44336"
                            p-id="4263"
                          ></path>
                          <path
                            d="M1023.99763 511.998815a512.459815 512.459815 0 0 1-511.999815 511.998815 461.771833 461.771833 0 0 1-63.998977-4.249998l230.399917-411.749852a192.45993 192.45993 0 0 0-70.399975-262.398905 190.258931 190.258931 0 0 0-95.539965-25.599991h474.009829a505.700817 505.700817 0 0 1 37.528986 191.999931z"
                            fill="#FFC107"
                            p-id="4264"
                          ></path>
                          <path
                            d="M678.397755 607.99878L447.999838 1019.748632h-0.41A511.742815 511.742815 0 0 1 107.109961 198.859928L344.369876 605.899781l1.279999 2.098999a191.947931 191.947931 0 0 0 332.79988 0z"
                            fill="#4CAF50"
                            p-id="4265"
                          ></path>
                          <path
                            d="M511.281815 725.297738a211.864923 211.864923 0 0 1-105.932961-28.36499 213.912923 213.912923 0 1 1 105.932961 28.36499z"
                            fill="#FFFFFF"
                            p-id="4266"
                          ></path>
                          <path
                            d="M499.709819 341.707877a170.649938 170.649938 0 1 0 86.476969 16.690994 170.187939 170.187939 0 0 0-86.475969-16.690994z"
                            fill="#2196F3"
                            p-id="4267"
                          ></path>
                        </svg>
                      </template>
                    </icon>
                  </a-badge>
                </template>
                <template #description>
                  <a-typography-text
                    :ellipsis="ellipsis ? {} : false"
                    :style="
                      ellipsis
                        ? {
                            width: '150px',
                          }
                        : {}
                    "
                    :content="`${item.user_id}`"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-tooltip>
        </template>
      </a-list>
    </div>
  </div>
  <div class="app-right">
    <div class="app-right-bottom">
      <div v-html="log_msg"></div>
    </div>
    <div class="app-right-top">top</div>
  </div>

  <contextHolder />
</template>

<script setup>
import Icon from "@ant-design/icons-vue";
import { ref } from "vue";
import { initWebSocket, sendWebSocket } from "../utils/websocket";

import {
  apiGetGroupList,
  apiGetAllBrowserList,
  apiGetBrowserStatus,
} from "../api/index";

import { notification } from "ant-design-vue";
const [api, contextHolder] = notification.useNotification();

const openNotification = (msg, placement) => {
  api.error({
    message: `发生错误了.`,
    description: msg,
    placement,
  });
};

const selectedValue = ref("");
const selectDataList = ref([]);
const user_list = ref([]);
const ellipsis = ref(true);
const log_msg = ref("");
const _loading = ref(false);
const set_user = (user_id, k) => {
  //console.log('获取id',user_id)
  //console.log('获取id',user_list.value)
  for (let v in user_list.value) {
    //console.log(user_list.value[v])
    if (user_id == user_list.value[v].user_id) {
      //console.log('返回1',user_list.value[v].isActive)

      //user_list.value[v].isActive= !user_list.value[v].isActive

      //console.log('返回2',user_list.value[v].isActive)
      return user_list.value[v];
    }
  }
  return {};
};

function sort_() {
  let d = user_list.value.sort((a, b) => b.times - a.times);
  user_list.value = d;
}

const ws_msg = (e) => {
  console.log("收到消息", e.data);
  //log_msg.appende({'ss':111})
  const data = JSON.parse(e.data); // 解析JSON格式的数据

  // 下面的判断则是后台返回的接收到的数据  如何处理自己决定
  if (data.type !== "") {
    if (data.type === "init2") {
      console.log("初始完毕...");
      log_msg.value = "连接服务器成功...</br>";
    }
    if (data.type === "set_web_img") {
      let k = set_user(data.user_id, data.data);
      k.browserActive = !data.data;
      k.times = data.data ? Date.now() : -1;
      _loading.value = false;
      k.msg_number = 0;
      //这里取消遮罩层
    }

    if (data.type === "set_web_msg") {
      let k = set_user(data.user_id, data.data);
      k.isActive = data.data;
      k.msg_number++;
      k.times = Date.now();
    }
    if (data.type === "new_msg") {
      let index = log_msg.value.indexOf(data.data);
      if (index > 0 && index < 200) {
        return;
      }

      let k = set_user(data.user_id);
      k.isActive = true;
      log_msg.value = data.data + "</br>" + log_msg.value;
    }
    if (data.type === "set_loading") {
      _loading.value = false;
      //这里取消遮罩层
    }
    if (data.type === "set_error") {
      openNotification(data.data, "topRight");
      //这里取消遮罩层
    }
    // todo 成功后的相应处理
    // 如果 user_id
  } else {
    console.log("error", data.msg);
    // 延时5秒后刷新页面
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
  sort_(); //着这里收到消息就排序
};

// 获取下拉列表的值
function getGroupListData() {
  apiGetGroupList()
    .then((response) => {
      if (response.code == 0) {
        selectDataList.value = response.data.list;
      }
    })
    .catch((error) => {});
}
getGroupListData();

// 获取浏览器列表
function getBrowserList(group_id) {
  apiGetAllBrowserList(group_id)
    .then((response) => {
      if (response.code == 0) {
        const dataList = response.data.list;

        apiGetBrowserStatus()
          .then((response) => {
            if (response.code == 0) {
              const activeList = response.data.list.map(
                ({ user_id }) => user_id
              );

              // 判断dataList中有的user_id是否在activeList中,
              // 如果在, 则添加字段 browserActive 为 true, 否则是 false
              const newDataList = dataList.map(({ user_id, ...items }, i) => ({
                ...items,
                user_id,
                browserActive: !activeList.includes(user_id),
                isActive: false,
                new_msg_time: 0,
                times: activeList.includes(user_id) ? Date.now() : -1,
                msg_number: 0,
              }));

              user_list.value = newDataList;
              sort_(); // 首次也排序
              console.log(newDataList);
            }
          })
          .catch((error) => {});
      }
    })
    .catch((error) => {});
}

getBrowserList("");
// 切换下拉项
const handleChange = (value) => {
  getBrowserList(value);
};

//连接设备
function connectMsg() {
  // 定义服务器地址 例如
  const toIp = `ws://127.0.0.1:5002`;
  initWebSocket(toIp, ws_msg);
}

connectMsg();

// 根据 api 返回值,得到需要闪烁的 user_id, 然后追加 class

const handelClick = (item) => {
  //console.log("鼠标左键点击图标");
  // 点击鼠标左键,取消图标闪烁
  item.isActive = false;
  // todo 发送数据到后端
  // 发送消息给后端
  const data = {
    type: "click_web",
    code: 0,
    msg: "",
    data: true,
    group_name: item.group_name,
    user_id: item.user_id,
  };
  // 发送消息给后端
  sendWebSocket(data);
  //log_msg.value+=JSON.stringify(data) +"</br>"
  _loading.value = true;
};
const handleRightClick = (item) => {
  //console.log("鼠标右边键点击图标");
  // 点击鼠标右键,关闭浏览器
  // 发送消息给后端
  const data = {
    type: "click_web",
    code: 0,
    msg: "",
    data: false,
    group_name: item.group_name,
    user_id: item.user_id,
  };
  // 发送消息给后端
  sendWebSocket(data);
  _loading.value = true;
};
</script>
