<script lang="ts">

</script>


<div class="container">
    <div class='card'>
        <h3>ANIBORDER</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</div>


<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh; 
}
.card {
    width: 18rem;
    text-align: center;
    padding: 3em;
    border-radius: 10px;
    position: relative;
    background-color: black;
    
}
.card::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: gold;
    inset: 0;
    z-index: -1;
    padding: 3px;
    
}

</style>