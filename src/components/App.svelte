<script lang="typescript">
	import ExoPlayerModal from '~/exoplayer/ExoPlayerModal.svelte'
	import { showModal } from 'svelte-native'

	function launchModal() {
		showModal({
			page: ExoPlayerModal,
			fullscreen: true,
			stretched: true,
			animated: true,
			android: { cancelable: false },
		})
	}

	let message = 'Blank Svelte Native App'
</script>

<style>
</style>

<page>
	<actionBar title="Svelte Native App" />
	<stackLayout>
		<label horizontalAlignment="center" verticalAlignment="middle" text={message} />
		<button text="Open Modal" on:tap={launchModal} />
	</stackLayout>
</page>
