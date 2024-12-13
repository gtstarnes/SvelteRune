<script lang="ts">
	import { users } from "./users.svelte";

    let newUser = $state({name: "", username: "", password: ""})

    const handleSubmit = (e: Event) => {
        e.preventDefault
        users.push(newUser)
        newUser = {name: "", username: "", password: ""}
    }

    const reset = () => {
        newUser = {name: "", username: "", password: ""}
    }
</script>

<form onsubmit={handleSubmit}>
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
        <button onclick={reset}>Reset</button>
    </div>
</form>

<style></style>