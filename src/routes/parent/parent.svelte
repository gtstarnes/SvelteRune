<script lang="ts">
	import Child from "./child.svelte";
import { count } from "./state.svelte";


    const add = () => {
        count.parent = count.parent + 1;
        count.child = count.parent
    }
</script>

<div>
    <button onclick={add}>
        Parent
    </button>
    <Child />
</div>

<style>

</style>