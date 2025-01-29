<script lang="ts">
/**
 * REP: IV
 */

 import  Moon  from "./moon.svelte"
  import  Sun  from "./sun.svelte"

let toggle = $state<boolean>(false)

    function toggleDark() {
        toggle = !toggle;
        document.body.classList.toggle("dark-mode")
    }

</script>

{#if !toggle}
    <button onclick={toggleDark}><Moon /></button>
{:else}
    <button onclick={toggleDark}><Sun /></button>
{/if}

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        border: none;
        cursor: pointer;
    }
</style>