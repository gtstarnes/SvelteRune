<script lang="ts">
/**
 * InSTRUCTIONS:
 * Rep: 4
 */
let {username = $bindable(), loggedIn = $bindable()} = $props() 
let input = $state({
    username: '',
    password: '',
    error: '',
})

</script>

<div>
    <form>
        <div class="inputBlock">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" bind:value={input.username} />
        </div>
        <div class="inputBlock">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" bind:value={input.password} />
        </div>
        <div>{input.error}</div>
        <button>Login</button>
    </form>
</div>

<style>

</style>