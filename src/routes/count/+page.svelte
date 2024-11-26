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

<div>
    <div>{count}</div>
    <div>
        <button onclick={add}>Increase</button>
        <button onclick={reset}>Reset</button>
        <button onclick={subtract}>Decrease</button>
    </div>
</div>

<style>

</style>