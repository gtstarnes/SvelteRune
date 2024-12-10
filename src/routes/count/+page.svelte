<script lang="ts">
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
    <div>{count}</div>
    <div>
        <button onclick={add}>+</button>
        <button onclick={reset}>Reset</button>
        <button onclick={sub}>-</button>
    </div>
    <div>{countSquared}</div>
</div>

<style>
    .container {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>