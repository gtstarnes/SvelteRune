<script lang="ts">
    let {count = $bindable()} = $props();

    const add =() => {
        count++
    }
</script>


<button onclick={add}>
    Child
</button>

<style>

</style>