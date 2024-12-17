<script lang="ts">
	import { like } from "./comments.svelte";

//VARIABLES
    let {text, count, id}: {text: string, count: number, id: number} = $props()
</script>

<div>
    <div>
        <button onclick={() => like(id, "up")}>^</button>
        <span>{count}</span>
        <button onclick={() => like(id, "down")}>v</button>
    </div>
    <div>{text}</div>
    <button>Delete</button>
</div>

<style>

</style>