<script lang="ts">
	import Child from "./child.svelte";


    let count = $state(0)

    const add = () => {
        count++
    }
</script>

<button onclick={add}>
    count (parent): {count}
</button>
<Child {count} />

<style>

</style>