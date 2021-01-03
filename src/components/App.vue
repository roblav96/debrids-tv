<template>
	<Page>
		<ActionBar title="Welcome to NativeScript-Vue!" />
		<StackLayout>
			<Button :text="msg" @tap="showModal" />
		</StackLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'
import ExoPlayerModal from '~/exoplayer/ExoPlayerModal.vue'

// @ts-ignore
@Component
export default class App extends Vue {
	msg = 'Show ExoPlayerModal'
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
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.message {
	vertical-align: center;
	text-align: center;
	font-size: 20px;
	color: #333333;
}
</style>
