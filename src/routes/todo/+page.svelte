<script lang="ts">
    /**
     * REP: 2
     */

	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";

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
                        <div>{task.text}</div>
                        <span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </span>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
</style>