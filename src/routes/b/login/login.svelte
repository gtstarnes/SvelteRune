<script lang="ts">
	import { users } from "./users";

/**
 * InSTRUCTIONS:
 * Rep: V
 */

//VARIABLES
let {username = $bindable(""), loggedIn = $bindable(false)} = $props() 
let input = $state({
    username: '',
    password: '',
    error: '',
})

//FUNCTIONS
function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (checkErrors()) {
        username = input.username
        loggedIn = true
    }
    resetInputs()
}
function checkErrors() {
    let noError = false
    if (!input.username && !input.password){
        input.error = "USERNAME AND PASSWORD ARE REQUIRED"
    } else if (!input.username){
        input.error = "USERNAME IS REQUIRED"
    } else if (!input.password){
        input.error = "PASSWORD IS REQUIRED"
    } else {
        if (checkUsers()){
            noError = true
            input.error = "" 
        }
    }
    return noError
}
function resetInputs() {
    input.username = ''
    input.password = ''
}
function checkUsers() {
    let status = users.find(user => {
        return user.username === input.username
    })
    if (!status) {
        input.error = "User Not Found"
    } else if (status.password !== input.password) {
        input.error = "Password is incorrect"
    } else {
        input.error = '';
    }
    return status
}
</script>

<div class="container">
    
    <form onsubmit={handleSubmit}>
        <div class="inputBlock">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </div>
        <div class="inputBlock">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" bind:value={input.password} />
        </div>
        <button>Login</button>
        
    </form>
    <div class="error">{input.error}</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    .error {
        color: red;
        font-size: 85%;
        margin-top: 1rem;
    }
    .inputBlock {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    button {
        width: 50%;
        height: 1.5rem;
        cursor: pointer;
        align-self: center;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>