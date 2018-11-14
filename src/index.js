

import Vue from 'vue';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import App from './App.vue';
new Vue({
	el: '#app',
	render: function(h) {
		return h(App);
	}
})


module.hot.accept();