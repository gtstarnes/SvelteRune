<script lang="ts">
//VARIABLES
    let {username = $bindable(""), loggedIn = $bindable(false)}: {
        username: string,
        loggedIn: boolean
    } = $props()
</script>

<div>
    <form>
        <span>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" />
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" />
        </span>
        <button>Submit</button>
    </form>
</div>

<style>

</style>