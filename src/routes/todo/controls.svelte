<script lang="ts">
/**
 * REP: 2
 */
    let input = $state('');
    let error = $state('');

    //FUNCTIONS
    function handleSubmit(e: SubmitEvent){

    }
    function checkErrors(){
        
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