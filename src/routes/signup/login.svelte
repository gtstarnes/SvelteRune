<script lang="ts">
	import { checkUsers } from "./users.svelte";


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
    function handleSubmit(e: SubmitEvent){
        e.preventDefault
        if (!checkErrors()){
            username = input.username
            loggedIn = true
        }
        resetInput();
    }
    function checkErrors(){
        let err = true
        switch(true){
            case input.username === '' && input.password === '':
                input.error = 'username and password are required'
                break
            case input.username === '':
                input.error = 'password is required'
                break
            case input.password === '':
                input.error = 'username is required'
                break
            case !checkUsers(input.username):
                input.error = 'user was not found'
                break   
            default:
                input.error = ''
                err = false
        }
        return err
    }
    function resetInput(){
        input.username = ''
        input.password = ''
    }
    function togglePortal(){
        portal = false
    }
</script>

<form onsubmit={handleSubmit}>
    <span>{input.error}</span>
    <span>
        <label for="username">Username</label>
        <input id='username' name='username' type='' bind:value={input.username}  />
    </span>
    <span>
        <label for="password">Password</label>
        <input id='password' name='password' type='password' bind:value={input.password}  />
    </span>
    <div class="controls">
        <button type="submit">Log In</button>
        <button onclick={togglePortal} type="button">Sign Up</button>
    </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 50vw;
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 70%;
    margin-bottom: 0.25rem;
  }
  button {
    width: 49.5%;
    cursor: pointer;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>