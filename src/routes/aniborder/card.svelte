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
    .card {
        height: 22rem;
        width: 14rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        position: relative;
        background: white;
        z-index: 1;
    }

    .card::after {
        content: "";
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 12px;
        background: conic-gradient(lightblue, pink, lightblue);
        z-index: -1;
        animation: rotate-border 4s linear infinite;
    }

    @keyframes rotate-border {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .card:hover {
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
    }
</style>