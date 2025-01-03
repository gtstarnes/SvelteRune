<script lang="ts">
/**
 * Rep: 4
*/

	import Login from "./login.svelte";

//VARIABLES
    let username = $state('');
    let loggedIn = $state(false);

// functions
function handleLogOut() {
    if (loggedIn === true){
        loggedIn = false
        username = ''
    }
}
</script>

<div>
    {#if loggedIn === false}
        <Login bind:username bind:loggedIn />
    {:else}
        <span>Hello, {username}</span>
        <button onclick={handleLogOut}>Log Out</button>
    {/if}
</div>


<style>

</style>