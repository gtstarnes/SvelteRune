<script lang="ts">
/**
 * REP: II
 */

import Moon from "./moon.svelte";
import Sun from "./sun.svelte";

let toggle = $state(false)

const toggleDark = () => {
    toggle = true
    document.querySelector("body")?.classList.toggle("dark-mode")
}
</script>

<button><Sun /></button>
<button><Moon /></button>

<style>
    button {
        border: none;
        background-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>