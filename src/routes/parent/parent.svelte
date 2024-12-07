<script lang="ts">
	import Child from "./child.svelte";


let count = $state(0)
</script>

<div>
    <button onclick={()=>count++}>
        parent
    </button>
    <Child {count} />
</div>

<style>

</style>