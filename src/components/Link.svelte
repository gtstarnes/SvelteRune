<script lang="ts">
    const {text = "text", href = "#"} = $props()
</script>

<button>
    <a href={href}>{text}</a>
</button>

<style>
    a {
       text-decoration: none; 
       color: black;
    }
    button {
        height: 3rem;
        width: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>