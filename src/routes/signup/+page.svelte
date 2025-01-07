<script lang="ts">
	import { getUsers } from "./users.svelte";

/**
 * REP: I
*/

    const users = $derived(getUsers())
</script>

<div class="container">
    <ul>
        {#each users as user (user.username)}
            <li>{user.username}</li>
        {/each}
    </ul>
</div>

<style>

</style>