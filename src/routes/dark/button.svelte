<script lang="ts">
/**
 * REP: III
 */

import Moon from "./moon.svelte";
import Sun from "./sun.svelte";

let toggle = $state(false)

const toggleDark = () => {
    toggle = !toggle
    document.querySelector("body")?.classList.toggle("dark-mode")
}
</script>

{#if toggle === true}
    <button onclick={toggleDark}><Sun /></button>
{:else}
    <button onclick={toggleDark}><Moon /></button>
{/if}

<style>
    button {
        border: none;
        background-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>