<script lang="ts">

//VARIABLE
    let {username = $bindable("")} = $props(); 
    let input = $state({
        username: "",
        password: "",
    })

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        username = input.username
        input = {
            username: "",
            password: "",
        }
    }
</script>

<div>
    <form onsubmit={handleSubmit}>
        <div>
            <label for="username">Username: </label>
            <input id="username" name="username" type="type" bind:value={input.username} />
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" bind:value={input.password} />
        </div>
        <button>Login</button>
    </form>
</div>

<style>

</style>