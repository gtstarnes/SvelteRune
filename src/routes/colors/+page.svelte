<script lang="ts">
/**
 * REPS: V
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
        transition: width 0.75s;
    }
    .color:hover {
        width: 12rem;
        translate: 0 1rem;
        transition: width 1s;
        transition: translate 0.4s;
    }
    .color-list {
        display: flex;
        gap: 1rem;
        overflow: hidden;
        width: 100vw;
        height: 12rem;
    }
    :global(.dark-mode .color){
        border: 0.4rem solid grey;
    }

</style>