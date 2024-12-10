<script lang="ts">
//VARIABLES
    let count = $state<number>(0)
    let countSquared = $derived<number>(count*2)

//FUNCTIONS
    const add = () => {
        count++
    }
    const reset = () => {
        count = 0
    }
</script>

<div>
    <div>{count}</div>
    <div>
        <button onclick={add}>+</button>
        <button onclick={reset}>Reset</button>
        <button>-</button>
    </div>
    <div>{countSquared}</div>
</div>

<style>

</style>