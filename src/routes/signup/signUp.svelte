<script lang="ts">
	import { addUser, findUser } from "./users.svelte";



/**
 * REP: I
*/
let input = $state({
    name: "", username: '', password: '', error: '',
})

//functions
function handleSubmit() {
    checkErrors()
    if (input.error === ""){
        addUser({
            name: input.name,
            username: input.username,
            password: input.password,
        })
    }
}
function checkErrors() {
    switch(true){
        case input.username === '' && input.password ==='':
            return input.error = "username and password are required"
        case input.username === '':
            return input.error = "username is required"
        case input.username === '' && input.password ==='':
            return input.error = "password is required"
        case !findUser(input.username):
            return input.error = "username already exists"
        default:
            return input.error = ""
    }
}
function resetInput() {

}
</script>

<form>
    <span>{input.error}</span>
    <span>
        <label for="name">Name</label>
        <input name="name" id="name" type="text" bind:value={input.name} />
    </span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="text" bind:value={input.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={input.password} />
    </span>
    <div>
        <button type="submit">Sign Up</button>
        <button type="button">Login</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    button {
        cursor: pointer;
    }

</style>