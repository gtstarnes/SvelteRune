<script lang="ts">
	import Portal from "./portal.svelte";
	import { getLoggedIn } from "./users.svelte";



/**
 * REP: I
*/
    let loggedIn = $derived(getLoggedIn());
    let username = $state('')
</script>

<div class="container">
    {#if loggedIn}
        <div>
            Hello, {username}
            <button>Log Out</button>
        </div>
    {:else}
        <Portal bind:username/>
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