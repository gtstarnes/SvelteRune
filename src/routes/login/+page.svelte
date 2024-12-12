<script lang="ts">
	import Login from "./login.svelte";

    let details = $state({username: '', password:''})
</script>

<div>
    {#if details.username === ''}
        <div></div>
    {:else}
        <div>Hello: {details.username}</div>
    {/if}
    <Login  bind:details={details} />
</div>

<style>

</style>