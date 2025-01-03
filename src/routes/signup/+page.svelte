<script lang="ts">
/**
 * REP: I
*/

	import SignUp from "./signUp.svelte";
	import { users } from "./users.svelte";


</script>

<div>
    <SignUp />
    <div>
        <ul>
            {#each users as user (user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    </div>
</div>

<style></style>