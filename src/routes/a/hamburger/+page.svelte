<script lang="ts">
/**
 * REP: 2
*/

import Nav from "./nav.svelte";
let activeTab = $state("Home")
</script>

<div>
    <Nav bind:activeTab />
</div>

<style>

</style>