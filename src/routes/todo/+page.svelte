<script lang="ts">
    /**
     * REP: 3
     */

	import Controls from "./controls.svelte";
	import { getTasks } from "./todo.svelte";
    const tasks = $derived(getTasks())


</script>

<div>
    <Controls />
    <section>
        <ul>
            {#each tasks as task (task.task)}
                <li>
                    <div>
                        <input type="checkbox" />
                        <p>{task.task}</p>
                        <span>
                            <button>Delete</button>
                        </span>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</div>

<style>

</style>