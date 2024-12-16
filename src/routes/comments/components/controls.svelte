<script lang="ts">
	import { add } from "./comments.svelte";

    let input = $state("")

    const check = () => {
        if(input !== "") {
            add(input)
        }
        input = ""
    }
</script>

<div>
    <input type="text" bind:value={input} />
    <button onclick={check}>Add</button>
</div>

<style>
    
</style>