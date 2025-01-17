<script lang="ts">
	import Login from "./login.svelte";
import SignUp from "./signUp.svelte";
	import { getPortal } from "./users.svelte";

let {loggedIn = $bindable(false)} = $props();
let portal = $derived(getPortal());
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