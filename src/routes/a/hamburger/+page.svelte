<script lang="ts">
/**
 * REP: 2
*/

import Nav from "./nav.svelte";
let activeTab = $state("Home")
</script>

<div>
    <Nav bind:activeTab />
    <div>
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

</style>