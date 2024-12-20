<script lang="ts">
	import Login from "./login.svelte";

    let {username, loggedIn} = $state({username:"", loggedIn: false})

</script>

<div>
    <Login bind:username  bind:loggedIn/>
    {#if username === ''}
        <Login bind:username  bind:loggedIn/>
        <div></div>
    {:else}
        <button>Log Out</button>
        <div>HELLO: {username.toUpperCase()}</div>
    {/if}
    
</div>


<style>

</style>