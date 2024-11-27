<script lang="ts">
//VARIABLES
    let tasks = $state([
        {
            status: false,
            task: ''
        }
    ])
    let newTask = ''
    let error = ''

//FUNCTIONS
    const addTask = () => {

    }

    const changeStatus = () => {

    }

    const deleteTask = () => {

    }
</script>

<div>
    <div>
        <input type="text" placeholder="add new task" />
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