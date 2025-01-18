<script lang="ts">
/**
 * REP: XI
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 *      commit after task blocks
 */

//variables
let count = $state(0)
let square = $derived(count*count)
</script>

<div class="container">
    <div class="count">{count}</div>
    <div class="controls">
        <button class="math" onclick={() =>count += 1}>+</button>
        <button class="clear" onclick={() =>count = 0}>clr</button>
        <button class="math" onclick={() =>count -= 1}>-</button>
    </div>
    <div class="count">{square}</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 90vh;
        justify-content: center;
        align-items: center;
    }
    .count {
        font-size: 6rem;
    }
    .controls {
        display: flex;
        gap: 0.5rem;
    }
    button {
        cursor: pointer;
        border:none;
        height: 3rem;
        width: 5rem;
        font-size: 2rem;
        background-color: grey;
        color: whitesmoke;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7)
    }
    .math {
        background-color: orange;
    }
    .math:active {
        background-color: darkorange;
        scale: 95%;
    }
    .clear {
        translate: 0px 0.25rem;
    }

</style>