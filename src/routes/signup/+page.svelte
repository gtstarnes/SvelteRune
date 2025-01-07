<script lang="ts">
	import { getUsers } from "./users.svelte";

/**
 * REP: I
*/

    const users = $derived(getUsers())
    let panel = $state(false)
    let loggedIn = $state(false)
</script>

<div class="container">
    {#if loggedIn === false}
        <div></div>
    {:else}
        <div></div>
        <ul>
            {#each users as user (user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    {/if}

</div>

<style>

</style>