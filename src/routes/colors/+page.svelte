<script lang="ts">
/**
 * REPS: III
*/
    import { colors } from "./colors";




</script>

<div class="container">
    <div>
        <ul>
            {#each colors as color(color.id)}
                <li><button>{color.color}</button></li>
            {/each}
        </ul>
    </div>
</div>

<style>

</style>