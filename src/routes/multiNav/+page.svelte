<script lang="ts">
    /**
     * REP: IV
    */
</script>

<div class="container">
    <div class="header">
        <span>Logo</span>
        <input />
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
                        <button>Projects</button>
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
</div>


<style>
    .container {
        height: 90vh;

    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: grey;
        padding-left: 0.5rem;
    }
    .main {
        position: relative;
    }
    .subnav-content {
        position: absolute;
        right: 0;
        visibility: hidden;
        background-color: blueviolet;
    }
    .subnav:hover .subnav-content {
        visibility: visible;
    }
    .main button:hover, .subnav:hover {
        background-color: blueviolet;
    }
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    button {
        border: none;
        background-color: inherit;
        color: whitesmoke;
        cursor: pointer;
        height: 2rem;
        width: 4rem;
    }

</style>