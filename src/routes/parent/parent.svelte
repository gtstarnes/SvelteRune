<script lang="ts">
	import Child from "./child.svelte";

    let {count = $bindable(0)}: {count: number} = $props<number>()
    
    const add = () => {
        count++
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