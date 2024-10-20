<script lang="ts">
	import { getDaysOfWeek } from '$lib/services/calendar';
	import { ChevronDownIcon } from 'lucide-svelte';

	let { username }: { username: string } = $props();

	// TODO: use data from API to get specific year

	// days of week abbreviated, skipping every other day
	const daysOfWeek: string[] = getDaysOfWeek().map((day, i) => {
		if (i % 2 === 0) {
			return day.slice(0, 3);
		}
		return '';
	});

	function tileColor() {
		const random = Math.floor(Math.random() * 4);
		switch (random) {
			case 0:
				return 'bg-background-dark';
			case 1:
				return 'bg-gray-700';
			case 2:
				return 'bg-gray-500';
			case 3:
				return 'bg-gray-200';
		}
	}
</script>

<div class="flex flex-col w-full gap-1 p-2">
	<h2 class="text-xl">{username}</h2>
	<div class="flex justify-between items-end">
		<h3 class="text-sm text-text-color-accent">{`${34} Movies Watched This Year`}</h3>
		<button class="flex items-center gap-3 bg-background-light rounded-lg px-3 py-2">
			{2024}
			<ChevronDownIcon size="16" color={'white'} />
		</button>
	</div>
</div>

<div class="flex flex-col border rounded-lg gap-8 py-8 border-border-color">
	<div class="flex items-center justify-center">
		<table class="table-fixed">
			<thead> </thead>
			<tbody>
				{#each daysOfWeek as day}
					<tr>
						<td class="text-xs lg:text-sm text-right px-1">
							<span>
								{day}
							</span>
						</td>
						<!-- TODO: add month names, use array data -->
						<!--TODO: offset days by starting day -->
						{#each Array(52) as _}
							<td>
								<div class={`size-2 md:size-3 lg:size-4 rounded-sm ${tileColor()}`}></div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!--
	<div class="border-t px-6 py-4">
		<h3 class="text-sm text-text-color-accent">Overview</h3>
	</div>
	-->
</div>
