<script lang="ts">
    /**
     * REP: VI
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
                    <nav class="subnav">
                        <button>Projects</button>
                        <ul class="subnav-content">
                            <li><button>A</button></li>
                            <li><button>B</button></li>
                            <li><button>C</button></li>
                        </ul>
                    </nav>
                </li>
                <li>
                    <nav class="subnav">
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
    .container {
        height: 90vh;
        margin-top: 1rem;
    }
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
    .main button:hover {
        background-color: blueviolet;
    }
    .subnav-content {
        position: absolute;
        right:0;
        background-color: blueviolet;
        visibility: hidden;
    }
    .subnav:hover .subnav-content {
        visibility: visible;
    }
    .subnav-content button:hover {
        background-color: grey;
    }
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        color: whitesmoke;
        width: 4rem;
        height: 2rem;
    }
    input {
        background-color: inherit;
        border: none;
        border-bottom: 1px solid whitesmoke;
        color: whitesmoke;
        width: 18rem;
        padding-left: 0.2rem;
        padding-bottom: 0.04rem;
    }
    input::placeholder {
        color: whitesmoke;
    }
    input:focus {
        outline:none;
        caret-color: whitesmoke;
    }

</style>