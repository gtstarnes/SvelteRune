<script lang="ts">
/**
 * REP: 8
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 *      commit after task blocks
 */

//VARIABLES
let count = $state(0)
let squared = $derived(count * count)

//FUNCTIONS
function add() {
    count++
}
function minus(){
    count--
}
function reset(){
    count = 0
}
</script>

<div class="container">
    <span>{count}</span>
    <div>
        <button onclick={add}>+</button>
        <button onclick={reset}>Reset</button>
        <button onclick={minus}>-</button>
    </div>
    <span>{squared}</span>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
    button {
        height: 4rem;
        width: 8rem;
        font-size: 2rem;
        cursor: pointer;
    }
    span{
        font-size: 6rem;
    }
</style>