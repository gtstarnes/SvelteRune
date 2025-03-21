<script lang="ts">
    /**
     * REP: 3
     */

	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";
    let tasks = $derived(getTasks())


</script>

<div>
    <Controls />
    <section>
        <ul>
            {#each tasks as task (task.task)}
                <li>
                        <input type="checkbox" bind:checked={task.status} />
                        <p>{task.task}</p>
                        <span>
                            <button>Delete</button>
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
            }
        }
    }
</style>