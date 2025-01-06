<script lang="ts">
    /**
     * REP: IV
    */
    let tabs = $state(["Home", "About", "Projects"]);
    let {active = $bindable("Home")} = $props();

    </script>

  
    <div>
        <span>LOGO</span>
        <nav>
            <ul>
                {#each tabs as tab (tab)}
                    <li><button>{tab}</button></li>
                {/each}
            </ul>
        </nav>
    </div>
    
    <style>

    </style>