<script lang="ts">
    import { child } from "./state.svelte";
    let {count} = $props();
    const add = () => {
        count = count + 1
        child.count = count
    }
</script>

<button onclick={add}>
    child: {count}
</button>


<style>

</style>