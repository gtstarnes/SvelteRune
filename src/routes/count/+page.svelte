<script lang="ts">
/**
 * REP: 8
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 *      commit after task blocks
 */

//VARIABLES
let count = $state(0)
</script>

<div class="container">
    <span>{count}</span>
    <div>
        <button>+</button>
        <button>Reset</button>
        <button>-</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
</style>