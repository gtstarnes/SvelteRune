<script lang="ts">
    /**
     * REP: III
    */
    import Hamburger from "./hamburger.svelte";

    //VARIABLES
    const links = ["Home", "About", "Projects"]
    let {active = $bindable('Home')} = $props()
    let width = $state(0);

    //FUNCTIONS
    function changeActive(a: string) {
        if (a !== active) {
            active = a
        }
    }

    //EFFECTS 
    $effect(() => {
       
        function resize() { 
            if (typeof window !== 'undefined'){
                width = window.innerWidth
            }
        }

        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
       
    })
    </script>
    
    <div>
        <nav>
            <div>LOGO</div>
            <div>
                {#if width > 1040}
                    <ul>
                        {#each links as link (link)}
                            <li><button 
                                class:active={link === active}
                                onclick={() => changeActive(link)}>{link}</button></li>
                        {/each}
                    </ul>
                {:else}
                    <Hamburger />
                {/if}

            </div>
        </nav>
    </div>
    
    <style>
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ul {
            list-style: none;
            display: flex;
            gap: .5rem;
        }
        button {
            border: none;
            background-color: inherit;
            cursor: pointer;
            width: 10vw;
        }
        .active {
            font-weight: bold;
            color: gold;
        }
    </style>