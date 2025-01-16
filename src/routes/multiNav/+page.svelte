<script lang="ts">
    /**
     * REP: V
    */
</script>

<div class="container">
    <div class="head">
        <span>Logo</span>
        <input type="text" placeholder="search..." />
        <nav class="main">
            <ul>
                <li><button>Home</button></li>
                <li>
                    <nav class="suvnav">
                        <button>Projects</button>
                        <ul class="subnav-content">
                            <li><button>A</button></li>
                            <li><button>B</button></li>
                            <li><button>C</button></li>
                        </ul>
                    </nav>
                </li>
                <li>
                    <nav class="suvnav">
                        <button>About</button>
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
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: grey;
        padding-left: 1rem;
    }
    .main {
        position: relative;
    }
    ul {
        display: flex;
        list-style: none;
        margin: 0;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        color: whitesmoke;
    }

</style>