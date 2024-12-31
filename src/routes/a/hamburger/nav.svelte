<script lang="ts">
    /**
     * REP: III
    */    

    const links = ["Home", "About", "Projects"]
    let active = $state('Home')
    </script>
    
    <div>
        <nav>
            <div>LOGO</div>
            <div>
                <ul>
                    {#each links as link (link)}
                        <li><button>{link}</button></li>
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
        }
    </style>