import * as R from 'rambdax'
import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

console.log('\x1b[2J\x1b[3J\x1b[1;1H')
console.log(`████  ${dayjs().format('hh:mm:ss A')}  ████\n\n`)

for (let level of ['log', 'warn', 'error'] as (keyof typeof console)[]) {
	Object.assign(console, {
		[level]: new Proxy(console[level], {
			apply(method, ctx: Console, args: any[]) {
				console.info('\n\n')
				let e = { stack: '' }
				Error.captureStackTrace(e, this.apply)
				console.info('\nError.captureStackTrace ->', e.stack)
				console.info('\nnew Error ->', new Error().stack)
				// let stack = e.stack.split('\n')[1].trim()
				// console.info('stack ->', stack, '<- stack')
				// let stacks = stack.split(' ')
				// for (let i = 0; i < stacks.length; i++) {
				// 	let stack = stacks[i]
				// 	console.info(`stack ${i} ->`, stacks[i])
				// }
				// for (let i = 0; i < args.length; i++) {
				// 	let arg = args[i]
				// 	if (R.has('_owner', arg)) {
				// 		args[i] = R.omit('_owner', arg)
				// 	}
				// }
				let symbol = { log: '🔵', warn: '🟠', error: '🔴' }[level] as string
				args.unshift(`\n${symbol}`)
				return Reflect.apply(method, ctx, args)
			},
		}),
	})
}

import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', function uncaughtError(args) {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error)
})
Application.on('discardedError', function discardedError(args) {
	console.error('████  DISCARDED ERROR  ████ ->', args.error)
})
