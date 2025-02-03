<script lang="ts">
	import { browser } from "$app/environment";
	import Moon from "./moon.svelte";
	import Sun from "./sun.svelte";

/**
 * REP: V
 */
 let darkMode = $state(browser ? document.body.classList.contains("dark-mode"): new Error('no browsers'));
 function toggle(){
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
 }
</script>

<button class="dark-mode-button" onclick={toggle}>
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