<script lang="ts">
	import { checkTasks } from "./todo.svelte";

/**
 * REP: 2
 */
    let input = $state('');
    let error = $state('');

    //FUNCTIONS
    function handleSubmit(e: SubmitEvent){
        
    }
    function checkErrors(){
        switch(true){
            case input === '':
                return "task cannot be empty"
            case input.length > 20:
                return "tasks cannot be longer than 20 characters"
            case checkTasks(input):
                return "task already exists"
            default:
                return ""
        }
    }
</script>

<form>
    <input type="text" placeholder="add task..." bind:value={input} />
    <span>
        <button type="submit">Add</button>
        <button type="button">Mass Delete</button>
    </span>
</form>
<span>{error}</span>

<style></style>