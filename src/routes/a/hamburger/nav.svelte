<script lang="ts">
    /**
     * REP: IV
    */
    let tabs = $state(["Home", "About", "Projects"]);
    let {active = $bindable("Home")} = $props();

    function changeTab(t: string){
        if (t !== active) {
            active === t
        }
    }
</script>

  
<div>
    <span>LOGO</span>
    <nav>
        <ul>
            {#each tabs as tab (tab)}
                <li><button onclick={() => changeTab(tab)}>{tab}</button></li>
            {/each}
        </ul>
    </nav>
</div>
    
<style>

</style>