<script lang="ts">
	import { checkLoginErrors, toggleLogIn, togglePortal } from "./users.svelte";



    /**
     * REP: II
    */
    let {username = $bindable()} = $props();
    let details = $state({
        username: '',
        password: '',
        error: ''
    })

    function handleSubmit(e: SubmitEvent){
        e.preventDefault
        details.error = checkLoginErrors(details.username, details.password);
        if (details.error === ''){
            username = details.username
            toggleLogIn();
        }
    }
    function handleChange() {
        details.error = ''
    }

</script>

<form onsubmit={handleSubmit} onchange={handleChange}>
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
        <button type="button" onclick={() => togglePortal('signup')}>Sign Up</button>
    </div>
</form>


<style>

</style>