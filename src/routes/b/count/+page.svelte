<script lang="ts">
/**
 * REP: X
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

</style>