<script lang="ts">
//IMPORTS
	import Parent from "./parent.svelte";
	import { count } from "./state.svelte";


</script>

<div>
    <div> Parent: {count.parent}</div>
    <div> Child: {count.child} </div>
    <Parent />
</div>

<style>

</style>