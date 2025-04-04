<script lang="ts">
	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";

const tabs = ['All', 'Incomplete', 'Complete'];
const tasks = $derived(getTasks());
let active = $state('All')
</script>

<div>
    <Controls />
    <section>
        <div>
            {#each tabs as tab (tab)}
                <button>{tab}</button>
            {/each}
        </div>
        {#if tasks.length === 0}
            <div>There are no tasks</div>
        {:else}
            <ul>
                {#each tasks as task (task.task)}
                    <li>
                        <input type="checkbox">
                        <span>{task.task}</span>
                        <span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </span>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>

</div>

<style>

</style>