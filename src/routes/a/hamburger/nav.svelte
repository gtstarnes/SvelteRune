<script lang="ts">
    /**
     * REP: VI
    */

    const tabs = ['Home', {main: 'About', sub:['A', 'B', 'C']}, {main: 'Projects', sub:['D', 'E', 'F']}];
    let {active = $bindable('Home')} = $props();

    function changeActive(tab:string) {
        if (active !== tab){
            active = tab
        }
    }
</script>


<nav class="main">
    <ul>
        {#each tabs as tab (tab)}
            {#if typeof tab === 'object'}
                <nav class='subnav'>
                    <li><button onclick={() =>changeActive(tab.main)}>{tab.main}</button></li>
                    <div class="subnav-content">
                        <ul>
                            {#each tab.sub as sub}
                                <li><button onclick={() =>changeActive(sub)}>{sub}</button></li>
                            {/each}
                        </ul>
                    </div>
                </nav>
            {:else}
                <li><button>{tab}</button></li>
            {/if}
        {/each}
    </ul>
</nav>

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
</style>