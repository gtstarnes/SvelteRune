<script lang="ts">
	import Login from "./login.svelte";

    let {username, loggedIn} = $state({username:"", loggedIn: false})

    const logOut = () => {
        username = ""
        loggedIn = false
    }
</script>

<div>
    {#if username === ''}
        <Login bind:username  bind:loggedIn/>
        <div></div>
    {:else}
        <button onclick={logOut}>Log Out</button>
        <div>HELLO: {username.toUpperCase()}</div>
    {/if}
</div>


<style>

</style>