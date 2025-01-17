<script lang="ts">
	import { addUser, checkSignUpErrors, toggleLogIn, togglePortal } from "./users.svelte";

/**
 * REP: II
*/

let {username = $bindable()} = $props();
let details = $state({
    name: '',
    username: '',
    password: '',
    error: '',
})

function handleSubmit(e: SubmitEvent) {
    e.preventDefault
    details.error = checkSignUpErrors(details.username, details.password)
    if (details.error === ''){
        const newUser = {
            name: details.name,
            username: details.username,
            password: details.password,
        }
        addUser(newUser);
        username = details.username
        toggleLogIn();
    }
}
function handleChange() {
    details.error = '';
}

</script>

<form onsubmit={handleSubmit} onchange={handleChange}>
    <span>
        <label for="name">Name: </label>
        <input name='name' id='name' type='text' bind:value={details.name} />
    </span>
    <span>
        <label for="username">Username: </label>
        <input name='username' id='username' type='text' bind:value={details.username} />
    </span>
    <span>
        <label for="password">Password: </label>
        <input name='password' id='password' type='password' bind:value={details.password} />
    </span>
    <div>{details.error}</div>
    <div>
        <button type="submit">Sign Up</button>
        <button type="button" onclick={togglePortal}>Log In</button>
    </div>
</form>

<style>

</style>