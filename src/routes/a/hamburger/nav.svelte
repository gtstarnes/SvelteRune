<script lang="ts">
    /**
     * REP: 2
    */
    //VARIABLES
    const tabs = ['Home', 'About', 'Projects',] 
    let {activeTab = $bindable("Home")} = $props();
    let width = $state(0)
    
    //FUNCTIONS
    function changeTab (tab: string) {
        if (tab !== activeTab) {
            activeTab = tab
        }
    }

    //EFFECTS
    $effect(() => {
        function handleResize() {
            if (typeof window.innerWidth !== undefined){
                width === window.innerWidth
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    </script>
    
    <div>
        <nav>
            <div>Company Logo</div>
            <ul>
                {#each tabs as tab (tab)}
                    <li class:active={tab === activeTab}><button  onclick={()=> changeTab(tab)}>{tab}</button></li>
                {/each}
            </ul>
        </nav>
    </div>
    
    <style>
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ul {
            display: flex;
            list-style: none;
        }
        button {
            background-color: inherit;
            border: inherit;
            font-style: inherit;
            cursor: pointer;
            width: 65px;
            text-align: center;
        }
        .active {
            color: gold;
            border-bottom: 2px solid gold;
        }
    </style>