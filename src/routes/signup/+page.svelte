<script lang="ts">
	import Portal from "./portal.svelte";
	import { getLoggedIn, getUsers, toggleLogIn, togglePortal } from "./users.svelte";



/**
 * REP: II
*/
    let loggedIn = $derived(getLoggedIn());
    let username = $state('')
    let users = $derived(getUsers())

    //FUNCTION
    function logout() {
        toggleLogIn();
        togglePortal('login')
        username = ''
    }
</script>

<div class="container">
    {#if loggedIn}
        <div>
            Hello, {username}
            <button onclick={logout}>Log Out</button>
        </div>
    {:else}
        <Portal bind:username/>
    {/if}
    {#each users as user (username)}
        <span>
            {user.username}: {user.password}
        </span>
    {/each}
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