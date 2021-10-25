<script lang="ts">
	import { params } from "./capability";
	import type { CapabilityParams } from "./capability";

	let local: CapabilityParams;
	$: {
		console.log("update: + ", local);
		params.set(local);
	}
	params.subscribe((cap) => {
		if (!local) {
			local = cap;
			console.log("subscribe: + ", local);
		}
	});

	let grid = [
		[
			{
				border: "rounded-tl-md",
				name: "current",
				display: "Current %",
				handleChange: (e: Event) =>
					(local.current = parseFloat((e.target as HTMLInputElement).value)),
			},
			{
				border: "rounded-tr-md",
				name: "target",
				display: "Target %",
				handleChange: (e: Event) =>
					(local.target = parseFloat((e.target as HTMLInputElement).value)),
			},
		],
		[
			{
				border: "rounded-bl-md",
				name: "start",
				display: "Start Month",
				handleChange: (e: Event) =>
					(local.start = parseFloat((e.target as HTMLInputElement).value)),
			},
			{
				border: "rounded-br-md",
				name: "duration",
				display: "Duration",
				handleChange: (e: Event) =>
					(local.duration = parseFloat((e.target as HTMLInputElement).value)),
			},
		],
	];
</script>

<div
	class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
>
	<div class="w-48 max-w-sm space-y-8">
		<div class="-space-y-px ">
			{#each grid as row}
				<div class="flex items-center -space-x-px">
					{#each row as r}
						<div
							class="w-full border border-gray-300 {r.border} px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
						>
							<label
								for="current"
								class="block text-xs font-medium text-gray-700"
								>{r.display}</label
							>
							<input
								type="number"
								name={r.name}
								id={r.name}
								class="appearance-none w-full block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								on:change={r.handleChange}
								value={local[r.name]}
							/>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
