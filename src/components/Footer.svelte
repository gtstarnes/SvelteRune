<script lang="ts">
    const year = new Date().getFullYear()
</script>


<footer>
    Copyright© 2024-{year} All Rights Reserved
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        right:0;
        height: 1.4rem;
        width: 100%;
        padding-left: 1rem;
        background-color: white;
        transition: backgound-color 0.5s;
    }
    :global(body.dark-mode) footer{
        background-color: black;
        color: blueviolet
    }
</style>