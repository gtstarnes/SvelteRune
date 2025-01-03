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

//FUNCTIONS
function handleSubmit(e: SubmitEvent) {
    e.preventDefault
    resetForm()
}
function checkError(){

}
function checkUsers(){

}
function resetForm(){
    details = {
        ...details,
        name: '',
        username: '',
        password: '',
    }
}
</script>

<form onsubmit={handleSubmit}>
    <span>
        <label for="name">Name</label>
        <input bind:value={details.name} id="name" name="name" type="text" />
    </span>
    <span>
        <label for="username">Username</label>
        <input bind:value={details.username} id="username" name="username" type="text" placeholder="(required)" />
    </span>
    <span>
        <label for="password">Password</label>
        <input bind:value={details.password} id="password" name="password" type="password" placeholder="(required)" />
    </span>
    <button>Sign Up</button>
</form>

<style></style>