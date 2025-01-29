<script lang="ts">
/**
 * REP: III
 */

let toggle = $state<boolean>(false)

    function toggleDark() {
        toggle = !toggle;
        document.body.classList.toggle("dark-mode")
    }

</script>



<style>

</style>