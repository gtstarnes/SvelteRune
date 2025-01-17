<script lang="ts">


    /**
     * REP: I
    */
    let {loggedIn = $bindable(false)} = $props();

</script>

<form>
    <span>
        <label for="username">Username:</label>
        <input name="username" id="username" type="text"/>
    </span>
    <span>
        <label for="password">Password:</label>
        <input name="password" id="password" type="password"/>
    </span>
    <div>
        <button type="submit">Log In</button>
        <button type="button">Sign Up</button>
    </div>
</form>


<style>

</style>