<script lang="ts">
/**
 * REP: I
*/

	import Login from "./login.svelte";
	import SignUp from "./signUp.svelte";
	import { getUsers } from "./users.svelte";

const users = $derived(getUsers())
let username = $state('')
let loggedIn = $state(false)
let portal = $state(false)
</script>

<div class="container">
    <Login />
    <SignUp bind:username bind:loggedIn bind:portal />
    <ul>
        {#each users as user(user.username)}
            <li>{user.username}</li>
        {/each}
    </ul>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
</style>