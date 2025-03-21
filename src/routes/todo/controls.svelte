<script lang="ts">
	import { addTask, findTask, massDelete, massSelect } from "./todo.svelte";

	

/**
 * REP: 3
 */

 let input = $state('')
 let error = $state('')

    function createTask(){
        if (isValid(input)){
            addTask(input)
        }
        input = "";
    }
    function isValid(input: string){
        let valid = false
        switch(true) {
            case input === '':
                error = 'tasks cannot be empty'
                break
            case input.length > 20:
                error = 'task cannot be longer than 20 characters'
                break
            case findTask(input):
                error = 'task already exists'
                break;
            default:
                error = ''
                valid = true
        }
        return valid
    }
</script>

<div>
    <span>
        <input type="text" placeholder="add a task..." bind:value={input} />
        <div>
            <button onclick={createTask}>Add</button>
            <button onclick={massSelect}>Select All</button>
            <button onclick={massDelete}>Remove Completed</button>
        </div>
    </span>
    <span>{error}</span>
</div>


<style></style>