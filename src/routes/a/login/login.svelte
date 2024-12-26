<script lang="ts">
/**
 * InSTRUCTIONS:
 * Rep: 4
 */

 //VARIABLES
let {username = $bindable(""), loggedIn = $bindable(false)} = $props();
let input = $state({
    username: '',
    password: '',
    error: ''
})

function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if(isError()){
        username = input.username
        loggedIn = true
    }
    resetInput()
}
function isError() {
    let safe = false
    if (input.username === '' && input.password === ''){
        input.error = 'Username and Password are required'
    } else if (input.username === ''){
        input.error = 'Username is required'
    } else if (input.password === ''){
        input.error = 'Password is required'
    } else {
        input.error = ''
        safe = true
    }
    return safe
}
function resetInput() {
    input.username = ''
    input.password = ''
}
</script>

<div class="container">
    <form onsubmit={handleSubmit}>
        <span>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </span>
        <span>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" bind:value={input.password} />
        </span>
        <button type="submit">Login</button>
        <span>{input.error}</span>
    </form>
    
</div>

<style>
    .container {
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>