<script lang="ts">
let {height = 0, width = 0} = $props();
let areaSq = $derived(height * width)
let areaTri = $derived((height*width) / 2)
</script>


<div>
    <div>Square: {areaSq}</div>
    <div>Triangle: {areaTri}</div>
</div>


<style>

</style>