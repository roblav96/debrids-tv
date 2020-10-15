import Vue from 'nativescript-vue'
import App from '@/components/App.vue'
import store from '@/store'

Vue.config.silent = false
Vue.config.suppressRenderLogs = true

new Vue({
	store,
	render: (h) => h('frame', [h(App)]),
}).$start()
