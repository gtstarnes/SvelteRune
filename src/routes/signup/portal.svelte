<script lang="ts">
	import Login from "./login.svelte";
import SignUp from "./signUp.svelte";

let {loggedIn = $bindable(false)} = $props();
let portal = $state(false);
</script>

<div>
    {#if portal}
        <SignUp />
    {:else}
        <Login />
    {/if}
</div>

<style>

</style>