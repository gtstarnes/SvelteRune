<script lang="ts">
	import { del } from "./comments.svelte";

const {text, likes, id}: {text: string, likes: number, id: number} = $props();
</script>

<div>
    <div>
        <div>{likes}</div>
        <button>Like</button>
    </div>
    <div>{text}</div>
    <button onclick={()=>del(id)}>X</button>
</div>

<style>
    
</style>