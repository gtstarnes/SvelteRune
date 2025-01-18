<script lang="ts">
/**
 * REP: VI
*/

	import Nav from "./nav.svelte";

    let active = $state('Home')
</script>


<div class="container">
    <div class="header">
        <span>LOGO</span>
        <input type='text' placeholder="search..." />
        <Nav />
    </div>
    <div>
        welcome.
    </div>
</div>

<style>
 .container {
    height:90vh;
 }
 .header {
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
 }
</style>