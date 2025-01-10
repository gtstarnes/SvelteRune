<script lang="ts">
    /**
     * REP: III
    */
</script>

<div class="container">
    <span>LOGO</span>
    <nav class="main">
        <ul>
            <li><button>Home</button></li>
            <li>
                <div class="subnav">
                    <button>About</button>
                    <nav class="subnav-content">
                        <ul>
                            <li><button>A</button></li>
                            <li><button>B</button></li>
                            <li><button>C</button></li>
                        </ul>
                    </nav>
                </div>
            </li>
            <li> 
                <div class="subnav"> 
                    <button>Project</button>            
                    <nav >
                        <ul class="subnav-content">
                            <li><button>D</button></li>
                            <li><button>E</button></li>
                            <li><button>F</button></li>
                        </ul>
                    </nav>
                </div>   
            </li>
        </ul>
    </nav>
</div>


<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: gray;
        position: relative;
    }
    .main button:hover {
        background-color: blueviolet;
    }
    .subnav-content {
        position: absolute;
        right: 0.4px;
        background-color: blueviolet;
    }
    .subnav-content {
        visibility: hidden;
    }
    .subnav:hover .subnav-content {
        visibility: visible;
    }
    .subnav-content button:hover {
        background-color: grey;
    }
    button {
        border: none;
        cursor: pointer;
        height: 3rem;
        width: 6rem;
        background-color: inherit;
    }
    ul {
        display: flex;
        list-style: none;
        margin: 0;
    }
</style>