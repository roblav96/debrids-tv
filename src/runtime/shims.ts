import * as fs from '@nativescript/core/file-system'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

console.log('\x1b[2J\x1b[3J\x1b[1;1H')
console.log(`████  ${dayjs().format('hh:mm:ss A')}  ████\n`)

global.process || Object.assign(global, { process: {} })
Object.assign(global.process, {
	argv0: '',
	argv: [],
	env: {},
	version: 'v14.15.3',
	cwd() {
		return fs.knownFolders.currentApp().path
	},
} as NodeJS.Process)
