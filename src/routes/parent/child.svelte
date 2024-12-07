<script lang="ts">
    let {count}: {count: number} = $props();

    const add = () => {
        count++
    }
</script>

<button onclick={add}>
    count: (child): {count}
</button>


<style>

</style>