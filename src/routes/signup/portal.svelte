<script lang="ts">
	import Login from "./login.svelte";
import SignUp from "./signUp.svelte";


    let portal = $state(false)
</script>

<div>
    {#if portal === false}
        <SignUp />
    {:else}
        <Login />
    {/if}
</div>

<style>

</style>