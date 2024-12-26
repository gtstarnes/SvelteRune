<script lang="ts">
/**
 * InSTRUCTIONS:
 * Rep: 3
 */

 //VARIABLES
let {username = $bindable(""), loggedIn = $bindable(false)} = $props();
let input = $state({
    username: '',
    password: '',
    error: ''
})
</script>

<div class="container">
    <form>
        <span>{input.error}</span>
        <span>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" />
        </span>
        <span>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
        </span>
        <button type="submit">Login</button>
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