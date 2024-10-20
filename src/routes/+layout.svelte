<script>
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<div class="bg-background-dark p-4 flex justify-center">
		<div class="flex items-center justify-between w-full max-w-screen-lg px-4">
			<h1 class="text-2xl font-bold">Letterboxd Heatmap</h1>
			<a class="w-16 items-center justify-center flex" href="https://www.github.com" target="_blank" rel="noreferrer">
				Github
			</a>
		</div>
	</div>
	<div class="mx-auto w-full max-w-screen-lg flex flex-col my-8 px-4 gap-4">
		{@render children()}
	</div>
</div>
