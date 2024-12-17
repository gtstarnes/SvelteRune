<script lang="ts">
	import { del, like } from "./comments.svelte";

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
    <button onclick={() => del(id)}>Delete</button>
</div>

<style>

</style>