<script lang="ts">
/**
 * REP: IV
*/

	import Nav from "./nav.svelte";
    let active = $state("Home")
</script>

<div class="container">
    <Nav bind:active />
    {#if active === "Home"}
        <span>welcome</span>
    {:else if active === "About"}
        <span>about</span>
    {:else}
        <span>projects</span>
    {/if}

</div>

<style>
</style>