<script lang="ts">
	import Child from "./child.svelte";
    import {child} from "./state.svelte"

    let {count = $bindable(0)} = $props();

    const add = () => {
        count++
        child.count = count
    }
</script>

<div>
    <button onclick={add}>
        parent
    </button>
    <Child {count} />
</div>

<style>

</style>