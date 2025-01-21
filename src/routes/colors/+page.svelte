<script lang="ts">
/**
 * REPS: IV
*/
    import { colors } from "./colors";




</script>

<div class="container">
    <div class="color-list">
        {#each colors as color (color.id)}
            <div class="color" style={`background-color: ${color.color}`}></div>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }

    .color {
        height: 7rem;
        width: 6rem;
        cursor: pointer;
        border: 0.4rem solid black;
        border-radius: 4px;
        box-shadow: 8px 8px 10px rgba(0, 0, 0, .5);
    }
    .color-list {
        display: flex;
        gap: 1rem;
        overflow: hidden;
        width: 100vw;
    }
</style>