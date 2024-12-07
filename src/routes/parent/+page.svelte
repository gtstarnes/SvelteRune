<script lang="ts">

    let count = $state(0)

    const add = () => {
        count++
    }
</script>

<button onclick={add}>
    count (parent): {count}
</button>


<style>

</style>