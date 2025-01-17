<script lang="ts">
	import Login from "./login.svelte";
import SignUp from "./signUp.svelte";

let {loggedIn = $bindable(false)} = $props();
let portalToggle = $state(false);
</script>

<div>
    {#if portalToggle}
        <SignUp />
    {:else}
        <Login />
    {/if}
</div>

<style>

</style>