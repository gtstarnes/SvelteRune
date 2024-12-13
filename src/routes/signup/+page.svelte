<script lang="ts">
	import SignUp from "./signUp.svelte";
	import { users } from "./users.svelte";

</script>

<div>
    <SignUp />
    <div>
        {#if users.length === 0}
            <div>There are no users</div>
        {:else}
            <div>
                {#each users as user (user.username)}
                    <div>{user.username}</div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style></style>