<script lang="ts">
//TYPES
    interface Details {
        username: string,
        password: string
    }
//VARIABLES
    let input = $state<Details>({username: '', password: ''})
    let {details = $bindable({username: "", password: ""})}: {details: Details} = $props()
//FUNCTIONS
    const submit = (e: Event) => {
        e.preventDefault
        details = {...input}
        input = {username: '', password: ''}
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