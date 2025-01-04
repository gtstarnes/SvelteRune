<script lang="ts">
	import { addUser, checkUsers } from "./users.svelte";

/**
 * REP: I
*/
let details = $state({
    name: '',
    username: '',
    password: '',
    error: '',
})
let {
username = $bindable(''), 
loggedIn = $bindable(false), 
portal = $bindable(false)
} = $props();

//functions
function handleSubmit(e: SubmitEvent){
    if (!checkErrors()){
        addUser({
          name: details.name,
          username: details.username,
          password: details.password
        })
        username = details.username
        loggedIn = true;
    }
    resetDetails();
}
function checkErrors(){
    let err = true;
    if (details.username === '' && details.password ===''){
        details.error = 'username and password are required'
    } else if (details.username === ''){
        details.error = 'password is required'
    } else if (details.password === ''){
        details.error = 'username is required'
    } else if (checkUsers(details.username)){
        details.error = 'username already exists'
    } else {
        err = false;
        details.error = '';
    }
    return err
}
function resetDetails() {
    details.name = ''
    details.username = ''
    details.password = ''
}
</script>

<form onsubmit={handleSubmit}>
    <span>{details.error}</span>
    <span>
        <label for="name">Name</label>
        <input name="name" id="name" type="" bind:value={details.name} />
    </span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="username" bind:value={details.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={details.password} />
    </span>
    <div class="controls">
        <button type="submit">Submit</button>
        <button type="button">Login</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 50vw;
    }
    button {
        width: 49.5%;
        cursor: pointer;
    }
    span {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.35rem;
    }
    input {
        width: 80%;
    }

    .controls{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

</style>