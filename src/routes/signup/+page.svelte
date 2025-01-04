<script lang="ts">
/**
 * REP: I
*/

	import Login from "./login.svelte";
	import SignUp from "./signUp.svelte";
	import { getUsers } from "./users.svelte";

const users = $derived(getUsers())
</script>

<div class="container">
    <Login />
    <SignUp />
    <ul>
        {#each users as user(user.username)}
            <li>{user.username}</li>
        {/each}
    </ul>
</div>

<style>

</style>