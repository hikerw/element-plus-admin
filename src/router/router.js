import {createRouter,createWebHashHistory} from 'vue-router'

import Layout from '@/Layout/Layout.vue'

/* {
	path: '路由地址',
	name: '路由名称',
	component:组件,
	hidden:'是否隐藏 默认true'
	meta: {
		title: '路由标题',
		cache:'是否缓存 默认true'
		icon: '侧边栏图标'
		roles: ['admin','editor'] 权限
	}
} */
// 配置路由
const routes = [{
	path: '/',
	name: 'index',
	component:Layout,
	meta: {title: '首页'},
	children: [{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/view/index/index'),
		meta: {
			title: '首页',
			icon: 'el-icon-s-help'
		}
	},
	{
		path: '/table',
		name: 'Table',
		component: () => import('@/view/table/table'),
		meta: {
			title: '表格',
			icon: 'el-icon-s-grid'
		}
	}]
}]

const router = createRouter({
	history: createWebHashHistory(), //history模式 需要后台配合
	routes // （缩写）相当于 routes: routes
})

export default router;
