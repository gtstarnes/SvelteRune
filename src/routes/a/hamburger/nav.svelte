<script lang="ts">
	import Hamburger from "./hamburger.svelte";

    /**
     * REP: IV
    */
    let tabs = $state(["Home", "About", "Projects"]);
    let {active = $bindable("Home")} = $props();

    function changeTab(t: string){
        if (t !== active) {
            active = t
        }
       
    }
</script>

  
<div>
    <span>LOGO</span>
    <nav>
        <ul>
            {#each tabs as tab (tab)}
                <li><button onclick={() => changeTab(tab)}
                    class:active={tab === active}>{tab}</button></li>
            {/each}
        </ul>
    </nav>
    <Hamburger />
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