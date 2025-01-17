<script lang="ts">
	import Portal from "./portal.svelte";



/**
 * REP: I
*/
    let loggedIn = $state(false);
</script>

<div class="container">
    {#if loggedIn}
        <div>Hello</div>
    {:else}
        <Portal bind:loggedIn />
    {/if}
</div>

<style>
    .container {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>