<script lang="ts">
	import Comment from "./comment.svelte";
import { getComments } from "./comments.svelte";


    let comments = $derived(getComments())
</script>

<div>
    {#if comments.length === 0}
        <div>There are no comments</div>
    {:else}
        {#each comments as comment (comment.id)}
            <ul>
                <li><Comment {...comment} /></li>
            </ul>
        {/each}
    {/if}
</div>

<style>
    
</style>