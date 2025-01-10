<script lang="ts">
/**
 * REPS: II
*/

	import { colors } from "./colors";



</script>

<div class="container">
    <div>
        <ul>
            {#each colors as color (color.id)}
                <li>
                    <div>{color.color}</div>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
</style>