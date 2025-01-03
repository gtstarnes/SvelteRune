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

//functions
function handleLogin(e: SubmitEvent) {
    e.preventDefault
    if (!checkError() && !checkUsers()){
        username = details.username
        loggedIn = true
    }
    resetForm();
}
function checkError(){
    let err = true
    if (details.username === "" && details.password === ''){
        details.error = "username and password are required"
    } else if (details.username === ""){
        details.error = 'username is required'
    } else if (details.password === ""){
        details.error = "password is required"
    } else {
        err = false;
        details.error = ''
    }
    return err
}
function checkUsers(){
    let err = true
    const found = users.find(user => {
        return user.username === details.username
    })
    if (!found){
        details.error = "user does not exist"
    } else if (found.password !== details.password){
        details.error = "password does not match"
    } else {
        err = false
    }
    return err
}
function resetForm(){
    details.username = ''
    details.password = ''
}
</script>

<div class='container'>
    <form onsubmit={handleLogin}>
        <span class="error">{details.error}</span>
        <span class="inputs">
            <label for="username">Username</label>
            <input id="username" name="username" type="text" bind:value={details.username} />
        </span>
        <span class="inputs">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" bind:value={details.password} />
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
</style>