<script lang="ts">
//VARIABLES
    let {
        username = $bindable(""),
        loggedIn = $bindable(false)
    } = $props()
    let input = $state({
        username: '', password: '', 
        userError: '', passError:'',
    })

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        if (!handleError()) {
            username = input.username
            loggedIn = true
        }
        input = {...input, username: '', password: ''}
    }

    const handleError = () => {
        let err = true
        if (input.username === '' && input.password === '') {
            input.userError = "Username is required"
            input.passError = "Password is required"
        } else if (input.username === '') {
            input.userError = "Username is required"
            input.passError = ""
        } else if (input.password === '') {
            input.passError = "Password is required"
            input.userError = ""
        } else {
            input.userError = ""
            input.passError = ""
            err = false
        }
        return err;
    }

</script>

<div>
    <form onsubmit={handleSubmit}>
        <span class="inputContainer">
            <span>
                <label for="Username">Username: </label>
                <input type="text" id="username" 
                    name="username" bind:value={input.username} />
            </span>
            <span>{input.userError}</span>
        </span>
        <span class="inputContainer">
            <span>
                <label for="password">Password: </label>
                <input type="password" id="password" 
                    name="password" bind:value={input.password} />
            </span>
            <span>{input.passError}</span>
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>
    .inputContainer {
        display: flex;
        flex-direction: column;
    }
    form {
        display: flex;
    }
</style>