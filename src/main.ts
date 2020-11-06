import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', function uncaughtError(args) {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error)
})
Application.on('discardedError', function discardedError(args) {
	console.error('████  DISCARDED ERROR  ████ ->', args.error)
})

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// import '@/devops/console'
import '@/delegate/delegate.android'

import Vue from 'nativescript-vue'
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
		console.error('████  VUE WARNING  ████ ->', msg, trace)
	},
} as typeof Vue.config)

import App from '@/components/App.vue'
new Vue({
	render: (h) => h('frame', [h(App)]),
}).$start()
