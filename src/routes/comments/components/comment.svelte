<script lang="ts">
	import { del, like } from "./comments.svelte";

const {text, likes, id}: {text: string, likes: number, id: number} = $props();
</script>

<div>
    <div>
        <div>{likes}</div>
        <button onclick={()=>like(id)}>Like</button>
    </div>
    <div>{text}</div>
    <button onclick={()=>del(id)}>X</button>
</div>

<style>
    
</style>