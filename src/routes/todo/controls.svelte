<script lang="ts">
	

/**
 * REP: 3
 */

 let input = $state('')
 let error = $state('')

    function createTask(){

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
            default:
                error = ''
                valid = true
        }
        return valid
    }
</script>

<form>
    <span>
        <input type="text" placeholder="add a task..." bind:value={input} />
        <div>
            <button>Add</button>
            <button>Remove Completed</button>
        </div>
    </span>
    <span>{error}</span>
</form>


<style></style>