<script lang="ts">
	import Child from "./child.svelte";


let count = $state(0)
</script>

<div>
    <button>
        count (parent): {count}
    </button>
    <Child {count} />
</div>

<style>

</style>