<script lang="ts">
/**
 * REP: IV
 */

	import Moon from "./moon.svelte";
	import Sun from "./sun.svelte";

 const toggle = $state<boolean>(false);

</script>

{#if toggle}
    <button><Moon /></button>
{:else}
    <button><Sun /></button>
{/if}

<style>

</style>