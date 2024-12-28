<script lang="ts">
/**
 * InSTRUCTIONS:
 * Rep: 4
 */
let {username = $bindable(), loggedIn = $bindable()} = $props() 

</script>

<div>
    <form>
        <div class="inputBlock">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
        </div>
        <div class="inputBlock">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>
        <button>Login</button>
    </form>
</div>

<style>

</style>