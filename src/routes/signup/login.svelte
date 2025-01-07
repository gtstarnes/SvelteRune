<script lang="ts">
	import { findUser } from "./users.svelte";

    /**
     * REP: I
    */

let {portal = $bindable()} = $props()
let input = $state({
    username: '',
    password: '',
    error: '',
})
function togglePortal() {
    portal = false
}

function handleSubmit(e: SubmitEvent){
    e.preventDefault
    checkErrors()
    if (input.error = ''){

    }
    resetInput()
}
function checkErrors(){
    switch(true){
        case input.username === '' && input.password === '':
            return input.error = 'username and password are required' 
        case input.username === '':
            return input.error = 'username is required'
        case input.password === '':
            return input.error = 'password is required'
        case !findUser(input.username):
            return input.error = 'username not found'
        default:
            input.error = ''
    }
}
function resetInput(){
    input.username = ''
    input.password = ''
}
</script>

<form>
    <span>{input.error}</span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="text" bind:value={input.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={input.password} />
    </span>
    <div>
        <button type="submit">Login</button>
        <button type="button" onclick={togglePortal}>Signup</button>
    </div>
</form>


<style>

</style>