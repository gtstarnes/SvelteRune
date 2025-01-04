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
    <span>{details.error}</span>
    <span>
        <label for="name">Name</label>
        <input name="name" id="name" type="" bind:value={details.name} />
    </span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="username" bind:value={details.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={details.password} />
    </span>
    <div>
        <button>Submit</button>
        <button>Login</button>
    </div>
</form>

<style>
 
</style>