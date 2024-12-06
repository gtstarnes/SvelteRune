<script lang="ts">
let {height = 0, width = 0} = $props();
let area = $derived(height * width)
</script>


<div>
    {area}
</div>


<style>

</style>