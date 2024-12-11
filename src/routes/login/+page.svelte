<script lang="ts">
    let newDetails = $state({username: "", password: ""});
</script>

<form>
    <div>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" />
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" />
    </div>
    <button>Login</button>
</form>

<style>

</style>