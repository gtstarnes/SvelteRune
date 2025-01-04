<script lang="ts">

    //VARIABLES
    let  {username = $bindable(''), 
    loggedIn = $bindable(false),
    portal = $bindable(true)} = $props();
    let input = $state({
        username: '',
        password: '',
        error: ''
    })

    //functions
    function handleSubmit(){

    }
    function checkErrors(){

    }
    function resetInput(){

    }
    function togglePortal(){
        portal = false
    }
</script>

<form>
    <span>{input.error}</span>
    <span>
        <label for="username">Username</label>
        <input id='username' name='username' type='' bind:value={input.username}  />
    </span>
    <span>
        <label for="password">Password</label>
        <input id='password' name='password' type='password' bind:value={input.password}  />
    </span>
    <div>
        <button>Log In</button>
        <button onclick={togglePortal}>Sign Up</button>
    </div>
</form>

<style>

</style>