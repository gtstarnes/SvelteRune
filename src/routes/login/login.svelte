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
    let password = $state("")
    let error = $state("")

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            
        }
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