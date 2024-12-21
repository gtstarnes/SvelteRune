<script lang="ts">
/**
 * Rep: 2
*/
	import Login from "./login.svelte";

//VARIABLES
    let username = $state('');
    let loggedIn = $state(false);

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