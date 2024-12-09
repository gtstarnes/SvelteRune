<script lang="ts">
	import Child from "./child.svelte";
	import { child } from "./state.svelte";

    let {count = $bindable(0)}: {count: number} = $props<number>()
    
    const add = () => {
        count++
        child.count = count
    }
</script>

<div>
    <button onclick={add}>
        Parent
    </button>
    <Child {count} />
</div>

<style>

</style>