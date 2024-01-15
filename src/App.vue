<template>
  <div class="app-left">
    <div class="app-left-top">
      <a-flex gap="12" vertical="vertical">
        <a-typography-text>分组列表</a-typography-text>
        <a-select
          style="width: 100px"
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
      <a-list item-layout="horizontal" :data-source="browserDataList">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <icon v-if="item.browserActive">
                  <template #component>
                    <svg
                      t="1705226266375"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4844"
                      width="40"
                      height="40"
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
                      width="40"
                      height="40"
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
              </template>
              <template #description>
                <a-typography-text
                  :ellipsis="ellipsis ? { tooltip: item.name } : false"
                  :style="
                    ellipsis
                      ? {
                          width: '100px',
                        }
                      : {}
                  "
                  :content="item.name"
                />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
  <div class="app-right">
    <div class="app-right-top">top</div>
    <div class="app-right-bottom">
      <a-button type="primary" @click="getLogs">获取日志</a-button>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
      <div>33333</div>
    </div>
  </div>
</template>

<script setup>
import Icon from "@ant-design/icons-vue";
import { ref } from "vue";

import { initWebSocket, sendWebSocket } from "../src/utils/websocket";

import {
  apiGetGroupList,
  apiGetAllBrowserList,
  apiGetBrowserStatus,
} from "../src/api/index";

const selectedValue = ref("");
const selectDataList = ref([]);
const browserDataList = ref([]);
const ellipsis = ref(true);

const courseTopic = ref("");
const courseGrowth = ref("");
const todayHaul = ref("");

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
              const newDataList = dataList.map(({ user_id, ...items }) => ({
                ...items,
                browserActive: !activeList.includes(user_id),
              }));

              browserDataList.value = newDataList;
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
  const toIp = `ws://192.168.50.50:8822/websocket/ipad`;
  initWebSocket(toIp);
}
connectMsg();

// 发送消息给后端
const getLogs = () => {
  // 要发送的数据  和后端定义格式
  const harvestData = {
    HandlerType: "COURSEREFLECT",
    topicReflect: courseTopic.value,
    growReflect: courseGrowth.value,
    harvest: todayHaul.value,
    teacher: "李老师",
  };

  console.log("提交反思与收获数据", harvestData);
  // 发送消息给后端
  sendWebSocket(harvestData);
};
</script>
