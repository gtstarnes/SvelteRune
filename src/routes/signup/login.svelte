<script lang="ts">
	import { checkErrors, toggleLogIn, togglePortal } from "./users.svelte";



    /**
     * REP: I
    */
    let {username = $bindable()} = $props();
    let details = $state({
        username: '',
        password: '',
        error: ''
    })

    function handleSubmit(e: SubmitEvent){
        e.preventDefault
        details.error = checkErrors(details.username, details.password);
        if (details.error === ''){
            username = details.username
            toggleLogIn();
        }
    }

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