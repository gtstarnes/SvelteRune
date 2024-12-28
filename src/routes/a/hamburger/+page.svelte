<script lang="ts">
/**
 * REP: III
*/

import Nav from "./nav.svelte";
let activeTab = $state("Home")
</script>

<div>
    <Nav bind:activeTab />
    <div class="page">
        {#if activeTab === "About"}
            <div>About Me</div>
        {:else if activeTab === "Projects"}
            <div>Projects</div>
        {:else}
            <div>Welcome</div>
        {/if}
    </div>
</div>

<style>
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        font-size: 8rem;
    }
</style>