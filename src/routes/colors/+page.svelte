<script lang="ts">
	import { colors } from "./colors";
</script>

<div class="container">
    {#each colors as color (color.id)}
        <div style={`background-color: ${color.color}`}
            class="color"></div>
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
    }
    .color:hover {
        width: 8rem;
        cursor: pointer;
        transition: width 0.5s ease-out;
    }
</style>