<script lang="ts">
	import { massDelTask, massSetStatus } from "./todo.svelte";


</script>

<div>
    <input type="text" placeholder="what needs doing" />
    <div>
        <button>Add Task</button>
        <button onclick={massSetStatus}>Mass Select</button>
        <button onclick={massDelTask}>Delete Completed</button>
    </div>
</div>


<style></style>