<template>
	<div v-if="!item.hidden">
		<div v-if='item.children&&item.children.length>1'>
			<el-submenu v-for='child in item' :key='child.path' :index="child.path">
				<template #title>
					<i :class="child.meta.icon" v-if="child.meta.icon"></i>
					<span>{{child.meta.title}}</span>
				</template>
				<menu-item v-for="route in child.children" :key="route.path" :item="route.children" :base-path="route.path"></menu-item>
			</el-submenu>
		</div>
		<div v-else>
			<el-menu-item v-for='child in item' :key='child.path' :index="child.path">
				<template #title>
					<i :class="child.meta.icon" v-if="child.meta.icon"></i>
					<span>{{child.meta.title}}</span>
				</template>
			</el-menu-item>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'menuItem',
		props: {
			item: {
				type: Array,
				required: true
			},
			basePath: {
				type: String,
				default: ''
			}
		},
		mounted() {
			console.log(this.item)
		}
	}
</script>

<style>
</style>
