<script lang="ts">

const toggle = () => {
        window.document.body.classList.toggle('dark-mode')
    }
</script>

<button>
    Click meh
</button>

<style>
    button {
        background-color: blueviolet;
        border: none;
        height: 2.5rem;
        width: 5rem;
        cursor: pointer;
    }
    :global(body.dark-mode) button {
        background-color: antiquewhite;
        color: blueviolet
    }
</style>