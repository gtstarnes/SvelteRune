<script lang="ts">
//TYPES
    interface Task {
        status: boolean,
        task: string,
        edit: boolean
    }
//VARIABLES
    let tasks = $state<Task[]>([])
    let newTask = $state<string>('')
    let error = $state<string>('')

//FUNCTIONS
    const addTask = () => {
        tasks.push({status: false, task: newTask, edit: false})
    }

    const changeStatus = (t:string) => {

    }

    const deleteTask = (t:string) => {

    }
</script>

<div>
    <div>
        <input type="text" placeholder="add new task" bind:value={newTask} />
        <button>Add</button>
        <button>Mass Del</button>
    </div>
    <div>{error}</div>
    <div class="taskList">
        {#if tasks.length === 0}
            <div>There are no tasks</div>
        {:else}   
            {#each tasks as task (task.task)}
                <div class="task">                
                    <input type="checkbox" />
                    <div>{task.task}</div>
                    <button>Edit</button>
                    <button>Del</button>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style>
    .task {
        display: flex;
    }
    .taskList {
        margin-top: 1.5rem;
    }
</style>