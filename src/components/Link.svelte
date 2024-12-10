<script lang="ts">
    const {text = "text", href = "#"} = $props()
</script>

<button>
    <a href={href}>{text}</a>
</button>

<style>

</style>