<script lang="ts">
    /**
     * REP: V
    */

	import Hamburger from "./hamburger.svelte";

    const tabs = ['Home', {main: 'About', sub:['A', 'B', 'C']}, {main: 'Projects', sub:['D', 'E', 'F']}];
    let {active = $bindable('Home')} = $props();
    let width = $state(0)

    function changeActive(tab:string) {
        if (active !== tab){
            active = tab
        }
    }
</script>

<svelte:window bind:innerWidth={width}/>

{#if (width > 500)}
<nav class="main">
    <ul>
        {#each tabs as tab (tab)}
            {#if typeof tab === 'object'}
                <nav class='subnav'>
                    <li><button onclick={() =>changeActive(tab.main)}
                            class:active={tab.main === active}>{tab.main}</button></li>
                    <div class="subnav-content">
                        <ul>
                            {#each tab.sub as sub}
                                <li><button onclick={() =>changeActive(sub)}>{sub}</button></li>
                            {/each}
                        </ul>
                    </div>
                </nav>
            {:else}
                <li><button onclick={() =>changeActive(tab)}
                        class:active={tab === active}>{tab}</button></li>
            {/if}
        {/each}
    </ul>
</nav>
{:else}
    <Hamburger />
{/if}

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    button {
        background-color: inherit;
        border: none;
        color: inherit;
        width: 4rem;
        height: 2rem;
        cursor: pointer;
    }
    .main {
        position: relative;
    }
    .main button:hover, .subnav:hover {
        background-color: blueviolet;
    }
    .subnav-content {
        background-color: blueviolet;
        position: absolute;
        right: 0;
        visibility: hidden;
    }
    .subnav:hover .subnav-content {
        visibility: visible;
    }
    .subnav-content button:hover {
        background-color: grey;
    }
    .active {
        border-top: 4px solid blueviolet;
    }
</style>