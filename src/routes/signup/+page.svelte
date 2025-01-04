<script lang="ts">
/**
 * REP: I
*/

	import Login from "./login.svelte";
	import SignUp from "./signUp.svelte";
	import { getUsers } from "./users.svelte";

const users = $derived(getUsers())
</script>

<div class="container">
    <Login />
    <SignUp />
    
</div>

<style>

</style>