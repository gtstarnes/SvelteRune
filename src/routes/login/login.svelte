<script lang="ts">
//VARIABLES
    let {username = $bindable(""), loggedIn = $bindable(false)}: {
        username: string,
        loggedIn: boolean
    } = $props()
    let input = $state({
        username: "",
        password: ""
    })
    let error = $state("")

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        if (input.username !== "" && input.password !== "") {
            username = input.username
            loggedIn = true
            error = ""
        } else {
            handleError()
        }
        input = {username: '', password: ''}
    }

    const handleError = () => {
        if (input.username === '' && input.password === ''){
            error = "Username and password are required"
        } else if (input.username === ""){
            error = "Username is required"
        } else {
            error = "Password is required"
        }
    }
</script>

<div>
    <form onsubmit={handleSubmit}>
        <span>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" bind:value={input.password} />
        </span>
        <div>{error}</div>
        <button type="submit">Submit</button>
    </form>
</div>

<style>

</style>