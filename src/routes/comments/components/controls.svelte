<script lang="ts">

//VARIABLES
    let input = $state("")
    let error = $state("")
</script>

<div>
    <input type="text" placeholder="add comment" bind:value={input} />
    <button>Add Comment</button>
</div>
<div>{error}</div>

<style>

</style>