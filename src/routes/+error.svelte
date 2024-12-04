<script lang="ts">
//IMPORTS
    import { page } from "$app/stores";
</script>


<h2>ENHANCE YOUR CALM</h2>
<div>This <span>{$page.status}</span> error occured:</div>
<p>{$page.error?.message}</p>

<style>
    span {
        font-size: 2rem;
        color:aqua
    }
    p {
        font-size: 4rem;
    }
</style>
