<script lang="ts">
//variables
    let count = $state<number>(0)

//functions
    const add = () => {

    }
    const subtract = () => {

    }
    const reset = () => {
        count = 0
    }
</script>

<div>
    <div>{count}</div>
    <div>
        <button>Increase</button>
        <button>Reset</button>
        <button>Decrease</button>
    </div>
</div>

<style>

</style>