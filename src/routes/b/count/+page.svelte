<script lang="ts">
/**
 * REP: X
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
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    .display {
        font-size: 6rem;
    }
    .controls {
        display: flex;
        gap: 0.3rem;
    }
    button {
        height: 4rem;
        width: 6rem;
        font-size: 2rem;
        border: none;
        cursor: pointer;
    }
    .math {
        background-color: orange;
    }
    .math:active {
        background-color: darkorange;
        scale: 0.95;
    }
    .reset {
        transform: translate(0, 0.3rem);
    }
</style>