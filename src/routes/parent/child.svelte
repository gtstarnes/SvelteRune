<script lang="ts">
    let {count = 0}: {count: number} = $props()
</script>

<button onclick={()=>count++}>
    Count (child): {count}
</button>


<style>

</style>