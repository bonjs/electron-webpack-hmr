
<template>
	<div>

	<div>{{name}}</div>
	<button @click="click">test</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'this is a testdd'
		}
	},
	methods: {
		click() {
			alert('click')
		}
	}
}
</script>

