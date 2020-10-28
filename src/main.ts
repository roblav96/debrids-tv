import App from '@/components/App.vue'
import Vue from 'nativescript-vue'

Vue.config.silent = false
Vue.config.suppressRenderLogs = true

new Vue({
	render: (h) => h('frame', [h(App)]),
}).$start()
