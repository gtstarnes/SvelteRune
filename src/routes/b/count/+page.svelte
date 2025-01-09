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

    //FUNCTIONS
    function add() {
        count++
    }
    function reset(){
        count = 0
    }
    function minus(){
        count--
    }
</script>

<div class="container">
    <div class="display">{count}</div>
    <div class="controls">
        <button class="math" onclick={add}>+</button>
        <button class="reset" onclick={reset}>clr</button>
        <button class="math" onclick={minus}>-</button>
    </div>
    <div class="display">{squared}</div>
</div>

<style>

</style>