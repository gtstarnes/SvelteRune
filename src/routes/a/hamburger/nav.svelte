<script lang="ts">
	import Hamburger from "./hamburger.svelte";

    /**
     * REP: V
    */
    let tabs = $state(["Home", "About", "Projects"]);
    let {active = $bindable("Home")} = $props();
    let width = $state(0)

    function changeTab(t: string){
        if (t !== active) {
            active = t
        }
       
    }
</script>

<svelte:window bind:innerWidth={width} />
<div>
    <span>LOGO</span>
    {#if width >= 1040}
        <nav>
            <ul>
                {#each tabs as tab (tab)}
                    <li><button onclick={() => changeTab(tab)}
                        class:active={tab === active}>{tab}</button></li>
                {/each}
            </ul>
        </nav>
    {:else}
        <Hamburger />
    {/if}
</div>
    
<style>
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 0.5em;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
    }
    .active {
        color: pink;
        border-bottom: 2px solid pink;
    }
</style>