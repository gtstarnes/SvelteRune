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

</style>