<script lang="ts">
    import { Search } from "lucide-svelte";

    type Props = {
        username: string;
        onSubmit?: (event: Event) => void; 
    };

    let { username = $bindable(), onSubmit }: Props = $props();
</script>

<div class="py-4 flex flex-col justify-center items-center gap-2">
	<h1 class="text-lg font-bold">Search for User</h1>

	<form class="flex gap-2 rounded-full bg-background-light items-center py-2 px-4 border border-border-color">
		<input class="bg-transparent text-text-color-accent placeholder-text-color text-lg px-2 rounded-lg focus-visible:outline-none" type="text" placeholder="Type to search..." bind:value={username} />
        <button type="submit" onclick={onSubmit}>
            <Search size="24" />
        </button>
	</form>
</div>
