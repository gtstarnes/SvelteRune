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

//funcitons
function handleLogOut() {
    username = ''
    loggedIn = false
    portal = true
}
</script>

<div class="container">
    {#if loggedIn === true}
        <div>
            <span>Hello {username}</span>
            <button onclick={handleLogOut}>Logout</button>
        </div>
        <ul>
            {#each users as user(user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    {:else}
        {#if portal === true}
            <Login bind:portal />
        {:else}
            <SignUp bind:username bind:loggedIn bind:portal />
        {/if}
    {/if}
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