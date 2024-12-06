<script lang="ts">
//IMPORTS
	import Area from "../../components/Area.svelte";

//VARIABLES
    let height = $state(0);
    let width = $state(0);
</script>

<div>
    <h3>Enter Height and Width</h3>
    <div>
        <label for="height">Height: </label>
        <input type="number" id="height" bind:value={height} />
        <label for="width">Width: </label>
        <input type="number" id="width" bind:value={width}/>
    </div>
    <Area {height} {width} />
</div>

<style>

</style>