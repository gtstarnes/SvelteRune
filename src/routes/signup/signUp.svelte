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
let {
username = $bindable(''), 
loggedIn = $bindable(false), 
portal = $bindable(false)
} = $props();

//functions
function handleSubmit(e: SubmitEvent){

    resetDetails();
}
function checkErrors(){

}
function resetDetails() {
    details.name = ''
    details.username = ''
    details.password = ''
}
</script>

<form>
    <span>{details.error}</span>
    <span>
        <label for="name">Name</label>
        <input name="name" id="name" type="" bind:value={details.name} />
    </span>
    <span>
        <label for="username">Username</label>
        <input name="username" id="username" type="username" bind:value={details.username} />
    </span>
    <span>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" bind:value={details.password} />
    </span>
    <div class="controls">
        <button>Submit</button>
        <button>Login</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 50vw;
    }
    button {
        width: 49.5%;
        cursor: pointer;
    }
    span {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.35rem;
    }
    input {
        width: 80%;
    }

    .controls{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

</style>