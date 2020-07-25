import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
new Vue({
	el: "#app",
	router,
	store,
	vuetify,
	render: h => h(App),
})

Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
		};
		document.body.addEventListener('click', this.event)
	},
	unbind: function () {
		document.body.removeEventListener('click', this.event)
	},
});
