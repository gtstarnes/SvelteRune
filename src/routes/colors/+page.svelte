<script lang="ts">
	import { colors } from "./colors";
</script>

<div class="container">
    {#each colors as color (color.id)}
        <div style={`background-color: ${color.color}`}
            class="color"></div>
    {/each}
</div>

<style>
    .color {
        height: 6rem;
        width: 5rem;
    }
</style>