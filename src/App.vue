<template>
	<el-button @click="click" size="medium">{{name}}</el-button>
</template>

<script>
export default {
	data() {
		return {
			name: 'test'
		}
	},
	methods: {
		click() {
			this.name = 'this is a test'
		}
	}
}
</script>

