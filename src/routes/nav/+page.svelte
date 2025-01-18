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
        <Nav bind:active />
    </div>
    <div class="content">
        {active.toLowerCase()}.
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
 .content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
 }
 input {
    width: 50%;
    background-color: inherit;
    outline: none;
    border: none;
    caret-color: whitesmoke;
    border-bottom: 1px solid whitesmoke;
    padding-bottom: 2px;
 }
 input::placeholder {
    color: whitesmoke;
 }
 input:hover {
    cursor: pointer;
 }
</style>