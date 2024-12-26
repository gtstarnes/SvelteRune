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

function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

}
function isError() {
    let safe = true
    return safe
}
</script>

<div class="container">
    <form>
        <span>{input.error}</span>
        <span>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </span>
        <span>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" bind:value={input.password} />
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