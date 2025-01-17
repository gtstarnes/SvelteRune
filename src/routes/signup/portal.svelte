<script lang="ts">
	import Login from "./login.svelte";
    import SignUp from "./signUp.svelte";
	import { getPortal } from "./users.svelte";
/**
 * REP: II
 */

let portal = $derived(getPortal());
let {username = $bindable()} = $props();
</script>

<div>
    {#if portal}
        <SignUp bind:username />
    {:else}
        <Login bind:username />
    {/if}
</div>

<style>

</style>