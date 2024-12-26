<script lang="ts">
/**
 * Rep: 3
*/

	import Login from "./login.svelte";

//VARIABLES
let {username, loggedIn} = $state({
    username: '',
    loggedIn: false,
})
</script>

<div>
    <Login bind:username bind:loggedIn />
</div>


<style>

</style>