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
    <div>error</div>
    <div>
        {#each tasks as task (task.task)}
            <div>
                <input type="checkbox" />
                <div>{task.task}</div>
                <button>Edit</button>
                <button>Del</button>
            </div>
        {/each}
    </div>
</div>

<style>

</style>