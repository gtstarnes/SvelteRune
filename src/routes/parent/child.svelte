<script lang="ts">
    import {child} from "./state.svelte"
    let {count = 0}: {count: number} = $props();
    child.count = count;
    const add =() => {
        count++
    }
</script>


<button onclick={add}>
    Child
</button>

<style>

</style>