<script lang="ts">

const toggle = () => {
        window.document.body.classList.toggle('dark-mode')
    }
</script>

<button onclick={toggle}>
    Click meh
</button>

<style>
    button {
        background-color: blueviolet;
        border: none;
        height: 2.5rem;
        width: 5rem;
        cursor: pointer;
        color: white;
    }
    :global(body.dark-mode) button {
        background-color: white;
        color: blueviolet
    }
</style>