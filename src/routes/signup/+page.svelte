<script lang="ts">
	import Portal from "./portal.svelte";
import { getUsers } from "./users.svelte";

/**
 * REP: I
*/

    const users = $derived(getUsers());
    let loggedIn = $state(false)
</script>

<div class="container">
    {#if loggedIn === false}
        <Portal />
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