<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type ButtonProps = {
		children: Snippet;
		classes?: string;
	} & HTMLButtonAttributes;

	let { children, classes, ...restProps }: ButtonProps = $props();
</script>

<button
	class={`inline-flex justify-center items-center rounded-md text-sm text-white font-inter-semibold uppercase px-4 py-2 h-min bg-primary-600 enabled:hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 ${classes}`}
	{...restProps}
>
	{@render children()}
</button>
