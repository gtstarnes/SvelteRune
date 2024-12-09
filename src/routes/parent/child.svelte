<script lang="ts">
    import {child} from "./state.svelte"
    let {count = 0}: {count: number} = $props();
   
    const add =() => {
        count++ 
        child.count = count
    }
</script>


<button onclick={add}>
    Child
</button>

<style>

</style>