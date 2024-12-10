<script lang="ts">
//VARIABLES
    let count = $state<number>(0)
    let countSquared = $derived<number>(count*2)
</script>

<div>
    <div>{count}</div>
    <div>
        <button>+</button>
        <button>Reset</button>
        <button>-</button>
    </div>
    <div>{countSquared}</div>
</div>

<style>

</style>