<script lang="ts">
	import { users } from "./users";

/**
 * InSTRUCTIONS:
 * Rep: IV
 */

//variables
let {username = $bindable(''), loggedIn = $bindable(false)} = $props();
let details = $state({
    username: '',
    password: '',
    error: '',
})
</script>

<div>
    <form>
        <span>{details.error}</span>
        <span>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" bind:value={details.username} />
        </span>
        <span>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" bind:value={details.password} />
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>

</style>