<script lang="ts">
	import Heatmap from '$lib/components/Heatmap.svelte';
	import UsernameSearch from '$lib/components/UsernameSearch.svelte';

	let username: string = $state('');
	let query: string = $state('');

	let onSubmit: (_: Event) => void = () => {
		// sanitize username

		query = username;
	};
</script>

<UsernameSearch bind:username={username} onSubmit={onSubmit} />

<Heatmap username={query} />


