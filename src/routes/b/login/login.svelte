<script lang="ts">
	import { users } from "./users";

/**
 * InSTRUCTIONS:
 * Rep: IV
 */

//variables
let {username = $bindable(null), loggedIn = $bindable(false)} = $props();
let details = $state({
    username: '',
    password: '',
    error: '',
})
</script>

<div>
    <form>
        <span>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" />
        </span>
        <span>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" />
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>

</style>