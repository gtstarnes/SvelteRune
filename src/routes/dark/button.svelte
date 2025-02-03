<script lang="ts">
/**
 * REP: IV
 */

	import Moon from "./moon.svelte";
	import Sun from "./sun.svelte";

 const toggle = $state<boolean>(false);

</script>

{#if toggle}
    <button class="dark-mode-button"><Moon /></button>
{:else}
    <button class="dark-mode-button"><Sun /></button>
{/if}

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