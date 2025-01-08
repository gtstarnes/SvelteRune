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
                <nav class='subnav'>
                    <button class="subnav-button">Project</button>
                    <div class="subnav-content">
                        <ul >
                            <li><button>adc</button></li>
                            <li><button>342</button></li>
                            <li><button>fsf</button></li>
                            <li><button>45g</button></li>
                        </ul>
                    </div>
                </nav>
            </li>
            <li>
                <nav class='subnav'>
                    <button class="subnav-button">About</button>
                    <div class='subnav-content'>
                        <ul>
                            <li><button>ad</button></li>
                            <li><button>32</button></li>
                            <li><button>sf</button></li>
                            <li><button>4g</button></li>
                        </ul>
                    </div>
                </nav>
            </li>
        </ul>
    </nav>
</div>


<style>
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
    .container {
        width: 99vw;
        margin: 0;
    }
    .main {
        background-color: grey;
        height: 2rem;
        width: 100%;
    }
    .subnav {
        float: left;
        overflow:hidden;
        width: 100%;
    }
    .subnav-content{
        position: absolute;
        left: 0;
        width:100%;
        visibility: hidden;
        height: 2rem;
        z-index: 1;
    }
    .subnav:hover .subnav-content {
        display: block;
        visibility: visible;
    }
    .subnav-content button {
        width: 3rem;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        height: 2rem;
    }
    .main button:hover, .subnav:hover .subnav-content {
        background-color: blueviolet;
    }
    .subnav-content button:hover {
        background-color: grey;
    }
</style>