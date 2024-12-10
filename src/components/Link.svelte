<script lang="ts">
    const {text = "text", href = "#"} = $props()
</script>


<a href={href}>{text}</a>


<style>
    a {
        text-decoration: none; 
        color: black;
        height: 3rem;
        width: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: grey;
    }
</style>