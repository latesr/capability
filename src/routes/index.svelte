<script lang="ts">
	import Capability from "$lib/Capability.svelte";
	import { CapabilityParams, params } from "$lib/capability";

	let local: CapabilityParams;
	params.subscribe((value) => (local = value));
</script>

<p class="text-5xl text-blue-700 text-center">Welcome to Svelte and Tailwind</p>
<h2>The params are: {local.current} {local.target}</h2>
<Capability />
