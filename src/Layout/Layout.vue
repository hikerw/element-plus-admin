<template>
	<div>
		<el-container>
			<el-aside >
				<menus />
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import menus from './components/menu.vue'
	export default {
		methods: {

		},
		components: {menus}
	}
</script>

<style scoped="scoped">
.el-aside{
	height: 100vh;
	background-color: #545c64;
	box-sizing: border-box;
}
</style>
