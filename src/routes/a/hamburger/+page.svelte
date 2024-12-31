<script lang="ts">
/**
 * REP: IV
*/

	import Nav from "./nav.svelte";
    let active = $state("Home");
</script>

<div class="container">
    <Nav bind:active />
    <section >
        {#if active === "Home"}
            <span>welcome.</span>
        {:else if active === "About"}
            <span>about me.</span>
        {:else}
            <span>projects.</span>
        {/if}
    </section>
</div>

<style>
    section {
        display: flex;
        height: 90%;
        justify-content: center;
        align-items: center;

    }
    span {
        font-size: 8rem;
    }
    .container {
        height: 90vh;
    }
</style>