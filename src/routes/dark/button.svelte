<script lang="ts">
	import Moon from "./moon.svelte";
	import Sun from "./sun.svelte";

/**
 * REP: IV
 */
 let darkMode = $state(false);
 function toggle(){
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
 }
</script>

<button class="dark-mode-button">
    {#if darkMode}
        <Moon />
    {:else}
        <Sun />
    {/if}
</button>

<style>
    .dark-mode-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        border: none;
        cursor:pointer;
    }
</style>