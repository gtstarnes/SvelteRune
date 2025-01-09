<script lang="ts">
/**
 * REP: V
*/

	import Nav from "./nav.svelte";

    //VARIABLES
    let active = $state("Home")
</script>


<div class="container">
    <Nav bind:active />
    <section>
        {#if active === "Home"}
            <span>welcome.</span>
        {:else if active === "About"}
            <span>about.</span>
        {:else}
            <span>projects.</span>
        {/if}
    </section>
</div>

<style>
    
</style>