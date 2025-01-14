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
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
</style>