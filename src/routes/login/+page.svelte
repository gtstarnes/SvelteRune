<script lang="ts">
	import Login from "./login.svelte";

    let {username, loggedIn} = $state({username:"", loggedIn: false})

</script>

<div>
    <Login bind:username  bind:loggedIn/>
</div>


<style>

</style>