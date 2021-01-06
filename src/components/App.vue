<template>
	<Page>
		<ActionBar title="Welcome to NativeScript-Vue!" />
		<StackLayout>
			<Button :text="msg" @tap="showModal" />
		</StackLayout>
	</Page>
</template>

<script lang="ts">
//

import ExoPlayerModal from '~/exoplayer/ExoPlayerModal.vue'
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
	msg = 'Show ExoPlayerModal'
	created() {
		console.log('App -> created')
	}
	mounted() {
		// setTimeout(() => this.showModal(), 1000)
	}
	showModal() {
		this.$showModal(ExoPlayerModal as any, {
			cancelable: false,
			fullscreen: true,
		})
	}
}

//
</script>
