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
	let assess = new CapabilityData("Assess Automation", [
		{
			name: "Feature",
			current: 5,
			target: 100,
			start: 20,
			duration: 24,
		},
		{
			name: "Rollout",
			current: 0,
			target: 100,
			start: 20,
			duration: 36,
		},
	]);
</script>

<Capability bind:capability={receive} />
<Capability bind:capability={assess} />
