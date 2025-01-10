<script lang="ts">
    /**
     * REP: II
    */
</script>

<div class="container">
    <span>LOGO</span>
    <nav class="main">
        <ul>
            <li><button>Home</button></li>
            <li>
                <nav class="subnav">
                    <button>About</button>
                    <ul class="subnav-content">
                        <li><button>A</button></li>
                        <li><button>B</button></li>
                        <li><button>C</button></li>
                    </ul>
                </nav>
            </li>
            <li>                
                <nav class="subnav">
                    <button>Project</button>
                    <ul class="subnav-content">
                        <li><button>D</button></li>
                        <li><button>E</button></li>
                        <li><button>F</button></li>
                    </ul>
                </nav>
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
    button {
        border: none;
        cursor: pointer;
    }
</style>