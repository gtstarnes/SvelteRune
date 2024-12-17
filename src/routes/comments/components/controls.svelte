<script lang="ts">
	import { add } from "./comments.svelte";


//VARIABLES
    let input = $state("")
    let error = $state("")

//FUNCTIONS
    const addComment = () => {
        if (!checkError()) {
            add(input)
        }
        input = ""
    }

    const checkError = () => {
        let err;
        if (input === '') {
            err = true
            error = "Comment cannot be empty"
        } else {
            err = false
            error = ""
        }
        return err
    }
</script>

<div>
    <input type="text" placeholder="add comment" bind:value={input} />
    <button onclick={() => addComment()}>Add Comment</button>
</div>
<div>{error}</div>

<style>

</style>