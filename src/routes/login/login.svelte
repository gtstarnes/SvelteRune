<script lang="ts">

//VARIABLE
    let {username = $bindable(""), password = ""} = $props(); 
</script>

<form>
    <div>
        <label for="username">Username: </label>
        <input id="username" name="username" type="type" bind:value={username} />
    </div>
    <div>
        <label for="password">Password:</label>
        <input id="password" name="password" type="password" bind:value={password} />
    </div>
    <button>Login</button>
</form>

<style>

</style>