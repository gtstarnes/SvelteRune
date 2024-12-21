<script lang="ts">
/**
 * Rep: 2
*/
	import Login from "./login.svelte";

//VARIABLES
    let username = $state('');
    let loggedIn = $state(false);

</script>

<div>
    <Login bind:username bind:loggedIn />
</div>


<style>

</style>