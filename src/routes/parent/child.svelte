<script lang="ts">
    let {count = 0}: {count: number} = $props();

    const add =() => {
        count++
    }
</script>


<button onclick={add}>
    Child
</button>

<style>

</style>