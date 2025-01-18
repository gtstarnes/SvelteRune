<script lang="ts">
    /**
     * REP: VI
    */

    const tabs = ['Home', {main: 'About', sub:['A', 'B', 'C']}, {main: 'Projects', sub:['D', 'E', 'F']}];
    let active = $state('Home');
</script>


<nav class="container">
    <ul>
        {#each tabs as tab (tab)}
            {#if typeof tab === 'object'}
                <nav>
                    <li><button>{tab.main}</button></li>
                    <div>
                        {#each tab.sub as sub}
                            <li><button>{sub}</button></li>
                        {/each}
                    </div>
                </nav>
            {:else}
                <li><button>{tab}</button></li>
            {/if}
        {/each}
    </ul>
</nav>

<style>

</style>