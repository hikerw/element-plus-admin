import { createApp } from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn' // lang i18n
import 'element-plus/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

import App from './App.vue';
import store from './store'
import router from './router';

import '@/icons' // icon
import '@/permission' // permission control
import SvgIcon from '@/components/SvgIcon'// svg component
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
 const { mockXHR } = require('../mock')
 mockXHR()

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus,{ locale })
app.use(router)
app.use(store)
app.mount('#app')