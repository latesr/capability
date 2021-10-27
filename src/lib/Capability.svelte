<script lang="ts">
	import type { CapabilityData } from "./capability";

	export let capability: CapabilityData;
	$: console.log("update: + ", capability.toString());

	let curves = [
		{
			name: "Feature",
			rows: [
				[
					{
						border: "rounded-tl-md",
						name: "current",
						display: "Current %",
					},
					{
						border: "rounded-tr-md",
						name: "target",
						display: "Target %",
					},
				],
				[
					{
						border: "rounded-bl-md",
						name: "start",
						display: "Start Month",
					},
					{
						border: "rounded-br-md",
						name: "duration",
						display: "Duration",
					},
				],
			],
		},
		{
			name: "Rollout",
			rows: [
				[
					{
						border: "rounded-tl-md",
						name: "current",
						display: "Current %",
					},
					{
						border: "rounded-tr-md",
						name: "target",
						display: "Target %",
					},
				],
				[
					{
						border: "rounded-bl-md",
						name: "start",
						display: "Start Month",
					},
					{
						border: "rounded-br-md",
						name: "duration",
						display: "Duration",
					},
				],
			],
		},
	];
</script>

<div
	class="m-4 flex space-x-1 w-min border border-gray-300 rounded-md shadow-lg p-2"
>
	{#each curves as curve, curveIndex}
		<div class="w-48">
			<h2 class="font-medium text-sm">{curve.name}</h2>
			<div class="-space-y-px ">
				{#each curve.rows as row}
					<div class="flex items-center -space-x-px">
						{#each row as r, i}
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
									bind:value={capability.curves[curveIndex][r.name]}
								/>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
