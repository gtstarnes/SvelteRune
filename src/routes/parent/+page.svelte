<script lang="ts">
	import Parent from "./parent.svelte";
    let {count = $bindable(0)} = $props()
</script>

<div>
    <div>
        Parent: {count}
    </div>
    <div>
        Child: 
    </div>
    <Parent {count} />
</div>

<style>

</style>