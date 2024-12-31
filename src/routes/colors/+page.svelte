<script lang="ts">
/**
 * REPS: I
*/

	import { colors } from "./colors";

</script>

<div>
    {#each colors as color (color.id)}
        <div>{color.color}</div>
    {/each}
</div>

<style>

</style>