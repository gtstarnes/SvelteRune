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

<div>
    <div>{count}</div>
    <div>
        <button onclick={add}>Increase</button>
        <button onclick={reset}>Reset</button>
        <button onclick={sub}>Decrease</button>
    </div>
</div>

<style>

</style>