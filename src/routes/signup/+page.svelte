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
    {#if loggedIn === true}
        <span>Hello {username}</span>
        <ul>
            {#each users as user(user.username)}
                <li>{user.username}</li>
            {/each}
        </ul>
    {:else}
        {#if portal === true}
        <Login />
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