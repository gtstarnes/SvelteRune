<script lang="ts">
	import { count } from "./state.svelte";


    const add = () => {
        count.parent = count.parent + 1;
        count.child = count.parent
    }
</script>

<button onclick={add}>
    Parent
</button>

<style>

</style>