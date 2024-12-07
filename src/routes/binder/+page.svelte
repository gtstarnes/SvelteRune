<script lang="ts">
	import ChildB from "./childB.svelte";

    let input = $state<string>();

</script>

<div>

</div>
<ChildB bind:input={input} />

<style>

</style>