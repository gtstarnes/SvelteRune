<script lang="ts">
/**
 * REP: II
 */

import Moon from "./moon.svelte";
import Sun from "./sun.svelte";

let toggle = $state(false)

const toggleDark = () => {
    toggle = !toggle
    document.querySelector("body")?.classList.toggle("dark-mode")
}
</script>

<button onclick={toggleDark}><Sun /></button>
<button onclick={toggleDark}><Moon /></button>

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