import * as Application from '@nativescript/core/application'
Application.on('uncaughtError', function uncaughtError(args) {
	console.error('████  UNCAUGHT ERROR  ████ ->', args.error)
})
Application.on('discardedError', function discardedError(args) {
	console.error('████  DISCARDED ERROR  ████ ->', args.error)
})

import '~/runtime/console'
import '~/runtime/ns'
import '~/runtime/delegate'

import { svelteNative } from 'svelte-native'
import App from '~/components/App.svelte'
svelteNative(App, {})
