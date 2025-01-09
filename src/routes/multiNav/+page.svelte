<script lang="ts">
    /**
     * REP: 1
    */
</script>

<div class="container">
    <nav class="main">
        <ul>
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Projects</button></li>
        </ul>
    </nav>
</div>


<style>
    * {
        border: 1px solid black
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    .main {
        background-color: grey;
        width: 100%;
        display: flex;
        justify-content: end;
        padding-right: 2rem;
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
    button:hover {
        background-color: blueviolet;
    }
</style>