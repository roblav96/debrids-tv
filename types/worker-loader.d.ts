declare module 'worker-loader' {
	namespace Worker {
		interface Message {
			data: any
		}
		interface Error {
			filename: string
			lineno: string
			message: string
		}
	}

	class Worker {
		constructor(script?: string)
		close(): void
		onclose(): void
		onerror(error: Worker.Error): void | boolean
		onmessage(message: Worker.Message): void
		postMessage(message: any): void
		terminate(): void
	}

	export = Worker
}

declare var Worker: typeof import('worker-loader')

declare module 'nativescript-worker-loader!*' {
	import * as Worker from 'worker-loader'
	export = Worker
}

declare namespace NodeJS {
	interface Global {
		postMessage(message: any): void
	}
}
