<script lang="ts">
let {height, width} = $props();
let area = $derived(height * width)
</script>


<div>
    {area}
</div>


<style>

</style>