<script lang="ts">
//IMPORTS
    import { page } from "$app/stores";
</script>


<h2>ENHANCE YOUR CALM</h2>
<div>This {$page.status} error occured:</div>
<p>{$page.error?.message}</p>

<style>

</style>
