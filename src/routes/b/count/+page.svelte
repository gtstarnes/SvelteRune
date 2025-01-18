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
    <div>{count}</div>
    <div>
        <button>+</button>
        <button>clr</button>
        <button>-</button>
    </div>
    <div>{square}</div>
</div>

<style>


</style>