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
        <input name='name' id='name' type='text' />
    </span>
    <span>
        <label for="username">Username: </label>
        <input name='username' id='username' type='text' />
    </span>
    <span>
        <label for="password">Password: </label>
        <input name='password' id='password' type='password' />
    </span>
    <div>
        <button type="submit">Sign Up</button>
        <button type="button">Log In</button>
    </div>
</form>

<style>

</style>