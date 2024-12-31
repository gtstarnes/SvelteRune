<script lang="ts">
/**
 * REPS: I
*/

	import { colors } from "./colors";

</script>

<div class="container">
    <div class="row">
        {#each colors as color (color.id)}
            <div class="block" style={`background-color: ${color.color}`}>{color.color}</div>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        width: 100vw;
        height: 90vh;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        width: 100vw;
        justify-content: center;
        align-items: center;
        height: 20vh;
        gap: 2%;
    }
    .block {
        width: 10vw;
        height: 14vh;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>