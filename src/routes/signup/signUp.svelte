<script lang="ts">
    let newUser = $state({name: "", username: "", password: ""})
</script>

<form>
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
    </div>
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
    </div>
    <div>
        <button>Sign Up</button>
        <button>Reset</button>
    </div>
</form>

<style></style>