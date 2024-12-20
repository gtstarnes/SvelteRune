<script lang="ts">
	import { VSCODE_HANDLES_UNCAUGHT_ERRORS } from "$env/static/private";

//VARIABLES
    let {username = $bindable(""), loggedIn = $bindable(false)}: {
        username: string,
        loggedIn: boolean
    } = $props()
    let input = $state({
        username: "",
        password: ""
    })
    let password = $state("")
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

    }
</script>

<div>
    <form>
        <span>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" bind:value={input.password} />
        </span>
        <div>{error}</div>
        <button>Submit</button>
    </form>
</div>

<style>

</style>