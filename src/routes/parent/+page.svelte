<script lang="ts">
	import Parent from "./parent.svelte";

    let count = $state(0)
</script>

<div>
    <div>
        Parent: {count}
    </div>
    <div>
        Child:
    </div>
    <Parent bind:count={count} />
</div>

<style>

</style>