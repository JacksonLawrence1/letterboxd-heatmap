<script lang="ts">
	let { username }: { username: string } = $props();
</script>

{#if username !== ''}
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold">Searched for</h1>
		<h1 class="text-lg">{username}</h1>
	</div>
{/if}
