<script lang="ts">
    let {count = $bindable()} = $props()
</script>

<button onclick={()=>count++}>
    child: {count}
</button>


<style>

</style>