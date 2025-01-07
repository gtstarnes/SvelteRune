<script lang="ts">
	import Portal from "./portal.svelte";
import { getUsers } from "./users.svelte";

/**
 * REP: I
*/

    const users = $derived(getUsers());
    let username = $state('')
    let loggedIn = $state(false)

    function logOut() {
        loggedIn = false
        username = ''
    }
</script>

<div class="container">
    {#if loggedIn === false}
        <Portal bind:username bind:loggedIn/>
    {:else}
        <div>
            {username}
            <button onclick={logOut}>Log Out</button>
        </div>
        <ul>
            {#each users as user (user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    {/if}

</div>

<style>

</style>