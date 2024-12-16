<script lang="ts">
	import { del, like } from "./comments.svelte";

const {text, likes, id}: {text: string, likes: number, id: number} = $props();
</script>

<div class="container">
    <div class="controls">
        <div>{likes}</div>
        <button onclick={()=>like(id)}>Like</button>
    </div>
    <div>{text}</div>
    <button onclick={()=>del(id)}>X</button>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        background-color: green;
        padding: 0.5rem;
    }
    .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
    button {
        cursor: pointer;
    }
</style>