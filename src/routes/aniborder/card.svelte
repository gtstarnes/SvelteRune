<script lang="ts">

</script>

<div class='card'>
    <h3>ANIBORDER</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class='border'></div>
</div>

<style>
    .card {
        padding: 2em;
        width: 18rem;
        height: 18rem;
        background-color: #1c1f2b;
        text-align: center;
        border-radius: 10px;
        position: relative;
        border: 10px solid;
        border-image: linear-gradient(to right, rgb(31, 97, 238), blueviolet) 1;
    }
    /* .border {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: gold;
        inset: 0;
        z-index: -1;
        padding: 7px;
    } */
</style>