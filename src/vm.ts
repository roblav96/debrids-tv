import App from '~/components/App.vue'
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'

Object.assign(Vue.config, {
	devtools: false,
	performance: false,
	productionTip: false,
	silent: false,
	suppressRenderLogs: true,
	errorHandler(error, vm, info) {
		console.error('████  VUE ERROR  ████ ->', info, error)
	},
	warnHandler(msg, vm, trace) {
		if (msg.includes('is not defined on the instance but referenced during render.')) {
			return
		}
		console.error('████  VUE WARNING  ████ ->', msg, trace)
	},
} as typeof Vue.config)

// @Component({ render: (h) => h('frame', [h(App)]) })
// export class Vm extends Vue {
// 	mounted() {
// 		console.log('Vm mounted')
// 	}
// }

// export default new Vm().$start()

new Vue({
	render: (h) => h('frame', [h(App)]),
	created() {
		console.log('Vm created')
	},
}).$start()
