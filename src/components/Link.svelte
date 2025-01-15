<script lang="ts">
    const {text = "text", href = "#"} = $props()
</script>


<button>
    <a href={href}>{text}</a>
</button>


<style>
    button {
        height: 3rem;
        width: 6rem;
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid;
        border-image: linear-gradient(to right, rgb(42, 94, 235), blueviolet) 1;
    }
    a {
        text-decoration: none;
        color: whitesmoke
    }
</style>