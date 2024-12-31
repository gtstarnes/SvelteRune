<script lang="ts">
/**
 * REPS: I
*/

	import { colors } from "./colors";

</script>

<div class="container">
    <div class="row">
        {#each colors as color (color.id)}
            <div>{color.color}</div>
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
        width: 90vw;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }
</style>