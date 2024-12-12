<script lang="ts">
    interface Details {
        username: string,
        password: string
    }
    let {input = $bindable({username: "", password: ""})}: {input: Details} = $props()
    const submit = (e: Event) => {
        e.preventDefault
    }
</script>

<form onsubmit={submit}>
    <div>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" bind:value={input.username} />
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" bind:value={input.password} />
    </div>
    <button>Login</button>
</form>

<style>

</style>