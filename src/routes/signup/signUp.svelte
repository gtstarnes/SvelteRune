<script lang="ts">
	import { getUsers, addUser } from "./users.svelte";

/**
 * REP: I
*/
let details = $state({
    name: '',
    username: '',
    password: '',
    error: '',
})
const users = $derived(getUsers());


//FUNCTIONS
function handleSubmit(e: SubmitEvent) {
    e.preventDefault
    if (!checkError() && !checkUsers()){
        const newUser  = {username: details.username, name: details.name, password: details.password}
        addUser(newUser);
    }
    resetForm()
}
function checkError(){
    let err = true

    if (details.username === '' && details.password === ''){
        details.error = 'cannot submit empty form'
    } else if (details.username === ''){
        details.error = 'username is required'
    } else if (details.password === ''){
        details.error = 'password is required'
    } else {
        err = false;
        details.error = '';
    }

    return err
}
function checkUsers(){
    let err = true
    const found = users.find(user => {
        return user.username === details.username
    })
    if (!found) {
        err = false
        details.error = "username already exists"
    }
    return err
}
function resetForm(){
 details.name = details.username = details.password = ''
}
</script>

<form onsubmit={handleSubmit}>
    <span>{details.error}</span>
    <span>
        <label for="name">Name</label>
        <input bind:value={details.name} id="name" name="name" type="text" />
    </span>
    <span>
        <label for="username">Username</label>
        <input bind:value={details.username} id="username" name="username" type="text" placeholder="(required)" />
    </span>
    <span>
        <label for="password">Password</label>
        <input bind:value={details.password} id="password" name="password" type="password" placeholder="(required)" />
    </span>
    <button type="submit">Sign Up</button>
</form>

<style></style>