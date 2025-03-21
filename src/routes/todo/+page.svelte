<script lang="ts">
    /**
     * REP: 3
     */

	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";
    const tasks = $derived(getTasks())


</script>

<div>
    <Controls />
    <section>

    </section>
</div>

<style>

</style>