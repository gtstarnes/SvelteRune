<script lang="ts">
    let count = $state<number>(0);

    const add = () => {
        count++
    }
</script>

<button onclick={add}>
    count: (child): {count}
</button>


<style>

</style>