<script lang="ts">
	import Child from "./child.svelte";


let count = $state(0)
</script>

<div>
    <button onclick={()=>count++}>
        count (parent): {count}
    </button>
    <Child {count} />
</div>

<style>

</style>