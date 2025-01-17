<script lang="ts">
/**
 * REP: I
*/

let details = $state({
    name: '',
    username: '',
    password: '',
    error: '',
})

</script>

<form>
    <span>
        <label for="name">Name: </label>
        <input name='name' id='name' type='text' bind:value={details.name} />
    </span>
    <span>
        <label for="username">Username: </label>
        <input name='username' id='username' type='text' bind:value={details.username} />
    </span>
    <span>
        <label for="password">Password: </label>
        <input name='password' id='password' type='password' bind:value={details.password} />
    </span>
    <div>{details.error}</div>
    <div>
        <button type="submit">Sign Up</button>
        <button type="button">Log In</button>
    </div>
</form>

<style>

</style>