<template>
	<el-scrollbar wrap-class="scrollbar-wrapper">
		<el-menu :uniqueOpened="true" :router='true' :default-active="activeMenu" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<menu-item v-for="route in routes" :key="route.path" :item="route.children" :base-path="route.path"></menu-item>
		</el-menu>
	</el-scrollbar>
</template>

<script>
	import menuItem from './menuItem.vue'
	export default {
		components: {
			menuItem
		},
		computed: {
			routes() {
				return this.$router.options.routes
			},
			activeMenu() {
				const route = this.$route
				let {
					meta,
					path
				} = route
				// if set path, the sidebar will highlight the path you set
				if (meta.activeMenu) {
					return meta.activeMenu
				}
				if(path=='/'){
					path =route.matched[0].children[0].path
				}
				return path
			},
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted() {}
	}
</script>

<style scoped="scoped">
	.el-menu {
		border-right: 0;
	}
</style>
