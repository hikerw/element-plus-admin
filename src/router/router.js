import {createRouter,createWebHashHistory} from 'vue-router'

import Layout from '@/Layout/Layout.vue'

// 配置路由
const routes = [{
	path: '/',
	name: 'index',
	component:Layout,
	meta: {
		title: '首页'
	}
}]

const router = createRouter({
	history: createWebHashHistory(), //history模式 需要后台配合
	routes // （缩写）相当于 routes: routes
})

export default router;
