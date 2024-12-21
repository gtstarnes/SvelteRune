<script lang="ts">
    let {username = $bindable(""), loggedIn = $bindable(false)} = $props();
    let input = $state({username: '', password: '', error: ''});

</script>

<div>
    <form>
        <span>
            <label for="Username">Username: </label>
            <input type="text" id="username" name="username" />
        </span>
        <span>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" />
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>

</style>