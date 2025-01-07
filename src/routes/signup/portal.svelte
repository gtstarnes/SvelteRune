<script lang="ts">
	import Login from "./login.svelte";
import SignUp from "./signUp.svelte";

    let {
        username = $bindable(), 
        loggedIn = $bindable(),
    } = $props()
    let portal = $state(false)
</script>

<div>
    {#if portal === false}
        <SignUp bind:username bind:loggedIn bind:portal />
    {:else}
        <Login bind:portal />
    {/if}
</div>

<style>

</style>