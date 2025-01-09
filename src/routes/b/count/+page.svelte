<script lang="ts">
/**
 * REP: 9
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 *      commit after task blocks
 */

 //VARIABLES
    let count = $state<number>(0);
    let squared = $derived(count * count);



</script>

<div class="container">
    <div>{count}</div>
    <div>
        <button>+</button>
        <button>clr</button>
        <button>_</button>
    </div>
    <div>{squared}</div>
</div>

<style>

</style>