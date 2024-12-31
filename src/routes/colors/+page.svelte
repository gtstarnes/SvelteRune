<script lang="ts">
/**
 * REPS: I
*/

	import { colors } from "./colors";

</script>

<div class="container">
    <div>
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
</style>