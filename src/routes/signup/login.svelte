<script lang="ts">
    /**
     * REP: I
    */

let {portal = $bindable()} = $props()
let input = $state({
    username: '',
    password: '',
    error: '',
})
function togglePortal() {
    portal = false
}

function handleSubmit(){

}
function checkErrors(){

}
function resetInput(){

}
</script>

<form>
    <span>{input.error}</span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="text" bind:value={input.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={input.password} />
    </span>
    <div>
        <button type="submit">Login</button>
        <button type="button" onclick={togglePortal}>Signup</button>
    </div>
</form>


<style>

</style>