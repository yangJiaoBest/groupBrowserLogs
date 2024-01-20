import { createApp, provide } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import './assets/main.css'
import 'ant-design-vue/dist/reset.css';
import './permission';

const app = createApp(App)
app.use(router)
app.use(Antd)
// 提供全局变量
app.config.globalProperties.$ceshi = 1009;
const user_list = {}
provide('user_list', user_list);
app.mount('#app')
