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
        <div class="tabs">
            {#each tabs as tab (tab)}
                <button onclick={() => changeActive(tab)}>{tab}</button>
            {/each}
        </div>
        {#if tasks.length === 0}
            <div>There are no {active} tasks</div>
        {:else}
            <ul>
                {#each tasks as task (task.task)}
                    <li class="task">
                        <span>
                            <input type="checkbox" bind:checked={task.status}>
                            <span>{task.task}</span>
                        </span>
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
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        height: 80dvh;

        .tabs {
            display: flex;

            button {
                width: 8rem;
            }
        }

        ul {
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;

            .task {
                width: 100%;
                height: 3rem;
                box-shadow: 6px 10px 6px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                padding: 0.2rem
            }

            span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>