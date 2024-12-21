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

</script>

<div>
    <form>
        <span>
            <label for="Username">Username: </label>
            <input type="text" id="username" 
                name="username" bind:value={input.username} />
            <span>{input.userError}</span>
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" 
                name="password" bind:value={input.password} />
            <span>{input.passError}</span>
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>

</style>