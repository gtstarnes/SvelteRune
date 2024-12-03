<script lang="ts">
//VARIABLES
    let count = $state<number>(0)
//FUNCTIONS
const add = () => {
    count++
}

const sub = () => {
    count--
}

const reset = () => {
    count = 0
}
</script>

<div class="container">
    <div class="count">{count}</div>
    <div>
        <button class="counters" onclick={add}>Increase</button>
        <button onclick={reset}>Reset</button>
        <button class="counters" onclick={sub}>Decrease</button>
    </div>
</div>

<style>

</style>