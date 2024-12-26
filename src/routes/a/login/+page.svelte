<script lang="ts">
/**
 * Rep: 3
*/

	import Login from "./login.svelte";

//VARIABLES
let {username, loggedIn} = $state({
    username: '',
    loggedIn: false,
})

function handleLogOut() {
    username = ''
    loggedIn = false
}
</script>

<div class="container">
    {#if loggedIn === false}
        <Login bind:username bind:loggedIn />
    {:else}
        <div>
            <span>Hello, {username}</span>
            <button onclick={handleLogOut}>Log Out</button>
        </div>
    {/if}
</div>


<style>
    .container {
        display: flex;
        width: 98vw;
        height: 90vh;
        justify-content: center;
        align-items: center;
    }
</style>