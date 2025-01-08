<script lang="ts">

    let input = $state('');
</script>

<form>
    <input type="text" placeholder="add task..." bind:value={input} />
    <span>
        <button type="submit">Add</button>
        <button type="button">Mass Delete</button>
    </span>
</form>

<style></style>