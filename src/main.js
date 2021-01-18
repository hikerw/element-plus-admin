import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import router from './router/router.js';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/basic.css';   //公共样式
import App from './App.vue';

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')