<script lang="ts">
	import { CapabilityData } from "$lib/capability";
	import Capability from "$lib/Capability.svelte";

	let receive = new CapabilityData("Receive Automation", [
		{
			name: "Feature",
			current: 10,
			target: 90,
			start: 0,
			duration: 24,
		},
		{
			name: "Rollout",
			current: 20,
			target: 80,
			start: 0,
			duration: 36,
		},
	]);
</script>

<p class="text-5xl text-blue-700 text-center">Welcome to Svelte and Tailwind</p>
<h2>{receive.toString()}</h2>
<Capability bind:capability={receive} />
<!-- <Capability bind:local={local2} /> -->
