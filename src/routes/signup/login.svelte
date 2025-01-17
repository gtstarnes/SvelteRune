<script lang="ts">
	import { togglePortal } from "./users.svelte";



    /**
     * REP: I
    */

    let details = $state({
        username: '',
        password: '',
        error: ''
    })

</script>

<form>
    <span>
        <label for="username">Username:</label>
        <input name="username" id="username" type="text" bind:value={details.username}/>
    </span>
    <span>
        <label for="password">Password:</label>
        <input name="password" id="password" type="password" bind:value={details.password}/>
    </span>
    <div>{details.error}</div>
    <div>
        <button type="submit">Log In</button>
        <button type="button" onclick={togglePortal}>Sign Up</button>
    </div>
</form>


<style>

</style>