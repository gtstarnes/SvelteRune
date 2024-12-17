<script lang="ts">
	import Comment from "./comment.svelte";
    import { getComments } from "./comments.svelte";

//VARIABLES
    const comments = $derived(getComments())
</script>

<div>
    {#if comments.length === 0}
        <div>There are no comments, fool</div>
    {:else}
        <ul>
            {#each comments as comment (comment.id)}
                <li><Comment {...comment} /></li>
            {/each}
        </ul>
    {/if}
</div>

<style>

</style>