<script lang="ts">
	import { addTask, massDelTask, massSetStatus } from "./todo.svelte";

    let input = $state("");
</script>

<div>
    <input type="text" placeholder="what needs doing..." bind:value={input} />
    <div>
        <button onclick={() => addTask(input)}>Add Task</button>
        <button onclick={massSetStatus}>Mass Select</button>
        <button onclick={massDelTask}>Delete Completed</button>
    </div>
    <div></div>
</div>


<style></style>