<script lang="ts">
	import Parent from "./parent.svelte";
	import { child } from "./state.svelte";

    let count = $state(0)
</script>

<div>
    <div>
        Parent: {count}
    </div>
    <div>
        Child: {child.count}
    </div>
    <Parent bind:count={count} />
</div>

<style>

</style>