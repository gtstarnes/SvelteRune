<script lang="ts">
    /**
     * REP: 1
    */
</script>

<div class="container">
    <nav class="main">
        <ul>
            <li><button>Home</button></li>
            <li>
                <div class="subnav">
                    <button>About</button>
                    <nav class="subnav-content">
                        <ul>
                            <li><button>D</button></li>
                            <li><button>E</button></li>
                            <li><button>F</button></li>
                        </ul>
                    </nav>
                </div>
            </li>
            <li>
                <div class="subnav">
                    <button>Projects</button>
                    <nav class="subnav-content">
                        <ul>
                            <li><button>A</button></li>
                            <li><button>B</button></li>
                            <li><button>C</button></li>
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
        justify-content: center;
        align-items: center;
        height: 90vh;
        overflow: hidden;
        position: relative;
    }
    .main {
        background-color: grey;
        width: 100%;
        display: flex;
        justify-content: end;
        padding-right: 2rem;
        overflow: hidden;
    }
    ul {
        display: flex;
        list-style: none;
        height: inherit;
        margin: 0;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        height: 4rem;
        width: 6rem;
    }
    .main button:hover, .subnav:hover {
        background-color: blueviolet;
    }
    .subnav-content {
        overflow: hidden;
        position: absolute;
        right: 0;
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: end;
        padding-right: 2rem;
        background-color: blueviolet;
        visibility: hidden;
    }
    .subnav-content button:hover{
        background-color: gray;
    }
    .subnav:hover .subnav-content{
        visibility: visible;
    }

</style>