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
                    <div class="color" style={`background-color: ${color.color}`}>{color.color}</div>
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
    ul{
        display: flex;
        list-style: none;
    }
    .color {
        width: 4rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }


</style>