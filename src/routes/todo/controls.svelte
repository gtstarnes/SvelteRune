<script lang="ts">
	import { addTask, checkTasks } from "./todo.svelte";

/**
 * REP: 2
 */
    let input = $state('');
    let error = $state('');

    //FUNCTIONS
    function handleSubmit(e: SubmitEvent){
        e.preventDefault
        checkErrors();
        if (error === ''){
            addTask(input)
        }
        input = ''
    }
    function checkErrors(){
        switch(true){
            case input === '':
                return error = "task cannot be empty"
            case input.length > 20:
                return error = "tasks cannot be longer than 20 characters"
            case checkTasks(input):
                return error = "task already exists"
            default:
                return error = ""
        }
    }
</script>

<form onsubmit={handleSubmit}>
    <input type="text" placeholder="add task..." bind:value={input} />
    <span>
        <button type="submit" >Add</button>
        <button type="button">Mass Delete</button>
    </span>
</form>
<div>{error}</div>

<style></style>