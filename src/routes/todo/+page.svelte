<script lang="ts">
	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";

const tabs = ['All', 'Incomplete', 'Complete'];
const tasks = $derived(getTasks());
</script>

<div>
    <Controls />
    <section>
        {#each tabs as tab (tab)}
            <button>{tab}</button>
        {/each}
    </section>
</div>

<style>

</style>