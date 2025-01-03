<script lang="ts">
/**
 * REP: I
*/

	import SignUp from "./signUp.svelte";
	import { getUsers } from "./users.svelte";

const users = $derived(getUsers());
</script>

<div class="container">
    <SignUp />
    <div>
        <ul>
            {#each users as user (user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 99vw;
        height: 90vh;
    }

</style>