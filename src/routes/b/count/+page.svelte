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
    let square = $derived(count * count)
</script>

<div class="container">
    <div class="count">{count}</div>
    <div>
        <button class="math" onclick={() => count++}>+</button>
        <button class="clear" onclick={() => count = 0}>clr</button>
        <button class="math" onclick={() => count--}>-</button>
    </div>
    <div class="count">{square}</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    .count {
        font-size: 6rem;
    }
    button {
        width: 5rem;
        height: 3rem;
        font-size: 2rem;
        cursor: pointer;
        border: none;
    }
    .math {
        background-color: orange;
    }
    .math:active {
        background-color: darkorange;
        scale: 95%;
    }
    .clear {
        transform: translateY(0.35rem);
    }

</style>