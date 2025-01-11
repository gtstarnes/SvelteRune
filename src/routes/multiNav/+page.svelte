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
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    button {
        background-color: inherit;
        border: none;
        width: 4rem;
        height: 2rem;
        cursor: pointer;
    }
    button:hover {
        background-color: blueviolet;
    }
    .container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 1rem;
        background-color: grey;
    }
    .subnav-content {
        position: absolute;
        right: 0;
        background-color: blueviolet;
        visibility: hidden;
    }
    .subnav:hover .subnav-content {
        visibility: visible;
    }
    .subnav-content button:hover {
        background-color: grey;
        border-bottom: none;
    }

</style>