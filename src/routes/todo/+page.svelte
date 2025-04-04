<script lang="ts">
	import Controls from "./controls.svelte";
	import { delTask, filterComplete, filterIncomplete, getTasks, type Filter, type Task } from "./todo.svelte";

    
const tabs:Filter[] = ['All', 'Incomplete', 'Complete'];
let active = $state('All')
let tasks = $derived.by(() => {
    switch(active){
        case 'Complete': 
            return filterComplete()
        case 'Incomplete':
            return filterIncomplete()
        default:
            return getTasks();
    }
})


function changeActive(tab:Filter){
    if (active !== tab){
        active = tab
    }
}
</script>

<div>
    <Controls />
    <section>
        <div>
            {#each tabs as tab (tab)}
                <button onclick={() => changeActive(tab)}>{tab}</button>
            {/each}
        </div>
        {#if tasks.length === 0}
            <div>There are no {active} tasks</div>
        {:else}
            <ul>
                {#each tasks as task (task.task)}
                    <li>
                        <input type="checkbox" bind:checked={task.status}>
                        <span>{task.task}</span>
                        <span>
                            <button>Edit</button>
                            <button onclick={() => delTask(task.task)}>Delete</button>
                        </span>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>

</div>

<style>

</style>