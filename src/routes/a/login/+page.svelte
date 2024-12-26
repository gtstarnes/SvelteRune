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
</script>

<div>
    {#if loggedIn === false}
        <Login bind:username bind:loggedIn />
    {:else}
        <div>
            <span>Hello, {username}</span>
            <button>Log Out</button>
        </div>
    {/if}
</div>


<style>

</style>