<script lang="ts">
//VARIABLES
    let {username = $bindable(""), loggedIn = $bindable(false)}: {
        username: string,
        loggedIn: boolean
    } = $props()
    let password = $state("")
    let error = $state("")
</script>

<div>
    <form>
        <span>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" bind:value={username} />
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" bind:value={password} />
        </span>
        <div>{error}</div>
        <button>Submit</button>
    </form>
</div>

<style>

</style>