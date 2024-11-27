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
        if (noError()) {
            tasks.push({status: false, task: newTask, edit: false})
            
        }
        newTask = ''  
    }
    const noError = () => {
        let noError = true
        if (newTask === '') {
            noError = false
            error = 'Tasks cannot be empty'
        } else if (newTask.length > 20) {
            noError = false
            error = 'Tasks cannot be longer than 20 characters'
        } else {
            resetError()
        }
        return noError
    }
    const resetError = () => {
        error = ''
    }

    const deleteTask = (t:string) => {

    }
</script>

<div>
    <div>
        <input type="text" placeholder="add new task" bind:value={newTask} />
        <button onclick={addTask}>Add</button>
        <button>Mass Del</button>
    </div>
    <div>{error}</div>
    <div class="taskList">
        {#if tasks.length === 0}
            <div>There are no tasks</div>
        {:else}   
            {#each tasks as task (task.task)}
                <div class="task">                
                    <input type="checkbox" bind:checked={task.status} />
                    <div class:finished={task.status === true}>{task.task}</div>
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
    .finished {
        text-decoration: line-through;
        color: grey;
    }
</style>