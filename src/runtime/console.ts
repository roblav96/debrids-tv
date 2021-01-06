import * as ansi from 'ansi-colors'
import * as R from 'rambdax'

Error.stackTraceLimit = Number.MAX_SAFE_INTEGER

for (let level of ['log', 'warn', 'error'] as (keyof typeof console)[]) {
	Object.assign(console, {
		[level]: new Proxy(console[level], {
			apply(method, ctx: Console, args: any[]) {
				for (let i = 0; i < args.length; i++) {
					let arg = args[i]
					if (R.has('_owner', arg)) {
						args[i] = R.omit('_owner', arg)
					}
				}

				// console.info('\n\n')
				let e = { stack: '' }
				Error.captureStackTrace(e, this.apply)
				// console.info('\nError.captureStackTrace ->', e.stack)
				let stack = e.stack.split('\n')[1].trim()
				stack = stack.split(' ')[1].split('.').slice(-1)[0]
				// console.info('\nError.captureStackTrace ->', stack)

				let symbol = { log: '🔵', warn: '🟠', error: '🔴' }[level] as string
				args.unshift(`\n${ansi.dim(`at ${stack}`)}\n${symbol}`)

				return Reflect.apply(method, ctx, args)
			},
		}),
	})
}

import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', function uncaughtError(args) {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error, args.error.stack)
})
Application.on('discardedError', function discardedError(args) {
	console.error('████  DISCARDED ERROR  ████ ->', args.error, args.error.stack)
})
