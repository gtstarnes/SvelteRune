<script lang="ts">
	import { count } from "./state.svelte";

    const add = () => {
        count.child = count.child + 1
    }
</script>

<button onclick={add}>
    Child
</button>

<style>

</style>