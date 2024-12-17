<script lang="ts">
	import { add } from "./comments.svelte";


//VARIABLES
    let input = $state("")
    let error = $state("")

//FUNCTIONS
    const addComment = () => {
        if (!checkError) {
            add(input)
        }
        input = ""
    }

    const checkError = () => {
        
    }
</script>

<div>
    <input type="text" placeholder="add comment" bind:value={input} />
    <button>Add Comment</button>
</div>
<div>{error}</div>

<style>

</style>