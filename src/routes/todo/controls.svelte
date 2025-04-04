<script lang="ts">
	import { addTask, getError, massDelTask, massSetStatus } from "./todo.svelte";

    let input = $state("");
    let error = $derived(getError())

    function sendInput() {
        addTask(input)
        input = "";
    }
</script>

<div>
    <input type="text" placeholder="what needs doing..." bind:value={input} />
    <div>
        <button onclick={sendInput}>Add Task</button>
        <button onclick={massSetStatus}>Mass Select</button>
        <button onclick={massDelTask}>Delete Completed</button>
    </div>
    <div>{error}</div>
</div>


<style></style>