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
        {:else if active === "About"}
        {:else}
        {/if}
    </section>
</div>

<style>

</style>