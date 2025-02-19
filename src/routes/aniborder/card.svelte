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
</div>

<style>

    @property --angle {
        syntax: "<angle>";
        initial-valeu: 0deg;
        inherits: false;
        }

    .card {
        --angle: 0deg;
        width: 18rem;
        height: 20rem;
        padding: 1rem;
    }
    .card:hover {
        box-shadow: 8px 8px 10px rgba(0,0,0,0.25);
    }

/*
    .card {
        --angle: 0deg;
        height: 22rem;
        width: 16rem;
        padding: 1rem;
    }
    .card:hover {
        border: 0.25rem solid;
        border-image: linear-gradient(var(--angle), rgba(0,0,0,0) 75%, gold) 1;
        animation: 4s rotate linear infinite;
        
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }

    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
   }

    .card:hover {
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
    }
*/
</style>