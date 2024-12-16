<script lang="ts">
	import { add } from "./comments.svelte";

    let input = $state("")

    const check = () => {
        if(input !== "") {
            add(input)
        }
    }
</script>

<div>
    <input type="text" bind:value={input} />
    <button onclick={() => add}>Add</button>
</div>

<style>
    
</style>