<script lang="ts">
    let {count = $bindable()} = $props()
</script>

<button onclick={()=>count++}>
    Count (child): {count}
</button>


<style>

</style>