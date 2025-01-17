<script lang="ts">
	import { togglePortal } from "./users.svelte";



    /**
     * REP: I
    */


</script>

<form>
    <span>
        <label for="username">Username:</label>
        <input name="username" id="username" type="text"/>
    </span>
    <span>
        <label for="password">Password:</label>
        <input name="password" id="password" type="password"/>
    </span>
    <div>
        <button type="submit">Log In</button>
        <button type="button" onclick={togglePortal}>Sign Up</button>
    </div>
</form>


<style>

</style>