<script lang="ts">
	import Capability from "$lib/Capability.svelte";
	import type { CapabilityParams } from "$lib/capability";

	let local: CapabilityParams = {
		current: 10,
		target: 90,
		start: 0,
		duration: 24,
	};

	let local2: CapabilityParams = {
		current: 20,
		target: 80,
		start: 0,
		duration: 36,
	};
</script>

<p class="text-5xl text-blue-700 text-center">Welcome to Svelte and Tailwind</p>
<h2>The params are: {local.current} {local.target}</h2>
<h2>The params are: {local2.current} {local2.target}</h2>
<Capability bind:local />
<!-- <Capability bind:local={local2} /> -->
