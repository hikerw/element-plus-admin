<template>
	<el-menu :uniqueOpened="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		<el-submenu index="1">
			<template #title>
				<i class="el-icon-location"></i>
				<span>导航一</span>
			</template>
			<el-submenu index="1-4">
				<template #title>选项4</template>
				<el-submenu index="1-4-1">
					<template #title>选项4</template>
					<el-menu-item index="1-4-1-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
		</el-submenu>
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<template #title>导航二</template>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
