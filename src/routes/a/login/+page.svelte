<script lang="ts">
/**
 * Rep: 4
*/

	import Login from "./login.svelte";

//VARIABLES
    let username = $state('')
    let loggedIn = $state(false)

//functions
function logOut() {
    if (loggedIn === true) {
        loggedIn = false
        username = ''
    }
}
</script>

<div>
    {#if loggedIn === false}
        <Login bind:username bind:loggedIn />
    {:else}
        <div>
            <div>Hello, {username}</div>
            <button onclick={logOut}>Log Out</button>
        </div>
    {/if}
</div>


<style>

</style>