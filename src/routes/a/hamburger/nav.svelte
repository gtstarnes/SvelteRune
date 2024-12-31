<script lang="ts">
    /**
     * REP: III
    */    

    const links = ["Home", "About", "Projects"]
    let {active = $bindable('Home')} = $props()

    function changeActive(a: string) {
        if (a !== active) {
            active = a
        }
    }
    </script>
    
    <div>
        <nav>
            <div>LOGO</div>
            <div>
                <ul>
                    {#each links as link (link)}
                        <li><button 
                            class:active={link === active}
                            onclick={() => changeActive(link)}>{link}</button></li>
                    {/each}
                </ul>

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