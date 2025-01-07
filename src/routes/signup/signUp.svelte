<script lang="ts">


/**
 * REP: I
*/
let input = $state({
    name: "", username: '', password: '', error: '',
})
</script>

<form>
    <span></span>
    <span>
        <label for="name">Name</label>
        <input name="name" id="name" type="text" />
    </span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="text" />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" />
    </span>
    <div>
        <button type="submit">Sign Up</button>
        <button type="button">Login</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    button {
        cursor: pointer;
    }

</style>