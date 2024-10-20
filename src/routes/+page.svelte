<script lang="ts">
	import Heatmap from '$lib/components/Heatmap.svelte';
	import UsernameSearch from '$lib/components/UsernameSearch.svelte';
	import { LoadingState } from '$lib/types';

	let username: string = $state('');
	let query: string = $state('');


	// Manage state of the content
	let contentState: LoadingState = $state(LoadingState.IDLE);

	let onSubmit: (_: Event) => Promise<void> = async () => {
		contentState = LoadingState.LOADING;

		try {
			// TODO: call our API
			query = username;
			contentState = LoadingState.LOADED;
		} catch (error) {
			console.error(error);
			contentState = LoadingState.ERROR;
		}
	};
</script>

<UsernameSearch bind:username {contentState} {onSubmit} />

{#if contentState === LoadingState.LOADED}
	<Heatmap username={query} />
{:else if contentState === LoadingState.LOADING}
	<div class="flex flex-col justify-center items-center py-32">
		<p class="text-3xl text-center">Loading...</p>
	</div>
{:else if contentState === LoadingState.ERROR}
	<div class="flex flex-col justify-center items-center py-32">
		<p class="text-3xl text-center">An error occurred</p>
	</div>
{:else}
	<div class="flex flex-col justify-center items-center py-32">
		<p class="text-3xl text-center">Search for a Letterboxd User</p>
	</div>
{/if}
