<script lang="ts">
	import Portal from "./portal.svelte";
	import { getLoggedIn, toggleLogIn } from "./users.svelte";



/**
 * REP: II
*/
    let loggedIn = $derived(getLoggedIn());
    let username = $state('')
</script>

<div class="container">
    {#if loggedIn}
        <div>
            Hello, {username}
            <button onclick={toggleLogIn}>Log Out</button>
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