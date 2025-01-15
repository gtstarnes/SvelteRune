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
                <li>Home</li>
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
    }

</style>