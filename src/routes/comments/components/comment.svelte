<script lang="ts">
const {text, likes}: {text: string, likes: number} = $props();
</script>

<div>
    <div>
        <div>{likes}</div>
        <button>Like</button>
    </div>
    <div>{text}</div>
</div>

<style>
    
</style>