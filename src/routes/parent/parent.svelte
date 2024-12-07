<script lang="ts">
	import Child from "./child.svelte";

    let {count = $bindable(0), childCount = $bindable(0)} = $props();
</script>

<div>
    <button onclick={()=>count++}>
        parent
    </button>
    <Child {count} />
</div>

<style>

</style>