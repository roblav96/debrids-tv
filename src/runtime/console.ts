import * as Application from '@nativescript/core/application'

import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

console.log = new Proxy(console.log, {
	apply(method, ctx: Console, args: string[]) {
		args.unshift('\n■')
		return Reflect.apply(method, ctx, args)
	},
})

console.error = new Proxy(console.error, {
	apply(method, ctx: Console, args: string[]) {
		args.unshift('\n✘')
		return Reflect.apply(method, ctx, args)
	},
})
