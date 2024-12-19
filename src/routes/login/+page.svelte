<script lang="ts">
	import Login from "./login.svelte";

    let username = $state("")
</script>

<div>
    <Login bind:username />

    {#if username === ''}
        <span></span>
    {:else}
        <span>Hello, {username}</span>
    {/if}
</div>

<style>

</style>