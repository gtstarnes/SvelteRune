<script lang="ts">
	import Child from "./child.svelte";

    let {count = $bindable(0)}: {count: number} = $props<number>()

</script>

<div>
    <button>
        Parent
    </button>
    <Child {count} />
</div>

<style>

</style>