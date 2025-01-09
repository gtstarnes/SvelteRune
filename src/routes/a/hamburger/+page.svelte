<script lang="ts">
/**
 * REP: V
*/

	import Hamburger from "./hamburger.svelte";

    //VARIABLES
    const tabs = ["Home", "About", "Projects", ]
    let {active = $bindable("Home")} = $props()
    let width = $state(0);

    //FUNCTIONS
    function changeTab(tab:string) {
        if (tab !== active){
            active = tab
        }
    }
</script>

<svelte:window bind:innerWidth={width} />
<div class="container">
    <div>LOGO</div>
    {#if width > 600}
        <nav>
            <ul>
                {#each tabs as tab(tab)}
                    <li><button>{tab}</button></li>
                {/each}
            </ul>
        </nav>
    {:else}
        <Hamburger />
    {/if}
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: grey;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    ul {
        display: flex;
        list-style: none;
        height: 100%;
        margin: 0;
    }
    button {
        height: 100%;
        background-color: inherit;
        border: none;
        height: 2rem
    }
    button:hover {
        background-color: blueviolet;
        cursor: pointer;
    }

</style>