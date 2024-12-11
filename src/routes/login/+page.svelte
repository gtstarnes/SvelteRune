<script lang="ts">
	import Login from "./login.svelte";

    let details = $state({username: '', password:''})
</script>

<div>

    <Login  bind:input={details} />
</div>

<style>

</style>