import * as dayjs from 'dayjs'
import * as R from 'rambdax'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

console.log('\x1b[2J\x1b[3J\x1b[1;1H')
console.log(`████  ${dayjs().format('hh:mm:ss A')}  ████`)

console.log = new Proxy(console.log, {
	apply(method, ctx: Console, args: any[]) {
		for (let i = 0; i < args.length; i++) {
			let arg = args[i]
			if (R.has('_owner', arg)) {
				args[i] = R.omit('_owner', arg)
			}
		}
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

import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', function uncaughtError(args) {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error)
})
Application.on('discardedError', function discardedError(args) {
	console.error('████  DISCARDED ERROR  ████ ->', args.error)
})
