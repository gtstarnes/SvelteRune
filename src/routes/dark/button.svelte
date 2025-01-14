<script lang="ts">
/**
 * REP: !
 */
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
    :global(body){
    margin: 0;
    padding: 1rem;
    background-color: white;
    transition: background-color 0.5s
    }
    :global(body.dark-mode) {
        background-color: black;
        color: blueviolet
    }

</style>