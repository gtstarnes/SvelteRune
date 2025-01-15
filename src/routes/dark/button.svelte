<script lang="ts">
/**
 * REP: !
 */

 const toggle = () => {
    document.querySelector("body")?.classList.toggle("dark-mode")
 }

</script>

<button onclick={toggle}>(=)</button>

<style>
    button {
        background-color: inherit;
        color: inherit;
        border:none;
        cursor: pointer;
    }
</style>