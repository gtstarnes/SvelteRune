<script lang="ts">
    /**
     * REP: VI
    */

    const tabs = ['Home', {main: 'About', sub:['A', 'B', 'C']}, {main: 'Projects', sub:['D', 'E', 'F']}];
    let {active = $bindable('Home')} = $props();
</script>


<nav class="main">
    <ul>
        {#each tabs as tab (tab)}
            {#if typeof tab === 'object'}
                <nav class='subnav'>
                    <li><button>{tab.main}</button></li>
                    <div class="subnav-content">
                        <ul>
                            {#each tab.sub as sub}
                                <li><button>{sub}</button></li>
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
</style>