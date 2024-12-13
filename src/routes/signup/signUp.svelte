<script lang="ts">
    let newUser = $state({name: "", username: "", password: ""})
</script>

<form>
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" bind:value={newUser.name}   />
    </div>
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" bind:value={newUser.username} required />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" bind:value={newUser.password} required />
    </div>
    <div>
        <button>Sign Up</button>
        <button>Reset</button>
    </div>
</form>

<style></style>