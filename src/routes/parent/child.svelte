<script lang="ts">
    let {count} = $props();
</script>

<button onclick={()=>count++}>
    child: {count}
</button>


<style>

</style>