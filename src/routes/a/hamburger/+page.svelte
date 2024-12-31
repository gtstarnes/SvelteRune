<script lang="ts">
/**
 * REP: III
*/

	import Nav from "./nav.svelte";
    let active = $state("Home");
</script>

<div>
    <Nav bind:active />
    <section>
        {#if active === "Home"}
            <span>welcome</span>
        {:else if active === "About"}
            <span>about me</span>
        {:else}
            <span>projects</span>
        {/if}
    </section>
</div>

<style>

</style>