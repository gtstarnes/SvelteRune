<script lang="ts">
/**
 * REP: 8
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 */
//VARIABLES
    let count = $state<number>(0)
    let countSquared = $derived<number>(count*count)

//FUNCTIONS
    const add = () => {
        count++
    }
    const reset = () => {
        count = 0
    }
    const sub = () => {
        count--
    }
</script>

<div class="container">
    <div class="count">{count}</div>
    <div>
        <button class="math" onclick={add}>+</button>
        <button class="reset" onclick={reset}>Reset</button>
        <button class="math" onclick={sub}>-</button>
    </div>
    <div class="count">{countSquared}</div>
</div>

<style>
    .container {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .count {
        font-size: 6rem;
    }
    .math {
        background-color: orange;
        font-weight: bold;
        font-size: 2rem;
    }
    button {
        height: 3rem;
        width: 6rem;
        border: none;
        border-radius: 2%;
        cursor: pointer;
        font-size: 1rem;
    }
    .math:active {
        background-color: darkorange;
        scale: 95%;
    }

</style>