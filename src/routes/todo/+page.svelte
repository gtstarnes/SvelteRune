<script lang="ts">
    /**
     * REP: 3
     */

	import Controls from "./controls.svelte";
	import { delTask, getTasks } from "./todo.svelte";
    let tasks = $derived(getTasks())


</script>

<div>
    <Controls />
    <section>
        <ul>
            {#each tasks as task (task.task)}
                <li>
                        <input type="checkbox" bind:checked={task.status} />
                        <p class:active={task.status === true}>{task.task}</p>
                        <span>
                            <button onclick={() => delTask(task.task)}>Delete</button>
                        </span>
                </li>
            {/each}
        </ul>
    </section>
</div>

<style>
    section {
        height: 90vh;
        width: 100%;

        ul {
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;

            li{
                display: flex;
                height: 4rem;
                width: 100%;
                align-items: center ;
                justify-content: space-between;

                .active {
                    text-decoration: line-through;
                    color: grey
                }
            }
        }
    }
</style>