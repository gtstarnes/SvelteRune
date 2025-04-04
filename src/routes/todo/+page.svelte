<script lang="ts">
	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";

const tabs = ['All', 'Incomplete', 'Complete'];
const tasks = $derived(getTasks());
</script>

<div>
    <Controls />
    <div>
        
    </div>
    <section>

    </section>
</div>

<style>

</style>