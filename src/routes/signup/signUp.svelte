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
function handleSubmit() {

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

<form>
    <span>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" />
    </span>
    <span>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" placeholder="(required)" />
    </span>
    <span>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="(required)" />
    </span>
    <button>Sign Up</button>
</form>

<style></style>