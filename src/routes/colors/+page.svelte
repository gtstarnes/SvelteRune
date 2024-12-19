<script lang="ts">
	import { colors } from "./colors";
</script>

<div class="container">
    {#each colors as color (color.id)}
        <div style={`background-color: ${color.color}`}
            class="color">
            <span class="name">{color.color.toUpperCase()}</span>
        </div>
    {/each}
</div>

<style>
    .color {
        height: 6rem;
        width: 5rem;
        border-radius: 2%;
        transition: width 0.25s ease-in;
    }
    .container {
        display: flex;
        gap:1rem;
        justify-content: center;
        align-items: center;
        height: 90vh;
        background-color: black;
    }
    .color:hover {
        width: 8rem;
        cursor: pointer;
        transition: width 0.5s ease-out;
    }
    .name {
        opacity: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .name:hover {
        opacity: 0.80;
        transition: opacity 0.25s ease-in-out;
    }
</style>