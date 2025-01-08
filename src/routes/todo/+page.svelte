<script lang="ts">
    /**
     * REP: 2
     */

	import Controls from "./controls.svelte";
	import { deleteTask, getTasks, toggleComplete } from "./todo.svelte";

    const tasks = $derived(getTasks())
</script>

<div>
    <Controls />
    <div>
        {#if tasks.length === 0}
            There are no tasks
        {:else}
            <ul>
                {#each tasks as task(task)}
                    <li>
                        <div role="button" 
                            tabindex="0"
                            class="task"
                            class:done={task.complete === true}
                            ondblclick={() => toggleComplete(task.text)}>
                                {task.text}
                        </div>
                        <span>
                            <button>Edit</button>
                            <button onclick={() => deleteTask(task.text)}>Delete</button>
                        </span>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
    .done{
        text-decoration: line-through;
        color: grey;
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        padding-left: 10px;
        height: 2rem;
        cursor: pointer;
    }
    li:hover{
        background-color: lightgray;
    }
    .task {
        width: 80%;
    }
</style>