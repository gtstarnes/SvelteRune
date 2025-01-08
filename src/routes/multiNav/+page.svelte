<script lang="ts"></script>

<div>
    <nav>
        <ul>
            <li><button>Home</button></li>
            <li>
                <nav class='subnav'>
                    <button>Project</button>
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
            <li><button>About</button></li>
        </ul>
    </nav>
</div>


<style>
    ul {
        display: flex;
        align-items: center;
        list-style: none;
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
        display: none;
    }
    .subnav:hover .subnav-content {
        display: block;
    }
    button {
        background-color: inherit;
        border: none;
    }
</style>