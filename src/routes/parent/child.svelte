<script lang="ts">
//IMPORTS
	import { count } from "./state.svelte";

//FUNCTIONS
    const add = () => {
        count.child = count.child + 1
    }
</script>

<button onclick={add}>
    Child
</button>

<style>

</style>