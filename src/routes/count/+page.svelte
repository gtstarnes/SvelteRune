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
        <button class="math" onclick={add}>+</button>
        <button class="reset" onclick={reset}>Reset</button>
        <button class="math" onclick={minus}>-</button>
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
    .math {
        background-color: orange;
    }
    button {
        height: 4rem;
        width: 8rem;
        font-size: 2rem;
        cursor: pointer;
        border: none;
    }
    span{
        font-size: 6rem;
    }
</style>