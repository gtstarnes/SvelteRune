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
                <li><button style={`background-color: ${color.color}`}>{color.color}</button></li>
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
    ul {
        list-style: none;
        display: flex;
        gap: 4px;
    }
    button {
        height: 7rem;
        width: 5rem;
        padding: 1rem;
        border:none;
        text-align: center;
        cursor: pointer;
    }
</style>