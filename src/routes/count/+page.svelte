<script lang="ts">
//variables
    let count = $state<number>(0)

//functions
    const add = () => {
        count++
    }
    const subtract = () => {
        count--
    }
    const reset = () => {
        count = 0
    }
</script>

<div class="container">
    <div class="count">{count}</div>
    <div>
        <button onclick={add}>Increase</button>
        <button onclick={reset}>Reset</button>
        <button onclick={subtract}>Decrease</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .count {
        font-size: 7rem;
    }
</style>