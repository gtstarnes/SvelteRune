<script lang="ts">
	

/**
 * REP: 3
 */

 let input = $state('')
 let error = $state('')

</script>

<form>
    <span>
        <input type="text" placeholder="add a task..." bind:value={input} />
        <div>
            <button>Add</button>
            <button>Remove Completed</button>
        </div>
    </span>
    <span></span>
</form>


<style></style>