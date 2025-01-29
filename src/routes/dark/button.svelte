<script lang="ts">
/**
 * REP: III
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
    <button><Moon /></button>
{:else}
    <button><Sun /></button>
{/if}

<style>

</style>