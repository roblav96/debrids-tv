<template>
	<Frame>
		<Label color="black" backgroundColor="red" class="c-black" :text="video" />
	</Frame>
</template>

<script lang="ts">
import * as Frame from '@nativescript/core/ui/frame'
import * as Types from '@nativescript/core/utils/types'
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'

// @ts-ignore
@Component
export default class ExoPlayerModal extends Vue {
	video = process.env.TEST_MKV
	mounted() {
		let nativeView = this.nativeView as Frame.Frame
		nativeView.actionBarVisibility = 'never'
		console.log('nativeView ->', nativeView)
		console.log('nativeView.android ->', nativeView.android)
		console.log('nativeView.android.actionBar ->', nativeView.android.actionBar)
		// console.log('nativeView._getFragmentManager() ->', nativeView._getFragmentManager())
		// console.log('nativeView._dialogFragment ->', nativeView._dialogFragment)
	}
}
</script>
